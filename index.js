// This file contains the main entry point for the Node.js application.
require('dotenv').config(); // Load environment variables from .env file
const express = require('express'); // Import Express framework

const app = express(); // Create an Express application instance

const port = process.env.PORT; // Get the port number from environment variables

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Hello World!'); // Send a response to the client
});

// Define a route for the login page
app.get('/login', (req, res) => {
    res.send('<h1>This is Login Page</h1>'); // Send a response to the client
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});