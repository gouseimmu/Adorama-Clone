import React from "react"
import {Button,FormLabel,Input,Box,Heading,ModalHeader} from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getData, PatchData } from "../Redux/Admin/action";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

function EditProduct() {
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const [title,setTitle]=useState("");
  const [image,setImg]=useState("");
  const [category,setCategory]=useState("");
  const [brand,setBrand]=useState("");
  const [price,setPrice]=useState("");
  // console.log(req.params)

  const {id}=useParams();
  console.log(id)
  const editProduct=()=>{
    // console.log("Added")
    // let obj={
    //   title,
    //   image,
    //   category,
    //   brand,
    //   price,
    //   available:true,
    // }
    // console.log(obj)
    let obj={};

    if(title!=""){
      obj.title=title;
    }
    if(image!=""){
    obj.image=image;
    }
    if(category!=""){
      obj.category=category;
    }
    if(brand!=""){
      obj.brand=brand;
    }
    if(price!=""){
      obj.price=price;
    }
    console.log(obj)
    dispatch(PatchData(obj,id)).then(()=>{
      alert("Edit Successfull")
      dispatch(getData());
      navigate("/admin");
    })
    // dispatch(PostData(obj)).then(()=>{
    //   alert("Product Added to Data Base")
    //   dispatch(getData());
    // })
  }

  return (
    <>
      <Box m="auto" mt="3%" width="450px" padding="3%" boxShadow="lg" borderRadius="25px">
        <Heading size="lg" as="h1" fontWeight="" textAlign={"left"} mb="3%" >Edit Product</Heading>
            <FormLabel>Title</FormLabel>
            <Input mb="4%" placeholder="Enter Title of Product" value={title} onChange={(e)=>setTitle(e.target.value)} ></Input>
            <FormLabel>Image URL</FormLabel>
            <Input mb="4%" placeholder="Enter Image URL of Product" value={image} onChange={(e)=>setImg(e.target.value)}></Input>
            <FormLabel >Category</FormLabel>
            <Input mb="4%" placeholder="Enter Category of Product" value={category} onChange={(e)=>setCategory(e.target.value)}></Input>
            <FormLabel>Brand</FormLabel>
            <Input mb="4%" placeholder="Enter Brand of Product" value={brand} onChange={(e)=>setBrand(e.target.value)}></Input>
            <FormLabel>Price</FormLabel>
            <Input mb="4%" placeholder="Enter Price of Product" value={price} onChange={(e)=>setPrice(e.target.value)}></Input>
            <Button colorScheme="green" onClick={editProduct} >Edit Product</Button>
        </Box>
    </>
  )
}
export default EditProduct;