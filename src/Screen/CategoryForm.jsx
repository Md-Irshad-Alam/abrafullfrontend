import axios from 'axios';
import React, { useContext, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../contexts/MyContxt';
import { Addcategory } from '../contexts/User';

function CategoryForm() {
  const [name, setname] = useState();
  const [slug, setslug] = useState();
  const [image, setimage] = useState(null);
  const { loggedUser } = useContext(AuthContext);
  const handlesubmit = (event) => {
    event.preventDefault();
    if (name || slug || image) {
      const formdata = new FormData();
      formdata.append('name', name);
      formdata.append('slug', slug);
      formdata.append('image', image);
      formdata.append('owner', loggedUser._id);
      Addcategory(formdata);
    }
  };
  return (
    <div className='container absolute top-28 '>
      <div className=' w-30 m-auto mt-28'>
        <form action='' onSubmit={handlesubmit}>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
            <label htmlFor='floatingInputCustom'> Name</label>
          </Form.Floating>
          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              id='floatingInputCustom'
              type='text'
              value={slug}
              onChange={(event) => setslug(event.target.value)}
            />
            <label htmlFor='floatingInputCustom'> Slug</label>
          </Form.Floating>

          <Form.Floating className='mt-3 mb-3'>
            <Form.Control
              type='file'
              onChange={(event) => setimage(event.target.files[0])}
            />
          </Form.Floating>

          <Form.Control
            type='submit'
            value='Submit'
            className='bg-teal-300 font-bold'
          />
        </form>
      </div>
    </div>
  );
}

export default CategoryForm;
