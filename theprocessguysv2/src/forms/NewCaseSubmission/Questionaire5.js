import { MDBCol } from "mdbreact";

const Questionaire5 = (props) => {
  const {
    serveIndividualAtEmployment,
    setServeIndividualAtEmployment,
    requireServerNotifyPersonOfInterest,
    setRequireServerNotifyPersonOfInterest,
    serverContactServeeByPhone,
    setServerContactServeeByPhone,
    paralegalAttorneyClientContactServee,
    setParalegalAttorneyClientContactServee
  } = props;

  return (
    <>
      <h2 className="text-center mb-4 mt-2">Clearance of Action</h2>
      <br></br>
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
      <MDBCol md="12" id="serve-individual-at-employment">
        <div id="serve-individual-at-employment">
          <label>May we serve the Servee at a place of employment?*</label><br />
          <input className="ml-2" type="radio" onClick={()=>setServeIndividualAtEmployment(true)} id="serveIndividualAtEmploymentY" name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===true} /><label className="ml-2" for="serveIndividualAtEmploymentY">Yes</label>
          <input className="ml-4" type="radio" onClick={()=>setServeIndividualAtEmployment(false)} id="serveIndividualAtEmploymentN" name="serveIndividualAtEmployment" checked={serveIndividualAtEmployment===false} /><label className="ml-2" for="serveIndividualAtEmploymentN">No</label>
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
      <br></br>
    </>
  );
}

export default Questionaire5;