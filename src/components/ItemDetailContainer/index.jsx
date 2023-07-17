import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail";
import styles from "./ItemDetailContainer.module.css"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState([])
  const {id}=useParams();

  const getItem =async()=> {
    const result = await fetch("https://6499986479fbe9bcf83f923d.mockapi.io/ProyectoReact");
    const data= await result.json();
    const prod=data.find((prod)=>prod.id==id);
    setDetail(prod);
    
  }
  useEffect(() => {
    setTimeout(() =>  {
      getItem(); 
    }, 2000);
     
  }, []);
  
  return (
    <div>
      <ItemDetail prod={detail} />
    </div>
  )
}

export default ItemDetailContainer;