import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ detalle }) => {
  const { cart, addItem } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false);

  const onAdd = (cantidad) => {
    setPurchase(true);
    addItem(detalle, cantidad);
  };

  console.log(cart);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Card style={{ width: "40rem" }}>
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src={detalle.img}
          alt={detalle.name}
        />
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{detalle.name}</Card.Title>
          <Card.Text>{detalle.description}</Card.Text>
          <Card.Text>Precio: ${detalle.price},00</Card.Text>
          <Card.Text>Stock: {detalle.stock}</Card.Text>
          {purchase ? (
            <Link className="btn btn-dark" to="/cart">
              Finalizar Compra
            </Link>
          ) : (
            <ItemCount stock={detalle.stock} onAdd={onAdd} />
          )}
          <Link className="btn btn-dark" to="/">
            Volver atras
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
