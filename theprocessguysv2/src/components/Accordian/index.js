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
                                                        Case Title Name: {caseData.details.CaseInformation.caseTitle}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Address of Serve: {caseData.details.ServeeDocumentedData.mainAddressForService.street} {caseData.details.ServeeDocumentedData.mainAddressForService.city} {caseData.details.ServeeDocumentedData.mainAddressForService.state} {caseData.details.ServeeDocumentedData.mainAddressForService.country}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Plaintiff Name: {caseData.details.PlaintiffInformation.plaintiffFullName.firstName} {caseData.details.PlaintiffInformation.plaintiffFullName.middleName} {caseData.details.PlaintiffInformation.plaintiffFullName.lastName}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Defendant Name: {caseData.details.DefendantInformation.defendantFullName.firstName} {caseData.details.DefendantInformation.defendantFullName.middleName} {caseData.details.DefendantInformation.defendantFullName.lastName}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Attorney Name: {caseData.details.PlaintiffInformation.plaintiffAttorneyName.firstName} {caseData.details.PlaintiffInformation.plaintiffAttorneyName.middleName} {caseData.details.PlaintiffInformation.plaintiffAttorneyName.lastName}
                                                    </div>
                                                    <br></br>
                                                    {/* <div>
                                                        Attorney Firm: {attorneyFirm}
                                                    </div>
                                                    <br></br> */}
                                                    <div>
                                                        Phone Number: {caseData.details.PlaintiffInformation.plaintiffAttorneyPhoneNumberForCalls}
                                                    </div>
                                                    <br></br>
                                                    <div>
                                                        Court Case Number: {caseData.details.CaseInformation.caseNumber}
                                                    </div>
                                                    <br></br>
                                                    {/* Case Number from the invoice */}
                                                    <div>
                                                        Process Guys Case Number: TPG{caseData.id}
                                                    </div>
                                                    <br></br>
                                                    {/* Case Status can be only changed in admin 1 & 2 (Not client) | Client will always have file as "Active" | Options: Active/Pending/Closed/Cancelled */}
                                                    <div className="">
                                                        Case Status: {caseData.status}
                                                    </div>            
                                                    <br></br>
                                                    <div>
                                                        Date of Submission: {new Date(caseData.filedAt.toDate()).toDateString()}
                                                    </div>            
                                                    <br></br>
                                                    {/* ( Admin 1 will have delete button for cases ) */}
                                                        <div>
                                                            <button className="btn btn-danger" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"10px"}} disabled>Delete Case</button>
                                                            <Link to="/client-payment-options" className="btn btn-secondary" style={{ position:"absolute", right:"0", bottom:"0", marginBottom: "20px", marginRight:"200px"}}>Pay Invoice</Link>
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