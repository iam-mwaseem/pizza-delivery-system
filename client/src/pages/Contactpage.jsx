import styles from "./Contactpage.module.css";
export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <img
        src="../../src/assets/pizza-image-1.jpg"
        alt=""
        style={{ width: "100%", height: `calc(100% - 0px)` }}
      />

      <div className={styles["contact-form-container"]}>
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="textarea" placeholder="Write your message" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
