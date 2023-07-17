
import styles from "./ItemDetail.module.css"

const ItemDetail = ({prod}) => {
 
  
  return (

    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={prod.pictureURL} alt={prod.title} ></img>
      <div className={styles.itemContent}>
        <p className={styles.itemTitle}>{prod.title}</p>
        <p className={styles.itemDescription}>{prod.description}</p>
        <p className={styles.itemPrice}>{prod.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail;