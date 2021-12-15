import { MDBCol, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";
import QuestionaireAddressTemplate from "../../pages/questionaireAddressTemplate";
import QuestionaireAgentOfService from "../../pages/questionaireAgentOfServiceTemplate";

const Questionaire4 = (props) => {
  const {
    isFormDisabled,
    numberOfCaseFilesBeingServed,
    setNumberOfCaseFilesBeingServed,
    howManyIndividualsServed,
    setHowManyIndividualsServed,
    serveesDetail,
    setServeesDetail
  } = props;

  const handleNoOfServeesChanged = (e) => {
    setHowManyIndividualsServed(e.target.value);
    if(e.target.value!=="" && parseInt(e.target.value)>1) {
      setNumberOfCaseFilesBeingServed("1");
    }
  }

  const handleNoOfCaseFilesChanged = (e) => {
    setNumberOfCaseFilesBeingServed(e.target.value);
    if(e.target.value!=="" && parseInt(e.target.value)>1) {
      setHowManyIndividualsServed("1");
    }
  }

  const handleOnChangePhoneNumber = (key, phoneKey, newPhoneNumber) => {
    if(/^\s*\d{3}\s*$/.test(newPhoneNumber) && newPhoneNumber.length>serveesDetail[key].phoneNumbers[phoneKey].phoneNumber.length) {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: `(${newPhoneNumber}) `}}}});
    } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) && newPhoneNumber.length>serveesDetail[key].phoneNumbers[phoneKey].phoneNumber.length) {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: `${newPhoneNumber}-`}}}});
    } else if(newPhoneNumber.length>=7 && !newPhoneNumber.includes("(") && !newPhoneNumber.includes(")") && !newPhoneNumber.includes(" ") && !newPhoneNumber.includes("-")) {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: `(${newPhoneNumber.slice(0, 3)}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`}}}});
    } else {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: newPhoneNumber}}}});
    }
  }

  const handleOnClickDeletePhoneNumber = (targetServeeKey, targetPhoneKey) => {
    const updatedPhoneNumbers = {};
    Object.entries(serveesDetail[targetServeeKey].phoneNumbers).map(([key, phoneNumberObj])=>{
      if(key!==targetPhoneKey) updatedPhoneNumbers[Object.keys(updatedPhoneNumbers).length] = phoneNumberObj
    });
    setServeesDetail({...serveesDetail, [targetServeeKey]: {...serveesDetail[targetServeeKey], phoneNumbers: updatedPhoneNumbers}});
  }

  const handleOnClickDeleteResident = (targetServeeKey, targetResidentKey) => {
    const updatedResidents = {};
    Object.entries(serveesDetail[targetServeeKey].coResidents).map(([key, residentObj])=>{
      if(key!==targetResidentKey) updatedResidents[Object.keys(updatedResidents).length] = residentObj
    });
    setServeesDetail({...serveesDetail, [targetServeeKey]: {...serveesDetail[targetServeeKey], coResidents: updatedResidents}});
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Servee Documented Data</h2>
      <br></br>
      <br></br>
      <MDBRow md="12">
        <MDBCol md="6">
          <Form.Group id="number-of-case-files">
            <Form.Label>How many case files are being served? (Only if multiple cases are being involved for service to the same SERVEE)*</Form.Label>
            <Form.Control
              as="select"
              disabled={isFormDisabled}
              className="w-75 m-4 text-center p-2"
              value={numberOfCaseFilesBeingServed}
              onChange={handleNoOfCaseFilesChanged}
            >
              <option value="">Please Select</option>
              {
                howManyIndividualsServed!=="" && parseInt(howManyIndividualsServed)>1
                  ?
                    <option value="1">1</option>
                  :
                    <>
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
                    </>
              }
            </Form.Control><br></br>
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="how-many-individuals-served">
          <Form.Group id="how-many-individuals-served">
            <Form.Label>How many servees are being served? (Only if multiple servees are receiving the same case file)*</Form.Label><br></br>
            <Form.Control
              as="select"
              disabled={isFormDisabled}
              className="w-75 m-4 text-center p-2"
              value={howManyIndividualsServed}
              onChange={handleNoOfServeesChanged}
            >
              <option value="">Please Select</option>
              {
                numberOfCaseFilesBeingServed!=="" && parseInt(numberOfCaseFilesBeingServed)>1
                  ?
                    <option value="1">1</option>
                  :
                    <>
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
                    </>
              }
            </Form.Control><br></br>
          </Form.Group>
        </MDBCol>
      </MDBRow>
      {
        Object.entries(serveesDetail).map(([serveeKey, servee])=>(
          <>
            <Form.Label style={{fontWeight: "bold", fontSize: 22}}>Servee {Object.entries(serveesDetail).length>1 && Number(serveeKey)+1} Details</Form.Label>
            <MDBRow md="12">
              <MDBCol md="12">
                <Form.Group id="name-of-individuals">
                  <Form.Label>Full Name or Title of who is Receiving Service*</Form.Label>
                  <Form.Control
                    type="text"
                    value={servee.fullName}
                    disabled={isFormDisabled}
                    onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...serveesDetail[serveeKey], fullName: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6">
                <Form.Group id="dob-of-individuals">
                  <Form.Label>Date of Birth of Servee (Write N/A if unavailable)*</Form.Label>
                  <Form.Control
                    type="text"
                    value={servee.dob}
                    disabled={isFormDisabled}
                    onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...serveesDetail[serveeKey], dob: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6">
                <Form.Group id="approx-age-of-individuals">
                  <Form.Label>Approximate age of servee, if DOB is unknown</Form.Label>
                  <Form.Control
                    type="text"
                    value={servee.age}
                    disabled={isFormDisabled}
                    onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...serveesDetail[serveeKey], age: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <MDBCol md="12" id="phone-numbers-of-individuals">
              <Form.Label>Phone Number(s) Pertaining to Servee</Form.Label>
              {
                Object.entries(servee.phoneNumbers).map(([phoneKey, phoneObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={isFormDisabled}
                          value={phoneObj.phoneNumber}
                          onChange={(e)=>handleOnChangePhoneNumber(serveeKey, phoneKey, e.target.value)}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="5">
                      <Form.Group>
                        <Form.Label>What kind of phone number is this?</Form.Label>
                        <Form.Control
                          as="select"
                          value={phoneObj.type}
                          disabled={isFormDisabled}
                          className="w-75 text-center p-2"
                          onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, phoneNumbers: {...servee.phoneNumbers, [phoneKey]: {...servee.phoneNumbers[phoneKey], type: e.target.value}}}})}
                        >
                          <option value="">Please Select</option>
                          <option value="home">Home</option>
                          <option value="office">Office</option>
                          <option value="mobile">Mobile</option>
                          <option value="unknown">Unknown</option>
                        </Form.Control>
                      </Form.Group>
                    </MDBCol>
                    {
                      Object.keys(servee.phoneNumbers).length>1
                        &&
                          <MDBCol middle md="1">
                            <span
                              onClick={()=>handleOnClickDeletePhoneNumber(serveeKey, phoneKey)}
                              style={{fontWeight: "bold", fontSize: 30, color: "red", cursor: "pointer"}}
                            >X</span>
                          </MDBCol>
                    }
                  </MDBRow>
                ))
              }
              {
                !isFormDisabled
                  &&
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <button
                        className="btn btn-primary"
                        onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, phoneNumbers: {...servee.phoneNumbers, [Object.keys(servee.phoneNumbers).length]: {phoneNumber: "", type: ""}}}})}
                      >
                        + Add another phone number
                      </button>
                    </div>
              }
            </MDBCol>
            <MDBCol md="12" id="email-of-individuals">
              <Form.Group id="email-of-individuals">
                <Form.Label>E-Mail(s) pertaining Servee(s) (you may list multiple , each email separated with whitespace)</Form.Label>
                <Form.Control
                  type="textarea"
                  disabled={isFormDisabled}
                  value={servee.email}
                  onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, email: e.target.value}})}
                />
              </Form.Group>
            </MDBCol>
            <br />
            <MDBCol md="12" id="known-coresidents-of-servee">
              <Form.Label style={{fontWeight: "bold"}}>Any Known Co-Resident(s)?</Form.Label>
              {
                Object.entries(servee.coResidents).map(([residentKey, residentObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <Form.Group>
                        <Form.Label>Co-Resident</Form.Label>
                        <Form.Control
                          type="text"
                          value={residentObj.name}
                          disabled={isFormDisabled}
                          onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, coResidents: {...servee.coResidents, [residentKey]: {...servee.coResidents[residentKey], name: e.target.value}}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="5">
                      <Form.Group>
                        <Form.Label>Relationship to resident?</Form.Label>
                        <Form.Control
                          as="select"
                          disabled={isFormDisabled}
                          value={residentObj.relation}
                          className="w-75 text-center p-2"
                          onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, coResidents: {...servee.coResidents, [residentKey]: {...servee.coResidents[residentKey], relation: e.target.value}}}})}
                        >
                          <option value="">Please Select</option>
                          <option value="husband">Husband</option>
                          <option value="wife">Wife</option>
                          <option value="brother">Brother</option>
                          <option value="sister">Sister</option>
                          <option value="roommate">Roommate</option>
                          <option value="girlfriend">Girlfriend</option>
                          <option value="boyfriend">Boyfriend</option>
                          <option value="father">Father</option>
                          <option value="mother">Mother</option>
                          <option value="son">Son</option>
                          <option value="daughter">Daughter</option>
                          <option value="uncle">Uncle</option>
                          <option value="aunt">Aunt</option>
                          <option value="cousin">Cousin</option>
                          <option value="friend">Friend</option>
                          <option value="coworker">Co-worker</option>
                          <option value="manager/boss">Manager/Boss</option>
                          <option value="unknown">Unknown</option>
                        </Form.Control>
                      </Form.Group>
                    </MDBCol>
                    {
                      Object.keys(servee.coResidents).length>1
                        &&
                          <MDBCol middle md="1">
                            <span
                              onClick={()=>handleOnClickDeleteResident(serveeKey, residentKey)}
                              style={{fontWeight: "bold", fontSize: 30, color: "red", cursor: "pointer"}}
                            >X</span>
                          </MDBCol>
                    }
                  </MDBRow>
                ))
              }
              {
                !isFormDisabled
                  &&
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <button
                        className="btn btn-primary"
                        onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, coResidents: {...servee.coResidents, [Object.keys(servee.coResidents).length]: {name: "", relation: ""}}}})}
                      >
                        + Add another co-resident
                      </button>
                    </div>
              }
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
              <div id={`employment-of-individuals${serveeKey}`}>
                <Form.Label>Is the Servee Currently Employed?*</Form.Label><br />
                <div style={{display: "flex"}}>
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-2" type="radio" label="Yes"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, isEmployed: "yes"}})}
                    id={`employmentOfIndividualsY${serveeKey}`}
                    name={`employmentOfIndividuals${serveeKey}`}
                    checked={servee.isEmployed==="yes"?true:false}
                  />
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-4" type="radio" label="No"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, isEmployed: "no"}})}
                    id={`employmentOfIndividualsN${serveeKey}`}
                    name={`employmentOfIndividuals${serveeKey}`}
                    checked={servee.isEmployed==="no"?true:false}
                  />
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-4" type="radio" label="Unknown"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, isEmployed: "unknown"}})}
                    id={`employmentOfIndividualsU${serveeKey}`}
                    name={`employmentOfIndividuals${serveeKey}`}
                    checked={servee.isEmployed==="unknown"?true:false}
                  />
                </div>
                <br/>
              </div>
            </MDBCol>
            <br></br>
            {
              Object.entries(servee.serviceDetails).map(([serviceDetailKey, serviceDetail])=>(
                <>
                  <MDBCol md="12" id="location-being-served">
                    <Form.Label style={{fontWeight: "bold"}}>{Number(serviceDetailKey)===0 && "Main "}Address {(Number(serviceDetailKey)!==0 && Object.keys(servee.serviceDetails).length>1) && Number(serviceDetailKey)+1} for Service</Form.Label>
                    <Form.Group id="location-being-served">
                      <Form.Label style={{paddingLeft: 16}}>What kind of location is being served?*</Form.Label>
                      <Form.Control
                        as="select"
                        disabled={isFormDisabled}
                        className="w-75 text-center p-2"
                        style={{marginLeft: 16}}
                        value={serviceDetail.locationType}
                        onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, locationType: e.target.value}}}})}
                      >
                        <option value="" >Please Select</option>
                        <option value="residence" >Residence</option>
                        <option value="business">Business</option>
                        <option value="unknown">Unknown</option>
                      </Form.Control>
                    </Form.Group>
                  </MDBCol>
                  <MDBCol md="12" id="main-address-for-service">
                    <MDBCol>
                      <MDBRow md="12">
                        <MDBCol md="4">
                          <Form.Group>
                            <Form.Label>Street</Form.Label>
                            <Form.Control
                              type="text"
                              disabled={isFormDisabled}
                              value={serviceDetail.address.street}
                              onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, address: {...serviceDetail.address, street: e.target.value}}}}})}
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol md="4">
                          <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              disabled={isFormDisabled}
                              value={serviceDetail.address.city}
                              onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, address: {...serviceDetail.address, city: e.target.value}}}}})}
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol md="4">
                          <Form.Group>
                            <Form.Label>State</Form.Label>
                            <Form.Control
                              type="text"
                              disabled={isFormDisabled}
                              value={serviceDetail.address.state}
                              onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, address: {...serviceDetail.address, state: e.target.value}}}}})}
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
                              value={serviceDetail.address.zipCode}
                              onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, address: {...serviceDetail.address, zipCode: e.target.value}}}}})}
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol md="6">
                          <Form.Group>
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                              type="text"
                              disabled={isFormDisabled}
                              value={serviceDetail.address.country}
                              onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, address: {...serviceDetail.address, country: e.target.value}}}}})}
                            />
                          </Form.Group>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-first-24-hour-service">
                        <Form.Label>Is this a "normal serve" or a "personal serve"?*</Form.Label>
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Personal" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, typeOfServe: "personal"}}}})}
                            id={`typeOfServeP${serveeKey}${serviceDetailKey}`} name={`typeOfServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.typeOfServe==="personal"}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="Normal" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, typeOfServe: "normal"}}}})}
                            id={`typeOfServeN${serveeKey}${serviceDetailKey}`} name={`typeOfServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.typeOfServe==="normal"}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-first-24-hour-service">
                        <Form.Label>Do you require a Service attempt within the first 24 hours of submission?*<i>(Additional Fee)</i></Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireFirst24HourService: true}}}})}
                            id={`requireFirst24HourServiceY${serveeKey}${serviceDetailKey}`} name={`requireFirst24HourService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireFirst24HourService===true}
                          />
                          <Form.Check className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireFirst24HourService: false}}}})}
                            id={`requireFirst24HourServiceN${serveeKey}${serviceDetailKey}`} name={`requireFirst24HourService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireFirst24HourService===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-rush-service">
                        <Form.Label>Do You Require a Rush Service?* This is regarding service that needs to be served with 13 days or less <i>(Additional Fee)</i></Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireRushService: true}}}})}
                            id={`requireRushServiceY${serveeKey}${serviceDetailKey}`} name={`requireRushService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireRushService===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireRushService: false}}}})}
                            id={`requireRushServiceN${serveeKey}${serviceDetailKey}`} name={`requireRushService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireRushService===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-stake-out-service">
                        <Form.Label>Do You Require a Stake Out Service? <i>(Additional Fee)</i>*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireStakeOutService: true}}}})}
                            id={`requireStakeOutServiceY${serveeKey}${serviceDetailKey}`} name={`requireStakeOutService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireStakeOutService===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, requireStakeOutService: false}}}})}
                            id={`requireStakeOutServiceN${serveeKey}${serviceDetailKey}`} name={`requireStakeOutService${serveeKey}${serviceDetailKey}`} checked={serviceDetail.requireStakeOutService===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    {/* 5th question pending */}
                    <MDBCol md="12">
                      <Form.Group id="service-ceasing-date">
                        <Form.Label>Please provide a closing date for when all service attempts must cease. (Regular service time frame should be 2-5 weeks, unless otherwise specified)*</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={isFormDisabled}
                          value={serviceDetail.ceaseDate}
                          onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, ceaseDate: e.target.value}}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-stake-out-service">
                        <Form.Label>Is a "Subservice" to a Co-Resident/Co-Worker after due diligence allowed? ("Small claims court" on first attempt depending on window of service and county. "Regular Service" after 4 attempts, [after 3 attempts in California])*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldSubServeToCompanion: true}}}})}
                            id={`shouldSubServeY${serveeKey}${serviceDetailKey}`} name={`shouldSubServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldSubServeToCompanion===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldSubServeToCompanion: false}}}})}
                            id={`shouldSubServeN${serveeKey}${serviceDetailKey}`} name={`shouldSubServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldSubServeToCompanion===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-stake-out-service">
                        <Form.Label>Is a "Drop Serve/Force Serve" allowed? (Only once Residency/Employment is confirmed. Under the circumstances that the authorized individual refuses to accept documents upon contact/sub-service)*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldDropServe: true}}}})}
                            id={`shouldDropServeY${serveeKey}${serviceDetailKey}`} name={`shouldDropServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldDropServe===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldDropServe: false}}}})}
                            id={`shouldDropServeN${serveeKey}${serviceDetailKey}`} name={`shouldDropServe${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldDropServe===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-stake-out-service">
                        <Form.Label>May the Process Server leave a door tag on the handle, or business card with their title and contact information?*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldLeaveDoorTag: true}}}})}
                            id={`shouldLeaveDoorTagY${serveeKey}${serviceDetailKey}`} name={`shouldLeaveDoorTag${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldLeaveDoorTag===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldLeaveDoorTag: false}}}})}
                            id={`shouldLeaveDoorTagN${serveeKey}${serviceDetailKey}`} name={`shouldLeaveDoorTag${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldLeaveDoorTag===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group id="require-stake-out-service">
                        <Form.Label>May our Process Server post documents with a rubber band on the door handle, once due diligence has been met? Verify with Judge if permissible (varies by case)*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldPostDocsWithBand: true}}}})}
                            id={`shouldPostDocsWithBandY${serveeKey}${serviceDetailKey}`} name={`shouldPostDocsWithBand${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldPostDocsWithBand===true}
                          />
                          <Form.Check
                            className="ml-4" type="radio" label="No" disabled={isFormDisabled}
                            onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, shouldPostDocsWithBand: false}}}})}
                            id={`shouldPostDocsWithBandN${serveeKey}${serviceDetailKey}`} name={`shouldPostDocsWithBand${serveeKey}${serviceDetailKey}`} checked={serviceDetail.shouldPostDocsWithBand===false}
                          />
                        </div>
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12" id="agent-of-service">
                      <Form.Group id="agent-of-service">
                        <Form.Label>Is There an Agent of Service?*</Form.Label><br />
                        <div style={{display: "flex"}}>
                          <Form.Check
                            disabled={isFormDisabled} className="ml-2"
                            type="radio" onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, isThereAnAgentOfService: true}}}})}
                            id={`agentOfServiceY${serveeKey}${serviceDetailKey}`} name={`agentOfService${serveeKey}${serviceDetailKey}`}
                            checked={serviceDetail.isThereAnAgentOfService===true} label="Yes"
                          />
                          <Form.Check
                            disabled={isFormDisabled} className="ml-4"
                            type="radio" onClick={()=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, isThereAnAgentOfService: false}}}})}
                            id={`agentOfServiceN${serveeKey}${serviceDetailKey}`} name={`agentOfService${serveeKey}${serviceDetailKey}`}
                            checked={serviceDetail.isThereAnAgentOfService===false} label="No"
                          />
                        </div>
                        <br/>
                      </Form.Group>
                    </MDBCol>
                    {
                      serviceDetail.isThereAnAgentOfService
                        &&
                          <>
                            <MDBCol md="12" id="if-yes-list-full-name">
                              <Form.Label>Full Name to Agent of Service</Form.Label><br/>
                              {
                                Object.entries(serviceDetail.agentsOfService).map(([agentKey, agent])=>(
                                  <>
                                    {
                                      Object.keys(serviceDetail.agentsOfService).length>1
                                        &&
                                          <label>Agent of Service {parseInt(agentKey)+1}</label>
                                    }
                                    <MDBRow md="12">
                                      <MDBCol md="4">
                                        <Form.Group>
                                          <Form.Label>First Name</Form.Label>
                                          <Form.Control
                                            type="text"
                                            disabled={isFormDisabled}
                                            value={agent.firstName}
                                            onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, agentsOfService: {...serviceDetail.agentsOfService, [agentKey]: {...agent, firstName: e.target.value}}}}}})}
                                          />
                                        </Form.Group>
                                      </MDBCol>
                                      <MDBCol md="4">
                                        <Form.Group>
                                          <Form.Label>Middle Name</Form.Label>
                                          <Form.Control
                                            type="text"
                                            disabled={isFormDisabled}
                                            value={agent.middleName}
                                            onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, agentsOfService: {...serviceDetail.agentsOfService, [agentKey]: {...agent, middleName: e.target.value}}}}}})}
                                          />
                                        </Form.Group>
                                      </MDBCol>
                                      <MDBCol md="4">
                                        <Form.Group>
                                          <Form.Label>Last Name</Form.Label>
                                          <Form.Control
                                            type="text"
                                            disabled={isFormDisabled}
                                            value={agent.lastName}
                                            onChange={(e)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, agentsOfService: {...serviceDetail.agentsOfService, [agentKey]: {...agent, lastName: e.target.value}}}}}})}
                                          />
                                        </Form.Group>
                                      </MDBCol>
                                    </MDBRow>
                                  </>
                                ))
                              }
                            </MDBCol>
                            <br></br>
                            {
                              !isFormDisabled
                                &&
                                  <MDBCol>
                                    <QuestionaireAgentOfService
                                      setAgentFullName={(fullName)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [serviceDetailKey]: {...serviceDetail, agentsOfService: {...serviceDetail.agentsOfService, [Object.keys(serviceDetail.agentsOfService).length]: fullName}}}}})}
                                    />
                                  </MDBCol>
                            }
                            <br></br>
                          </>
                    }
                    {
                      (Object.keys(servee.serviceDetails).length>1 && (Number(serviceDetailKey)!==Object.keys(servee.serviceDetails).length-1)) && <hr/>
                    }
                  </MDBCol>
                  {
                    (!isFormDisabled && Number(serviceDetailKey)===(Object.keys(servee.serviceDetails).length-1))
                      &&
                        <MDBCol>
                          <QuestionaireAddressTemplate
                            setServiceDetails={(newServiceDetails)=>setServeesDetail({...serveesDetail, [serveeKey]: {...servee, serviceDetails: {...servee.serviceDetails, [Object.keys(servee.serviceDetails).length]: newServiceDetails}}})}
                          />
                        </MDBCol>
                  }
                  <br/>
                </>
              ))
            }
            {
              (Object.keys(serveesDetail).length>1 && (Number(serveeKey)!==Object.keys(serveesDetail).length-1)) && <hr/>
            }
          </>
        ))
      }
    </>
  );
}

export default Questionaire4;