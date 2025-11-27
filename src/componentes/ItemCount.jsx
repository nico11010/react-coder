import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ItemCount = ({ stock, onChangeCount }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < stock) {
      const nuevo = count + 1;
      setCount(nuevo);
      onChangeCount(nuevo);
    }
  };

  const restar = () => {
    if (count > 1) {
      const nuevo = count - 1;
      setCount(nuevo);
      onChangeCount(nuevo);
    }
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
    </>
  );
};

export default ItemCount;
