import { CiShoppingCart } from "react-icons/ci";
import Badge from "react-bootstrap/Badge";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cartQuantity, cart } = useContext(CartContext);

  return (
    <>
      <Link to="/cart">
        <CiShoppingCart color="white" size={32} />
      </Link>
      {cart.length > 0 && (
        <Badge bg="light" text="dark">
          {cartQuantity()}
        </Badge>
      )}
    </>
  );
};

export default CartWidget;
