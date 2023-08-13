import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const ItemDetail = () => {

  const [comentarios, setComentarios] = useState([]);
  const [loader, setLoader] = useState(true);
  const [favoritos, setFavoritos] = useState(false);


  const { data, shoppingCart, setShoppingCart } = useContext(DataContext);

  const id = useParams();

  const getComentarios = async () => {
    const data = await fetch("http://localhost:3001/comentarios/" + id.id);
    const res = await data.json();
    setLoader(false);
    setComentarios(res)
  }

  useEffect(() => {
    getComentarios()
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

  const handleFavoritos = () => {
    setFavoritos(!favoritos)
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
          <div onClick={handleFavoritos}>
            {favoritos ? <div>
          <p><i className="fa-sharp fa-solid fa-heart"></i></p>
          <p>Añadido a favoritos</p>
          </div> : <p><i className="fa-sharp fa-regular fa-heart"></i></p>}
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
