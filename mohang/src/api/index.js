import axios from "axios";
import { BASE_URL } from "../static";

const apiInstance = axios.create({
  baseURL: BASE_URL,
});

// 요청 인터셉터 추가
apiInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 요청 에러 처리
    return Promise.reject(error);
  }
);
export default apiInstance;
