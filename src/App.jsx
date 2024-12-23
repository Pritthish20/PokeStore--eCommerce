import React from 'react'
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";
import Home from './pages/home/Home';
import Order from './pages/order/Order';
import Cart from './pages/cart/Cart';
import Dashboard from './pages/admin/dashboard/Dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import AddProduct from './pages/admin/pages/AddProduct';
import UpdateProduct from './pages/admin/pages/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Allproducts from './pages/allproducts/AllProducts';

function App() {
  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/allproducts" element={<Allproducts/>} />
          <Route path="/order" element={<ProtectedRoutes>
            <Order/>
          </ProtectedRoutes>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/dashboard" element={<ProtectedRoutesForAdmin>
            <Dashboard/>
          </ProtectedRoutesForAdmin>} />
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<ProtectedRoutesForAdmin>
            <AddProduct />
          </ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRoutesForAdmin>
            <UpdateProduct/>
          </ProtectedRoutesForAdmin>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer/>
      </BrowserRouter>
    </MyState>
    
  )
}

export default App



export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}


export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
 console.log(admin.user.email)
  if (admin.user.email === 'ps20@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}