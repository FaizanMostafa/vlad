import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

function QuestionaireAttorneyTemplateD({disabled, ...props}) {
    
    const [showModal, setShow] = useState(false);
    const [defendantAttorneyName, setDefendantAttorneyName] = useState("");
    const [defendantAttorneyBarNumber,setDefendantAttorneyBarNumber] = useState("");
    const [defendantAttorneyOfficeAddress, setDefendantAttorneyOfficeAddress] = useState("");
    const [defendantAttorneyPhoneNumberForCalls, setDefendantAttorneyPhoneNumberForCalls] = useState("");
    const [defendantAttorneyEmail, setDefendantAttorneyEmail] = useState("");
    const [defendantAttorneyFaxNumberOptional,setDefendantAttorneyFaxNumberOptional] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault()

      let data = {
        defendantAttorneyName: defendantAttorneyName,
        defendantAttorneyOfficeAddress: defendantAttorneyOfficeAddress,
        defendantAttorneyBarNumber: defendantAttorneyBarNumber,
        defendantAttorneyEmail: defendantAttorneyEmail,
        defendantAttorneyPhoneNumberForCalls:defendantAttorneyPhoneNumberForCalls,
        defendantAttorneyFaxNumberOptional: defendantAttorneyFaxNumberOptional
      }

      localStorage.setItem('questionaireAttorneyTemplateD', JSON.stringify(data))
  }
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <React.Fragment>
        <div
          className="d-flex align-items-center justify-content-center"
        >
          <Button variant="primary w-50" onClick={handleShow}>
            + Attorney(s) information representing Defendant
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
                  disabled={disabled}
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
                  disabled={disabled}
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
                  disabled={disabled}
                  value={defendantAttorneyPhoneNumberForCalls}
                  onChange={(e) => setDefendantAttorneyPhoneNumberForCalls(e.target.value)}
                  required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-office-address">
                <div id="defendant-attorney-office-address">
                  <label>Firm Address*</label>
                  <MDBInput
                    type="text"
                    hint="Street"
                    disabled={disabled}
                    value={defendantAttorneyOfficeAddress.street}
                    onChange={(e) => setDefendantAttorneyOfficeAddress({...defendantAttorneyOfficeAddress, street: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="City"
                    disabled={disabled}
                    value={defendantAttorneyOfficeAddress.city}
                    onChange={(e) => setDefendantAttorneyOfficeAddress({...defendantAttorneyOfficeAddress, city: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="State"
                    disabled={disabled}
                    value={defendantAttorneyOfficeAddress.state}
                    onChange={(e) => setDefendantAttorneyOfficeAddress({...defendantAttorneyOfficeAddress, state: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="Zip Code"
                    disabled={disabled}
                    value={defendantAttorneyOfficeAddress.zipCode}
                    onChange={(e) => setDefendantAttorneyOfficeAddress({...defendantAttorneyOfficeAddress, zipCode: e.target.value})}
                    required 
                  />
                  <MDBInput
                    type="text"
                    hint="Country"
                    disabled={disabled}
                    value={defendantAttorneyOfficeAddress.country}
                    onChange={(e) => setDefendantAttorneyOfficeAddress({...defendantAttorneyOfficeAddress, country: e.target.value})}
                    required 
                  />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-email">
                <div id="defendant-attorney-email">
                  <label>Attorney E-Mail*</label>
                  <MDBInput
                    type="text"
                    disabled={disabled}
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
                    disabled={disabled}
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