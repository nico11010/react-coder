// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import { Link } from "react-router-dom";

// const CartView = () => {
//   const { cart, removeItem, clear, total } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Este es el Carrito</h1>
//       <div>
//         {cart.map((compra) => (
//           <div
//             key={compra.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-around",
//               alignItems: "center",
//               width: "100%",
//             }}
//           >
//             <img src={compra.img} alt={compra.name} style={{ width: "9rem" }} />
//             <span>{compra.name}</span>
//             <span>${compra.price},00</span>
//             <span>cantidad: {compra.quantity}</span>
//             <span>precio final: ${compra.quantity * compra.price},00</span>
//             <button
//               className="btn btn-danger"
//               onClick={() => removeItem(compra.id)}
//             >
//               X
//             </button>
//           </div>
//         ))}
//       </div>

//       <span>Total a Pagar: ${total()},00</span>
//       <div
//         style={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "80%",
//           padding: "2rem",
//         }}
//       >
//         <button className="btn btn-danger" onClick={clear}>
//           Vaciar Carrito
//         </button>
//         <Link className="btn btn-success" to="/checkout">
//           Terminar Compra
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CartView;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Divider from "@mui/joy/Divider";

import Delete from "@mui/icons-material/Delete";
import EmptyCart from "./EmptyCart";

const CartView = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        paddingTop: 6,
      }}
    >
      <Card
        variant="outlined"
        sx={{
          width: 500,
          padding: 3,
          borderRadius: "lg",
          boxShadow: "lg",
        }}
      >
        <Typography level="h3" sx={{ mb: 2, textAlign: "center" }}>
          🛒 Carrito
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {cart.map((compra) => (
              <Card
                key={compra.id}
                variant="soft"
                sx={{
                  mb: 2,
                  padding: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <img
                    src={compra.img}
                    alt={compra.name}
                    style={{ width: "9rem" }}
                  />
                  <Typography level="title-md">{compra.name}</Typography>
                  <Typography>
                    Cantidad: <strong>{compra.quantity}</strong>
                  </Typography>
                  <Typography>
                    Precio: <strong>${compra.price * compra.quantity}</strong>
                  </Typography>
                </Box>

                <IconButton
                  variant="solid"
                  color="danger"
                  onClick={() => removeItem(compra.id)}
                >
                  <Delete />
                </IconButton>
              </Card>
            ))}

            <Divider sx={{ mb: 2 }} />

            <Typography level="h4" sx={{ textAlign: "right", mb: 2 }}>
              Total: ${total()}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button color="danger" variant="solid" onClick={clear} fullWidth>
                Vaciar carrito
              </Button>

              <Link to="/checkout" style={{ width: "100%" }}>
                <Button color="success" variant="solid" fullWidth>
                  Finalizar compra
                </Button>
              </Link>
            </Box>
          </>
        )}
      </Card>
    </Box>
  );
};

export default CartView;
