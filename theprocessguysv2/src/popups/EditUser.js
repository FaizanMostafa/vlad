import React from 'react';
import { MDBIcon } from 'mdbreact';
import { Button, Modal } from 'react-bootstrap';

const EditUser = (props) => {
  return (
    <Modal
      size="lg"
      show={props.modalShow}
      onHide={() => props.setModalShow(false)}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Edit User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.userName}</h4>
        <p>
          Are you sure you want to delete <strong>{props.userName}</strong> from the system permanently?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => props.setModalShow(false)}>Close</Button>
        <Button variant="danger" onClick={() => props.setModalShow(false)}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EditUser;