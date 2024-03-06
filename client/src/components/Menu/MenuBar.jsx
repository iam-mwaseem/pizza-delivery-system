import styles from "./MenuBar.module.css";
export default function MenuBar() {
  return (
    <div className={styles["menubar-container"]}>
      <li>Signature Pizzas</li>
      <li>Pastas</li>
      <li>Fresh Salads</li>
      <li>Deserts</li>
      <li>Toasted Subs</li>
      <li>Sides</li>
      <li>Wings&Tenders</li>
      <li>Calzones&StromBolis</li>
      <li>Cold Drinks</li>
    </div>
  );
}
