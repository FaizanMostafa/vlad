import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

function Business({faxNo, setFaxNo, specialty, setSpecialty, firmName, setFirmName, firmAddress, setFirmAddress, jobTitle, setJobTitle, ...props}) {

    return(
        <MDBRow>
            <h2 className="justify-content-center">Business / Company Section</h2>
            <MDBCol md="12 w-100">
                <br></br>            
                <MDBRow md="10" id="business-form-toggle" >
                    <MDBCol md="12" >
                        <Form.Group id="company-fax-number">
                            <Form.Label>Fax Number (**Optional)</Form.Label>
                            <Form.Control
                                type="text"
                                value={faxNo}
                                onChange={(e) => setFaxNo(e.target.value)}
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="company-specialty">
                            <Form.Label>Specialty</Form.Label>
                            <Form.Control 
                                type="text"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="company-name">
                            <Form.Label>Full Firm Name</Form.Label>
                            <Form.Control 
                                type="text"
                                value={firmName}
                                onChange={(e) => setFirmName(e.target.value)}
                                required 
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="company-full-address">
                            <Form.Label>Full Firm Address</Form.Label>
                            <Form.Control 
                                type="text"
                                value={firmAddress}
                                onChange={(e) => setFirmAddress(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="company-job-title">
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control 
                                type="text"
                                value={jobTitle}
                                onChange={(e) => setJobTitle(e.target.value)}
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

export default Business;