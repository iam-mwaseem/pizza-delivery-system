import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "./Form.module.css";
export default function Form({
  isLogin,
  isSignup,
  buttonText,
  linkText,
  linkTo,
  isContact,
  isProfile,
  onSubmit,
}) {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const buttonClassName = isProfile ? styles["update-btn"] : styles["form-btn"];
  function getToken() {
    return localStorage.getItem("jwt");
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    const formData = {
      name,
      email,
      currentPassword,
      password,
      confirmPassword,
      address,
    };

    const url = isSignup
      ? "http://127.0.0.1:3000/signup"
      : isLogin
      ? "http://127.0.0.1:3000/signin"
      : isProfile
      ? "http://127.0.0.1:3000/updateMe"
      : "";
    const method = isProfile ? "PATCH" : "POST";
    const credentials = isProfile ? "include" : "same-origin";
    const token = getToken();
    console.log(url);
    fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      credentials: credentials,

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

        localStorage.setItem("jwt", data.token);
        // Handle success response here
        navigate("/app/menu");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        // Handle error here
      });

    setName("");
    setemail("");
    setpassword("");
    setConfirmPassword("");
    setAddress("");
    setCurrentPassword("");
  }

  return (
    <div className={styles["container"]}>
      <div className={styles["form-header"]}>
        <span>
          {isProfile && "Edit Profile"}
          {isLogin && "Login to your account"}
          {isSignup && "Don't have an account?"}
          {/* {isLogin ? "Login to your account" : `Don't have an account?`} */}
        </span>
        <p>{`It's quick and easy`}</p>
        {/* {!isLogin && <p>{`It's quick and easy`}</p>} */}
      </div>

      <div className={styles["form-container"]}>
        <form className={styles["form"]} onSubmit={(e) => handleOnSubmit(e)}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          )}

          {isLogin && (
            <label htmlFor="email" className={styles["label-link"]}>
              Email:
            </label>
          )}

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
          {!isProfile && (
            <>
              {isLogin && (
                <div className={styles["label-link"]}>
                  <label htmlFor="password">Password:</label>
                  <Link to="/app/forgotpassword">Forgot your password?</Link>
                </div>
              )}

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </>
          )}
          {isProfile && (
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
          )}
          {isProfile && (
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          )}
          {isProfile && (
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          {/* {isProfile && <input type="number" placeholder="Phone Number" />} */}
          {isProfile && (
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          )}
          {/* {isProfile && <input type="number" placeholder="City" />} */}
          {!isLogin && !isProfile && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}
          <button type="submit" className={buttonClassName}>
            {buttonText}
          </button>
        </form>
        <Link to={linkTo}>{linkText}</Link>
        {/* <a href="#">{linkText}</a> */}
      </div>
    </div>
  );
}
