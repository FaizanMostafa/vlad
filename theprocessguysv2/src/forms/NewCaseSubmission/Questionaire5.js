import { MDBCol } from "mdbreact";

const Questionaire5 = (props) => {
  const {
    typeOfServe,
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
        <div id="require-first-24-hour-service">
          <label>Is this a "normal serve" or a "personal serve"?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setTypeOfServe("personal")} id="typeOfServeP" name="typeOfServe" checked={typeOfServe==="personal"} /><label className="ml-2" for="typeOfServeP">Personal</label>
          <input className="ml-4" type="radio" onClick={()=>setTypeOfServe("normal")} id="typeOfServeN" name="typeOfServe" checked={typeOfServe==="normal"} /><label className="ml-2" for="typeOfServeN">Normal</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="paralegal-attorney-client-contact-servee">
        <div id="paralegal-attorney-client-contact-servee">
          <label>Has a paralegal/attorney, or your client contacted the Individual regarding service on this case? <i>(Thus prompting them to expect attempts)</i></label><br />
          <input className="ml-2" type="radio" onClick={()=>setParalegalAttorneyClientContactServee(true)} id="paralegalAttorneyClientContactServeeY" name="paralegalAttorneyClientContactServee" checked={paralegalAttorneyClientContactServee===true} /><label className="ml-2" for="paralegalAttorneyClientContactServeeY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setParalegalAttorneyClientContactServee(false)} id="paralegalAttorneyClientContactServeeN" name="paralegalAttorneyClientContactServee" checked={paralegalAttorneyClientContactServee===false} /><label className="ml-2" for="paralegalAttorneyClientContactServeeN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-server-notify-person-of-interest">
        <div id="require-server-notify-person-of-interest">
          <label>Is the judge requiring the Process Server to verbally notify the Servee, service may be rejected? Thus ceasing all further service attempts for current case <i>(International Court Cases)</i> Please verify with Judge*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setRequireServerNotifyPersonOfInterest(true)} id="requireServerNotifyPersonOfInterestY" name="requireServerNotifyPersonOfInterest" checked={requireServerNotifyPersonOfInterest===true} /><label className="ml-2" for="requireServerNotifyPersonOfInterestY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setRequireServerNotifyPersonOfInterest(false)} id="requireServerNotifyPersonOfInterestN" name="requireServerNotifyPersonOfInterest" checked={requireServerNotifyPersonOfInterest===false} /><label className="ml-2" for="requireServerNotifyPersonOfInterestN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="subserve-after-three-attempts">
        <div id="subserve-after-three-attempts">
          <label>Is a “Subserve” to a Co-Resident/Co-Worker After 4 Attempts <i>(3 Attempts in California)</i> Allowed?{typeOfServe==="normal" && "*"}</label><br />
          <input className="ml-2" type="radio" onClick={()=>setSubserveAfterThreeAttempts(true)} id="subserveAfterThreeAttemptsY" name="subserveAfterThreeAttempts" checked={subserveAfterThreeAttempts===true} /><label className="ml-2" for="subserveAfterThreeAttemptsY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setSubserveAfterThreeAttempts(false)} id="subserveAfterThreeAttemptsN" name="subserveAfterThreeAttempts" checked={subserveAfterThreeAttempts===false} /><label className="ml-2" for="subserveAfterThreeAttemptsN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="drop-serve-force-serve">
        <div id="drop-serve-force-serve">
          <label>Is a “Drop Serve / Force Serve” Allowed,
            Once Residence/Employment is Confirmed and the listed Individual(s) Refuses to Accept Documents Upon Contact/Sub-Service?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setDropServeForceServe(true)} id="dropServeForceServeY" name="dropServeForceServe" checked={dropServeForceServe===true} /><label className="ml-2" for="dropServeForceServeY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setDropServeForceServe(false)} id="dropServeForceServeN" name="dropServeForceServe" checked={dropServeForceServe===false} /><label className="ml-2" for="dropServeForceServeN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="serve-individual-at-employment">
        <div id="serve-individual-at-employment">
          <label>May we serve the Servee at a place of employment?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setServeIndividualAtEmployment(true)} id="serveIndividualAtEmploymentY" name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===true} /><label className="ml-2" for="serveIndividualAtEmploymentY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setServeIndividualAtEmployment(false)} id="serveIndividualAtEmploymentN" name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===false} /><label className="ml-2" for="serveIndividualAtEmploymentN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="process-server-leave-door-tag">
        <div id="process-server-leave-door-tag">
          <label>May our Process Server leave a door tag on the handle, or business card with contact information?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setProcessServerLeaveDoorTag(true)} id="processServerLeaveDoorTagY" name="processServerLeaveDoorTag" checked={processServerLeaveDoorTag===true} /><label className="ml-2" for="processServerLeaveDoorTagY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setProcessServerLeaveDoorTag(false)} id="processServerLeaveDoorTagN" name="processServerLeaveDoorTag" checked={processServerLeaveDoorTag===false} /><label className="ml-2" for="processServerLeaveDoorTagN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="server-contact-servee-by-phone">
        <div id="server-contact-servee-by-phone">
          <label>May our Process Server Contact the Servee by Phone or Other Means?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setServerContactServeeByPhone(true)} id="serverContactServeeByPhoneY" name="serverContactServeeByPhone" checked={serverContactServeeByPhone===true} /><label className="ml-2" for="serverContactServeeByPhoneY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setServerContactServeeByPhone(false)} id="serverContactServeeByPhoneN" name="serverContactServeeByPhone" checked={serverContactServeeByPhone===false} /><label className="ml-2" for="serverContactServeeByPhoneN">No</label>
          <br/>
        </div>
      </MDBCol>
      <MDBCol md="12" id="server-post-documents-with-rubber-band">
        <div id="server-post-documents-with-rubber-band">
          <label>May our Process Server post documents with a rubber band on the door handle once due dilligence has been met? Verify with judge if permissible <i>(varies by case)</i>*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setServerPostDocumentsWithRubberBand(true)} id="serverPostDocumentsWithRubberBandY" name="serverPostDocumentsWithRubberBand" checked={serverPostDocumentsWithRubberBand===true} /><label className="ml-2" for="serverPostDocumentsWithRubberBandY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setServerPostDocumentsWithRubberBand(false)} id="serverPostDocumentsWithRubberBandN" name="serverPostDocumentsWithRubberBand" checked={serverPostDocumentsWithRubberBand===false} /><label className="ml-2" for="serverPostDocumentsWithRubberBandN">No</label>
          <br/>
        </div>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire5;