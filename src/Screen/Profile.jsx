import React, { useContext, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../contexts/MyContxt';
function Profile() {
  const { loggedUser } = useContext(AuthContext);

  const [show, setShow] = useState(false);
  const [avatar, setimage] = useState(null);
  const [name, setname] = useState();
  const [id, setid] = useState();
  const handleClose = () => setShow(false);
  const handleShow = (userId) => {
    setid(userId);
    setShow(true);
  };
  const handlesubmit = () => {
    const formdata = new FormData();
    formdata.append('name', name);
    formdata.append('avatar', avatar);

    if (name || avatar) {
      axios
        .put(
          `https://abrabackendapp.onrender.com/auth/update/${id}`,
          formdata,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )

        .then((res) => toast.success('profile updated'))
        .catch((error) => toast.error('profile is not updated'));
      window.location.reload();
      setShow(false);
    } else {
      toast.warn('invalid input !');
    }
  };

  return (
    <div className='abou absolute top-28 left-0 right-0  m-auto'>
      <div className='card w-30 absolute top-16 left-0 right-0 m-auto'>
        <img
          src={loggedUser.avatar}
          alt='profile'
          className=' w-full m-auto  object-cover'
        />
        <div className='content mt-3'>
          <p>
            Full Name{' '}
            <span className=' text-gray-500 font-semibold'>
              {loggedUser.name}
            </span>
          </p>
          <p>
            Username :{' '}
            <span className=' text-gray-500 font-semibold'>
              {loggedUser.username}
            </span>
          </p>
          <p>Email {loggedUser.email}</p>
        </div>
        <button
          className='bg-red-300 text-white font-bold text-lg mt-4'
          onClick={() => handleShow(loggedUser._id)}
        >
          update profile
        </button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                onChange={(ev) => setname(ev.target.value)}
                autoFocus
              />
            </Form.Group>
            <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
              <Form.Label>Avatar</Form.Label>
              <Form.Control
                type='file'
                onChange={(ev) => setimage(ev.target.files[0])}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={() => handlesubmit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
