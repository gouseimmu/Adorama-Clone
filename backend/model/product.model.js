const mongoose=require("mongoose")
const productSchema=mongoose.Schema({
    id:Number,
    title:String,
    image:String,
    category:String,
    price:Number,
    brand:String,
    available:Boolean,
    review:[{type: String}],
    description:[{type: String}]
},{
    versionKey:false
})
const ProductModel=mongoose.model("productData",productSchema)
module.exports={
    ProductModel
}