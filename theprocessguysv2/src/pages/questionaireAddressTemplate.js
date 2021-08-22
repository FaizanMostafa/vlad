import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAddressTemplate() {
    const [showModal, setShow] = useState(false);
    const [mainAddressForService, setMainAddressForService] = useState({street: "", city: "", state: "", zipCode: "", country: ""});

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            mainAddressForService
        }
        
        localStorage.setItem('questionaireAddressTemplate', JSON.stringify(data));
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
          + Add Additional Address for Service
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
                      hint="Street"
                      value={mainAddressForService.street}
                      onChange={(e) => setMainAddressForService({...mainAddressForService, street: e.target.value})}
                      required
                    />
                    <MDBInput
                      type="text"
                      hint="City"
                      value={mainAddressForService.city}
                      onChange={(e) => setMainAddressForService({...mainAddressForService, city: e.target.value})}
                      required
                    />
                    <MDBInput
                      type="text"
                      hint="State"
                      value={mainAddressForService.state}
                      onChange={(e) => setMainAddressForService({...mainAddressForService, state: e.target.value})}
                      required
                    />
                    <MDBInput
                      type="text"
                      hint="Zip Code"
                      value={mainAddressForService.zipCode}
                      onChange={(e) => setMainAddressForService({...mainAddressForService, zipCode: e.target.value})}
                      required
                    />
                    <MDBInput
                      type="text"
                      hint="Country"
                      value={mainAddressForService.country}
                      onChange={(e) => setMainAddressForService({...mainAddressForService, country: e.target.value})}
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