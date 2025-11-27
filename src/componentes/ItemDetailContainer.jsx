import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
  const [detalle, setDetalle] = useState({});
  const [loader, setLoader] = useState(false);
  const [invalid, setInvalid] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setLoader(true);
    const docRef = doc(db, "productos", id);

    getDoc(docRef)
      .then((res) => {
        if (res.data()) {
          setDetalle({ id: res.id, ...res.data() });
        } else {
          setInvalid(true);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [id]);

  if (invalid) {
    return (
      <div>
        <h1>El producto no existe!</h1>
        <Link className="btn btn-dark" to="/">
          Volver a inicio
        </Link>
      </div>
    );
  }

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
