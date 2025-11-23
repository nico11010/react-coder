import { CiShoppingCart } from "react-icons/ci";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  console.log("carrito", cart);

  return (
    <>
      <CiShoppingCart color="white" size={32} />
      <Badge bg="light" text="dark">
        5
      </Badge>
    </>
  );
};

export default CartWidget;
