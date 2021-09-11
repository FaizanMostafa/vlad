import React, { useEffect, useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from 'react-redux';
import {
  createPaymentIntent
} from "../redux/actions/stripe";
import "../App.css";

function ClientPayments(props) {
  const stripe = loadStripe(
    "pk_test_51JDeUhHP8jMIq74DWG4uYGfHdWZm0Puvn61GNXXUcgTMcSjIrlxr8AGWj2Wi0x8bNvIGKoBhb8YreUzNuF0uEm41005QVA1EVR"
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

function CheckoutForm(props) {
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const isCreatingIntent = useSelector(state => state.stripe.isCreatingPaymentIntent);
  
  useEffect(() => {
    dispatch(createPaymentIntent({caseId: props.location.state.caseId}, (secret)=>setClientSecret(secret)));
  }, [dispatch]);

  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setPaymentLoading(true);
    // eslint-disable-next-line no-undef
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name,
          address
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
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
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
          onSubmit={payMoney}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4>Full Name</h4>
            <input
              name="fullName" value={name}
              onChange={(e)=>setName(e.target.value)}
              className="card" type="" placeholder="Full Name"
            />
            <br></br>
            <h4>Address</h4>
            <input
              name="address" value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="card" type="" placeholder="Address under the Card"
            />
            <br></br>
            <br></br>
            <h4>Credit Card Information</h4>
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
              disabled={isPaymentLoading || isCreatingIntent}
            >
              {(isPaymentLoading || isCreatingIntent) ? "Loading..." : "Make Payment"}
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
      </div>
    </div>
  );
}

export default ClientPayments;