import React, { useState } from 'react';
import style from '../ModuleStyle/Auth.module.css';
import Form from 'react-bootstrap/Form';
import { LuEye } from 'react-icons/lu';
import { IoEyeOffOutline } from 'react-icons/io5';
import {
  Container,
  Button,
  Row,
  Col,
  Input,
  InputGroup,
  Card,
} from 'react-bootstrap';
import { registerApi } from '../contexts/User';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
function Signup() {
  const [eyebtn, seteyebtn] = useState(false);
  const [eyebtn2, seteyebtn2] = useState(false);
  const [name, setname] = useState();
  const [username, setusername] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [avatar, setavatar] = useState(null);
  const history = useNavigate();
  const toggleeye1 = () => {
    seteyebtn(!eyebtn);
  };
  const toggleeye2 = () => {
    seteyebtn2(!eyebtn2);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('username', username);
      formdata.append('email', email);
      formdata.append('avatar', avatar);
      formdata.append('password', password);
      if (name || username || password || email || avatar) {
        axios
          .post('https://ordersystem.onrender.com/auth/register', formdata, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((res) => {
            window.alert(' registration successful');
            history('/login');
          })
          .catch((error) => console.log(error));
      } else {
        window.alert('input is not valid');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={style.Container}>
        <Row className={style.innerCont}>
          <div className={style.inputs}>
            <div>
              <div className={style.circle}></div>
              <p className={style.pt}>APP NAME</p>
              <div className={style.content}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. In,
                esse!
              </div>
            </div>
            <form>
              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  id='floatingInputCustom'
                  type='text'
                  value={name}
                  onChange={(event) => setname(event.target.value)}
                />
                <label htmlFor='floatingInputCustom'>Full Name</label>
              </Form.Floating>
              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  id='floatingInputCustom'
                  type='text'
                  value={username}
                  onChange={(event) => setusername(event.target.value)}
                />
                <label htmlFor='floatingInputCustom'>Username</label>
              </Form.Floating>
              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  id='floatingInputCustom'
                  type='email'
                  value={email}
                  onChange={(event) => setemail(event.target.value)}
                />
                <label htmlFor='floatingInputCustom'>Email </label>
              </Form.Floating>
              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  id='floatingInputCustom'
                  type={eyebtn ? 'password' : 'text'}
                  value={password}
                />
                <button onClick={toggleeye1} className='passwordbtn'>
                  {eyebtn2 ? <LuEye /> : <IoEyeOffOutline />}{' '}
                </button>
                <label htmlFor='floatingInputCustom'>Password</label>
              </Form.Floating>
              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  id='floatingInputCustom'
                  type={eyebtn ? 'password' : 'text'}
                  value={password}
                  onChange={(event) => setpassword(event.target.value)}
                />
                <button onClick={toggleeye2} className='passwordbtn'>
                  {eyebtn2 ? <LuEye /> : <IoEyeOffOutline />}{' '}
                </button>
                <label htmlFor='floatingInputCustom'>Confirm Password</label>
              </Form.Floating>

              <Form.Floating className='mt-3 mb-3'>
                <Form.Control
                  type='file'
                  onChange={(event) => setavatar(event.target.files[0])}
                />
              </Form.Floating>
              <Button onClick={handleSubmit}>Signup</Button>
            </form>

            <br />
            <p className='dntac'>
              Already have account ! <Link to={'/login'}>Sign Up</Link>
            </p>
          </div>
          <Col>
            <div className={style.leftcontainer}>
              <div className={style.leftinner}>
                <div className={style.topleft}></div>
                <div className={style.bottomright}></div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Signup;
