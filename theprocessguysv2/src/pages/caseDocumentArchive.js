import React, { useState, useEffect } from 'react';
import { MDBCol } from 'mdbreact';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import LoadingPage from "./Loading";
import {
    getUserCases
} from "../redux/actions/case";

function CaseDocumentArchive() {
    const dispatch = useDispatch();
    const isFetching = useSelector(state => state.caseReducer.isFetching);
    const user = useSelector(state => state.auth.user);
    const cases = useSelector(state => state.caseReducer.cases);
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

    useEffect(() => {
        if(!cases.length) {
            dispatch(getUserCases({uid: user.uid}));
        }
    }, [cases]);

    if(isFetching) return(<LoadingPage />);

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
            {
                cases.map((caseData)=>(
                    <MDBCol key={caseData.id} className="" style={{border: "solid"}}>
                        <br></br>
                        <div>
                            Case Title Name: {caseData.CaseInformation.caseTitle}
                        </div>
                        <br></br>
                        {/*Questionaire 4 "Main Address for Service" */}
                        <div>
                            Address of Serve: {caseData.ServeeOfDocumentedData.mainAddressForService}
                        </div>
                        <br></br>
                        <div>
                            Plaintiff Name: {caseData.PlaintiffInformation.plaintiffFullName}
                        </div>
                        <br></br>
                        <div>
                            Defendant Name: {caseData.DefendantInformation.defendantFullName}
                        </div>
                        <br></br>
                        {/*Questionaire 2 "Plaintiff Information" */}
                        <div>
                            Attorney Name: {caseData.PlaintiffInformation.plaintiffAttorneyName}
                        </div>
                        <br></br>
                        {/* We can skip this one
                        <div>
                            Attorney Firm: {attorneyFirm}
                        </div>
                        <br></br>*/}
                        {/*Questionaire 2 "Plaintiff Information" */}
                        <div>
                            Attorney Phone Number: {caseData.PlaintiffInformation.plaintiffAttorneyPhoneNumberForCalls}
                        </div>
                        <br></br>
                        <div>
                            Court Case Number: {caseData.CaseInformation.caseNumber}
                        </div>
                        <br></br>
                        {/* Case Number from the invoice */}
                        <div>
                            Process Guys Case Number: {caseData.id}
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
                            Date of Submission: {moment(caseData.filedAt).format()}
                        </div>            
                        <br></br>
                        {/* ( Admin 1 will have delete button for cases ) */}
                            <div>
                                <button className="btn btn-danger" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"10px"}} disabled>Delete Case</button>
                                <Link to="/client-payment-options" className="btn btn-secondary" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"200px"}}>Pay Invoice</Link>
                            </div>

                    </MDBCol>    

                ))
            }
        
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