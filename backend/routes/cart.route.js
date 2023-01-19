const express=require("express")
const jwt=require("jsonwebtoken")
const { authorization } = require("../middleware/cartAuthentication")
const { CartModel } = require("../model/cart.model")
const cartRoute=express.Router()


cartRoute.use(authorization)
cartRoute.get("/", async (req, res) => {
    const {userID}=req.body
    let data = await CartModel.find({ userID }).populate([
      "userID",
      "productID",
    ]);
//   console.log(data)
    return res.send(data);
  });

cartRoute.post("/additem",async(req,res)=>{
    // console.log('item added')
    const {productID,quantity,userID}=req.body
  
    
    
        try {
                let data = await CartModel.create({ productID, quantity, userID });
                console.log(data)
                return res.send({
                message: "item created successfully",
                });
          } catch (e) {
            // console.log(e)
            return res.status(500).send(e.message);
          }
    
})

module.exports={
    cartRoute
}