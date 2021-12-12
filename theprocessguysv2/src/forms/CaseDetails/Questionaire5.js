import { MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';

const Questionaire5 = (props) => {
  const {
    isFormDisabled,
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
      <br></br>
    </>
  );
}

export default Questionaire5;