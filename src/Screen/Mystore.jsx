import React, { useContext, useState } from 'react';
import style from '../ModuleStyle/product.module.css';
import { AuthContext } from '../contexts/MyContxt';

function Mystore() {
  const { loggedUser, categories, product } = useContext(AuthContext);

  console.log(product);
  return (
    <div className='container absolute top-28 left-0 right-0'>
      <div className=''>
        {categories.map((category, index) => (
          <div key={index} className='mb-5 font-bold text-xl text-gray-400'>
            <h3>Category Name : {category.name.name}</h3>{' '}
            {/* Assuming 'name' is the property containing the category name */}
            <div className={style.cardInner}>
              {product
                .filter((prod) => prod.category === category._id)
                .map((prod, id) => (
                  <div className={style.cardcontent} key={id}>
                    <div className={style.imagecnt}>
                      <img src={prod.image} alt='product image' />
                    </div>
                    <div className={style.content}>
                      <h5>{prod.title}</h5>
                      <p>{prod.description}</p>
                      <p>
                        Rs <span>{prod.price}</span>
                      </p>
                      <button className={style.btn}>add to card</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mystore;
