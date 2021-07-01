import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAgentOfServiceTemplate() {
    const [showModal, setShow] = useState(false);
    const [ifYesListFullName, setIfYesListFullName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            ifYesListFullName
        }
        
        localStorage.setItem('questionaireAgentOfServiceTemplate', JSON.stringify(data))

        // .then(() => {
        //     alert("Agent Of Service has been added!");
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
          + Add Agent Of Service Service
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Name(s) of Agent Of Service</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBCol md="12" id="if-yes-list-full-name">
                <div id="if-yes-list-full-name">
                <label>Adding Name of Agent Of Service</label>
                <MDBInput
                type="text" 
                value={ifYesListFullName}
                onChange={(e) => setIfYesListFullName(e.target.value)}
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
  
  export default QuestionaireAgentOfServiceTemplate;