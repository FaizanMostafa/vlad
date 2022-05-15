import { Button } from "react-bootstrap";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { Link as RSLink } from "react-scroll";
import { getUSStates } from "../../utils";

export const Questionaire2 = (props) => {
  const {
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
      <h4 className="text-center mb-4 mt-5">
        <u>
          In the following two sections, information regarding both parties is
          required. Councel representing your party is required, and please
          provide as much information about opposing counsel as possible!
        </u>
         
      </h4>
      <br></br>
      <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
      <br></br>
      <MDBCol md="12" id="is-or-representing-plaintiff-col">
        <div id="is-or-representing-plaintiff-cont">
          <label>
            Are you representing the Plaintiff, or are yourself the Plaintiff?*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setIsOrRepresentingPlaintiff(true)}
            id="isPlaintiffY"
            name="isOrRepresentingPlaintiff"
            checked={isOrRepresentingPlaintiff === true}
          />
          <label className="ml-2" for="isPlaintiffY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setIsOrRepresentingPlaintiff(false)}
            id="isPlaintiffN"
            name="isOrRepresentingPlaintiff"
            checked={isOrRepresentingPlaintiff === false}
          />
          <label className="ml-2" for="isPlaintiffN">
            No
          </label>
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
        </div>
        <br />
      </MDBCol>
      <center>
        {shouldPGFillPlaintiffInfo ? (
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
        )}
      </center>
      <p className="text-center">
        {shouldPGFillPlaintiffInfo
          ? 'Click "Fill the form yourself" button to enable the input fields to fill the form yourself instead'
          : 'Click "Request form fill and skip" button to skip filling this section out, leave it for our team to complete!'}
      </p>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-plaintiff-listed">
        <div id="number-of-plaintiff-listed">
          <label>Number of Plaintiff(s) listed?*</label>
          <select
            className="w-75 m-4 text-center p-2"
            value={numberOfAttorneyPlaintiff}
            disabled={shouldPGFillPlaintiffInfo}
            onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
            required
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
          </select>
          <br></br>
        </div>
      </MDBCol>
      {Object.entries(plaintiffsDetail).map(([key, plaintiff]) => (
        <>
          <MDBCol md="12" id="plaintiff-full-name">
            <div id="plaintiff-full-name">
              <label style={{ fontWeight: "bold" }}>
                Plaintiff{" "}
                {Object.keys(plaintiffsDetail).length > 1 && Number(key) + 1}{" "}
                Full Name*
              </label>
              <MDBInput
                type="text"
                hint="First Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.fullName.firstName}
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
                required
              />
              <MDBInput
                type="text"
                hint="Middle Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.fullName.middleName}
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
              />
              <MDBInput
                type="text"
                hint="Last Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.fullName.lastName}
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
                required
              />
              <MDBInput
                type="text"
                hint="Suffix"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.fullName.suffix}
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
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="plaintiff-address">
            <div id="plaintiff-address">
              <label style={{ fontWeight: "bold" }}>
                Plaintiff{" "}
                {Object.keys(plaintiffsDetail).length > 1 && Number(key) + 1}{" "}
                Address*
              </label>
              <MDBInput
                type="text"
                hint="Street"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.address.street}
                onChange={(e) =>
                  setPlaintiffsDetail({
                    ...plaintiffsDetail,
                    [key]: {
                      ...plaintiff,
                      address: { ...plaintiff.address, street: e.target.value },
                    },
                  })
                }
                required
              />
              <MDBInput
                type="text"
                hint="Unit"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.address.unit}
                onChange={(e) =>
                  setPlaintiffsDetail({
                    ...plaintiffsDetail,
                    [key]: {
                      ...plaintiff,
                      address: { ...plaintiff.address, unit: e.target.value },
                    },
                  })
                }
              />
              <MDBInput
                type="text"
                hint="City"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.address.city}
                onChange={(e) =>
                  setPlaintiffsDetail({
                    ...plaintiffsDetail,
                    [key]: {
                      ...plaintiff,
                      address: { ...plaintiff.address, city: e.target.value },
                    },
                  })
                }
                required
              />
              <MDBRow>
                <MDBCol style={{margin: "auto"}}>
                  <select
                    className={`browser-default custom-select w-100`}
                    value={plaintiff.address.state.us}
                    disabled={shouldPGFillPlaintiffInfo}
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
                  </select>
                </MDBCol>
                {plaintiff.address.state.us === "other" && (
                  <MDBCol>
                    <MDBInput
                      type="text"
                      hint="State"
                      className="text-white"
                      disabled={shouldPGFillPlaintiffInfo}
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
                  </MDBCol>
                )}
              </MDBRow>
              <MDBInput
                type="text"
                hint="Zip Code"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
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
                required
              />
              <select
                className={`w-100 mt-2 ${
                  !plaintiff.address.isCountryNotUS && "mb-4"
                } p-2`}
                disabled={shouldPGFillPlaintiffInfo}
                value={plaintiff.address.isCountryNotUS}
                onChange={(e) =>
                  pAOnChangeIsCountryNotUS(e.target.value, key, plaintiff)
                }
                required
              >
                <option value={false}>United States</option>
                <option value={true}>Other</option>
              </select>
              {plaintiff.address.isCountryNotUS && (
                <MDBInput
                  type="text"
                  hint="Country Name"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
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
              )}
            </div>
            {Object.keys(plaintiffsDetail).length > 1 &&
              Number(key) !== Object.keys(plaintiffsDetail).length - 1 && (
                <hr />
              )}
          </MDBCol>
        </>
      ))}
      <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
        <div id="number-of-attorney-representing-plaintiff">
          <label>Number of Attorney's Representing the Plaintiff?*</label>
          <select
            className="w-75 m-4 text-center p-2"
            value={numberOfAttorneysRepresentingPlaintiff}
            disabled={shouldPGFillPlaintiffInfo}
            onChange={(e) =>
              setNumberOfAttorneysRepresentingPlaintiff(e.target.value)
            }
            required
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
          </select>
          <br></br>
        </div>
      </MDBCol>
      {Object.entries(plaintiffAttorneysDetail).map(([key, attorney]) => (
        <>
          <MDBCol md="12" id="plaintiff-attorney-name">
            <div id="plaintiff-attorney-name">
              <label style={{ fontWeight: "bold" }}>
                Attorney{" "}
                {Object.keys(plaintiffAttorneysDetail).length > 1 &&
                  Number(key) + 1}{" "}
                Full Name{numberOfAttorneysRepresentingPlaintiff !== "0" && "*"}
              </label>
              <MDBInput
                type="text"
                hint="First Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
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
                required
              />
              <MDBInput
                type="text"
                hint="Middle Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
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
              <MDBInput
                type="text"
                hint="Last Name"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
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
                required
              />
              <MDBInput
                type="text"
                hint="Suffix"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
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
            </div>
          </MDBCol>
          <MDBCol md="12" id="plaintiff-attorney-bar-number">
            <div id="plaintiff-attorney-bar-number">
              <label>
                Bar Number
                {numberOfAttorneysRepresentingPlaintiff !== "0" && "*"}
              </label>
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={attorney.barNumber}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: { ...attorney, barNumber: e.target.value },
                  })
                }
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="phone-numbers-of-individuals">
            <label>Phone Number(s) for calls</label>
            {Object.entries(attorney.phoneNumbers).map(
              ([phoneKey, phoneObj]) => (
                <MDBRow>
                  <MDBCol bottom md="6">
                    <MDBInput
                      hint="(###) ###-####"
                      className="text-white"
                      value={phoneObj.phoneNumber}
                      onChange={(e) =>
                        handleOnChangePhoneNumber(
                          key,
                          phoneKey,
                          attorney,
                          e.target.value
                        )
                      }
                      // onChange={(e)=>setPlaintiffAttorneysDetail({...plaintiffAttorneysDetail, [key]: {...attorney, phoneNumbers: {...attorney.phoneNumbers, [phoneKey]: {...attorney.phoneNumbers[phoneKey], phoneNumber: e.target.value}}}})}
                    />
                  </MDBCol>
                  <MDBCol md="6">
                    <label>What kind of phone number is this?</label>
                    <select
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
                      required
                    >
                      <label caret color="white">
                        Please Select
                      </label>
                      <option value="">Please Select</option>
                      <option value="home">Home</option>
                      <option value="office">Office</option>
                      <option value="mobile">Mobile</option>
                      <option value="unknown">Unknown</option>
                    </select>
                  </MDBCol>
                </MDBRow>
              )
            )}
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
          </MDBCol>
          <MDBCol md="12" id="plaintiff-fax-number-optional">
            <div id="plaintiff-fax-number-optional">
              <label>Fax Number (Optional)</label>
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={attorney.faxNumber}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: { ...attorney, faxNumber: e.target.value },
                  })
                }
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="plaintiff-attorney-email">
            <div id="plaintiff-attorney-email">
              <label>
                Attorney E-Mail
                {numberOfAttorneysRepresentingPlaintiff !== "0" && "*"}
              </label>
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                value={attorney.email}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: { ...attorney, email: e.target.value },
                  })
                }
                required
              />
            </div>
          </MDBCol>
          <MDBCol md="12" id="plaintiff-attorney-office-address">
            <div id="plaintiff-attorney-office-address">
              <label>
                Firm Address
                {numberOfAttorneysRepresentingPlaintiff !== "0" && "*"}
              </label>
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                hint="Street"
                value={attorney.address.street}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: {
                      ...attorney,
                      address: { ...attorney.address, street: e.target.value },
                    },
                  })
                }
                required
              />
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                hint="Unit"
                value={attorney.address.unit}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: {
                      ...attorney,
                      address: { ...attorney.address, unit: e.target.value },
                    },
                  })
                }
              />
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                hint="City"
                value={attorney.address.city}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: {
                      ...attorney,
                      address: { ...attorney.address, city: e.target.value },
                    },
                  })
                }
                required
              />
              <MDBRow>
                <MDBCol style={{margin: "auto"}}>
                  <select
                    className={`browser-default custom-select w-100`}
                    value={attorney.address.state.us}
                    disabled={shouldPGFillPlaintiffInfo}
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
                  </select>
                </MDBCol>
                {attorney.address.state.us === "other" && (
                  <MDBCol>
                    <MDBInput
                      type="text"
                      hint="State"
                      className="text-white"
                      disabled={shouldPGFillPlaintiffInfo}
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
                  </MDBCol>
                )}
              </MDBRow>
              <MDBInput
                type="text"
                className="text-white"
                disabled={shouldPGFillPlaintiffInfo}
                hint="Zip Code"
                value={attorney.address.zipCode}
                onChange={(e) =>
                  setPlaintiffAttorneysDetail({
                    ...plaintiffAttorneysDetail,
                    [key]: {
                      ...attorney,
                      address: { ...attorney.address, zipCode: e.target.value },
                    },
                  })
                }
                required
              />
              <select
                className={`w-100 mt-2 ${
                  !attorney.address.isCountryNotUS && "mb-4"
                } p-2`}
                disabled={shouldPGFillPlaintiffInfo}
                value={attorney.address.isCountryNotUS}
                onChange={(e) =>
                  aAOnChangeIsCountryNotUS(e.target.value, key, attorney)
                }
                required
              >
                <option value={false}>United States</option>
                <option value={true}>Other</option>
              </select>
              {attorney.address.isCountryNotUS && (
                <MDBInput
                  type="text"
                  className="text-white"
                  disabled={shouldPGFillPlaintiffInfo}
                  hint="Country"
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
              )}
            </div>
          </MDBCol>
          {Object.keys(plaintiffAttorneysDetail).length > 1 &&
            Number(key) !==
              Object.keys(plaintiffAttorneysDetail).length - 1 && <hr />}
        </>
      ))}
      <br />
    </>
  );
};
