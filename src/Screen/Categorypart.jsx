import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/MyContxt';
import axios from 'axios';
import CategoryForm from './CategoryForm';
import { GetsingleCategory } from '../contexts/User';
import { Link } from 'react-router-dom';
function Categorypart() {
  const [data, setdata] = useState([]);
  const { loggedUser, categories } = useContext(AuthContext);
  console.log(categories);
  return (
    <div className='main-container'>
      {loggedUser != undefined ? (
        <>
          <div className='catomain'>
            {categories.map((ele, id) => {
              return (
                <div className='card' key={id}>
                  <Link to={`/addproduct/${ele.name._id}`}>Add Product</Link>
                  <img src={ele.name.image} alt='image' />
                  <div className='content'>
                    <p>
                      Category : <span>{ele.name.name}</span>
                    </p>
                    <p>
                      slug : <span>{ele.name.slug}</span>
                    </p>
                    <Link to={`/view/${ele.name._id}`}>View Category</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h1>User is not logged in please login first</h1>
        </>
      )}
    </div>
  );
}

export default Categorypart;
