import Button from "../../ui/Button";
import styles from "./CustomPizza.module.css";
export default function CustomPizza() {
  return (
    <div className={styles["container"]}>
      <div className={styles["image-container"]}>
        <img
          src="../../../src/assets/LevantesPizza-28-640x1290.jpg"
          width="240px"
          height="auto"
        />
      </div>
      <div className={styles["custom-details"]}>
        <h2>
          CREATE YOUR OWN <span className={styles["color-accent"]}>PIZZA!</span>
        </h2>
        <p>
          Choose your own toppings, crust and sauces to create your own
          masterpiece!{" "}
        </p>
        <div className={styles["grid-container"]}>
          <div>
            <div>
              <h3 className={styles["color-accent"]}>PIZZA SIZES</h3>
              <ul>
                <li>12″ SMALL- 8.95</li>
                <li>14″ MEDIUM- 12.95</li>
                <li>16″ LARGE- 16.95 </li>
              </ul>
              <h3 className={styles["color-accent"]}>CRUSTS</h3>
              <p>
                TRADITIONAL
                <br />
                GLUTEN FREE (12″ only) add 2.00
              </p>
              <h3 className={styles["color-accent"]}>SAUCES</h3>
              <p>
                Classic Red Sauce, Alfredo
                <br />
                Sauce, Pesto Sauce, Sweet BBQ,
                <br />
                Vodka Sauce &amp; Extra Virgin Olive Oil
              </p>
              <p>&nbsp;</p>
            </div>
          </div>
          <div>
            <h3 className={styles["color-accent"]}>REGULAR TOPPINGS</h3>
            <ul>
              <li>WHOLE – 2.75 Each</li>
              <li>HALF – 1.50 Each</li>
              <li>SMALL – 1.50 Each</li>
            </ul>
            <p>
              Pepperoni, Mushrooms, Red Onions, Black Olives, Broccoli, Spinach,
              Jalapenos, Fresh Garlic, Green Peppers, Cherry Tomatoes, Fresh
              Basil, Banana Peppers, Pineapple, Ham, Meatballs, Mild Italian
              Sausage, Ground Beef, Red Roasted Peppers, Artichoke Hearts,
              Kalamata Olives, Salami, Crumbled Sausage, Arugula
            </p>
            <h3></h3>
            <h3 className={styles["color-accent"]}>PREMIUM TOPPINGS</h3>
            <ul>
              <li>WHOLE – 3.25 Each</li>
              <li>HALF – 2.00 Each</li>
              <li>SMALL – 2.00 Each</li>
            </ul>
            <p>
              Bacon, Grilled Chicken, Steak, Ricotta Cheese, Cheddar Cheese,
              Fresh Mozzarella, Blue Cheese Crumbles, Feta Cheese, Vegan Cheese,
              Provolone, Vegan Chorizo, Shrimp, Extra Cheese, Calabrian Peppers,
              Cup &amp; Char Pepperoni, Chicken Parm, Prosciutto
            </p>
            <p>&nbsp;</p>
            <Button buttonText="Order Now" />
          </div>
        </div>
      </div>
    </div>
  );
}
