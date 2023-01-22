import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text } from '@chakra-ui/react'

import { CheckCircleIcon, StarIcon } from "@chakra-ui/icons";

const SingleProduct = () => {
  const [product, setProduct] = useState({});
  let { id } = useParams();
  console.log(id);
  const ApiFetch = (id) => {
    axios.get(`https://joyous-robe-tick.cyclic.app/product/${id}`).then((res) => {
      console.log(res.data);
      setProduct(res.data);
    });
  };
  const {productImage_src,trackEvent_3,trackEvent_2,review_stars,review_count,price_reg_has_sibs}=product
const [add,setAdd]=useState(false)

const handleCart = () => {
  let userData=JSON.parse(localStorage.getItem("user"))
  alert("Item has been added")

  axios.post(`https://joyous-robe-tick.cyclic.app/cart`,{
    ...product,
    email:userData.email,
    time:userData.lastSignInTime

//  image:productImage_src,
//  title:trackEvent_2
  }).then((res) => {
    console.log(res.data)
    
  })
}

  useEffect(() => {
    ApiFetch(id);
    console.log(product);
  }, [id]);
  return (
    <div>
      {/* <Navbar/> */}
    
    <div
      style={{
        display: "flex",
        gap: "50px",
        marginLeft: "100px",
        // border: "1px solid blue",
      }}
    >
      

  <Box boxSize='sm'>
    <Image style={{height:"300px",marginTop:"20px"}} src={product.productImage_src} alt='Dan Abramov' />
  </Box>

      <div>
        <div style={{
              // border: "1px solid teal",
              width: "800px",
              marginTop:"10px" }}>
          <div style={{ fontSize: "30px", textAlign: "left" }}>

            {product.trackEvent_2}
            <br />
            <div style={{ textAlign: "left", fontSize: "12px",marginTop:"10px" }}>
              SKU:{product.product_sku_2} MFR:{product.product_sku_4}{" "}

            </div>
            
            <div style={{ fontSize: "15px", }}>
            {/* review_stars */}
            <StarIcon style={{color:"rgb(250, 189, 4)"}}/><StarIcon style={{color:"rgb(250, 189, 4)"}}/><StarIcon style={{color:"rgb(250, 189, 4)"}}/><StarIcon style={{color:"rgb(250, 189, 4)"}}/>
            {product.review_stars} ({product.review_count})
            </div>

           <div style={{marginTop:"10px"}}><Text as="b" >${product.price_reg_has_sibs}</Text></div> 
            <div
              style={{
                color: "rgb(43, 105, 229)",
                cursor: "pointer",
                fontSize: "15px",
              
              }}
            >
              Get {product.price_reg_has_sibs} Reward Points
            </div>
            <br />
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                style={{
                  border: "1px solid grey",
                  width: "60px",
                  borderRadius: "5px",
                }}
                type="number"
                placeholder=""
              />
              <button
                style={{
                  backgroundColor: "rgb(228, 112, 70)",
                  color: "white",
                  // padding: "10px 20px",
                   fontSize: "25px",
                  // border: "red",
                  borderRadius: "5px",
                  // cursor: "pointer",
                  width: "300px",
                  height: "60px",
                  // marginRight:"20px"
                }}
                onClick={() => handleCart(product.id)}
              >
                Add to Cart
              </button>
              <div>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(43, 105, 229)",
                    cursor: "pointer",
                  }}
                >
                  Add to Wishlist
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    color: "rgb(43, 105, 229)",
                    cursor: "pointer",
                  }}
                >
                  Sale alert
                </p>
              
              </div>

            </div>
          
            <div style={{display:"flex",gap:"80px"}}>
            <p style={{color:"green",fontSize:"15px",marginTop:"5px"}}><CheckCircleIcon style={{color:"green"}}/> In Stock & Ready to Ship </p> 
            <p style={{color:"grey",fontSize:"25px"}}>|</p>
            <p style={{ color: "rgb(43, 105, 229)",fontSize:"15px",marginTop:"5px",marginLeft:"-30px"}}> Calculate Shipping sell all shipping options </p> 

            </div>

          </div>
        </div>
      </div>
    </div>
    {/* <Footer/> */}
    </div>
  );
};
export default SingleProduct;
