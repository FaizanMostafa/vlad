import { MDBRow, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import FileBase64 from "../../components/FileBase64";
import { QuestionaireAdditionalServeeTemplate } from "../../popups";

export const Questionaire6 = (props) => {
  const {
    isFormDisabled,
    serveesPhysicalDescription,
    setServeesPhysicalDescription,
  } = props;

  const handleSaveImage = (image, key, servee) => {
    delete image.file;
    setServeesPhysicalDescription({
      ...serveesPhysicalDescription,
      [key]: { ...servee, image },
    });
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-2">
        Servee Physical Description{" "}
        <i>(Proceed to next page if not available)</i>*
      </h2>
      <br></br>
      {Object.entries(serveesPhysicalDescription).map(([key, servee]) => (
        <>
          {Object.keys(serveesPhysicalDescription).length > 1 && (
            <h4>Servee {parseInt(key) + 1} Details</h4>
          )}
          <MDBCol md="12" id="full-name-of-described-servee">
            <Form.Label style={{ fontWeight: "bold" }}>
              Full Name of Servee {Number(key) + 1}
            </Form.Label>
            <MDBRow md="12">
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={servee.fullName.firstName}
                    onChange={(e) =>
                      setServeesPhysicalDescription({
                        ...serveesPhysicalDescription,
                        [key]: {
                          ...servee,
                          fullName: {
                            ...servee.fullName,
                            firstName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={servee.fullName.middleName}
                    onChange={(e) =>
                      setServeesPhysicalDescription({
                        ...serveesPhysicalDescription,
                        [key]: {
                          ...servee,
                          fullName: {
                            ...servee.fullName,
                            middleName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="4">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={servee.fullName.lastName}
                    onChange={(e) =>
                      setServeesPhysicalDescription({
                        ...serveesPhysicalDescription,
                        [key]: {
                          ...servee,
                          fullName: {
                            ...servee.fullName,
                            lastName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <br />
          <MDBRow md="12">
            <MDBCol md="6" id="gender-of-individuals">
              <Form.Group id="gender-of-individuals">
                <Form.Label>Sex of Servee</Form.Label>
                <Form.Control
                  as="select"
                  value={servee.gender}
                  disabled={isFormDisabled}
                  className="w-75 m-4 center p-2"
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, gender: e.target.value },
                    })
                  }
                >
                  <option value="">Please Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="unknown">Unknown</option>
                </Form.Control>
              </Form.Group>
            </MDBCol>
            <MDBCol md="6" bottom id="ethnicity-of-individuals">
              <Form.Group id="ethnicity-of-individuals">
                <Form.Label>Ethnicity of Servee</Form.Label>
                <Form.Control
                  type="textarea"
                  disabled={isFormDisabled}
                  value={servee.ethnicity}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, ethnicity: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="height-of-individuals">
                <Form.Label>Height of Servee Being Served?</Form.Label>
                <Form.Control
                  type="textarea"
                  value={servee.height}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, height: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6">
              <Form.Group id="weight-of-individuals">
                <Form.Label>Weight Servee Being Served?</Form.Label>
                <Form.Control
                  type="textarea"
                  value={servee.weight}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, weight: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="hair-color-of-individuals">
                <Form.Label>Hair Color of Servee Being Served?</Form.Label>
                <Form.Control
                  type="textarea"
                  value={servee.hairColor}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, hairColor: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6">
              <Form.Group id="eye-color-of-individuals">
                <Form.Label>Eye Color of Servee Being Served?</Form.Label>
                <Form.Control
                  type="textarea"
                  value={servee.eyeColor}
                  disabled={isFormDisabled}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, eyeColor: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <br />
          <MDBRow md="12">
            <MDBCol md="6">
              <Form.Group id="physical-outlines-for-individuals">
                <Form.Label>
                  Any Physical Outlines noted for Servee being Served?
                  <i>
                    (ie scars, tattoos, birthmarks, facial hair, glasses,
                    blemish, birth mark)
                  </i>
                </Form.Label>
                <Form.Control
                  type="textarea"
                  disabled={isFormDisabled}
                  value={servee.physicalOutline}
                  onChange={(e) =>
                    setServeesPhysicalDescription({
                      ...serveesPhysicalDescription,
                      [key]: { ...servee, physicalOutline: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol bottom md="6 mb-4">
              {isFormDisabled ? (
                servee.hasOwnProperty("imageURI") && (
                  <>
                    <Form.Label>Servee Image</Form.Label>
                    <br />
                    <img
                      src={servee.imageURI}
                      alt="servee"
                      resizeMethod="contain"
                      style={{ height: 125, width: 125 }}
                    />
                  </>
                )
              ) : (
                <Form.Group id="image-of-individuals">
                  <Form.Label>
                    Servee Image <i>(If Available)</i>
                  </Form.Label>
                  <FileBase64
                    multiple={false}
                    onDone={(image) => handleSaveImage(image, key, servee)}
                    accept=".jpg,.png"
                  />
                </Form.Group>
              )}
            </MDBCol>
          </MDBRow>
          <br></br>
        </>
      ))}
      {!isFormDisabled && (
        <MDBCol>
          <QuestionaireAdditionalServeeTemplate
            serveesPhysicalDescription={serveesPhysicalDescription}
            setServeesPhysicalDescription={setServeesPhysicalDescription}
          />
        </MDBCol>
      )}
      <br></br>
    </>
  );
};
