import { MDBCol, MDBRow, MDBInput } from "mdbreact";
import {
  QuestionaireAddressTemplate,
  QuestionaireAgentOfServiceTemplate,
} from "../../popups";

export const Questionaire4 = (props) => {
  const {
    numberOfCaseFilesBeingServed,
    setNumberOfCaseFilesBeingServed,
    howManyIndividualsServed,
    setHowManyIndividualsServed,
    serveesDetail,
    setServeesDetail,
  } = props;

  const updateSameAddresses = (serveeKey, serviceDetailKey) => {
    if (
      !serveesDetail[serveeKey].serviceDetails[serviceDetailKey].address
        .sameAsMainServiceAddress
    ) {
      setServeesDetail({
        ...serveesDetail,
        [serveeKey]: {
          ...serveesDetail[serveeKey],
          serviceDetails: {
            ...serveesDetail[serveeKey].serviceDetails,
            [serviceDetailKey]: {
              ...serveesDetail[serveeKey].serviceDetails[serviceDetailKey],
              address: {
                ...serveesDetail["0"].serviceDetails["0"].address,
                sameAsMainServiceAddress: true,
              },
            },
          },
        },
      });
    } else {
      setServeesDetail({
        ...serveesDetail,
        [serveeKey]: {
          ...serveesDetail[serveeKey],
          serviceDetails: {
            ...serveesDetail[serveeKey].serviceDetails,
            [serviceDetailKey]: {
              ...serveesDetail[serveeKey].serviceDetails[serviceDetailKey],
              address: {
                ...serveesDetail[serveeKey].serviceDetails[serviceDetailKey]
                  .address,
                sameAsMainServiceAddress:
                  !serveesDetail[serveeKey].serviceDetails[serviceDetailKey]
                    .address.sameAsMainServiceAddress,
              },
            },
          },
        },
      });
    }
  };

  const handleNoOfServeesChanged = (e) => {
    setHowManyIndividualsServed(e.target.value);
    if (e.target.value !== "" && parseInt(e.target.value) > 1) {
      setNumberOfCaseFilesBeingServed("1");
    }
  };

  const handleNoOfCaseFilesChanged = (e) => {
    setNumberOfCaseFilesBeingServed(e.target.value);
    if (e.target.value !== "" && parseInt(e.target.value) > 1) {
      setHowManyIndividualsServed("1");
    }
  };

  const handleOnChangePhoneNumber = (key, phoneKey, newPhoneNumber) => {
    if (
      /^\s*\d{3}\s*$/.test(newPhoneNumber) &&
      newPhoneNumber.length >
        serveesDetail[key].phoneNumbers[phoneKey].phoneNumber.length
    ) {
      setServeesDetail({
        ...serveesDetail,
        [key]: {
          ...serveesDetail[key],
          phoneNumbers: {
            ...serveesDetail[key].phoneNumbers,
            [phoneKey]: {
              ...serveesDetail[key].phoneNumbers[phoneKey],
              phoneNumber: `(${newPhoneNumber}) `,
            },
          },
        },
      });
    } else if (
      /^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) &&
      newPhoneNumber.length >
        serveesDetail[key].phoneNumbers[phoneKey].phoneNumber.length
    ) {
      setServeesDetail({
        ...serveesDetail,
        [key]: {
          ...serveesDetail[key],
          phoneNumbers: {
            ...serveesDetail[key].phoneNumbers,
            [phoneKey]: {
              ...serveesDetail[key].phoneNumbers[phoneKey],
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
      setServeesDetail({
        ...serveesDetail,
        [key]: {
          ...serveesDetail[key],
          phoneNumbers: {
            ...serveesDetail[key].phoneNumbers,
            [phoneKey]: {
              ...serveesDetail[key].phoneNumbers[phoneKey],
              phoneNumber: `(${newPhoneNumber.slice(
                0,
                3
              )}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`,
            },
          },
        },
      });
    } else {
      setServeesDetail({
        ...serveesDetail,
        [key]: {
          ...serveesDetail[key],
          phoneNumbers: {
            ...serveesDetail[key].phoneNumbers,
            [phoneKey]: {
              ...serveesDetail[key].phoneNumbers[phoneKey],
              phoneNumber: newPhoneNumber,
            },
          },
        },
      });
    }
  };

  const handleOnClickDeletePhoneNumber = (targetServeeKey, targetPhoneKey) => {
    const updatedPhoneNumbers = {};
    Object.entries(serveesDetail[targetServeeKey].phoneNumbers).map(
      ([key, phoneNumberObj]) => {
        if (key !== targetPhoneKey)
          updatedPhoneNumbers[Object.keys(updatedPhoneNumbers).length] =
            phoneNumberObj;
      }
    );
    setServeesDetail({
      ...serveesDetail,
      [targetServeeKey]: {
        ...serveesDetail[targetServeeKey],
        phoneNumbers: updatedPhoneNumbers,
      },
    });
  };

  const handleOnClickDeleteResident = (targetServeeKey, targetResidentKey) => {
    const updatedResidents = {};
    Object.entries(serveesDetail[targetServeeKey].coResidents).map(
      ([key, residentObj]) => {
        if (key !== targetResidentKey)
          updatedResidents[Object.keys(updatedResidents).length] = residentObj;
      }
    );
    setServeesDetail({
      ...serveesDetail,
      [targetServeeKey]: {
        ...serveesDetail[targetServeeKey],
        coResidents: updatedResidents,
      },
    });
  };

  const handleOnClickTypeOfService = (
    serveeKey,
    servee,
    serviceDetailKey,
    serviceDetail,
    serviceType
  ) => {
    if (serviceType === "personal") {
      setServeesDetail({
        ...serveesDetail,
        [serveeKey]: {
          ...servee,
          serviceDetails: {
            ...servee.serviceDetails,
            [serviceDetailKey]: {
              ...serviceDetail,
              shouldSubServeToCompanion: false,
              typeOfServe: serviceType,
            },
          },
        },
      });
    } else {
      setServeesDetail({
        ...serveesDetail,
        [serveeKey]: {
          ...servee,
          serviceDetails: {
            ...servee.serviceDetails,
            [serviceDetailKey]: {
              ...serviceDetail,
              shouldSubServeToCompanion: "",
              typeOfServe: serviceType,
            },
          },
        },
      });
    }
  };

  const updateServiceDetails = (serveeKey, newServiceDetails) => {
    setServeesDetail({
      ...serveesDetail,
      [serveeKey]: {
        ...serveesDetail[serveeKey],
        serviceDetails: {
          ...serveesDetail[serveeKey].serviceDetails,
          [Object.keys(serveesDetail[serveeKey].serviceDetails).length]:
            newServiceDetails,
        },
      },
    });
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-5">Servee Documented Data</h2>
      <br></br>
      <br></br>
      <MDBCol md="12" id="number-of-case-files">
        <div id="number-of-case-files">
          <label>
            How many case files are being served? (Only if multiple cases are
            being involved for service to the same SERVEE)*
          </label>
          <select
            className="w-75 m-4 text-center p-2"
            value={numberOfCaseFilesBeingServed}
            onChange={handleNoOfCaseFilesChanged}
            required
          >
            <option value="">Please Select</option>
            {howManyIndividualsServed !== "" &&
            parseInt(howManyIndividualsServed) > 1 ? (
              <option value="1">1</option>
            ) : (
              <>
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
              </>
            )}
          </select>
          <br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="how-many-individuals-served">
        <div id="how-many-individuals-served">
          <label>
            How many servees are being served? (Only if multiple servees are
            receiving the same case file)*
          </label>
          <br></br>
          <select
            className="w-75 m-4 text-center p-2"
            value={howManyIndividualsServed}
            onChange={handleNoOfServeesChanged}
            required
          >
            <option value="">Please Select</option>
            {numberOfCaseFilesBeingServed !== "" &&
            parseInt(numberOfCaseFilesBeingServed) > 1 ? (
              <option value="1">1</option>
            ) : (
              <>
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
              </>
            )}
          </select>
          <br></br>
        </div>
      </MDBCol>
      {Object.entries(serveesDetail).map(([serveeKey, servee]) => (
        <>
          <MDBCol md="12">
            <label style={{ fontWeight: "bold", fontSize: 22 }}>
              Servee{" "}
              {Object.entries(serveesDetail).length > 1 &&
                Number(serveeKey) + 1}{" "}
              Details
            </label>
            <MDBCol md="12" id="name-of-individuals">
              <div id="name-of-individuals">
                <label>Full Name or Title of who is Receiving Service*</label>
                <MDBInput
                  type="text"
                  className="text-white"
                  value={servee.fullName}
                  onChange={(e) =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: {
                        ...serveesDetail[serveeKey],
                        fullName: e.target.value,
                      },
                    })
                  }
                  required
                />
              </div>
            </MDBCol>
            <MDBCol md="12">
              <MDBRow md="12">
                <MDBCol md="6" id="dob-of-individuals">
                  <div id="dob-of-individuals">
                    <label>
                      Date of Birth of Servee (Write N/A if unavailable)*
                    </label>
                    <MDBInput
                      type="text"
                      className="text-white"
                      value={servee.dob}
                      onChange={(e) =>
                        setServeesDetail({
                          ...serveesDetail,
                          [serveeKey]: {
                            ...serveesDetail[serveeKey],
                            dob: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                </MDBCol>
                <MDBCol md="6" id="age-of-individuals">
                  <div id="age-of-individuals">
                    <label>Approximate age of servee, if DOB is unknown</label>
                    <MDBInput
                      type="text"
                      className="text-white"
                      value={servee.age}
                      onChange={(e) =>
                        setServeesDetail({
                          ...serveesDetail,
                          [serveeKey]: {
                            ...serveesDetail[serveeKey],
                            age: e.target.value,
                          },
                        })
                      }
                      required
                    />
                  </div>
                </MDBCol>
              </MDBRow>
            </MDBCol>
            <MDBCol md="12" id="phone-numbers-of-individuals">
              <label>Phone Number(s) Pertaining to Servee</label>
              {Object.entries(servee.phoneNumbers).map(
                ([phoneKey, phoneObj]) => (
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <MDBInput
                        hint="(###) ###-####"
                        className="text-white"
                        value={phoneObj.phoneNumber}
                        onChange={(e) =>
                          handleOnChangePhoneNumber(
                            serveeKey,
                            phoneKey,
                            e.target.value
                          )
                        }
                      />
                    </MDBCol>
                    <MDBCol md="5">
                      <label>What kind of phone number is this?</label>
                      <select
                        className="w-75 m-4 text-center p-2"
                        value={phoneObj.type}
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              phoneNumbers: {
                                ...servee.phoneNumbers,
                                [phoneKey]: {
                                  ...servee.phoneNumbers[phoneKey],
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
                    {Object.keys(servee.phoneNumbers).length > 1 && (
                      <MDBCol middle md="1">
                        <span
                          onClick={() =>
                            handleOnClickDeletePhoneNumber(serveeKey, phoneKey)
                          }
                          style={{
                            fontWeight: "bold",
                            fontSize: 30,
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          X
                        </span>
                      </MDBCol>
                    )}
                  </MDBRow>
                )
              )}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: {
                        ...servee,
                        phoneNumbers: {
                          ...servee.phoneNumbers,
                          [Object.keys(servee.phoneNumbers).length]: {
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
            <MDBCol md="12" id="email-of-individuals">
              <div id="email-of-individuals">
                <label>
                  E-Mail(s) pertaining Servee(s) (you may list multiple , each
                  email separated with whitespace)
                </label>
                <MDBInput
                  type="textarea"
                  className="text-white"
                  value={servee.email}
                  onChange={(e) =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: { ...servee, email: e.target.value },
                    })
                  }
                />
              </div>
            </MDBCol>
            <br />
            <MDBCol md="12" id="known-coresidents-of-servee">
              <label>Any Known Co-Resident(s)?</label>
              {Object.entries(servee.coResidents).map(
                ([residentKey, residentObj]) => (
                  <MDBRow>
                    <MDBCol bottom md="6">
                      <label>Co-Resident</label>
                      <MDBInput
                        hint="Co-Resident"
                        className="text-white"
                        value={residentObj.name}
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              coResidents: {
                                ...servee.coResidents,
                                [residentKey]: {
                                  ...servee.coResidents[residentKey],
                                  name: e.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </MDBCol>
                    <MDBCol md="6">
                      <label>Relationship to resident?</label>
                      <select
                        className="w-75 m-4 text-center p-2"
                        value={residentObj.relation}
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              coResidents: {
                                ...servee.coResidents,
                                [residentKey]: {
                                  ...servee.coResidents[residentKey],
                                  relation: e.target.value,
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
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                        <option value="roommate">Roommate</option>
                        <option value="girlfriend">Girlfriend</option>
                        <option value="boyfriend">Boyfriend</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="uncle">Uncle</option>
                        <option value="aunt">Aunt</option>
                        <option value="cousin">Cousin</option>
                        <option value="friend">Friend</option>
                        <option value="coworker">Co-worker</option>
                        <option value="manager/boss">Manager/Boss</option>
                        <option value="unknown">Unknown</option>
                      </select>
                    </MDBCol>
                    {Object.keys(servee.coResidents).length > 1 && (
                      <MDBCol middle md="1">
                        <span
                          onClick={() =>
                            handleOnClickDeleteResident(serveeKey, residentKey)
                          }
                          style={{
                            fontWeight: "bold",
                            fontSize: 30,
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          X
                        </span>
                      </MDBCol>
                    )}
                  </MDBRow>
                )
              )}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: {
                        ...servee,
                        coResidents: {
                          ...servee.coResidents,
                          [Object.keys(servee.coResidents).length]: {
                            name: "",
                            relation: "",
                          },
                        },
                      },
                    })
                  }
                >
                  + Add another co-resident
                </button>
              </div>
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
              <div id={`employment-of-individuals${serveeKey}`}>
                <label>Is the Servee Currently Employed?*</label>
                <br />
                <input
                  className="ml-2"
                  type="radio"
                  onClick={(e) =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: { ...servee, isEmployed: "yes" },
                    })
                  }
                  id={`employmentOfIndividualsY${serveeKey}`}
                  name={`employmentOfIndividuals${serveeKey}`}
                  checked={servee.isEmployed === "yes" ? true : false}
                />
                <label
                  className="ml-2"
                  for={`employmentOfIndividualsY${serveeKey}`}
                >
                  Yes
                </label>
                <input
                  className="ml-4"
                  type="radio"
                  onClick={(e) =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: { ...servee, isEmployed: "no" },
                    })
                  }
                  id={`employmentOfIndividualsN${serveeKey}`}
                  name={`employmentOfIndividuals${serveeKey}`}
                  checked={servee.isEmployed === "no" ? true : false}
                />
                <label
                  className="ml-2"
                  for={`employmentOfIndividualsN${serveeKey}`}
                >
                  No
                </label>
                <input
                  className="ml-4"
                  type="radio"
                  onClick={(e) =>
                    setServeesDetail({
                      ...serveesDetail,
                      [serveeKey]: { ...servee, isEmployed: "unknown" },
                    })
                  }
                  id={`employmentOfIndividualsU${serveeKey}`}
                  name={`employmentOfIndividuals${serveeKey}`}
                  checked={servee.isEmployed === "unknown" ? true : false}
                />
                <label
                  className="ml-2"
                  for={`employmentOfIndividualsU${serveeKey}`}
                >
                  Unknown
                </label>
                <br />
              </div>
            </MDBCol>
            {Object.entries(servee.serviceDetails).map(
              ([serviceDetailKey, serviceDetail]) => (
                <>
                  <MDBCol md="12">
                    <label style={{ fontWeight: "bold" }}>
                      {Number(serviceDetailKey) === 0 &&
                        serveeKey === "0" &&
                        "Main "}
                      Address{" "}
                      {Number(serviceDetailKey) !== 0 &&
                        Object.keys(servee.serviceDetails).length > 1 &&
                        Number(serviceDetailKey) + 1}{" "}
                      for Service
                    </label>
                    <MDBCol md="12" id="location-being-served">
                      <div id="location-being-served">
                        <label>What kind of location is being served?*</label>
                        <select
                          className="w-75 m-4 text-center p-2"
                          value={serviceDetail.locationType}
                          onChange={(e) =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    locationType: e.target.value,
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
                          <option value="residence">Residence</option>
                          <option value="business">Business</option>
                          <option value="unknown">Unknown</option>
                        </select>
                        <br></br>
                      </div>
                    </MDBCol>
                    {serveeKey !== "0" &&
                      Number(serviceDetailKey) + Number(serveeKey) > 0 && (
                        <MDBCol md="12">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              checked={
                                serviceDetail.address.sameAsMainServiceAddress
                              }
                              onChange={() =>
                                updateSameAddresses(serveeKey, serviceDetailKey)
                              }
                              className="custom-control-input"
                              id={`sameAddressCheckbox${serveeKey}${serviceDetailKey}`}
                            />
                            <label
                              className="custom-control-label"
                              for={`sameAddressCheckbox${serveeKey}${serviceDetailKey}`}
                            >
                              Same as Main Address for Service
                            </label>
                          </div>
                        </MDBCol>
                      )}
                    <MDBCol md="12" id="main-address-for-service">
                      <MDBInput
                        type="text"
                        hint="Street"
                        className="text-white"
                        value={serviceDetail.address.street}
                        disabled={
                          serviceDetail.address.sameAsMainServiceAddress
                        }
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  address: {
                                    ...serviceDetail.address,
                                    street: e.target.value,
                                  },
                                },
                              },
                            },
                          })
                        }
                        required
                      />
                      <MDBInput
                        type="text"
                        hint="City"
                        className="text-white"
                        value={serviceDetail.address.city}
                        disabled={
                          serviceDetail.address.sameAsMainServiceAddress
                        }
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  address: {
                                    ...serviceDetail.address,
                                    city: e.target.value,
                                  },
                                },
                              },
                            },
                          })
                        }
                        required
                      />
                      <MDBInput
                        type="text"
                        hint="State"
                        className="text-white"
                        value={serviceDetail.address.state}
                        disabled={
                          serviceDetail.address.sameAsMainServiceAddress
                        }
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  address: {
                                    ...serviceDetail.address,
                                    state: e.target.value,
                                  },
                                },
                              },
                            },
                          })
                        }
                        required
                      />
                      <MDBInput
                        type="text"
                        hint="Zip Code"
                        className="text-white"
                        value={serviceDetail.address.zipCode}
                        disabled={
                          serviceDetail.address.sameAsMainServiceAddress
                        }
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  address: {
                                    ...serviceDetail.address,
                                    zipCode: e.target.value,
                                  },
                                },
                              },
                            },
                          })
                        }
                        required
                      />
                      <MDBInput
                        type="text"
                        hint="Country"
                        className="text-white"
                        value={serviceDetail.address.country}
                        disabled={
                          serviceDetail.address.sameAsMainServiceAddress
                        }
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  address: {
                                    ...serviceDetail.address,
                                    country: e.target.value,
                                  },
                                },
                              },
                            },
                          })
                        }
                        required
                      />
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-normal-personal-service">
                        <label>
                          Is this a "normal serve" or a "personal serve"?*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            handleOnClickTypeOfService(
                              serveeKey,
                              servee,
                              serviceDetailKey,
                              serviceDetail,
                              "personal"
                            )
                          }
                          id={`typeOfServeP${serveeKey}${serviceDetailKey}`}
                          name={`typeOfServe${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.typeOfServe === "personal"}
                        />
                        <label
                          className="ml-2"
                          for={`typeOfServeP${serveeKey}${serviceDetailKey}`}
                        >
                          Personal
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            handleOnClickTypeOfService(
                              serveeKey,
                              servee,
                              serviceDetailKey,
                              serviceDetail,
                              "normal"
                            )
                          }
                          id={`typeOfServeN${serveeKey}${serviceDetailKey}`}
                          name={`typeOfServe${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.typeOfServe === "normal"}
                        />
                        <label
                          className="ml-2"
                          for={`typeOfServeN${serveeKey}${serviceDetailKey}`}
                        >
                          Normal
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          Do you require a Service attempt within the first 24
                          hours of submission?*<i>(Additional Fee)</i>
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireFirst24HourService: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireFirst24HourServiceY${serveeKey}${serviceDetailKey}`}
                          name={`requireFirst24HourService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.requireFirst24HourService === true
                          }
                        />
                        <label
                          className="ml-2"
                          for={`requireFirst24HourServiceY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireFirst24HourService: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireFirst24HourServiceN${serveeKey}${serviceDetailKey}`}
                          name={`requireFirst24HourService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.requireFirst24HourService === false
                          }
                        />
                        <label
                          className="ml-2"
                          for={`requireFirst24HourServiceN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          Do You Require a Rush Service?* This is regarding
                          service that needs to be served with 13 days or less{" "}
                          <i>(Additional Fee)</i>
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireRushService: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireRushServiceY${serveeKey}${serviceDetailKey}`}
                          name={`requireRushService${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.requireRushService === true}
                        />
                        <label
                          className="ml-2"
                          for={`requireRushServiceY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireRushService: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireRushServiceN${serveeKey}${serviceDetailKey}`}
                          name={`requireRushService${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.requireRushService === false}
                        />
                        <label
                          className="ml-2"
                          for={`requireRushServiceN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          Do You Require a Stake Out Service?{" "}
                          <i>(Additional Fee)</i>*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireStakeOutService: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireStakeOutServiceY${serveeKey}${serviceDetailKey}`}
                          name={`requireStakeOutService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.requireStakeOutService === true
                          }
                        />
                        <label
                          className="ml-2"
                          for={`requireStakeOutServiceY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    requireStakeOutService: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`requireStakeOutServiceN${serveeKey}${serviceDetailKey}`}
                          name={`requireStakeOutService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.requireStakeOutService === false
                          }
                        />
                        <label
                          className="ml-2"
                          for={`requireStakeOutServiceN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    {/* 5th question pending */}
                    <MDBCol md="12">
                      <label>
                        Please provide a closing date for when all service
                        attempts must cease. (Regular service time frame should
                        be 2-5 weeks, unless otherwise specified)*
                      </label>
                      <br />
                      <MDBInput
                        type="text"
                        className="text-white"
                        value={serviceDetail.ceaseDate}
                        onChange={(e) =>
                          setServeesDetail({
                            ...serveesDetail,
                            [serveeKey]: {
                              ...servee,
                              serviceDetails: {
                                ...servee.serviceDetails,
                                [serviceDetailKey]: {
                                  ...serviceDetail,
                                  ceaseDate: e.target.value,
                                },
                              },
                            },
                          })
                        }
                      />
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          Is a "Subservice" to a Co-Resident/Co-Worker after due
                          diligence allowed? ("Small claims court" on first
                          attempt depending on window of service and county.
                          "Regular Service" after 4 attempts, [after 3 attempts
                          in California])*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          disabled={
                            serviceDetail.typeOfServe === "personal"
                              ? true
                              : false
                          }
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldSubServeToCompanion: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldSubServeY${serveeKey}${serviceDetailKey}`}
                          name={`shouldSubServe${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.shouldSubServeToCompanion === true
                          }
                        />
                        <label
                          className="ml-2"
                          for={`shouldSubServeY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          disabled={
                            serviceDetail.typeOfServe === "personal"
                              ? true
                              : false
                          }
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldSubServeToCompanion: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldSubServeN${serveeKey}${serviceDetailKey}`}
                          name={`shouldSubServe${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.shouldSubServeToCompanion === false
                          }
                        />
                        <label
                          className="ml-2"
                          for={`shouldSubServeN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          Is a "Drop Serve/Force Serve" allowed? (Only once
                          Residency/Employment is confirmed. Under the
                          circumstances that the authorized individual refuses
                          to accept documents upon contact/sub-service)*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldDropServe: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldDropServeY${serveeKey}${serviceDetailKey}`}
                          name={`shouldDropServe${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.shouldDropServe === true}
                        />
                        <label
                          className="ml-2"
                          for={`shouldDropServeY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldDropServe: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldDropServeN${serveeKey}${serviceDetailKey}`}
                          name={`shouldDropServe${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.shouldDropServe === false}
                        />
                        <label
                          className="ml-2"
                          for={`shouldDropServeN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          May the Process Server leave a door tag on the handle,
                          or business card with their title and contact
                          information?*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldLeaveDoorTag: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldLeaveDoorTagY${serveeKey}${serviceDetailKey}`}
                          name={`shouldLeaveDoorTag${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.shouldLeaveDoorTag === true}
                        />
                        <label
                          className="ml-2"
                          for={`shouldLeaveDoorTagY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldLeaveDoorTag: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldLeaveDoorTagN${serveeKey}${serviceDetailKey}`}
                          name={`shouldLeaveDoorTag${serveeKey}${serviceDetailKey}`}
                          checked={serviceDetail.shouldLeaveDoorTag === false}
                        />
                        <label
                          className="ml-2"
                          for={`shouldLeaveDoorTagN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>
                          May our Process Server post documents with a rubber
                          band on the door handle, once due diligence has been
                          met? Verify with Judge if permissible (varies by
                          case)*
                        </label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldPostDocsWithBand: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldPostDocsWithBandY${serveeKey}${serviceDetailKey}`}
                          name={`shouldPostDocsWithBand${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.shouldPostDocsWithBand === true
                          }
                        />
                        <label
                          className="ml-2"
                          for={`shouldPostDocsWithBandY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    shouldPostDocsWithBand: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`shouldPostDocsWithBandN${serveeKey}${serviceDetailKey}`}
                          name={`shouldPostDocsWithBand${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.shouldPostDocsWithBand === false
                          }
                        />
                        <label
                          className="ml-2"
                          for={`shouldPostDocsWithBandN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    <MDBCol md="12">
                      <div id="require-first-24-hour-service">
                        <label>Is There an Agent of Service?*</label>
                        <br />
                        <input
                          className="ml-2"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    isThereAnAgentOfService: true,
                                  },
                                },
                              },
                            })
                          }
                          id={`agentOfServiceY${serveeKey}${serviceDetailKey}`}
                          name={`agentOfService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.isThereAnAgentOfService === true
                          }
                        />
                        <label
                          className="ml-2"
                          for={`agentOfServiceY${serveeKey}${serviceDetailKey}`}
                        >
                          Yes
                        </label>
                        <input
                          className="ml-4"
                          type="radio"
                          onClick={() =>
                            setServeesDetail({
                              ...serveesDetail,
                              [serveeKey]: {
                                ...servee,
                                serviceDetails: {
                                  ...servee.serviceDetails,
                                  [serviceDetailKey]: {
                                    ...serviceDetail,
                                    isThereAnAgentOfService: false,
                                  },
                                },
                              },
                            })
                          }
                          id={`agentOfServiceN${serveeKey}${serviceDetailKey}`}
                          name={`agentOfService${serveeKey}${serviceDetailKey}`}
                          checked={
                            serviceDetail.isThereAnAgentOfService === false
                          }
                        />
                        <label
                          className="ml-2"
                          for={`agentOfServiceN${serveeKey}${serviceDetailKey}`}
                        >
                          No
                        </label>
                        <br />
                      </div>
                    </MDBCol>
                    {serviceDetail.isThereAnAgentOfService && (
                      <>
                        <MDBCol md="12" id="if-yes-list-full-name">
                          <label>Full Name to Agent of Service</label>
                          <br />
                          {Object.entries(serviceDetail.agentsOfService).map(
                            ([agentKey, agent]) => (
                              <>
                                {Object.keys(serviceDetail.agentsOfService)
                                  .length > 1 && (
                                  <label>
                                    Agent of Service {parseInt(agentKey) + 1}
                                  </label>
                                )}
                                <MDBCol md="12">
                                  <MDBRow md="12">
                                    <MDBCol md="4">
                                      <label>First Name</label>
                                      <br />
                                      <MDBInput
                                        type="text"
                                        className="text-white"
                                        value={agent.firstName}
                                        onChange={(e) =>
                                          setServeesDetail({
                                            ...serveesDetail,
                                            [serveeKey]: {
                                              ...servee,
                                              serviceDetails: {
                                                ...servee.serviceDetails,
                                                [serviceDetailKey]: {
                                                  ...serviceDetail,
                                                  agentsOfService: {
                                                    ...serviceDetail.agentsOfService,
                                                    [agentKey]: {
                                                      ...agent,
                                                      firstName: e.target.value,
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          })
                                        }
                                      />
                                    </MDBCol>
                                    <MDBCol md="4">
                                      <label>Middle Name</label>
                                      <br />
                                      <MDBInput
                                        type="text"
                                        className="text-white"
                                        value={agent.middleName}
                                        onChange={(e) =>
                                          setServeesDetail({
                                            ...serveesDetail,
                                            [serveeKey]: {
                                              ...servee,
                                              serviceDetails: {
                                                ...servee.serviceDetails,
                                                [serviceDetailKey]: {
                                                  ...serviceDetail,
                                                  agentsOfService: {
                                                    ...serviceDetail.agentsOfService,
                                                    [agentKey]: {
                                                      ...agent,
                                                      middleName:
                                                        e.target.value,
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          })
                                        }
                                      />
                                    </MDBCol>
                                    <MDBCol md="4">
                                      <label>Last Name</label>
                                      <br />
                                      <MDBInput
                                        type="text"
                                        className="text-white"
                                        value={agent.lastName}
                                        onChange={(e) =>
                                          setServeesDetail({
                                            ...serveesDetail,
                                            [serveeKey]: {
                                              ...servee,
                                              serviceDetails: {
                                                ...servee.serviceDetails,
                                                [serviceDetailKey]: {
                                                  ...serviceDetail,
                                                  agentsOfService: {
                                                    ...serviceDetail.agentsOfService,
                                                    [agentKey]: {
                                                      ...agent,
                                                      lastName: e.target.value,
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          })
                                        }
                                      />
                                    </MDBCol>
                                  </MDBRow>
                                </MDBCol>
                              </>
                            )
                          )}
                        </MDBCol>
                        <br />
                        <MDBCol>
                          <QuestionaireAgentOfServiceTemplate
                            setAgentFullName={(fullName) =>
                              setServeesDetail({
                                ...serveesDetail,
                                [serveeKey]: {
                                  ...servee,
                                  serviceDetails: {
                                    ...servee.serviceDetails,
                                    [serviceDetailKey]: {
                                      ...serviceDetail,
                                      agentsOfService: {
                                        ...serviceDetail.agentsOfService,
                                        [Object.keys(
                                          serviceDetail.agentsOfService
                                        ).length]: fullName,
                                      },
                                    },
                                  },
                                },
                              })
                            }
                          />
                        </MDBCol>
                        <br />
                      </>
                    )}
                    {Object.keys(servee.serviceDetails).length > 1 &&
                      Number(serviceDetailKey) !==
                        Object.keys(servee.serviceDetails).length - 1 && <hr />}
                    {Number(serviceDetailKey) ===
                      Object.keys(servee.serviceDetails).length - 1 && (
                      <MDBCol>
                        <QuestionaireAddressTemplate
                          serveeKey={serveeKey}
                          mainAddressForService={
                            serveesDetail["0"].serviceDetails["0"].address
                          }
                          setServiceDetails={(newServiceDetails) =>
                            updateServiceDetails(serveeKey, newServiceDetails)
                          }
                        />
                      </MDBCol>
                    )}
                    <br />
                  </MDBCol>
                </>
              )
            )}
            {Object.keys(serveesDetail).length > 1 &&
              Number(serveeKey) !== Object.keys(serveesDetail).length - 1 && (
                <hr />
              )}
          </MDBCol>
        </>
      ))}
    </>
  );
};
