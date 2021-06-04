import { MDBRow, MDBCol } from "mdbreact";
import { Form/*, Collapse*/ } from "react-bootstrap";
import React from "react";

function Attorney() {

        return(
            <MDBRow>
            <h2 className="justify-content-center">Attorney / Paralegal Section</h2>
                <MDBCol md="12 w-100" >
            <br></br>
                    <form>
                        <h5><b>**Please fill out if you are an attorney</b></h5>
            <br></br>            
            <MDBRow md="8" id="attorney-form-toggle">

                <MDBCol md="12">
                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1"> Paralegal </label>
                </div>

                <div class="form-check">
                    <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1"> Attorney </label>
                </div>
                <br></br>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="attorney-fax-number">
                        <Form.Label>Fax Number (**Optional)</Form.Label>
                        <Form.Control 
                        type="text"/>
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="attorney-specialty">
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                <Form.Group id="attorney-barnumber">
                    <Form.Label>Bar Number</Form.Label>
                    <Form.Control 
                    type="text" 
                    />
                </Form.Group>
            </MDBCol>

            <MDBCol md="12">
                <Form.Group id="attorney-firm-name">
                    <Form.Label>Full Firm Name</Form.Label>
                    <Form.Control 
                    type="text" 
                    />
                </Form.Group>
            </MDBCol>

            <MDBCol md="12">
                <Form.Group id="attorney-full-firm-address">
                    <Form.Label>Full Firm Address</Form.Label>
                    <Form.Control 
                    type="address" 
                    />
                </Form.Group>
            </MDBCol>

            <MDBCol md="12">
                <Form.Group id="attorney-job-title">
                    <Form.Label>Job Title (ie. Defence, Business, Financial Attorney, etc.)</Form.Label>
                    <Form.Control 
                    type="text" 
                    />
                </Form.Group>
            </MDBCol>

            </MDBRow>
                    </form>
                </MDBCol>
            {/* </Collapse> */}
            <br></br>
            <br></br>
        </MDBRow>
        )
    } 

export default Attorney