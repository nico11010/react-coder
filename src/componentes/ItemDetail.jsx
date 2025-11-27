import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Typography from "@mui/joy/Typography";

const ItemDetail = ({ detalle }) => {
  const { addItem, itemQuantity } = useContext(CartContext);
  const [purchase, setPurchase] = useState(false);
  const [cantidadSeleccionada, setCantidadSeleccionada] = useState(1);

  const onAdd = (cantidad) => {
    setPurchase(true);
    addItem(detalle, cantidad);
  };

  const stockActualizado = detalle.stock - itemQuantity(detalle.id);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
        padding: "20px",
      }}
    >
      <Card sx={{ width: 650, maxWidth: "100%", boxShadow: "lg" }}>
        <CardOverflow>
          <img
            src={detalle.img}
            alt={detalle.name}
            style={{
              width: "100%",
              height: "550px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        </CardOverflow>

        <CardContent>
          <Typography
            color="neutral"
            textColor="text.primary"
            sx={{ fontWeight: "md", fontSize: "xl" }}
          >
            {detalle.name}
          </Typography>

          <Typography level="body-sm" sx={{ mt: 1 }}>
            {detalle.description}
          </Typography>

          <Typography
            level="title-lg"
            sx={{ mt: 1, fontWeight: "xl" }}
            endDecorator={
              <Chip component="span" size="sm" variant="soft" color="success">
                Precio en oferta
              </Chip>
            }
          >
            ${detalle.price}
          </Typography>

          <Typography level="body-sm" sx={{ mt: 1 }}>
            Stock disponible: <b>{stockActualizado}</b>
          </Typography>

          <div style={{ marginTop: "20px" }}>
            {purchase ? (
              <Link to="/cart">
                <Button variant="solid" color="success" size="lg" fullWidth>
                  Ir al carrito
                </Button>
              </Link>
            ) : (
              <ItemCount
                stock={stockActualizado}
                onChangeCount={setCantidadSeleccionada}
              />
            )}
          </div>
        </CardContent>

        <Button
          variant="solid"
          color="danger"
          sx={{ mt: 2 }}
          fullWidth
          onClick={() => onAdd(cantidadSeleccionada)}
          disabled={purchase}
        >
          Agregar al carrito
        </Button>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="soft" color="primary" sx={{ mt: 2 }} fullWidth>
            Volver atrás
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default ItemDetail;
