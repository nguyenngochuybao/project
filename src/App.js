import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductPage from './pages/Product';
import OrderPage from './pages/Cart';

import Header from './layouts/Header';
import Footer from './layouts/Footer';

import Login from './user/login/login';
import Register from './user/register/register';
import './App.css';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/' || location.pathname === '/register';

  return (
    <div className="App">
      {!isLoginPage && <Header />}
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;
