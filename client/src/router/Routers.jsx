import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Error from '../views/Error'
import ShoppingCart from '../views/ShoppingCart'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item-detail/:id' element={<ItemDetail />} />
        <Route path='/shopping-cart' element={<ShoppingCart />} />
        <Route path='*' element={<Error />}/>
    </Routes>
  )
}

export default Routers