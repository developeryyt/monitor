import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice/index.js";

const reducer = combineReducers({
    auth: authReducer,
})

export const store = configureStore({
    reducer,
})


