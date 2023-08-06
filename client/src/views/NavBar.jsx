import React from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "../components/CardWidget";
import logo from "../images/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img style={{ width: "100px", height: "100px" }} src={logo} alt="logo" />
      <div>
        <ul className="navbar-list">
          <NavLink to="/" className="li">
            Inicio
          </NavLink>
          <NavLink to="/categoria/categoriaDos" className="li">
            Categorias
          </NavLink>
          <NavLink to="/login" className="li">
            Iniciar Sesion
          </NavLink>
          <NavLink to="/register" className="li">
            Crea una cuenta
          </NavLink>
          <NavLink to="/carrito" className="li cart">
            <CardWidget />
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
