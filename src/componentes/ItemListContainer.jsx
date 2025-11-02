import { useEffect, useState } from "react";
import { getProducts } from "../mock/AsyncService";
import ItemList from "./ItemList";
import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router-dom";

const ItemListContainer = (prop) => {
  const [data, setData] = useState([]);
  const {type} = useParams()

  useEffect(() => {
    getProducts()
      .then((res) =>{
        if(type){
          setData(res.filter((prod)=>prod.category === type))
        }else{
          setData(res)
        }
      })
      .catch((error) => console.log(error));
  }, [type]);

  console.log(data);

  return (
    <div>
      <h1 className="d-flex justify-content-center align-items-center" >{prop.saludo} {type && <span>{type}</span>}</h1>
      <ItemList data={data}/>
    </div>
  );
};

export default ItemListContainer;
