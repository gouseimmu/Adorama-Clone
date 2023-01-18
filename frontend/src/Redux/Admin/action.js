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

const getData=(params)=>(dispatch)=>{
    console.log(params)
    dispatch(getRequest());
    return axios.get(`https://bfc-i90o.onrender.com/bfc`,params)
    .then((res)=>dispatch(getSuccess(res.data)))
    .catch((err)=>dispatch(getError()));
}

export {getData}
