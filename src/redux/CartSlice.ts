import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSlice, Product } from "../types";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
} as CartSlice;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<{ product: Product }>) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.product.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
