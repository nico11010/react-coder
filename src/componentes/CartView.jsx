import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartView = () => {
  const { cart, removeItem, clear } = useContext(CartContext);

  return (
    <div>
      <h1>Este es el Carrito</h1>
      <div>
        {cart.map((compra) => (
          <div
            key={compra.id}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img src={compra.img} alt={compra.name} style={{ width: "9rem" }} />
            <span>{compra.name}</span>
            <span>{compra.price},00</span>
            <span>cantidad: {compra.quantity}</span>
            <span>precio final: ${compra.quantity * compra.price},00</span>
            <button
              className="btn btn-danger"
              onClick={() => removeItem(compra.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>

      <span>Total a Pagar: $</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={clear}>
          Vaciar Carrito
        </button>
        <button className="btn btn-success">Terminar Compra</button>
      </div>
    </div>
  );
};

export default CartView;
