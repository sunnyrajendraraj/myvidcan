// ApiResponse is a utility class to standardize API responses
class ApiResponse {
    constructor(statusCode, data, message = "Success") {
        this.statusCode = statusCode;  // HTTP status code (e.g., 200, 404, etc.)
        this.data = data;              // Actual data to be sent in the response
        this.message = message;        // Optional message, defaults to "Success"
        this.success = statusCode < 400; // Boolean indicating if the response is successful (true if statusCode < 400)
    }
}

// Exporting the ApiResponse class to be used in other files
export { ApiResponse };
