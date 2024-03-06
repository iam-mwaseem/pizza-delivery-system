import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./cart-dropdown.module.css";
import CartItem from "../cart-item/Cart-item";
import { useCart } from "../../contexts/cart.context";
export default function CartDropdown() {
  const { cartItems } = useCart();
  return (
    <div>
      <div className={styles["cart-dropdown-container"]}>
        <div className={styles["cart-items"]}>
          {cartItems.map((item) => (
            <CartItem key={item.id} CartItem={item} />
          ))}
          {/* <CartItem /> */}
        </div>

        <Link to="/app/checkout">
          <Button buttonText="Go To Checkout"> </Button>
        </Link>
      </div>
    </div>
  );
}
