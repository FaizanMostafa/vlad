import React from 'react';
import { Button } from 'react-bootstrap';
import { MDBCol, MDBInput } from 'mdbreact';
import { Link as RSLink } from 'react-scroll';
import QuestionaireAttorneyTemplateD from "../../pages/questionaireAttorneyTemplateD";

const Questionaire3 = (props) => {
  const {
    shouldPGFillDefendantInfo,
    setShouldPGFillDefendantInfo,
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
    street,
    setStreet,
    city,
    setCity,
    state,
    setState,
    zipCode,
    setZipCode,
    country,
    setCountry,
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
      <center>
        {
          shouldPGFillDefendantInfo
            ?
              <Button variant="secondary" onClick={()=>setShouldPGFillDefendantInfo(!shouldPGFillDefendantInfo)} className="d-flex align-items-center">
                <span style={{ color: "white" }} className="mb-0 mt-0">
                  Fill the form yourself
                </span>
              </Button>
            :
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10}}>
                <RSLink activeClass="active" to="next-btn" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                  <Button onClick={()=>setShouldPGFillDefendantInfo(!shouldPGFillDefendantInfo)} >
                    <span style={{ color: "white" }} className="mb-0 mt-0">
                      Request form fill and skip
                    </span>
                  </Button>
                </RSLink>
              </div>
        }
      </center>
      <p className="text-center">
        {
          shouldPGFillDefendantInfo
            ?
              'Click "Fill the form yourself" button to enable the input fields to fill the form yourself instead'
            :
              'Click "Request form fill and skip" button to skip filling this section out, leave it for our team to complete! (Additional Charges)'
        }
      </p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-defendant-listed">
        <div id="number-of-defendant-listed">
          <label>Number of Defendant(s) listed?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneyDefendant}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setNumberOfAttorneyDefendant(e.target.value)}
            required
          >
            <option value="" >Please Select</option>
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
      <MDBCol md="12" id="defendant-full-name">
        <div id="defendant-full-name">
          <label>Defendant's Full Name*</label>
          <MDBInput
            type="text"
            hint="First Name"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantFullName.firstName}
            onChange={(e) => setDefendantFullName({...defendantFullName, firstName: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Middle Name"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantFullName.middleName}
            onChange={(e) => setDefendantFullName({...defendantFullName, middleName: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Last Name"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantFullName.lastName}
            onChange={(e) => setDefendantFullName({...defendantFullName, lastName: e.target.value})}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-address">
        <div id="defendant-address">
          <label>Defendant's Address</label>
          <MDBInput
            type="text"
            hint="Street"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAddress.street}
            onChange={(e) => setDefendantAddress({...defendantAddress, street: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAddress.city}
            onChange={(e) => setDefendantAddress({...defendantAddress, city: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="State"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAddress.state}
            onChange={(e) => setDefendantAddress({...defendantAddress, state: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAddress.zipCode}
            onChange={(e) => setDefendantAddress({...defendantAddress, zipCode: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Country"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAddress.country}
            onChange={(e) => setDefendantAddress({...defendantAddress, country: e.target.value})}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="number-of-attorney-representing-defendant">
        <div id="number-of-attorney-representing-defendant">
          <label>Number of Attorney's Representing the Defendant?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={attorneyRepresentingDefendantInfo}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setAttorneyRepresentingDefendantInfo(e.target.value)}
            required
          >
            <option value="" >Please Select</option>
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
          <label>Enter Attorney Full Name{attorneyRepresentingDefendantInfo!=="0"&&"*"}</label>
          <MDBInput
            type="text"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAttorneyName}
            onChange={(e) => setDefendantAttorneyName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-bar-number">
        <div id="defendant-attorney-bar-number">
          <label>Bar Number{attorneyRepresentingDefendantInfo!=="0"&&"*"}</label>
          <MDBInput
            type="text"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
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
            disabled={shouldPGFillDefendantInfo}
            value={defendantAttorneyPhoneNumberForCalls}
            onChange={(e) => setDefendantAttorneyPhoneNumberForCalls(e.target.value)}
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
            disabled={shouldPGFillDefendantInfo}
            value={defendantAttorneyFaxNumberOptional}
            onChange={(e) => setDefendantAttorneyFaxNumberOptional(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      
      <MDBCol md="12" id="defendant-attorney-email">
        <div id="defendant-attorney-email">
          <label>Attorney E-Mail{attorneyRepresentingDefendantInfo!=="0"&&"*"}</label>
          <MDBInput
            type="text"
            className="text-white"
            disabled={shouldPGFillDefendantInfo}
            value={defendantAttorneyEmail}
            onChange={(e) => setDefendantAttorneyEmail(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="defendant-attorney-office-address">
        <div id="defendant-attorney-office-address">
          <label>Firm Address{attorneyRepresentingDefendantInfo!=="0"&&"*"}</label>
          <MDBInput
            type="text"
            className="text-white"
            hint="Street"
            value={street}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <MDBInput
            type="text"
            className="text-white"
            hint="City"
            value={city}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <MDBInput
            type="text"
            className="text-white"
            hint="State"
            value={state}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setState(e.target.value)}
            required
          />
          <MDBInput
            type="text"
            className="text-white"
            hint="Zip Code"
            value={zipCode}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setZipCode(e.target.value)}
            required
          />
          <MDBInput
            type="text"
            className="text-white"
            hint="Country"
            value={country}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setCountry(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      {
        !shouldPGFillDefendantInfo
          &&
            <>
              <MDBCol>
                <QuestionaireAttorneyTemplateD
                  disabled={shouldPGFillDefendantInfo}
                />
              </MDBCol>
              <p className="d-flex align-items-center justify-content-center">
                **Click button to add another Attorney**
              </p>
            </>
      }
      <br />
    </>
  );
}

export default Questionaire3;