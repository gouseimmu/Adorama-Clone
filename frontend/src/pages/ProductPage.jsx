import React, { useEffect, useState } from "react";
import axios from "axios";
import { border, FormControl, FormLabel, Heading, Hide, Input, Select, Show, Text } from "@chakra-ui/react";
import { FaGreaterThan } from "react-icons/fa"
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
// import Navbar from "../Components/Navbar";
import { Image } from '@chakra-ui/react';
import { SearchIcon, StarIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux"
import { Add_TO_CART } from "../Redux/cart/cart_actions";
import { useToast } from "@chakra-ui/react"
import "./productPages.css"
import Sidebar from "../components/products_component/sidebar";
import Heroslider from "../components/Home_component/heroslider";
import Product_drower from "../components/products_component/drawer_productpage";
const ProductPage = () => {
    const location = useLocation();
    const [getserchparams,setsearchParams]=useSearchParams()
    const product_category=getserchparams.getAll("category")
    const nan=useNavigate()


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
        axios.get("https://joyous-robe-tick.cyclic.app/product/getproduct",{params:{"category":([...product_category])}}).then((res) => {
            console.log(res.data);
            setProduct(res.data);
            setFilteredProducts(res.data)
        });
    };
    // cart
    const handleCart = (id) => {
        console.log(id)
        if(local_data[0] == undefined){
            toast({
                title: "Login First",
                status: "warning",
                duration: 2000,
                isClosable: true,
                position:"top"
              });
            return 
        }
        else{
            let same=false
            let data={productID:id}
            console.log(data)
               if(cart_state.cart_data[0]==undefined){
                dispatch(Add_TO_CART(data))
                toast({
                    title: "Product  Added.",
                
                    status: "success",
                    duration: 2000,
                    isClosable: true,
                    position:"top"
                  });
               }
               else{
                cart_state.cart_data.map(el=>{
                    if(el.productID._id==id){
                        toast({
                            title: "Product Already Added.",
                        
                            status: "warning",
                            duration: 2000,
                            isClosable: true,
                            position:"top"
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
                        duration: 2000,
                        isClosable: true,
                        position:"top"
                      });

                }
               } 
          
                
               
            
           
       
       
    }
    }



    const getCartData = () => {
        axios.get("https://joyous-robe-tick.cyclic.app/cart").then((res) => setCart(res.data));
    }

    useEffect(() => {
        Api();
        getCartData();
     
    }, [location]);
console.log(product)
    return (
    <>
    <div style={{paddingBottom:"130px" }}>

            <Navbar/>
    </div>
        <div Style={"width:95%;margin:auto"}>
            <br/>
            
            <Heroslider/>
            <br/>
            <br/>
            <div className="product_page_main">
            <Show breakpoint='(max-width: 960px)'>
        <Product_drower/>
    </Show>
    <Hide breakpoint='(max-width: 960px)'>
<div className="sidebar" >

    <Sidebar/>
   
    </div>
    </Hide>

                <div className="main_content_product" >
                            {product.map((el, index) => (

                                
                                <div className="product_cart"
                                    key={el.id}>
                                        
                                    <div Style={"width:40%"}>
                                        <img
                                            style={{ paddingTop: "20px", width: "300px" }}
                                            src={el.image}
                                            alt="not found"
                                            
                                        />
                                    </div>

                                    <div>
                                        <h3 className="product_title">{el.title}</h3>
                                            {/* <Link to={`/products/${el.id}`}><h1>More details</h1></Link></h3> */}
                                    </div> 
                                    <div>
                                        <p>{el.pricea}</p>

                                        <div style={{ color: "green" }}> $176.67{el.promo_financing_rate_2} {el.promo_financing}</div>
                                        {/* <p>${el.price_reg_has_sibs}</p> */}


                                        {/* <div style={{ fontSize: "35px" }}>{el.price}</div> */}

                                        <button 
                                        disabled={!el.available}
                                            style={{
                                                backgroundColor: "#003F7F",
                                                color: "white",
                                                padding: "10px 20px",
                                                fontSize: "20px",
                                                // border: "red",
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
