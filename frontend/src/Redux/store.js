import React from "react";
import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import AdminReducer from "../Redux/Admin/reducer";
import { Cart_reducer } from "./cart/cart_reducer";


const rootReducer=combineReducers({
    admin:AdminReducer,
    cart:Cart_reducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
// console.log(store.getState)
export {store};
