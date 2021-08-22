import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAttorneyTemplateP({disabled, ...props}) {
    const [showModal, setShow] = useState(false);
    const [plaintiffAttorneyName, setPlaintiffAttorneyName] = useState("");
    const [plaintiffAttorneyBarNumber, setPlaintiffAttorneyBarNumber] = useState("");
    const [plaintiffAttorneyOfficeAddress, setPlaintiffAttorneyOfficeAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
    const [plaintiffAttorneyPhoneNumberForCalls, setPlaintiffAttorneyPhoneNumberForCalls] = useState("");
    const [plaintiffAttorneyEmail, setPlaintiffAttorneyEmail] = useState("");
    const [plaintiffAttorneyFaxNumberOptional, setPlaintiffAttorneyFaxNumberOptional] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();

      let data = {
        plaintiffAttorneyName,
        plaintiffAttorneyBarNumber,
        plaintiffAttorneyOfficeAddress,
        plaintiffAttorneyEmail,
        plaintiffAttorneyPhoneNumberForCalls,
        plaintiffAttorneyFaxNumberOptional
      }
      
      localStorage.setItem('questionaireAttorneyTemplateP', JSON.stringify(data));
  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (

    <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
            + Attorney(s) Representing Plaintiff
          </Button>
        </div>
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Additional Attorney for Plaintiff</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <MDBCol md="12" id="plaintiff-attorney-name">
                <div id="plaintiff-attorney-name">
                  <label>Enter Attorney Full Name*</label>
                  <MDBInput
                    type="text"
                    disabled={disabled}
                    value={plaintiffAttorneyName}
                    onChange={(e) => setPlaintiffAttorneyName(e.target.value)}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-bar-number">
                <div id="plaintiff-attorney-bar-number">
                  <label>Bar Number*</label>
                  <MDBInput
                    type="text"
                    disabled={disabled}
                    value={plaintiffAttorneyBarNumber}
                    onChange={(e) => setPlaintiffAttorneyBarNumber(e.target.value)}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-phone-number-for-calls">
                <div id="plaintiff-attorney-phone-number-for-calls">
                  <label>Phone Number for Calls (you may list multiple)</label>
                  <MDBInput
                    type="textarea"
                    disabled={disabled}
                    value={plaintiffAttorneyPhoneNumberForCalls}
                    onChange={(e) => setPlaintiffAttorneyPhoneNumberForCalls(e.target.value)}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-office-address">
                <div id="plaintiff-attorney-office-address">
                  <label>Firm Address*</label>
                  <MDBInput
                    type="text"
                    hint="Street"
                    disabled={disabled}
                    value={plaintiffAttorneyOfficeAddress.street}
                    onChange={(e) => setPlaintiffAttorneyOfficeAddress({...plaintiffAttorneyOfficeAddress, street: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="City"
                    disabled={disabled}
                    value={plaintiffAttorneyOfficeAddress.city}
                    onChange={(e) => setPlaintiffAttorneyOfficeAddress({...plaintiffAttorneyOfficeAddress, city: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="State"
                    disabled={disabled}
                    value={plaintiffAttorneyOfficeAddress.state}
                    onChange={(e) => setPlaintiffAttorneyOfficeAddress({...plaintiffAttorneyOfficeAddress, state: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="Zip Code"
                    disabled={disabled}
                    value={plaintiffAttorneyOfficeAddress.zipCode}
                    onChange={(e) => setPlaintiffAttorneyOfficeAddress({...plaintiffAttorneyOfficeAddress, zipCode: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="Country"
                    disabled={disabled}
                    value={plaintiffAttorneyOfficeAddress.country}
                    onChange={(e) => setPlaintiffAttorneyOfficeAddress({...plaintiffAttorneyOfficeAddress, country: e.target.value})}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-email">
                <div id="plaintiff-attorney-email">
                  <label>Attorney E-Mail*</label>
                  <MDBInput
                    type="text"
                    disabled={disabled}
                    value={plaintiffAttorneyEmail}
                    onChange={(e) => setPlaintiffAttorneyEmail(e.target.value)}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-fax-number-optional">
                <div id="plaintiff-fax-number-optional">
                  <label>Fax Number (Optional)</label>
                  <MDBInput
                    type="text"
                    disabled={disabled}
                    value={plaintiffAttorneyFaxNumberOptional}
                    onChange={(e) => setPlaintiffAttorneyFaxNumberOptional(e.target.value)}
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
  
  export default QuestionaireAttorneyTemplateP;