import React from "react";
import { Link } from 'react-router-dom';

const ClientPaymentACH = () => {

    return(
        <React.Fragment>
        <br></br>
        <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>   
        <br></br>
        <h1 className="text-center">Direct ACH to TPG Payment</h1>
        <br></br>
        <br></br>        
        <form className="text-center" style={{ color: "white" }}>
        <h2>What is an ACH?</h2>
        <br></br>
        <br></br>
        <h4>ACH stands for "Automated Clearing House".
        <br></br>  
        <br></br>  
            ACH is an electronic network used by banks and government agencies (e.g., IRS) to process financial transactions and transmit money via direct deposit. 
        <br></br>  
        <br></br>          
            This process is different than a wire transfer (a faster, usually same-day transaction), and may take 1-2 business days to complete the transfer of funds from one bank to another. 
        <br></br>  
        <br></br>      
            NOTE: Saturdays, Sundays and holidays are not considered business days.
        </h4>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h5 style={{ color: "gold" }}>
            If you want to set up this payment, please contact the Process Guys members and they will help you with this process.
        <br></br>
        <br></br>
            Or e-mail our team at 
        <br></br>
        <br></br>
        <a href="https://mail.google.com/mail" style={{ marginRight: "940px"}} target="_blank" rel="noreferrer noopener">theprocessguys@gmail.com</a>
        </h5>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </form>
        </React.Fragment>
    )
}

export default ClientPaymentACH;