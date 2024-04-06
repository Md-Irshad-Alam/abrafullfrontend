import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import Login from './Screen/Login';
import Signup from './Screen/Signup';
import { Routes, Route } from 'react-router-dom';
import AuthContextProvider from './contexts/MyContxt';
import Navbar from './Screen/Navbar';
import Profile from './Screen/Profile';
import Product from './componats/Productcomp/Product';
import Category from './componats/Category';
import Categorypart from './Screen/Categorypart';
import ViewCategory from './Screen/ViewCategory';
import ProductForm from './componats/Productcomp/ProductForm';
function App() {
  return (
    <div className='App'>
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cato' element={<Category />} />
          <Route path='/category' element={<Categorypart />} />
          <Route path='/view/:id' element={<ViewCategory />} />
          <Route path='/product' element={<Product />} />
          <Route path='/addproduct/:id' element={<ProductForm />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
