import styles from "./Cart-item.module.css";
export default function CartItem({ CartItem }) {
  const { title, image, quantity, price } = CartItem;

  return (
    <div className={styles["cart-item-container"]}>
      <img
        className={styles["img"]}
        src={image}
        alt="Name"
        // width="50px"
        // height="50px"
      />
      <div className={styles["item-details"]}>
        <span className={styles["name"]}>{title}</span>
        <span className={styles["price"]}>
          {quantity}*{price * quantity}
        </span>
      </div>
    </div>
  );
}
