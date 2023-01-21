const mongoose=require("mongoose")

const cartSchema=mongoose.Schema({
    userID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"SignupData",
        required:true
    },
    productID:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"productData",
        required:true
    },
    quantity:{
        type:Number,
        required:false,
        default:1
    }
})
const CartModel=mongoose.model("cart",cartSchema)
module.exports={
    CartModel
}