const mongoose = require('mongoose');
const { Schema } = mongoose;

const errorsehma=new Schema({
    error:{
        type:String,
        require:true,
        trim:true,
    },
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    },
    createdby:{
        type:Schema.Types.ObjectId,
        ref:'User',
        require:true,
    },

    
},{timestamps:true})

module.exports=mongoose.model('Errors',errorsehma);