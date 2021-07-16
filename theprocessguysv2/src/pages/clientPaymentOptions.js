import React from 'react';
import { Link } from 'react-router-dom';

function ClientPaymentOptions() {

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form className="payments text-center">
            <h1 className="text-center">Payment Options</h1>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/client-payment-credit-card" 
                className="btn btn-primary  w-50"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"

                  }}
                  >Credit Card</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-debit-card" 
                className="btn btn-primary w-50">Debit Card</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-paypal" 
                className="btn btn-primary w-50">Paypal ( 3% transfer fee )</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-zelle" 
                className="btn btn-primary w-50">Zelle</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-checks" 
                className="btn btn-primary w-50">Cashier/Corporate/Business Check (No Personal Checks)</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-direct" 
                className="btn btn-primary w-50">Direct ACH to TPG bank account</Link>
            <br></br>
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
            <br></br>
        </div>
    )
}

export default ClientPaymentOptions;