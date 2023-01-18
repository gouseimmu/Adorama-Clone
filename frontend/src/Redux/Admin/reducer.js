import * as types from "./actionTypes"
const initialState={
    isLoading:false,
    isError:false,
    data:[]
}

const reducer=(oldstate=initialState,action)=>{
    const {type,payload}=action;
    switch (type){
        case types.GET_ERROR:
        return {
            ...oldstate,isError:true,isLoading:false
        }
        case types.GET_REQUEST:
            return{
                ...oldstate,isLoading:true
            }
        case types.GET_SUCCESS:
            return{
                ...oldstate,isLoading:false,data:payload
            }
        default:
        return oldstate;
    }
}

export default reducer;