import React from 'react'
import { useState ,useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import {Heading} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../Redux/Admin/action';

const Sorting = () => {
  const dispatch=useDispatch();
  const data=useSelector((store)=>{
    // console.log(store)
   return  store.AdminReducer.data
  });
  // console.log(data)

  const [searchParams,setSearchParams]=useSearchParams();
  const initialCategory=searchParams.getAll("category");
  // console.log(initialCategory)
  const [category,setcategory]=useState(initialCategory||[]);
  // console.log(category)

  const initialSort=searchParams.getAll("sort");
  // console.log(initialSort)
  const [sort,setsort]=useState(initialSort[0]||"");
  // console.log(sort)

  const handlesort=(e)=>{
    setsort(e.target.value);
    // console.log(sort)
  }

  const handlefilter=(e)=>{
    // console.log(e.target.value)
    let newCategories=[...category];
    if(newCategories.includes(e.target.value)){
      // console.log(newCategories.indexOf(e.target.value));
      newCategories.splice(newCategories.indexOf(e.target.value),1)
    }else{
      newCategories.push(e.target.value)
    }
    // console.log(newCategories)
    setcategory(newCategories)
    // console.log(category)
    
  }

  useEffect(() => {
    let params={};
    params.category=category;
    sort&&(params.sort=sort);
    setSearchParams(params);
    // console.log(params)
    // dispatch(getData(params));
    // console.log(searchParams)
  }, [category,setSearchParams,sort]);

  return (
    <div style={{ width: "300px" }}>
      <Heading as="h3" size="md" mt="5%" style={{ marginBottom: "5%" }}>Filter Component</Heading>
      <div style={{textAlign:"left",marginLeft:"20%"}} >
        <div>
          <input
            style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="COMPUTER"
            checked={category.includes("COMPUTER")}
          />
          <label htmlFor="">COMPUTER</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="PHOTOGRAPHY"
            checked={category.includes("PHOTOGRAPHY")}
          />
          <label htmlFor="">PHOTOGRAPHY</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="HOME ELECTRONICS"
            checked={category.includes("HOME ELECTRONICS")}
          />
          <label htmlFor="">HOME ELECTRONICS</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="MUSICAL INSTRUMENTS"
            checked={category.includes("MUSICAL INSTRUMENTS")}
          />
          <label htmlFor="">MUSICAL INSTRUMENTS</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="LIGHTING & STUDIO"
            checked={category.includes("LIGHTING & STUDIO")}
          />
          <label htmlFor="">LIGHTING & STUDIO</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="VIDEO"
            checked={category.includes("VIDEO")}
          />
          <label htmlFor="">VIDEO</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="AUDIO"
            checked={category.includes("AUDIO")}
          />
          <label htmlFor="">AUDIO</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="stayhomespecial"
            checked={category.includes("stayhomespecial")}
          />
          <label htmlFor="">stayhomespecial</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="beverages"
            checked={category.includes("beverages")}
          />
          <label htmlFor="">beverages</label>
        </div>
      </div>
      {/* <Heading as="h3" size="md" mt="5%" style={{ marginBottom: "5%" }}>Sorting Component</Heading>
      <div onChange={handlesort} style={{textAlign:"left",marginLeft:"20%"}}  >
        <input style={{marginRight:"5%"}} type="radio" name="sortBy" id="" value="asc" defaultChecked={sort=="asc"} />
        <label htmlFor="">Ascending</label>
        <br/>
        <input style={{marginRight:"5%"}} type="radio" name="sortBy" id="" value="desc" defaultChecked={sort=="desc"} />
        <label htmlFor="">Descending</label>
      </div> */}
    </div>
  )
}

export default Sorting