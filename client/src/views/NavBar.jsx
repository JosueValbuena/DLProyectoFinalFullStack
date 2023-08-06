import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import CardWidget from '../components/CardWidget'
import { DataContext } from '../context/DataContext'

//lau
import logo from "../images/logo.png";
//

const NavBar = () => {

  const {totalItems, shoppingCart} = useContext(DataContext);
  console.log(totalItems)
  console.log(shoppingCart)

  return (
    <div className='navbar'>
        <h1>Logo</h1>
        <div>
        <ul className='navbar-list'>
            <NavLink to="/" className="li">Inicio</NavLink>
            <NavLink to="/categoria/categoriaDos" className="li">Categorias</NavLink>
            <NavLink to="/login" className="li">Iniciar Sesion</NavLink>
            <NavLink to="/register" className="li">Crea una cuenta</NavLink>
            <NavLink to="/shopping-cart" className="li cart"><CardWidget />{totalItems}</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
