// Import mongoose and Schema constructor to define schema, and a plugin for pagination
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

// Define the schema for the Video collection
const videoSchema = new Schema(
  {
    // URL of the video file stored on cloud (e.g., Cloudinary)
    videoFile: {
      type: String,
      required: true,
    },
    // URL of the video thumbnail image
    thumbnail: {
      type: String,
      required: true,
    },
    // Title of the video
    title: {
      type: String,
      required: true,
    },
    // Description of the video content
    description: {
      type: String,
      required: true,
    },
    // Duration of the video in seconds or minutes
    duration: {
      type: Number,
      required: true,
    },
    // Number of times the video has been viewed
    views: {
      type: Number,
      default: 0, // Starts with 0 views
    },
    // Flag to determine if the video is published or not
    isPublished: {
      type: Boolean,
      default: true,
    },
    // Reference to the user who uploaded the video
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User", // Links to User model
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Add pagination plugin to support paginated aggregate queries
videoSchema.plugin(mongooseAggregatePaginate);

// Export the Video model to use in other parts of the application
export const Video = mongoose.model("Video", videoSchema);
