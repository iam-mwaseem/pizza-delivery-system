import styles from "./Main.module.css";
export default function Main({ children }) {
  return <div className={styles["main-container"]}>{children}</div>;
}
