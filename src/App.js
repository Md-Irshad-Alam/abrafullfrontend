import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/MyContxt';
import Navbar from './Screen/Navbar';
import Profile from './Screen/Profile';
import Product from './componats/Productcomp/Product';
import ViewCategory from './Screen/ViewCategory';
import ProductForm from './componats/Productcomp/ProductForm';
import CategoryHome from './componats/Category/Categorytable';
import Mystore from './Screen/Mystore';
import CategoryForm from './Screen/CategoryForm';
function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          {/* <Route path='/cato' element={<CategorySlider />} /> */}
          <Route path='/category' element={<CategoryHome />} />
          <Route path='/addcategory' element={<CategoryForm />} />
          <Route path='/view/:id' element={<ViewCategory />} />
          {/* <Route path='/product' element={<Product />} /> */}
          <Route path='/addproduct/:id' element={<ProductForm />} />
          <Route path='/mystore' element={<Mystore />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
