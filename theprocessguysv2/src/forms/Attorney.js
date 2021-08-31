import React from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

function Attorney({attorneyType, setAttorneyType, specialty, setSpecialty, barNo, setBarNo, firmName, setFirmName, firmAddress, setFirmAddress, firmRole, setFirmRole,  ...props}) {

    return(
        <MDBRow>
            <h2 className="justify-content-center">Please Select Role</h2>
            <MDBCol md="12 w-100" >
                <br></br>            
                <MDBRow md="8" id="attorney-form-toggle">
                    <MDBCol md="12">
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
                        <br></br>
                    </MDBCol>
                    {
                        attorneyType === "attorney"
                            &&
                                <MDBCol md="12">
                                    <Form.Group id="attorney-barnumber">
                                        <Form.Label>Bar Number</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            value={barNo}
                                            onChange={(e) => setBarNo(e.target.value)}
                                        />
                                    </Form.Group>
                                </MDBCol>
                    }
                    <MDBCol md="12">
                        <Form.Group id="attorney-specialty">
                            <Form.Label>Legal Specialty (ie. Defence, Business, Financial, etc.)</Form.Label>
                            <Form.Control 
                                type="text"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="attorney-firm-name">
                            <Form.Label>Full Firm Name</Form.Label>
                            <Form.Control 
                                type="text"
                                value={firmName}
                                onChange={(e) => setFirmName(e.target.value)}
                            />
                        </Form.Group>
                    </MDBCol>
                    <MDBCol md="12">
                        <Form.Group id="attorney-full-firm-address">
                            <Form.Label>Full Firm Address</Form.Label>
                            <Form.Control 
                                type="text"
                                placeholder="Street"
                                value={firmAddress.street}
                                onChange={(e) => setFirmAddress({...firmAddress, street: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group id="attorney-full-firm-address">
                            <Form.Control 
                                type="text"
                                placeholder="City"
                                value={firmAddress.city}
                                onChange={(e) => setFirmAddress({...firmAddress, city: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group id="attorney-full-firm-address">
                            <Form.Control 
                                type="text"
                                placeholder="State"
                                value={firmAddress.state}
                                onChange={(e) => setFirmAddress({...firmAddress, state: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group id="attorney-full-firm-address">
                            <Form.Control 
                                type="text"
                                placeholder="Zip Code"
                                value={firmAddress.zipCode}
                                onChange={(e) => setFirmAddress({...firmAddress, zipCode: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group id="attorney-full-firm-address">
                            <Form.Control 
                                type="text"
                                placeholder="Country"
                                value={firmAddress.country}
                                onChange={(e) => setFirmAddress({...firmAddress, country: e.target.value})}
                            />
                        </Form.Group>
                    </MDBCol>
                    {
                        attorneyType === "attorney"
                            &&
                                <MDBCol md="12">
                                    <Form.Group id="firm-role">
                                        <Form.Label>Firm Role (current position ie Owner, Partner, Staff Member, etc.)</Form.Label>
                                        <Form.Control 
                                            type="text"
                                            value={firmRole}
                                            onChange={(e) => setFirmRole(e.target.value)}
                                        />
                                    </Form.Group>
                                </MDBCol>
                    }
                </MDBRow>
            </MDBCol>
            <br></br>
            <br></br>
        </MDBRow>
    );
}

export default Attorney