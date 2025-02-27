import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_BACKEND_TARGET_URL || "http://localhost:3000"; // Fallback for local development

const axiosInstance = axios.create({
  baseURL: BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, 
});

export default axiosInstance;
