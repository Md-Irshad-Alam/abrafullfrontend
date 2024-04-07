import React, { useContext, useState } from 'react';
import style from '../ModuleStyle/Nav.module.css';
import { FaUserTie } from 'react-icons/fa';
import { MdLocalGroceryStore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CategorySlider from '../componats/Slider';
import { AuthContext } from '../contexts/MyContxt';
import Button from 'react-bootstrap/Button';
function Navbar() {
  const [show, setshow] = useState(false);
  const handlshow = () => {
    setshow(!show);
  };
  const history = useNavigate();
  const { logout, loggedUser } = useContext(AuthContext);
  const handlelogout = () => {
    if (!loggedUser) {
      history('/login');
      setshow(true);
    } else {
      logout();
      setshow(true);
    }
  };
  return (
    <>
      <div className='container absolute  bg-teal-950 text-white'>
        <div className='flex top-4 left-0 right-0 justify-between p-4 '>
          <div className=''>
            <h4 className='tex text-2xl font-bold'>Logo</h4>
          </div>
          <div className='flex items-center gap-x-6 text-2xl'>
            <MdLocalGroceryStore />
            <FaUserTie onClick={() => handlshow()} />
          </div>
        </div>
        <div className={show ? style.showview : style.hideview}>
          <Link to='/mystore'>Cart</Link>
          <Link to='/profile'>profile</Link>
          <Link to='/category'>View Category</Link>
          <button
            className='mt-2 bg-red-400 text-white pl-1 pr-1 cursor-pointer'
            onClick={handlelogout}
          >
            {loggedUser ? 'Logout' : 'Login'}
          </button>
        </div>
      </div>
      <div className=''></div>
    </>
  );
}

export default Navbar;
