import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";


function QuestionaireEmploymentAddressTemplate() {
    const [showModal, setShow] = useState(false);
    const [addressForCurrentPlaceOfEmployment, setAddressForCurrentPlaceOfEmployment] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

      let data = {
        addressForCurrentPlaceOfEmployment
      }

      localStorage.setItem('questionaireEmploymentAddressTemplate', JSON.stringify(data))

      // .then(() => {
      //     alert("Employment Address has been added!");
      //   })
      //   .catch((error) => {
      //     alert(error.message);
      //   });
  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

    <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
          + Add Additional Current Address Of Employment
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Address for Current Plae of Employment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBCol md="12" id="address-for-current-place-of-employment">
                <div id="address-for-current-place-of-employment">
                <label>Adding Address for Current Place of Employment</label>
                <MDBInput
                type="text" 
                value={addressForCurrentPlaceOfEmployment}
                onChange={(e) => setAddressForCurrentPlaceOfEmployment(e.target.value)}
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
  
  export default QuestionaireEmploymentAddressTemplate;