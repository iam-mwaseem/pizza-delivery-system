import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../../ui/Button";
import styles from "./payment-form.module.css";
export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  function paymentHandler(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
  }
  return (
    <div className={styles["payment-form-container"]}>
      <form action="" className={styles["payment-form"]}>
        <CardElement />
      </form>
      <Button buttonText={"Pay Now"} />
    </div>
  );
}
