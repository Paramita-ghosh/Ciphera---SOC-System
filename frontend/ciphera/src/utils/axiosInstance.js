import axios from "axios";
import { BASE_URL } from "./apiPath";

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);


axiosInstance.interceptors.response.use(
    (response) => response,

    (error) => {
        if (!error.response) {
            console.error("Network error or backend is offline");
            return Promise.reject(error);
        }

        const status = error.response.status;

        // Unauthorized → Token missing or expired
        if (status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/";   // redirect to login
        }

        // Forbidden → Role not allowed (Admin-only or Analyst-only)
        if (status === 403) {
            alert("Access denied. You don't have permission for this.");
        }

        // Internal server
        if (status === 500) {
            console.error("Server error. Try again later.");
        }

        // Timeout error
        if (error.code === "ECONNABORTED") {
            console.error("Request timeout. Please try again.");
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;