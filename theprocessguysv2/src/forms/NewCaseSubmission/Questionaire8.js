import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import { getUSStates } from "../../utils";

export const Questionaire8 = (props) => {
  const {
    requireSkipTracingService,
    setRequireSkipTracingService,
    requireBodyCamFootage,
    setRequireBodyCamFootage,
    obtainNewDeliveryLocation,
    setObtainNewDeliveryLocation,
    poBoxAllowedToServe,
    setPOBoxAllowedToServe,
    requireServiceByMail,
    setRequireServiceByMail,
    requireByEmail,
    setRequireByEmail,
    specificCourtInstruction,
    setSpecificCourtInstruction,
    requireZipFileService,
    setRequireZipFileService,
    zipFilingAddress,
    setZipFilingAddress,
  } = props;

  const onChangeIsCountryNotUS = (isCountryNotUS) => {
    isCountryNotUS = isCountryNotUS === "true";
    const country = isCountryNotUS ? "" : zipFilingAddress.country;
    setZipFilingAddress({
      ...zipFilingAddress,
      isCountryNotUS,
      country,
    });
  };

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Offered Services</h2>
      <br></br>
      <MDBCol md="12" id="specific-court-instruction">
        <div id="specific-court-instruction">
          <label>
            Any Specific Case Information or Court Instructions you’d like to
            Provide?{" "}
            <i>
              (Example: Previous service attempts/experiences made, any noteable
              threats/altercations with listed Servees or other contacts, Court
              Requirements, Hours permitted for service by the court)
            </i>{" "}
            We generally operate between 8 AM and 10 PM
          </label>
          <MDBInput
            type="textarea"
            className="text-white"
            value={specificCourtInstruction}
            onChange={(e) => setSpecificCourtInstruction(e.target.value)}
          />
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-zip-file-service">
        <div id="require-zip-file-service">
          <label>
            Do you Require a Zip File Service at a Court House or Law Office?{" "}
            <i>(Additional Fee Based on Location)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setRequireZipFileService(true)}
            id="requireZipFileServiceY"
            name="requireZipFileService"
            checked={requireZipFileService === true}
          />
          <label className="ml-2" for="requireZipFileServiceY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setRequireZipFileService(false)}
            id="requireZipFileServiceN"
            name="requireZipFileService"
            checked={requireZipFileService === false}
          />
          <label className="ml-2" for="requireZipFileServiceN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      {requireZipFileService && (
        <MDBCol md="12" id="if-yes-provide-address">
          <div id="if-yes-provide-address">
            <label>Address for Zip Filing</label>
            <MDBInput
              type="text"
              hint="Street"
              className="text-white"
              value={zipFilingAddress.street}
              onChange={(e) =>
                setZipFilingAddress({
                  ...zipFilingAddress,
                  street: e.target.value,
                })
              }
            />
            <MDBInput
              type="text"
              hint="Unit"
              className="text-white"
              value={zipFilingAddress.unit}
              onChange={(e) =>
                setZipFilingAddress({
                  ...zipFilingAddress,
                  unit: e.target.value,
                })
              }
            />
            <MDBInput
              type="text"
              hint="City"
              className="text-white"
              value={zipFilingAddress.city}
              onChange={(e) =>
                setZipFilingAddress({
                  ...zipFilingAddress,
                  city: e.target.value,
                })
              }
            />
            <MDBRow>
              <MDBCol style={{ margin: "auto" }}>
                <select
                  className={`browser-default custom-select w-100`}
                  value={zipFilingAddress.state.us}
                  onChange={(e) =>
                    setZipFilingAddress({
                      ...zipFilingAddress,
                      state: {
                        other:
                          e.target.value !== "other"
                            ? ""
                            : zipFilingAddress.state.other,
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
              {zipFilingAddress.state.us === "other" && (
                <MDBCol>
                  <MDBInput
                    type="text"
                    hint="State"
                    className="text-white"
                    value={zipFilingAddress.state.other}
                    onChange={(e) =>
                      setZipFilingAddress({
                        ...zipFilingAddress,
                        state: {
                          ...zipFilingAddress.state,
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
              value={zipFilingAddress.zipCode}
              onChange={(e) =>
                setZipFilingAddress({
                  ...zipFilingAddress,
                  zipCode: e.target.value,
                })
              }
            />
            <MDBRow>
              <MDBCol style={{ margin: "auto" }}>
                <select
                  className={`w-100 mt-2 ${
                    !zipFilingAddress.isCountryNotUS && "mb-4"
                  } p-2`}
                  value={zipFilingAddress.isCountryNotUS}
                  onChange={(e) => onChangeIsCountryNotUS(e.target.value)}
                  required
                >
                  <option value={false}>United States</option>
                  <option value={true}>Other</option>
                </select>
              </MDBCol>
              {zipFilingAddress.isCountryNotUS && (
                <MDBCol>
                  <MDBInput
                    type="text"
                    hint="Country Name"
                    className="text-white"
                    value={zipFilingAddress.country}
                    onChange={(e) =>
                      setZipFilingAddress({
                        ...zipFilingAddress,
                        country: e.target.value,
                      })
                    }
                  />
                </MDBCol>
              )}
            </MDBRow>
          </div>
        </MDBCol>
      )}
      <MDBCol md="12" id="require-body-cam-footage">
        <div id="require-body-cam-footage">
          <label>
            Do You Require Body Cam Footage of Service to Present as Evidence?{" "}
            <i>(Additional Fee)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setRequireBodyCamFootage(true)}
            id="requireBodyCamFootageY"
            name="requireBodyCamFootage"
            checked={requireBodyCamFootage === true}
          />
          <label className="ml-2" for="requireBodyCamFootageY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setRequireBodyCamFootage(false)}
            id="requireBodyCamFootageN"
            name="requireBodyCamFootage"
            checked={requireBodyCamFootage === false}
          />
          <label className="ml-2" for="requireBodyCamFootageN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <MDBCol md="12" id="p-o-box-allowed-to-serve">
        <div id="p-o-box-allowed-to-serve">
          <label>
            Is a P.O. Box Allowed to be Served Belonging to the Person of
            Interest? <i>(USPS Excluded)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setPOBoxAllowedToServe(true)}
            id="poBoxAllowedToServeY"
            name="poBoxAllowedToServe"
            checked={poBoxAllowedToServe === true}
          />
          <label className="ml-2" for="poBoxAllowedToServeY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setPOBoxAllowedToServe(false)}
            id="poBoxAllowedToServeN"
            name="poBoxAllowedToServe"
            checked={poBoxAllowedToServe === false}
          />
          <label className="ml-2" for="poBoxAllowedToServeN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-skip-tracing-service">
        <div id="require-skip-tracing-service">
          <label>
            Do You Require a “Skip Tracing” Service? <i>(Additional Fee)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setRequireSkipTracingService(true)}
            id="requireSkipTracingServiceY"
            name="requireSkipTracingService"
            checked={requireSkipTracingService === true}
          />
          <label className="ml-2" for="requireSkipTracingServiceY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setRequireSkipTracingService(false)}
            id="requireSkipTracingServiceN"
            name="requireSkipTracingService"
            checked={requireSkipTracingService === false}
          />
          <label className="ml-2" for="requireSkipTracingServiceN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-service-by-mail">
        <div id="require-service-by-mail">
          <label>
            Do You Require a Service by Secured Postal Mail with Signature,
            After Personal Service is Attempted? <i>(Additional Fee)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setRequireServiceByMail(true)}
            id="requireServiceByMailY"
            name="requireServiceByMail"
            checked={requireServiceByMail === true}
          />
          <label className="ml-2" for="requireServiceByMailY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setRequireServiceByMail(false)}
            id="requireServiceByMailN"
            name="requireServiceByMail"
            checked={requireServiceByMail === false}
          />
          <label className="ml-2" for="requireServiceByMailN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-service-by-email">
        <div id="require-service-by-email">
          <label>
            Did the judge permit a service by E-mail? Would require a written
            statement from the individual being served agreeing to accept said
            documents by such means <i>(Additional Fee)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setRequireByEmail(true)}
            id="requireByEmailY"
            name="requireByEmail"
            checked={requireByEmail === true}
          />
          <label className="ml-2" for="requireByEmailY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setRequireByEmail(false)}
            id="requireByEmailN"
            name="requireByEmail"
            checked={requireByEmail === false}
          />
          <label className="ml-2" for="requireByEmailN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <MDBCol md="12" id="obtain-new-delivery-location">
        <div id="obtain-new-delivery-location">
          <label>
            If the Process Server Obtains a New Delivery Location from the
            Servee, Should they Proceed the Service Without Authorization?{" "}
            <i>(Pre-Paid Plan)</i>*
          </label>
          <br />
          <input
            className="ml-2"
            type="radio"
            onClick={() => setObtainNewDeliveryLocation(true)}
            id="obtainNewDeliveryLocationY"
            name="obtainNewDeliveryLocation"
            checked={obtainNewDeliveryLocation === true}
          />
          <label className="ml-2" for="obtainNewDeliveryLocationY">
            Yes
          </label>
          <input
            className="ml-4"
            type="radio"
            onClick={() => setObtainNewDeliveryLocation(false)}
            id="obtainNewDeliveryLocationN"
            name="obtainNewDeliveryLocation"
            checked={obtainNewDeliveryLocation === false}
          />
          <label className="ml-2" for="obtainNewDeliveryLocationN">
            No
          </label>
          <br />
        </div>
      </MDBCol>
      <br></br>
    </>
  );
};
