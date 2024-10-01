import { createSlice } from "@reduxjs/toolkit";

// Initial state with both isLoggedIn and accessToken
const initialState = {
  isLoggedIn: JSON.parse(localStorage.getItem("login")) || false,
  accessToken: null, // Include accessToken in the initial state
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("Logging in..."); // Debugging log
      state.isLoggedIn = true;
      state.accessToken = action.payload; // Store accessToken from action payload
      localStorage.setItem("login", true); // Sync with localStorage
      localStorage.setItem("access_token", action.payload); // Sync token
    },
    logout(state) {
      console.log("Logging out..."); // Debugging log
      state.isLoggedIn = false;
      state.accessToken = null; // Clear accessToken on logout
      localStorage.setItem("login", false); // Sync with localStorage
      localStorage.removeItem("access_token"); // Remove token from localStorage
    },
  },
});

// Export both login and logout actions
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
