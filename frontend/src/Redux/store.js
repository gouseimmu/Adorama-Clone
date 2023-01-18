import React from "react";
import {combineReducers,legacy_createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk";
import AdminReducer from "../Redux/Admin/reducer";

const rootReducer=combineReducers({
    AdminReducer
})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
// console.log(store.getState)
export {store};
