// This file contains the database connection logic using Mongoose.
import mongoose from "mongoose";
import { DB_NAME } from "../constants.js"; // Import the database name constant

// Function to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Connect to the MongoDB database using the connection string from environment variables
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`/n MongoDB connected !! DB HOST :${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.log('Error :', error); // Log any connection errors
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDB; // Export the connectDB function