const mongoose=require("mongoose")
const signupSchema=mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    cpassword:{type:String,required:false}
},{
    versionKey:false
})
const SignupModel=mongoose.model("SignupData",signupSchema)
module.exports={
    SignupModel
}