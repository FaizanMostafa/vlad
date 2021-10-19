import React from 'react';
import { MDBIcon } from 'mdbreact';
import { Button, Modal } from 'react-bootstrap';

const DeleteUser = (props) => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <MDBIcon style={{color: 'blue', margin: 8, cursor: "pointer"}} onClick={() => setModalShow(true)} icon="pencil-alt" />
      <Modal
        size="lg"
        show={modalShow}
        onHide={() => setModalShow(false)}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.userName}</h4>
          <p>
            Are you sure you want to delete <strong>{props.userName}</strong> from the system permanently?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setModalShow(false)}>Close</Button>
          <Button variant="danger" onClick={() => setModalShow(false)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteUser;