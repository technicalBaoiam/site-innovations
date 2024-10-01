// local
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../axiosInstance";
const apiUrl = import.meta.env.VITE_API_URL;

// Async thunk to fetch enrollment list of courses ->
export const fetchEnrolledCourses = createAsyncThunk(
  "courses/fetchEnrolledCourses",
  async () => {
    const response = await axiosInstance.get(`/api/enroll/`);
    return response.data;
  }
);

// Async thunk to fetch program list of courses ->
export const fetchFeaturedCourses = createAsyncThunk(
  'courses/fetchFeaturedCourses', 
  async () => {
    const response = await axios.get(`${apiUrl}/api/courses/featured/`); 
    // console.log(response.data, 'featured courses')
    // console.log(import.meta.env, apiUrl, 'vite env val production mode');
    return response.data;
  }
);

// Async thunk to fetch program list of courses ->
export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAllCourses",
  async () => {
    const response = await axios.get(`${apiUrl}/api/categories/`);
    // console.log(response, "response thunk");
    return response.data;
  }
);

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    enrolledCourses: [],
    featuredCourses: [],
    allCourses: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle fetchEnrolledCourses
    builder
      .addCase(fetchEnrolledCourses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEnrolledCourses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.enrolledCourses = action.payload;
      })
      .addCase(fetchEnrolledCourses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

      // Handle fetchFeaturedCourses
      builder
      .addCase(fetchFeaturedCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchFeaturedCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.featuredCourses = action.payload;
      })
      .addCase(fetchFeaturedCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });

    // Handle fetchAllCourses
    builder
      .addCase(fetchAllCourses.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allCourses = action.payload;
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default coursesSlice.reducer;
