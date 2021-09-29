import { MDBCol, MDBRow, MDBInput } from "mdbreact";
import QuestionaireAddressTemplate from "../../pages/questionaireAddressTemplate";
import QuestionaireAgentOfService from "../../pages/questionaireAgentOfServiceTemplate";

const Questionaire4 = (props) => {
  const {
    numberOfCaseFilesBeingServed,
    setNumberOfCaseFilesBeingServed,
    howManyIndividualsServed,
    setHowManyIndividualsServed,
    serveesDetail,
    setServeesDetail,
    locationForBeingServed,
    setLocationForBeingServed,
    mainAddressForService,
    setMainAddressForService,
    agentOfService,
    setAgentOfService,
    ifYesListFullName,
    setIfYesListFullName
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

  const handleOnChangePhoneNumber = (key, phoneKey, phoneNumber) => {
    if(/^\s*\d{3}\s*$/.test(phoneNumber)) {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: `(${phoneNumber}) `}}}});
    } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(phoneNumber)) {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: `${phoneNumber}-`}}}});
    } else {
      setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber}}}});
    }
  }

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Servee Documented Data</h2>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-case-files">
        <div id="number-of-case-files">
          <label>How many case files are being served? (Only if multiple cases are being involved for service to the same SERVEE)*</label>
          <select className="w-75 m-4 text-center p-2"
            value={numberOfCaseFilesBeingServed}
            onChange={handleNoOfCaseFilesChanged}
            required
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
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="how-many-individuals-served">
        <div id="how-many-individuals-served">
          <label>How many servees are being served? (Only if multiple servees are receiving the same case file)*</label><br></br>
          <select className="w-75 m-4 text-center p-2"
            value={howManyIndividualsServed}
            onChange={handleNoOfServeesChanged}
            required
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
          </select><br></br>
        </div>
      </MDBCol>
      {
        Object.entries(serveesDetail).map(([key, servee])=>(
          <>
            <MDBCol md="12" id="name-of-individuals">
              <div id="name-of-individuals">
                <label>Full Name or Title of who is Receiving Service*</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  value={servee.fullName}
                  onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], fullName: e.target.value}})}
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
                  value={servee.dob}
                  onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], dob: e.target.value}})}
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12" id="phone-numbers-of-individuals">
              <label>Phone Number(s) Pertaining to Servee</label>
              {
                Object.entries(servee.phoneNumbers).map(([phoneKey, phoneObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <MDBInput
                        hint="(###) ###-####"
                        className="text-white"
                        value={phoneObj.phoneNumber}
                        onChange={(e)=>handleOnChangePhoneNumber(key, phoneKey, e.target.value)}
                        // onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], phoneNumber: e.target.value}}}})}
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <label>What kind of phone number is this?</label>
                      <select className="w-75 m-4 text-center p-2"
                        value={phoneObj.type}
                        onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [phoneKey]: {...serveesDetail[key].phoneNumbers[phoneKey], type: e.target.value}}}})}
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
                  onClick={()=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], phoneNumbers: {...serveesDetail[key].phoneNumbers, [Object.keys(serveesDetail[key].phoneNumbers).length]: {phoneNumber: "", type: ""}}}})}
                >
                  + Add another phone number
                </button>
              </div>
            </MDBCol>
            <MDBCol md="12" id="email-of-individuals">
              <div id="email-of-individuals">
                <label>E-Mail(s) pertaining Servee(s) (you may list multiple , each email separated with whitespace)</label>
                <MDBInput
                  type="textarea"
                  className="text-white"
                  value={servee.email}
                  onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], email: e.target.value}})}
                />
              </div>
            </MDBCol>
            <br />
            <MDBCol md="12" id="known-coresidents-of-servee">
              <label>Any Known Co-Resident(s)?</label>
              {
                Object.entries(servee.coResidents).map(([residentKey, residentObj])=>(
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <MDBInput
                        hint="Co-Resident"
                        className="text-white"
                        value={residentObj.name}
                        onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [residentKey]: {...serveesDetail[key].coResidents[residentKey], name: e.target.value}}}})}
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <label>Relationship to resident?</label>
                      <select className="w-75 m-4 text-center p-2"
                        value={residentObj.relation}
                        onChange={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [residentKey]: {...serveesDetail[key].coResidents[residentKey], relation: e.target.value}}}})}
                        required
                      >
                        <label caret color="white">
                          Please Select
                        </label>
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
                      </select>
                    </MDBCol>
                  </MDBRow>
                ))
              }
              <div style={{display: "flex", justifyContent: "flex-end"}}>
                <button
                  className="btn btn-primary"
                  onClick={()=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], coResidents: {...serveesDetail[key].coResidents, [Object.keys(serveesDetail[key].coResidents).length]: {name: "", relation: ""}}}})}
                >
                  + Add another co-resident
                </button>
              </div>
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
              <div id={`employment-of-individuals${key}`}>
                <label>Is the Servee Currently Employed?*</label><br />
                <input
                  className="ml-2" type="radio"
                  onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "yes"}})}
                  id={`employmentOfIndividualsY${key}`}
                  name={`employmentOfIndividuals${key}`}
                  checked={servee.isEmployed==="yes"?true:false}
                /><label className="ml-2" for={`employmentOfIndividualsY${key}`}>Yes</label>
                <input
                  className="ml-4" type="radio"
                  onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "no"}})}
                  id={`employmentOfIndividualsN${key}`}
                  name={`employmentOfIndividuals${key}`}
                  checked={servee.isEmployed==="no"?true:false}
                /><label className="ml-2" for={`employmentOfIndividualsN${key}`}>No</label>
                <input
                  className="ml-4" type="radio"
                  onClick={(e)=>setServeesDetail({...serveesDetail, [key]: {...serveesDetail[key], isEmployed: "unknown"}})}
                  id={`employmentOfIndividualsU${key}`}
                  name={`employmentOfIndividuals${key}`}
                  checked={servee.isEmployed==="unknown"?true:false}
                /><label className="ml-2" for={`employmentOfIndividualsU${key}`}>Unknown</label>
                <br/>
              </div>
            </MDBCol>
          </>
        ))
      }
      <br></br>
      <MDBCol md="12" id="location-being-served">
        <div id="location-being-served">
          <label>What kind of location is being served?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={locationForBeingServed}
            onChange={(e) => setLocationForBeingServed(e.target.value)}
            required
          >
            <label caret color="white">
              Please Select
            </label>
            <option value="" >Please Select</option>
            <option value="residence" >Residence</option>
            <option value="business">Business</option>
            <option value="unknown">Unknown</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="main-address-for-service">
        <div id="main-address-for-service">
          <label>Main Address for Service(Write N/A if unavailable)*</label>
          <MDBInput
            type="text"
            hint="Street"
            className="text-white"
            value={mainAddressForService.street}
            onChange={(e) => setMainAddressForService({...mainAddressForService, street: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            value={mainAddressForService.city}
            onChange={(e) => setMainAddressForService({...mainAddressForService, city: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="State"
            className="text-white"
            value={mainAddressForService.state}
            onChange={(e) => setMainAddressForService({...mainAddressForService, state: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            value={mainAddressForService.zipCode}
            onChange={(e) => setMainAddressForService({...mainAddressForService, zipCode: e.target.value})}
            required
          />
          <MDBInput
            type="text"
            hint="Country"
            className="text-white"
            value={mainAddressForService.country}
            onChange={(e) => setMainAddressForService({...mainAddressForService, country: e.target.value})}
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
          <input className="ml-2" type="radio" onClick={()=>setAgentOfService(true)} id="agentOfServiceY" name="agentOfService" checked={agentOfService===true} /><label className="ml-2" for="agentOfServiceY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setAgentOfService(false)} id="agentOfServiceN" name="agentOfService" checked={agentOfService===false} /><label className="ml-2" for="agentOfServiceN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="if-yes-list-full-name">
        <div id="if-yes-list-full-name">
          <label>If yes, List the Full Name to Agent of Service</label>
          <MDBInput
            type="text"
            hint="First Name"
            className="text-white"
            value={ifYesListFullName.firstName}
            onChange={(e) => setIfYesListFullName({...ifYesListFullName, firstName: e.target.value})}
          />
          <MDBInput
            type="text"
            hint="Last Name"
            className="text-white"
            value={ifYesListFullName.lastName}
            onChange={(e) => setIfYesListFullName({...ifYesListFullName, lastName: e.target.value})}
          />
        </div>
      </MDBCol>
      <br></br>
      <MDBCol>
        <QuestionaireAgentOfService />
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire4;