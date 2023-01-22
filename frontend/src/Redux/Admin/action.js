import * as types from "./actionTypes"
import axios from "axios"

const getError=()=>{
    return {
        type:types.GET_ERROR
    }
}

const getRequest=()=>{
    return {
        type:types.GET_REQUEST
    }
}

const getSuccess=(payload)=>{
    return {
        type:types.GET_SUCCESS,
        payload
    }
}

const PostError=()=>{
    return {
        type:types.POST_ERROR
    }
}

const PostRequest=()=>{
    return {
        type:types.POST_REQUEST
    }
}

const PostSuccess=(payload)=>{
    return {
        type:types.POST_SUCCESS
    }
}

const PatchError=()=>{
    return {
        type:types.PATCH_ERROR
    }
}

const PatchRequest=()=>{
    return {
        type:types.PATCH_REQUEST
    }
}

const PatchSuccess=(payload)=>{
    return {
        type:types.PATCH_SUCCESS
    }
}

const DeleteError=()=>{
    return {
        type:types.DELETE_ERROR
    }
}

const DeleteRequest=()=>{
    return {
        type:types.DELETE_REQUEST
    }
}

const DeleteSuccess=(payload)=>{
    return {
        type:types.DELETE_SUCCESS
    }
}

const getData=(params)=>(dispatch)=>{
    console.log(params)
    dispatch(getRequest());
    // return axios.get(`https://bfc-i90o.onrender.com/bfc`,params)
    // Because there is no logic for params in backend;
    return axios.get(`https://joyous-robe-tick.cyclic.app/product`,params)
    .then((res)=>{
        console.log(res.data)
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()));
}

const PostData=(obj)=>(dispatch)=>{
    dispatch(PostRequest());
    return axios.post("https://joyous-robe-tick.cyclic.app/product/addproduct",obj)
    .then((res)=>{
      console.log(res)
    dispatch(PostSuccess());
      
    })
    .catch((err)=>dispatch(PostError()));
}

const DeleteData=(id)=>(dispatch)=>{
    console.log(id)
    dispatch(DeleteRequest());
    return axios.delete(`https://joyous-robe-tick.cyclic.app/product/delete/${id}`,id)
    .then((res)=>{
    //   console.log(res)
    dispatch(DeleteSuccess());
      
    })
    .catch((err)=>dispatch(DeleteError()));
}

export {getData,PostData,DeleteData}
