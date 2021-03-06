import { Fragment, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { getUSStates, showToast } from "../utils";

export const QuestionaireAddressTemplate = ({
  serveeKey,
  setServiceDetails,
  mainAddressForService,
}) => {
  const [showModal, setShow] = useState(false);
  const [localServiceDetails, setLocalServiceDetails] = useState({
    locationType: "",
    address: {
      sameAsMainServiceAddress: false,
      street: "",
      unit: "",
      city: "",
      state: { us: "", other: "" },
      zipCode: "",
      isCountryNotUS: false,
      country: "United States",
    },
    typeOfServe: "",
    requireFirst24HourService: "",
    requireRushService: "",
    requireStakeOutService: "",
    ceaseDate: "",
    shouldSubServeToCompanion: "",
    shouldDropServe: "",
    shouldLeaveDoorTag: "",
    shouldPostDocsWithBand: "",
    isThereAnAgentOfService: "",
    agentsOfService: { 0: { firstName: "", middleName: "", lastName: "" } },
  });

  const handleUpdateIsSameAddress = () => {
    if (!localServiceDetails.address.sameAsMainServiceAddress) {
      setLocalServiceDetails({
        ...localServiceDetails,
        address: {
          ...mainAddressForService,
          sameAsMainServiceAddress:
            !localServiceDetails.address.sameAsMainServiceAddress,
        },
      });
    } else {
      setLocalServiceDetails({
        ...localServiceDetails,
        address: {
          ...localServiceDetails.address,
          sameAsMainServiceAddress:
            !localServiceDetails.address.sameAsMainServiceAddress,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!localServiceDetails.locationType.length) {
      showToast("Please service location type!", "warning");
    } else if (!localServiceDetails.address.street.length) {
      showToast("Please enter street address!", "warning");
    } else if (!localServiceDetails.address.city.length) {
      showToast("Please enter city address!", "warning");
    } else if (
      !localServiceDetails.state.us.length ||
      (localServiceDetails.state.us === "other" &&
        !localServiceDetails.state.other.length)
    ) {
      showToast("Please select/enter state address!", "warning");
    } else if (!localServiceDetails.address.zipCode.length) {
      showToast("Please enter zip code!", "warning");
    } else if (!localServiceDetails.address.country.length) {
      showToast("Please enter country address!", "warning");
    } else if (!localServiceDetails.typeOfServe.length) {
      showToast(
        "Please select the type of serve for the service address!",
        "warning"
      );
    } else if (
      typeof localServiceDetails.requireFirst24HourService !== "boolean"
    ) {
      showToast(
        "Please select if a service attempt should be made within the first 24 hours for the service address!",
        "warning"
      );
    } else if (typeof localServiceDetails.requireRushService !== "boolean") {
      showToast(
        "For the service address, please select if you require a rush service!",
        "warning"
      );
    } else if (
      typeof localServiceDetails.requireStakeOutService !== "boolean"
    ) {
      showToast(
        "For the service address, please select if you require a stake out service!",
        "warning"
      );
    } else if (!localServiceDetails.ceaseDate.length) {
      showToast(
        "For the service address, please provide a date when service attempts should cease!",
        "warning"
      );
    } else if (
      typeof localServiceDetails.shouldSubServeToCompanion !== "boolean"
    ) {
      showToast(
        "For the service address, please select if subservice is allowed!",
        "warning"
      );
    } else if (typeof localServiceDetails.shouldDropServe !== "boolean") {
      showToast(
        "For the service address, please select if drop/force serve is allowed!",
        "warning"
      );
    } else if (typeof localServiceDetails.shouldLeaveDoorTag !== "boolean") {
      showToast(
        "For the service address, please select if process server should leave a door tag!",
        "warning"
      );
    } else if (
      typeof localServiceDetails.shouldPostDocsWithBand !== "boolean"
    ) {
      showToast(
        "For the service address, please select if process server should post documents with a rubber band!",
        "warning"
      );
    } else if (
      typeof localServiceDetails.isThereAnAgentOfService !== "boolean"
    ) {
      showToast("Please select if there is an agent of service!", "warning");
    } else if (
      localServiceDetails.isThereAnAgentOfService &&
      !localServiceDetails.agentsOfService[0].firstName.length
    ) {
      showToast("Please enter the first name of agent of service!", "warning");
    } else if (
      localServiceDetails.isThereAnAgentOfService &&
      !localServiceDetails.agentsOfService[0].lastName.length
    ) {
      showToast("Please enter the last name of agent of service!", "warning");
    } else {
      setServiceDetails(localServiceDetails);
      setLocalServiceDetails({
        locationType: "",
        address: {
          sameAsMainServiceAddress: false,
          street: "",
          unit: "",
          city: "",
          state: { us: "", other: "" },
          zipCode: "",
          isCountryNotUS: false,
          country: "United States",
        },
        typeOfServe: "",
        requireFirst24HourService: "",
        requireRushService: "",
        requireStakeOutService: "",
        ceaseDate: "",
        shouldSubServeToCompanion: "",
        shouldDropServe: "",
        shouldLeaveDoorTag: "",
        shouldPostDocsWithBand: "",
        isThereAnAgentOfService: "",
        agentsOfService: { 0: { firstName: "", middleName: "", lastName: "" } },
      });
      setShow(false);
    }
  };

  const handleOnClickTypeOfService = (serviceType) => {
    if (serviceType === "personal") {
      setLocalServiceDetails({
        ...localServiceDetails,
        shouldSubServeToCompanion: false,
        typeOfServe: serviceType,
      });
    } else {
      setLocalServiceDetails({
        ...localServiceDetails,
        shouldSubServeToCompanion: "",
        typeOfServe: serviceType,
      });
    }
  };

  const handleOnChangeIsCountryNotUS = (isCountryNotUS) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : localServiceDetails.address.country;
    setLocalServiceDetails({
      ...localServiceDetails,
      address: {
        ...localServiceDetails.address,
        isCountryNotUS,
        country,
      },
    });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Fragment>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="primary w-75" onClick={handleShow}>
          + Add Additional Address for Service
        </Button>
      </div>
      <Modal size="lg" show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Additional Address for Service</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id="location-being-served">
            <Form.Label style={{ paddingLeft: 16 }}>
              What kind of location is being served?*
            </Form.Label>
            <Form.Control
              as="select"
              className="text-center p-2"
              style={{ marginLeft: 16, width: "95%" }}
              value={localServiceDetails.locationType}
              onChange={(e) =>
                setLocalServiceDetails({
                  ...localServiceDetails,
                  locationType: e.target.value,
                })
              }
            >
              <option value="">Please Select</option>
              <option value="residence">Residence</option>
              <option value="business">Business</option>
              <option value="unknown">Unknown</option>
            </Form.Control>
          </Form.Group>
          <MDBCol md="12" id="main-address-for-service">
            <div id="main-address-for-service">
              <label>Adding Address for Service</label>
              {serveeKey !== "0" && (
                <Form.Group
                  className="mb-3 mt-2"
                  controlId="sameAddressCheckbox"
                >
                  <Form.Check
                    checked={
                      localServiceDetails.address.sameAsMainServiceAddress
                    }
                    onChange={handleUpdateIsSameAddress}
                    type="checkbox"
                    label="Same as Main Address for Service"
                  />
                </Form.Group>
              )}
              <MDBInput
                type="text"
                hint="Street"
                disabled={localServiceDetails.address.sameAsMainServiceAddress}
                value={localServiceDetails.address.street}
                onChange={(e) =>
                  setLocalServiceDetails({
                    ...localServiceDetails,
                    address: {
                      ...localServiceDetails.address,
                      street: e.target.value,
                    },
                  })
                }
                required
              />
              <MDBInput
                type="text"
                hint="Unit"
                disabled={localServiceDetails.address.sameAsMainServiceAddress}
                value={localServiceDetails.address.unit}
                onChange={(e) =>
                  setLocalServiceDetails({
                    ...localServiceDetails,
                    address: {
                      ...localServiceDetails.address,
                      unit: e.target.value,
                    },
                  })
                }
              />
              <MDBInput
                type="text"
                hint="City"
                disabled={localServiceDetails.address.sameAsMainServiceAddress}
                value={localServiceDetails.address.city}
                onChange={(e) =>
                  setLocalServiceDetails({
                    ...localServiceDetails,
                    address: {
                      ...localServiceDetails.address,
                      city: e.target.value,
                    },
                  })
                }
                required
              />
              <MDBRow>
                <MDBCol style={{margin: "auto"}}>
                  <select
                    className={`browser-default custom-select w-100`}
                    value={localServiceDetails.address.state.us}
                    disabled={
                      localServiceDetails.address.sameAsMainServiceAddress
                    }
                    onChange={(e) =>
                      setLocalServiceDetails({
                        ...localServiceDetails,
                        address: {
                          ...localServiceDetails.address,
                          state: {
                            other:
                              e.target.value !== "other"
                                ? ""
                                : localServiceDetails.address.state.other,
                            us: e.target.value,
                          },
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
                {localServiceDetails.address.state.us === "other" && (
                  <MDBCol>
                    <MDBInput
                      type="text"
                      hint="State"
                      className="text-white"
                      disabled={
                        localServiceDetails.address.sameAsMainServiceAddress
                      }
                      value={localServiceDetails.address.state.other}
                      onChange={(e) =>
                        setLocalServiceDetails({
                          ...localServiceDetails,
                          address: {
                            ...localServiceDetails.address,
                            state: {
                              ...localServiceDetails.address.state,
                              other: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </MDBCol>
                )}
              </MDBRow>
              <MDBInput
                type="text"
                hint="Zip Code"
                disabled={localServiceDetails.address.sameAsMainServiceAddress}
                value={localServiceDetails.address.zipCode}
                onChange={(e) =>
                  setLocalServiceDetails({
                    ...localServiceDetails,
                    address: {
                      ...localServiceDetails.address,
                      zipCode: e.target.value,
                    },
                  })
                }
                required
              />
              <select
                className={`browser-default custom-select w-100 mt-2 ${
                  !localServiceDetails.address.isCountryNotUS && "mb-4"
                } p-2`}
                value={localServiceDetails.address.isCountryNotUS}
                disabled={localServiceDetails.address.sameAsMainServiceAddress}
                onChange={(e) => handleOnChangeIsCountryNotUS(e.target.value)}
              >
                <option value={false}>United States</option>
                <option value={true}>Other</option>
              </select>
              {localServiceDetails.address.isCountryNotUS && (
                <MDBInput
                  type="text"
                  hint="Country Name"
                  disabled={
                    localServiceDetails.address.sameAsMainServiceAddress
                  }
                  value={localServiceDetails.address.country}
                  onChange={(e) =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      address: {
                        ...localServiceDetails.address,
                        country: e.target.value,
                      },
                    })
                  }
                  required
                />
              )}
            </div>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-first-24-hour-service">
              <Form.Label>
                Is this a "normal serve" or a "personal serve"?*
              </Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Personal"
                  onClick={() => handleOnClickTypeOfService("personal")}
                  id="typeOfServeMP"
                  name="typeOfServeM"
                  checked={localServiceDetails.typeOfServe === "personal"}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="Normal"
                  onClick={() => handleOnClickTypeOfService("normal")}
                  id="typeOfServeMN"
                  name="typeOfServeM"
                  checked={localServiceDetails.typeOfServe === "normal"}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-first-24-hour-service">
              <Form.Label>
                Do you require a Service attempt within the first 24 hours of
                submission?*<i>(Additional Fee)</i>
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireFirst24HourService: true,
                    })
                  }
                  id="requireFirst24HourServiceMY"
                  name="requireFirst24HourServiceM"
                  checked={
                    localServiceDetails.requireFirst24HourService === true
                  }
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireFirst24HourService: false,
                    })
                  }
                  id="requireFirst24HourServiceMN"
                  name="requireFirst24HourServiceM"
                  checked={
                    localServiceDetails.requireFirst24HourService === false
                  }
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-rush-service">
              <Form.Label>
                Do You Require a Rush Service?* This is regarding service that
                needs to be served with 13 days or less <i>(Additional Fee)</i>
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireRushService: true,
                    })
                  }
                  id="requireRushServiceMY"
                  name="requireRushServiceM"
                  checked={localServiceDetails.requireRushService === true}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireRushService: false,
                    })
                  }
                  id="requireRushServiceMN"
                  name="requireRushServiceM"
                  checked={localServiceDetails.requireRushService === false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>
                Do You Require a Stake Out Service? <i>(Additional Fee)</i>*
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireStakeOutService: true,
                    })
                  }
                  id="requireStakeOutServiceMY"
                  name="requireStakeOutServiceM"
                  checked={localServiceDetails.requireStakeOutService === true}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      requireStakeOutService: false,
                    })
                  }
                  id="requireStakeOutServiceMN"
                  name="requireStakeOutServiceM"
                  checked={localServiceDetails.requireStakeOutService === false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          {/* 5th question pending */}
          <MDBCol md="12">
            <Form.Group id="service-ceasing-date">
              <Form.Label>
                Please provide a closing date for when all service attempts must
                cease. (Regular service time frame should be 2-5 weeks, unless
                otherwise specified)*
              </Form.Label>
              <Form.Control
                type="text"
                value={localServiceDetails.ceaseDate}
                onChange={(e) =>
                  setLocalServiceDetails({
                    ...localServiceDetails,
                    ceaseDate: e.target.value,
                  })
                }
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>
                Is a "Subservice" to a Co-Resident/Co-Worker after due diligence
                allowed? ("Small claims court" on first attempt depending on
                window of service and county. "Regular Service" after 4
                attempts, [after 3 attempts in California])*
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  disabled={localServiceDetails.typeOfServe === "personal"}
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldSubServeToCompanion: true,
                    })
                  }
                  id="shouldSubServeMY"
                  name="shouldSubServeM"
                  checked={
                    localServiceDetails.shouldSubServeToCompanion === true
                  }
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  disabled={localServiceDetails.typeOfServe === "personal"}
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldSubServeToCompanion: false,
                    })
                  }
                  id="shouldSubServeMN"
                  name="shouldSubServeM"
                  checked={
                    localServiceDetails.shouldSubServeToCompanion === false
                  }
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>
                Is a "Drop Serve/Force Serve" allowed? (Only once
                Residency/Employment is confirmed. Under the circumstances that
                the authorized individual refuses to accept documents upon
                contact/sub-service)*
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldDropServe: true,
                    })
                  }
                  id="shouldDropServeMY"
                  name="shouldDropServeM"
                  checked={localServiceDetails.shouldDropServe === true}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldDropServe: false,
                    })
                  }
                  id="shouldDropServeMN"
                  name="shouldDropServeM"
                  checked={localServiceDetails.shouldDropServe === false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>
                May the Process Server leave a door tag on the handle, or
                business card with their title and contact information?*
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldLeaveDoorTag: true,
                    })
                  }
                  id="shouldLeaveDoorTagMY"
                  name="shouldLeaveDoorTagM"
                  checked={localServiceDetails.shouldLeaveDoorTag === true}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldLeaveDoorTag: false,
                    })
                  }
                  id="shouldLeaveDoorTagMN"
                  name="shouldLeaveDoorTagM"
                  checked={localServiceDetails.shouldLeaveDoorTag === false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="require-stake-out-service">
              <Form.Label>
                May our Process Server post documents with a rubber band on the
                door handle, once due diligence has been met? Verify with Judge
                if permissible (varies by case)*
              </Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  label="Yes"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldPostDocsWithBand: true,
                    })
                  }
                  id="shouldPostDocsWithBandMY"
                  name="shouldPostDocsWithBandM"
                  checked={localServiceDetails.shouldPostDocsWithBand === true}
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  label="No"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      shouldPostDocsWithBand: false,
                    })
                  }
                  id="shouldPostDocsWithBandMN"
                  name="shouldPostDocsWithBandM"
                  checked={localServiceDetails.shouldPostDocsWithBand === false}
                />
              </div>
            </Form.Group>
          </MDBCol>
          <MDBCol md="12" id="agent-of-service">
            <Form.Group id="agent-of-service">
              <Form.Label>Is There an Agent of Service?*</Form.Label>
              <br />
              <div style={{ display: "flex" }}>
                <Form.Check
                  className="ml-2"
                  type="radio"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      isThereAnAgentOfService: true,
                    })
                  }
                  id={"agentOfServiceY"}
                  name={"agentOfService"}
                  checked={localServiceDetails.isThereAnAgentOfService === true}
                  label="Yes"
                />
                <Form.Check
                  className="ml-4"
                  type="radio"
                  onClick={() =>
                    setLocalServiceDetails({
                      ...localServiceDetails,
                      isThereAnAgentOfService: false,
                    })
                  }
                  id={"agentOfServiceN"}
                  name={"agentOfService"}
                  checked={
                    localServiceDetails.isThereAnAgentOfService === false
                  }
                  label="No"
                />
              </div>
              <br />
            </Form.Group>
          </MDBCol>
          {localServiceDetails.isThereAnAgentOfService && (
            <>
              <MDBCol md="12" id="if-yes-list-full-name">
                <Form.Label>Full Name to Agent of Service</Form.Label>
                <br />
                <MDBCol md="12">
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={localServiceDetails.agentsOfService[0].firstName}
                      onChange={(e) =>
                        setLocalServiceDetails({
                          ...localServiceDetails,
                          agentsOfService: {
                            0: {
                              ...localServiceDetails.agentsOfService[0],
                              firstName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="12">
                  <Form.Group>
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={localServiceDetails.agentsOfService.middleName}
                      onChange={(e) =>
                        setLocalServiceDetails({
                          ...localServiceDetails,
                          agentsOfService: {
                            0: {
                              ...localServiceDetails.agentsOfService[0],
                              middleName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol md="12">
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={localServiceDetails.agentsOfService.lastName}
                      onChange={(e) =>
                        setLocalServiceDetails({
                          ...localServiceDetails,
                          agentsOfService: {
                            0: {
                              ...localServiceDetails.agentsOfService[0],
                              lastName: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Group>
                </MDBCol>
              </MDBCol>
              <br></br>
            </>
          )}
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
