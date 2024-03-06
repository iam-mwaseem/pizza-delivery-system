import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Forgotpage.module.css";
export default function ForgotPassword() {
  const [email, setemail] = useState("");

  function handleOnChange(e) {
    setemail(e.target.value);
  }
  function handleOnSubmit(e) {
    e.preventDefault();

    const url = "http://127.0.0.1:3000/forgotpassword";
    const formData = {
      email,
    };

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit form");
        }
      })
      .then((data) => {
        console.log("Form submitted successfully:", data);
        // Handle success response here
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle error here
      });

    setemail("");
  }
  return (
    <div className={styles["forgot-page-container"]}>
      <div className={styles["forgot-page-header"]}>
        <span>Forgot your password?</span>
        <p>{`Don't worry , It's quick and easy`}</p>
      </div>
      <div className={styles["forgot-form-container"]}>
        <form
          className={styles["forgot-form"]}
          onSubmit={(e) => handleOnSubmit(e)}
        >
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => handleOnChange(e)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
      <Link to="/app/signin">Return to login?</Link>
    </div>
  );
}
