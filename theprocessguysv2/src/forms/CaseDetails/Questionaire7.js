import { MDBCol, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";
import { QuestionaireAdditionalVehicleTemplate } from "../../popups";

export const Questionaire7 = (props) => {
  const { isFormDisabled, vehiclesInformation, setVehiclesInformation } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">
        Vehicle Information<i>(Proceed to next page if not available)</i>*
      </h2>
      <br></br>
      {Object.entries(vehiclesInformation).map(([key, vehicle]) => (
        <>
          {Object.keys(vehiclesInformation).length > 1 && (
            <h4>Vehicle {parseInt(key) + 1} Details</h4>
          )}
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="vehicle-type-model-ownership">
                <Form.Label>
                  Vehicle Type/Model Ownership{" "}
                  <i>(ie car, motorcycle, boat, RV)</i>
                </Form.Label>
                <Form.Control
                  type="textarea"
                  value={vehicle.modelType}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, modelType: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6">
              <Form.Group id="vehicle-year-of-individuals">
                <Form.Label>Year of Make on Vehicle</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={vehicle.yearOfMake}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, yearOfMake: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="vehicle-color-of-individuals">
                <Form.Label>Vehicle Color</Form.Label>
                <Form.Control
                  type="text"
                  value={vehicle.color}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, color: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6">
              <Form.Group id="license-plate-number-state">
                <Form.Label>
                  License Plate Number/State of Registration(s)
                </Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={vehicle.licensePlateNumber}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, licensePlateNumber: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="vin-number-of-individuals">
                <Form.Label>Vehicle Vin Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={vehicle.vinNumber}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, vinNumber: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6">
              <Form.Group id="insurance-company-of-servee">
                <Form.Label>Insurance Company of Servee</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={vehicle.insuranceCompany}
                  onChange={(e) =>
                    setVehiclesInformation({
                      ...vehiclesInformation,
                      [key]: { ...vehicle, insuranceCompany: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <br></br>
        </>
      ))}
      {!isFormDisabled && (
        <MDBCol>
          <QuestionaireAdditionalVehicleTemplate
            vehiclesInformation={vehiclesInformation}
            setVehiclesInformation={setVehiclesInformation}
          />
        </MDBCol>
      )}
      <br></br>
    </>
  );
};
