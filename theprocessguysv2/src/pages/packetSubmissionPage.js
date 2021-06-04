import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function packetSubmissionPage() {

    return(
        <Card>
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
            <Card.Body md="12" className="justify-content-center">
                <button>
                    <Link to="/single-submission">Single File Submission</Link>
                </button>
                <br></br>
                <br></br>
                <button>
                    <Link to="/multi-submission">Multiple File Submission</Link>
                </button>
            </Card.Body>
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
        </Card>
    )
}

export default packetSubmissionPage;