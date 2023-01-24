import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { firebaseApi } from "../firebase/firebaseApi";
import cart from "./CartSlice";
const store = configureStore({
  reducer: { cart, [firebaseApi.reducerPath]: firebaseApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
});

export default store;

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
