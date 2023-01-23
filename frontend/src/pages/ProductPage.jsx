import React, { useEffect, useState } from "react";
import axios from "axios";
import { border, FormControl, FormLabel, Heading, Input, Select, Text } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa"
import { Link } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import { Image } from '@chakra-ui/react';
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux"
import { Add_TO_CART } from "../Redux/cart/cart_actions";
import { useToast } from "@chakra-ui/react"
import "./productPages.css"

const ProductPage = () => {
    const toast = useToast()
    const local_data=JSON.parse(localStorage.getItem("details")) || []
    console.log(local_data)
    const dispatch=useDispatch()
    const cart_state=useSelector((store)=>store.cart)
    console.log(cart_state)
    const [product, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [cart, setCart] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const Api = () => {
        axios.get("https://joyous-robe-tick.cyclic.app/product").then((res) => {
            console.log(res.data);
            setProduct(res.data);
            setFilteredProducts(res.data)
        });
    };
    // cart
    const handleCart = (id) => {
        console.log(id)
        if(local_data[0] == undefined){
            alert("login first")
            return 
        }
        else{
            let same=false
            let data={productID:id}
            console.log(data)
               if(cart_state.cart_data[0]==undefined){
                dispatch(Add_TO_CART(data))
                alert("product added to cart")
               }
               else{
                cart_state.cart_data.map(el=>{
                    if(el.productID._id==id){
                        toast({
                            title: "Product Already Added.",
                        
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                          });

                       same=true
                        return 
                    }
                })
                if(!same){

                    dispatch(Add_TO_CART(data))
                    toast({
                        title: "Product Added.",
                    
                        status: "success",
                        duration: 5000,
                        isClosable: true,
                      });

                }
               } 
          
                
               
            
           
        //     let isPresent = false;
        //     let userData = JSON.parse(localStorage.getItem("user"))
        //     // alert("Item has been added")
        //     let y = product.filter((el, index) => {
        //         return el.id == id
        // })
        // console.log(y)

        // true && cart.map((item) => {
        //     if (item.id === y.id) isPresent = true
        // })

        // if (isPresent) {
        //     alert("Item is already present in the cart");
        //     return;
        // }
        // else {
            // axios.post(`https://joyous-robe-tick.cyclic.app/cart`, {

            //     ...y[0],
            //     //  image:y[0].productImage_src,
            //     //  title:y[0].trackEvent_2,
            //     email: userData.email,
            //     time: userData.lastSignInTime

            // }).then((res) => {
            //     console.log(res.data)

            // })
            // dispatch(Add_TO_CART(data))
        // }
    }
    }

    const handleSearch = (event) => {

        setSearchTerm(event.target.value);
        if (event.target.value === "") {
            setProduct(filteredProducts)
        }
        else {
            setProduct(
                product.filter((el) =>
                    el.trackEvent_2.toLowerCase().includes(event.target.value.toLowerCase())
                )
            );
        }
        // setFilteredProducts(

    };


    const getCartData = () => {
        axios.get("https://joyous-robe-tick.cyclic.app/cart").then((res) => setCart(res.data));
    }

    useEffect(() => {
        Api();
        getCartData();
    }, []);

    return (
    <>
    <div style={{paddingBottom:"130px" }}>

            <Navbar/>
    </div>
        <div >
            <div style={{
                display: "flex", alignItems: "flex-start", justifyContent: "space-between",
                // border: "1px solid red",
                width: "100%", gap: "30px"
            }}>
<div className="sidebar" ><Heading>SideBar</Heading></div>

                <div className="main_content_product" >
                            {product.map((el, index) => (

                                
                                <div className="product_cart"
                                    key={el.id}>
                                        
                                    <div >
                                        <img
                                            style={{ paddingTop: "20px", width: "300px" }}
                                            src={el.image}
                                            alt="not found"
                                            
                                        />
                                    </div>

                                    <div>
                                        <h3 style={{ color: "rgb(43, 105, 229)", cursor: "pointer", marginRight: "80px" }}>{el.title}{el.trackEvent_2}
                                            <Link to={`/products/${el.id}`}><h1>More details</h1></Link></h3>


                                        <p style={{ marginRight: "80px" }}>
                                            <div style={{ fontSize: "12px", display: "flex" }}><p>SKU:{el.product_sku_2}</p>   <p style={{ marginLeft: "14px" }}>MFR:{el.product_sku_4}{" "}</p></div>
                                            <br />
                                            {/* {el.review_stars} ({el.review_count}) */}
        
                                          
                                            
                                        </p>


                                     
                                    </div>
                                    <div>
                                        <p>{el.pricea}</p>

                                        <div style={{ color: "green" }}> $176.67{el.promo_financing_rate_2} {el.promo_financing}</div>
                                        {/* <p>${el.price_reg_has_sibs}</p> */}


                                        {/* <div style={{ fontSize: "35px" }}>{el.price}</div> */}

                                        <button 
                                        disabled={!el.available}
                                            style={{
                                                backgroundColor: "rgb(228, 112, 70)",
                                                color: "white",
                                                padding: "10px 20px",
                                                fontSize: "20px",
                                                border: "red",
                                                borderRadius: "5px",
                                                cursor: "pointer",
                                                width: "200px",
                                                height: "50px",
                                                marginRight: "20px"
                                            }}
                                            onClick={() => handleCart(el._id)}
                                        >
                                            Add to Cart
                                        </button>
                                       
                                        <br /><hr />
                                        {/* <p>Ways to Save</p>
                                        <div style={{ color: "rgb(43, 105, 229)", cursor: "pointer", }}>
                                            <p >5% OFF+ Every Day with Adorama Edge</p>
                                            <p>Credit Card</p>
                                            <p>Sell or Trade your Gear</p>
                                            <p>Save up to $800 with bundle</p>
                                            <p>Get Reward Points</p>
                                        </div> */}
                                    </div>
                                </div>

                            ))}
                </div>
            </div>
        </div>
        <Footer/>
</>
    );
};

export default ProductPage;
