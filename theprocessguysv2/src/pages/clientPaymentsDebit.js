import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import "../App.css";
import { Link } from 'react-router-dom';

function ClientPayments() {
  const stripe = loadStripe(
    "pk_test_51JDeUhHP8jMIq74DWG4uYGfHdWZm0Puvn61GNXXUcgTMcSjIrlxr8AGWj2Wi0x8bNvIGKoBhb8YreUzNuF0uEm41005QVA1EVR"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  );
};
function CheckoutForm() {
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    // eslint-disable-next-line no-undef
    const clientSecret = getClientSecret();
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: "",
        },
      },
    });
    setPaymentLoading(false);
    if (paymentResult.error) {
      alert(paymentResult.error.message);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Success!");
      }
    }
  };

  return (
    
    <div
      style={{
        padding: "3rem",
      }}
    >
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/member-dashboard" className="btn btn-primary">Back to Dashboard</Link>
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1 className="text-center">Payment</h1>               
            <br></br>
            <br></br>
            <br></br>
        <form
          style={{
            display: "block",
            width: "100%",
          }}
          onSubmit = {payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
        <br></br>
          <h4>Debit Card Information</h4>
            <CardElement
              className="card"
              options={{
                style: {
                  base: {
                    backgroundColor: "white"
                  } 
                },
              }}
            />
            <br></br>
            <button
              className="pay-button"
              disabled={isPaymentLoading}
            >
              {isPaymentLoading ? "Loading..." : "Make Payment"}
            </button>
          </div>
        </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
      </div>
    </div>
  );
}

export default ClientPayments;