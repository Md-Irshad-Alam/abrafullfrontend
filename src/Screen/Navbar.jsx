import React, { useContext, useState } from 'react';
import style from '../ModuleStyle/Nav.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { IoMdLogIn } from 'react-icons/io';
import { AuthContext } from '../contexts/MyContxt';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Product from '../componats/Productcomp/Product';
function Navbar() {
  const [ismodal, setmodel] = useState(false);

  const handlemodal = () => {
    setmodel(!ismodal);
  };
  const handlelogout = () => {
    window.alert('user log out');
  };

  const history = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  return (
    <>
      <div className={style.mainNav}>
        <div className={style.InnerNav}>
          <div className={style.left}>Logo</div>
          <div className={style.right}>
            <FaCartPlus />
            <IoMdLogIn onClick={handlemodal} />
          </div>
        </div>
      </div>
      <div className={ismodal ? style.modalview : style.modalhide}>
        <p>My store</p>
        <Link to='/profile'>Profile</Link>
        <p>
          {loggedUser !== undefined ? (
            <button onClick={handlelogout}>Logout</button>
          ) : (
            <button size='sm' variant='secondary' onClick={history('/login')}>
              Login
            </button>
          )}
        </p>
      </div>
      <Product />
      <Product />
      <Product />
    </>
  );
}

export default Navbar;
