import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTOSDocument } from "../redux/actions/admin";

const DeleteCase = (props) => {
  const dispatch = useDispatch();
  const isDeletingTOSDoc = useSelector(state => state.admin.isDeletingTOSDoc);
  
  const handleOnDeleteTOSDoc = () => {
    if(!isDeletingTOSDoc) {
      dispatch(deleteTOSDocument({...props.tosDoc}, ()=>props.setModalShow(false)));
    }
  }

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
          Delete TOS Document
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.tosDoc?.title}</h4>
        <p>
          Are you sure you want to delete <strong>{props.tosDoc?.title}</strong> from the system permanently?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => props.setModalShow(false)}>Close</Button>
        <Button
          variant="danger"
          disabled={isDeletingTOSDoc}
          onClick={handleOnDeleteTOSDoc}
        >
          {
            isDeletingTOSDoc
              ?
                <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                  <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>  
                </div>
              :
                <span className="text-white">Confirm</span>
          }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteCase;