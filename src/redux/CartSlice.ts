import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProduct, CartProductPayLoad, CartSlice } from "../types";

const initialState = {
  products: [],
  quantity: 0,
  total: 0,
} as CartSlice;

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (
      state,
      { payload: { product } }: PayloadAction<{ product: CartProductPayLoad }>
    ) => {
      const existingProduct = state.products.find(
        (prod) => prod.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
        existingProduct.total = +(
          existingProduct.quantity * existingProduct.price
        ).toFixed(2);
      } else {
        state.products.push(product);
      }
      state.quantity = state.products.reduce(
        (sum, { quantity }) => sum + quantity,
        0
      );
      state.total = state.products.reduce(
        (sum, { total }) => +(sum + total).toFixed(2),
        0
      );
    },
    deleteProduct: (state, { payload }: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter((prod) => prod.id !== payload.id);
      state.quantity = state.products.reduce(
        (sum, { quantity }) => sum + quantity,
        0
      );
      state.total = state.products.reduce(
        (sum, { total }) => +(sum + total).toFixed(2),
        0
      );
    },
  },
});

export const { addProduct, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
