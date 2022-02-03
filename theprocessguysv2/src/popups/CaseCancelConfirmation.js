import React from 'react';
import { Button, Modal } from 'react-bootstrap';

const CaseCancelConfirmation = (props) => {

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
          Cancel Case
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.case?.caseTitle}</h4>
        <p>
          Are you sure you want to change the status of <strong>{props.case?.caseTitle}</strong> to cancelled, in the system? <br/><sub>Please note that cancelling a case will also generate a notification</sub>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => props.setModalShow(false)}>Close</Button>
        <Button
          variant="danger"
          onClick={props.handleOnPressProceed}
        >
          <span className="text-white">Confirm</span>
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CaseCancelConfirmation;