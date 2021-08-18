import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

function Personal({SSN, setSSN, SSNState, setSSNState, ...props}) {

    return(
        <MDBRow>
            <h2 className="justify-content-center">Personal (Civilian) Section</h2>
            <MDBCol md="12 w-100">
                <br></br>
                <MDBRow md="10" id="personal-form-toggle">
                    <MDBCol md="12">
                        <Form.Group id="personal-us-id">
                            <Form.Label>Government issued ID Number (provided on Identification Card or Drivers License) *NO PASSPORTS*</Form.Label>
                            <Form.Control 
                                type="text"
                                value={SSN}
                                onChange={(e) => setSSN(e.target.value)}
                                required 
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="personal-us-id">
                            <Form.Label>State of issued ID</Form.Label>
                            <Form.Control 
                                type="text"
                                value={SSNState}
                                onChange={(e) => setSSNState(e.target.value)}
                                required 
                            />
                        </Form.Group>
                    </MDBCol>
                </MDBRow>
            </MDBCol>   
            <br></br>
            <br></br>
        </MDBRow>
    );
}

export default Personal;