import React, { useState } from "react";
import { MDBCol, MDBInput } from "mdbreact";
import  {db}  from "../firebase";
import {showToast} from "../utils";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Questionaire() {

    const user = useSelector(state => state.auth.user);

    const [caseTitle, setCaseTitle] = useState("");
    const [caseNumber, setCaseNumber] = useState("");
    const [courtDate, setCourtDate] = useState("");
    const [superiorCourtOf, setSuperiorCourtOf] = useState("");
    const [countyOf, setCountyOf] = useState("");
    const [courthouseAddress, setCourthouseAddress] = useState("");
    const [courthouseMailingAddress, setCourthouseMailingAddress] = useState("");
    const [branchName, setBranchName] = useState("");
    const [appealsCourtOf, setAppealsCourtOf] = useState("");
    const [supremeCourtOf, setSupremeCourtOf] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("questionaire")
        .add({
          caseTitle: caseTitle,
          caseNumber: caseNumber,
          courtDate: courtDate,
          superiorCourtOf: superiorCourtOf,
          countyOf: countyOf,
          courthouseAddress: courthouseAddress,
          courthouseMailingAddress: courthouseMailingAddress,
          branchName: branchName,
          appealsCourtOf: appealsCourtOf,
          supremeCourtOf: supremeCourtOf
        })
        .then(() => {
            setCaseTitle("");
            setCaseNumber("");
            setCourtDate("");
            setSuperiorCourtOf("");
            setCountyOf("");
            setCourthouseAddress("");
            setCourthouseMailingAddress("");
            setBranchName("");
            setAppealsCourtOf("");
            setSupremeCourtOf("");
            showToast("Thank you for filling this portion out. 👍", "Please proceed to the next Section.");
        })
        .catch((error) => {
          showToast(error.message, "error");
        });
    }

    if(user);

    return(
        <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
        <h2 className="text-center mb-4 mt-5">New Case Questionaire</h2>
        <h3 className="text-center mb-4 mt-5">
            ​**Service should be completed 2 + weeks prior to the court date**
            Thus avoiding any complications with the judge.
            Please fill out as much information as possible from the court documents being submitted, certain sections marked with "*" are REQUIRED to proceed</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form className="mb-4" onSubmit={handleSubmit}>
            <MDBCol md="12" id="case-title">
                <div id="case-title">
                <label>Case Title*</label>
                <MDBInput
                type="text"
                value={caseTitle}
                onChange={(e) => setCaseTitle(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="case-number">
                <div id="case-number">
                <label>Case Number*</label>
                <MDBInput 
                type="text"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="court-date">
                <div id="court-date">
                <label>Court Date (Write N/A if not issued)*</label>
                <MDBInput 
                type="text"
                value={courtDate}
                onChange={(e) => setCourtDate(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="superior-court-of">
                <div id="superior-court-of">
                <label>Superior Court of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text"
                value={superiorCourtOf}
                onChange={(e) => setSuperiorCourtOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="county-of">
                <div id="county-of">
                <label>County Of*</label>
                <MDBInput
                type="text"
                value={countyOf}
                onChange={(e) => setCountyOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="branch-name">
                <div id="branch-name">
                <label>Branch Name*</label>
                <MDBInput
                type="text" 
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-address">
                <div id="courthouse-address">
                <label>Courthouse Address*</label>
                <MDBInput 
                type="text" 
                value={courthouseAddress}
                onChange={(e) => setCourthouseAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-mailing-address">
                <div id="courthouse-mailing-address">
                <label>Courthouse Mailing Address*</label>
                <MDBInput 
                type="text" 
                value={courthouseMailingAddress}
                onChange={(e) => setCourthouseMailingAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="appeals-court-of">
                <div id="appeals-court-of">
                <label>Appeals Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                value={appealsCourtOf}
                onChange={(e) => setAppealsCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="supreme-court-of">
                <div id="supreme-court-of">
                <label>Supreme Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                value={supremeCourtOf}
                onChange={(e) => setSupremeCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <br></br>
                <Link to="/questionaire-plaintiff" style={{ color: "white"}} className="btn btn-primary mt-1 mb-1">Proceed to Plaintiff Section</Link>
            </form>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )
};

export default Questionaire;