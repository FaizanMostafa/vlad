import { MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

const Questionaire8 = (props) => {
  const {
    isFormDisabled,
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
    ifYesListAddress,
    setIfYesListAddress
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Offered Services</h2>
      <br/>
      <MDBCol md="12" id="specific-court-instruction">
        <Form.Group id="specific-court-instruction">
          <Form.Label>Any Specific Case Information or Court Instructions you’d like to Provide? <i>(Example: Previous service attempts/experiences made, any noteable threats/altercations with listed Servees or other contacts, Court Requirements, Hours permitted for service by the court)</i> We generally operate between 8 AM and 10 PM</Form.Label>
          <Form.Control
            type="textarea"
            disabled={isFormDisabled}
            value={specificCourtInstruction}
            onChange={(e) => setSpecificCourtInstruction(e.target.value)}
          />
        </Form.Group>
      </MDBCol>
      <br/>
      <MDBCol md="12" id="require-zip-file-service">
        <Form.Group id="require-zip-file-service">
          <Form.Label>Do you Require a Zip File Service at a Court House or Law Office? <i>(Additional Fee Based on Location)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireZipFileService(true)} id="requireZipFileServiceY"
              name="requireZipFileService" checked={requireZipFileService===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireZipFileService(false)} id="requireZipFileServiceN"
              name="requireZipFileService" checked={requireZipFileService===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="if-yes-provide-address">
        <Form.Group id="if-yes-provide-address">
          <Form.Label>If yes, please Provide Address for Zip Filing</Form.Label>
          <Form.Control
            type="text"
            disabled={isFormDisabled}
            value={ifYesListAddress}
            onChange={(e) => setIfYesListAddress(e.target.value)}
          />
        </Form.Group>
      </MDBCol>
      <br/>
      <MDBCol md="12" id="require-body-cam-footage">
        <Form.Group id="require-body-cam-footage">
          <Form.Label>Do You Require Body Cam Footage of Service to Present as Evidence? <i>(Additional Fee)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireBodyCamFootage(true)} id="requireBodyCamFootageY"
              name="requireBodyCamFootage" checked={requireBodyCamFootage===true}
            />
            <Form.Check className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireBodyCamFootage(false)} id="requireBodyCamFootageN"
              name="requireBodyCamFootage" checked={requireBodyCamFootage===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="p-o-box-allowed-to-serve">
        <Form.Group id="p-o-box-allowed-to-serve">
          <Form.Label>Is a P.O. Box Allowed to be Served Belonging to the Person of Interest? <i>(USPS Excluded)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setPOBoxAllowedToServe(true)} id="poBoxAllowedToServeY"
              name="poBoxAllowedToServe" checked={poBoxAllowedToServe===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setPOBoxAllowedToServe(false)} id="poBoxAllowedToServeN"
              name="poBoxAllowedToServe" checked={poBoxAllowedToServe===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="require-skip-tracing-service">
        <Form.Group id="require-skip-tracing-service">
          <Form.Label>Do You Require a “Skip Tracing” Service? <i>(Additional Fee)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireSkipTracingService(true)} id="requireSkipTracingServiceY"
              name="requireSkipTracingService" checked={requireSkipTracingService===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireSkipTracingService(false)} id="requireSkipTracingServiceN"
              name="requireSkipTracingService" checked={requireSkipTracingService===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="require-service-by-mail">
        <Form.Group id="require-service-by-mail">
          <Form.Label>Do You Require a Service by Secured Postal Mail with Signature, After Personal Service is Attempted? <i>(Additional Fee)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireServiceByMail(true)} id="requireServiceByMailY"
              name="requireServiceByMail" checked={requireServiceByMail===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireServiceByMail(false)} id="requireServiceByMailN"
              name="requireServiceByMail" checked={requireServiceByMail===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="require-service-by-email">
        <Form.Group id="require-service-by-email">
          <Form.Label>Do you require a service by E-mail? Requires a written statement from servee agreeing to accept such a serve <i>(Additional Fee)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireByEmail(true)} id="requireByEmailY"
              name="requireByEmail" checked={requireByEmail===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireByEmail(false)} id="requireByEmailN"
              name="requireByEmail" checked={requireByEmail===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br />
      <MDBCol md="12" id="obtain-new-delivery-location">
        <Form.Group id="obtain-new-delivery-location">
          <Form.Label>If the Process Server Obtains a New Delivery Location from the Servee,
            Should they Proceed the Service Without Authorization? <i>(Pre-Paid Plan)</i>*</Form.Label><br />
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setObtainNewDeliveryLocation(true)} id="obtainNewDeliveryLocationY"
              name="obtainNewDeliveryLocation" checked={obtainNewDeliveryLocation===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setObtainNewDeliveryLocation(false)} id="obtainNewDeliveryLocationN"
              name="obtainNewDeliveryLocation" checked={obtainNewDeliveryLocation===false}
            />
          </div>
        </Form.Group>
      </MDBCol>
      <br/><br/>
    </>
  );
}

export default Questionaire8;