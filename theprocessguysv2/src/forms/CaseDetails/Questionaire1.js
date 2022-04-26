import { useState, useEffect } from "react";
import { MDBCol, MDBRow } from "mdbreact";
import { Form } from "react-bootstrap";
import { getUSStates } from "../../utils";

export const Questionaire1 = (props) => {
  const {
    isFormDisabled,
    ownerOfService,
    setOwnerOfService,
    amount,
    setAmount,
    caseStatus,
    setCaseStatus,
    caseTitle,
    setCaseTitle,
    caseNumber,
    setCaseNumber,
    courtDate,
    setCourtDate,
    courtType,
    setCourtType,
    courtState,
    setCourtState,
    countyOf,
    setCountyOf,
    branchName,
    setBranchName,
    courthouseAddress,
    setCourthouseAddress,
    courthouseMailingAddress,
    setCourthouseMailingAddress,
  } = props;

  const [isSameAddress, setIsSameAddress] = useState(false);

  useEffect(() => {
    if (isSameAddress) setCourthouseMailingAddress(courthouseAddress);
  }, [isSameAddress, courthouseAddress]);

  const cAOnChangeIsCountryNotUS = (isCountryNotUS) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : courthouseAddress.country;
    setCourthouseAddress({ ...courthouseAddress, country, isCountryNotUS });
  };

  const cMAOnChangeIsCountryNotUS = (isCountryNotUS) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : courthouseMailingAddress.country;
    setCourthouseMailingAddress({
      ...courthouseMailingAddress,
      country,
      isCountryNotUS,
    });
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-5">New Case Questionaire</h2>
      <br />
      <MDBRow md="12">
        <MDBCol md="8" id="case-amount">
          <Form.Group id="case-amount-g">
            <Form.Label>Owner of Service</Form.Label>
            <Form.Control
              type="text"
              value={ownerOfService}
              disabled={isFormDisabled}
              onChange={(e) => setOwnerOfService(e.target.value)}
            />
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="case-status">
          <Form.Group id="case-status-g">
            <Form.Label>Case Status</Form.Label>
            <Form.Control
              as="select"
              value={caseStatus}
              disabled={props.onlyCaseStatusEditable ? false : isFormDisabled}
              onChange={(e) => setCaseStatus(e.target.value)}
            >
              <option value="">Please Select</option>
              <option value="pending">Pending</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="cancelled">Cancelled</option>
            </Form.Control>
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="case-amount">
          <Form.Group id="case-amount-g">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              value={amount}
              disabled={props.onlyCaseStatusEditable ? false : isFormDisabled}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="case-title">
          <Form.Group id="case-title">
            <Form.Label>Case Title</Form.Label>
            <Form.Control
              type="text"
              disabled={isFormDisabled}
              onChange={(e) => setCaseTitle(e.target.value)}
              value={caseTitle}
            />
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="case-number">
          <Form.Group id="case-number-g">
            <Form.Label>Case Number</Form.Label>
            <Form.Control
              type="text"
              disabled={isFormDisabled}
              onChange={(e) => setCaseNumber(e.target.value)}
              value={caseNumber}
            />
          </Form.Group>
        </MDBCol>
      </MDBRow>
      <MDBRow md="12">
        <MDBCol md="6" id="court-date">
          <Form.Group id="court-date-g">
            <Form.Label>Court Date</Form.Label>
            <Form.Control
              type="text"
              disabled={isFormDisabled}
              onChange={(e) => setCourtDate(e.target.value)}
              value={courtDate}
            />
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="court-type">
          <Form.Group id="court-type-g">
            <Form.Label>Court Type</Form.Label>
            <Form.Control
              as="select"
              value={courtType}
              disabled={isFormDisabled}
              onChange={(e) => setCourtType(e.target.value)}
            >
              <option value="Please Select">Please Select</option>
              <option value="superior court">Superior court</option>
              <option value="appeals court">Appeals court</option>
              <option value="supreme court">Supreme court</option>
            </Form.Control>
          </Form.Group>
        </MDBCol>
      </MDBRow>
      <MDBRow md="12">
        <MDBCol md="6" id="case-of">
          <Form.Group id="case-of-g">
            <Form.Label>Court Of</Form.Label>
            <Form.Control
              type="text"
              disabled={isFormDisabled}
              onChange={(e) => setCourtState(e.target.value)}
              value={courtState}
            />
          </Form.Group>
        </MDBCol>
        <MDBCol md="6" id="branch-name">
          <Form.Group id="branch-name-g">
            <Form.Label>Branch Name</Form.Label>
            <Form.Control
              type="text"
              disabled={isFormDisabled}
              onChange={(e) => setBranchName(e.target.value)}
              value={branchName}
            />
          </Form.Group>
        </MDBCol>
      </MDBRow>
      <MDBCol md="12">
        <MDBRow>
          <MDBCol>
            <Form.Label style={{ fontWeight: "bold" }}>
              Courthouse Address
            </Form.Label>
            <Form.Group id="attorney-full-firm-address">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                disabled={isFormDisabled}
                value={courthouseAddress.street}
                onChange={(e) =>
                  setCourthouseAddress({
                    ...courthouseAddress,
                    street: e.target.value,
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
                value={courthouseAddress.unit}
                onChange={(e) =>
                  setCourthouseAddress({
                    ...courthouseAddress,
                    unit: e.target.value,
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
                value={courthouseAddress.city}
                onChange={(e) =>
                  setCourthouseAddress({
                    ...courthouseAddress,
                    city: e.target.value,
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
                    value={courthouseAddress.state.us}
                    disabled={isFormDisabled}
                    onChange={(e) =>
                      setCourthouseAddress({
                        ...courthouseAddress,
                        state: {
                          other:
                            e.target.value !== "other"
                              ? ""
                              : courthouseAddress.state.other,
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
                  </Form.Control>
                </Form.Group>
              </MDBCol>
              {courthouseAddress.state.us === "other" && (
                <MDBCol>
                  <Form.Group id="attorney-full-firm-address">
                    <Form.Label>State Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled}
                      value={courthouseAddress.state.other}
                      onChange={(e) =>
                        setCourthouseAddress({
                          ...courthouseAddress,
                          state: {
                            ...courthouseAddress.state,
                            other: e.target.value,
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
                value={courthouseAddress.zipCode}
                onChange={(e) =>
                  setCourthouseAddress({
                    ...courthouseAddress,
                    zipCode: e.target.value,
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
                value={courthouseAddress.isCountryNotUS}
                disabled={isFormDisabled}
                onChange={(e) => cAOnChangeIsCountryNotUS(e.target.value)}
              >
                <option value={false}>United States</option>
                <option value={true}>Other</option>
              </Form.Control>
            </Form.Group>
          </MDBCol>
          {courthouseAddress.isCountryNotUS && (
            <MDBCol>
              <Form.Group id="attorney-full-firm-address">
                <Form.Label>Country Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled}
                  value={courthouseAddress.country}
                  onChange={(e) =>
                    setCourthouseAddress({
                      ...courthouseAddress,
                      country: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          )}
        </MDBRow>
      </MDBCol>
      <MDBCol md="12">
        <MDBRow>
          <MDBCol>
            <Form.Label style={{ fontWeight: "bold" }}>
              Courthouse Mailing Address
            </Form.Label>
            {!isFormDisabled && (
              <Form.Group className="mb-3" controlId="sameAddressCheckbox">
                <Form.Check
                  value={isSameAddress}
                  onChange={() => setIsSameAddress(!isSameAddress)}
                  type="checkbox"
                  label="Same as Courthouse Address"
                />
              </Form.Group>
            )}
            <Form.Group id="attorney-full-firm-address">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                disabled={isFormDisabled || isSameAddress}
                value={courthouseMailingAddress.street}
                onChange={(e) =>
                  setCourthouseMailingAddress({
                    ...courthouseMailingAddress,
                    street: e.target.value,
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
                disabled={isFormDisabled || isSameAddress}
                value={courthouseMailingAddress.unit}
                onChange={(e) =>
                  setCourthouseMailingAddress({
                    ...courthouseMailingAddress,
                    unit: e.target.value,
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
                disabled={isFormDisabled || isSameAddress}
                value={courthouseMailingAddress.city}
                onChange={(e) =>
                  setCourthouseMailingAddress({
                    ...courthouseMailingAddress,
                    city: e.target.value,
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
                    value={courthouseMailingAddress.state.us}
                    disabled={isFormDisabled || isSameAddress}
                    onChange={(e) =>
                      setCourthouseMailingAddress({
                        ...courthouseMailingAddress,
                        state: {
                          other:
                            e.target.value !== "other"
                              ? ""
                              : courthouseMailingAddress.state.other,
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
                  </Form.Control>
                </Form.Group>
              </MDBCol>
              {courthouseMailingAddress.state.us === "other" && (
                <MDBCol>
                  <Form.Group id="attorney-full-firm-address">
                    <Form.Label>State Name</Form.Label>
                    <Form.Control
                      type="text"
                      disabled={isFormDisabled || isSameAddress}
                      value={courthouseMailingAddress.state.other}
                      onChange={(e) =>
                        setCourthouseMailingAddress({
                          ...courthouseMailingAddress,
                          state: {
                            ...courthouseMailingAddress.state,
                            other: e.target.value,
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
                disabled={isFormDisabled || isSameAddress}
                value={courthouseMailingAddress.zipCode}
                onChange={(e) =>
                  setCourthouseMailingAddress({
                    ...courthouseMailingAddress,
                    zipCode: e.target.value,
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
                value={courthouseMailingAddress.isCountryNotUS}
                disabled={isFormDisabled || isSameAddress}
                onChange={(e) => cMAOnChangeIsCountryNotUS(e.target.value)}
              >
                <option value={false}>United States</option>
                <option value={true}>Other</option>
              </Form.Control>
            </Form.Group>
          </MDBCol>
          {courthouseMailingAddress.isCountryNotUS && (
            <MDBCol>
              <Form.Group id="attorney-full-firm-address">
                <Form.Label>Country Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled={isFormDisabled || isSameAddress}
                  value={courthouseMailingAddress.country}
                  onChange={(e) =>
                    setCourthouseMailingAddress({
                      ...courthouseMailingAddress,
                      country: e.target.value,
                    })
                  }
                />
              </Form.Group>
            </MDBCol>
          )}
        </MDBRow>
      </MDBCol>
      <MDBCol md="12" id="county-of">
        <Form.Group id="county-of-g">
          <Form.Label>County Of</Form.Label>
          <Form.Control
            type="text"
            disabled={isFormDisabled}
            value={countyOf}
            onChange={(e) => setCountyOf(e.target.value)}
          />
        </Form.Group>
      </MDBCol>
      <br></br>
    </>
  );
};
