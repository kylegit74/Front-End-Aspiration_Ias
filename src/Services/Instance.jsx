import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // Remove /api/v1
});
export default axiosInstance;
