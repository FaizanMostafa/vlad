import React from 'react';
import { MDBCol } from "mdbreact";

const Questionaire5 = (props) => {
  const {
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

      <MDBCol md="12" id="serve-individual-at-employment">
        <div id="serve-individual-at-employment">
          <label>May we serve the Servee at a place of employment?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={serveIndividualAtEmployment}
            onChange={(e) => setServeIndividualAtEmployment(e.target.value)}
            required
          >
            <label caret color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="process-server-leave-door-tag">
        <div id="process-server-leave-door-tag">
          <label>May our Process Server leave a door tag on the handle, or business card?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={processServerLeaveDoorTag}
            onChange={(e) => setProcessServerLeaveDoorTag(e.target.value)}
            required
          >
            <label caret color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="subserve-after-three-attempts">
        <div id="subserve-after-three-attempts">
          <label>Is a “Subserve” to a Co-Resident/Co-Worker After 4 Attempts <i>(3 Attempts in California)</i> Allowed?*</label>
          <select className="w-75 m-4 center p-2"
            value={subserveAfterThreeAttempts}
            onChange={(e) => setSubserveAfterThreeAttempts(e.target.value)}
            required
          >
            <label color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="require-server-notify-person-of-interest">
        <div id="require-server-notify-person-of-interest">
          <label>Is the judge requiring the Process Server to verbally notify the Servee, service may be rejected? Thus ceasing all further service attempts for current case <i>(International Court Cases)</i> Please verify with Judge*</label>
          <select className="w-75 m-4 center p-2"
            value={requireServerNotifyPersonOfInterest}
            onChange={(e) => setRequireServerNotifyPersonOfInterest(e.target.value)}
            required
          >
            <label color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="server-contact-servee-by-phone">
        <div id="server-contact-servee-by-phone">
          <label>May our Process Server Contact the Servee by Phone or Other Means?*</label>
          <select className="w-75 m-4 text-center p-2"
            value={serverContactServeeByPhone}
            onChange={(e) => setServerContactServeeByPhone(e.target.value)}
            required
          >
            <label caret color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="server-post-documents-with-rubber-band">
        <div id="server-post-documents-with-rubber-band">
          <label>May our Process Server post documents with a rubber band on the door handle once due dilligence has been met? Verify with judge if permissible <i>(varies by case)</i>*</label>
          <select className="w-75 m-4 text-center p-2"
            value={serverPostDocumentsWithRubberBand}
            onChange={(e) => setServerPostDocumentsWithRubberBand(e.target.value)}
            required
          >
            <label caret color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="drop-serve-force-serve">
        <div id="drop-serve-force-serve">
          <label>Is a “Drop Serve / Force Serve” Allowed,
            Once Residence/Employment is Confirmed and an Individual(s) Refuses to Accept Documents Upon Contact/Sub-Service?*</label>
          <select className="w-75 m-4 center p-2"
            value={dropServeForceServe}
            onChange={(e) => setDropServeForceServe(e.target.value)}
            required
          >
            <label color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <MDBCol md="12" id="paralegal-attorney-client-contact-servee">
        <div id="paralegal-attorney-client-contact-servee">
          <label>Has a paralegal/attorney, or your client contacted the Individual regarding service on this case? <i>(Thus prompting them to expect attempts)</i></label>
          <select className="w-75 m-4 center p-2"
            value={paralegalAttorneyClientContactServee}
            onChange={(e) => setParalegalAttorneyClientContactServee(e.target.value)}
            required
          >
            <label color="white">
              Please Select
            </label>
            <option value="Please Select" >Please Select</option>
            <option value="Yes" >Yes</option>
            <option value="No">No</option>
          </select><br></br>
        </div>
      </MDBCol>
      <br></br>
    </>
  );
}

export default Questionaire5;