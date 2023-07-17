import React from 'react'
import styles from "./cartWidget.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <div className={styles.contador} >
    <FontAwesomeIcon icon = { faCartShopping } />
    <p>2</p>
    </div>
  )
}

export default CartWidget;