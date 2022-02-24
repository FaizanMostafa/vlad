import { Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MDBCol, MDBInput } from "mdbreact";

export const QuestionaireAdditionalServeeTemplate = ({
  serveesPhysicalDescription,
  setServeesPhysicalDescription,
}) => {
  const [showModal, setShow] = useState(false);
  const [physicalDescription, setPhysicalDescription] = useState({
    fullName: { firstName: "", middleName: "", lastName: "" },
    gender: "",
    ethnicity: "",
    height: "",
    weight: "",
    hairColor: "",
    eyeColor: "",
    physicalOutline: "",
    image: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setServeesPhysicalDescription({
      ...serveesPhysicalDescription,
      [Object.keys(serveesPhysicalDescription).length]: physicalDescription,
    });
    setPhysicalDescription({
      fullName: { firstName: "", middleName: "", lastName: "" },
      gender: "",
      ethnicity: "",
      height: "",
      weight: "",
      hairColor: "",
      eyeColor: "",
      physicalOutline: "",
      image: null,
    });
    setShow(false);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="primary w-50" onClick={handleShow}>
          + Additional Servee(s)
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding Servee(s)</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBCol md="12" id="full-name-of-described-servee">
            <div id="full-name-of-described-servee">
              <label>Full Name of Servee*</label>
              <MDBInput
                style={{ color: "black" }}
                type="text"
                hint="First Name"
                className="text-white"
                value={physicalDescription.fullName.firstName}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    fullName: {
                      ...physicalDescription.fullName,
                      firstName: e.target.value,
                    },
                  })
                }
                required
              />
              <MDBInput
                style={{ color: "black" }}
                type="text"
                hint="Middle Name"
                className="text-white"
                value={physicalDescription.fullName.middleName}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    fullName: {
                      ...physicalDescription.fullName,
                      middleName: e.target.value,
                    },
                  })
                }
              />
              <MDBInput
                style={{ color: "black" }}
                type="text"
                hint="Last Name"
                className="text-white"
                value={physicalDescription.fullName.lastName}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    fullName: {
                      ...physicalDescription.fullName,
                      lastName: e.target.value,
                    },
                  })
                }
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="gender-of-individuals">
            <div id="gender-of-individuals">
              <label>Sex of Servee</label>
              <select
                className="w-75 m-4 center p-2"
                value={physicalDescription.gender}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    gender: e.target.value,
                  })
                }
              >
                <option value="">Please Select</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="unknown">Unknown</option>
              </select>
            </div>
          </MDBCol>
          <MDBCol md="12" id="ethnicity-of-individuals">
            <div id="ethnicity-of-individuals">
              <label>Ethnicity of Servee</label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.ethnicity}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    ethnicity: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="height-of-individuals">
            <div id="height-of-individuals">
              <label>Height of Servee Being Served?</label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.height}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    height: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="weight-of-individuals">
            <div id="weight-of-individuals">
              <label>Weight of Servee Being Served?</label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.weight}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    weight: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="hair-color-of-individuals">
            <div id="hair-color-of-individuals">
              <label>Hair Color of Servee Being Served?</label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.hairColor}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    hairColor: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="eye-color-of-individuals">
            <div id="eye-color-of-individuals">
              <label>Eye Color of Servee Being Served?</label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.eyeColor}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    eyeColor: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="physical-outlines-for-individuals">
            <div id="physical-outlines-for-individuals">
              <label>
                Any Physical Outlines noted for Servee being Served?
                <i>
                  (ie scars, tattoos, birthmarks, facial hair, glasses, blemish,
                  birth mark)
                </i>
              </label>
              <MDBInput
                style={{ color: "black" }}
                type="textarea"
                value={physicalDescription.physicalOutline}
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    physicalOutline: e.target.value,
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12 mb-4" id="image-of-individuals">
            <div id="image-of-individuals">
              <label>
                Servee Image <i>(If Available)</i>*
              </label>
              <input
                type="file"
                accept=".jpg,.png"
                label="Upload"
                onChange={(e) =>
                  setPhysicalDescription({
                    ...physicalDescription,
                    image: e.target.files[0],
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
    </Fragment>
  );
};
