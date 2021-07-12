import React from 'react';
import { Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import { Link } from "react-router-dom";
import QuestionaireAttorneyP from "../../pages/questionaireAttorneyTemplateP";

const Questionaire2 = (props) => {
  const {
    plaintiffFullName,
    setPlaintiffFullName,
    plaintiffAddress,
    setPlaintiffAddress,
    numberOfAttorneyPlaintiff,
    setNumberOfAttorneyPlaintiff,
    attorneyRepresentingPlaintiffInfo,
    setAttorneyRepresentingPlaintiffInfo,
    plaintiffAttorneyName,
    setPlaintiffAttorneyName,
    plaintiffAttorneyBarNumber,
    setPlaintiffAttorneyBarNumber,
    plaintiffAttorneyOfficeAddress,
    setPlaintiffAttorneyOfficeAddress,
    plaintiffAttorneyEmail,
    setPlaintiffAttorneyEmail,
    plaintiffAttorneyPhoneNumberForCalls,
    setPlaintiffAttorneyPhoneNumberForCalls,
    plaintiffAttorneyFaxNumberOptional,
    setPlaintiffAttorneyFaxNumberOptional
  } = props;

  return (
    <>
      <h4 className="text-center mb-4 mt-5"><u>In the following two sections, information regarding both parties is required. Councel representing your party is required, and please provide as much information about opposing counsel as possible!</u> </h4>
      <br></br>
      <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
      <br></br>
      <Button className="d-flex align-items-center">
        <Link to="/questionaire-defendant" style={{ color: "white" }} className="mb-0 mt-0">Skip</Link>
      </Button>
      <p className="text-center">"Click Here" to skip filling this section out, leave it for our team to complete! (Additional Charge)</p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="plaintiff-full-name">
        <div id="plaintiff-full-name">
          <label>Plaintiff's Full Name*</label>
          <MDBInput
            type="text"
            value={plaintiffFullName}
            onChange={(e) => setPlaintiffFullName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-address">
        <div id="plaintiff-address">
          <label>Plaintiff's Address*</label>
          <MDBInput
            type="text"
            value={plaintiffAddress}
            onChange={(e) => setPlaintiffAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="number-of-plaintiff-listed">
        <div id="number-of-plaintiff-listed">
          <label>Number of Plaintiff(s) listed?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneyPlaintiff}
            onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
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

      <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
        <div id="number-of-attorney-representing-plaintiff">
          <label>Number of Attorney's Representing the Plaintiff?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={attorneyRepresentingPlaintiffInfo}
            onChange={(e) => setAttorneyRepresentingPlaintiffInfo(e.target.value)}
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
      <MDBCol md="12" id="plaintiff-attorney-name">
        <div id="plaintiff-attorney-name">
          <label>Enter Attorney Full Name*</label>
          <MDBInput
            type="text"
            value={plaintiffAttorneyName}
            onChange={(e) => setPlaintiffAttorneyName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-attorney-bar-number">
        <div id="plaintiff-attorney-bar-number">
          <label>Bar Number*</label>
          <MDBInput
            type="text"
            value={plaintiffAttorneyBarNumber}
            onChange={(e) => setPlaintiffAttorneyBarNumber(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-attorney-phone-number-for-calls">
        <div id="plaintiff-attorney-phone-number-for-calls">
          <label>Phone Number for Calls (you may list multiple)</label>
          <MDBInput
            type="textarea"
            value={plaintiffAttorneyPhoneNumberForCalls}
            onChange={(e) => setPlaintiffAttorneyPhoneNumberForCalls(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-attorney-office-address">
        <div id="plaintiff-attorney-office-address">
          <label>Office Address*</label>
          <MDBInput
            type="text"
            value={plaintiffAttorneyOfficeAddress}
            onChange={(e) => setPlaintiffAttorneyOfficeAddress(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-attorney-email">
        <div id="plaintiff-attorney-email">
          <label>Attorney E-Mail*</label>
          <MDBInput
            type="text"
            value={plaintiffAttorneyEmail}
            onChange={(e) => setPlaintiffAttorneyEmail(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="plaintiff-fax-number-optional">
        <div id="plaintiff-fax-number-optional">
          <label>Fax Number (Optional)</label>
          <MDBInput
            type="text"
            value={plaintiffAttorneyFaxNumberOptional}
            onChange={(e) => setPlaintiffAttorneyFaxNumberOptional(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol>
        <QuestionaireAttorneyP />
      </MDBCol>
      <p className="d-flex align-items-center justify-content-center">
        **Click button to add another Attorney**
      </p>
      <br />
    </>
  );
}

export default Questionaire2;