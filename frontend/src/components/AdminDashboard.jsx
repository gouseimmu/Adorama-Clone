import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sorting from './Sorting'
import {Image,SimpleGrid,Box} from "@chakra-ui/react"

const AdminDashboard = () => {
  const dispatch=useDispatch();
  const data=useSelector((store)=>store.AdminReducer.data);

  return (
    <div>
      <div id="main" style={{display:"flex"}} >
        <div id="filter" style={{width:"300px",border:"1px solid red"}} >
          <Sorting/>
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
            {data.map((el)=>(
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