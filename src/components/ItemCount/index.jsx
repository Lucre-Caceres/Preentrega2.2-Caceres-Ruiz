import { useState } from "react";
import styles from "./ItemCount.module.css"

const ItemCount=({ stock, initial, onAdd})=>{
  const [count, setCount] = useState(initial);  


  const suma=()=>{
      if(count>=stock){return;}
      setCount(count+1);
    } 
    
    const resta=()=>{
      if(count===1){return;}
      setCount(count-1);
    }
  
  return(
    <>
    <div className="counter">
      <button>Count</button>
        <div className="buttonCounter">
          <button type="button" onClick={resta}>- </button>
          <button>{count}</button>
          <button type="button" onClick={suma}>+ </button>
          <button type="button" onClick={()=>onAdd(count)} disabled={count>=stock}>Add to cart</button>
        </div>
      
    </div>
    
      stock={stock}

      initial={initial}

      onAdd={onAdd}
    </>
  
  )
    
}
     

export default ItemCount;