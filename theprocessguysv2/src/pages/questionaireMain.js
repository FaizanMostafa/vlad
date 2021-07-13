import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stepper } from 'react-form-stepper';
import {
  Questionaire1,
  Questionaire2,
  Questionaire3,
  Questionaire4,
  Questionaire5,
  Questionaire6
} from "../forms/NewCaseSubmission";
import { showToast } from "../utils";

function Questionaire() {

  const user = useSelector(state => state.auth.user);
  const [activeStep, setActiveStep] = useState(6);
  
  // Questionaire Form 1
  const [caseTitle, setCaseTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [courtDate, setCourtDate] = useState("");
  const [superiorCourtOf, setSuperiorCourtOf] = useState("");
  const [countyOf, setCountyOf] = useState("");
  const [courthouseAddress, setCourthouseAddress] = useState("");
  const [courthouseMailingAddress, setCourthouseMailingAddress] = useState("");
  const [branchName, setBranchName] = useState("");
  const [appealsCourtOf, setAppealsCourtOf] = useState("");
  const [supremeCourtOf, setSupremeCourtOf] = useState("");

  // Questionaire Form 2
  const [plaintiffFullName, setPlaintiffFullName] = useState("");
  const [plaintiffAddress, setPlaintiffAddress] = useState("");
  const [numberOfAttorneyPlaintiff, setNumberOfAttorneyPlaintiff] = useState("");
  const [attorneyRepresentingPlaintiffInfo, setAttorneyRepresentingPlaintiffInfo] = useState("");    
  const [plaintiffAttorneyName, setPlaintiffAttorneyName] = useState("");
  const [plaintiffAttorneyBarNumber, setPlaintiffAttorneyBarNumber] = useState("");
  const [plaintiffAttorneyOfficeAddress, setPlaintiffAttorneyOfficeAddress] = useState("");
  const [plaintiffAttorneyPhoneNumberForCalls, setPlaintiffAttorneyPhoneNumberForCalls] = useState("");
  const [plaintiffAttorneyEmail, setPlaintiffAttorneyEmail] = useState("");
  const [plaintiffAttorneyFaxNumberOptional, setPlaintiffAttorneyFaxNumberOptional] = useState("");

  // Questionaire Form 3
  const [defendantFullName, setDefendantFullName] = useState("");
  const [defendantAddress, setDefendantAddress] = useState("");
  const [numberOfAttorneyDefendant, setNumberOfAttorneyDefendant] = useState("");
  const [attorneyRepresentingDefendantInfo, setAttorneyRepresentingDefendantInfo] = useState("");
  const [defendantAttorneyName, setDefendantAttorneyName] = useState("");
  const [defendantAttorneyBarNumber,setDefendantAttorneyBarNumber] = useState("");
  const [defendantAttorneyOfficeAddress, setDefendantAttorneyOfficeAddress] = useState("");
  const [defendantAttorneyPhoneNumberForCalls, setDefendantAttorneyPhoneNumberForCalls] = useState("");
  const [defendantAttorneyEmail, setDefendantAttorneyEmail] = useState("");
  const [defendantAttorneyFaxNumberOptional,setDefendantAttorneyFaxNumberOptional] = useState("");

  // Questionaire Form 4
  const [howManyIndividualsServed, setHowManyIndividualsServed] = useState("");
  const [employmentOfIndividuals, setEmploymentOfIndividuals] = useState("");
  const [nameOfIndividuals, setNameOfIndividuals] = useState("");
  const [dobOfIndividuals, setDobOfIndividuals] = useState("");
  const [locationForBeingServed, setLocationForBeingServed] = useState("");
  const [mainAddressForService, setMainAddressForService] = useState("");
  const [agentOfService, setAgentOfService] = useState("");
  const [ifYesListFullName, setIfYesListFullName] = useState("");
  const [phoneNumbersOfIndividuals, setPhoneNumberOfIndividuals] = useState("");
  const [emailsOfIndividuals, setEmailsOfIndividuals] = useState("");
  const [addressForCurrentPlaceOfEmployment, setAddressForCurrentPlaceOfEmployment] = useState("");
  const [knownCoResidentsOfServee, setKnownCoResidentsOfServee] = useState("");

  // Questionaire Form 5
  const [serveIndividualAtEmployment, setServeIndividualAtEmployment] = useState("");
  const [processServerLeaveDoorTag,setProcessServerLeaveDoorTag] = useState("");
  const [subserveAfterThreeAttempts, setSubserveAfterThreeAttempts] = useState("");
  const [requireServerNotifyPersonOfInterest, setRequireServerNotifyPersonOfInterest] = useState("");
  const [serverContactServeeByPhone, setServerContactServeeByPhone] = useState("");
  const [serverPostDocumentsWithRubberBand,setServerPostDocumentsWithRubberBand] = useState("");
  const [dropServeForceServe, setDropServeForceServe] = useState("");
  const [paralegalAttorneyClientContactServee, setParalegalAttorneyClientContactServee] = useState("");

  //  Questionaire Form 6
  const [fullNameOfDescribedServee, setFullNameOfDescribedServee] = useState("");
  const [imageOfIndividuals, setImageOfIndividuals] = useState(null);
  const [genderOfIndividuals, setGenderOfIndividuals] = useState("");
  const [ethnicityOfIndividuals, setEthnicityOfIndividuals] = useState("");
  const [heightOfIndividuals, setHeightOfIndividuals] = useState("");
  const [weightOfIndividuals, setWeightOfIndividuals] = useState("");
  const [hairColorOfIndividuals, setHairColorOfIndividuals] = useState("");
  const [eyeColorOfIndividuals, setEyeColorOfIndividuals] = useState("");
  const [physicalOutlineOfIndividuals, setPhysicalOutlineOfIndividuals] = useState("");

  const handleOnPressNext = () => {
    if(activeStep === 1) {
      if(!caseTitle.length) {
        showToast("Please enter case title!", "warning");
      } else if(!caseNumber.length) {
        showToast("Please enter case number!", "warning");
      } else if(!courtDate.length) {
        showToast("Please enter court date!", "warning");
      } else if(!superiorCourtOf.length) {
        showToast("Please enter superior court of!", "warning");
      } else if(!countyOf.length) {
        showToast("Please enter county of!", "warning");
      } else if(!courthouseAddress.length) {
        showToast("Please enter courthouse address!", "warning");
      } else if(!courthouseMailingAddress.length) {
        showToast("Please enter courthouse mailing address!", "warning");
      } else if(!branchName.length) {
        showToast("Please enter branch name!", "warning");
      } else if(!appealsCourtOf.length) {
        showToast("Please enter appeals court of!", "warning");
      } else if(!supremeCourtOf.length) {
        showToast("Please enter supreme court of!", "warning");
      } else {
        let data = {
          caseTitle,
          caseNumber,
          courtDate,
          superiorCourtOf,
          countyOf,
          courthouseAddress,
          courthouseMailingAddress,
          branchName,
          appealsCourtOf,
          supremeCourtOf
        }
        localStorage.setItem('questionaireMain', JSON.stringify(data));
        setActiveStep(2);
      }
    } else if(activeStep === 2) {
      if(!plaintiffFullName.length) {
        showToast("Please enter plaintiff's full name!", "warning");
      } else if(!plaintiffAddress.length) {
        showToast("Please enter plaintiff's address!", "warning");
      } else if(!numberOfAttorneyPlaintiff.length) {
        showToast("Please select number of plaintiff(s) listed!", "warning");
      } else if(!attorneyRepresentingPlaintiffInfo.length) {

      } else if(!plaintiffAttorneyName.length) {
        showToast("Please enter plaintiff's attorney name!", "warning");
      } else if(!plaintiffAttorneyBarNumber.length) {
        showToast("Please enter plaintiff's attorney bar number!", "warning");
      } else if(!plaintiffAttorneyOfficeAddress.length) {
        showToast("Please enter plaintiff's attorney office address!", "warning");
      } else if(!plaintiffAttorneyEmail.length) {
        showToast("Please enter plaintiff's attorney email!", "warning");
      } else if(!plaintiffAttorneyPhoneNumberForCalls.length) {
        showToast("Please enter plaintiff's attorney phone number(s)!", "warning");
      } else {
        let data = {
          plaintiffFullName,
          plaintiffAddress,
          numberOfAttorneyPlaintiff,
          attorneyRepresentingPlaintiffInfo,
          plaintiffAttorneyName,
          plaintiffAttorneyBarNumber,
          plaintiffAttorneyOfficeAddress,
          plaintiffAttorneyEmail,
          plaintiffAttorneyPhoneNumberForCalls,
          plaintiffAttorneyFaxNumberOptional
        };
        localStorage.setItem('questionairePlaintiff', JSON.stringify(data));
        setActiveStep(3);
      }
    } else if(activeStep === 3) {
      if(!defendantFullName.length) {
        showToast("Please enter defendant's full name!", "warning");
      } else if(!defendantAddress.length) {
        showToast("Please enter defendant's address!", "warning");
      } else if(!numberOfAttorneyDefendant.length) {
        showToast("Please enter number of attorney defendant!", "warning");
      } else if(!attorneyRepresentingDefendantInfo.length) {
        showToast("Please enter attorney representing defendant info!", "warning");
      } else if(!defendantAttorneyName.length) {
        showToast("Please enter defendant attorney name!", "warning");
      } else if(!defendantAttorneyOfficeAddress.length) {
        showToast("Please enter defendant attorney office address!", "warning");
      } else if(!defendantAttorneyBarNumber.length) {
        showToast("Please enter defendant attorney bar number!", "warning");
      } else if(!defendantAttorneyEmail.length) {
        showToast("Please enter defendant attorney email!", "warning");
      } else if(!defendantAttorneyPhoneNumberForCalls.length) {
        showToast("Please enter defendant attorney phone number!", "warning");
      } else {
        let data = {
          defendantFullName,
          defendantAddress,
          numberOfAttorneyDefendant,
          attorneyRepresentingDefendantInfo,
          defendantAttorneyName,
          defendantAttorneyOfficeAddress,
          defendantAttorneyBarNumber,
          defendantAttorneyEmail,
          defendantAttorneyPhoneNumberForCalls,
          defendantAttorneyFaxNumberOptional
        };
        localStorage.setItem('questionaireDefendant', JSON.stringify(data));
        // history.push('/questionaire-servee-documented-data')
        setActiveStep(4);
      }
    } else if(activeStep === 4) {
      if(!howManyIndividualsServed.length) {
        showToast("Please select how many individuals being served!", "warning");
      } else if(!employmentOfIndividuals.length) {
        showToast("Please enter employment of individuals!", "warning");
      } else if(!nameOfIndividuals.length) {
        showToast("Please enter name of individuals!", "warning");
      } else if(!dobOfIndividuals.length) {
        showToast("Please enter date of birth of individuals!", "warning");
      } else if(!locationForBeingServed.length) {
        showToast("Please enter location for being served!", "warning");
      } else if(!mainAddressForService.length) {
        showToast("Please enter main address for service!", "warning");
      } else if(!agentOfService.length) {
        showToast("Please enter agent of service!", "warning");
      } else if(!ifYesListFullName.length) {
        showToast("Please enter full name!", "warning");
      } else if(!phoneNumbersOfIndividuals.length) {
        showToast("Please enter phone numbers of individuals!", "warning");
      } else if(!emailsOfIndividuals.length) {
        showToast("Please enter emails of individuals!", "warning");
      } else if(!addressForCurrentPlaceOfEmployment.length) {
        showToast("Please enter address for current place of employment!", "warning");
      } else if(!knownCoResidentsOfServee.length) {
        showToast("Please enter known co residents of servee!", "warning");
      } else {
        let data = {
          howManyIndividualsServed,          
          employmentOfIndividuals,
          nameOfIndividuals,
          dobOfIndividuals,
          locationForBeingServed,
          mainAddressForService,
          agentOfService,          
          ifYesListFullName,
          phoneNumbersOfIndividuals,
          emailsOfIndividuals,
          addressForCurrentPlaceOfEmployment,
          knownCoResidentsOfServee
        };
        localStorage.setItem('questionaireServeeDocumentedData', JSON.stringify(data));
        // history.push('/questionaire-clearance-of-action');
        setActiveStep(5);
      }
    } else if(activeStep === 5) {
      if(!serveIndividualAtEmployment.length) {
        showToast("Please select should the servee be served at the place of employment!", "warning");
      } else if(!processServerLeaveDoorTag.length) {
        showToast("Please select should process server leave a door tag on the handle, or business card!", "warning");
      } else if(!subserveAfterThreeAttempts.length) {
        showToast("Please select should we “Subserve” to a Co-Resident/Co-Worker After 4 Attempts", "warning");
      } else if(!requireServerNotifyPersonOfInterest.length) {
        showToast("Please select should process server verbally notify the Servee", "warning");
      } else if(!serverContactServeeByPhone.length) {
        showToast("Please select should process server Contact the Servee by Phone", "warning");
      } else if(!serverPostDocumentsWithRubberBand.length) {
        showToast("Please select may process server post documents with a rubber band", "warning");
      } else if(!dropServeForceServe.length) {
        showToast("Please select if “Drop Serve / Force Serve” Allowed", "warning");
      } else if(!paralegalAttorneyClientContactServee.length) {
        showToast("Please select whether paralegal/attorney, or your client contacted the Individual regarding service on this case", "warning");
      } else {
        let data = {
          serveIndividualAtEmployment,
          processServerLeaveDoorTag,
          subserveAfterThreeAttempts,          
          requireServerNotifyPersonOfInterest,
          serverContactServeeByPhone,
          serverPostDocumentsWithRubberBand,
          dropServeForceServe,          
          paralegalAttorneyClientContactServee
        };
        localStorage.setItem('questionaireClearanceOfAction', JSON.stringify(data));
        // history.push('/questionaire-servee-physical-description')
        setActiveStep(6);
      }
    } else if(activeStep===6) {
      if(!fullNameOfDescribedServee.length) {
        showToast("Please enter full name of described servee!", "warning");
      } else if(!imageOfIndividuals) {
        showToast("Please upload image of individuals!", "warning");
      } else if(!genderOfIndividuals.length) {
        showToast("Please select gender of individuals!", "warning");
      } else if(!ethnicityOfIndividuals.length) {
        showToast("Please select ethnicity of individuals!", "warning");
      } else if(!heightOfIndividuals.length) {
        showToast("Please enter height of individuals!", "warning");
      } else if(!weightOfIndividuals.length) {
        showToast("Please enter weight of individuals!", "warning");
      } else if(!hairColorOfIndividuals.length) {
        showToast("Please enter hair color of individuals!", "warning");
      } else if(!eyeColorOfIndividuals.length) {
        showToast("Please enter eye color of individuals!", "warning");
      } else if(!physicalOutlineOfIndividuals.length) {
        showToast("Please enter physical outline of individuals!", "warning");
      } else {
        let data = {
          fullNameOfDescribedServee,
          imageOfIndividuals,
          genderOfIndividuals,
          ethnicityOfIndividuals,
          heightOfIndividuals,
          weightOfIndividuals,
          hairColorOfIndividuals,
          eyeColorOfIndividuals,
          physicalOutlineOfIndividuals
        };
        localStorage.setItem('questionaireServeePhysicalDescription', JSON.stringify(data));
        // history.push('/questionaire-vehicle-information')
        setActiveStep(7);
      }
    }
  }

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
      return "Proceed to the Servee Physical Description Section";
    } else if(activeStep===7) {
      return "Proceed to the Servee Physical Description Section";
    }
  }

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Stepper
        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }, { label: 'Step 5' }, { label: 'Step 6' }, { label: 'Step 7' }]}
        activeStep={activeStep}
      />
      <br></br>
      <br></br>
      <Link to="/member-dashboard" className="btn btn-primary" style={{ marginLeft: "auto" }}>Back to Dashboard</Link>
      
      {
        activeStep === 1
          &&
            <Questionaire1
              caseTitle={caseTitle}
              setCaseTitle={setCaseTitle}
              caseNumber={caseNumber}
              setCaseNumber={setCaseNumber}
              courtDate={courtDate}
              setCourtDate={setCourtDate}
              superiorCourtOf={superiorCourtOf}
              setSuperiorCourtOf={setSuperiorCourtOf}
              countyOf={countyOf}
              setCountyOf={setCountyOf}
              branchName={branchName}
              setBranchName={setBranchName}
              courthouseAddress={courthouseAddress}
              setCourthouseAddress={setCourthouseAddress}
              courthouseMailingAddress={courthouseMailingAddress}
              setCourthouseMailingAddress={setCourthouseMailingAddress}
              appealsCourtOf={appealsCourtOf}
              setAppealsCourtOf={setAppealsCourtOf}
              supremeCourtOf={supremeCourtOf}
              setSupremeCourtOf={setSupremeCourtOf}
            />
      }
      {
        activeStep === 2
          &&
            <Questionaire2
              plaintiffFullName={plaintiffFullName}
              setPlaintiffFullName={setPlaintiffFullName}
              plaintiffAddress={plaintiffAddress}
              setPlaintiffAddress={setPlaintiffAddress}
              numberOfAttorneyPlaintiff={numberOfAttorneyPlaintiff}
              setNumberOfAttorneyPlaintiff={setNumberOfAttorneyPlaintiff}
              attorneyRepresentingPlaintiffInfo={attorneyRepresentingPlaintiffInfo}
              setAttorneyRepresentingPlaintiffInfo={setAttorneyRepresentingPlaintiffInfo}
              plaintiffAttorneyName={plaintiffAttorneyName}
              setPlaintiffAttorneyName={setPlaintiffAttorneyName}
              plaintiffAttorneyBarNumber={plaintiffAttorneyBarNumber}
              setPlaintiffAttorneyBarNumber={setPlaintiffAttorneyBarNumber}
              plaintiffAttorneyOfficeAddress={plaintiffAttorneyOfficeAddress}
              setPlaintiffAttorneyOfficeAddress={setPlaintiffAttorneyOfficeAddress}
              plaintiffAttorneyEmail={plaintiffAttorneyEmail}
              setPlaintiffAttorneyEmail={setPlaintiffAttorneyEmail}
              plaintiffAttorneyPhoneNumberForCalls={plaintiffAttorneyPhoneNumberForCalls}
              setPlaintiffAttorneyPhoneNumberForCalls={setPlaintiffAttorneyPhoneNumberForCalls}
              plaintiffAttorneyFaxNumberOptional={plaintiffAttorneyFaxNumberOptional}
              setPlaintiffAttorneyFaxNumberOptional={setPlaintiffAttorneyFaxNumberOptional}
            />
      }
      {
        activeStep === 3
          &&
            <Questionaire3
              defendantFullName={defendantFullName}
              setDefendantFullName={setDefendantFullName}
              defendantAddress={defendantAddress}
              setDefendantAddress={setDefendantAddress}
              numberOfAttorneyDefendant={numberOfAttorneyDefendant}
              setNumberOfAttorneyDefendant={setNumberOfAttorneyDefendant}
              attorneyRepresentingDefendantInfo={attorneyRepresentingDefendantInfo}
              setAttorneyRepresentingDefendantInfo={setAttorneyRepresentingDefendantInfo}
              defendantAttorneyName={defendantAttorneyName}
              setDefendantAttorneyName={setDefendantAttorneyName}
              defendantAttorneyOfficeAddress={defendantAttorneyOfficeAddress}
              setDefendantAttorneyOfficeAddress={setDefendantAttorneyOfficeAddress}
              defendantAttorneyBarNumber={defendantAttorneyBarNumber}
              setDefendantAttorneyBarNumber={setDefendantAttorneyBarNumber}
              defendantAttorneyEmail={defendantAttorneyEmail}
              setDefendantAttorneyEmail={setDefendantAttorneyEmail}
              defendantAttorneyPhoneNumberForCalls={defendantAttorneyPhoneNumberForCalls}
              setDefendantAttorneyPhoneNumberForCalls={setDefendantAttorneyPhoneNumberForCalls}
              defendantAttorneyFaxNumberOptional={defendantAttorneyFaxNumberOptional}
              setDefendantAttorneyFaxNumberOptional={setDefendantAttorneyFaxNumberOptional}
            />
      }
      {
        activeStep === 4
          &&
            <Questionaire4
              howManyIndividualsServed={howManyIndividualsServed}
              setHowManyIndividualsServed={setHowManyIndividualsServed}
              employmentOfIndividuals={employmentOfIndividuals}
              setEmploymentOfIndividuals={setEmploymentOfIndividuals}
              nameOfIndividuals={nameOfIndividuals}
              setNameOfIndividuals={setNameOfIndividuals}
              dobOfIndividuals={dobOfIndividuals}
              setDobOfIndividuals={setDobOfIndividuals}
              locationForBeingServed={locationForBeingServed}
              setLocationForBeingServed={setLocationForBeingServed}
              mainAddressForService={mainAddressForService}
              setMainAddressForService={setMainAddressForService}
              agentOfService={agentOfService}
              setAgentOfService={setAgentOfService}
              ifYesListFullName={ifYesListFullName}
              setIfYesListFullName={setIfYesListFullName}
              phoneNumbersOfIndividuals={phoneNumbersOfIndividuals}
              setPhoneNumberOfIndividuals={setPhoneNumberOfIndividuals}
              emailsOfIndividuals={emailsOfIndividuals}
              setEmailsOfIndividuals={setEmailsOfIndividuals}
              addressForCurrentPlaceOfEmployment={addressForCurrentPlaceOfEmployment}
              setAddressForCurrentPlaceOfEmployment={setAddressForCurrentPlaceOfEmployment}
              knownCoResidentsOfServee={knownCoResidentsOfServee}
              setKnownCoResidentsOfServee={setKnownCoResidentsOfServee}
            />
      }
      {
        activeStep === 5
          &&
            <Questionaire5
              serveIndividualAtEmployment={serveIndividualAtEmployment}
              setServeIndividualAtEmployment={setServeIndividualAtEmployment}
              processServerLeaveDoorTag={processServerLeaveDoorTag}
              setProcessServerLeaveDoorTag={setProcessServerLeaveDoorTag}
              subserveAfterThreeAttempts={subserveAfterThreeAttempts}  
              setSubserveAfterThreeAttempts={setSubserveAfterThreeAttempts}        
              requireServerNotifyPersonOfInterest={requireServerNotifyPersonOfInterest}
              setRequireServerNotifyPersonOfInterest={setRequireServerNotifyPersonOfInterest}
              serverContactServeeByPhone={serverContactServeeByPhone}
              setServerContactServeeByPhone={setServerContactServeeByPhone}
              serverPostDocumentsWithRubberBand={serverPostDocumentsWithRubberBand}
              setServerPostDocumentsWithRubberBand={setServerPostDocumentsWithRubberBand}
              dropServeForceServe={dropServeForceServe}
              setDropServeForceServe={setDropServeForceServe}   
              paralegalAttorneyClientContactServee={paralegalAttorneyClientContactServee}
              setParalegalAttorneyClientContactServee={setParalegalAttorneyClientContactServee}
            />
      }
      {
        activeStep === 6
          &&
            <Questionaire6
              fullNameOfDescribedServee={fullNameOfDescribedServee}
              setFullNameOfDescribedServee={setFullNameOfDescribedServee}
              imageOfIndividuals={imageOfIndividuals}
              setImageOfIndividuals={setImageOfIndividuals}
              genderOfIndividuals={genderOfIndividuals}
              setGenderOfIndividuals={setGenderOfIndividuals}
              ethnicityOfIndividuals={ethnicityOfIndividuals}
              setEthnicityOfIndividuals={setEthnicityOfIndividuals}
              heightOfIndividuals={heightOfIndividuals}
              setHeightOfIndividuals={setHeightOfIndividuals}
              weightOfIndividuals={weightOfIndividuals}
              setWeightOfIndividuals={setWeightOfIndividuals}
              hairColorOfIndividuals={hairColorOfIndividuals}
              setHairColorOfIndividuals={setHairColorOfIndividuals}
              eyeColorOfIndividuals={eyeColorOfIndividuals}
              setEyeColorOfIndividuals={setEyeColorOfIndividuals}
              physicalOutlineOfIndividuals={physicalOutlineOfIndividuals}
              setPhysicalOutlineOfIndividuals={setPhysicalOutlineOfIndividuals}
            />
      }
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary mt-1 mb-1"
          onClick={handleOnPressNext}
        >
          {getButtonTitle()}
        </button>
      </div>
      <br/><br/><br/>
    </React.Fragment>
  )
};

export default Questionaire;