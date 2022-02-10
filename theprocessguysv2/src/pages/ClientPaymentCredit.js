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
  createPaymentIntent,
  generatePaymentNotification,
  updatePaymentStatus
} from "../redux/actions/stripe";
import { showToast } from "../utils";
import "../App.css";

function ClientPaymentCredit(props) {
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
  const [clientSecret, setClientSecret] = useState(null);
  const [isPaymentLoading, setPaymentLoading] = useState(false);
  const user = useSelector(state => state.auth.user);
  const isCreatingIntent = useSelector(state => state.stripe.isCreatingPaymentIntent);
  
  useEffect(() => {
    console.log(props.location.state.caseData)
    alert(props.location.state.caseData.id)
    dispatch(createPaymentIntent(
      {caseId: props.location.state.caseData.id},
      (secret)=>setClientSecret(secret),
      ()=>setClientSecret(undefined)
    ));
  }, [dispatch]);

  const payMoney = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    } else if(clientSecret === undefined) {
      showToast("An error occurred while initiating your transaction, please try later!", "error");
    } else if(!name.length) {
      showToast("Please add your full name!", "error");
    } else if(!address.length) {
      showToast("Please add your address!", "error");
    } else if(clientSecret === null) {
      showToast("Please wait a moment, information is being processed!", "warning");
    } else {
      setPaymentLoading(true);
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
      const data = {
        uid: user.uid,
        userName: `${user.firstName} ${user.middleName} ${user.lastName}`,
        caseTitle: props.location.state.caseData.caseTitle,
        caseId: props.location.state.caseData.id,
        amount: props.location.state.caseData.amount
      }
      if(paymentResult.error) {
        data.transactionId = paymentResult?.paymentIntent?.id;
        await generatePaymentNotification("failure", data);
        showToast(paymentResult.error.message, "error");
      } else if(paymentResult.paymentIntent.status === "succeeded") {
        data.transactionId = paymentResult.paymentIntent.id;
        dispatch(updatePaymentStatus(data));
        showToast("Payment was made successfully!", "success");
        props.history.push("/case-document-archive");
      } else {
        data.transactionId = paymentResult?.paymentIntent?.id;
        await generatePaymentNotification("failure", data);
        showToast(paymentResult.error.message, "error");
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
              {(isPaymentLoading || isCreatingIntent) ? "Processing..." : "Make Payment"}
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

export default ClientPaymentCredit;