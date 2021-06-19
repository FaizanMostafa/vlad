import React from "react";
import { Form, Button, Card } from "react-bootstrap";
import { MDBInput } from "mdbreact"

function singleSubmission() {

    return(
        <Card className="justify-content-center mt-4 mb-4 homepage">
            <Card.Body>
                <h2><b>Single Submission Upload</b></h2>
                <Form onSubmit={""}>
                    <br></br>
                    <Form.Group id="s-file-upload">
                        <Form.Label>File Name</Form.Label>
                        <MDBInput
                        type="fileName"
                        value={""}
                        // onChange={(e) => setEmail(e.target.value)}
                        // required
                        >
                        </MDBInput>
                        <br></br>
                        <Form.Control type="file" required></Form.Control>
                    </Form.Group>
                    <br></br>
                    <br></br>
                    <Button type="submit" className="w-75">
                        Upload Files
                    </Button>
                </Form>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Card.Body>
        </Card>
    )
}

export default singleSubmission;