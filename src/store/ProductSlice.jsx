import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { status } from "../Utils/Status";

const products = {
  data: [],
  status: status.IDLE,
};

const productSlice = createSlice({
  name: "productSlice",
  initialState: products,
  reducers: {
    // fetchProducts(state, action) {
    //   state.data = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = status.IDLE;
      })
      .addCase(getProducts.pending, (state, action) => {
        state.status = status.LOADING;
      });
  },
});

// export const getProducts = () => {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//   };
// };

export const getProducts = createAsyncThunk("products/get", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;
