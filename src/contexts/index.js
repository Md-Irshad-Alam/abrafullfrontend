import axios from 'axios';
// ordersystem.onrender.com/
export const Axios = axios.create({
  baseURL: ' https://abrabackendapp.onrender.com/',
  headers: { 'Content-Type': 'application/json' },
});
Axios.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('auth-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
