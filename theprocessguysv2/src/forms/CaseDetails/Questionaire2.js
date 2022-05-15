import { Button, Form } from "react-bootstrap";
import { MDBRow, MDBCol } from "mdbreact";
import { Link as RSLink } from "react-scroll";
import { getUSStates } from "../../utils";

export const Questionaire2 = (props) => {
  const {
    isFormDisabled,
    isOrRepresentingPlaintiff,
    setIsOrRepresentingPlaintiff,
    shouldPGFillPlaintiffInfo,
    setShouldPGFillPlaintiffInfo,
    plaintiffsDetail,
    setPlaintiffsDetail,
    numberOfAttorneyPlaintiff,
    setNumberOfAttorneyPlaintiff,
    numberOfAttorneysRepresentingPlaintiff,
    setNumberOfAttorneysRepresentingPlaintiff,
    plaintiffAttorneysDetail,
    setPlaintiffAttorneysDetail,
  } = props;

  const handleOnChangePhoneNumber = (
    key,
    phoneKey,
    attorney,
    newPhoneNumber
  ) => {
    if (
      /^\s*\d{3}\s*$/.test(newPhoneNumber) &&
      newPhoneNumber.length > attorney.phoneNumbers[phoneKey].phoneNumber.length
    ) {
      setPlaintiffAttorneysDetail({
        ...plaintiffAttorneysDetail,
        [key]: {
          ...attorney,
          phoneNumbers: {
            ...attorney.phoneNumbers,
            [phoneKey]: {
              ...attorney.phoneNumbers[phoneKey],
              phoneNumber: `(${newPhoneNumber}) `,
            },
          },
        },
      });
    } else if (
      /^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) &&
      newPhoneNumber.length > attorney.phoneNumbers[phoneKey].phoneNumber.length
    ) {
      setPlaintiffAttorneysDetail({
        ...plaintiffAttorneysDetail,
        [key]: {
          ...attorney,
          phoneNumbers: {
            ...attorney.phoneNumbers,
            [phoneKey]: {
              ...attorney.phoneNumbers[phoneKey],
              phoneNumber: `${newPhoneNumber}-`,
            },
          },
        },
      });
    } else if (
      newPhoneNumber.length >= 7 &&
      !newPhoneNumber.includes("(") &&
      !newPhoneNumber.includes(")") &&
      !newPhoneNumber.includes(" ") &&
      !newPhoneNumber.includes("-")
    ) {
      setPlaintiffAttorneysDetail({
        ...plaintiffAttorneysDetail,
        [key]: {
          ...attorney,
          phoneNumbers: {
            ...attorney.phoneNumbers,
            [phoneKey]: {
              ...attorney.phoneNumbers[phoneKey],
              phoneNumber: `(${newPhoneNumber.slice(
                0,
                3
              )}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`,
            },
          },
        },
      });
    } else {
      setPlaintiffAttorneysDetail({
        ...plaintiffAttorneysDetail,
        [key]: {
          ...attorney,
          phoneNumbers: {
            ...attorney.phoneNumbers,
            [phoneKey]: {
              ...attorney.phoneNumbers[phoneKey],
              phoneNumber: newPhoneNumber,
            },
          },
        },
      });
    }
  };

  const pAOnChangeIsCountryNotUS = (isCountryNotUS, key, plaintiff) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : plaintiff.address.country;
    setPlaintiffsDetail({
      ...plaintiffsDetail,
      [key]: {
        ...plaintiff,
        address: {
          ...plaintiff.address,
          isCountryNotUS,
          country,
        },
      },
    });
  };

  const aAOnChangeIsCountryNotUS = (isCountryNotUS, key, attorney) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : attorney.address.country;
    setPlaintiffAttorneysDetail({
      ...plaintiffAttorneysDetail,
      [key]: {
        ...attorney,
        address: {
          ...attorney.address,
          isCountryNotUS,
          country,
        },
      },
    });
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
      <br />
      <MDBCol md="12" id="is-or-representing-plaintiff-col">
        <Form.Group id="is-or-representing-plaintiff-cont">
          <Form.Label>
            Are you representing the Plaintiff, or are yourself the Plaintiff?*
          </Form.Label>
          <br />
          <div style={{ display: "flex" }}>
            <Form.Check
              disabled={isFormDisabled}
              className="ml-2"
              type="radio"
              label="Yes"
              onClick={() => setIsOrRepresentingPlaintiff(true)}
              id="isPlaintiffY"
              name="isOrRepresentingPlaintiff"
              checked={isOrRepresentingPlaintiff === true}
            />
            <Form.Check
              disabled={isFormDisabled}
              className="ml-4"
              type="radio"
              label="No"
              onClick={() => setIsOrRepresentingPlaintiff(false)}
              id="isPlaintiffN"
              name="isOrRepresentingPlaintiff"
              checked={isOrRepresentingPlaintiff === false}
            />
          </div>
          <br />
          {isOrRepresentingPlaintiff ? (
            <i>
              Please fill out attorney information pertaining to your counsel!
              (If you have any)
            </i>
          ) : (
            <i>
              Opposing counsel does not need to be filled out, if information
              isn't available
            </i>
          )}
        </Form.Group>
        <br />
      </MDBCol>
      <center>
        {!isFormDisabled &&
          (shouldPGFillPlaintiffInfo ? (
            <Button
              variant="secondary"
              onClick={() =>
                setShouldPGFillPlaintiffInfo(!shouldPGFillPlaintiffInfo)
              }
              className="d-flex align-items-center"
            >
              <span style={{ color: "white" }} className="mb-0 mt-0">
                Fill the form yourself
              </span>
            </Button>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <RSLink
                activeClass="active"
                to="next-btn"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={300}
              >
                <Button
                  onClick={() =>
                    setShouldPGFillPlaintiffInfo(!shouldPGFillPlaintiffInfo)
                  }
                >
                  <span style={{ color: "white" }} className="mb-0 mt-0">
                    Request form fill and skip
                  </span>
                </Button>
              </RSLink>
            </div>
          ))}
      </center>
      <p className="text-center">
        {shouldPGFillPlaintiffInfo
          ? 'Click "Fill the form yourself" button to enable the input fields to fill the form yourself instead'
          : 'Click "Request form fill and skip" button to skip filling this section out, leave it for our team to complete!'}
      </p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-plaintiff-listed">
        <Form.Group
          style={{ display: "flex", alignItems: "center" }}
          id="number-of-plaintiff-listed"
        >
          <Form.Label>Number of Plaintiff(s) listed</Form.Label>
          <Form.Control
            className="w-50 m-4 text-center p-2"
            as="select"
            value={numberOfAttorneyPlaintiff}
            disabled={isFormDisabled || shouldPGFillPlaintiffInfo}
            onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
          >
            <option value="">Please Select</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Control>
          <br></br>
        </Form.Group>
      </MDBCol>
      {Object.entries(plaintiffsDetail).map(([key, plaintiff]) => (
        <>
          <MDBCol md="12">
            <Form.Label style={{ fontWeight: "bold" }}>
              Plaintiff {parseInt(key) + 1} Full Name
            </Form.Label>
            <MDBRow md="12">
              <MDBCol md="6" id="first-name">
                <Form.Group id="first-name-g">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          fullName: {
                            ...plaintiff.fullName,
                            firstName: e.target.value,
                          },
                        },
                      })
                    }
                    value={plaintiff.fullName.firstName}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6" id="middle-name">
                <Form.Group id="middle-name-g">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          fullName: {
                            ...plaintiff.fullName,
                            middleName: e.target.value,
                          },
                        },
                      })
                    }
                    value={plaintiff.fullName.middleName}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6" id="last-name">
                <Form.Group id="last-name-g">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          fullName: {
                            ...plaintiff.fullName,
                            lastName: e.target.value,
                          },
                        },
                      })
                    }
                    value={plaintiff.fullName.lastName}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6" id="suffix">
                <Form.Group id="suffix-g">
                  <Form.Label>Suffix</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          fullName: {
                            ...plaintiff.fullName,
                            suffix: e.target.value,
                          },
                        },
                      })
                    }
                    value={plaintiff.fullName.suffix}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="12">
            <MDBRow>
              <MDBCol>
                <Form.Label style={{ fontWeight: "bold" }}>
                  Plaintiff {parseInt(key) + 1} Address
                </Form.Label>
                <Form.Group id="attorney-full-firm-address">
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={plaintiff.address.street}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          address: {
                            ...plaintiff.address,
                            street: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol bottom>
                <Form.Group id="attorney-full-firm-address">
                  <Form.Label>Unit</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={plaintiff.address.unit}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          address: {
                            ...plaintiff.address,
                            unit: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Form.Group id="attorney-full-firm-address">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={plaintiff.address.city}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          address: {
                            ...plaintiff.address,
                            city: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol>
                    <Form.Group id="attorney-full-firm-address">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as="select"
                        value={plaintiff.address.state.us}
                        disabled={isFormDisabled}
                        onChange={(e) =>
                          setPlaintiffsDetail({
                            ...plaintiffsDetail,
                            [key]: {
                              ...plaintiff,
                              address: {
                                ...plaintiff.address,
                                state: {
                                  other:
                                    e.target.value !== "other"
                                      ? ""
                                      : plaintiff.address.state.other,
                                  us: e.target.value,
                                },
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
                      </Form.Control>
                    </Form.Group>
                  </MDBCol>
                  {plaintiff.address.state.us === "other" && (
                    <MDBCol>
                      <Form.Group id="attorney-full-firm-address">
                        <Form.Label>State Name</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={isFormDisabled}
                          value={plaintiff.address.state.other}
                          onChange={(e) =>
                            setPlaintiffsDetail({
                              ...plaintiffsDetail,
                              [key]: {
                                ...plaintiff,
                                address: {
                                  ...plaintiff.address,
                                  state: {
                                    ...plaintiff.address.state,
                                    other: e.target.value,
                                  },
                                },
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </MDBCol>
                  )}
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Form.Group id="attorney-full-firm-address">
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={plaintiff.address.zipCode}
                    onChange={(e) =>
                      setPlaintiffsDetail({
                        ...plaintiffsDetail,
                        [key]: {
                          ...plaintiff,
                          address: {
                            ...plaintiff.address,
                            zipCode: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <Form.Group id="country-dropdown">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    as="select"
                    value={plaintiff.address.isCountryNotUS}
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      pAOnChangeIsCountryNotUS(e.target.value, key, plaintiff)
                    }
                  >
                    <option value={false}>United States</option>
                    <option value={true}>Other</option>
                  </Form.Control>
                </Form.Group>
              </MDBCol>
              {plaintiff.address.isCountryNotUS && (
                <MDBCol>
                  <Form.Group id="attorney-full-firm-address">
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={plaintiff.address.country}
                      onChange={(e) =>
                        setPlaintiffsDetail({
                          ...plaintiffsDetail,
                          [key]: {
                            ...plaintiff,
                            address: {
                              ...plaintiff.address,
                              country: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Group>
                </MDBCol>
              )}
            </MDBRow>
          </MDBCol>
        </>
      ))}
      <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
        <Form.Group
          style={{ display: "flex", alignItems: "center" }}
          id="number-of-attorney-representing-plaintiff"
        >
          <Form.Label>
            Number of Attorney's Representing the Plaintiff
          </Form.Label>
          <Form.Control
            className="w-50 m-4 text-center p-2"
            as="select"
            value={numberOfAttorneysRepresentingPlaintiff}
            disabled={isFormDisabled || shouldPGFillPlaintiffInfo}
            onChange={(e) =>
              setNumberOfAttorneysRepresentingPlaintiff(e.target.value)
            }
          >
            <option value="">Please Select</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </Form.Control>
          <br></br>
        </Form.Group>
      </MDBCol>
      {Object.entries(plaintiffAttorneysDetail).map(([key, attorney]) => (
        <>
          <MDBCol md="12">
            <Form.Label style={{ fontWeight: "bold" }}>
              Attorney {parseInt(key) + 1} Full Name
            </Form.Label>
            <MDBRow md="12" id="plaintiff-attorney-name">
              <MDBCol md="6">
                <Form.Group>
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.fullName.firstName}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          fullName: {
                            ...attorney.fullName,
                            firstName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6">
                <Form.Group>
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.fullName.middleName}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          fullName: {
                            ...attorney.fullName,
                            middleName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6">
                <Form.Group>
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.fullName.lastName}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          fullName: {
                            ...attorney.fullName,
                            lastName: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol md="6">
                <Form.Group>
                  <Form.Label>Suffix</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.fullName.suffix}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          fullName: {
                            ...attorney.fullName,
                            suffix: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBCol md="12" id="plaintiff-attorney-bar-number">
            <Form.Group id="plaintiff-attorney-bar-number">
              <Form.Label>Bar Number</Form.Label>
              <Form.Control
                type="text"
                disabled={isFormDisabled}
                value={attorney.barNumber}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: { ...attorney, barNumber: e.target.value },
                  })
                }
              />
            </Form.Group>
          </MDBCol>
          <MDBCol md="12" id="phone-numbers-of-individuals">
            <Form.Label>Phone Number(s) for calls</Form.Label>
            {Object.entries(attorney.phoneNumbers).map(
              ([phoneKey, phoneObj]) => (
                <MDBRow>
                  <MDBCol bottom md="6">
                    <Form.Group>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        type="text"
                        disabled={isFormDisabled}
                        value={phoneObj.phoneNumber}
                        onChange={(e) =>
                          handleOnChangePhoneNumber(
                            key,
                            phoneKey,
                            attorney,
                            e.target.value
                          )
                        }
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol md="6">
                    <Form.Group>
                      <Form.Label>
                        What kind of phone number is this?
                      </Form.Label>
                      <Form.Control
                        as="select"
                        disabled={isFormDisabled}
                        className="w-75 m-4 text-center p-2"
                        value={phoneObj.type}
                        onChange={(e) =>
                          setPlaintiffAttorneysDetail({
                            ...plaintiffAttorneysDetail,
                            [key]: {
                              ...attorney,
                              phoneNumbers: {
                                ...attorney.phoneNumbers,
                                [phoneKey]: {
                                  ...attorney.phoneNumbers[phoneKey],
                                  type: e.target.value,
                                },
                              },
                            },
                          })
                        }
                      >
                        <label caret color="white">
                          Please Select
                        </label>
                        <option value="">Please Select</option>
                        <option value="home">Home</option>
                        <option value="office">Office</option>
                        <option value="mobile">Mobile</option>
                        <option value="unknown">Unknown</option>
                      </Form.Control>
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
              )
            )}
            {!isFormDisabled && (
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setPlaintiffAttorneysDetail({
                      ...plaintiffAttorneysDetail,
                      [key]: {
                        ...attorney,
                        phoneNumbers: {
                          ...attorney.phoneNumbers,
                          [Object.keys(attorney.phoneNumbers).length]: {
                            phoneNumber: "",
                            type: "",
                          },
                        },
                      },
                    })
                  }
                >
                  + Add another phone number
                </button>
              </div>
            )}
          </MDBCol>
          <MDBRow md="12" id="plaintiff-fax-number-optional">
            <MDBCol md="6">
              <Form.Group id="plaintiff-fax-number-optional-g">
                <Form.Label>Fax Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={attorney.faxNumber}
                  onChange={(e) =>
                    setPlaintiffAttorneysDetail({
                      ...plaintiffAttorneysDetail,
                      [key]: { ...attorney, faxNumber: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="6" id="plaintiff-attorney-email">
              <Form.Group id="plaintiff-attorney-email-g">
                <Form.Label>Attorney E-Mail</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={attorney.email}
                  onChange={(e) =>
                    setPlaintiffAttorneysDetail({
                      ...plaintiffAttorneysDetail,
                      [key]: { ...attorney, email: e.target.value },
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <MDBCol md="12" id="plaintiff-attorney-office-address">
            <Form.Label style={{ fontWeight: "bold" }}>Firm Address</Form.Label>
            <MDBRow>
              <MDBCol>
                <Form.Group>
                  <Form.Label>Street</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.address.street}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          address: {
                            ...attorney.address,
                            street: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <Form.Group>
                  <Form.Label>Unit</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.address.unit}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          address: {
                            ...attorney.address,
                            unit: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Form.Group>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.address.city}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          address: {
                            ...attorney.address,
                            city: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <MDBRow>
                  <MDBCol>
                    <Form.Group id="attorney-full-firm-address">
                      <Form.Label>State</Form.Label>
                      <Form.Control
                        as="select"
                        value={attorney.address.state.us}
                        disabled={isFormDisabled}
                        onChange={(e) =>
                          setPlaintiffAttorneysDetail({
                            ...plaintiffAttorneysDetail,
                            [key]: {
                              ...attorney,
                              address: {
                                ...attorney.address,
                                state: {
                                  other:
                                    e.target.value !== "other"
                                      ? ""
                                      : attorney.address.state.other,
                                  us: e.target.value,
                                },
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
                      </Form.Control>
                    </Form.Group>
                  </MDBCol>
                  {attorney.address.state.us === "other" && (
                    <MDBCol>
                      <Form.Group id="attorney-full-firm-address">
                        <Form.Label>State Name</Form.Label>
                        <Form.Control
                          type="text"
                          disabled={isFormDisabled}
                          value={attorney.address.state.other}
                          onChange={(e) =>
                            setPlaintiffAttorneysDetail({
                              ...plaintiffAttorneysDetail,
                              [key]: {
                                ...attorney,
                                address: {
                                  ...attorney.address,
                                  state: {
                                    ...attorney.address.state,
                                    other: e.target.value,
                                  },
                                },
                              },
                            })
                          }
                        />
                      </Form.Group>
                    </MDBCol>
                  )}
                </MDBRow>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol>
                <Form.Group>
                  <Form.Label>Zip Code</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={isFormDisabled}
                    value={attorney.address.zipCode}
                    onChange={(e) =>
                      setPlaintiffAttorneysDetail({
                        ...plaintiffAttorneysDetail,
                        [key]: {
                          ...attorney,
                          address: {
                            ...attorney.address,
                            zipCode: e.target.value,
                          },
                        },
                      })
                    }
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol>
                <Form.Group id="country-dropdown">
                  <Form.Label>Country</Form.Label>
                  <Form.Control
                    as="select"
                    value={attorney.address.isCountryNotUS}
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      aAOnChangeIsCountryNotUS(e.target.value, key, attorney)
                    }
                  >
                    <option value={false}>United States</option>
                    <option value={true}>Other</option>
                  </Form.Control>
                </Form.Group>
              </MDBCol>
              {attorney.address.isCountryNotUS && (
                <MDBCol>
                  <Form.Group>
                    <Form.Label>Country Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={attorney.address.country}
                      onChange={(e) =>
                        setPlaintiffAttorneysDetail({
                          ...plaintiffAttorneysDetail,
                          [key]: {
                            ...attorney,
                            address: {
                              ...attorney.address,
                              country: e.target.value,
                            },
                          },
                        })
                      }
                    />
                  </Form.Group>
                </MDBCol>
              )}
            </MDBRow>
          </MDBCol>
        </>
      ))}
      <br />
    </>
  );
};
