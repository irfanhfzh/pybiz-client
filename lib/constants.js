// src/lib/constants.js
export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

export const ENDPOINTS = {
  USERS: "/users",
  POSTS: "/posts",
  // Tambahkan endpoint lain sesuai kebutuhan
};

export const API_TIMEOUT = 10000; // 10 detik
export const CACHE_REVALIDATION_TIME = 60; // 1 menit
