import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const VideoShema = new Schema({
    title:{
        type:String,
        required:true,
        index:true
    },
    descripition:{
        type:String,   
    },
    video:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    isActive:{
        type:Boolean,
        default:true,
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    ownerId:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},
{
     timestamps: true 
}
);


// Add plaginos


VideoShema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",VideoShema);