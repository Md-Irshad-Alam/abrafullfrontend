import axios from 'axios';
import { Axios } from './index';
export async function LoginAPI(email, password) {
  return Axios.post('https://ordersystem.onrender.com/auth/login', {
    email,
    password,
  });
}
export async function registerApi({ formdata }) {
  return Axios.post('https://ordersystem.onrender.com/auth/register', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formdata,
  });
}

export const getusers = () => {
  return Axios.get('https://ordersystem.onrender.com/auth/getuser');
};
export const logout = () => {
  return Axios.get('https://ordersystem.onrender.com/auth/logout');
};
export const Addcategory = (formdata) => {
  Axios.post('https://ordersystem.onrender.com/categories/add', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => window.alert(' category added  successful'))
    .catch((error) => console.log(error));
};
export const getallcategory = () => {
  return Axios.get('categories');
};
export const GetsingleCategory = (catoId) => {
  return Axios.get(`categories/${catoId}`);
};
export const addproduct = (formdata) => {
  Axios.post('https://ordersystem.onrender.com/product/add', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((res) => window.alert(' Product added  successful'))
    .catch((error) => console.log(error));
};
export const getproduct = (catoId) => {
  return Axios.get('https://ordersystem.onrender.com/product');
};
