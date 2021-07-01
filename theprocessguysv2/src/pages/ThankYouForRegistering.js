import React from "react";
import { useHistory } from "react-router-dom";

function ThankYouForRegistering() {

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        history.push('/member-dashboard')

    }

        return(
        <><br></br><br></br><br></br><br></br><br></br><br></br>
            <React.Fragment>
                <h1><b>Thank you for Registering</b></h1><br></br><br></br><br></br>
                <p>Please contnue to your dashboard and proceed from there</p><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <div className="w-100 text-center mt-3 justify-content-center">
                    <button className="btn btn-primary" onClick={handleSubmit}>Go to your Dashboard
                    </button>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    <br></br><br></br>
                </div>
            </React.Fragment>
        </>
        )
}

export default ThankYouForRegistering