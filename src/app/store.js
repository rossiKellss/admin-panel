import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../api/apiSlice";
import authReducer from '../features/auth/authSlice';
import productReducer from '../features/product/productSlice'

export const store=configureStore({
    reducer:{
        [baseApi.reducerPath]:baseApi.reducer,
        auth:authReducer,
        product:productReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(baseApi.middleware),
    
})