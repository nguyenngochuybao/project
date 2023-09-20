import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import CartPage from './pages/Cart';
import OrderPage from './pages/OrderPage';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Login from './user/login';
import Register from './user/register';

import { useEffect } from 'react';
import jwtDecode from "jwt-decode";
import { getUserInfoRequest } from "./redux/auth"
import { useDispatch } from 'react-redux';
import './App.css';


function App ()
{

  const dispatch = useDispatch()
  
  
  useEffect( () =>
  {
    const accessToken = localStorage.getItem( "accessToken" )
    if ( accessToken )
    {
      const tokenData = jwtDecode( accessToken );
      dispatch( getUserInfoRequest( {id: tokenData.sub} ))
    }
  },[] )

  const location = useLocation();
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/cart" element={ <CartPage /> } />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
