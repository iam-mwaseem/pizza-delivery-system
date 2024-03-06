import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Main from "./Main";

import Menu from "../components/Menu/menu";
import Contact from "../pages/Contactpage";

import UserProfile from "../components/User/UserProfile";
import Footer from "./Footer";
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Checkout from "../pages/Checkoutpage";
import ForgotPassword from "../pages/Forgotpage";

import styles from "../ui/AppLayout.module.css";
export default function AppLayout() {
  return (
    <div>
      <Navbar />

      <Main className={styles["Main"]}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}
