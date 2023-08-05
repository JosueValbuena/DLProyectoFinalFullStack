import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const CardsHome = ({ data }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/item-detail/${data.id}`);
  };

  const eventoZ = (event) => {
    event.stopPropagation();
    console.log("Todo bien en boton" + data.id);
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
        <button className="cardsHome-button" onClick={eventoZ}>
          Agregar al carrito
        </button>
      </div>
    </div>
    // <Card style={{ width: "18rem" }} onClick={handleClickNavigate}>
    //   <Card.Img variant="top" className="itemDetail-img" src={data.url} />
    //   <Card.Body>
    //     <Card.Title>{data.title}</Card.Title>
    //     <Card.Text>
    //       {data.description}
    //       <p>{data.price}</p>
    //     </Card.Text>
    //     <Button variant="primary" onClick={eventoZ}>
    //       Agregar al carrito
    //     </Button>
    //   </Card.Body>
    // </Card>
  );
};

export default CardsHome;
