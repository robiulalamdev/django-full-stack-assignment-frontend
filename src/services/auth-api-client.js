import axios from "axios";
import { GLOBAL_CONFIGS } from "../lib/configs";

const authApiClient = axios.create({
  baseURL: GLOBAL_CONFIGS.BASE_URL + "/api/v1",
});

export default authApiClient;

// apiClient.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authTokens");
//     if (token) {
//       config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

authApiClient.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem("authTokens"))?.access;
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;
});
