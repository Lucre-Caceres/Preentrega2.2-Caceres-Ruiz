import { Link } from "react-router-dom";
import styles from "./item.module.css"

const Item = ({item}) => {
  return (
    <Link to={`/item/${item.id}`}>
    <div className={styles.productContainer}>
        <h3 className={styles.productTitle} key={item.id}>{item.title} </h3>;
        <img className= {styles.productImage} src={item.pictureURL} key={item.id}/>
        <p className={styles.productCategory} key={item.id}>{item.category} </p>;
        <p className={styles.productDescription} key={item.id}>{item.description} </p>;
        <p className={styles.productStock} key={item.id}>{item.stock} </p>;
        <p className={styles.productPrice} key={item.id}>{item.price} </p>;
    </div>
    </Link>
    
  )
}

export default Item;