// src/lib/api.js
import axios from "axios";
import { BASE_URL } from "./constants";

// Membuat instance axios dengan konfigurasi default
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menangani error global
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const customError = {
      ...error,
      message: error.response?.data?.message || "Terjadi kesalahan",
      status: error.response?.status,
    };
    return Promise.reject(customError);
  },
);

// Fungsi wrapper untuk request dengan error handling
export const fetchData = async (url, options = {}) => {
  try {
    const response = await apiClient({
      url,
      ...options,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

export default apiClient;
