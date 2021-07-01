import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAddressTemplate() {
    const [showModal, setShow] = useState(false);
    const [mainAddressForService, setMainAddressForService] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            mainAddressForService
        }
        
        localStorage.setItem('questionaireAddressTemplate', JSON.stringify(data))

        // .then(() => {
        //     alert("Address has been added!");
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
        //   style={{ height: "100vh" }}
        >
          <Button variant="primary w-50" onClick={handleShow}>
          + Add Main Address for Service
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Address for Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBCol md="12" id="main-address-for-service">
                <div id="main-address-for-service">
                    <label>Adding Address for Service</label>
                    <MDBInput
                    type="text" 
                    value={mainAddressForService}
                    onChange={(e) => setMainAddressForService(e.target.value)}
                    required
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
  
  export default QuestionaireAddressTemplate;