import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import { Form } from "react-bootstrap";
import { getUSStates } from "../utils";

function Business({
  specialty,
  setSpecialty,
  firmName,
  setFirmName,
  firmAddress,
  setFirmAddress,
  jobTitle,
  setJobTitle,
  ...props
}) {
  return (
    <MDBRow>
      <h2 className="justify-content-center">Business / Company Section</h2>
      <MDBCol md="12 w-100">
        <br></br>
        <MDBRow md="10" id="business-form-toggle">
          <MDBCol md="12">
            <Form.Group id="company-name">
              <Form.Label>Business Full Name</Form.Label>
              <Form.Control
                type="text"
                value={firmName}
                onChange={(e) => setFirmName(e.target.value)}
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-street">
              <Form.Label>Business Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street"
                value={firmAddress.street}
                onChange={(e) =>
                  setFirmAddress({ ...firmAddress, street: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="company-city">
              <Form.Control
                type="text"
                placeholder="City"
                value={firmAddress.city}
                onChange={(e) =>
                  setFirmAddress({ ...firmAddress, city: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="company-state">
              <MDBRow>
                <MDBCol>
                  <select
                    className={`browser-default custom-select w-100`}
                    value={firmAddress.state.us}
                    onChange={(e) =>
                      setFirmAddress({
                        ...firmAddress,
                        state: {
                          other:
                            e.target.value !== "other"
                              ? ""
                              : firmAddress.state.other,
                          us: e.target.value,
                        },
                      })
                    }
                  >
                    <option value="" disabled>
                      Please select state
                    </option>
                    {getUSStates().map((state) => (
                      <option value={state.value}>{state.name}</option>
                    ))}
                    <option value="other">Other</option>
                  </select>
                </MDBCol>
                {firmAddress.state.us === "other" && (
                  <MDBCol>
                    <Form.Control
                      type="text"
                      placeholder="State"
                      value={firmAddress.state.other}
                      onChange={(e) =>
                        setFirmAddress({
                          ...firmAddress,
                          state: {
                            ...firmAddress.state,
                            other: e.target.value,
                          },
                        })
                      }
                    />
                  </MDBCol>
                )}
              </MDBRow>
            </Form.Group>
            <Form.Group id="company-zip">
              <Form.Control
                type="text"
                placeholder="Zip Code"
                value={firmAddress.zipCode}
                onChange={(e) =>
                  setFirmAddress({ ...firmAddress, zipCode: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group id="company-country">
              <Form.Control
                type="text"
                placeholder="Country"
                value={firmAddress.country}
                onChange={(e) =>
                  setFirmAddress({ ...firmAddress, country: e.target.value })
                }
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-specialty">
              <Form.Label>
                Business Specialty (What is the nature of your business?)
              </Form.Label>
              <Form.Control
                type="text"
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-job-title">
              <Form.Label>
                Business Role (your current position ie. Owner, Partner, Staff
                Member, etc.){" "}
              </Form.Label>
              <Form.Control
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <br></br>
      <br></br>
    </MDBRow>
  );
}

export default Business;
