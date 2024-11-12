import { createSlice } from "@reduxjs/toolkit";

const initialState={
    ProductName:"",
    Category:"",
    Price:"",
    Quantity:"",
    fileName:"",




}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        updateProductCred:(state,action)=>{
            const {ProductName,Category,Price,Quantity,fileName}=action?.payload;
            state.ProductName=ProductName
            state.Category=Category
            state.Price=Price
            state.Quantity=Quantity
            state.fileName=fileName
            

            
            



        }
    }
    

})

export const {updateProductCred}=productSlice.actions;
export default productSlice.reducer;