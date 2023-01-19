const express=require("express")
const cors=require("cors")
const { connection } = require("./configs/db")
const { productRoute } = require("./routes/product.route")
const { UserSignupRoute } = require("./routes/Usersignup.route")
const {AdminRoute}=require("./routes/AdminUser.route")
const { cartRoute } = require("./routes/cart.route")
require("dotenv").config()

const app=express()
app.use(cors({
    origin:"*"
}))
app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Home Page")
})
app.use("/product",productRoute)
app.use("/user",UserSignupRoute)
app.use("/admin",AdminRoute)
app.use("/cart",cartRoute)

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("Connected to database successfully")
    } catch (error) {
        console.log("Not connected to database",error)
        console.log("Something went wrong while connecting to database")
    }
    console.log(`server is running at http://localhost:${process.env.port}`)
})