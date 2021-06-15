import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import db from "../firebase";

function QuestionaireAttorneyTemplateD() {
    
    const [showModal, setShow] = useState(false);
    const [defendantAttorneyName, setDefendantAttorneyName] = useState("");
    const [defendantAttorneyBarNumber,setDefendantAttorneyBarNumber] = useState("");
    const [defendantAttorneyOfficeAddress, setDefendantAttorneyOfficeAddress] = useState("");
    const [defendantAttorneyPhoneNumberForCalls, setDefendantAttorneyPhoneNumberForCalls] = useState("");
    const [defendantAttorneyEmail, setDefendantAttorneyEmail] = useState("");
    const [defendantAttorneyFaxNumberOptional,setDefendantAttorneyFaxNumberOptional] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

      db.collection("questionaire").doc("add-attorney-d").collection("adding-attorney-d")
      .add({
        defendantAttorneyName: defendantAttorneyName,
        defendantAttorneyOfficeAddress: defendantAttorneyOfficeAddress,
        defendantAttorneyBarNumber: defendantAttorneyBarNumber,
        defendantAttorneyEmail: defendantAttorneyEmail,
        defendantAttorneyPhoneNumberForCalls:defendantAttorneyPhoneNumberForCalls,
        defendantAttorneyFaxNumberOptional: defendantAttorneyFaxNumberOptional
      })        
      .then(() => {
          alert("Defendant Attorney has been added!");
        })
        .catch((error) => {
          alert(error.message);
        });
        
        setDefendantAttorneyName("");
        setDefendantAttorneyBarNumber("");
        setDefendantAttorneyOfficeAddress("");
        setDefendantAttorneyPhoneNumberForCalls("");
        setDefendantAttorneyEmail("");
        setDefendantAttorneyFaxNumberOptional("");
  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

    <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
          + Attorney(s) Representing Defendant
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Attorney for Defendant</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBCol md="12" id="defendant-attorney-name">
                <div id="defendant-attorney-name">
                <label>Enter Attorney Full Name*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyName}
                onChange={(e) => setDefendantAttorneyName(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-bar-number">
                <div id="defendant-attorney-bar-number">
                <label>Bar Number*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyBarNumber}
                onChange={(e) => setDefendantAttorneyBarNumber(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-phone-number-for-calls">
                <div id="defendant-attorney-phone-number-for-calls">
                <label>Phone Number for Calls (you may list multiple)</label>
                <MDBInput
                type="textarea"
                value={defendantAttorneyPhoneNumberForCalls}
                onChange={(e) => setDefendantAttorneyPhoneNumberForCalls(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-office-address">
                <div id="defendant-attorney-office-address">
                <label>Office Address*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyOfficeAddress}
                onChange={(e) => setDefendantAttorneyOfficeAddress(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-email">
                <div id="defendant-attorney-email">
                <label>Attorney E-Mail*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyEmail}
                onChange={(e) => setDefendantAttorneyEmail(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-fax-number-optional">
                <div id="defendant-attorney-fax-number-optional">
                <label>Fax Number (Optional)</label>
                <MDBInput
                type="text"
                value={defendantAttorneyFaxNumberOptional}
                onChange={(e) => setDefendantAttorneyFaxNumberOptional(e.target.value)}
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
  
  export default QuestionaireAttorneyTemplateD;