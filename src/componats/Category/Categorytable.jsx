import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Stack from 'react-bootstrap/Stack';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { AuthContext } from '../../contexts/MyContxt';
function CategoryHome() {
  const { categories } = useContext(AuthContext);
  const navigate = useNavigate();
  const { loggedUser } = useContext(AuthContext);
  const [categoryId, setid] = useState(null);

  const handlesubmit = (id) => {
    axios
      .delete(`http://localhost:6060/categories/${id}`)

      .then((res) => {
        window.location.reload();
        toast.success('category deleted');
      })
      .catch((error) => toast.error('category  is not deleted'));
  };

  return (
    <div className=' w-80 absolute top-28 m-auto left-0 right-0'>
      <div>
        <h1 className='text-xl mb-4'>
          You can add category form here{' '}
          <span
            onClick={() => navigate('/addcategory')}
            className='text-blue-400 font-bold text-xl underline underline-offset-8 cursor-pointer'
          >
            Add category
          </span>
        </h1>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.L</th>
            <th>Category</th>
            <th>Slug</th>
            <th>image</th>
            <th>Action</th>
          </tr>
        </thead>
        {categories.length == 0 ? (
          <h1 className='text-red-500 font-bold text-center mt-9 '>
            No category is created by the user please create one
          </h1>
        ) : (
          categories !== undefined &&
          categories.map((ele, id) => {
            return (
              <tbody key={id}>
                <tr>
                  <td>{id + 1}</td>
                  <td>{ele.name.name}</td>

                  <td>{ele.name.slug}</td>

                  <td>
                    <img
                      src={ele.name.image}
                      alt=''
                      className='w- w-28 object-fill m-auto'
                    />
                  </td>
                  <td className='m-atuo'>
                    <Stack direction='horizontal' gap={3}>
                      <Button
                        variant='outline-danger'
                        onClick={() => handlesubmit(ele.name._id)}
                      >
                        Delete
                      </Button>
                      <div className='vr' />
                      <Button
                        variant='primary'
                        onClick={() => navigate(`/addproduct/${ele.name._id}`)}
                      >
                        Add Product
                      </Button>
                    </Stack>
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </Table>
    </div>
  );
}

export default CategoryHome;
