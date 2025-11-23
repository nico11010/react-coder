import { CiShoppingCart } from "react-icons/ci";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cartQuantity, cart } = useContext(CartContext);

  console.log("carrito", cart);

  return (
    <>
      <CiShoppingCart color="white" size={32} />
      {cart.lenght > 0 && (
        <Badge bg="light" text="dark">
          {cartQuantity()}
        </Badge>
      )}
    </>
  );
};

export default CartWidget;
