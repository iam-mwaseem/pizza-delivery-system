import { useState } from "react";
import styles from "./cart-icon.module.css";
export default function CartIcon({ isCartOpen, setIsCartOpen }) {
  return (
    <div className={styles["cart-icon-container"]}>
      <img
        className={styles["shopping-icon"]}
        src="../../../src/assets/shopping-bag.png"
        alt="shopIcon"
        onClick={() => setIsCartOpen(!isCartOpen)}
      />
      {/* <span className={styles["item-count"]}>0</span> */}
    </div>
  );
}
