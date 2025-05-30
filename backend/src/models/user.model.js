// Import necessary modules: mongoose for MongoDB schema, jwt for token handling, and bcrypt for password hashing
import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Define the user schema structure
const userSchema = new Schema(
  {
    // Unique username for the user, converted to lowercase and trimmed of whitespace
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true, // Allows faster searches by username
    },
    // User's email address, must be unique and lowercase
    email: {
      type: String,
      required: true,
      unique: true,
      lowecase: true, // Typo: should be `lowercase`
      trim: true,
    },
    // User's full name, trimmed and indexed
    fullName: {
      type: String,
      required: true,
      trim: true,
      index: true, // Allows optimized search by full name
    },
    // URL to the user's avatar image (e.g., from Cloudinary)
    avatar: {
      type: String,
      required: true,
    },
    // Optional URL to the user's cover image
    coverImage: {
      type: String,
    },
    // Array of references to video documents the user has watched
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video", // Refers to the "Video" model
      },
    ],
    // User's password (will be hashed before saving)
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    // Refresh token for session management
    refreshToken: {
      type: String,
    },
  },
  {
    // Automatically adds createdAt and updatedAt timestamps
    timestamps: true,
  }
);

// Pre-save middleware to hash the password before saving to the database
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next(); // Skip if password hasn't changed

  this.password = await bcrypt.hash(this.password, 10); // Hash the password with salt rounds = 10
  next(); // Continue with saving
});

// Method to compare input password with the hashed password stored in DB
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); // Returns true/false
};

// Method to generate a new JWT access token with user info
userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
      fullName: this.fullName,
    },
    process.env.ACCESS_TOKEN_SECRET, // Secret key from env variables
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY, // Token expiry time from env
    }
  );
};

// Method to generate a refresh token for renewing access tokens
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      _id: this._id, // Only user ID is stored in refresh token
    },
    process.env.REFRESH_TOKEN_SECRET, // Secret key for refresh tokens
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY, // Refresh token expiry
    }
  );
};

// Export the User model based on the schema
export const User = mongoose.model("User", userSchema);
