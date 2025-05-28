// asyncHandler is a higher-order function that wraps an async request handler
// It helps to catch errors in async functions and pass them to Express error handling middleware
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        // Executes the async function and catches any errors
        // If an error occurs, it is passed to the next() function, triggering Express's error handler
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

// Export the asyncHandler for use in other files
export { asyncHandler };
