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
import { AuthContext } from '../contexts/MyContxt';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Login() {
  const [eyebtn, seteyebtn] = useState(false);
  const [inputval, setinpput] = useState({});
  const toggleeye = () => {
    seteyebtn(!eyebtn);
  };
  const { login } = useContext(AuthContext);
  const handleinput = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setinpput({ ...inputval, [name]: value });
  };
  const history = useNavigate();
  const handlesubmit = async () => {
    try {
      const { email, password } = inputval;
      login(email, password);
    } catch (error) {
      console.log(error);
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
            <Form.Floating className='mb-3'>
              <Form.Control
                id='floatingInputCustom'
                type='email'
                placeholder='name@example.com'
                name='email'
                onChange={(ev) => handleinput(ev)}
              />
              <label htmlFor='floatingInputCustom'>Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id='floatingPasswordCustom'
                type={eyebtn ? 'password' : 'text'}
                placeholder='Password'
                name='password'
                onChange={(ev) => handleinput(ev)}
              />
              <button onClick={toggleeye} className='passwordbtn'>
                {eyebtn ? <LuEye /> : <IoEyeOffOutline />}{' '}
              </button>
              <label htmlFor='floatingPasswordCustom'>Password</label>
            </Form.Floating>
            <Button className={style.loginbtn} onClick={handlesubmit}>
              Login
            </Button>
            <br />
            <p className='dntac'>
              Don't have an account? <Link to={'/signup'}>Sign Up</Link>
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

export default Login;
