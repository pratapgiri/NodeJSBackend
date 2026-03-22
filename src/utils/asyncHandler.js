// This function is a higher-order function for handling asynchronous requests.
const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)) // Resolve the promise returned by the request handler
            .catch((err) => next(err)); // Pass any errors to the next middleware
    };
};

export { asyncHandler }; // Export the asyncHandler function