import {CART_LOAD,CART_GET,CART_ERROR} from "./cart_action_type"
import axios from "axios"
let local_details=JSON.parse(localStorage.getItem("details"))
let token=local_details[0].token
console.log(token)
// gat cart

export const GET_CART=()=>(dispatch)=>{
    dispatch({type:CART_LOAD})
    try{
        axios.get("http://localhost:8080/cart",{headers:{"authorization":token}})
        .then(res=>(dispatch({type:CART_GET,payload:res.data})))
        .catch(err=>(dispatch({type:CART_ERROR})))
    }
    catch(err){

    }

}


// ADD_data={"productID":""}


 export const Add_TO_CART=(data)=>(dispatch)=>{
   
    dispatch({type:CART_LOAD})
    try{
        axios.post("http://localhost:8080/cart/additem",data,{headers:{"authorization":token}})
        .then(res=>(dispatch(GET_CART())))
        .catch(err=>(dispatch({type:CART_ERROR})))
    }
    catch(err){
        dispatch({type:CART_ERROR})
    }
}

// patch_data={type:"inc"/"dec","productID":""}

export const PATCH_CART=(data)=>(dispatch)=>{
    dispatch({type:CART_LOAD})
    console.log(data)
    try{
        axios.patch("http://localhost:8080/cart/update",data,{headers:{"authorization":token}})
        .then(res=>(dispatch(GET_CART())))
        .catch(err=>(dispatch({type:CART_ERROR})))
    }
    catch(err){
        dispatch({type:CART_ERROR})
    }
}


// Delete _item
// data=productId
export const Delete_from__CART=(id)=>(dispatch)=>{
    dispatch({type:CART_LOAD})
    console.log("actions",id)
    
    try{
        axios.delete(`http://localhost:8080/cart/delete/${id}`,{headers:{"authorization":token}})
        .then(res=>(dispatch(GET_CART())))
        .catch(err=>(dispatch({type:CART_ERROR})))
    }
    catch(err){
        dispatch({type:CART_ERROR})
    }
}

