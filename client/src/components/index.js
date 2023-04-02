import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:8800" });

API.interceptors.request.use((req) => {
  //console.log(JSON.parse(localStorage.getItem("token")));
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${
      localStorage.getItem("token")
    }`;
    console.log("hello token");
  }
  console.log("bye ",req.headers.Authorization);
  
  return req;
});

export const fetchPosts = () => API.get("/api/products/dealer");
export const fetchallPosts=()=>API.get("/api/products/getall")
export const getPartData=(data)=>API.get(`/api/products/getpart/${data}`);
export const getParticularpresc=(data)=>API.get(`/api/products/getpres/${data}`);
export const getParticularDate=(data)=>API.post(`/api/products/getdate`,data);
