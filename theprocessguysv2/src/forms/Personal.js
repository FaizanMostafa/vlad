import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

function Personal({SSN, setSSN, faxNo, setFaxNo, ...props}) {

    return(
        <MDBRow>
            <h2 className="justify-content-center">Personal (Civilian) Section</h2>
            <MDBCol md="12 w-100">
                <br></br>
                <MDBRow md="10" id="personal-form-toggle">
                    <MDBCol md="12">
                        <Form.Group id="personal-us-id">
                            <Form.Label>Government US Issued ID Number (NO PASSPORT)</Form.Label>
                            <Form.Control 
                                type="text"
                                value={SSN}
                                onChange={(e) => setSSN(e.target.value)}
                                required 
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="personal-fax-number">
                            <Form.Label>Fax Number (**Optional)</Form.Label>
                            <Form.Control 
                                type="text"
                                value={faxNo}
                                onChange={(e) => setFaxNo(e.target.value)}
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