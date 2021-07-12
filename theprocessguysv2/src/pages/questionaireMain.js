import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Stepper } from 'react-form-stepper';
import {
  Questionaire1,
  Questionaire2,
  Questionaire3
} from "../forms/NewCaseSubmission";
import { showToast } from "../utils";

function Questionaire() {

  const user = useSelector(state => state.auth.user);
  const [activeStep, setActiveStep] = useState(1);
  
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
      return "Proceed to Plaintiff Section";
    } else if(activeStep===5) {
      return "Proceed to Plaintiff Section";
    }
  }

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Stepper
        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
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