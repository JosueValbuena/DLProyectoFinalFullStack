import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Error from '../views/Error'
import ShoppingCart from '../views/ShoppingCart'

//lau
import RegisterPage from "../views/RegisterPage";
import LoginPage from "../views/LoginPage";
import { ProfilePage } from "../views/ProfilePage";
//


const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item-detail/:id' element={<ItemDetail />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='*' element={<Error />}/>
          //lau
          <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/profile" element={<ProfilePage />} />    
          //
    </Routes>
  );
};
export default Routers;
