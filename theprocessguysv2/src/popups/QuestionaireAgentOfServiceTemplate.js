import { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";
import { showToast } from "../utils";

export const QuestionaireAgentOfServiceTemplate = ({ setAgentFullName }) => {
  const [showModal, setShow] = useState(false);
  const [fullName, setFullName] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName.firstName.length) {
      showToast("Please enter first name!", "warning");
    } else if (!fullName.lastName.length) {
      showToast("Please enter last name!", "warning");
    } else {
      setAgentFullName(fullName);
      setFullName({ firstName: "", middleName: "", lastName: "" });
      setShow(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="primary w-50" onClick={handleShow}>
          + Add Additional Agent Of Service
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Name(s) of Agent Of Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCol md="12" id="if-yes-list-full-name">
            <div id="if-yes-list-full-name">
              <label>Adding Full Name of Agent Of Service</label>
              <MDBInput
                type="text"
                hint="First Name"
                value={fullName.firstName}
                onChange={(e) =>
                  setFullName({ ...fullName, firstName: e.target.value })
                }
              />
              <MDBInput
                type="text"
                hint="Middle Name"
                value={fullName.middleName}
                onChange={(e) =>
                  setFullName({ ...fullName, middleName: e.target.value })
                }
              />
              <MDBInput
                type="text"
                hint="Last Name"
                value={fullName.lastName}
                onChange={(e) =>
                  setFullName({ ...fullName, lastName: e.target.value })
                }
              />
            </div>
          </MDBCol>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};
