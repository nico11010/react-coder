import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loader, setLoader] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    getOneProduct(id)
      .then((res) => setDetalle(res))
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [id]);

  return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
        <div>
          <ItemDetail detalle={detalle} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;
