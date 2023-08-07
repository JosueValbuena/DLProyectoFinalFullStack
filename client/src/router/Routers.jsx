import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Error from '../views/Error'
import ShoppingCart from '../views/ShoppingCart'

import ProfileGallery from '../views/ProfileGallery.jsx'
import PublicarProducto from '../views/PublicarProducto.jsx'

//lau
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import { ProfilePage } from "../views/ProfilePage";
import { DataContext } from '../context/DataContext'

const Routers = () => {
         
  const {isAuthenticated} = useContext(DataContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/item-detail/:id' element={<ItemDetail />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user-profile" element={isAuthenticated ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path='/profile-gallery' element={<ProfileGallery />} />
            <Route path='/post-product' element={<PublicarProducto />} />
      <Route path='*' element={<Error />} />
    </Routes>
  );
};
export default Routers;
