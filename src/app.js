// This file contains the Express application setup.
import express from "express";
import cookieParser from "cookie-parser"; // Middleware for parsing cookies
import cors from "cors"; // Middleware for enabling Cross-Origin Resource Sharing

const app = express(); // Create an Express application instance

// Enable CORS with specific options
app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from this origin
    Credentials: true // Allow credentials (cookies, authorization headers, etc.)
}));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the "public" directory
app.use(express.static("public"));

// Use cookie-parser middleware
app.use(cookieParser());

export { app }; // Export the Express application instance