import axios from "axios";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Cache-Control"] = "no-cache";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authorization = "";

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = token;
    }

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    Promise.reject(error);
  }
);

export default axiosInstance;
