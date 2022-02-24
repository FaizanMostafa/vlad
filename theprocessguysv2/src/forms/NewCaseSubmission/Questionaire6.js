import { MDBCol, MDBInput } from "mdbreact";
import FileBase64 from "../../components/FileBase64";
import { QuestionaireAdditionalServeeTemplate } from "../../popups";

export const Questionaire6 = (props) => {
  const { serveesPhysicalDescription, setServeesPhysicalDescription } = props;

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
            <div id="full-name-of-described-servee">
              <label>Full Name of Servee</label>
              <MDBInput
                type="text"
                hint="First Name"
                className="text-white"
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
                required
              />
              <MDBInput
                type="text"
                hint="Middle Name"
                className="text-white"
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
              <MDBInput
                type="text"
                hint="Last Name"
                className="text-white"
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
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="gender-of-individuals">
            <div id="gender-of-individuals">
              <label>Sex of Servee</label>
              <select
                className="w-75 m-4 center p-2"
                value={servee.gender}
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
              </select>
            </div>
          </MDBCol>
          <MDBCol md="12" id="ethnicity-of-individuals">
            <div id="ethnicity-of-individuals">
              <label>Ethnicity of Servee</label>
              <MDBInput
                type="textarea"
                className="text-white"
                value={servee.ethnicity}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, ethnicity: e.target.value },
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="height-of-individuals">
            <div id="height-of-individuals">
              <label>Height of Servee Being Served?</label>
              <MDBInput
                type="textarea"
                className="text-white"
                value={servee.height}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, height: e.target.value },
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="weight-of-individuals">
            <div id="weight-of-individuals">
              <label>Weight Servee Being Served?</label>
              <MDBInput
                type="textarea"
                className="text-white"
                value={servee.weight}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, weight: e.target.value },
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="hair-color-of-individuals">
            <div id="hair-color-of-individuals">
              <label>Hair Color of Servee Being Served?</label>
              <MDBInput
                type="textarea"
                className="text-white"
                value={servee.hairColor}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, hairColor: e.target.value },
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="eye-color-of-individuals">
            <div id="eye-color-of-individuals">
              <label>Eye Color of Servee Being Served?</label>
              <MDBInput
                type="textarea"
                className="text-white"
                value={servee.eyeColor}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, eyeColor: e.target.value },
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
                type="textarea"
                className="text-white"
                value={servee.physicalOutline}
                onChange={(e) =>
                  setServeesPhysicalDescription({
                    ...serveesPhysicalDescription,
                    [key]: { ...servee, physicalOutline: e.target.value },
                  })
                }
              />
            </div>
          </MDBCol>
          <MDBCol md="12 mb-4" id="image-of-individuals">
            <div id="image-of-individuals">
              <label>
                Servee Image <i>(If Available)</i>
              </label>
              <FileBase64
                multiple={false}
                onDone={(image) => handleSaveImage(image, key, servee)}
                accept=".jpg,.png"
              />
            </div>
          </MDBCol>
          <br></br>
        </>
      ))}
      <MDBCol>
        <QuestionaireAdditionalServeeTemplate
          serveesPhysicalDescription={serveesPhysicalDescription}
          setServeesPhysicalDescription={setServeesPhysicalDescription}
        />
      </MDBCol>
      <br></br>
    </>
  );
};
