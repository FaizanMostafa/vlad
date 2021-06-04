import { MDBRow, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import React from "react";

function Business() {

        return(
            <MDBRow>
            <h2 className="justify-content-center">Business / Company Section</h2>
                <MDBCol md="12 w-100">
            <br></br>   
                    <form>
                        <h5><b>**Please fill out if you are in a Business / Company</b></h5>
            <br></br>            
            <MDBRow md="10" id="business-form-toggle" >

                <MDBCol md="12" >
                    <Form.Group id="company-fax-number">
                        <Form.Label>Fax Number (**Optional)</Form.Label>
                        <Form.Control 
                        type="text"/>
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="company-specialty">
                        <Form.Label>Specialty</Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="company-name">
                        <Form.Label>Full Firm Name</Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="company-full-address">
                        <Form.Label>Full Firm Address</Form.Label>
                        <Form.Control 
                        type="address" 
                        />
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="company-job-title">
                        <Form.Label>Job Title</Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                </MDBCol>

            </MDBRow>
                    </form>
                </MDBCol> 
            <br></br>
            <br></br>
            </MDBRow>
        )
    } 

export default Business