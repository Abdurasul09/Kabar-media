import axios from "axios";

const api = axios.create({
  baseURL: "https://newsproject-3gfaz.ondigitalocean.app/",
});

export default api;

// export const API = "http://localhost:4200/posts";
export const MOST_READ_API = "http://localhost:4200/mostread";
export const INTERESTING_POSTS_API = "http://localhost:4200/interesting";
