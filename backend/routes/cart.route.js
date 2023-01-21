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
cartRoute.patch("/update", async (req, res) => {
  let { type, productID,userID } = req.body;
console.log(req.body)
  let existingcartItems = await CartModel.findOne({_id:productID });
  console.log(existingcartItems)
  try {
    if (type === "dec") {
      let updatedData = await CartModel.findByIdAndUpdate(
        existingcartItems._id,
        { $set: { quantity: existingcartItems.quantity - 1 } }
      );
      // console.log(existingcartItems);
      res.send({
        message: "item qty decremented",
      });
    } else {
      let updatedData = await CartModel.findByIdAndUpdate(
        existingcartItems._id,
        { $set: { quantity: existingcartItems.quantity + 1 } }
      );

      return res.send({
        message: "item qty incremented",
      });
    }
  } catch (e) {
    return res.status(500).send("something went wrong");
  }
});

cartRoute.delete(`/delete/:id`, async (req, res) => {
  // let { productID,userID } = req.body;
  // let userId = req.headers.userid;
  // console.log(type,productId,userId)
  let pr_id=req.params.id
  console.log(pr_id)
//  console.log(productID,userID)
  // let existingcartItems = await CartModel.findOne({ userID, productID });
  // console.log(existingcartItems);
  try {
    await CartModel.findByIdAndDelete({_id:pr_id});
    return res.send("item deleted from cart");
  } catch (err){
    return res.status(500).send(err);
  }
  // if (existingcartItems) {
  //   try {
  //     await CartModel.findByIdAndDelete(existingcartItems._id);
  //     return res.send("item deleted from cart");
  //   } catch {
  //     return res.status(500).send(e.message);
  //   }
  // } else {
  //   return res.status(500).send("something went wrong");
  // }
});

module.exports={
    cartRoute
}