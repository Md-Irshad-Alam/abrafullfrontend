import React, { useContext, useEffect } from 'react';
import style from '../../ModuleStyle/product.module.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/MyContxt';
import CategorySlider from '../Slider';
function Product() {
  const history = useNavigate();
  const { product, show, setshow } = useContext(AuthContext);

  return (
    <div className='container absolute top-20 '>
      <div>
        <CategorySlider />
      </div>
      <div className={style.cardInner}>
        {product !== undefined &&
          product.map((ele, id) => {
            return (
              <div className={style.cardcontent} key={id}>
                <div className={style.imagecnt}>
                  <img src={ele.image} alt='product image' />
                </div>
                <div className={style.content}>
                  <h5>{ele.title}</h5>
                  <p>{ele.description}</p>
                  <p>
                    Rs <span>{ele.price}</span>
                  </p>
                  <button className={style.btn}>add to card</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Product;
