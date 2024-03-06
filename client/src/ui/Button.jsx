import { Link } from "react-router-dom";
import styles from "./Button.module.css";
export default function Button({
  buttonText,
  linkTo,
  handleOnClick,
  marginTop,
}) {
  return (
    <div>
      {linkTo ? (
        <Link to={linkTo}>
          <button className={styles["button"]}>{buttonText}</button>
        </Link>
      ) : (
        <button className={styles["button"]} onClick={handleOnClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}
