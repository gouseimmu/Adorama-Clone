import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sorting from './Sorting'
import {Image,SimpleGrid,Box,Heading,Button} from "@chakra-ui/react";
import { useEffect,useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getData, PostData,DeleteData } from '../Redux/Admin/action';
import {Modal,ModalOverlay,ModalBody,useDisclosure,ModalContent,ModalFooter,ModalHeader,ModalCloseButton,Text
,FormLabel,Input} from "@chakra-ui/react"
import axios from 'axios';
import {Link} from "react-router-dom"

const AdminDashboard = () => {
  const dispatch=useDispatch();
  let data=useSelector((store)=>store.admin.data);


  // States for Add Product
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
    // console.log(obj)
    dispatch(PostData(obj)).then(()=>{
      alert("Product Added to Data Base")
      dispatch(getData());
    })
  }

  // Login for Sorting

  const location=useLocation();
  const [searchParams,setSearchParams]=useSearchParams();
  const [Data,setData]=useState([]);
  const [sort,setsort]=useState("asc");
  
  // console.log(Data)

  const handlesort=(e)=>{
    // setsort(e.target.value);
    setsort((pre)=>pre=="asc"?"desc":"asc");
  
    // console.log(sort)
    if(sort=="asc"){
      data.sort((a,b)=>{
        return a.price-b.price;
      })
      setData(data);

    }else if(sort=="desc"){
      data.sort((a,b)=>{
        return b.price-a.price;
      })
      setData(data)
    }
  }

  useEffect(() => {
    if(location||data.length){
      const ProductsData={
        params:{
          category:searchParams.getAll("category"),
          // _sort:sortBy&&"price",
          // _order:sortBy
        }
      }
      // console.log(ProductsData)
      dispatch(getData(ProductsData));
      
      setData(data)
      handlesort();
      // if(sortBy=="asc"){
      //   data.sort((a,b)=>{
      //     return a-b;
      //   })

      // }else if(sortBy=="desc"){
      //   data.sort((a,b)=>{
      //     return b-a;
      //   })
      // }
    }
  //  console.log(location.search)
  }, [dispatch,location.search,data.length]);

  useEffect(()=>{
    handlesort();
  },[])

  // Logic Ends for sorting 

  // Overlay 

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  )

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)



  return (
    <div>
      <div id="main" style={{display:"flex",marginTop:"5%"}} >
        <div id="filter" style={{width:"300px",border:"1px solid red"}} >
          <Sorting/>
          <Heading as="h3" size="md" mt="5%" style={{ marginBottom: "5%" }}>Sorting Component</Heading>
      <div onChange={handlesort} style={{textAlign:"left",marginLeft:"20%"}}  >
        <input style={{marginRight:"5%"}} type="radio" name="sortBy" id="" value="asc" defaultChecked={sort=="asc"} />
        <label htmlFor="">Ascending</label>
        <br/>
        <input style={{marginRight:"5%"}} type="radio" name="sortBy" id="" value="desc" defaultChecked={sort=="desc"} />
        <label htmlFor="">Descending</label>
      </div>
      <Box>

        {/* <Button boxShadow="md" mt="5%" colorScheme='messenger'>Add Product</Button> */}
        <Button
        mt="5%" colorScheme='messenger'
        onClick={() => {
          setOverlay(<OverlayOne />)
          onOpen()
        }}
      >
        Add Product
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Add Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
          <ModalFooter gap="5%">
            <Button colorScheme="red" onClick={onClose}>Close</Button>
            <Button colorScheme="green" onClick={()=>{
              onClose();
              AddProduct();
            }}>Add Product</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>
      
        </div>
        <div id="products" style={{width:"100%",border:"1px solid red",justifyContent:"center"}} >
          <h1>Admin Dashboard</h1>
          {/* <div style={{display:"grid",gridTemplateColumns: }} > */}
          <SimpleGrid
          minChildWidth="250px"
          spacing="40px"
          marginTop="30px"
          textAlign="center"
          border="0px solid red">
            {(Data==[]?data:Data).map((el)=>(
              (el.available?(<Box key={el._id} width="300px" >
                <Image w={"100%"} src={el.image} h="200px" />
                  <h2><b>Title:</b> {el.title}</h2>
                  <h4><b>Category: </b>{el.category}</h4>
                  <h3><b>Price:</b> {el.price}</h3>
                  <p><b>Brand:</b> {el.brand}</p>
                  <p>Status:{el.available?"true":"false"}</p>
                  <Link to={`/admin/edit/${el._id}`} ><Button mr="2%" colorScheme="telegram">Edit</Button></Link>
                  <Button colorScheme={el.available?"red":"green"} onClick={()=>{
                    el.available=!el.available
                    console.log(el.available)
                    }} >Unavailable</Button>
                  <Button ml="2%" colorScheme="red"
                  onClick={()=>{
                    dispatch(DeleteData(el._id))
                    dispatch(getData());
                  }} 
                  >Delete</Button>
              </Box>):null)
          ))}
          </SimpleGrid>

          {/* </div> */}
        </div>
        

      </div>
    </div>
  )
}

export default AdminDashboard