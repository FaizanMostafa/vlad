import { Button } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Link as RSLink } from 'react-scroll';

const Questionaire3 = (props) => {
  const {
    isOrRepresentingDefendant,
    setIsOrRepresentingDefendant,
    shouldPGFillDefendantInfo,
    setShouldPGFillDefendantInfo,
    defendantsDetail,
    setDefendantsDetail,
    numberOfAttorneyDefendant,
    setNumberOfAttorneyDefendant,
    numberOfAttorneysRepresentingDefendant,
    setNumberOfAttorneysRepresentingDefendant,
    defendantAttorneysDetail,
    setDefendantAttorneysDetail
  } = props;

  const handleOnChangePhoneNumber = (key, phoneKey, attorney, phoneNumber) => {
    if(/^\s*\d{3}\s*$/.test(phoneNumber)) {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: `(${phoneNumber}) `}}}});
    } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(phoneNumber)) {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: `${phoneNumber}-`}}}});
    } else {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber}}}});
    }
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Defendant Information</h2>
      <br></br>
      <MDBCol md="12" id="is-or-representing-defendant-col">
        <div id="is-or-representing-defendant-cont">
          <label>Are you representing the Defendant, or are yourself the Defendant?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setIsOrRepresentingDefendant(true)} id="isDefendantY" name="isOrRepresentingDefendant" checked={isOrRepresentingDefendant===true} /><label className="ml-2" for="isDefendantY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setIsOrRepresentingDefendant(false)} id="isDefendantN" name="isOrRepresentingDefendant" checked={isOrRepresentingDefendant===false} /><label className="ml-2" for="isDefendantN">No</label>
          <br/>
          {
            isOrRepresentingDefendant
              ?
                <i>Please fill out attorney information pertaining to your counsel! (If you have any)</i>
              :
                <i>Opposing counsel does not need to be filled out, if information isn't available</i>
          }
        </div><br/>
      </MDBCol>
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
              'Click "Request form fill and skip" button to skip filling this section out, leave it for our team to complete!'
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
      {
        Object.entries(defendantsDetail).map(([key, defendant])=>(
          <>
            <MDBCol md="12" id="defendant-full-name">
              <div id="defendant-full-name">
                <label>Defendant's Full Name*</label>
                <MDBInput
                  type="text"
                  hint="First Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.fullName.firstName}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, firstName: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Middle Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.fullName.middleName}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, middleName: e.target.value}}})}
                />
                <MDBInput
                  type="text"
                  hint="Last Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.fullName.lastName}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, lastName: e.target.value}}})}
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
                  value={defendant.address.street}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, street: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="City"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.address.city}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, city: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="State"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.address.state}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, state: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Zip Code"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.address.zipCode}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, zipCode: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Country"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={defendant.address.country}
                  onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, country: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
          </>
        ))
      }
      <MDBCol md="12" id="number-of-attorney-representing-defendant">
        <div id="number-of-attorney-representing-defendant">
          <label>Number of Attorney's Representing the Defendant?*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfAttorneysRepresentingDefendant}
            disabled={shouldPGFillDefendantInfo}
            onChange={(e) => setNumberOfAttorneysRepresentingDefendant(e.target.value)}
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
      {
        Object.entries(defendantAttorneysDetail).map(([key, attorney])=>(
          <>
            <MDBCol md="12" id="defendant-attorney-name">
              <div id="defendant-attorney-name">
                <label>Enter Attorney Full Name{numberOfAttorneysRepresentingDefendant!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  hint="First Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.fullName.firstName}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, firstName: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Middle Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.fullName.middleName}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, middleName: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  hint="Last Name"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.fullName.lastName}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, lastName: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-bar-number">
              <div id="defendant-attorney-bar-number">
                <label>Bar Number{numberOfAttorneysRepresentingDefendant!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.barNumber}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, barNumber: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="phone-numbers-of-individuals">
              <label>Phone Number(s) for calls</label>
              {
                Object.entries(attorney.phoneNumbers).map(([phoneKey, phoneObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <MDBInput
                        hint="(###) ###-####"
                        className="text-white"
                        value={phoneObj.phoneNumber}
                        onChange={(e)=>handleOnChangePhoneNumber(key, phoneKey, attorney, e.target.value)}
                        // onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: e.target.value}}}})}
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <label>What kind of phone number is this?</label>
                      <select className="w-75 m-4 text-center p-2"
                        value={phoneObj.type}
                        onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], type: e.target.value}}}})}
                        required
                      >
                        <label caret color="white">
                          Please Select
                        </label>
                        <option value="">Please Select</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                        <option value="mobile">Mobile</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </MDBCol>
                  </MDBRow>
                ))
              }
              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button
                  className="btn btn-primary"
                  onClick={()=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [Object.keys(attorney.phoneNumbers).length]: {phoneNumber: "", type: ""}}}})}
                >
                  + Add another phone number
                </button>
              </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-fax-number-optional">
              <div id="defendant-attorney-fax-number-optional">
                <label>Fax Number (Optional)</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.faxNumber}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, faxNumber: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            
            <MDBCol md="12" id="defendant-attorney-email">
              <div id="defendant-attorney-email">
                <label>Attorney E-Mail{numberOfAttorneysRepresentingDefendant!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillDefendantInfo}
                  value={attorney.email}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, email: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-office-address">
              <div id="defendant-attorney-office-address">
                <label>Firm Address{numberOfAttorneysRepresentingDefendant!=="0"&&"*"}</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  hint="Street"
                  value={attorney.address.street}
                  disabled={shouldPGFillDefendantInfo}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, street: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  hint="City"
                  value={attorney.address.city}
                  disabled={shouldPGFillDefendantInfo}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, city: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  hint="State"
                  value={attorney.address.state}
                  disabled={shouldPGFillDefendantInfo}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, state: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  hint="Zip Code"
                  value={attorney.address.zipCode}
                  disabled={shouldPGFillDefendantInfo}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, zipCode: e.target.value}}})}
                  required
                />
                <MDBInput
                  type="text"
                  className="text-white"
                  hint="Country"
                  value={attorney.address.country}
                  disabled={shouldPGFillDefendantInfo}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, country: e.target.value}}})}
                  required
                />
              </div>
            </MDBCol>
          </>
        ))
      }
      <br />
    </>
  );
}

export default Questionaire3;