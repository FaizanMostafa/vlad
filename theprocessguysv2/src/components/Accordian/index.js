import { useEffect, useState, useContext } from 'react';
import { MDBCol } from 'mdbreact';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, Card, AccordionContext, useAccordionToggle } from 'react-bootstrap';
import { getUserCaseDetails } from "../../redux/actions/case";

function CustomToggleBtn({ caseId, setIsLoading, children, callback, eventKey }) {
    const dispatch = useDispatch();
    const currentEventKey = useContext(AccordionContext);

    useEffect(() => {
        if(currentEventKey === eventKey) {
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
    const caseDetails = useSelector(state => state.caseReducer.caseDetails);
    const isFetchingCaseDetails = useSelector(state => state.caseReducer.isFetchingCaseDetails);
    
    return (
        <Accordion key={`${index}`} style={{marginBottom: 20}}>
            <Card>
                <Card.Header style={{padding: 0}}>
                    <CustomToggleBtn
                        setIsLoading={setIsLoading}
                        caseId={caseData.id}
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
                                <Card.Body>
                                    <MDBCol key={caseData.id} className="" style={{border: "solid"}}>
                                        <br></br>
                                        <div>
                                            Case Title Name: {caseDetails.CaseInformation.caseTitle}
                                        </div>
                                        <br></br>
                                        <div>
                                            Address of Serve: {caseDetails.ServeeDocumentedData.mainAddressForService}
                                        </div>
                                        <br></br>
                                        <div>
                                            Plaintiff Name: {caseDetails.PlaintiffInformation.plaintiffFullName}
                                        </div>
                                        <br></br>
                                        <div>
                                            Defendant Name: {caseDetails.DefendantInformation.defendantFullName}
                                        </div>
                                        <br></br>
                                        <div>
                                            Attorney Name: {caseDetails.PlaintiffInformation.plaintiffAttorneyName}
                                        </div>
                                        <br></br>
                                        {/* <div>
                                            Attorney Firm: {attorneyFirm}
                                        </div> */}
                                        <br></br>
                                        <div>
                                            Phone Number: {caseDetails.PlaintiffInformation.plaintiffAttorneyPhoneNumberForCalls}
                                        </div>
                                        <br></br>
                                        <div>
                                            Court Case Number: {caseDetails.CaseInformation.caseNumber}
                                        </div>
                                        <br></br>
                                        {/* Case Number from the invoice */}
                                        <div>
                                            Process Guys Case Number: TPG{caseData.id}
                                        </div>
                                        <br></br>
                                        {/* Case Status can be only changed in admin 1 & 2 (Not client) | Client will always have file as "Active" | Options: Active/Pending/Closed/Cancelled */}
                                        <div className="">
                                            Case Status: {caseData.status}  &nbsp; 
                                            <select className="w-25" disabled>
                                                <option>Please Select</option>
                                                <option>Active</option>
                                                <option>Cancelled</option>
                                                <option>Closed</option>
                                                <option>Pending</option>
                                            </select>
                                        </div>            
                                        <br></br>
                                        <div>
                                            Date of Submission: {moment(caseData.filedAt).format()}
                                        </div>            
                                        <br></br>
                                        {/* ( Admin 1 will have delete button for cases ) */}
                                            <div>
                                                <button className="btn btn-danger" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"10px"}} disabled>Delete Case</button>
                                                <Link to="/client-payment-options" className="btn btn-secondary" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"200px"}}>Pay Invoice</Link>
                                            </div>
                                    </MDBCol>
                                </Card.Body>
                    }
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}


export default CustomToggle;