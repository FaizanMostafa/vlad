import { MDBRow, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import React from "react";

function Personal() {

        return(
            <MDBRow>
            <h2 className="justify-content-center">Personal (Civilian) Section</h2>
                <MDBCol md="12 w-100">
            <br></br>        
                    <form>
                        <h5><b>**Please fill out if you are a Civilian</b></h5>
            <br></br>
            <MDBRow md="10" id="personal-form-toggle">
                
                <MDBCol md="12">
                    <Form.Group id="personal-us-id">
                        <Form.Label>Government US Issued ID Number (NO PASSPORT)
                    </Form.Label>
                        <Form.Control 
                        type="text" 
                        />
                    </Form.Group>
                </MDBCol>

                <MDBCol md="12">
                    <Form.Group id="personal-fax-number">
                        <Form.Label>Fax Number (**Optional)</Form.Label>
                        <Form.Control 
                        type="text"/>
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

export default Personal