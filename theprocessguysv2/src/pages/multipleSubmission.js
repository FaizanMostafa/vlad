import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { MDBCol } from "mdbreact";
import { useHistory } from "react-router-dom";

function multipleSubmission() {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fileUpload, setFileUpload] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [fileName, setFileName] = useState("");

    // eslint-disable-next-line react-hooks/rules-of-hooks
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            fileUpload,
            fileName
        }

        localStorage.setItem('questionaireMultipleSubmission', JSON.stringify(data))
        history.push('/questionaire-finished')

    }

        return(

            <React.Fragment className="text-center mb-4 mt-5 homepage">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                        <h2><b>Multiple Submission Upload</b></h2>
                        <form>
                            <br></br>
                            <MDBCol md="12">
                                <Form.Group id="fileName">
                                    <Form.Label>File Name</Form.Label>
                                    <Form.Control 
                                        value={fileName}
                                        type="text"
                                        onChange={(e) => setFileName(e.target.value)}
                                    />
                                </Form.Group>
                            </MDBCol>
                            <MDBCol>
                                <Form.Group id="mS-file-upload">
                                    <label>File Image</label>
                                    <input
                                    type="file"
                                    multiple
                                    onChange={(e)=>{setFileUpload(e.target.files)}}
                                    accept=".jpg,.png"
                                    >
                                    </input>
                                </Form.Group>
                            </MDBCol>
                            <br></br>
                            <br></br>
                            <Button onClick={handleSubmit} className="w-75">
                                Upload Files
                            </Button>
                            <br></br>
                            <br></br>
                            <button className="btn btn-primary">+ New Submission</button>
                        </form>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>                        
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
            </React.Fragment>
        )
}

export default multipleSubmission;