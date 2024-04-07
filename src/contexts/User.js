import axios from 'axios';
import { Axios } from './index';
import { toast } from 'react-toastify';

export async function LoginAPI(email, password) {
  return Axios.post('auth/login', {
    email,
    password,
  });
}
export async function registerApi({ formdata }) {
  return Axios.post('auth/register', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    body: formdata,
  });
}

export const getusers = () => {
  return Axios.get('auth/getuser');
};
export const logout = () => {
  return Axios.get('auth/logout');
};
export const Addcategory = (formdata) => {
  Axios.post('categories/add', formdata, {
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
  return Axios.post('product/add', formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
export const getproduct = (catoId) => {
  return Axios.get('product');
};
