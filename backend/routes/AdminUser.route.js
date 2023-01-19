const express=require("express")
const {AdminUserModel}=require("../model/AdminUser.model")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const AdminRoute=express.Router()


AdminRoute.post("/signup",async(req,res)=>{
    let {name,email,password}=req.body
        try {
            bcrypt.hash(password, 5, async(err, secure_pass)=> {
                if(err){
                    console.log(err)
                    res.send(err)
                }
                else{
                    let data=new AdminUserModel({name,email,password:secure_pass})
                    await data.save()
                    console.log(data)
                    res.send({"msg":"Registration Successfull"})
                }
            });
        } catch (error) {
            console.log(error)
            res.send({"msg":"Something went wrong"})
        }

    
})

AdminRoute.post("/login",async(req,res)=>{
    let {email,password}=req.body
    try {
        const user=await AdminUserModel.find({email})
        console.log(user)
        if(user.length>0){
            bcrypt.compare(password,user[0].password,(err,result)=>{
                if(result){
                    // console.log(result)
                    const token=jwt.sign({"name":user[0].name},"masai")
                    res.send({"msg":"Login Successfull","token":token})
                }
                else{
                    res.send({"msg":"Wrong Credential"})
                    console.log(err)
                }
            })
        }
        else{
            res.send({"msg":"Wrong Credential"})
        }
    } catch (error) {
        res.send({"msg":"Wrong Credential"})
        console.log(error)
    }
})


module.exports={
    AdminRoute
}

