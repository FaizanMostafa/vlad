import React, { useState } from 'react';
import { MDBCol } from "mdbreact";
import { Link } from 'react-router-dom'

function CaseDocumentArchive() {

    const [caseTitleName] = useState("");
    const [takePlaceOfServeAddress] = useState("");
    const [plaintiffName] = useState("");
    const [defendantName] = useState("");
    const [attorneyName] = useState("");
    const [attorneyFirm] = useState("");
    const [phoneNumber] = useState("");
    const [courtCaseNumber] = useState("");
    const [processGuysCaseNumber] = useState("");
    const [dateOfSubmission] = useState("");
    const [caseStatus] = useState("");

    return(
        
        <MDBCol className="">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <h1 className="text-center"><b>Case Document Archive</b></h1>
            <br></br>
            <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
            <br></br>
            <br></br>
            <h4 className="text-center">Search Clients</h4>
            <br></br>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
            <br></br>
            <br></br>
            <br></br>

            <MDBCol className="" style={{border: "solid"}}>
            <br></br>
            <div>
                Case Title Name: {caseTitleName}
            </div>
            <br></br>
            <div>
                Address of Serve: {takePlaceOfServeAddress}
            </div>
            <br></br>
            <div>
                Plaintiff Name: {plaintiffName}
            </div>
            <br></br>
            <div>
                Defendant Name: {defendantName}
            </div>
            <br></br>
            <div>
                Attorney Name: {attorneyName}
            </div>
            <br></br>
            <div>
                Attorney Firm: {attorneyFirm}
            </div>
            <br></br>
            <div>
                Phone Number: {phoneNumber}
            </div>
            <br></br>
            <div>
                Court Case Number: {courtCaseNumber}
            </div>
            <br></br>
            {/* Case Number from the invoice */}
            <div>
                Process Guys Case Number: {processGuysCaseNumber}
            </div>
            <br></br>
            {/* Case Status can be only changed in admin 1 & 2 (Not client) | Client will always have file as "Active" | Options: Active/Pending/Closed/Cancelled */}
            <div className="">
                Case Status: {caseStatus}  &nbsp; 
                <select className="w-25" disabled>
                    <option>Please Select</option>
                    <option>Active</option>
                    <option>Cancelled</option>
                    <option>Closed</option>
                    <option>Pending</option>
                </select>
            </div>            
            <br></br>
            <div>
                Date of Submission: {dateOfSubmission}
            </div>            
            <br></br>
            {/* ( Admin 1 will have delete button for cases ) */}
                <div>
                    <button className="btn btn-danger" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"10px"}} disabled>Delete Case</button>
                </div>
        </MDBCol>    
        
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
        </MDBCol>
    
    )
}

export default CaseDocumentArchive;