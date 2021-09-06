import React from 'react';
import { Link } from 'react-router-dom';

function ClientPaymentOptions() {

    return(
        <div>
            <br></br>
            <br></br>
            <br></br>
            <Link to="/member-dashboard" className="btn btn-primary">Back to Dashboard</Link>
            <br></br>
            <br></br>
            <br></br>
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
                style={{ marginRight: "540px" }}
            >Credit Card</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-debit-card" 
                className="btn btn-primary w-50"
                style={{ marginRight: "540px" }}
            >Debit Card</Link>
            <br></br>
            <br></br>
            <button /*to="/client-payment-paypal"*/
                className="btn btn-primary w-50 text-center"
                style={{ marginRight: "30px", marginBottom: "-20px" }}
            ><a href="https://www.paypal.com/us/home" 
                style={{ 
                    color: "white", 
                    marginRight:"410px", 
                    marginTop: "1px", 
                    marginBottom: "1px" }}>Paypal ( Transfer Fee Included )</a></button>
            <br></br>
            <br></br>
            <Link to="/client-payment-zelle" 
                className="btn btn-primary w-50"
                style={{ marginRight: "540px" }}
            >Zelle</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-checks" 
                className="btn btn-primary w-50"
                style={{ marginRight: "540px" }}
            >Cashier/Corporate/Business Check (No Personal Checks)</Link>
            <br></br>
            <br></br>
            <Link to="/client-payment-ach-to-tpg" 
                className="btn btn-primary w-50"
                style={{ marginRight: "540px" }}
            >Direct ACH to TPG bank account</Link>
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
            <br></br>
        </div>
    )
}

export default ClientPaymentOptions;