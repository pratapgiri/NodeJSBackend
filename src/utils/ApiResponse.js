// This class represents a standardized API response structure.
class ApiResponse {
    constructor(
        statusCode, // HTTP status code for the response (e.g., 200, 404)
        data, // The data to include in the response
        message = "Success" // Default message for the response
    ) {
        this.statusCode = statusCode; // HTTP status code
        this.data = data; // Response data
        this.message = message; // Response message
        this.success = statusCode < 400; // Indicates whether the operation was successful
    }
}