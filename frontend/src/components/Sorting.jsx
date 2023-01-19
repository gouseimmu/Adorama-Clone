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
            value="biryani"
            checked={category.includes("biryani")}
          />
          <label htmlFor="">Biryani</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="burger"
            checked={category.includes("burger")}
          />
          <label htmlFor="">Burger</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="Chicken"
            checked={category.includes("Chicken")}
          />
          <label htmlFor="">Chicken</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="exclusivedeal"
            checked={category.includes("exclusivedeal")}
          />
          <label htmlFor="">exclusivedeal</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="newlaunch"
            checked={category.includes("newlaunch")}
          />
          <label htmlFor="">newlaunch</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="boxmeal"
            checked={category.includes("boxmeal")}
          />
          <label htmlFor="">boxmeal</label>
        </div>
        <div>
          <input
          style={{marginRight:"5%"}}
            type="checkbox"
            onChange={handlefilter}
            value="snacks"
            checked={category.includes("snacks")}
          />
          <label htmlFor="">snacks</label>
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