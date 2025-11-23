import { useEffect, useState } from "react";
//import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../service/firebase";
//import { productos } from "../mock/AsyncService";

const ItemListContainer = (prop) => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const { type } = useParams();

  useEffect(() => {
    setLoader(true);
    const productsCollection = type
      ? query(collection(db, "productos"), where("category", "==", type))
      : collection(db, "productos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false));
  }, [type]);

  // useEffect(() => {
  //   setLoader(true);
  //   getProducts()
  //     .then((res) => {
  //       if (type) {
  //         setData(res.filter((prod) => prod.category === type));
  //       } else {
  //         setData(res);
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoader(false));
  // }, [type]);

  return (
    <>
      {loader ? (
        <LoaderComponent />
      ) : (
        <div>
          <h1 className="d-flex justify-content-center align-items-center">
            {prop.saludo} {type && <span>{type}</span>}
          </h1>
          <ItemList data={data} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
