import React from 'react';
import { Link } from 'react-router-dom';

function AfterUploadMessage() {

    return(
        <React.Fragment>
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
            <div className="text-center">
                <h1>We thank you for your new case submission,<br></br> 
                    a representative will contact you shortly within the 
                    next 24-48 hours,<br></br> in order to confirm the submitted details 
                    and provide the invoice.
                </h1>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div style={{ justifyContent: 'center', alignItems: 'center', flex: "auto"}}>
            <Link to="/member-dashboard" className="btn btn-primary">Back to Dashboard</Link>
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )
}

export default AfterUploadMessage;