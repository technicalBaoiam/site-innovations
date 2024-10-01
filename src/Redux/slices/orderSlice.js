// local
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
import axiosInstance from "../../axiosInstance";

export const fetchOrders = createAsyncThunk("orders/fetchOrders", async () => {
  const response = await axiosInstance.get(`/api/orders/`);
  return response.data;
});

const initialState = {
  orders: [],
  status: "idle",
  error: null,
};

const orderSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;
