import axios from 'axios';

export const Axios = axios.create({
  baseURL: 'https://ordersystem.onrender.com/',
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
