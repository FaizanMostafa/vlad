import { Button, Form } from 'react-bootstrap';
import { MDBRow, MDBCol } from 'mdbreact';
import { Link as RSLink } from 'react-scroll';

export const Questionaire3 = (props) => {
  const {
    isFormDisabled,
    isOrRepresentingDefendant,
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

  const handleOnChangePhoneNumber = (key, phoneKey, attorney, newPhoneNumber) => {
    if(/^\s*\d{3}\s*$/.test(newPhoneNumber) && newPhoneNumber.length>attorney.phoneNumbers[phoneKey].phoneNumber.length) {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: `(${newPhoneNumber}) `}}}});
    } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) && newPhoneNumber.length>attorney.phoneNumbers[phoneKey].phoneNumber.length) {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: `${newPhoneNumber}-`}}}});
    } else if(newPhoneNumber.length>=7 && !newPhoneNumber.includes("(") && !newPhoneNumber.includes(")") && !newPhoneNumber.includes(" ") && !newPhoneNumber.includes("-")) {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: `(${newPhoneNumber.slice(0, 3)}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`}}}});
    } else {
      setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: newPhoneNumber}}}});
    }
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Defendant Information</h2>
      <br></br>
      <MDBCol md="12" id="is-or-representing-defendant-col">
        <div id="is-or-representing-defendant-cont">
          <Form.Label>Are you representing the Defendant, or are yourself the Defendant?*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              type="radio"
              disabled={true} className="ml-2" label="Yes"
              id="isDefendantY" name="isOrRepresentingDefendant"
              checked={isOrRepresentingDefendant===true}
            />
            <Form.Check
              type="radio"
              disabled={true} className="ml-4" label="No"
              id="isDefendantN" name="isOrRepresentingDefendant"
              checked={isOrRepresentingDefendant===false}
            />
          </div>
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
          !isFormDisabled
            && (
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
            )
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
        <Form.Group style={{display: "flex", alignItems: "center"}} id="number-of-defendant-listed">
          <Form.Label>Number of Defendant(s) listed?</Form.Label><br></br>
          <Form.Control className="w-50 m-4 text-center p-2"
            as="select"
            value={numberOfAttorneyDefendant}
            disabled={isFormDisabled || shouldPGFillDefendantInfo}
            onChange={(e) => setNumberOfAttorneyDefendant(e.target.value)}
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
          </Form.Control><br></br>
        </Form.Group>
      </MDBCol>
      {
        Object.entries(defendantsDetail).map(([key, defendant])=>(
          <>
            <MDBCol md="12" id="defendant-full-name">
              <Form.Label style={{fontWeight: "bold"}}>Defendant {parseInt(key)+1} Full Name</Form.Label>
              <MDBRow md="12">
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.fullName.firstName}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, firstName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.fullName.middleName}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, middleName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.fullName.lastName}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, fullName:{ ...defendant.fullName, lastName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="12" id="defendant-address">
              <Form.Label style={{fontWeight: "bold"}}>Defendant {parseInt(key)+1} Address</Form.Label>
              <MDBRow md="12" id="defendant-address">
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.address.street}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, street: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.address.city}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, city: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.address.state}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, state: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
              <MDBRow md="12">
                <MDBCol md="6">
                  <Form.Group>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.address.zipCode}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, zipCode: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="6">
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={defendant.address.country}
                      onChange={(e)=>setDefendantsDetail({...defendantsDetail, [key]: {...defendant, address:{ ...defendant.address, country: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </>
        ))
      }
      <MDBCol md="12" id="number-of-attorney-representing-defendant">
        <Form.Group style={{display: "flex", alignItems: "center"}} id="number-of-attorney-representing-defendant">
          <Form.Label>Number of Attorney's Representing the Defendant?*</Form.Label><br></br>
          <Form.Control
            as="select"
            className="w-50 m-4 text-center p-2"
            value={numberOfAttorneysRepresentingDefendant}
            disabled={isFormDisabled || shouldPGFillDefendantInfo}
            onChange={(e) => setNumberOfAttorneysRepresentingDefendant(e.target.value)}
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
          </Form.Control><br></br>
        </Form.Group>
      </MDBCol>
      {
        Object.entries(defendantAttorneysDetail).map(([key, attorney])=>(
          <>
            <MDBCol md="12" id="defendant-attorney-name">
              <Form.Label style={{fontWeight: "bold"}}>Attorney {parseInt(key)+1} Full Name</Form.Label>
              <MDBRow md="12">
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={attorney.fullName.firstName}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, firstName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={attorney.fullName.middleName}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, middleName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={attorney.fullName.lastName}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, fullName: {...attorney.fullName, lastName: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-bar-number">
              <Form.Group id="defendant-attorney-bar-number">
                <Form.Label>Bar Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={attorney.barNumber}
                  onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, barNumber: e.target.value}})}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="12" id="phone-numbers-of-individuals">
              <Form.Label>Phone Number(s) for calls</Form.Label>
              {
                Object.entries(attorney.phoneNumbers).map(([phoneKey, phoneObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={isFormDisabled}
                          value={phoneObj.phoneNumber}
                          onChange={(e)=>handleOnChangePhoneNumber(key, phoneKey, attorney, e.target.value)}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="6">
                      <Form.Label>What kind of phone number is this?</Form.Label>
                      <Form.Control
                        as="select"
                        disabled={isFormDisabled}
                        className="w-75 m-4 text-center p-2"
                        value={phoneObj.type}
                        onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], type: e.target.value}}}})}
                      >
                        <label caret color="white">
                          Please Select
                        </label>
                        <option value="">Please Select</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                        <option value="mobile">Mobile</option>
                        <option value="unknown">Unknown</option>
                      </Form.Control>
                    </MDBCol>
                  </MDBRow>
                ))
              }
              {
                !isFormDisabled
                  &&
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <button
                        className="btn btn-primary"
                        onClick={()=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [Object.keys(attorney.phoneNumbers).length]: {phoneNumber: "", type: ""}}}})}
                      >
                        + Add another phone number
                      </button>
                    </div>
              }
            </MDBCol>
            <MDBRow md="12">
              <MDBCol md="6" id="defendant-attorney-fax-number-optional">
                <Form.Group id="defendant-attorney-fax-number-optional">
                  <Form.Label>Fax Number</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.faxNumber}
                    onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, faxNumber: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6" id="defendant-attorney-email">
                <Form.Group id="defendant-attorney-email">
                  <Form.Label>Attorney E-Mail{numberOfAttorneysRepresentingDefendant!=="0"&&"*"}</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.email}
                    onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, email: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <MDBCol md="12">
              <Form.Label style={{fontWeight: "bold"}}>Firm Address</Form.Label>
              <MDBRow md="12">
                <MDBCol md="4">
                  <Form.Group id="defendant-attorney-office-address">
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      value={attorney.address.street}
                      disabled={isFormDisabled}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, street: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      value={attorney.address.city}
                      disabled={isFormDisabled}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, city: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      value={attorney.address.state}
                      disabled={isFormDisabled}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, state: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
              <MDBRow md="12">
                <MDBCol md="6">
                  <Form.Group>
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control
                      type="text"
                      value={attorney.address.zipCode}
                      disabled={isFormDisabled}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, zipCode: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="6">
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      value={attorney.address.country}
                      disabled={isFormDisabled}
                      onChange={(e)=>setDefendantAttorneysDetail({...defendantAttorneysDetail, [key]: {...attorney, address: {...attorney.address, country: e.target.value}}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
            </MDBCol>          
          </>
        ))
      }
      <br />
    </>
  );
}