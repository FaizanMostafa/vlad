import React, { useEffect, useState } from 'react';
import { Link as RSLink, Element } from 'react-scroll';
import { Stepper } from 'react-form-stepper';
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
} from "../forms/NewCaseSubmission";
import { showToast } from "../utils";

function Questionaire() {

  const [activeStep, setActiveStep] = useState(1);
  
  // Questionaire Form 1
  const [caseTitle, setCaseTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [courtDate, setCourtDate] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtState, setCourtState] = useState("");
  const [countyOf, setCountyOf] = useState("");
  const [courthouseAddress, setCourthouseAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [courthouseMailingAddress, setCourthouseMailingAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [branchName, setBranchName] = useState("");

  // Questionaire Form 2
  const [shouldPGFillPlaintiffInfo, setShouldPGFillPlaintiffInfo] = useState(false);
  const [plaintiffFullName, setPlaintiffFullName] = useState({firstName: "", middleName: "", lastName: ""});
  const [plaintiffAddress, setPlaintiffAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [numberOfAttorneyPlaintiff, setNumberOfAttorneyPlaintiff] = useState("");
  const [attorneyRepresentingPlaintiffInfo, setAttorneyRepresentingPlaintiffInfo] = useState("");    
  const [plaintiffAttorneyName, setPlaintiffAttorneyName] = useState({firstName: "", middleName: "", lastName: ""});
  const [plaintiffAttorneyBarNumber, setPlaintiffAttorneyBarNumber] = useState("");
  const [plaintiffAttorneyFirmAddress, setPlaintiffAttorneyFirmAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [plaintiffAttorneyPhoneNumberForCalls, setPlaintiffAttorneyPhoneNumberForCalls] = useState("");
  const [plaintiffAttorneyEmail, setPlaintiffAttorneyEmail] = useState("");
  const [plaintiffAttorneyFaxNumberOptional, setPlaintiffAttorneyFaxNumberOptional] = useState("");

  // Questionaire Form 3
  const [shouldPGFillDefendantInfo, setShouldPGFillDefendantInfo] = useState(false);
  const [defendantFullName, setDefendantFullName] = useState("");
  const [defendantAddress, setDefendantAddress] = useState("");
  const [numberOfAttorneyDefendant, setNumberOfAttorneyDefendant] = useState("");
  const [attorneyRepresentingDefendantInfo, setAttorneyRepresentingDefendantInfo] = useState("");
  const [defendantAttorneyName, setDefendantAttorneyName] = useState("");
  const [defendantAttorneyBarNumber,setDefendantAttorneyBarNumber] = useState("");
  const [defendantAttorneyFirmAddress, setDefendantAttorneyFirmAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [defendantAttorneyPhoneNumberForCalls, setDefendantAttorneyPhoneNumberForCalls] = useState("");
  const [defendantAttorneyEmail, setDefendantAttorneyEmail] = useState("");
  const [defendantAttorneyFaxNumberOptional,setDefendantAttorneyFaxNumberOptional] = useState("");

  // Questionaire Form 4
  const [numberOfCaseFilesBeingServed, setNumberOfCaseFilesBeingServed] = useState("");
  const [howManyIndividualsServed, setHowManyIndividualsServed] = useState("");
  const [employmentOfIndividuals, setEmploymentOfIndividuals] = useState("");
  const [nameOfIndividuals, setNameOfIndividuals] = useState("");
  const [dobOfIndividuals, setDobOfIndividuals] = useState("");
  const [locationForBeingServed, setLocationForBeingServed] = useState("");
  const [mainAddressForService, setMainAddressForService] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [agentOfService, setAgentOfService] = useState("");
  const [ifYesListFullName, setIfYesListFullName] = useState("");
  const [phoneNumbersOfIndividuals, setPhoneNumberOfIndividuals] = useState("");
  const [emailsOfIndividuals, setEmailsOfIndividuals] = useState("");
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

  // Questionaire Form 7
  const [insuranceCompanyOfServee, setInsuranceCompanyOfServee] = useState("");
  const [licensePlateNumberState, setLicensePlateNumberState] = useState("");
  const [vinNumberOfIndividuals, setVinNumberOfIndividuals] = useState("");
  const [yearOfMakeOnVehicle, setYearOfMakeOnVehicle] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleTypeModelOwnership, setVehicleTypeModelOwnership] = useState("");

  // Questionaire Form 8
  const [requireStakeOutService, setRequireStakeoutService] = useState("");
  const [specifyDatesForStakeOutService, setSpecifyDatesForStakeOutService] = useState("");
  const [requireRushService, setRequireRushService] = useState("");
  const [listDateWhenServiceAttemptsClosed, setListDateWhenServiceAttemptsClosed] = useState("");
  const [requireFirst24HourService,setRequireFirst24HourService] = useState("");
  const [requireSkipTracingService, setRequireSkipTracingService] = useState("");
  const [requireBodyCamFootage, setRequireBodyCamFootage] = useState("");
  const [obtainNewDeliveryLocation, setObtainNewDeliveryLocation] = useState("");
  const [poBoxAllowedToServe, setPOBoxAllowedToServe] = useState("");
  const [requireServiceByMail, setRequireServiceByMail] = useState("");
  const [requireByEmail, setRequireByEmail] = useState("");
  const [specificCourtInstruction, setSpecificCourtInstruction] = useState("");
  const [requireZipFileService, setRequireZipFileService] = useState("");
  const [ifYesListAddress, setIfYesListAddress] = useState("");

  useEffect(() => {
    const QuestionaireForm1 = JSON.parse(localStorage.getItem("Questionaire1"));
    const QuestionaireForm2 = JSON.parse(localStorage.getItem("Questionaire2"));
    const QuestionaireForm3 = JSON.parse(localStorage.getItem("Questionaire3"));
    const QuestionaireForm4 = JSON.parse(localStorage.getItem("Questionaire4"));
    const QuestionaireForm5 = JSON.parse(localStorage.getItem("Questionaire5"));
    const QuestionaireForm6 = JSON.parse(localStorage.getItem("Questionaire6"));
    const QuestionaireForm7 = JSON.parse(localStorage.getItem("Questionaire7"));
    const QuestionaireForm8 = JSON.parse(localStorage.getItem("Questionaire8"));
    if(QuestionaireForm1) {
      setActiveStep(2);
      setCaseTitle(QuestionaireForm1.caseTitle);
      setCaseNumber(QuestionaireForm1.caseNumber);
      setCourtDate(QuestionaireForm1.courtDate);
      setCourtType(QuestionaireForm1.courtType);
      setCourtState(QuestionaireForm1.courtState);
      setCountyOf(QuestionaireForm1.countyOf);
      setCourthouseAddress(QuestionaireForm1.courthouseAddress);
      setCourthouseMailingAddress(QuestionaireForm1.courthouseMailingAddress);
      setBranchName(QuestionaireForm1.branchName);
    }
    if(QuestionaireForm2) {
      setActiveStep(3);
      setPlaintiffFullName(QuestionaireForm2.plaintiffFullName);
      setShouldPGFillPlaintiffInfo(QuestionaireForm2.shouldPGFillPlaintiffInfo);
      setPlaintiffAddress(QuestionaireForm2.plaintiffAddress);
      setNumberOfAttorneyPlaintiff(QuestionaireForm2.numberOfAttorneyPlaintiff);
      setAttorneyRepresentingPlaintiffInfo(QuestionaireForm2.attorneyRepresentingPlaintiffInfo) 
      setPlaintiffAttorneyName(QuestionaireForm2.plaintiffAttorneyName);
      setPlaintiffAttorneyBarNumber(QuestionaireForm2.plaintiffAttorneyBarNumber);
      setPlaintiffAttorneyFirmAddress(QuestionaireForm2.plaintiffAttorneyFirmAddress);
      setPlaintiffAttorneyPhoneNumberForCalls(QuestionaireForm2.plaintiffAttorneyPhoneNumberForCalls);
      setPlaintiffAttorneyEmail(QuestionaireForm2.plaintiffAttorneyEmail);
      setPlaintiffAttorneyFaxNumberOptional(QuestionaireForm2.plaintiffAttorneyFaxNumberOptional);
    }
    if(QuestionaireForm3) {
      setActiveStep(4);
      setDefendantFullName(QuestionaireForm3.defendantFullName);
      setShouldPGFillDefendantInfo(QuestionaireForm3.shouldPGFillDefendantInfo);
      setDefendantAddress(QuestionaireForm3.defendantAddress);
      setNumberOfAttorneyDefendant(QuestionaireForm3.numberOfAttorneyDefendant);
      setAttorneyRepresentingDefendantInfo(QuestionaireForm3.attorneyRepresentingDefendantInfo);
      setDefendantAttorneyName(QuestionaireForm3.defendantAttorneyName);
      setDefendantAttorneyBarNumber(QuestionaireForm3.defendantAttorneyBarNumber);
      setDefendantAttorneyFirmAddress(QuestionaireForm3.defendantAttorneyFirmAddress);
      setDefendantAttorneyPhoneNumberForCalls(QuestionaireForm3.defendantAttorneyPhoneNumberForCalls);
      setDefendantAttorneyEmail(QuestionaireForm3.defendantAttorneyEmail);
      setDefendantAttorneyFaxNumberOptional(QuestionaireForm3.defendantAttorneyFaxNumberOptional);
    }
    if(QuestionaireForm4) {
      setActiveStep(5);
      setNumberOfCaseFilesBeingServed(QuestionaireForm4.numberOfCaseFilesBeingServed);
      setHowManyIndividualsServed(QuestionaireForm4.howManyIndividualsServed);
      setEmploymentOfIndividuals(QuestionaireForm4.employmentOfIndividuals);
      setNameOfIndividuals(QuestionaireForm4.nameOfIndividuals);
      setDobOfIndividuals(QuestionaireForm4.dobOfIndividuals);
      setLocationForBeingServed(QuestionaireForm4.locationForBeingServed);
      setMainAddressForService(QuestionaireForm4.mainAddressForService);
      setAgentOfService(QuestionaireForm4.agentOfService);
      setIfYesListFullName(QuestionaireForm4.ifYesListFullName);
      setPhoneNumberOfIndividuals(QuestionaireForm4.phoneNumbersOfIndividuals);
      setEmailsOfIndividuals(QuestionaireForm4.emailsOfIndividuals);
      setKnownCoResidentsOfServee(QuestionaireForm4.knownCoResidentsOfServee);
    }
    if(QuestionaireForm5) {
      setActiveStep(6);
      setServeIndividualAtEmployment(QuestionaireForm5.serveIndividualAtEmployment);
      setProcessServerLeaveDoorTag(QuestionaireForm5.processServerLeaveDoorTag);
      setSubserveAfterThreeAttempts(QuestionaireForm5.subserveAfterThreeAttempts);
      setRequireServerNotifyPersonOfInterest(QuestionaireForm5.requireServerNotifyPersonOfInterest);
      setServerContactServeeByPhone(QuestionaireForm5.serverContactServeeByPhone);
      setServerPostDocumentsWithRubberBand(QuestionaireForm5.serverPostDocumentsWithRubberBand);
      setDropServeForceServe(QuestionaireForm5.dropServeForceServe);
      setParalegalAttorneyClientContactServee(QuestionaireForm5.paralegalAttorneyClientContactServee);
    }
    if(QuestionaireForm6) {
      setActiveStep(7);
      setFullNameOfDescribedServee(QuestionaireForm6.fullNameOfDescribedServee);
      setImageOfIndividuals(QuestionaireForm6.imageOfIndividuals);
      setGenderOfIndividuals(QuestionaireForm6.genderOfIndividuals);
      setEthnicityOfIndividuals(QuestionaireForm6.ethnicityOfIndividuals);
      setHeightOfIndividuals(QuestionaireForm6.heightOfIndividuals);
      setWeightOfIndividuals(QuestionaireForm6.weightOfIndividuals);
      setHairColorOfIndividuals(QuestionaireForm6.hairColorOfIndividuals);
      setEyeColorOfIndividuals(QuestionaireForm6.eyeColorOfIndividuals);
      setPhysicalOutlineOfIndividuals(QuestionaireForm6.physicalOutlineOfIndividuals);
    }
    if(QuestionaireForm7) {
      setActiveStep(8);
      setInsuranceCompanyOfServee(QuestionaireForm7.insuranceCompanyOfServee);
      setLicensePlateNumberState(QuestionaireForm7.licensePlateNumberState);
      setVinNumberOfIndividuals(QuestionaireForm7.vinNumberOfIndividuals);
      setYearOfMakeOnVehicle(QuestionaireForm7.yearOfMakeOnVehicle);
      setVehicleColor(QuestionaireForm7.vehicleColor);
      setVehicleTypeModelOwnership(QuestionaireForm7.vehicleTypeModelOwnership);
    }
    if(QuestionaireForm8) {
      setActiveStep(9);
      setRequireStakeoutService(QuestionaireForm8.requireStakeOutService);
      setSpecifyDatesForStakeOutService(QuestionaireForm8.specifyDatesForStakeOutService);
      setRequireRushService(QuestionaireForm8.requireRushService);
      setListDateWhenServiceAttemptsClosed(QuestionaireForm8.listDateWhenServiceAttemptsClosed);
      setRequireFirst24HourService(QuestionaireForm8.requireFirst24HourService);
      setRequireSkipTracingService(QuestionaireForm8.requireSkipTracingService);
      setRequireBodyCamFootage(QuestionaireForm8.requireBodyCamFootage);
      setObtainNewDeliveryLocation(QuestionaireForm8.obtainNewDeliveryLocation);
      setPOBoxAllowedToServe(QuestionaireForm8.poBoxAllowedToServe);
      setRequireServiceByMail(QuestionaireForm8.requireServiceByMail);
      setRequireByEmail(QuestionaireForm8.requireByEmail);
      setSpecificCourtInstruction(QuestionaireForm8.specificCourtInstruction);
      setRequireZipFileService(QuestionaireForm8.requireZipFileService);
      setIfYesListAddress(QuestionaireForm8.ifYesListAddress);
    }
  }, []);

  const handleOnPressNext = () => {
    if(activeStep === 1) {
      if(!caseTitle.length) {
        showToast("Please enter case title!", "warning");
      } else if(!caseNumber.length) {
        showToast("Please enter case number!", "warning");
      } else if(!courtDate.length) {
        showToast("Please enter court date!", "warning");
      } else if(!courtType.length) {
        showToast("Please select the applicable court!", "warning");
      } else if(!courtState.length) {
        showToast("Please select the court state!", "warning");
      } else if(!branchName.length) {
        showToast("Please enter branch name!", "warning");
      } else if(!courthouseAddress.street.length) {
        showToast("Please enter courthouse street!", "warning");
      } else if(!courthouseAddress.city.length) {
        showToast("Please enter courthouse city!", "warning");
      } else if(!courthouseAddress.state.length) {
        showToast("Please enter courthouse state!", "warning");
      } else if(!courthouseAddress.zipCode.length) {
        showToast("Please enter courthouse zip code!", "warning");
      } else if(!courthouseAddress.country.length) {
        showToast("Please enter courthouse country!", "warning");
      } else if(!courthouseMailingAddress.street.length) {
        showToast("Please enter courthouse mailing street!", "warning");
      } else if(!courthouseMailingAddress.city.length) {
        showToast("Please enter courthouse mailing city!", "warning");
      } else if(!courthouseMailingAddress.state.length) {
        showToast("Please enter courthouse mailing state!", "warning");
      } else if(!courthouseMailingAddress.zipCode.length) {
        showToast("Please enter courthouse mailing zip code!", "warning");
      } else if(!courthouseMailingAddress.country.length) {
        showToast("Please enter courthouse mailing country!", "warning");
      } else if(!countyOf.length) {
        showToast("Please enter county of!", "warning");
      } else {
        let data = {
          caseTitle,
          caseNumber,
          courtDate,
          courtType,
          courtState,
          countyOf,
          courthouseAddress,
          courthouseMailingAddress,
          branchName
        }
        localStorage.setItem('Questionaire1', JSON.stringify(data));
        setActiveStep(2);
      }
    } else if(activeStep === 2) {
      if(!shouldPGFillPlaintiffInfo && !numberOfAttorneyPlaintiff.length) {
        showToast("Please select number of plaintiff(s) listed!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && !plaintiffFullName.length) {
        showToast("Please enter plaintiff's full name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && !plaintiffAddress.length) {
        showToast("Please enter plaintiff's address!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && !attorneyRepresentingPlaintiffInfo.length) {
        showToast("Please select number of attorney's representing plaintiff!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyName.length) {
        showToast("Please enter plaintiff's attorney name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyBarNumber.length) {
        showToast("Please enter plaintiff's attorney bar number!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyEmail.length) {
        showToast("Please enter plaintiff's attorney email!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyFirmAddress.street.length) {
        showToast("Please enter plaintiff's attorney firm street!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyFirmAddress.city.length) {
        showToast("Please enter plaintiff's attorney firm city!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyFirmAddress.state.length) {
        showToast("Please enter plaintiff's attorney firm state!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyFirmAddress.zipCode.length) {
        showToast("Please enter plaintiff's attorney firm zip code!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && attorneyRepresentingPlaintiffInfo!=="0" && !plaintiffAttorneyFirmAddress.country.length) {
        showToast("Please enter plaintiff's attorney firm country!", "warning");
      } else {
        let data = {
          plaintiffFullName,
          plaintiffAddress,
          numberOfAttorneyPlaintiff,
          shouldPGFillPlaintiffInfo,
          attorneyRepresentingPlaintiffInfo,
          plaintiffAttorneyName,
          plaintiffAttorneyBarNumber,
          plaintiffAttorneyFirmAddress,
          plaintiffAttorneyEmail,
          plaintiffAttorneyPhoneNumberForCalls,
          plaintiffAttorneyFaxNumberOptional
        };
        localStorage.setItem('Questionaire2', JSON.stringify(data));
        setActiveStep(3);
      }
    } else if(activeStep === 3) {
      if(!shouldPGFillDefendantInfo && !numberOfAttorneyDefendant.length) {
        showToast("Please select number of defendant(s) listed!", "warning");
      } else if(!shouldPGFillDefendantInfo && !defendantFullName.length) {
        showToast("Please enter defendant's full name!", "warning");
      } else if(!shouldPGFillDefendantInfo && !attorneyRepresentingDefendantInfo.length) {
        showToast("Please select number of attorney's representing defendant!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyName.length) {
        showToast("Please enter defendant attorney name!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyBarNumber.length) {
        showToast("Please enter defendant attorney bar number!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyEmail.length) {
        showToast("Please enter defendant attorney email!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyFirmAddress.street.length) {
        showToast("Please enter defendant attorney office street!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyFirmAddress.city.length) {
        showToast("Please enter defendant attorney office city!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyFirmAddress.state.length) {
        showToast("Please enter defendant attorney office state!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyFirmAddress.zipCode.length) {
        showToast("Please enter defendant attorney office zip code!", "warning");
      } else if(!shouldPGFillDefendantInfo && attorneyRepresentingDefendantInfo!=="0" && !defendantAttorneyFirmAddress.country.length) {
        showToast("Please enter defendant attorney office country!", "warning");
      } else {
        let data = {
          defendantFullName,
          defendantAddress,
          numberOfAttorneyDefendant,
          shouldPGFillDefendantInfo,
          attorneyRepresentingDefendantInfo,
          defendantAttorneyName,
          defendantAttorneyFirmAddress,
          defendantAttorneyBarNumber,
          defendantAttorneyEmail,
          defendantAttorneyPhoneNumberForCalls,
          defendantAttorneyFaxNumberOptional
        };
        localStorage.setItem('Questionaire3', JSON.stringify(data));
        setActiveStep(4);
      }
    } else if(activeStep === 4) {
      if(!numberOfCaseFilesBeingServed.length) {
        showToast("Please select how many case files being served!", "warning");
      } else if(!howManyIndividualsServed.length) {
        showToast("Please select how many individuals being served!", "warning");
      } else if(!nameOfIndividuals.length) {
        showToast("Please enter full name of individual(s) who is receiving Service!", "warning");
      } else if(!dobOfIndividuals.length) {
        showToast("Please enter date of birth of servee!", "warning");
      } else if(!locationForBeingServed.length) {
        showToast("Please select the kind of location being served!", "warning");
      } else if(!mainAddressForService.street.length) {
        showToast("Please enter street for service!", "warning");
      } else if(!mainAddressForService.city.length) {
        showToast("Please enter city for service!", "warning");
      } else if(!mainAddressForService.state.length) {
        showToast("Please enter state for service!", "warning");
      } else if(!mainAddressForService.zipCode.length) {
        showToast("Please enter zip code for service!", "warning");
      } else if(!mainAddressForService.country.length) {
        showToast("Please enter country for service!", "warning");
      } else if(typeof(agentOfService)!=="boolean") {
        showToast("Please select if there is an agent of service!", "warning");
      } else if(agentOfService && !ifYesListFullName.length) {
        showToast("Please enter full name to agent of service!", "warning");
      } else if(!employmentOfIndividuals.length) {
        showToast("Please select employment of individuals!", "warning");
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
          knownCoResidentsOfServee
        };
        localStorage.setItem('Questionaire4', JSON.stringify(data));
        setActiveStep(5);
      }
    } else if(activeStep === 5) {
      if(typeof(serveIndividualAtEmployment)!=="boolean") {
        showToast("Please select should the servee be served at the place of employment!", "warning");
      } else if(typeof(processServerLeaveDoorTag)!=="boolean") {
        showToast("Please select should process server leave a door tag on the handle, or business card!", "warning");
      } else if(typeof(subserveAfterThreeAttempts)!=="boolean") {
        showToast("Please select should we “Subserve” to a Co-Resident/Co-Worker After 4 Attempts", "warning");
      } else if(typeof(requireServerNotifyPersonOfInterest)!=="boolean") {
        showToast("Please select should process server verbally notify the Servee", "warning");
      } else if(typeof(serverContactServeeByPhone)!=="boolean") {
        showToast("Please select should process server Contact the Servee by Phone", "warning");
      } else if(typeof(serverPostDocumentsWithRubberBand)!=="boolean") {
        showToast("Please select may process server post documents with a rubber band", "warning");
      } else if(typeof(dropServeForceServe)!=="boolean") {
        showToast("Please select if “Drop Serve / Force Serve” Allowed", "warning");
      } else if(typeof(paralegalAttorneyClientContactServee)!=="boolean") {
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
        localStorage.setItem('Questionaire5', JSON.stringify(data));
        setActiveStep(6);
      }
    } else if(activeStep===6) {
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
      localStorage.setItem('Questionaire6', JSON.stringify(data));
      setActiveStep(7);
    } else if(activeStep===7) {
      let data = {
        insuranceCompanyOfServee,
        vehicleTypeModelOwnership,
        licensePlateNumberState,
        vinNumberOfIndividuals,
        yearOfMakeOnVehicle,
        vehicleColor
      };
      localStorage.setItem('Questionaire7', JSON.stringify(data));
      setActiveStep(8);
    } else if(activeStep===8) {
      if(typeof(requireStakeOutService)!=="boolean") {
        showToast("Please select an option for stake out service!", "warning");
      } else if(typeof(requireRushService)!=="boolean") {
        showToast("Please select if your require a rush out service!", "warning");
      } else if(typeof(requireFirst24HourService)!=="boolean") {
        showToast("Please select if service should be attempted within 24 hours of submission!", "warning");
      } else if(typeof(requireSkipTracingService)!=="boolean") {
        showToast("Please select if you require skip tracing service!", "warning");
      } else if(typeof(requireBodyCamFootage)!=="boolean") {
        showToast("Please select if you require body cam footage of service!", "warning");
      } else if(typeof(obtainNewDeliveryLocation)!=="boolean") {
        showToast("Please select if process server obtains a new delivery location from the servee!", "warning");
      } else if(typeof(poBoxAllowedToServe)!=="boolean") {
        showToast("Please select if P.O. box is allowed to be served!", "warning");
      } else if(typeof(requireByEmail)!=="boolean") {
        showToast("Please select if you require a service by E-mail!", "warning");
      } else if(typeof(requireServiceByMail)!=="boolean") {
        showToast("Please select if you require a service by secured postal mail with signature!", "warning");
      } else if(typeof(requireZipFileService)!=="boolean") {
        showToast("Please select if you require a zip file service at a court house!", "warning");
      } else if(requireZipFileService && !ifYesListAddress.length) {
        showToast("Please enter address for zip filing!", "warning");
      } else {
        let data = {
          requireStakeOutService,
          specifyDatesForStakeOutService,
          requireRushService,          
          listDateWhenServiceAttemptsClosed,
          requireFirst24HourService,
          requireSkipTracingService,
          requireBodyCamFootage,
          obtainNewDeliveryLocation,
          poBoxAllowedToServe,
          requireServiceByMail,
          requireByEmail,
          specificCourtInstruction,
          requireZipFileService,
          ifYesListAddress
        };
        localStorage.setItem('Questionaire8', JSON.stringify(data));
        setActiveStep(9);
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
      return "Proceed to the Vehicle Information Section";
    } else if(activeStep===7) {
      return "Proceed to the Offered Services Section";
    } else if(activeStep===8) {
      return "Proceed to Document Upload";
    }
  }

  const handleResetForms = () => {
    // Reset Form 1
    setCaseTitle("");
    setCaseNumber("");
    setCourtDate("");
    setCourtType("");
    setCourtState("");
    setCountyOf("");
    setCourthouseAddress({street: "", city: "", state: "", zipCode: "", country: ""});
    setCourthouseMailingAddress({street: "", city: "", state: "", zipCode: "", country: ""});
    setBranchName("");
    // Reset Form 2
    setPlaintiffFullName({firstName: "", middleName: "", lastName: ""});
    setPlaintiffAddress({street: "", city: "", state: "", zipCode: "", country: ""});
    setShouldPGFillPlaintiffInfo(false);
    setNumberOfAttorneyPlaintiff("");
    setAttorneyRepresentingPlaintiffInfo("");    
    setPlaintiffAttorneyName({firstName: "", middleName: "", lastName: ""});
    setPlaintiffAttorneyBarNumber("");
    setPlaintiffAttorneyFirmAddress({street: "", city: "", state: "", zipCode: "", country: ""});
    setPlaintiffAttorneyPhoneNumberForCalls("");
    setPlaintiffAttorneyEmail("");
    setPlaintiffAttorneyFaxNumberOptional("");
    // Reset Form 3
    setDefendantFullName("");
    setDefendantAddress("");
    setShouldPGFillDefendantInfo(false);
    setNumberOfAttorneyDefendant("");
    setAttorneyRepresentingDefendantInfo("");
    setDefendantAttorneyName("");
    setDefendantAttorneyBarNumber("");
    setDefendantAttorneyFirmAddress({street: "", city: "", state: "", zipCode: "", country: ""});
    setDefendantAttorneyPhoneNumberForCalls("");
    setDefendantAttorneyEmail("");
    setDefendantAttorneyFaxNumberOptional("");
    // Reset Form 4
    setNumberOfCaseFilesBeingServed("");
    setHowManyIndividualsServed("");
    setEmploymentOfIndividuals("");
    setNameOfIndividuals("");
    setDobOfIndividuals("");
    setLocationForBeingServed("");
    setMainAddressForService({street: "", city: "", state: "", zipCode: "", country: ""});
    setAgentOfService("");
    setIfYesListFullName("");
    setPhoneNumberOfIndividuals("");
    setEmailsOfIndividuals("");
    setKnownCoResidentsOfServee("");
    // Reset Form 5
    setServeIndividualAtEmployment("");
    setProcessServerLeaveDoorTag("");
    setSubserveAfterThreeAttempts("");
    setRequireServerNotifyPersonOfInterest("");
    setServerContactServeeByPhone("");
    setServerPostDocumentsWithRubberBand("");
    setDropServeForceServe("");
    setParalegalAttorneyClientContactServee("");
    // Reset Form 6
    setFullNameOfDescribedServee("");
    setImageOfIndividuals(null);
    setGenderOfIndividuals("");
    setEthnicityOfIndividuals("");
    setHeightOfIndividuals("");
    setWeightOfIndividuals("");
    setHairColorOfIndividuals("");
    setEyeColorOfIndividuals("");
    setPhysicalOutlineOfIndividuals("");
    // Reset Form 7
    setInsuranceCompanyOfServee("");
    setLicensePlateNumberState("");
    setVinNumberOfIndividuals("");
    setYearOfMakeOnVehicle("");
    setVehicleColor("");
    setVehicleTypeModelOwnership("");
    // Reset Form 8
    setRequireStakeoutService("");
    setSpecifyDatesForStakeOutService("");
    setRequireRushService("");
    setListDateWhenServiceAttemptsClosed("");
    setRequireFirst24HourService("");
    setRequireSkipTracingService("");
    setRequireBodyCamFootage("");
    setObtainNewDeliveryLocation("");
    setPOBoxAllowedToServe("");
    setRequireServiceByMail("");
    setRequireByEmail("");
    setSpecificCourtInstruction("");
    setRequireZipFileService("");
    setIfYesListAddress("");
    setActiveStep(1);
    localStorage.removeItem("Questionaire1");
    localStorage.removeItem("Questionaire2");
    localStorage.removeItem("Questionaire3");
    localStorage.removeItem("Questionaire4");
    localStorage.removeItem("Questionaire5");
    localStorage.removeItem("Questionaire6");
    localStorage.removeItem("Questionaire7");
    localStorage.removeItem("Questionaire8");
  }

  return (
    <React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Element name="stepper" className="element">
        <Stepper
          steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }, { label: 'Step 5' }, { label: 'Step 6' }, { label: 'Step 7' }, { label: 'Step 8' }, { label: 'Step 9' }]}
          activeStep={activeStep-1}
        />
      </Element>
      <br></br>
      <br></br>
      <div style={{display: "flex", width: "100%", justifyContent: "space-between"}}>
        {
          activeStep>1
            &&
              <button onClick={()=>setActiveStep(activeStep-1)} className="btn btn-primary">Previous Step</button>
        }
        <button style={{marginLeft: "auto"}} onClick={handleResetForms} className="btn btn-primary">Reset All Forms</button>
      </div>
      
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
              courtType={courtType}
              setCourtType={setCourtType}
              courtState={courtState}
              setCourtState={setCourtState}
              countyOf={countyOf}
              setCountyOf={setCountyOf}
              branchName={branchName}
              setBranchName={setBranchName}
              courthouseAddress={courthouseAddress}
              setCourthouseAddress={setCourthouseAddress}
              courthouseMailingAddress={courthouseMailingAddress}
              setCourthouseMailingAddress={setCourthouseMailingAddress}
            />
      }
      {
        activeStep === 2
          &&
            <Questionaire2
              shouldPGFillPlaintiffInfo={shouldPGFillPlaintiffInfo}
              setShouldPGFillPlaintiffInfo={setShouldPGFillPlaintiffInfo}
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
              street={plaintiffAttorneyFirmAddress.street}
              setStreet={(street)=>setPlaintiffAttorneyFirmAddress({...plaintiffAttorneyFirmAddress, street})}
              city={plaintiffAttorneyFirmAddress.city}
              setCity={(city)=>setPlaintiffAttorneyFirmAddress({...plaintiffAttorneyFirmAddress, city})}
              state={plaintiffAttorneyFirmAddress.state}
              setState={(state)=>setPlaintiffAttorneyFirmAddress({...plaintiffAttorneyFirmAddress, state})}
              zipCode={plaintiffAttorneyFirmAddress.zipCode}
              setZipCode={(zipCode)=>setPlaintiffAttorneyFirmAddress({...plaintiffAttorneyFirmAddress, zipCode})}
              country={plaintiffAttorneyFirmAddress.country}
              setCountry={(country)=>setPlaintiffAttorneyFirmAddress({...plaintiffAttorneyFirmAddress, country})}
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
              shouldPGFillDefendantInfo={shouldPGFillDefendantInfo}
              setShouldPGFillDefendantInfo={setShouldPGFillDefendantInfo}
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
              street={defendantAttorneyFirmAddress.street}
              setStreet={(street)=>setDefendantAttorneyFirmAddress({...defendantAttorneyFirmAddress, street})}
              city={defendantAttorneyFirmAddress.city}
              setCity={(city)=>setDefendantAttorneyFirmAddress({...defendantAttorneyFirmAddress, city})}
              state={defendantAttorneyFirmAddress.state}
              setState={(state)=>setDefendantAttorneyFirmAddress({...defendantAttorneyFirmAddress, state})}
              zipCode={defendantAttorneyFirmAddress.zipCode}
              setZipCode={(zipCode)=>setDefendantAttorneyFirmAddress({...defendantAttorneyFirmAddress, zipCode})}
              country={defendantAttorneyFirmAddress.country}
              setCountry={(country)=>setDefendantAttorneyFirmAddress({...defendantAttorneyFirmAddress, country})}
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
              numberOfCaseFilesBeingServed={numberOfCaseFilesBeingServed}
              setNumberOfCaseFilesBeingServed={setNumberOfCaseFilesBeingServed}
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
      {
        activeStep===7
          &&
            <Questionaire7
              insuranceCompanyOfServee={insuranceCompanyOfServee}
              setInsuranceCompanyOfServee={setInsuranceCompanyOfServee}
              licensePlateNumberState={licensePlateNumberState}
              setLicensePlateNumberState={setLicensePlateNumberState}
              vinNumberOfIndividuals={vinNumberOfIndividuals}
              setVinNumberOfIndividuals={setVinNumberOfIndividuals}
              yearOfMakeOnVehicle={yearOfMakeOnVehicle}
              setYearOfMakeOnVehicle={setYearOfMakeOnVehicle}
              vehicleColor={vehicleColor}
              setVehicleColor={setVehicleColor}
              vehicleTypeModelOwnership={vehicleTypeModelOwnership}
              setVehicleTypeModelOwnership={setVehicleTypeModelOwnership}
            />
      }
      {
        activeStep===8
          &&
            <Questionaire8
              requireStakeOutService={requireStakeOutService}
              setRequireStakeoutService={setRequireStakeoutService}
              specifyDatesForStakeOutService={specifyDatesForStakeOutService}
              setSpecifyDatesForStakeOutService={setSpecifyDatesForStakeOutService}
              requireRushService={requireRushService}
              setRequireRushService={setRequireRushService}
              listDateWhenServiceAttemptsClosed={listDateWhenServiceAttemptsClosed}
              setListDateWhenServiceAttemptsClosed={setListDateWhenServiceAttemptsClosed}
              requireFirst24HourService={requireFirst24HourService}
              setRequireFirst24HourService={setRequireFirst24HourService}
              requireSkipTracingService={requireSkipTracingService}
              setRequireSkipTracingService={setRequireSkipTracingService}
              requireBodyCamFootage={requireBodyCamFootage}
              setRequireBodyCamFootage={setRequireBodyCamFootage}
              obtainNewDeliveryLocation={obtainNewDeliveryLocation}
              setObtainNewDeliveryLocation={setObtainNewDeliveryLocation}
              poBoxAllowedToServe={poBoxAllowedToServe}
              setPOBoxAllowedToServe={setPOBoxAllowedToServe}
              requireServiceByMail={requireServiceByMail}
              setRequireServiceByMail={setRequireServiceByMail}
              requireByEmail={requireByEmail}
              setRequireByEmail={setRequireByEmail}
              specificCourtInstruction={specificCourtInstruction}
              setSpecificCourtInstruction={setSpecificCourtInstruction}
              requireZipFileService={requireZipFileService}
              setRequireZipFileService={setRequireZipFileService}
              ifYesListAddress={ifYesListAddress}
              setIfYesListAddress={setIfYesListAddress}
            />
      }
      {
        activeStep===9
          &&
            <FileSubmission />
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
      <br/><br/><br/>
    </React.Fragment>
  )
};

export default Questionaire;