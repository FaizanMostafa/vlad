import React from 'react';
import { Button } from 'react-bootstrap';
import { MDBCol, MDBInput } from 'mdbreact';
import { Link, useHistory } from 'react-router-dom';
import QuestionaireAttorneyTemplateD from "../../pages/questionaireAttorneyTemplateD";

const Questionaire3 = (props) => {
  const {
    defendantFullName,
    setDefendantFullName,
    defendantAddress,
    setDefendantAddress,
    numberOfAttorneyDefendant,
    setNumberOfAttorneyDefendant,
    attorneyRepresentingDefendantInfo,
    setAttorneyRepresentingDefendantInfo,
    defendantAttorneyName,
    setDefendantAttorneyName,
    defendantAttorneyOfficeAddress,
    setDefendantAttorneyOfficeAddress,
    defendantAttorneyBarNumber,
    setDefendantAttorneyBarNumber,
    defendantAttorneyEmail,
    setDefendantAttorneyEmail,
    defendantAttorneyPhoneNumberForCalls,
    setDefendantAttorneyPhoneNumberForCalls,
    defendantAttorneyFaxNumberOptional,
    setDefendantAttorneyFaxNumberOptional
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Defendant Information</h2>
      <br></br>
      <Button className="d-flex align-items-center">
        <Link to="/questionaire-servee-documented-data" style={{ color: "white" }} className="mb-0 mt-0">Skip</Link>
      </Button>

      <p className="text-center">"Click Here" to skip filling this section out, leave it for our team to complete! (Additional Charge)</p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="defendant-full-name">
        <div id="defendant-full-name">
          <label>Defendant's Full Name*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantFullName}
            onChange={(e) => setDefendantFullName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-address">
        <div id="defendant-address">
          <label>Defendant's Address</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAddress}
            onChange={(e) => setDefendantAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="number-of-defendant-listed">
        <div id="number-of-defendant-listed">
          <label>Number of Defendant(s) listed?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneyDefendant}
            onChange={(e) => setNumberOfAttorneyDefendant(e.target.value)}
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
      <MDBCol md="12" id="number-of-attorney-representing-defendant">
        <div id="number-of-attorney-representing-defendant">
          <label>Number of Attorney's Representing the Defendant?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={attorneyRepresentingDefendantInfo}
            onChange={(e) => setAttorneyRepresentingDefendantInfo(e.target.value)}
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
      <MDBCol md="12" id="defendant-attorney-name">
        <div id="defendant-attorney-name">
          <label>Enter Attorney Full Name*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAttorneyName}
            onChange={(e) => setDefendantAttorneyName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-bar-number">
        <div id="defendant-attorney-bar-number">
          <label>Bar Number*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAttorneyBarNumber}
            onChange={(e) => setDefendantAttorneyBarNumber(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-phone-number-for-calls">
        <div id="defendant-attorney-phone-number-for-calls">
          <label>Phone Number for Calls (you may list multiple)</label>
          <MDBInput
            type="textarea"
            className="text-white"
            value={defendantAttorneyPhoneNumberForCalls}
            onChange={(e) => setDefendantAttorneyPhoneNumberForCalls(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-office-address">
        <div id="defendant-attorney-office-address">
          <label>Office Address*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAttorneyOfficeAddress}
            onChange={(e) => setDefendantAttorneyOfficeAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-email">
        <div id="defendant-attorney-email">
          <label>Attorney E-Mail*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAttorneyEmail}
            onChange={(e) => setDefendantAttorneyEmail(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-fax-number-optional">
        <div id="defendant-attorney-fax-number-optional">
          <label>Fax Number (Optional)</label>
          <MDBInput
            type="text"
            className="text-white"
            value={defendantAttorneyFaxNumberOptional}
            onChange={(e) => setDefendantAttorneyFaxNumberOptional(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol>
        <QuestionaireAttorneyTemplateD />
      </MDBCol>
      <p className="d-flex align-items-center justify-content-center">
        **Click button to add another Attorney**
      </p>
      <br />
    </>
  );
}

export default Questionaire3;