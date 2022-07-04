import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { generateCoverSheets } from "../redux/actions/admin";

export const CreateCoverSheet = (props) => {
  const dispatch = useDispatch();
  const isGeneratingCoverSheets = useSelector(state => state.admin.isGeneratingCoverSheets);
  
  const handleOnGenerateCoverSheet = () => {
    if(!isGeneratingCoverSheets) {
      dispatch(generateCoverSheets({uid: props.uid, caseId: props.caseId, coverSheetDocs: props.coverSheetDocs, coverSheetData: props.coverSheetData}, ()=>props.setModalShow(false)));
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
          Generate Cover Sheets
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{props?.caseTitle}</h4>
        <p>
          Are you sure you want to generate cover sheets for <strong>{props?.caseTitle}</strong> with the data available in the system?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={() => props.setModalShow(false)}>Close</Button>
        <Button
          variant="success"
          disabled={isGeneratingCoverSheets}
          onClick={handleOnGenerateCoverSheet}
        >
          {
            isGeneratingCoverSheets
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