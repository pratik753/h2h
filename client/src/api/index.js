import axios from "axios";
const API_BASE = axios.create({ baseURL: "http://localhost:8800/api/" });
API_BASE.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }

  return req;
});
export const login = (data) => API_BASE.post(`auth/login`, data);
export const register = (data) => API_BASE.post(`auth/register`, data);
export const getAllDealer = () => API_BASE.get(`products/alldealer`);
export const orderAll = () => API_BASE.get(`products/orders`);
export const productAll = () => API_BASE.get("products/getall");
export const productAdd = (data) => API_BASE.post("products/data", data);
export const getPre = () => API_BASE.get(`products/getpres`);
