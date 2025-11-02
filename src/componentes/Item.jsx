import React from "react";
import { Button, Card } from "react-bootstrap";
import "../Item.css";
import { Link } from "react-router-dom";

const Item = ({ prod }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={prod.img} alt={prod.name} />
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>${prod.price},00</Card.Text>
        <Link className="btn btn-dark" to={'/item/'+prod.id}>Ver mas detalles</Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
