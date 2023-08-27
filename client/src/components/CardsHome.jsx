import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const CardsHome = ({ data }) => {
  const navigate = useNavigate();

  const { shoppingCart, setShoppingCart } = useContext(DataContext);

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  };

  const toSCAdd = {
    id: data.id,
    img: data.img,
    titulo: data.titulo,
    descripcion: data.descripcion,
    precio: data.precio,
    stock: data.stock,
    qty: 1,
  };

  const addSC = (event) => {
    event.stopPropagation();
    const isExist = shoppingCart.find((ele) => ele.id === data.id);
    if (isExist) {
      const products = shoppingCart.map((ele) =>
        ele.id === data.id ? { ...ele, qty: ele.qty + 1 } : ele
      );
      setShoppingCart([...products]);
    } else {
      setShoppingCart([...shoppingCart, toSCAdd]);
    }
  };

  return (
    <div className="cardsHome" onClick={handleClickNavigate}>
      <img src={data.img} alt="" />
      <div>
        <h3>{data.titulo}</h3>
        <p>{data.descripcion}</p>
      </div>
      <div>
        <p>${data.precio}</p>
      </div>
      <div className="cardsHome-button-div">
        <button className="cardsHome-button" onClick={addSC}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default CardsHome;
