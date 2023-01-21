import {CART_LOAD,CART_GET,CART_ERROR} from "./cart_action_type"

const initstate={
    cart_load:false,
    cart_data:[],
    cart_error:false
}

export const Cart_reducer =(state=initstate,{type,payload})=>{
    switch( type ){
        case CART_LOAD:{
            return ({...state,cart_load:true})
        }
        case CART_GET:{
            return({...state,cart_data:payload,cart_load:false,cart_eror:false})
        }
        case CART_ERROR:{
            return ({...state,cart_load:false,cart_eror:true})
            
        }
        default:{
            return(state)
        }
    }
}