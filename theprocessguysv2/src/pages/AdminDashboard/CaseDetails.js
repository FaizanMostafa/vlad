import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RSLink, Element } from 'react-scroll';
import { Stepper } from 'react-form-stepper';
import { fetchCaseDetails } from "../../redux/actions/admin";
import {
  Questionaire1,
  Questionaire2,
  Questionaire3,
  Questionaire4,
  Questionaire5,
  Questionaire6,
  Questionaire7,
  Questionaire8,
  FileSubmission
} from "../../forms/CaseDetails";
import {
  ResetQuestionairesConfirmation
} from "../../popups";
import { showToast, validateEmail, validatePhoneNumber } from "../../utils";

const CaseDetails = (props) => {
  const userCase = props.location.state.userCase;
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);
  const caseDetails = useSelector(state => state.admin.caseDetails);
  const isFetchingCaseDetails = useSelector(state => state.admin.isFetchingCaseDetails);

  useEffect(()=>{
    dispatch(fetchCaseDetails({...userCase}));
  }, [userCase]);

  const getButtonTitle = () => {
    if(activeStep===1) {
      return "Proceed to Plaintiff Section";
    } else if(activeStep===2) {
      return "Proceed to the Defendant Section";
    } else if(activeStep===3) {
      return "Proceed to the Servee Documented Data Section";
    } else if(activeStep===4) {
      return "Proceed to the Clearance of Action Section";
    } else if(activeStep===5) {
      return "Proceed to the Servee Physical Description Section";
    } else if(activeStep===6) {
      return "Proceed to the Vehicle Information Section";
    } else if(activeStep===7) {
      return "Proceed to the Offered Services Section";
    } else if(activeStep===8) {
      return "Proceed to Document Upload";
    }
  }

  const handleOnPressNext = () => {
    setActiveStep(activeStep+1);
  }

  if(isFetchingCaseDetails) {
    return (
      <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
        <div style={{height: "80vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
            <div style={{height: 25, width: 25}} className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>  
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <Element name="stepper" className="element">
        <Stepper
          steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }, { label: 'Step 5' }, { label: 'Step 6' }, { label: 'Step 7' }, { label: 'Step 8' }, { label: 'Step 9' }]}
          activeStep={activeStep-1}
        />
      </Element>
      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        {
          activeStep>1
            &&
              <button onClick={()=>setActiveStep(activeStep-1)} className="btn btn-primary">Previous Step</button>
        }
      </div>
      
      {
        activeStep === 1
          &&
            <Questionaire1
              isFormDisabled={true}
              caseTitle={caseDetails.CaseInformation.caseTitle}
              caseNumber={caseDetails.CaseInformation.caseNumber}
              courtDate={caseDetails.CaseInformation.courtDate}
              courtType={caseDetails.CaseInformation.courtType}
              courtState={caseDetails.CaseInformation.courtState}
              countyOf={caseDetails.CaseInformation.countyOf}
              branchName={caseDetails.CaseInformation.branchName}
              courthouseAddress={caseDetails.CaseInformation.courthouseAddress}
              courthouseMailingAddress={caseDetails.CaseInformation.courthouseMailingAddress}
            />
      }
      {
        activeStep === 2
          &&
            <Questionaire2
              isFormDisabled={true}
              isOrRepresentingPlaintiff={caseDetails.PlaintiffInformation.isOrRepresentingPlaintiff}
              shouldPGFillPlaintiffInfo={caseDetails.PlaintiffInformation.shouldPGFillPlaintiffInfo}
              plaintiffsDetail={caseDetails.PlaintiffInformation.plaintiffsDetail}
              numberOfAttorneyPlaintiff={caseDetails.PlaintiffInformation.numberOfAttorneyPlaintiff}
              plaintiffAttorneysDetail={caseDetails.PlaintiffInformation.plaintiffAttorneysDetail}
              numberOfAttorneysRepresentingPlaintiff={caseDetails.PlaintiffInformation.numberOfAttorneysRepresentingPlaintiff}
            />
      }
      {
        activeStep === 3
          &&
            <Questionaire3
              isFormDisabled={true}
              isOrRepresentingDefendant={caseDetails.DefendantInformation.isOrRepresentingDefendant}
              shouldPGFillDefendantInfo={caseDetails.DefendantInformation.shouldPGFillDefendantInfo}
              numberOfAttorneyDefendant={caseDetails.DefendantInformation.numberOfAttorneyDefendant}
              defendantsDetail={caseDetails.DefendantInformation.defendantsDetail}
              numberOfAttorneysRepresentingDefendant={caseDetails.DefendantInformation.numberOfAttorneysRepresentingDefendant}
              defendantAttorneysDetail={caseDetails.DefendantInformation.defendantAttorneysDetail}
            />
      }
      {
        activeStep === 4
          &&
            <Questionaire4
              isFormDisabled={true}
              numberOfCaseFilesBeingServed={caseDetails.ServeeDocumentedData.numberOfCaseFilesBeingServed}
              howManyIndividualsServed={caseDetails.ServeeDocumentedData.howManyIndividualsServed}
              serveesDetail={caseDetails.ServeeDocumentedData.serveesDetail}
              locationForBeingServed={caseDetails.ServeeDocumentedData.locationForBeingServed}
              mainAddressesForService={caseDetails.ServeeDocumentedData.mainAddressesForService}
              agentOfService={caseDetails.ServeeDocumentedData.agentOfService}
              agentsFullNames={caseDetails.ServeeDocumentedData.agentsFullNames}
            />
      }
      {
        activeStep === 5
          &&
            <Questionaire5
              isFormDisabled={true}
              typeOfServe={caseDetails.ClearanceOfAction.typeOfServe}
              serveIndividualAtEmployment={caseDetails.ClearanceOfAction.serveIndividualAtEmployment}
              processServerLeaveDoorTag={caseDetails.ClearanceOfAction.processServerLeaveDoorTag}
              subserveAfterThreeAttempts={caseDetails.ClearanceOfAction.subserveAfterThreeAttempts}     
              requireServerNotifyPersonOfInterest={caseDetails.ClearanceOfAction.requireServerNotifyPersonOfInterest}
              serverContactServeeByPhone={caseDetails.ClearanceOfAction.serverContactServeeByPhone}
              serverPostDocumentsWithRubberBand={caseDetails.ClearanceOfAction.serverPostDocumentsWithRubberBand}
              dropServeForceServe={caseDetails.ClearanceOfAction.dropServeForceServe}
              paralegalAttorneyClientContactServee={caseDetails.ClearanceOfAction.paralegalAttorneyClientContactServee}
            />
      }
      {
        activeStep === 6
          &&
            <Questionaire6
              isFormDisabled={true}
              serveesPhysicalDescription={caseDetails.ServeePhysicalDescription.serveesPhysicalDescription}
            />
      }
      {
        activeStep===7
          &&
            <Questionaire7
              isFormDisabled={true}
              vehiclesInformation={caseDetails.VehicleInformation.vehiclesInformation}
            />
      }
      {
        activeStep===8
          &&
            <Questionaire8
              isFormDisabled={true}
              requireStakeOutService={caseDetails.OfferedServices.requireStakeOutService}
              specifyDatesForStakeOutService={caseDetails.OfferedServices.specifyDatesForStakeOutService}
              requireRushService={caseDetails.OfferedServices.requireRushService}
              listDateWhenServiceAttemptsClosed={caseDetails.OfferedServices.listDateWhenServiceAttemptsClosed}
              requireFirst24HourService={caseDetails.OfferedServices.requireFirst24HourService}
              requireSkipTracingService={caseDetails.OfferedServices.requireSkipTracingService}
              requireBodyCamFootage={caseDetails.OfferedServices.requireBodyCamFootage}
              obtainNewDeliveryLocation={caseDetails.OfferedServices.obtainNewDeliveryLocation}
              poBoxAllowedToServe={caseDetails.OfferedServices.poBoxAllowedToServe}
              requireServiceByMail={caseDetails.OfferedServices.requireServiceByMail}
              requireByEmail={caseDetails.OfferedServices.requireByEmail}
              specificCourtInstruction={caseDetails.OfferedServices.specificCourtInstruction}
              requireZipFileService={caseDetails.OfferedServices.requireZipFileService}
              ifYesListAddress={caseDetails.OfferedServices.ifYesListAddress}
            />
      }
      {
        activeStep===9
          &&
            <FileSubmission
              isFormDisabled={true}
              fileData={caseDetails.FileSubmission.fileData}
            />
      }
      {
        activeStep!==9
          &&
            <Element name="next-btn" className="element">
              <div className="d-flex justify-content-end">
                <RSLink activeClass="active" to="stepper" spy={true} smooth={true} offset={250} duration={500} delay={300}>
                  <button
                    className="btn btn-primary mt-1 mb-1"
                    onClick={handleOnPressNext}
                  >
                    {getButtonTitle()}
                  </button>
                </RSLink>
              </div>
            </Element>
      }
      <br/>
      {/* <ResetQuestionairesConfirmation
        showModal={showResetModal}
        handleModalClose={()=>setShowResetModal(false)}
        handleOnClickConfirm={handleResetForms}
      /> */}
    </div>
  );
}

export default CaseDetails;