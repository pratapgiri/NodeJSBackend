// This class represents a custom API error that extends the built-in Error class.
// It is used to standardize error handling in the application.
class ApiError extends Error {
    constructor(
        statusCode, // HTTP status code for the error (e.g., 404, 500)
        message = "Something went wrong", // Default error message
        errors = [], // Additional error details (e.g., validation errors)
        statck = "" // Optional stack trace for debugging
    ) {
        super(message); // Call the parent Error class constructor with the message

        // Assign properties to the error instance
        this.statusCode = statusCode; // HTTP status code
        this.data = ""; // Placeholder for additional data (if needed)
        this.message = message; // Error message
        this.success = false; // Indicates the operation was not successful
        this.errors = errors; // Additional error details

        // Set the stack trace if provided, otherwise capture it automatically
        if (statck) {
            this.stack = statck;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export { ApiError }