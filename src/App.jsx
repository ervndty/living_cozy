import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';
import CartPage from './pages/checkout/CartPage';
import PromoPage from './pages/PromoPage';
import RoomsPage from './pages/RoomsPage';
import InspirationPage from './pages/InspirationPage';
import RegisterPage from './pages/login&regis/RegisterPage';
import ProductDetail from './components/ProductDetail';
import InspirationDetail from './components/InspirationDetail';
import RoomsDetail from './components/RoomsDetail';
import AfterRoomsDetail from './components/AfterRoomsDetail';
import ProfilePage from './pages/login&regis/ProfilePage';
import HistoryProfile from './components/product&profile/HistoryProfile';
import SearchResults from './pages/productPages/SearchResults';

import ProductsPage from './pages/productPages/ProductsPage';
import ChairPage from './pages/productPages/ChairPage';
import MattressPage from './pages/productPages/MattressPage';
import SofaPage from './pages/productPages/SofaPage';
import StoragePage from './pages/productPages/StoragePage';
import TablePage from './pages/productPages/TablePage';
import Login from './pages/login&regis/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleClose = () => {
    // Logic to close the modal if necessary
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/history" element={<HistoryProfile />} />
        <Route path="/payment" element={<PaymentPage />}/>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product" element={<ProductsPage />} />
        <Route path="/Pdetail/:id" element={<ProductDetail />} />
        <Route path="/promo" element={<PromoPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/Rdetail/:id" element={<RoomsDetail />} />
        <Route path="/ARdetail/:id" element={<AfterRoomsDetail />} />
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/Idetail/:id" element={<InspirationDetail />} />
        <Route path="/login" element={<Login onLogin={handleLogin} handleClose={handleClose} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chair" element={<ChairPage />} />
        <Route path="/mattress" element={<MattressPage />} />
        <Route path="/sofa" element={<SofaPage />} />
        <Route path="/storage" element={<StoragePage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      {/* <FooterComp /> */}
    </div>
  );
}

export default App;
