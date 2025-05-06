import axios from "axios";
import { GLOBAL_CONFIGS } from "../lib/configs";

const apiClient = axios.create({
  baseURL: GLOBAL_CONFIGS.BASE_URL + "/api/v1/",
});

export default apiClient;

apiClient.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("authTokens"))?.access;
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});
