import axios from "axios";
const axiosInstance = axios.create({
  baseURL: 'https://back-end-aspiration-ias.onrender.com', // Remove /api/v1
});
export default axiosInstance;
