import React, { useState } from 'react';
import { MDBContainer,
         MDBModalBody, 
         MDBModalHeader, 
         MDBModalFooter, 
         MDBInput } from "mdbreact";
import { Button, Modal } from 'react-bootstrap';

const CreditCardAfterRegister = () => {

const [showModal, setShow] = useState(false);
const [creditCardNumber, setCreditCardNumber] = useState("");
const [creditCardExpiration, setCreditCardExpiration] = useState("");
const [credtCardCCV, setCreditCardCCV] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();

let data = {
    creditCardExpiration,
    creditCardNumber,
    credtCardCCV
}

localStorage.setItem('creditCardAfterRegister', JSON.stringify(data))
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <MDBContainer>
      <Button className="btn btn-primary" onClick={handleShow}>Click to Register Credit Card</Button>
      <Modal show={showModal} onHide={handleClose}>
        <div className="text-center">
        <MDBModalHeader style={{ color:"black" }}>Credit Card on File</MDBModalHeader>
        </div>
        <MDBModalBody className="text-center">
          <h7 style={{ color:"black" }}>Please provide us with a Credit Card for us to have on file.</h7>
          <br></br>
          <br></br>
          <h6 style={{ color:"black" }}>This will not be charged. This is for safety reasons</h6>
          <br></br>
          <label style={{ color:"black" }}>Credit Card Number</label>
          <MDBInput 
            type="text"
            value={creditCardNumber}
            onChange={(e) => setCreditCardNumber(e.target.value)}
            required 
            style={{ color: "black", width:"400px", marginLeft:"35px" }}>
          </MDBInput>
          <br></br>
          <label style={{ color:"black" }}>Exiration Date</label>
          <MDBInput 
            type="text" 
            value={creditCardExpiration}
            onChange={(e) => setCreditCardExpiration(e.target.value)}
            required 
            style={{ color: "black", width:"400px", marginLeft:"35px" }}>
          </MDBInput>
          <br></br>
          <label style={{ color:"black" }}>CCV (3-digit on back of card)</label>
          <MDBInput 
            type="text" 
            value={credtCardCCV}
            onChange={(e) => setCreditCardCCV(e.target.value)}
            required 
            style={{ color: "black", width:"400px", marginLeft:"35px" }}>
          </MDBInput>
        </MDBModalBody>
        <br></br>
        <MDBModalFooter>
          <Button className="btn btn-primary" onClick={handleClose}>Close</Button>
          <Button className="btn btn-secondary" onClick={handleSubmit}>Submit Card Information</Button>
        </MDBModalFooter>
      </Modal>
    </MDBContainer>
    );
  }

export default CreditCardAfterRegister;