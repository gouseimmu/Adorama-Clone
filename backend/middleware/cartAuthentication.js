const jwt=require("jsonwebtoken")
const authorization=(req,res,next)=>{
    let token=req.headers.authorization
    if(token){
        var decoded = jwt.verify(token, 'masai')
        if(decoded){
            let userID=decoded.userID
            req.body.userID=userID
            console.log("hello")
            next()
        }
        else{
            console.log("Please Login First")
            res.send("Please Login First")
        }
        
    }
    else{
        res.send("Please Login First")
    }
    
}
module.exports={
    authorization
}