import React from "react";
import { Link } from "react-router-dom";

function packetSubmissionPage() {

    return(

        <React.Fragment>
            <h1 className="text-center"><b>Packet Submission Page</b></h1>
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
                <div className="w-50">
                    <Link to="/single-submission" className="btn btn-primary">Single File Submission</Link>
                    <Link to="/multi-submission" className="btn btn-primary">Multiple File Submission</Link>
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
        </React.Fragment>
    )
}

export default packetSubmissionPage;