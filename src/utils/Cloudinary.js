import {v2 as cloudinary} from "cloudinary;"
import fs from "fs";

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

console.log(cloudinary.url("Screenshot_from_2025-09-22_22-13-18_w27ljj"));

