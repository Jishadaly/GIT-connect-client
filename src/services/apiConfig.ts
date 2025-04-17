// services/api.ts
import axios from "axios";

const baseURL = import.meta.env.VITE_BASE_URI;

const api = axios.create({
  baseURL: baseURL, // Replace with your actual backend base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
