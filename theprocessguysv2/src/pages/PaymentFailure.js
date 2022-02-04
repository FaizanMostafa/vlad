import React from 'react';
import { Link } from 'react-router-dom';

function PaymentFailure() {

    return(
        <React.Fragment>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br><Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <div className="text-center">
            
                <h1 style={{ color: "red" }}>Payment has Failed</h1>
                <br></br>
                <br></br>
                <h2>These could be the possible reaons why it failed:</h2>
                <br></br>
                <br></br>
                <ul style={{ color: "white", listStyle: "none" }}>
                    <li>Transaction Error</li>
                    <li>Wrong Card Information</li>
                    <li>Not Enough Balance</li>
                </ul>
                <br></br>
                <Link to="/client-payment-options" className="btn btn-primary w-50">Back to Payment Options</Link>
            </div>
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
            <br></br>            <br></br>
            <br></br>            <br></br>
            <br></br>
        </React.Fragment>
    )
}

export default PaymentFailure;