import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";

const EmptyCart = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        size="lg"
        variant="outlined"
        sx={{
          width: "500px",
          height: "200px",
          maxWidth: "90%",
          padding: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent sx={{ gap: 2 }}>
          <Typography level="title-lg" sx={{ fontSize: "1.8rem" }}>
            El carrito esta Vacio!😥{" "}
          </Typography>
          <Typography sx={{ fontSize: "1.5rem" }}>
            Revisa nuestros productos
          </Typography>
          <Link to="/" style={{ textAlign: "center" }}>
            <Button size="md" variant="solid" color="primary">
              Ir a Inicio!
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmptyCart;
