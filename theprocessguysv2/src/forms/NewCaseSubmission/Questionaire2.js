import React from 'react';
import { Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import { Link as RSLink } from 'react-scroll';
import QuestionaireAttorneyP from "../../pages/questionaireAttorneyTemplateP";

const Questionaire2 = (props) => {
  const {
    shouldPGFillPlaintiffInfo,
    setShouldPGFillPlaintiffInfo,
    plaintiffsDetail,
    setPlaintiffsDetail,
    numberOfAttorneyPlaintiff,
    setNumberOfAttorneyPlaintiff,
    numberOfAttorneysRepresentingPlaintiff,
    setNumberOfAttorneysRepresentingPlaintiff,
    plaintiffAttorneysDetail,
    setPlaintiffAttorneysDetail
  } = props;

  return (
    <>
      <h4 className="text-center mb-4 mt-5"><u>In the following two sections, information regarding both parties is required. Councel representing your party is required, and please provide as much information about opposing counsel as possible!</u> </h4>
      <br></br>
      <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
      <br></br>
      <center>
        {
          shouldPGFillPlaintiffInfo
            ?
              <Button variant="secondary" onClick={()=>setShouldPGFillPlaintiffInfo(!shouldPGFillPlaintiffInfo)} className="d-flex align-items-center">
                <span style={{ color: "white" }} className="mb-0 mt-0">
                  Fill the form yourself
                </span>
              </Button>
            :
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 10}}>
                <RSLink activeClass="active" to="next-btn" spy={true} smooth={true} offset={0} duration={500} delay={300}>
                  <Button onClick={()=>setShouldPGFillPlaintiffInfo(!shouldPGFillPlaintiffInfo)} >
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
          shouldPGFillPlaintiffInfo
            ?
              'Click "Fill the form yourself" button to enable the input fields to fill the form yourself instead'
            :
              'Click "Request form fill and skip" button to skip filling this section out, leave it for our team to complete! (Additional Charges)'
        }
      </p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-plaintiff-listed">
        <div id="number-of-plaintiff-listed">
          <label>Number of Plaintiff(s) listed?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneyPlaintiff}
            disabled={shouldPGFillPlaintiffInfo}
            onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
            required
          >
            <option value="">Please Select</option>
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
      {
        Object.entries(plaintiffsDetail).map(([key, plaintiff])=>(
          <>
            <MDBCol md="12" id="plaintiff-full-name">
              <div id="plaintiff-full-name">
                <label>Plaintiff's Full Name*</label>
                <MDBInput
                  type="text"
                  hint="First Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.fullName.firstName}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, fullName: {...plaintiff.fullName, firstName: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Middle Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.fullName.middleName}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, fullName: {...plaintiff.fullName, middleName: e.target.value}}})}
                />
                <MDBInput
                  type="text"
                  hint="Last Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.fullName.lastName}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, fullName: {...plaintiff.fullName, lastName: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-address">
              <div id="plaintiff-address">
                <label>Plaintiff's Address*</label>
                <MDBInput
                  type="text"
                  hint="Street"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.address.street}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, address: {...plaintiff.address, street: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="City"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.address.city}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, address: {...plaintiff.address, city: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="State"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.address.state}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, address: {...plaintiff.address, state: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Zip Code"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.address.zipCode}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, address: {...plaintiff.address, zipCode: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Country"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={plaintiff.address.country}
                  onChange={(e)=>setPlaintiffsDetail({...plaintiffsDetail, [key]: {...plaintiff, address: {...plaintiff.address, country: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
          </>
        ))
      }
      <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
        <div id="number-of-attorney-representing-plaintiff">
          <label>Number of Attorney's Representing the Plaintiff?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneysRepresentingPlaintiff}
            disabled={shouldPGFillPlaintiffInfo}
            onChange={(e) => setNumberOfAttorneysRepresentingPlaintiff(e.target.value)}
            required
          >
            <option value="">Please Select</option>
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
      {
        Object.entries(plaintiffAttorneysDetail).map(([key, attorney])=>(
          <>
            <MDBCol md="12" id="plaintiff-attorney-name">
              <div id="plaintiff-attorney-name">
                <label>Enter Attorney Full Name{numberOfAttorneysRepresentingPlaintiff!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  hint="First Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.fullName.firstName}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, firstName: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Middle Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.fullName.middleName}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, middleName: e.target.value}}})}
                />
                <MDBInput
                  type="text"
                  hint="Last Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.fullName.lastName}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, lastName: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-bar-number">
              <div id="plaintiff-attorney-bar-number">
                <label>Bar Number{numberOfAttorneysRepresentingPlaintiff!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.barNumber}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, barNumber: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-phone-number-for-calls">
              <div id="plaintiff-attorney-phone-number-for-calls">
                <label>Phone Number for Calls (you may list multiple, separated by whitespace)</label>
                <MDBInput
                  type="textarea"
                  hint="(###)#######"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.phoneNumbers}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, phoneNumbers: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-fax-number-optional">
              <div id="plaintiff-fax-number-optional">
                <label>Fax Number (Optional)</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.faxNumber}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, faxNumber: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-email">
              <div id="plaintiff-attorney-email">
                <label>Attorney E-Mail{numberOfAttorneysRepresentingPlaintiff!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  value={attorney.email}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, email: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-office-address">
              <div id="plaintiff-attorney-office-address">
                <label>Firm Address{numberOfAttorneysRepresentingPlaintiff!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="Street"
                  value={attorney.address.street}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, address: {...attorney.address, street: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="City"
                  value={attorney.address.city}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, address: {...attorney.address, city: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="State"
                  value={attorney.address.state}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, address: {...attorney.address, state: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="Zip Code"
                  value={attorney.address.zipCode}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, address: {...attorney.address, zipCode: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="Country"
                  value={attorney.address.country}
                  onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, address: {...attorney.address, country: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
          </>
        ))
      }
      {
        (!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff !== "")
          &&
            <>
              <MDBCol>
                <QuestionaireAttorneyP
                  disabled={shouldPGFillPlaintiffInfo}
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

export default Questionaire2;