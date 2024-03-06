import CheckoutItemDetails from "../components/Checkout-item-details/Checkout-item-details";

import styles from "./Checkoutpage.module.css";

export default function Checkout() {
  return (
    <div className={styles["checkout-container"]}>
      <h3>Checkout</h3>
      <CheckoutItemDetails />
    </div>
  );
}
