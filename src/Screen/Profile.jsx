import React from 'react';
import style from '../ModuleStyle/Nav.module.css';
import { useContext } from 'react';
import { AuthContext } from '../contexts/MyContxt';
import { Link } from 'react-router-dom';
function Profile() {
  const { loggedUser } = useContext(AuthContext);

  return (
    <div className={style.profileMain}>
      <div className={style.profileinner}>
        {loggedUser != undefined ? (
          <>
            <img src={loggedUser.avatar} alt='' />
            <p>
              Full Name: <span>{loggedUser.name}</span>
            </p>
            <p>
              Username: <span>{loggedUser.username}</span>
            </p>
            <p>
              Email: <span>{loggedUser.email}</span>
            </p>
          </>
        ) : (
          'User is not login'
        )}
      </div>
      <Link to='/'>Go to home</Link>
    </div>
  );
}

export default Profile;
