import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
const ItemDetail = () => {
  const id = useParams();
  const { data } = useContext(DataContext);
  const product = data.find((ele) => ele.id === id.id);

  return (
    <div className="itemDetail">
      <img className="itemDetail-img" src={product.url} alt="" />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button className="itemDetail-button">Agregar al carrito</button>
      </div>
    </div>

    // <Card style={{ width: "18rem" }}>
    //   <Card.Img variant="top" className="itemDetail-img" src={product.url} />
    //   <Card.Body>
    //     <Card.Title>{product.title}</Card.Title>
    //     <Card.Text>
    //       {product.description}
    //       <p>{product.price}</p>
    //     </Card.Text>
    //     <Button variant="primary">Agregar al carrito</Button>
    //   </Card.Body>
    // </Card>
  );
};

export default ItemDetail;
