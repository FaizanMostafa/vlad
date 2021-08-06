import React from 'react';
import { MDBCol, MDBInput } from "mdbreact";
import QuestionaireAddressTemplate from "../../pages/questionaireAddressTemplate";
import QuestionaireAgentOfService from "../../pages/questionaireAgentOfServiceTemplate";
import QuestionaireEmploymentAddressTemplate from "../../pages/questionaireEmploymentAddressTemplate";

const Questionaire4 = (props) => {
  const {
    howManyIndividualsServed,
    setHowManyIndividualsServed,
    employmentOfIndividuals,
    setEmploymentOfIndividuals,
    nameOfIndividuals,
    setNameOfIndividuals,
    dobOfIndividuals,
    setDobOfIndividuals,
    locationForBeingServed,
    setLocationForBeingServed,
    mainAddressForService,
    setMainAddressForService,
    agentOfService,
    setAgentOfService,
    ifYesListFullName,
    setIfYesListFullName,
    phoneNumbersOfIndividuals,
    setPhoneNumberOfIndividuals,
    emailsOfIndividuals,
    setEmailsOfIndividuals,
    addressForCurrentPlaceOfEmployment,
    setAddressForCurrentPlaceOfEmployment,
    knownCoResidentsOfServee,
    setKnownCoResidentsOfServee
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Servee Documented Data</h2>
      <br></br>
      <br></br>
      <MDBCol md="12" id="how-many-individuals-served">
        <div id="how-many-individuals-served">
          <label>How Many Individuals are Being Served?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={howManyIndividualsServed}
            onChange={(e) => setHowManyIndividualsServed(e.target.value)}
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
            className="text-white"
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
            className="text-white"
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
            className="text-white"
            value={mainAddressForService}
            onChange={(e) => setMainAddressForService(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol>
        <QuestionaireAddressTemplate />
      </MDBCol>
      <br></br>

      <MDBCol md="12" id="agent-of-service">
        <div id="agent-of-service">
          <label>Is There an Agent of Service?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setAgentOfService(true)} id="agentOfServiceY" name="agentOfService" value={agentOfService} /><label className="ml-2" for="agentOfServiceY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setAgentOfService(false)} id="agentOfServiceN" name="agentOfService" value={agentOfService} /><label className="ml-2" for="agentOfServiceN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="if-yes-list-full-name">
        <div id="if-yes-list-full-name">
          <label>If yes, List the Full Name to Agent of Service</label>
          <MDBInput
            type="text"
            className="text-white"
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
            className="text-white"
            value={phoneNumbersOfIndividuals}
            onChange={(e) => setPhoneNumberOfIndividuals(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="email-of-individuals">
        <div id="email-of-individuals">
          <label>E-Mail(s) pertaining Servee(s)*</label>
          <MDBInput
            type="textarea"
            className="text-white"
            value={emailsOfIndividuals}
            onChange={(e) => setEmailsOfIndividuals(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="employment-of-individuals">
        <div id="employment-of-individuals">
          <label>Is the Servee Currently Employed?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setEmploymentOfIndividuals(true)} id="employmentOfIndividualsY" name="employmentOfIndividuals" value={employmentOfIndividuals} /><label className="ml-2" for="employmentOfIndividualsY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setEmploymentOfIndividuals(false)} id="employmentOfIndividualsN" name="employmentOfIndividuals" value={employmentOfIndividuals} /><label className="ml-2" for="employmentOfIndividualsN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="address-for-current-place-of-employment">
        <div id="address-for-current-place-of-employment">
          <label>Address for Current Place of Employment?</label>
          <MDBInput
            type="text"
            className="text-white"
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
            className="text-white"
            value={knownCoResidentsOfServee}
            onChange={(e) => setKnownCoResidentsOfServee(e.target.value)}
          />
        </div>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire4;