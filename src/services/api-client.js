import axios from "axios";
import { GLOBAL_CONFIGS } from "../lib/configs";

const apiClient = axios.create({
  baseURL: GLOBAL_CONFIGS.BASE_URL + "/api/v1/",
});

export default apiClient;
