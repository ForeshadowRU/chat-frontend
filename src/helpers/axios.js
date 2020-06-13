import axios from "axios";
import { history } from "helpers/history";
import { store } from "../redux";
import { logout } from "redux/user/actions";

axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.headers.common["X-Cache-Control"] = "no-cache";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    let data = error.response;
    let dataStatus = "";

    if (data) {
      dataStatus = data.status;
    }
    if (dataStatus !== 401) return Promise.reject(error);
    localStorage.clear("auth_token");
    store.dispatch(logout());
    history.push("/login");
    return Promise.reject(error);
  }
);

export default axiosInstance;
