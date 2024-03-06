import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Navbar.module.css";
import CartIcon from "../cart-icon/cart-icon";
import CartDropdown from "../cart-dropdown/cart-dropdown";

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className={styles["navbar-container"]}>
      <span>🍕 Pizza Hub </span>
      <div className={styles["navlinks-container"]}>
        <Link to="/app/menu">Menu</Link>

        <Link to="/app/contact">Contact</Link>
        <Link to="/app/signin">Sign in </Link>
        {/* <Link to="/app/cart">Cart</Link> */}
        {/* <Link to="/app/checkout">Checkout</Link> */}
        {/* <Link to="/app/orderhistory">Order History</Link> */}
        <Link to="/app/profile">
          <img
            src="../../../src/assets/user.png"
            alt=""
            className={styles["user-profile-img"]}
            width="25px"
            height="25px"
          />
        </Link>

        <CartIcon isCartOpen={isCartOpen} setIsCartOpen={setIsCartOpen} />

        {isCartOpen && <CartDropdown />}
      </div>
    </div>
  );
}
