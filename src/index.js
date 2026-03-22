// require('dotenv').config({path: './env'});

import dotenv from "dotenv"
import connectDB from "./db/index.js";

import { app } from "./app.js";
dotenv.config({
    path: './env'
})


connectDB()
const port = process.env.PORT || 8000
.then(() => {
    app.listen( port, () => {
        console.log(`Server is running at : http://localhost:${process.env.PROT}`)
    })
    app.on("error" , (error) => {
            console.log("Error :" , error);
            throw error

            })

})
.catch((err) => {
    console.log("Mongo DB connection failed !!!",err);
    
})




/* 
import express from "express";
const app = express;

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error" , (error) => {
            console.log("Error :" , error);
            throw error

            })

            app.listen(process.env,PROT , () => {
                console.log(`App is lising on http://localhost:${process.env.PROT}`);
                
            })
    } catch (error) {
   console.log("Error :",error);
        
    }
})() */