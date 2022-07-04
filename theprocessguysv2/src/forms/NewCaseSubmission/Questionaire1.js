import { useState, useEffect } from "react";
import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { getUSStates } from "../../utils";

export const Questionaire1 = (props) => {
  const {
    ownerOfService,
    setOwnerOfService,
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
      <h3 className="text-center mb-4 mt-5">
        **Service should be completed 2 + weeks prior to the court date** Thus
        avoiding any complications with the judge. Please fill out as much
        information as possible from the court documents being submitted,
        certain sections marked with "*" are REQUIRED to proceed
      </h3>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <MDBCol md="12" id="owner-of-service-col">
        <div id="owner-of-service">
          <label>Owner of Service*</label>
          <MDBInput
            type="text"
            className="text-white"
            hint="Who is the owner of this service?"
            value={ownerOfService}
            onChange={(e) => setOwnerOfService(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="case-title">
        <div id="case-title">
          <label>Case Title*</label>
          <MDBInput
            type="text"
            className="text-white"
            hint="Plaintiff vs Defendant"
            value={caseTitle}
            onChange={(e) => setCaseTitle(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="case-number">
        <div id="case-number">
          <label>Case Number (Write N/A if none was issued)*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={caseNumber}
            hint="Court issued case number"
            onChange={(e) => setCaseNumber(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="court-date">
        <div id="court-date">
          <label>Court Date (Write N/A if not issued)*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={courtDate}
            onChange={(e) => setCourtDate(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="superior-court-of">
        <div id="superior-court-of">
          <label>Please select the court*</label>
          <select
            className="w-75 m-4 text-center p-2"
            value={courtType}
            onChange={(e) => setCourtType(e.target.value)}
            required
          >
            <option value="Please Select">Please Select</option>
            <option value="superior court">Superior court</option>
            <option value="appeals court">Appeals court</option>
            <option value="supreme court">Supreme court</option>
          </select>
        </div>
      </MDBCol>
      <MDBCol md="12" id="court-state">
        <div id="court-state">
          <label>Court of*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={courtState}
            onChange={(e) => setCourtState(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="branch-name">
        <div id="branch-name">
          <label>Branch Name*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={branchName}
            onChange={(e) => setBranchName(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="courthouse-address">
        <label>Courthouse Address*</label>
        <MDBCol>
          <MDBInput
            type="text"
            hint="Street"
            className="text-white"
            value={courthouseAddress.street}
            onChange={(e) =>
              setCourthouseAddress({
                ...courthouseAddress,
                street: e.target.value,
              })
            }
            required
          />
          <MDBInput
            type="text"
            hint="Unit"
            className="text-white"
            value={courthouseAddress.unit}
            onChange={(e) =>
              setCourthouseAddress({
                ...courthouseAddress,
                unit: e.target.value,
              })
            }
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            value={courthouseAddress.city}
            onChange={(e) =>
              setCourthouseAddress({
                ...courthouseAddress,
                city: e.target.value,
              })
            }
            required
          />
          <MDBRow>
            <MDBCol style={{margin: "auto"}}>
              <select
                className={`browser-default custom-select w-100`}
                value={courthouseAddress.state.us}
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
              </select>
            </MDBCol>
            {courthouseAddress.state.us === "other" && (
              <MDBCol>
                <MDBInput
                  type="text"
                  hint="State"
                  className="text-white"
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
              </MDBCol>
            )}
          </MDBRow>
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            value={courthouseAddress.zipCode}
            onChange={(e) =>
              setCourthouseAddress({
                ...courthouseAddress,
                zipCode: e.target.value,
              })
            }
            required
          />
          <select
            className={`w-100 mt-2 ${
              !courthouseAddress.isCountryNotUS && "mb-4"
            } p-2`}
            value={courthouseAddress.isCountryNotUS}
            onChange={(e) => cAOnChangeIsCountryNotUS(e.target.value)}
            required
          >
            <option value={false}>United States</option>
            <option value={true}>Other</option>
          </select>
          {courthouseAddress.isCountryNotUS && (
            <MDBInput
              type="text"
              hint="Country Name"
              className="text-white"
              value={courthouseAddress.country}
              onChange={(e) =>
                setCourthouseAddress({
                  ...courthouseAddress,
                  country: e.target.value,
                })
              }
            />
          )}
        </MDBCol>
      </MDBCol>
      <MDBCol md="12" id="courthouse-mailing-address">
        <label>Courthouse Mailing Address*</label>
        <MDBCol id="courthouse-mailing-address">
          <div className="mt-4">
            <input
              className="mr-2"
              value={isSameAddress}
              onChange={() => setIsSameAddress(!isSameAddress)}
              type="checkbox"
              id="same-address-checkbox"
            />
            <label for="same-address-checkbox">
              Same as Courthouse Address
            </label>
          </div>
          <MDBInput
            type="text"
            hint="Street"
            className="text-white"
            disabled={isSameAddress}
            value={courthouseMailingAddress.street}
            onChange={(e) =>
              setCourthouseMailingAddress({
                ...courthouseMailingAddress,
                street: e.target.value,
              })
            }
            required
          />
          <MDBInput
            type="text"
            hint="Unit"
            className="text-white"
            disabled={isSameAddress}
            value={courthouseMailingAddress.unit}
            onChange={(e) =>
              setCourthouseMailingAddress({
                ...courthouseMailingAddress,
                unit: e.target.value,
              })
            }
          />
          <MDBInput
            type="text"
            hint="City"
            className="text-white"
            disabled={isSameAddress}
            value={courthouseMailingAddress.city}
            onChange={(e) =>
              setCourthouseMailingAddress({
                ...courthouseMailingAddress,
                city: e.target.value,
              })
            }
            required
          />
          <MDBRow>
            <MDBCol style={{margin: "auto"}}>
              <select
                className={`browser-default custom-select w-100`}
                value={courthouseMailingAddress.state.us}
                disabled={isSameAddress}
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
              </select>
            </MDBCol>
            {courthouseMailingAddress.state.us === "other" && (
              <MDBCol>
                <MDBInput
                  type="text"
                  hint="State"
                  className="text-white"
                  value={courthouseMailingAddress.state.other}
                  disabled={isSameAddress}
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
              </MDBCol>
            )}
          </MDBRow>
          <MDBInput
            type="text"
            hint="Zip Code"
            className="text-white"
            disabled={isSameAddress}
            value={courthouseMailingAddress.zipCode}
            onChange={(e) =>
              setCourthouseMailingAddress({
                ...courthouseMailingAddress,
                zipCode: e.target.value,
              })
            }
            required
          />
          <select
            className={`w-100 mt-2 ${
              !courthouseMailingAddress.isCountryNotUS && "mb-4"
            } p-2`}
            value={courthouseMailingAddress.isCountryNotUS}
            onChange={(e) => cMAOnChangeIsCountryNotUS(e.target.value)}
            disabled={isSameAddress}
            required
          >
            <option value={false}>United States</option>
            <option value={true}>Other</option>
          </select>
          {courthouseMailingAddress.isCountryNotUS && (
            <MDBInput
              type="text"
              hint="Country Name"
              className="text-white"
              disabled={isSameAddress}
              value={courthouseMailingAddress.country}
              onChange={(e) =>
                setCourthouseMailingAddress({
                  ...courthouseMailingAddress,
                  country: e.target.value,
                })
              }
            />
          )}
        </MDBCol>
      </MDBCol>
      <MDBCol md="12" id="county-of">
        <div id="county-of">
          <label>County Of*</label>
          <MDBInput
            type="text"
            className="text-white"
            value={countyOf}
            onChange={(e) => setCountyOf(e.target.value)}
            required
          />
        </div>
      </MDBCol>
      <br></br>
    </>
  );
};
