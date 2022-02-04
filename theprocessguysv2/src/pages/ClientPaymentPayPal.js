import React from "react";
import { Link } from 'react-router-dom';

// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });

class ClientPaymentPayPal extends React.Component {


  createOrder(data, actions) {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  }

  onApprove(data, actions) {
    return actions.order.capture();
  }

  render() {
    return (
        <React.Fragment> 
        <br></br>
        <br></br>
        <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto"}}>Back to Dashboard</Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form className="text-center"
                  style={{
                    display: "block",
                    width: "25%",
                    marginLeft: "800px"
                  }}>
                <div
                    style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    }}
                ></div>
        <br></br>
        <h1>PayPal Payment <h2 style={{ color: "white" }}>( Transfer fee included )</h2></h1>
        <br></br>
        <br></br>
        <input name="fullName" className="card" type="" placeholder="Full Name"></input>
        <br></br>
        <input name="paymentAmount" className="card" type="" placeholder="Payment Amount"></input>
        <br></br>
        <input name="accountNumber" className="card" type="" placeholder="Account Number"></input>
        <br></br>
        <input name="routingNumber" className="card" type="" placeholder="Routing Number"></input>
        <br></br>
            <button className="btn btn-primary"
                href="https://www.paypal.com/us/home"
                createOrder={(data, actions) => this.createOrder(data, actions)}
                onApprove={(data, actions) => this.onApprove(data, actions)}>
                Make Payment
            </button>
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
        <br></br>
        <br></br>
        </form>    
        </React.Fragment>

    );
  }
}

export default ClientPaymentPayPal;