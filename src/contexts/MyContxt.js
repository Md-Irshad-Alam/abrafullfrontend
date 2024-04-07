import { createContext, useReducer } from 'react';
import React, { useContext, useEffect, useState } from 'react';

import { redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginAPI, getallcategory, getproduct, getusers } from './User';

export function AuthContextProvider({ children }) {
  const [loading, setloading] = useState(true);
  const [Islogin, setlogin] = useState(false);
  const [loggedUser, setuser] = useState({});
  const [data, seetdata] = useState([]);
  const [categories, setcategory] = useState([]);
  const [product, setproduct] = useState([]);
  const [show, setshow] = useState(false);
  const navigate = useNavigate();

  function login(email, password) {
    LoginAPI(email, password)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('auth-token', token);
        toast(`${response.data.message} with code ${response.status}`);
        navigate('/');
        window.location.reload();
      })
      .catch((error) => {
        toast('login faild, Please try again ');
        setloading(true);
      });
  }

  useEffect(() => {
    const token = localStorage.getItem('auth-token');

    if (token) {
      getusers().then((responce) => {
        let userdata = responce.data.data;
        setuser(userdata);
      });
    } else {
      setuser();
    }
  }, []);

  const getcategory = () => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      getallcategory().then((responce) => {
        let userdata = responce.data;

        const arrayofcategory = Object.keys(userdata).map((key) => ({
          id: key,
          name: userdata[key],
        }));
        const usercategory = arrayofcategory.filter((category) => {
          const categories = category.name.owner;
          if (categories.id === loggedUser._id) {
            return categories;
          }
        });
        if (usercategory) {
          setcategory(usercategory);
        }
      });
    }
  };

  const getProduct = () => {
    const token = localStorage.getItem('auth-token');
    if (token) {
      getproduct()
        .then((res) => {
          const product = res.data;
          if (show === false) {
            if (product) {
              const filtermyproduct = product.filter((ele) => {
                if (ele.ownerId.id === loggedUser._id) {
                  return ele;
                } else {
                  return [];
                }
              });
              setproduct(filtermyproduct);
            } else {
              console.log('Noting product added');
            }
          }
        })

        .catch((error) => console.log(error));
    }
  };
  useEffect(() => {
    getcategory();
    getProduct();
  }, [loggedUser]);

  async function logout() {
    try {
      const token = localStorage.getItem('auth-token');
      if (token) {
        localStorage.removeItem('auth-token');
        toast.success('User successfully Logged out');
        navigate('/login');
        window.location.reload();
        setlogin(true);
      }
    } catch (error) {
      console.log(error);
      toast.error('Faild to logged out');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        loading,
        loggedUser,
        categories,
        product,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const AuthContext = createContext();
export default AuthContextProvider;
