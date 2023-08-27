import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import CardWidget from "../components/CardWidget";
import { DataContext } from "../context/DataContext";
import logo from "../images/logo.png";

const NavBar = () => {
  const { totalItems, isAuthenticated, setIsAuthenticated } =
    useContext(DataContext);

  const logOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="navbar">
      <img alt="logo" src={logo} width="100px" />
      <div>
        <ul className="navbar-list">
          <NavLink to="/" className="li">
            Inicio
          </NavLink>
          {/* <NavLink to="/categoria/categoriaDos" className="li">
            Categorias
          </NavLink> */}
          {isAuthenticated ? (
            <NavLink to="/user-profile" className="li">
              Perfil
            </NavLink>
          ) : (
            <NavLink to="/login" className="li">
              Iniciar Sesion
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink to="/liked" className="li">
              Favoritos
            </NavLink>
          )}
          {isAuthenticated && (
            <NavLink to="/post-product" className="li">
              Publicar Producto
            </NavLink>
          )}
          {isAuthenticated ? (
            <NavLink to="/" className="li" id="li-logut" onClick={logOut}>
              Cerrar Sesion
            </NavLink>
          ) : (
            <NavLink to="/register" className="li">
              Crea una cuenta
            </NavLink>
          )}
          <NavLink to="/shopping-cart" className="li cart">
            <CardWidget />
            {totalItems}
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
