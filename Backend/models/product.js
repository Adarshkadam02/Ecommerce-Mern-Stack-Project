import mongoose from "mongoose";

const EcommerceUser= mongoose.Schema({
    prodName:{
        type:String,
        required:true,
        lowercase:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
});

export default mongoose.model('EcommerceUser',EcommerceUser);