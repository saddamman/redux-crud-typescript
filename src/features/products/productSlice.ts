import { createSlice, PayloadAction, AsyncThunk } from "@reduxjs/toolkit";
import { Products } from "./type";
import toast from "react-hot-toast";
import { fetchProductsData } from "./productAction";

interface ProductsState {
  products: Products[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: null
};

// Define a type for the action returned by fetchProductsData
type FetchProductsAction = AsyncThunk<Products[], void, object>;


const productsSlice = createSlice({
  name: "products", // Updated slice name for clarity
  initialState,
  reducers: {
    getProducts(state, action: PayloadAction<Products[]>) {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    const handleAsyncAction = (
      actionType: FetchProductsAction,
      stateUpdateFn: (state: ProductsState, payload: Products[]) => void,
      successMessage: string,
      errorMessage: string
    ) => {
      builder
        .addCase(actionType.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(actionType.fulfilled, (state, action) => {
          state.status = 'succeeded';
          stateUpdateFn(state, action.payload);
          if (successMessage) {
            toast.success(successMessage, {
              id: `${actionType.typePrefix}Success`, 
              duration: 3000, 
            });
          }
        })
        .addCase(actionType.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message || 'Something went wrong'; // Ensure error message is properly handled
          if (errorMessage) {
            toast.error(errorMessage || action.error.message || 'An error occurred.', { 
              id: `${actionType.typePrefix}Error`, //
              duration: 3000, 
            });
          }
        });
    };

    handleAsyncAction(
      fetchProductsData,
      (state, payload) => {
        state.products = payload; // Assuming payload is an array of products
      },
      'Products fetched successfully!',
      'Failed to fetch products. Please try again!'
    );
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
