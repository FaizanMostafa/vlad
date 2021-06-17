import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import db from "../firebase/index";

function QuestionaireAdditionalVehicleTemplate() {

    const [showModal, setShow] = useState(false);
    const [insuranceCompanyOfServee, setInsuranceCompanyOfServee] = useState("");
    const [liscencePlateNumberState, setLiscencePlateNumberState] = useState("");
    const [vinNumberOfindividuals, setVinNumberOfIndividuals] = useState("");
    const [yearOfMakeOnVehicle, setYearOfMakeOnVehicle] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleTypeModelOwnership, setVehicleTypeModelOwnership] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

      db.collection("questionaire").doc("add-vehicle").collection("adding-vehicle")
      .add({
        insuranceCompanyOfServee: insuranceCompanyOfServee,
        vehicleTypeModelOwnership: vehicleTypeModelOwnership,
        liscencePlateNumberState: liscencePlateNumberState,
        vinNumberOfindividuals: vinNumberOfindividuals,
        yearOfMakeOnVehicle: yearOfMakeOnVehicle,
        vehicleColor: vehicleColor
      })        
      .then(() => {
          alert("Vehicle has been added!");
        })
        .catch((error) => {
          alert(error.message);
        });
        setInsuranceCompanyOfServee("");
        setLiscencePlateNumberState("");
        setVinNumberOfIndividuals("");
        setYearOfMakeOnVehicle("");
        setVehicleColor("");
        setVehicleTypeModelOwnership("");

  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

    <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
          + Additonal Vehicle(s)
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Adding Vehicle</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBCol md="12" id="insurance-company-of-servee">
                <div id="insurance-company-of-servee">
                <label>Insurance Company of Servee</label>
                <MDBInput
                type="text" 
                value={insuranceCompanyOfServee}
                onChange={(e) => setInsuranceCompanyOfServee(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-type-model-ownership">
                <div id="vehicle-type-model-ownership">
                <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
                <MDBInput 
                type="textarea" 
                value={vehicleTypeModelOwnership}
                onChange={(e) => setVehicleTypeModelOwnership(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="liscence-plate-number-state">
                <div id="liscence-plate-number-state">
                <label>Liscense Plate Number/State of Individual(s)</label>
                <MDBInput
                type="text" 
                value={liscencePlateNumberState}
                onChange={(e) => setLiscencePlateNumberState(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vin-number-of-individuals">
                <div id="vin-number-of-individuals">
                <label>Vehicle Vin Number of Individual(s)</label>
                <MDBInput 
                type="text" 
                value={vinNumberOfindividuals}
                onChange={(e) => setVinNumberOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-year-of-individuals">
                <div id="vehicle-year-of-individuals">
                <label>Year of Make on Vehicle</label>
                <MDBInput
                type="text" 
                value={yearOfMakeOnVehicle}
                onChange={(e) => setYearOfMakeOnVehicle(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-color-of-individuals">
                <div id="vehicle-color-of-individuals">
                <label>Vehicle Color</label>
                <MDBInput 
                type="text"
                value={vehicleColor} 
                onChange={(e) => setVehicleColor(e.target.value)}
                />
                </div>
            </MDBCol>
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
    </React.Fragment>
    );
  }
  
  export default QuestionaireAdditionalVehicleTemplate;