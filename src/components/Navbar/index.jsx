import React from "react";
import CartWidget from "../CartWidget"
import styles from "./navbar.module.css"
import { Link } from "react-router-dom";




const Navbar = () => {
  return (
    <nav className={styles.contenedor} >
      <ul>
        <Link to="/Home">
          <p className={styles.brand}>La Tiendita</p>
          <li className={styles.list}>Inicio</li>
        </Link> 

        <Link to="category">
        <li className={styles.list}>Categorías</li>
        </Link>
        
        <Link to="item">
        <li className={styles.list}>Productos</li>
        </Link>

        <CartWidget />
      </ul>
      
      <ul className="styles.categoryContainer">
        <Link to="category/:id">
        <li className="styles.categoryList"> Rubber</li>
        </Link>    
        <Link to="category/:id">
        <li className="styles.categoryList" >Steel</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;