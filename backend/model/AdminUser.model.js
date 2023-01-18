const mongoose=require("mongoose")
const AdminUserSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
},{
    versionKey:false
})
const AdminUserModel=mongoose.model("adminData",AdminUserSchema)
module.exports={
    AdminUserModel
}