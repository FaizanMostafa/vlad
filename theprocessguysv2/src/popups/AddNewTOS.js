import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {showToast} from "../utils";
import { addNewTOSDocument } from '../redux/actions/admin';

const AddNewTOS = (props) => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [version, setVersion] = useState("");
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAddingTOSDoc = useSelector(state => state.admin.isAddingTOSDoc);
  const [tosDocument, setTOSDocument] = useState(null);

  const resetForm = () => {
    setShow(false);
    setTitle("");
    setVersion("");
    setTOSDocument(null);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!title.length) {
      showToast("Please enter the terms of service document title!", "warning");
    } else if(!version.length) {
      showToast("Please enter the terms of service document version!", "warning");
    } else if(tosDocument===null) {
      showToast("Please upload terms of service document!", "warning");
    } else if(!isAddingTOSDoc) {
      let data = {
        uid: user.uid,
        title,
        version,
        tosDocument
      };
      dispatch(addNewTOSDocument(data, resetForm));
    }
  }

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
        Add New TOS
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="lg"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Add New TOS Document
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mb-4 justify-content-center" onSubmit={handleFormSubmit}>
            <MDBRow md="12">
              <MDBCol md="12">
                <Form.Group id="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="12">
                <Form.Group id="version">
                  <Form.Label>Version</Form.Label>
                  <Form.Control
                    type="text"
                    value={version}
                    onChange={(e)=>setVersion(e.target.value)}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="12">
                <Form.Group id="image">
                  <Form.Label>TOS Document</Form.Label>
                  <input
                    type='file'
                    onChange={(e)=>setTOSDocument(e.target.files[0])}
                    accept=".pdf"
                    label='Upload'
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <Button
                className="w-25 mt-4"
                disabled={isAddingTOSDoc}
                color="default"
                type="submit"
              >
                {
                  isAddingTOSDoc
                    ?
                      <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                        <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                          <span className="sr-only">Loading...</span>
                        </div>
                      </div>
                    :
                      <span className="text-white">Add</span>
                }
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddNewTOS;