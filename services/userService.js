// src/services/userService.js
import { fetchData } from "@/lib/api";
import { ENDPOINTS } from "@/lib/constants";

// Service untuk operasi terkait user
export const userService = {
  // Mendapatkan daftar user
  getUsers: (params = {}) =>
    fetchData(ENDPOINTS.USERS, {
      method: "GET",
      params,
    }),

  // Mendapatkan detail user berdasarkan ID
  getUserById: (id) => fetchData(`${ENDPOINTS.USERS}/${id}`),

  // Membuat user baru
  createUser: (userData) =>
    fetchData(ENDPOINTS.USERS, {
      method: "POST",
      data: userData,
    }),

  // Mengupdate user
  updateUser: (id, userData) =>
    fetchData(`${ENDPOINTS.USERS}/${id}`, {
      method: "PUT",
      data: userData,
    }),

  // Menghapus user
  deleteUser: (id) =>
    fetchData(`${ENDPOINTS.USERS}/${id}`, {
      method: "DELETE",
    }),
};
