import { Fragment, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { showToast } from "../utils";

function QuestionaireAddressTemplate({setServiceDetails}) {
  const [showModal, setShow] = useState(false);
  const [localServiceDetails, setLocalServiceDetails] = useState({locationType: "", address: {street: "", city: "", state: "", zipCode: "", country: ""}, typeOfServe: "", requireFirst24HourService: "", requireRushService: "", requireStakeOutService: "", ceaseDate: "", shouldSubServeToCompanian: "", shouldDropServe: "", shouldLeaveDoorTag: "", shouldPostDocsWithBand: "", isThereAnAgentOfService: "", agentsOfService: {0: {firstName: "", middleName: "", lastName: ""}}});

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!localServiceDetails.locationType.length) {
      showToast("Please service location type!", "warning");
    } else if(!localServiceDetails.address.street.length) {
      showToast("Please enter street address!", "warning");
    } else if(!localServiceDetails.address.city.length) {
      showToast("Please enter city address!", "warning");
    } else if(!localServiceDetails.address.state.length) {
      showToast("Please enter state address!", "warning");
    } else if(!localServiceDetails.address.zipCode.length) {
      showToast("Please enter zip code!", "warning");
    } else if(!localServiceDetails.address.country.length) {
      showToast("Please enter country address!", "warning");
    } else if(!localServiceDetails.typeOfServe.length) {
      showToast("Please select the type of serve for the service address!", "warning");
    } else if(typeof(localServiceDetails.requireFirst24HourService)!=="boolean") {
      showToast("Please select if a service attempt should be made within the first 24 hours for the service address!", "warning");
    } else if(typeof(localServiceDetails.requireRushService)!=="boolean") {
      showToast("For the service address, please select if you require a rush service!", "warning");
    } else if(typeof(localServiceDetails.requireStakeOutService)!=="boolean") {
      showToast("For the service address, please select if you require a stake out service!", "warning");
    } else if(!localServiceDetails.ceaseDate.length) {
      showToast("For the service address, please provide a date when service attempts should cease!", "warning");
    } else if(typeof(localServiceDetails.shouldSubServeToCompanian)!=="boolean") {
      showToast("For the service address, please select if subservice is allowed!", "warning");
    } else if(typeof(localServiceDetails.shouldDropServe)!=="boolean") {
      showToast("For the service address, please select if drop/force serve is allowed!", "warning");
    } else if(typeof(localServiceDetails.shouldLeaveDoorTag)!=="boolean") {
      showToast("For the service address, please select if process server should leave a door tag!", "warning");
    } else if(typeof(localServiceDetails.shouldPostDocsWithBand)!=="boolean") {
      showToast("For the service address, please select if process server should post documents with a rubber band!", "warning");
    } else if(typeof(localServiceDetails.isThereAnAgentOfService)!=="boolean") {
      showToast("Please select if there is an agent of service!", "warning");
    } else if(localServiceDetails.isThereAnAgentOfService && !localServiceDetails.agentsOfService[0].firstName.length) {
      showToast("Please enter the first name of agent of service!", "warning");
    } else if(localServiceDetails.isThereAnAgentOfService && !localServiceDetails.agentsOfService[0].lastName.length) {
      showToast("Please enter the last name of agent of service!", "warning");
    } else {
      setServiceDetails(localServiceDetails);
      setLocalServiceDetails({locationType: "", address: {street: "", city: "", state: "", zipCode: "", country: ""}, typeOfServe: "", requireFirst24HourService: "", requireRushService: "", requireStakeOutService: "", ceaseDate: "", shouldSubServeToCompanian: "", shouldDropServe: "", shouldLeaveDoorTag: "", shouldPostDocsWithBand: "", isThereAnAgentOfService: "", agentsOfService: {0: {firstName: "", middleName: "", lastName: ""}}});
      setShow(false);
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div
        className="d-flex align-items-center justify-content-center"
      //   style={{ height: "100vh" }}
      >
        <Button variant="primary w-50" onClick={handleShow}>
        + Add Additional Address for Service
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Address for Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id="location-being-served">
            <Form.Label style={{paddingLeft: 16}}>What kind of location is being served?*</Form.Label>
            <Form.Control
              as="select"
              className="text-center p-2"
              style={{marginLeft: 16, width: "95%"}}
              value={localServiceDetails.locationType}
              onChange={(e)=>setLocalServiceDetails({...localServiceDetails, locationType: e.target.value})}
            >
              <option value="" >Please Select</option>
              <option value="residence" >Residence</option>
              <option value="business">Business</option>
              <option value="unknown">Unknown</option>
            </Form.Control>
          </Form.Group>
          <MDBCol md="12" id="main-address-for-service">
            <div id="main-address-for-service">
              <label>Adding Address for Service</label>
              <MDBInput
                type="text"
                hint="Street"
                value={localServiceDetails.address.street}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, address: {...localServiceDetails.address, street: e.target.value}})}
                required
              />
              <MDBInput
                type="text"
                hint="City"
                value={localServiceDetails.address.city}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, address: {...localServiceDetails.address, city: e.target.value}})}
                required
              />
              <MDBInput
                type="text"
                hint="State"
                value={localServiceDetails.address.state}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, address: {...localServiceDetails.address, state: e.target.value}})}
                required
              />
              <MDBInput
                type="text"
                hint="Zip Code"
                value={localServiceDetails.address.zipCode}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, address: {...localServiceDetails.address, zipCode: e.target.value}})}
                required
              />
              <MDBInput
                type="text"
                hint="Country"
                value={localServiceDetails.address.country}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, address: {...localServiceDetails.address, country: e.target.value}})}
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-first-24-hour-service">
              <Form.Label>Is this a "normal serve" or a "personal serve"?*</Form.Label>
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Personal"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, typeOfServe: "personal"})} id="typeOfServeMP"
                  name="typeOfServeM" checked={localServiceDetails.typeOfServe==="personal"}
                />
                <Form.Check
                  className="ml-4" type="radio" label="Normal"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, typeOfServe: "normal"})} id="typeOfServeMN"
                  name="typeOfServeM" checked={localServiceDetails.typeOfServe==="normal"}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-first-24-hour-service">
              <Form.Label>Do you require a Service attempt within the first 24 hours of submission?*<i>(Additional Fee)</i></Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireFirst24HourService: true})}id="requireFirst24HourServiceMY"
                  name="requireFirst24HourServiceM" checked={localServiceDetails.requireFirst24HourService===true}
                />
                <Form.Check className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireFirst24HourService: false})} id="requireFirst24HourServiceMN"
                  name="requireFirst24HourServiceM" checked={localServiceDetails.requireFirst24HourService===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-rush-service">
              <Form.Label>Do You Require a Rush Service?* This is regarding service that needs to be served with 13 days or less <i>(Additional Fee)</i></Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireRushService: true})} id="requireRushServiceMY"
                  name="requireRushServiceM" checked={localServiceDetails.requireRushService===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireRushService: false})} id="requireRushServiceMN"
                  name="requireRushServiceM" checked={localServiceDetails.requireRushService===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>Do You Require a Stake Out Service? <i>(Additional Fee)</i>*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireStakeOutService: true})} id="requireStakeOutServiceMY"
                  name="requireStakeOutServiceM" checked={localServiceDetails.requireStakeOutService===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, requireStakeOutService: false})} id="requireStakeOutServiceMN"
                  name="requireStakeOutServiceM" checked={localServiceDetails.requireStakeOutService===false}
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
                value={localServiceDetails.ceaseDate}
                onChange={(e)=>setLocalServiceDetails({...localServiceDetails, ceaseDate: e.target.value})}
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>Is a "Subservice" to a Co-Resident/Co-Worker after due diligence allowed? ("Small claims court" on first attempt depending on window of service and county. "Regular Service" after 4 attempts, [after 3 attempts in California])*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldSubServeToCompanian: true})} id="shouldSubServeMY"
                  name="shouldSubServeM" checked={localServiceDetails.shouldSubServeToCompanian===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldSubServeToCompanian: false})} id="shouldSubServeMN"
                  name="shouldSubServeM" checked={localServiceDetails.shouldSubServeToCompanian===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>Is a "Drop Serve/Force Serve" allowed? (Only once Residency/Employment is confirmed. Under the circumstances that the authorized individual refuses to accept documents upon contact/sub-service)*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldDropServe: true})} id="shouldDropServeMY"
                  name="shouldDropServeM" checked={localServiceDetails.shouldDropServe===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldDropServe: false})} id="shouldDropServeMN"
                  name="shouldDropServeM" checked={localServiceDetails.shouldDropServe===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>May the Process Server leave a door tag on the handle, or business card with their title and contact information?*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldLeaveDoorTag: true})} id="shouldLeaveDoorTagMY"
                  name="shouldLeaveDoorTagM" checked={localServiceDetails.shouldLeaveDoorTag===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldLeaveDoorTag: false})} id="shouldLeaveDoorTagMN"
                  name="shouldLeaveDoorTagM" checked={localServiceDetails.shouldLeaveDoorTag===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>May our Process Server post documents with a rubber band on the door handle, once due diligence has been met? Verify with Judge if permissible (varies by case)*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2" type="radio" label="Yes"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldPostDocsWithBand: true})} id="shouldPostDocsWithBandMY"
                  name="shouldPostDocsWithBandM" checked={localServiceDetails.shouldPostDocsWithBand===true}
                />
                <Form.Check
                  className="ml-4" type="radio" label="No"
                  onClick={()=>setLocalServiceDetails({...localServiceDetails, shouldPostDocsWithBand: false})} id="shouldPostDocsWithBandMN"
                  name="shouldPostDocsWithBandM" checked={localServiceDetails.shouldPostDocsWithBand===false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12" id="agent-of-service">
            <Form.Group id="agent-of-service">
              <Form.Label>Is There an Agent of Service?*</Form.Label><br />
              <div style={{display: "flex"}}>
                <Form.Check
                  className="ml-2"
                  type="radio" onClick={()=>setLocalServiceDetails({...localServiceDetails, isThereAnAgentOfService: true})}
                  id={"agentOfServiceY"} name={"agentOfService"}
                  checked={localServiceDetails.isThereAnAgentOfService===true} label="Yes"
                />
                <Form.Check
                  className="ml-4"
                  type="radio" onClick={()=>setLocalServiceDetails({...localServiceDetails, isThereAnAgentOfService: false})}
                  id={"agentOfServiceN"} name={"agentOfService"}
                  checked={localServiceDetails.isThereAnAgentOfService===false} label="No"
                />
              </div>
              <br/>
            </Form.Group>
          </MDBCol>
          {
            localServiceDetails.isThereAnAgentOfService
              &&
                <>
                  <MDBCol md="12" id="if-yes-list-full-name">
                    <Form.Label>Full Name to Agent of Service</Form.Label><br/>
                    <MDBCol md="12">
                      <Form.Group>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={localServiceDetails.agentsOfService[0].firstName}
                          onChange={(e)=>setLocalServiceDetails({...localServiceDetails, agentsOfService: {0: {...localServiceDetails.agentsOfService[0], firstName: e.target.value}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group>
                        <Form.Label>Middle Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={localServiceDetails.agentsOfService.middleName}
                          onChange={(e)=>setLocalServiceDetails({...localServiceDetails, agentsOfService: {0: {...localServiceDetails.agentsOfService[0], middleName: e.target.value}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                      <Form.Group>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          value={localServiceDetails.agentsOfService.lastName}
                          onChange={(e)=>setLocalServiceDetails({...localServiceDetails, agentsOfService: {0: {...localServiceDetails.agentsOfService[0], lastName: e.target.value}}})}
                        />
                      </Form.Group>
                    </MDBCol>
                  </MDBCol>
                  <br></br>
                </>
          }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}
  
export default QuestionaireAddressTemplate;