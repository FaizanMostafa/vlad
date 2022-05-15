import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

export const QuestionaireAdditionalVehicleTemplate = ({
  vehiclesInformation,
  setVehiclesInformation,
}) => {
  const [showModal, setShow] = useState(false);
  const [vehicleInformation, setVehicleInformation] = useState({
    owner: "",
    insuranceCompany: "",
    licensePlateNumber: "",
    vinNumber: "",
    yearOfMake: "",
    color: "",
    modelType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setVehiclesInformation({
      ...vehiclesInformation,
      [Object.keys(vehiclesInformation).length]: vehicleInformation,
    });
    setVehicleInformation({
      owner: "",
      insuranceCompany: "",
      licensePlateNumber: "",
      vinNumber: "",
      yearOfMake: "",
      color: "",
      modelType: "",
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="primary w-50" onClick={handleShow}>
          + Additional Vehicle(s)
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Vehicle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCol md="12" id="vehicle-type-model-ownership">
            <div id="vehicle-type-model-ownership">
              <label>Who does the vehicle belong to?</label>
              <MDBInput
                type="text"
                value={vehicleInformation.owner}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    owner: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="vehicle-type-model-ownership">
            <div id="vehicle-type-model-ownership">
              <label>
                Vehicle Type/Model Ownership{" "}
                <i>(ie car, motorcycle, boat, RV)</i>
              </label>
              <MDBInput
                type="textarea"
                value={vehicleInformation.modelType}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    modelType: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="vehicle-year-of-individuals">
            <div id="vehicle-year-of-individuals">
              <label>Year of Make on Vehicle</label>
              <MDBInput
                type="text"
                value={vehicleInformation.yearOfMake}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    yearOfMake: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="vehicle-color-of-individuals">
            <div id="vehicle-color-of-individuals">
              <label>Vehicle Color</label>
              <MDBInput
                type="text"
                value={vehicleInformation.color}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    color: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="license-plate-number-state">
            <div id="license-plate-number-state">
              <label>License Plate Number/State of Individual(s)</label>
              <MDBInput
                type="text"
                value={vehicleInformation.licensePlateNumber}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    licensePlateNumber: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="vin-number-of-individuals">
            <div id="vin-number-of-individuals">
              <label>Vehicle Vin Number of Individual(s)</label>
              <MDBInput
                type="text"
                value={vehicleInformation.vinNumber}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    vinNumber: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="insurance-company-of-servee">
            <div id="insurance-company-of-servee">
              <label>Insurance Company of Servee</label>
              <MDBInput
                type="text"
                value={vehicleInformation.insuranceCompany}
                onChange={(e) =>
                  setVehicleInformation({
                    ...vehicleInformation,
                    insuranceCompany: e.target.value,
                  })
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
    </React.Fragment>
  );
};
