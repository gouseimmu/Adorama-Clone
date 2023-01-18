const express=require("express")
const {SignupModel}=require("../model/Usersignup.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const UserSignupRoute=express.Router()


UserSignupRoute.post("/signup",async(req,res)=>{
    let {firstname,lastname,email,password,cpassword}=req.body
    // console.log(payload)
    if(password===cpassword){
        try {
            bcrypt.hash(password, 5, async(err, secure_pass)=> {
                if(err){
                    console.log(err)
                    res.send(err)
                }
                else{
                    let data=new SignupModel({firstname,lastname,email,password:secure_pass})
                    await data.save()
                    console.log(data)
                    res.send("Registration Successfull")
                }
            });
        } catch (error) {
            console.log(error)
            res.send("Something went wrong")
        }

    }
    else{
        res.send("Please enter same password")
    }
})

UserSignupRoute.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try {
        const user=await SignupModel.find({email})
        console.log(user)
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    // console.log(result)
                    const token=jwt.sign({"name":user[0].name},"masai")
                    res.send({"msg":"Login Successfull","token":token})
                }
                else{
                    res.send("Wrong Credential")
                    console.log(err)
                }
            })
        }
        else{
            res.send("Wrong Credential")
        }
    } catch (error) {
        res.send("Wrong Credential")
        console.log(error)
    }
})


module.exports={
    UserSignupRoute
}

