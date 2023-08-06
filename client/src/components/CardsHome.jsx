import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const CardsHome = ({ data }) => {
  const navigate = useNavigate();

  //   const handleClickNavigate = () => {
  //     navigate(`/item-detail/${data.id}`);
  //   };

  const { shoppingCart, setShoppingCart } = useContext(DataContext);

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  };

  const toSCAdd = {
    id: data.id,
    url: data.url,
    title: data.title,
    description: data.description,
    price: data.price,
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
      <img src={data.url} alt="" />
      <div>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
      <div>
        <p>${data.price}</p>
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
