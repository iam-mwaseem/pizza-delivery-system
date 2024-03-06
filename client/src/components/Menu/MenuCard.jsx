import { useCart } from "../../contexts/cart.context";
import Button from "../../ui/Button";
import styles from "./MenuCard.module.css";
export default function MenuCard({ menuItem }) {
  const { addItemToCart } = useCart();
  const { id, title, description, priceName, image, priceValue } = menuItem;

  function addProductToCart() {
    addItemToCart(menuItem);
  }
  return (
    <div className={styles["card"]}>
      <div className={styles["card-body"]}>
        <div className={styles["card-image"]}>
          <img src={image} alt="" />
        </div>
        <h5 className={styles["card-title"]}>{title}</h5>
        <p className={styles["card-text"]}>{description}</p>
        <div className={styles["card-footer"]}>
          <div className={styles["card-sizes"]}>
            {priceName.map((size) => {
              return <p key={size}>{size}</p>;
            })}
          </div>
          <div className={styles["card-prices"]}>
            {priceValue.map((price) => {
              return <p key={price}>${price}</p>;
            })}
          </div>
          <div className={styles["card-btn"]}>
            <Button buttonText="Order Now" linkTo={"/app/checkout"} />
            <Button buttonText="+" handleOnClick={addProductToCart} />
          </div>
        </div>

        {/* <Link to="/app/menu">
          <button className="btn btn-primary">View Details</button>
        </Link> */}
      </div>
    </div>
  );
}
