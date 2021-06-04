import React from "react";
import { Link } from "react-router-dom";

class ThankYouForRegistering extends React.Component {

    render() {
        return(
        <><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <React.Fragment>
                <h1><b>Thank you for Registering</b></h1><br></br><br></br><br></br>
                <p>Please contnue to your dashboard and proceed from there</p><br></br><br></br>
                <div className="w-100 text-center mt-3 justify-content-center">
                    <Link to="/member-dashboard">Go to your Dashboard
                    </Link>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                </div>
            </React.Fragment>
        </>
        )
    }
}

export default ThankYouForRegistering