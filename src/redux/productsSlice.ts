import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { endpoints } from "../api/endPoints";

interface State {
  categories: string[];
  isLoading: boolean;
  error: string | null;
}

// interface Categories {

// }

const initialState: State = { categories: [], isLoading: false, error: null };

export const getAllCategories = createAsyncThunk(
  "products/getAllCategories",
  async (_, thunkAPI) => {
    try {
      const {data} = await axios.get(endpoints.allCategories);
    //   console.log(data);
      return data as string[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.message);
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    //getAllCategories
    [getAllCategories.pending.type]: (state: State) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllCategories.fulfilled.type]: (
      state: State,
      action: PayloadAction<string[]>
    ) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.error = null;
    },
    [getAllCategories.rejected.type]: (
      state: State,
      action: PayloadAction<string>
    ) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default productsSlice.reducer;
