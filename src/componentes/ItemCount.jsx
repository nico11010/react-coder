import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    setCount(count - 1);
  };

  const ejecutarCompra = () => {
    onAdd(count);
  };

  return (
    <>
      <div>
        <button
          className="btn btn-dark"
          onClick={restar}
          disabled={count === 0}
        >
          -
        </button>
        <span className="btn">{count}</span>
        <button className="btn btn-dark" onClick={sumar}>
          +
        </button>
      </div>
      <button
        className="btn btn-dark"
        onClick={ejecutarCompra}
        disabled={count === 0 || stock === 0}
      >
        Agregar al Carrito
      </button>
    </>
  );
};

export default ItemCount;
