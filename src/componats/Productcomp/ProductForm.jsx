import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import {
  Container,
  Button,
  Row,
  Col,
  Input,
  InputGroup,
  Card,
} from 'react-bootstrap';
import style from '../../ModuleStyle/product.module.css';
import { AuthContext } from '../../contexts/MyContxt';
import { useParams } from 'react-router-dom';
import { addproduct } from '../../contexts/User';
function ProductForm() {
  const [inputval, setinputval] = useState({});
  const [image, setimage] = useState(null);
  const handleinput = (event) => {
    const { name, value } = event.target;
    setinputval({ ...inputval, [name]: value });
  };
  const { loggedUser, categories } = useContext(AuthContext);
  var { id } = useParams();

  const handlesubmit = (event) => {
    event.preventDefault();
    try {
      const { title, description, price } = inputval;
      if (image || title || description || price || id || loggedUser) {
        const formdata = new FormData();
        formdata.append('title', title);
        formdata.append('description', description);
        formdata.append('price', price);
        formdata.append('ownerId', loggedUser._id);
        formdata.append('categoryId', id);
        formdata.append('image', image);
        addproduct(formdata);
      } else {
        window.alert('invalid input!');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='container'>
      <div className={style.productinner}>
        <form action='' onSubmit={handlesubmit}>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              name='title'
              onChange={(ev) => handleinput(ev)}
            />
            <label htmlFor='floatingInputCustom'>Title</label>
          </Form.Floating>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              name='description'
              onChange={(ev) => handleinput(ev)}
            />
            <label htmlFor='floatingInputCustom'>Description</label>
          </Form.Floating>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              name='price'
              onChange={(ev) => handleinput(ev)}
            />
            <label htmlFor='floatingInputCustom'>Price</label>
          </Form.Floating>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='file'
              onChange={(ev) => setimage(ev.target.files[0])}
            />
          </Form.Floating>
          <Form.Control type='submit' value='Submit' />
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
