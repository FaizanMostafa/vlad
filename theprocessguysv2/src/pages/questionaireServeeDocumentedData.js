import React, { useState } from "react";
// import {showToast} from "../utils";
import { MDBCol, MDBInput } from "mdbreact";
import QuestionaireAddressTemplate from "./questionaireAddressTemplate";
import QuestionaireAgentOfService from "./questionaireAgentOfServiceTemplate";
import QuestionaireEmploymentAddressTemplate from "./questionaireEmploymentAddressTemplate";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';

function QuestionaireServeeDocumentedData() {

    const user = useSelector(state => state.auth.user);

    const [howManyIndividualsServed, setHowManyindividualsServed] = useState("");
    const [employmentOfIndividuals, setEmploymentOfIndividuals] = useState("");
    const [nameOfIndividuals, setNameOfIndividuals] = useState("");
    const [dobOfIndividuals, setDobOfIndividuals] = useState("");
    const [locationForBeingServed, setLocationForBeingServed] = useState("");
    const [mainAddressForService, setMainAddressForService] = useState("");
    const [agentOfService, setAgentOfService] = useState("");
    const [ifYesListFullName, setIfYesListFullName] = useState("");
    const [phoneNumbersOfIndividuals, setPhoneNumberOfIndividuals] = useState("");
    const [emailsOfindividuals, setEmailOfIndividuals] = useState("");
    const [addressForCurrentPlaceOfEmployment, setAddressForCurrentPlaceOfEmployment] = useState("");
    const [knownCoResidentsOfServee, setCoResidentsOfServee] = useState("");

    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
  
          let data = {
            howManyIndividualsServed,          
            employmentOfIndividuals,
            nameOfIndividuals,
            dobOfIndividuals,
            locationForBeingServed,
            mainAddressForService,
            agentOfService,          
            ifYesListFullName,
            phoneNumbersOfIndividuals,
            emailsOfindividuals,
            addressForCurrentPlaceOfEmployment,
            knownCoResidentsOfServee
        }

        localStorage.setItem('questionaireServeeDocumentedData', JSON.stringify(data))
        history.push('/questionaire-clearance-of-action')

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
            <h2 className="text-center mb-4 mt-5">Servee Documented Data</h2>
            <br></br>
            <br></br>
            <MDBCol md="12" id="how-many-individuals-served">
                <div id="how-many-individuals-served">
                <label>How Many Individuals are Being Served?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                value={howManyIndividualsServed}
                onChange={(e) => setHowManyindividualsServed(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="name-of-individuals">
                <div id="name-of-individuals">
                <label>Full Name or Title of who is Receiving Service*</label>
                <MDBInput 
                type="text" 
                value={nameOfIndividuals}
                onChange={(e) => setNameOfIndividuals(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="dob-of-individuals">
                <div id="dob-of-individuals">
                <label>Date of Birth of Servee (Write N/A if unavailable)*</label>
                <MDBInput
                type="text" 
                value={dobOfIndividuals}
                onChange={(e) => setDobOfIndividuals(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="location-being-served">
                <div id="location-being-served">
                <label>What kind of location is being served? (Write N/A if unavailable)*</label>
                <select className="w-75 m-4 text-center p-2"
                value={locationForBeingServed}
                onChange={(e) => setLocationForBeingServed(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="individual" >Individual</option>
                <option value="business">Business</option>
                <option value="unknown">Unknown</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="main-address-for-service">
                <div id="main-address-for-service">
                <label>Main Address for Service*</label>
                <MDBInput
                type="text" 
                value={mainAddressForService}
                onChange={(e) => setMainAddressForService(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol>
                <QuestionaireAddressTemplate/>
            </MDBCol>
            <br></br>

            <MDBCol md="12" id="agent-of-service">
                <div id="agent-of-service">
                <label>Is There an Agent of Service?*</label>
                <select className="w-75 m-4 center p-2"
                value={agentOfService}
                onChange={(e) => setAgentOfService(e.target.value)}
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
            <MDBCol md="12" id="if-yes-list-full-name">
                <div id="if-yes-list-full-name">
                <label>If yes, List the Full Name to Agent of Service</label>
                <MDBInput
                type="text" 
                value={ifYesListFullName}
                onChange={(e) => setIfYesListFullName(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
                <MDBCol>
                    <QuestionaireAgentOfService />
                </MDBCol>
            <br></br>

            <MDBCol md="12" id="phone-numbers-of-individuals">
                <div id="phone-numbers-of-individuals">
                <label>Phone Number(s) Pertaining to Servee(s) - Identify via Mobile, Office, and/or Home</label>
                <MDBInput 
                type="textarea" 
                value={phoneNumbersOfIndividuals}
                onChange={(e) => setPhoneNumberOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="email-of-individuals">
                <div id="email-of-individuals">
                <label>E-Mail(s) pertaining Servee(s)</label>
                <MDBInput 
                type="textarea" 
                value={emailsOfindividuals}
                onChange={(e) => setEmailOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
                <div id="employment-of-individuals">
                <label>Is the Servee Currently Employed?*</label>
                <select className="w-75 m-4 center p-2"
                value={employmentOfIndividuals}
                onChange={(e) => setEmploymentOfIndividuals(e.target.value)}
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
            <MDBCol md="12" id="address-for-current-place-of-employment">
                <div id="address-for-current-place-of-employment">
                <label>Address for Current Place of Employment?</label>
                <MDBInput
                type="text" 
                value={addressForCurrentPlaceOfEmployment}
                onChange={(e) => setAddressForCurrentPlaceOfEmployment(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireEmploymentAddressTemplate />
            </MDBCol>
            <br></br>

            <MDBCol md="12" id="known-coresidents-of-servee">
                <div id="known-coresidents-of-servee">
                <label>Any Known Co-Resident(s) of the Servee and Their Relationship to the Individual?</label>
                <MDBInput 
                type="textarea" 
                value={knownCoResidentsOfServee}
                onChange={(e) => setCoResidentsOfServee(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
                <button style={{ color: "white"}} className="btn btn-primary mt-1 mb-1" onClick={handleSubmit}>Proceed to the Clearance of Action Section</button>
            <br></br>
            <br></br>
            <br></br>
            </form>
        </React.Fragment>
    )
}

export default QuestionaireServeeDocumentedData;