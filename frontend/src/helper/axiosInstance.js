import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://livepoll-w28i.onrender.com/api/v1`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;