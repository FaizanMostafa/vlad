import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

function Attorney({attorneyType, setAttorneyType, faxNo, setFaxNo, specialty, setSpecialty, barNo, setBarNo, firmName, setFirmName, firmAddress, setFirmAddress, jobTitle, setJobTitle,  ...props}) {

    return(
        <MDBRow>
            <h2 className="justify-content-center">Attorney / Paralegal Section</h2>
            <MDBCol md="12 w-100" >
                <br></br>            
                <MDBRow md="8" id="attorney-form-toggle">
                    <MDBCol md="12">
                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                checked={attorneyType === "paralegal" ? true : false}
                                onChange={()=>setAttorneyType("paralegal")}
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label class="form-check-label" for="flexRadioDefault1"> Paralegal </label>
                        </div>

                        <div class="form-check">
                            <input
                                class="form-check-input"
                                type="radio"
                                checked={attorneyType === "attorney" ? true : false}
                                onChange={()=>setAttorneyType("attorney")}
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                            />
                            <label class="form-check-label" for="flexRadioDefault2"> Attorney </label>
                        </div>
                        <br></br>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="attorney-fax-number">
                            <Form.Label>Fax Number (**Optional)</Form.Label>
                            <Form.Control 
                                type="text"
                                value={faxNo}
                                onChange={(e) => setFaxNo(e.target.value)}
                            />
                        </Form.Group>
                    </MDBCol>
                    {
                        attorneyType === "attorney"
                            &&
                                <MDBCol md="12">
                                    <Form.Group id="attorney-specialty">
                                        <Form.Label>Specialty (ie. Defence, Business, Financial Attorney, etc.)</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            value={specialty}
                                            onChange={(e) => setSpecialty(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </MDBCol>
                    }
                    {
                        attorneyType === "attorney"
                            &&
                                <MDBCol md="12">
                                    <Form.Group id="attorney-barnumber">
                                        <Form.Label>Bar Number</Form.Label>
                                        <Form.Control 
                                            type="text" type="text"
                                            value={barNo}
                                            onChange={(e) => setBarNo(e.target.value)}
                                            required
                                        />
                                    </Form.Group>
                                </MDBCol>
                    }
                    <MDBCol md="12">
                        <Form.Group id="attorney-firm-name">
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
                        <Form.Group id="attorney-full-firm-address">
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
                        <Form.Group id="attorney-job-title">
                            <Form.Label>Job Title (Position at firm; ie. Manager, attorney, partner, owner)</Form.Label>
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

export default Attorney