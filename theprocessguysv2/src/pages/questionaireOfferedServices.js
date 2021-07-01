import React, { useState } from "react";
// import {showToast} from "../utils";
import { MDBCol, MDBInput } from "mdbreact";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

function QuestionaireOfferedServices() {

    const user = useSelector(state => state.auth.user);

    const [requireStakeOutService, setRequireStakeoutService] = useState("");
    const [specifyDatesForStakeOutService, setSpecifyDatesForStakeOutService] = useState("");
    const [requireRushService, setRequireRushService] = useState("");
    const [listDateWhenServiceAttemptsClosed, setListDateWhenServiceAttemptsClosed] = useState("");
    const [requireFirst24HourService,setRequireFirst24HourService] = useState("");
    const [requireSkipTracingService, setRequireSkipTracingService] = useState("");
    const [requireBodyCamFootage, setRequireBodyCamFootage] = useState("");
    const [obtainNewDeliveryLocation, setObtainNewDeliveryLocation] = useState("");
    const [poBoxAllowedToServe, setPOBoxAllowedToServe] = useState("");
    const [requireServiceByMail, setRequireServiceByMail] = useState("");
    const [requireByEmail, setRequireByEmail] = useState("");
    const [specificCourtInstruction, setSpecificCourtInstruction] = useState("");
    const [ifYesListAddress, setIfYesListAddress] = useState("");

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
  
          let data = {
            requireStakeOutService,
            specifyDatesForStakeOutService,
            requireRushService,          
            listDateWhenServiceAttemptsClosed,
            requireFirst24HourService,
            requireSkipTracingService,
            requireBodyCamFootage,
            obtainNewDeliveryLocation,
            poBoxAllowedToServe,
            requireServiceByMail,
            requireByEmail,
            specificCourtInstruction,
            ifYesListAddress
        }

        localStorage.setItem('questionaireOfferedServices', JSON.stringify(data))
        history.push('/packet-submission-page')

        // .then(() => {
        //     showToast("Thank you for filling this portion out. 👍", "Please proceed to the next Section.");
        // })
        // .catch((error) => {
        //   showToast(error.message, "error");
        // });
    }

    if (user);

    return (
        <React.Fragment>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
            <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
            <br></br>
            <br></br>
            <form className="mb-4" onSubmit={handleSubmit}>
            <h2 className="text-center mb-4 mt-2">Offered Services</h2>
            <br></br>

            <MDBCol md="12" id="require-stake-out-service">
                <div id="require-stake-out-service">
                <label>Do You Require a Stake Out Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireStakeOutService}
                onChange={(e) => setRequireStakeoutService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specify-dates-for-stake-out-service">
                <div id="specify-dates-for-stake-out-service">
                <label>What hours of the day would you want a stake out? And how many hours?</label>
                <MDBInput 
                type="textarea" 
                value={specifyDatesForStakeOutService}
                onChange={(e) => setSpecifyDatesForStakeOutService (e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-rush-service">
                <div id="require-rush-service">
                <label>Do You Require a Rush Service?* <i>(Additional Fee)</i></label>
                <select className="w-75 m-4 center p-2"
                value={requireRushService}
                onChange={(e) => setRequireRushService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="list-date-when-service-attempts-closed">
                <div id="list-date-when-service-attempts-closed">
                <label>List date when service attempts need to be closed out by.</label>
                <MDBInput 
                type="textarea" 
                value={listDateWhenServiceAttemptsClosed}
                onChange={(e) => setListDateWhenServiceAttemptsClosed(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-first-24-hour-service">
                <div id="require-first-24-hour-service">
                <label>Do you require a Service attempt within the first 24 hours of submission?<i>(Additional Fee)</i></label>
                <select className="w-75 m-4 center p-2"
                value={requireFirst24HourService}
                onChange={(e) => setRequireFirst24HourService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-skip-tracing-service">
                <div id="require-skip-tracing-service">
                <label>Do You Require a “Skip Tracing” Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireSkipTracingService}
                onChange={(e) => setRequireSkipTracingService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-body-cam-footage">
                <div id="require-body-cam-footage">
                <label>Do You Require Body Cam Footage of Service to Present as Evidence? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireBodyCamFootage}
                onChange={(e) => setRequireBodyCamFootage(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="obtain-new-delivery-location">
                <div id="obtain-new-delivery-location">
                <label>If the Process Server Obtains a New Delivery Location from the Servee, 
                    Should they Proceed the Service Without Authorization? <i>(Pre-Paid Plan)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={obtainNewDeliveryLocation}
                onChange={(e) => setObtainNewDeliveryLocation(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="p-o-box-allowed-to-serve">
                <div id="p-o-box-allowed-to-serve">
                <label>Is a P.O. Box Allowed to be Served Belonging to the Person of Interest? <i>(USPS Excluded)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={poBoxAllowedToServe}
                onChange={(e) => setPOBoxAllowedToServe(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-email">
                <div id="require-service-by-email">
                <label>Do you require a service by E-mail? Requires a written statement from servee agreeing to accept such a serve <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireByEmail}
                onChange={(e) => setRequireByEmail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-mail">
                <div id="require-service-by-mail">
                <label>Do You Require a Service by Secured Postal Mail with Signature, After Personal Service is Attempted? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireServiceByMail}
                onChange={(e) => setRequireServiceByMail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specific-court-instruction">
                <div id="specific-court-instruction">
                <label>Any Specific Case Information or Court Instructions you’d like to Provide? <i>(Example: Previous service attempts/experiences made, any noteable threats/altercations with listed Servees or other contacts, Court Requirements, Hours permitted for service by the court)</i> We generally operate between 8 AM and 10 PM</label>
                <MDBInput
                type="textarea" 
                value={specificCourtInstruction}
                onChange={(e) => setSpecificCourtInstruction(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-zip-file-service">
                <div id="require-zip-file-service">
                <label>Do you Require a Zip File Service at a Court House or Law Office? <i>(Additional Fee Based on Location)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireServiceByMail}
                onChange={(e) => setRequireServiceByMail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="if-yes-provide-address">
                <div id="if-yes-provide-address">
                <label>If yes, please Provide Address for Zip Filing</label>
                <MDBInput
                type="text" 
                value={ifYesListAddress}
                onChange={(e) => setIfYesListAddress(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
            <br></br>
                <button style={{ color: "white"}} className="btn btn-primary mt-1 mb-1" onclick={handleSubmit}>
                    Proceed to Document Upload
                </button>
            <br></br>
            <br></br>
            <br></br>
            </form>
        </React.Fragment>
    )
}

export default QuestionaireOfferedServices;