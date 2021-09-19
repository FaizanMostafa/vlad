import {useEffect} from 'react';
import { Link } from 'react-router-dom';

function ClientPaymentOptions(props) {

    useEffect(() => {
        if(!props.location.state || !props.location.state.hasOwnProperty("caseId")) {
            props.history.goBack();
        }
    }, []);

    return (
        <div style={{minHeight: "100vh"}}>
            <form className="payments text-center">
                <h1 style={{margin: "60px 0px"}} className="text-center">Payment Options</h1>
                <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <Link
                        to={{
                            pathname: "/client-payment-credit-card",
                            state: {caseId: props.location.state?.caseId}
                        }}
                        className="btn btn-primary w-50 mb-3"
                    >Credit/Debit Card</Link>
                    <Link
                        to="/client-payment-paypal"
                        className="btn btn-primary w-50 mb-3"
                    >Paypal ( 3% transfer fee )</Link>
                    <Link
                        to="/client-payment-zelle"
                        className="btn btn-primary w-50 mb-3"
                    >Zelle</Link>
                    <Link
                        to="/client-payment-checks"
                        className="btn btn-primary w-50 mb-3"
                    >Cashier/Corporate/Business Check (No Personal Checks)</Link>
                    <Link
                        to="/client-payment-ach-to-tpg"
                        className="btn btn-primary w-50 mb-3"
                    >Direct ACH to TPG bank account</Link>
                </div>
            </form>
        </div>
    )
}

export default ClientPaymentOptions;