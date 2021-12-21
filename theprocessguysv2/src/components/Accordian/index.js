import { useEffect, useState, useContext } from 'react';
import { MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Card, AccordionContext, useAccordionToggle } from 'react-bootstrap';
import { getUserCaseDetails } from "../../redux/actions/case";

function CustomToggleBtn({ caseId, hasDetails, setIsLoading, children, callback, eventKey }) {
    const dispatch = useDispatch();
    const currentEventKey = useContext(AccordionContext);

    useEffect(() => {
        if(currentEventKey === eventKey && !hasDetails) {
            setIsLoading(true);
            dispatch(getUserCaseDetails({caseId}, ()=>setIsLoading(false)));
        }
    }, [eventKey, currentEventKey])

    const decoratedOnClick = useAccordionToggle(eventKey, () => callback && callback(eventKey));
  
    return (
      <div
        type="button"
        style={{padding: "7px 12px"}}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
}
  
function CustomToggle({ index, caseData, children, ...props }) {
    const [isLoading, setIsLoading] = useState(true);
    const isFetchingCaseDetails = useSelector(state => state.caseReducer.isFetchingCaseDetails);
    
    return (
        <Accordion key={`${index}`} style={{marginBottom: 20}}>
            <Card>
                <Card.Header style={{padding: 0}}>
                    <CustomToggleBtn
                        setIsLoading={setIsLoading}
                        caseId={caseData.id}
                        hasDetails={caseData.details && Object.keys(caseData.details).length}
                        eventKey={`${index}`}
                    >
                        {caseData.caseTitle}
                    </CustomToggleBtn>
                </Card.Header>
                <Accordion.Collapse eventKey={`${index}`}>
                    {
                        isLoading && isFetchingCaseDetails
                            ?
                                <center><b style={{margin: 10}}>loading...</b></center>
                            :
                                (
                                    caseData.details && Object.keys(caseData.details).length
                                        ?
                                            <Card.Body>
                                                <MDBCol key={caseData.id} className="" style={{border: "solid"}}>
                                                    <br></br>
                                                    <div>
                                                        Case Title: {caseData.details.CaseInformation.caseTitle}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Date of Case Submission: {new Date(caseData.filedAt.toDate()).toDateString()}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Court provided Case Number: {caseData.details.CaseInformation.caseNumber}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        TPG provided Case Number: TPG{caseData.id}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Plaintiff Name: {Object.values(caseData.details.PlaintiffInformation?.plaintiffsDetail).map((pd)=>`${pd.fullName.firstName} ${pd.fullName.middleName} ${pd.fullName.lastName}`).join(" ")}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Defendant Name: {Object.values(caseData.details.DefendantInformation?.defendantsDetail).map((dd)=>`${dd.fullName.firstName} ${dd.fullName.middleName} ${dd.fullName.lastName}`)}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Attorney Name: {Object.values(caseData.details.PlaintiffInformation?.plaintiffAttorneysDetail).map((ad)=>`${ad.fullName.firstName} ${ad.fullName.middleName} ${ad.fullName.lastName}`)}
                                                    </div>
                                                    <br></br>
                                                    <div className="">
                                                        Case Status: {caseData?.status}
                                                    </div>           
                                                    <br></br>
                                                    <div>
                                                        Address of Servee: {[].concat.apply([], Object.values(caseData.details.ServeeDocumentedData?.serveesDetail).map((sd)=>Object.values(sd.serviceDetails).map((sd)=>`${sd.address.street} ${sd.address.city} ${sd.address.state} ${sd.address.zipCode} ${sd.address.country}`))).join(" ")}
                                                    </div>
                                                    <br></br>
                                                    {/* <div>
                                                        Attorney Firm: {attorneyFirm}
                                                    </div>
                                                    <br></br> */}
                                                    <div>
                                                        Phone Number: {caseData.details.PlaintiffInformation?.plaintiffAttorneyPhoneNumberForCalls}
                                                    </div>
                                                    <br></br>
                                                    <div style={{display: "flex", justifyContent: "flex-end"}}>
                                                        <Link to={{pathname: "/case-questionare", state: {caseId: caseData.id}}} className="btn btn-secondary" style={{ marginBottom: "20px", marginRight:"20px"}}>Open Case Questionare</Link>
                                                        <Link to={{pathname: "/attempt-logs", state: {caseId: caseData.id}}} className="btn btn-secondary" style={{ marginBottom: "20px", marginRight:"20px"}}>Attempt Logs</Link>
                                                        {
                                                            (caseData.status.toLowerCase()!=="pending" && caseData?.payment?.status?.toLowerCase()!=="done")
                                                                &&
                                                                    <Link to={{pathname: "/client-payment-options", state: {caseId: caseData.id}}} className="btn btn-secondary" style={{ marginBottom: "20px", marginRight:"20px"}}>Make Payment</Link>
                                                        }
                                                        {
                                                            caseData.status.toLowerCase()!=="pending"
                                                                &&
                                                                    <Link to={{pathname: "/view-invoice", state: {caseId: caseData.id}}} className="btn btn-secondary" style={{ marginBottom: "20px", marginRight:"20px"}}>View Invoice</Link>
                                                        }
                                                        <Link to={{pathname: "/submitted-documents", state: {caseId: caseData.id}}} className="btn btn-secondary" style={{ marginBottom: "20px", marginRight:"20px"}}>View Submitted Case Documents</Link>
                                                    </div>
                                                </MDBCol>
                                            </Card.Body>
                                        :
                                            <center><b>No data</b></center>
                                )
                    }
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}


export default CustomToggle;