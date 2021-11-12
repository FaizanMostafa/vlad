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
    setServeesDetail,
    locationForBeingServed,
    setLocationForBeingServed,
    mainAddressesForService,
    setMainAddressesForService,
    agentOfService,
    setAgentOfService,
    agentsFullNames,
    setAgentsFullNames
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
        Object.entries(serveesDetail).map(([key, servee])=>(
          <>
            <MDBRow md="12">
              <MDBCol md="6" id="name-of-individuals">
                <Form.Group id="name-of-individuals">
                  <Form.Label>Full Name or Title of who is Receiving Service*</Form.Label>
                  <Form.Control
                    type="text"
                    value={servee.fullName}
                    disabled={isFormDisabled}
                    onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], fullName: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6" id="dob-of-individuals">
                <Form.Group id="dob-of-individuals">
                  <Form.Label>Date of Birth of Servee (Write N/A if unavailable)*</Form.Label>
                  <Form.Control
                    type="text"
                    value={servee.dob}
                    disabled={isFormDisabled}
                    onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], dob: e.target.value}})}
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
                          onChange={(e)=>handleOnChangePhoneNumber(key, phoneKey, e.target.value)}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="6">
                      <Form.Group>
                        <Form.Label>What kind of phone number is this?</Form.Label>
                        <Form.Control
                          as="select"
                          value={phoneObj.type}
                          disabled={isFormDisabled}
                          className="w-75 m-4 text-center p-2"
                          onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], type: e.target.value}}}})}
                        >
                          <option value="">Please Select</option>
                          <option value="home">Home</option>
                          <option value="office">Office</option>
                          <option value="mobile">Mobile</option>
                          <option value="unknown">Unknown</option>
                        </Form.Control>
                      </Form.Group>
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
                        onClick={()=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [Object.keys(serveesDetail[key].phoneNumbers).length]: {phoneNumber: "", type: ""}}}})}
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
                  onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], email: e.target.value}})}
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
                          onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [residentKey]: {...serveesDetail[key].coResidents[residentKey], name: e.target.value}}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="6">
                      <Form.Group>
                        <Form.Label>Relationship to resident?</Form.Label>
                        <Form.Control
                          as="select"
                          disabled={isFormDisabled}
                          value={residentObj.relation}
                          className="w-75 m-4 text-center p-2"
                          onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [residentKey]: {...serveesDetail[key].coResidents[residentKey], relation: e.target.value}}}})}
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
                  </MDBRow>
                ))
              }
              {
                !isFormDisabled
                  &&
                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                      <button
                        className="btn btn-primary"
                        onClick={()=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [Object.keys(serveesDetail[key].coResidents).length]: {name: "", relation: ""}}}})}
                      >
                        + Add another co-resident
                      </button>
                    </div>
              }
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
              <div id={`employment-of-individuals${key}`}>
                <Form.Label>Is the Servee Currently Employed?*</Form.Label><br />
                <div style={{display: "flex"}}>
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-2" type="radio" label="Yes"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "yes"}})}
                    id={`employmentOfIndividualsY${key}`}
                    name={`employmentOfIndividuals${key}`}
                    checked={servee.isEmployed==="yes"?true:false}
                  />
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-4" type="radio" label="No"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "no"}})}
                    id={`employmentOfIndividualsN${key}`}
                    name={`employmentOfIndividuals${key}`}
                    checked={servee.isEmployed==="no"?true:false}
                  />
                  <Form.Check
                    disabled={isFormDisabled}
                    className="ml-4" type="radio" label="Unknown"
                    onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "unknown"}})}
                    id={`employmentOfIndividualsU${key}`}
                    name={`employmentOfIndividuals${key}`}
                    checked={servee.isEmployed==="unknown"?true:false}
                  />
                </div>
                <br/>
              </div>
            </MDBCol>
          </>
        ))
      }
      <br></br>
      <MDBCol md="12" id="location-being-served">
        <Form.Group id="location-being-served">
          <Form.Label>What kind of location is being served?*</Form.Label>
          <Form.Control
            as="select"
            disabled={isFormDisabled}
            className="w-75 m-4 text-center p-2"
            value={locationForBeingServed}
            onChange={(e) => setLocationForBeingServed(e.target.value)}
          >
            <option value="" >Please Select</option>
            <option value="residence" >Residence</option>
            <option value="business">Business</option>
            <option value="unknown">Unknown</option>
          </Form.Control><br></br>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="main-address-for-service">
        <Form.Label style={{fontWeight: "bold"}}>Main Address for Service</Form.Label>
        {
          Object.entries(mainAddressesForService).map(([key, address])=>(
            <MDBCol>
              {
                Object.keys(mainAddressesForService).length>1
                  &&
                    <label>Address {parseInt(key)+1} of Service</label>
              }
              <MDBRow md="12">
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>Street</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={mainAddressesForService[key].street}
                      onChange={(e) => setMainAddressesForService({...mainAddressesForService, [key]: {...address, street: e.target.value}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={mainAddressesForService[key].city}
                      onChange={(e) => setMainAddressesForService({...mainAddressesForService, [key]: {...address, city: e.target.value}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="4">
                  <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={mainAddressesForService[key].state}
                      onChange={(e) => setMainAddressesForService({...mainAddressesForService, [key]: {...address, state: e.target.value}})}
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
                      value={mainAddressesForService[key].zipCode}
                      onChange={(e) => setMainAddressesForService({...mainAddressesForService, [key]: {...address, zipCode: e.target.value}})}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="6">
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={mainAddressesForService[key].country}
                      onChange={(e) => setMainAddressesForService({...mainAddressesForService, [key]: {...address, country: e.target.value}})}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          ))
        }
      </MDBCol>
      {
        !isFormDisabled
          &&
            <MDBCol>
              <QuestionaireAddressTemplate
                mainAddressesForService={mainAddressesForService}
                setMainAddressesForService={setMainAddressesForService}
              />
            </MDBCol>
      }
      <br></br>
      <MDBCol md="12" id="agent-of-service">
        <Form.Group id="agent-of-service">
          <Form.Label>Is There an Agent of Service?*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              disabled={isFormDisabled} className="ml-2"
              type="radio" onClick={()=>setAgentOfService(true)}
              id="agentOfServiceY" name="agentOfService"
              checked={agentOfService===true} label="Yes"
            />
            <Form.Check
              disabled={isFormDisabled} className="ml-4"
              type="radio" onClick={()=>setAgentOfService(false)}
              id="agentOfServiceN" name="agentOfService"
              checked={agentOfService===false} label="No"
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="if-yes-list-full-name">
        <Form.Label>If yes, List the Full Name to Agent of Service</Form.Label>
        {
          Object.entries(agentsFullNames).map(([key, fullName])=>(
            <MDBRow md="12">
              {
                Object.keys(agentsFullNames).length>1
                  &&
                    <label>Agent of Service {parseInt(key)+1}</label>
              }
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={fullName.firstName}
                    onChange={(e) => setAgentsFullNames({...agentsFullNames, [key]: {...fullName, firstName: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={fullName.middleName}
                    onChange={(e) => setAgentsFullNames({...agentsFullNames, [key]: {...fullName, middleName: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={fullName.lastName}
                    onChange={(e) => setAgentsFullNames({...agentsFullNames, [key]: {...fullName, lastName: e.target.value}})}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
          ))
        }
      </MDBCol>
      <br></br>
      {
        !isFormDisabled
          &&
            <MDBCol>
              <QuestionaireAgentOfService
                agentsFullNames={agentsFullNames}
                setAgentsFullNames={setAgentsFullNames}
              />
            </MDBCol>
      }
      <br></br>
    </>
  );
}

export default Questionaire4;