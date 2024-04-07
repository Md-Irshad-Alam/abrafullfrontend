import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/MyContxt';
function ViewCategory() {
  const [data, setdata] = useState([]);
  const { id } = useParams();
  const { loggedUser } = useContext(AuthContext);
  const viewdetails = () => {
    try {
      if (loggedUser) {
        axios
          .get(`https://abrabackendapp.onrender.com/categories/single/${id}`)
          .then((res) => setdata(res.data))
          .catch((error) => window.alert('something went wrong !'));
      }
    } catch (error) {
      console.log('something bad ');
    }
  };
  useEffect(() => {
    viewdetails();
  }, [loggedUser]);
  return (
    <div className='viewContainer'>
      <div className='catomain'>
        <div className='card'>
          <img src={data.image} alt='image' />
          <div className='content'>
            <p>
              Category : <span>{data.name}</span>
            </p>
            <p>
              slug : <span>{data.slug}</span>
            </p>
            <Link to='/category'>go back</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewCategory;
