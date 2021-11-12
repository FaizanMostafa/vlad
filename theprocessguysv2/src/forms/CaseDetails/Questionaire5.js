import { MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

const Questionaire5 = (props) => {
  const {
    typeOfServe,
    isFormDisabled,
    setTypeOfServe,
    serveIndividualAtEmployment,
    setServeIndividualAtEmployment,
    processServerLeaveDoorTag,
    setProcessServerLeaveDoorTag,
    subserveAfterThreeAttempts,
    setSubserveAfterThreeAttempts,
    requireServerNotifyPersonOfInterest,
    setRequireServerNotifyPersonOfInterest,
    serverContactServeeByPhone,
    setServerContactServeeByPhone,
    serverPostDocumentsWithRubberBand,
    setServerPostDocumentsWithRubberBand,
    dropServeForceServe,
    setDropServeForceServe,
    paralegalAttorneyClientContactServee,
    setParalegalAttorneyClientContactServee
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Clearance of Action</h2>
      <br></br>
      <MDBCol md="12" id="require-first-24-hour-service">
        <Form.Group id="require-first-24-hour-service">
          <Form.Label>Is this a "normal serve" or a "personal serve"?*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Personal" disabled={isFormDisabled}
              onClick={()=>setTypeOfServe("personal")} id="typeOfServeP"
              name="typeOfServe" checked={typeOfServe==="personal"}
            />
            <Form.Check
              className="ml-4" type="radio" label="Normal" disabled={isFormDisabled}
              onClick={()=>setTypeOfServe("normal")} id="typeOfServeN"
              name="typeOfServe" checked={typeOfServe==="normal"}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="paralegal-attorney-client-contact-servee">
        <Form.Group id="paralegal-attorney-client-contact-servee">
          <Form.Label>Has a paralegal/attorney, or your client contacted the Individual regarding service on this case? <i>(Thus prompting them to expect attempts)</i></Form.Label>
          <div style={{display: "flex"}} >
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setParalegalAttorneyClientContactServee(true)}
              id="paralegalAttorneyClientContactServeeY" name="paralegalAttorneyClientContactServee"
              checked={paralegalAttorneyClientContactServee===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setParalegalAttorneyClientContactServee(false)}
              id="paralegalAttorneyClientContactServeeN" name="paralegalAttorneyClientContactServee"
              checked={paralegalAttorneyClientContactServee===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="require-server-notify-person-of-interest">
        <Form.Group id="require-server-notify-person-of-interest">
          <Form.Label>Is the judge requiring the Process Server to verbally notify the Servee, service may be rejected? Thus ceasing all further service attempts for current case <i>(International Court Cases)</i> Please verify with Judge*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setRequireServerNotifyPersonOfInterest(true)}
              id="requireServerNotifyPersonOfInterestY" name="requireServerNotifyPersonOfInterest"
              checked={requireServerNotifyPersonOfInterest===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setRequireServerNotifyPersonOfInterest(false)}
              id="requireServerNotifyPersonOfInterestN" name="requireServerNotifyPersonOfInterest"
              checked={requireServerNotifyPersonOfInterest===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="subserve-after-three-attempts">
        <Form.Group id="subserve-after-three-attempts">
          <Form.Label>Is a “Subserve” to a Co-Resident/Co-Worker After 4 Attempts <i>(3 Attempts in California)</i> Allowed?{typeOfServe==="normal" && "*"}</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setSubserveAfterThreeAttempts(true)}
              id="subserveAfterThreeAttemptsY" name="subserveAfterThreeAttempts"
              checked={subserveAfterThreeAttempts===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setSubserveAfterThreeAttempts(false)}
              id="subserveAfterThreeAttemptsN" name="subserveAfterThreeAttempts"
              checked={subserveAfterThreeAttempts===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="drop-serve-force-serve">
        <Form.Group id="drop-serve-force-serve">
          <Form.Label>Is a “Drop Serve / Force Serve” Allowed,
            Once Residence/Employment is Confirmed and the listed Individual(s) Refuses to Accept Documents Upon Contact/Sub-Service?*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setDropServeForceServe(true)} id="dropServeForceServeY"
              name="dropServeForceServe" checked={dropServeForceServe===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setDropServeForceServe(false)} id="dropServeForceServeN"
              name="dropServeForceServe" checked={dropServeForceServe===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="serve-individual-at-employment">
        <Form.Group id="serve-individual-at-employment">
          <Form.Label>May we serve the Servee at a place of employment?*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setServeIndividualAtEmployment(true)} id="serveIndividualAtEmploymentY"
              name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setServeIndividualAtEmployment(false)} id="serveIndividualAtEmploymentN"
              name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="process-server-leave-door-tag">
        <Form.Group id="process-server-leave-door-tag">
          <Form.Label>May our Process Server leave a door tag on the handle, or business card with contact information?*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setProcessServerLeaveDoorTag(true)} id="processServerLeaveDoorTagY"
              name="processServerLeaveDoorTag" checked={processServerLeaveDoorTag===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setProcessServerLeaveDoorTag(false)} id="processServerLeaveDoorTagN"
              name="processServerLeaveDoorTag" checked={processServerLeaveDoorTag===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="server-contact-servee-by-phone">
        <Form.Group id="server-contact-servee-by-phone">
          <Form.Label>May our Process Server Contact the Servee by Phone or Other Means?*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setServerContactServeeByPhone(true)} id="serverContactServeeByPhoneY"
              name="serverContactServeeByPhone" checked={serverContactServeeByPhone===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setServerContactServeeByPhone(false)} id="serverContactServeeByPhoneN"
              name="serverContactServeeByPhone" checked={serverContactServeeByPhone===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <MDBCol md="12" id="server-post-documents-with-rubber-band">
        <Form.Group id="server-post-documents-with-rubber-band">
          <Form.Label>May our Process Server post documents with a rubber band on the door handle once due dilligence has been met? Verify with judge if permissible <i>(varies by case)</i>*</Form.Label>
          <div style={{display: "flex"}}>
            <Form.Check
              className="ml-2" type="radio" label="Yes" disabled={isFormDisabled}
              onClick={()=>setServerPostDocumentsWithRubberBand(true)} id="serverPostDocumentsWithRubberBandY"
              name="serverPostDocumentsWithRubberBand" checked={serverPostDocumentsWithRubberBand===true}
            />
            <Form.Check
              className="ml-4" type="radio" label="No" disabled={isFormDisabled}
              onClick={()=>setServerPostDocumentsWithRubberBand(false)} id="serverPostDocumentsWithRubberBandN"
              name="serverPostDocumentsWithRubberBand" checked={serverPostDocumentsWithRubberBand===false}
            />
          </div>
          <br/>
        </Form.Group>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire5;