import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sorting from './Sorting'
import {Image,SimpleGrid,Box,Heading} from "@chakra-ui/react";
import { useEffect,useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getData } from '../Redux/Admin/action';

const AdminDashboard = () => {
  const dispatch=useDispatch();
  let data=useSelector((store)=>store.AdminReducer.data);
  const location=useLocation();
  const [searchParams,setSearchParams]=useSearchParams();
  const [Data,setData]=useState([]);
  const [sort,setsort]=useState("asc");
  // true for descending and false for ascending
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
          option:searchParams.getAll("category"),
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


  return (
    <div>
      <div id="main" style={{display:"flex"}} >
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
              <Box key={el.id} width="300px" >
                <Image w={"100%"} src={el.image} h="200px" />
                  <h2>{el.title}</h2>
                  <h4>{el.category}</h4>
                  <h3>{el.price}</h3>
                  <p>{el.details}</p>
              </Box>
          ))}
          </SimpleGrid>

          {/* </div> */}
        </div>
        

      </div>
    </div>
  )
}

export default AdminDashboard