import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import ItemDetail from '../views/ItemDetail'
import Error from '../views/Error'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/item-detail/:id' element={<ItemDetail />} />
        <Route path='*' element={<Error />}/>
    </Routes>
  )
}

export default Routers