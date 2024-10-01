// src/axiosInstance.js
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const axiosInstance = axios.create({
  baseURL: apiUrl,
});

// Request interceptor: Add Authorization header before sending the request
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `JWT ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: Refresh the token when expired
axiosInstance.interceptors.response.use(
  (response) => response, // Pass successful responses
  async (error) => {
    const originalRequest = error.config;

    // Handle 401 Unauthorized error and refresh token
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        try {
          console.log("Attempting to refresh token...");

          const response = await axiosInstance.post("/api/auth/jwt/refresh", {
            refresh: refreshToken,
          });

          // Check if the response contains the access token
          const newAccessToken = response.data.access;
          if (newAccessToken) {
            console.log("New access token obtained:", newAccessToken);
            localStorage.setItem("access_token", newAccessToken);
            originalRequest.headers["Authorization"] = `JWT ${newAccessToken}`;
          } else {
            console.error("No new access token received");
          }

          // Ensure refresh token exists in the response before saving it
          if (response.data.refresh) {
            console.log("New refresh token obtained:", response.data.refresh);
            localStorage.setItem("refresh_token", response.data.refresh);
          } else {
            console.warn("No refresh token in response, keeping the old one");
          }

          return axiosInstance(originalRequest);
        } catch (err) {
          console.error("Token refresh failed", err);
          // Handle token refresh failure (e.g., logout the user)
        }
      } else {
        console.warn("No refresh token found in localStorage");
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
