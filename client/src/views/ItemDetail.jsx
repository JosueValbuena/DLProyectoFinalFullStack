import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import axios from "axios";

const ItemDetail = () => {

  const [comentarios, setComentarios] = useState([]);
  const [loader, setLoader] = useState(true);
  const [favoritosBtn, setFavoritosBtn] = useState(false);


  const { data, shoppingCart, setShoppingCart, user, favoritos, setFavoritos, getFavoritos } = useContext(DataContext);

  const id = useParams();

  const getComentarios = async () => {
    const data = await fetch("http://localhost:3001/comentarios/" + id.id);
    const res = await data.json();
    setLoader(false);
    setComentarios(res)
  }

  useEffect(() => {
    getComentarios();
    const isExist = favoritos.find(ele => ele.id === product.id);
    isExist && setFavoritosBtn(true);
    getFavoritos()
  }, [])



  const product = data.find((ele) => ele.id === Number(id.id));

  const toSCAdd = {
    id: product.id,
    url: product.url,
    title: product.title,
    description: product.description,
    price: product.price,
    qty: 1,
  };

  const addSC = (event) => {
    event.stopPropagation();
    const isExist = shoppingCart.find((ele) => ele.id === product.id);
    if (isExist) {
      const products = shoppingCart.map((ele) =>
        ele.id === product.id ? { ...ele, qty: ele.qty + 1 } : ele
      );
      setShoppingCart([...products]);
    } else {
      setShoppingCart([...shoppingCart, toSCAdd]);
    }
  };

  const setProductoFavorito = async () => {
    const idUser = user[0].id;
    const idProduct = product.id;
    await axios.post("http://localhost:3001/favoritos", { idUser, idProduct })
  }

  const deleteProductoFavaorito = async () => {
    const idUser = user[0].id;
    const idProduct = product.id;
    console.log(idUser);
    try {
      const response = await axios.delete("http://localhost:3001/usuario/" + idUser + "/publicacion/" + idProduct);
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const handleFavoritos = () => {
    const isExist = favoritos.find(ele => ele.id === product.id);
    if (isExist) {
      setFavoritosBtn(false)
      deleteProductoFavaorito();
      setFavoritos([]);
      getFavoritos()
    } else {
      setFavoritosBtn(true)
      setProductoFavorito();
      getFavoritos()
    }
  }

  return (
    <div>
      <div className="itemDetail">
        <img className="itemDetail-img" src={product.img} alt="" />
        <div>
          <h3>{product.titulo}</h3>
          <p>Vendido por {product.id_usuario}</p>
          <p>{product.descripcion}</p>
          <p>{product.precio}</p>
          <button className="itemDetail-button" onClick={addSC}>
            Agregar al carrito
          </button>
          <div className="itemDetail-like" onClick={handleFavoritos}>
            {favoritosBtn ? <>
              <p><i className="fa-sharp fa-solid fa-heart"></i></p>
              <p>Añadido a favoritos</p>
            </> : <p><i className="fa-sharp fa-regular fa-heart"></i></p>}
          </div>
        </div>
      </div>

      {loader ? "cargando" : <div>
        <div>
          <h4>Comentarios {comentarios.length > 0 ? comentarios.length : <span>"Todavia no hay comentarios"</span>}</h4>
          <div>
            {comentarios.map(ele => {
              return (
                <div key={ele.id}>
                  <p><span style={{ fontWeight: "bold" }}>De:</span> {ele.id_usuario}</p>
                  <p>{ele.contenido}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>}
    </div>
  );
};

export default ItemDetail;
