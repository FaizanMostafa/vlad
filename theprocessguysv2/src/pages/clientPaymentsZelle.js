import React from "react";
import { Link } from 'react-router-dom';

const ClientPaymentsZelle = () => {

    return(
        <React.Fragment>
        <br></br>
        <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>    
        <form className="text-center">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h1>Zelle Payment</h1>
            <br></br>
            <br></br>
            <h5 style={{ color: "white" }}>
            Zelle® is a great way to send money to friends and family, even if they bank somewhere different than you do. <br></br><br></br>
            That means it’s super easy to pitch in or get paid back for all sorts of things like the neighborhood block party or getting paid back for covering the cost of a vacation rental for a group of friends.<br></br><br></br>
            Zelle® is already in lots of banking apps, so look for it in yours today.
            </h5>
            <br></br>
            <br></br>
            <h1>How to send money with Zelle®</h1>
            <br></br>
            <br></br>
            <h3 style={{ color: "white" }}>1. ACCESS ZELLE® -
                Get started by enrolling your email or U.S. mobile number through your mobile banking app or with the Zelle® app.
            </h3>
            <br></br>
            <br></br>
            <h3 style={{ color: "white" }}>2. PICK A PERSON TO PAY -
                Enter the preferred email address or U.S. mobile number of the recipient.<br></br><br></br>
                You can send money to almost anyone you know and trust with a bank account in the U.S. 
            </h3>
            <br></br>
            <br></br>
            <h3 style={{ color: "white" }}>3. CHOOSE THE AMOUNT -
                Enter the amount to send.<br></br><br></br>
                Your recipient gets a notification explaining how to complete the payment, simply and quickly.
            </h3>
            <br></br>
            <br></br>
            <button className="btn btn-primary">
                <a href="https://www.zellepay.com/" style={{ color: "white", marginBottom:"1px" }} target="_blank" rel="noreferrer noopener">Get started with Zelle</a>
            </button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </form>
        </React.Fragment>
    )
}

export default ClientPaymentsZelle;