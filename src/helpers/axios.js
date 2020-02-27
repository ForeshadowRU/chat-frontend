import axios from "axios";
import { history } from "helpers/history";

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
    let data = error.response;
    let dataStatus = "";
    let errorMessage = "";

    if (data) {
      dataStatus = data.status;
      errorMessage = data.data ?? data.data.error;
    }
    if (dataStatus !== 401) return Promise.reject(error);
    if (errorMessage !== "Token is Expired") {
      localStorage.clear("auth_token");

      if (window.location.pathname === "/login") {
        return Promise.reject(error);
      }
      history.push("/login");
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
