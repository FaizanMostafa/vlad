import { Modal, Button } from "react-bootstrap";
import { MDBCol } from "mdbreact";

export const ResetQuestionaireConfirmation = ({showModal, handleModalClose, handleOnClickConfirm, ...props}) => {
  return (
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Reset Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <MDBCol md="12" id="main-address-for-service">
          Are you sure you want to <b>reset</b> all questionaire forms?
        </MDBCol>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleOnClickConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}