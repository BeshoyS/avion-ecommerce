import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartSlice } from "../types";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
} as CartSlice;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<CartSlice>) => {
      console.log({ state, action });
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
