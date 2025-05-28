# 📺 MyVidCan Backend

Welcome to the backend of **MyVidCan**, a YouTube-inspired video-sharing platform. This backend is built using **Node.js** and **Express.js**, with **MongoDB** as the database. It provides a robust foundation for handling user authentication, video management, and other core functionalities.

---

## 🚀 Features Implemented

- **Express Server Initialization**: Set up an Express server that listens on a specified port, ensuring the application is ready to handle incoming requests.

- **MongoDB Connection**: Established a connection to MongoDB using Mongoose, with error handling to ensure the server only starts if the database connection is successful.

- **Asynchronous Error Handling**: Implemented a utility (`asyncHandler`) to manage errors in asynchronous routes, preventing unhandled promise rejections.

- **Standardized API Responses**: Created an `ApiResponse` utility class to send consistent and structured responses across all API endpoints.

- **Custom Error Handling**: Developed an `ApiError` class to generate and manage custom error messages, enhancing error clarity and debugging.

---

## 📁 Project Structure

<pre lang="markdown"> ```bash backend/ ├── controllers/ # Route handler functions (e.g., userController.js) ├── models/ # Mongoose schemas and models (e.g., userModel.js) ├── routes/ # Express route definitions (e.g., userRoutes.js) ├── utils/ # Utility classes and functions │ ├── asyncHandler.util.js │ ├── ApiResponse.util.js │ └── ApiError.util.js ├── config/ # Configuration files (e.g., db.js for database connection) ├── middleware/ # Custom middleware functions ├── .env # Environment variables ├── .gitignore # Git ignore file ├── package.json # Project metadata and dependencies └── server.js # Entry point of the application ``` </pre>


---

## 🛠️ Technologies Used

- **Node.js**: JavaScript runtime environment for server-side development.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: ODM library for MongoDB, providing schema-based solutions.
- **dotenv**: Module to load environment variables from a `.env` file.
- **Custom Utilities**: `asyncHandler`, `ApiResponse`, and `ApiError` for streamlined development.

---

## 🔧 Setup Instructions

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/sunnyrajendraraj/myvidcan.git
   cd myvidcan/backend
