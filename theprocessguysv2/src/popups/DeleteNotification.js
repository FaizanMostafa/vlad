import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteNotification } from "../redux/actions/admin";

const DeleteNotification = (props) => {
  const dispatch = useDispatch();
  const isDeletingNotification = useSelector(state => state.admin.isDeletingNotification);
  
  const handleOnDeleteNotification = () => {
    if(!isDeletingNotification) {
      dispatch(deleteNotification({...props.notification}, ()=>props.setModalShow(false)));
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
          Delete Notification
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props.notification?.title}</h4>
        <p>
          Are you sure you want to delete <strong>{props.notification?.title}</strong> from the system permanently?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={() => props.setModalShow(false)}>Close</Button>
        <Button
          variant="danger"
          disabled={isDeletingNotification}
          onClick={handleOnDeleteNotification}
        >
          {
            isDeletingNotification
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

export default DeleteNotification;