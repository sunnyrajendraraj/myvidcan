// ApiError is a custom error class that extends the built-in Error class
// It helps in creating consistent error responses throughout the application

class ApiError extends Error {
    constructor(
        statusCode,                      // HTTP status code (e.g., 404, 500)
        message = "Something went wrong", // Default error message
        errors = [],                     // Optional array of detailed error messages
        stack = ""                       // Optional stack trace
    ) {
        super(message);                  // Call the base Error constructor

        this.statusCode = statusCode;   // Assign HTTP status code
        this.data = null;               // No data is returned in case of error
        this.message = message;         // Custom error message
        this.success = false;           // Indicates failure
        this.errors = errors;           // List of specific error details

        // If a custom stack trace is provided, use it; otherwise, capture current stack trace
        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

// Exporting the ApiError class so it can be used across the application
export { ApiError };
