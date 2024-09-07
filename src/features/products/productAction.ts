import {  createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../lib/constant";

export const fetchProductsData = createAsyncThunk('products/fetchProductsData', async () => {
    const response = await fetch(`${BASE_URL}/products`);
    const data = await response.json()
    
    return data;
})