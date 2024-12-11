import axios from "axios";
import { refreshAccessToken } from "./auth";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

api.interceptors.request.use(
  (config) => {
    // Lấy access token từ localStorage và thêm vào header
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Nếu không có lỗi, trả về response như bình thường
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Kiểm tra nếu lỗi 401 (Unauthorized) - Token hết hạn
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Sử dụng refresh token để lấy access token mới
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;

        // Thử lại yêu cầu gốc với token mới
        return axios(originalRequest);
      } catch (err) {
        // Nếu không thể refresh token, đăng xuất người dùng và điều hướng tới trang đăng nhập
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        window.location.href = "/login"; // Điều hướng tới trang login
      }
    }

    return Promise.reject(error);
  }
);

export default api;
