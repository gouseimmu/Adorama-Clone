import React from "react"
import {Button,FormLabel,Input,Box,Heading,ModalHeader} from "@chakra-ui/react"
import { useState } from "react";

function EditProduct() {
  const [title,setTitle]=useState("");
  const [image,setImg]=useState("");
  const [category,setCategory]=useState("");
  const [brand,setBrand]=useState("");
  const [price,setPrice]=useState("");

  const AddProduct=()=>{
    // console.log("Added")
    let obj={
      title,
      image,
      category,
      brand,
      price,
      available:true,
    }
    console.log(obj)
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
            <Input mb="4%" placeholder="Enter Title of Product" ></Input>
            <FormLabel>Image URL</FormLabel>
            <Input mb="4%" placeholder="Enter Image URL of Product"></Input>
            <FormLabel >Category</FormLabel>
            <Input mb="4%" placeholder="Enter Category of Product"></Input>
            <FormLabel>Brand</FormLabel>
            <Input mb="4%" placeholder="Enter Brand of Product"></Input>
            <FormLabel>Price</FormLabel>
            <Input mb="4%" placeholder="Enter Price of Product"></Input>
            <Button colorScheme="green" >Edit Product</Button>
        </Box>
    </>
  )
}
export default EditProduct;