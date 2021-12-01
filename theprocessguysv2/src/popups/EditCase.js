import { useEffect, useState } from 'react';
import { Link as RSLink, Element } from 'react-scroll';
import { Stepper } from 'react-form-stepper';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { objectsEqual, showToast, validateEmail, validatePhoneNumber } from "../utils";
import {
  ResetQuestionairesConfirmation
} from "../popups";
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
} from "../forms/CaseDetails";
import CaseDetails from '../pages/AdminDashboard/CaseDetails';

const EditCase = (props) => {
  const [activeStep, setActiveStep] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);
  const caseDetails = useSelector(state => state.admin.caseDetails);
  const isFetchingCaseDetails = useSelector(state => state.admin.isFetchingCaseDetails);
  
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
  const [isOrRepresentingPlaintiff, setIsOrRepresentingPlaintiff] = useState("");
  const [shouldPGFillPlaintiffInfo, setShouldPGFillPlaintiffInfo] = useState(false);
  const [numberOfAttorneyPlaintiff, setNumberOfAttorneyPlaintiff] = useState("");
  const [plaintiffsDetail, setPlaintiffsDetail] = useState({});
  const [numberOfAttorneysRepresentingPlaintiff, setNumberOfAttorneysRepresentingPlaintiff] = useState("");
  const [plaintiffAttorneysDetail, setPlaintiffAttorneysDetail] = useState({});

  // Questionaire Form 3
  const [isOrRepresentingDefendant, setIsOrRepresentingDefendant] = useState("");
  const [shouldPGFillDefendantInfo, setShouldPGFillDefendantInfo] = useState(false);
  const [defendantsDetail, setDefendantsDetail] = useState({});
  const [numberOfAttorneyDefendant, setNumberOfAttorneyDefendant] = useState("");
  const [numberOfAttorneysRepresentingDefendant, setNumberOfAttorneysRepresentingDefendant] = useState("");
  const [defendantAttorneysDetail, setDefendantAttorneysDetail] = useState({});

  // Questionaire Form 4
  const [numberOfCaseFilesBeingServed, setNumberOfCaseFilesBeingServed] = useState("");
  const [howManyIndividualsServed, setHowManyIndividualsServed] = useState("");
  const [serveesDetail, setServeesDetail] = useState({});
  const [date, setDate] = useState(new Date());
  const [locationForBeingServed, setLocationForBeingServed] = useState("");
  const [mainAddressesForService, setMainAddressesForService] = useState({0: {street: "", city: "", state: "", zipCode: "", country: ""}});
  const [agentOfService, setAgentOfService] = useState("");
  const [agentsFullNames, setAgentsFullNames] = useState({0: {firstName: "", middleName: "", lastName: ""}});

  // Questionaire Form 5
  const [typeOfServe, setTypeOfServe] = useState("");
  const [serveIndividualAtEmployment, setServeIndividualAtEmployment] = useState("");
  const [processServerLeaveDoorTag,setProcessServerLeaveDoorTag] = useState("");
  const [subserveAfterThreeAttempts, setSubserveAfterThreeAttempts] = useState("");
  const [requireServerNotifyPersonOfInterest, setRequireServerNotifyPersonOfInterest] = useState("");
  const [serverContactServeeByPhone, setServerContactServeeByPhone] = useState("");
  const [serverPostDocumentsWithRubberBand,setServerPostDocumentsWithRubberBand] = useState("");
  const [dropServeForceServe, setDropServeForceServe] = useState("");
  const [paralegalAttorneyClientContactServee, setParalegalAttorneyClientContactServee] = useState("");

  //  Questionaire Form 6
  const [serveesPhysicalDescription, setServeesPhysicalDescription] = useState({0: {
    fullName: {firstName: "", middleName: "", lastName: ""},
    gender: "", ethnicity: "", height: "", weight: "",
    hairColor: "", eyeColor: "", physicalOutline: "", image: null
  }});

  // Questionaire Form 7
  const [vehiclesInformation, setVehiclesInformation] = useState({0: {
    insuranceCompany: "", licencePlateNumber: "", vinNumber: "",
    yearOfMake: "", color: "", modelType: ""
  }});

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

  useEffect(()=>{
    if(!props.modalShow && activeStep!==1) {
      setActiveStep(1);
      handleResetForms();
    }
  }, [props.modalShow]);

  useEffect(() => {
    if(caseDetails) {
      // Questionaire Form 1
      setCaseTitle(caseDetails?.CaseInformation.caseTitle);
      setCaseNumber(caseDetails?.CaseInformation.caseNumber);
      setCourtDate(caseDetails?.CaseInformation.courtDate);
      setCourtType(caseDetails?.CaseInformation.courtType);
      setCourtState(caseDetails?.CaseInformation.courtState);
      setCountyOf(caseDetails?.CaseInformation.countyOf);
      setCourthouseAddress(caseDetails?.CaseInformation.courthouseAddress);
      setCourthouseMailingAddress(caseDetails?.CaseInformation.courthouseMailingAddress);
      setBranchName(caseDetails?.CaseInformation.branchName);
      
      // Questionaire Form 2
      setIsOrRepresentingPlaintiff(caseDetails?.PlaintiffInformation.isOrRepresentingPlaintiff);
      setPlaintiffsDetail(caseDetails?.PlaintiffInformation.plaintiffsDetail);
      setShouldPGFillPlaintiffInfo(caseDetails?.PlaintiffInformation.shouldPGFillPlaintiffInfo);
      setNumberOfAttorneyPlaintiff(caseDetails?.PlaintiffInformation.numberOfAttorneyPlaintiff);
      setNumberOfAttorneysRepresentingPlaintiff(caseDetails?.PlaintiffInformation.numberOfAttorneysRepresentingPlaintiff) 
      setPlaintiffAttorneysDetail(caseDetails?.PlaintiffInformation.plaintiffAttorneysDetail);
      
      // Questionaire Form 3
      setIsOrRepresentingDefendant(caseDetails?.DefendantInformation.isOrRepresentingDefendant);
      setDefendantsDetail(caseDetails?.DefendantInformation.defendantsDetail);
      setShouldPGFillDefendantInfo(caseDetails?.DefendantInformation.shouldPGFillDefendantInfo);
      setNumberOfAttorneyDefendant(caseDetails?.DefendantInformation.numberOfAttorneyDefendant);
      setNumberOfAttorneysRepresentingDefendant(caseDetails?.DefendantInformation.numberOfAttorneysRepresentingDefendant);
      
      // Questionaire Form 4
      setNumberOfCaseFilesBeingServed(caseDetails?.ServeeDocumentedData.numberOfCaseFilesBeingServed);
      setHowManyIndividualsServed(caseDetails?.ServeeDocumentedData.howManyIndividualsServed);
      setServeesDetail(caseDetails?.ServeeDocumentedData.serveesDetail);
      setLocationForBeingServed(caseDetails?.ServeeDocumentedData.locationForBeingServed);
      setMainAddressesForService(caseDetails?.ServeeDocumentedData.mainAddressesForService);
      setAgentOfService(caseDetails?.ServeeDocumentedData.agentOfService);
      setAgentsFullNames(caseDetails?.ServeeDocumentedData.agentsFullNames);
      
      // Questionaire Form 5
      setTypeOfServe(caseDetails?.ClearanceOfAction.typeOfServe);
      setServeIndividualAtEmployment(caseDetails?.ClearanceOfAction.serveIndividualAtEmployment);
      setProcessServerLeaveDoorTag(caseDetails?.ClearanceOfAction.processServerLeaveDoorTag);
      setSubserveAfterThreeAttempts(caseDetails?.ClearanceOfAction.subserveAfterThreeAttempts);
      setRequireServerNotifyPersonOfInterest(caseDetails?.ClearanceOfAction.requireServerNotifyPersonOfInterest);
      setServerContactServeeByPhone(caseDetails?.ClearanceOfAction.serverContactServeeByPhone);
      setServerPostDocumentsWithRubberBand(caseDetails?.ClearanceOfAction.serverPostDocumentsWithRubberBand);
      setDropServeForceServe(caseDetails?.ClearanceOfAction.dropServeForceServe);
      setParalegalAttorneyClientContactServee(caseDetails?.ClearanceOfAction.paralegalAttorneyClientContactServee);
      
      // Questionaire Form 6
      setServeesPhysicalDescription(caseDetails?.ServeePhysicalDescription.serveesPhysicalDescription);
    
      // Questionaire Form 7
      setVehiclesInformation(caseDetails?.VehicleInformation.vehiclesInformation);
      
      // Questionaire Form 8
      setRequireStakeoutService(caseDetails?.OfferedServices.requireStakeOutService);
      setSpecifyDatesForStakeOutService(caseDetails?.OfferedServices.specifyDatesForStakeOutService);
      setRequireRushService(caseDetails?.OfferedServices.requireRushService);
      setListDateWhenServiceAttemptsClosed(caseDetails?.OfferedServices.listDateWhenServiceAttemptsClosed);
      setRequireFirst24HourService(caseDetails?.OfferedServices.requireFirst24HourService);
      setRequireSkipTracingService(caseDetails?.OfferedServices.requireSkipTracingService);
      setRequireBodyCamFootage(caseDetails?.OfferedServices.requireBodyCamFootage);
      setObtainNewDeliveryLocation(caseDetails?.OfferedServices.obtainNewDeliveryLocation);
      setPOBoxAllowedToServe(caseDetails?.OfferedServices.poBoxAllowedToServe);
      setRequireServiceByMail(caseDetails?.OfferedServices.requireServiceByMail);
      setRequireByEmail(caseDetails?.OfferedServices.requireByEmail);
      setSpecificCourtInstruction(caseDetails?.OfferedServices.specificCourtInstruction);
      setRequireZipFileService(caseDetails?.OfferedServices.requireZipFileService);
      setIfYesListAddress(caseDetails?.OfferedServices.ifYesListAddress);
    }
  }, [caseDetails, isFetchingCaseDetails]);

  useEffect(() => {
    if(numberOfAttorneyPlaintiff!=="" && parseInt(numberOfAttorneyPlaintiff)!==Object.keys(plaintiffsDetail).length) {
      const prevLength = Object.keys(plaintiffsDetail).length;
      if(parseInt(numberOfAttorneyPlaintiff)>prevLength) {
        let newPlaintiffsDetail = plaintiffsDetail;
        for(let index=0; index < (parseInt(numberOfAttorneyPlaintiff)-prevLength); index++) {
          newPlaintiffsDetail[Object.keys(newPlaintiffsDetail).length] = {
            fullName: {firstName: "", middleName: "", lastName: ""},
            address: {street: "", city: "", state: "", zipCode: "", country: ""}
          };
        }
        setPlaintiffsDetail(newPlaintiffsDetail);
        setDate(new Date());
      } else {
        let newPlaintiffsDetail = plaintiffsDetail;
        for(let index=Object.keys(plaintiffsDetail).length; parseInt(numberOfAttorneyPlaintiff)!==Object.keys(newPlaintiffsDetail).length; index--) {
          delete newPlaintiffsDetail[Object.keys(newPlaintiffsDetail).length-1];
        }
        setPlaintiffsDetail(newPlaintiffsDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneyPlaintiff]);

  useEffect(() => {
    if(numberOfAttorneysRepresentingPlaintiff!=="" && parseInt(numberOfAttorneysRepresentingPlaintiff)!==Object.keys(plaintiffAttorneysDetail).length) {
      const prevLength = Object.keys(plaintiffAttorneysDetail).length;
      if(parseInt(numberOfAttorneysRepresentingPlaintiff)>prevLength) {
        let newAttorneysDetail = plaintiffAttorneysDetail;
        for(let index=0; index < (parseInt(numberOfAttorneysRepresentingPlaintiff)-prevLength); index++) {
          newAttorneysDetail[Object.keys(newAttorneysDetail).length] = {
            fullName: {firstName: "", middleName: "", lastName: ""}, barNumber: "",
            phoneNumbers: {0: {phoneNumber: "", type: ""}}, faxNumber: "", email: "",
            address: {street: "", city: "", state: "", zipCode: "", country: ""}
          };
        }
        setPlaintiffAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      } else {
        let newAttorneysDetail = plaintiffAttorneysDetail;
        for(let index=Object.keys(plaintiffAttorneysDetail).length; parseInt(numberOfAttorneysRepresentingPlaintiff)!==Object.keys(newAttorneysDetail).length; index--) {
          delete newAttorneysDetail[Object.keys(newAttorneysDetail).length-1];
        }
        setPlaintiffAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneysRepresentingPlaintiff]);

  useEffect(() => {
    if(numberOfAttorneyDefendant!=="" && parseInt(numberOfAttorneyDefendant)!==Object.keys(defendantsDetail).length) {
      const prevLength = Object.keys(defendantsDetail).length;
      if(parseInt(numberOfAttorneyDefendant)>prevLength) {
        let newDefendantsDetail = defendantsDetail;
        for(let index=0; index < (parseInt(numberOfAttorneyDefendant)-prevLength); index++) {
          newDefendantsDetail[Object.keys(newDefendantsDetail).length] = {
            fullName: {firstName: "", middleName: "", lastName: ""},
            address: {street: "", city: "", state: "", zipCode: "", country: ""}
          };
        }
        setDefendantsDetail(newDefendantsDetail);
        setDate(new Date());
      } else {
        let newDefendantsDetail = defendantsDetail;
        for(let index=Object.keys(defendantsDetail).length; parseInt(numberOfAttorneyDefendant)!==Object.keys(newDefendantsDetail).length; index--) {
          delete newDefendantsDetail[Object.keys(newDefendantsDetail).length-1];
        }
        setDefendantsDetail(newDefendantsDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneyDefendant]);

  useEffect(() => {
    if(numberOfAttorneysRepresentingDefendant!=="" && parseInt(numberOfAttorneysRepresentingDefendant)!==Object.keys(defendantAttorneysDetail).length) {
      const prevLength = Object.keys(defendantAttorneysDetail).length;
      if(parseInt(numberOfAttorneysRepresentingDefendant)>prevLength) {
        let newAttorneysDetail = defendantAttorneysDetail;
        for(let index=0; index < (parseInt(numberOfAttorneysRepresentingDefendant)-prevLength); index++) {
          newAttorneysDetail[Object.keys(newAttorneysDetail).length] = {
            fullName: {firstName: "", middleName: "", lastName: ""}, barNumber: "",
            phoneNumbers: {0: {phoneNumber: "", type: ""}}, faxNumber: "", email: "",
            address: {street: "", city: "", state: "", zipCode: "", country: ""}
          };
        }
        setDefendantAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      } else {
        let newAttorneysDetail = defendantAttorneysDetail;
        for(let index=Object.keys(defendantAttorneysDetail).length; parseInt(numberOfAttorneysRepresentingDefendant)!==Object.keys(newAttorneysDetail).length; index--) {
          delete newAttorneysDetail[Object.keys(newAttorneysDetail).length-1];
        }
        setDefendantAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneysRepresentingDefendant]);

  useEffect(() => {
    if(howManyIndividualsServed!=="" && parseInt(howManyIndividualsServed)!==Object.keys(serveesDetail).length) {
      const prevLength = Object.keys(serveesDetail).length;
      if(parseInt(howManyIndividualsServed)>prevLength) {
        let newServeesDetail = serveesDetail;
        for(let index=0; index < (parseInt(howManyIndividualsServed)-prevLength); index++) {
          newServeesDetail[Object.keys(newServeesDetail).length] = {
            fullName: "", dob: "", phoneNumbers: {0: {phoneNumber: "", type: ""}},
            email: "", coResidents: {0: {name: "", relation: ""}}, isEmployed: ""
          }
        }
        setServeesDetail(newServeesDetail);
        setDate(new Date());
      } else {
        let newServeesDetail = serveesDetail;
        for(let index=Object.keys(serveesDetail).length; parseInt(howManyIndividualsServed)!==Object.keys(newServeesDetail).length; index--) {
          delete newServeesDetail[Object.keys(newServeesDetail).length-1];
        }
        setServeesDetail(newServeesDetail);
        setDate(new Date());
      }
    }
  }, [howManyIndividualsServed]);

  useEffect(() => {
    if(isOrRepresentingPlaintiff) {
      setIsOrRepresentingDefendant(false);
    }
  }, [isOrRepresentingPlaintiff]);

  useEffect(() => {
    if(isOrRepresentingDefendant) {
      setIsOrRepresentingPlaintiff(false);
    }
  }, [isOrRepresentingDefendant]);

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
        showToast("Please enter the court state!", "warning");
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
        let data = {};
        if(caseTitle!==caseDetails.CaseInformation.caseTitle) data.caseTitle=caseTitle;
        if(caseNumber!==caseDetails.CaseInformation.caseNumber) data.caseNumber=caseNumber;
        if(courtDate!==caseDetails.CaseInformation.courtDate) data.courtDate=courtDate;
        if(courtType!==caseDetails.CaseInformation.courtType) data.courtType=courtType;
        if(courtState!==caseDetails.CaseInformation.courtState) data.courtState=courtState;
        if(countyOf!==caseDetails.CaseInformation.countyOf) data.countyOf=countyOf;
        if(!objectsEqual(courthouseAddress, caseDetails.CaseInformation.courthouseAddress)) data.courthouseAddress=courthouseAddress;
        if(!objectsEqual(courthouseMailingAddress, caseDetails.CaseInformation.courthouseMailingAddress)) data.courthouseMailingAddress=courthouseMailingAddress;
        if(branchName!==caseDetails.CaseInformation.branchName) data.branchName=branchName;
        if(Object.keys(data).length) localStorage.setItem('Questionaire1', JSON.stringify({docId: caseDetails.CaseInformation.docId, ...data}));
        setActiveStep(2);
      }
    } else if(activeStep === 2) {
      if(!shouldPGFillPlaintiffInfo && typeof(isOrRepresentingPlaintiff)!=="boolean") {
        showToast("Please select if you are representing the Plaintiff, or are yourself the Plaintiff", "warning");
      } else if(!shouldPGFillPlaintiffInfo && !numberOfAttorneyPlaintiff.length) {
        showToast("Please select number of plaintiff(s) listed!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.firstName.length).length)) {
        showToast("Please enter plaintiff's first name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.lastName.length).length)) {
        showToast("Please enter plaintiff's last name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.address)).filter((address)=>!address.street.length).length)) {
        showToast("Please enter plaintiff's street address!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.address)).filter((address)=>!address.city.length).length)) {
        showToast("Please enter plaintiff's city address!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.address)).filter((address)=>!address.state.length).length)) {
        showToast("Please enter plaintiff's state address!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.address)).filter((address)=>!address.zipCode.length).length)) {
        showToast("Please enter plaintiff's address's zip code!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && (Object.values(plaintiffsDetail).map((o)=>(o.address)).filter((address)=>!address.country.length).length)) {
        showToast("Please enter plaintiff's address's country!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && !numberOfAttorneysRepresentingPlaintiff.length) {
        showToast("Please select number of attorney's representing plaintiff!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.firstName.length).length) {
        showToast("Please enter plaintiff's attorney's first name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.lastName.length).length) {
        showToast("Please enter plaintiff's attorney's last name!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.barNumber)).filter((barNumber)=>!barNumber.length).length) {
        showToast("Please enter plaintiff's attorney bar number!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && [].concat.apply([], Object.values(plaintiffAttorneysDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber))).length) {
        showToast("Invalid phone number, please type-in correct phone number!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && [].concat.apply([], Object.values(plaintiffAttorneysDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !p.type.length)).length) {
        showToast("Please select the appropriate phone number types for all the Attorneys numbers!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.email)).filter((email)=>!email.length).length) {
        showToast("Please enter plaintiff's attorney email!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.email)).filter((email)=>!validateEmail(email)).length) {
        showToast("Invalid plaintiff's attorney email address!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.street.length).length) {
        showToast("Please enter plaintiff's attorney firm street!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.city.length).length) {
        showToast("Please enter plaintiff's attorney firm city!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.state.length).length) {
        showToast("Please enter plaintiff's attorney firm state!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.zipCode.length).length) {
        showToast("Please enter plaintiff's attorney firm zip code!", "warning");
      } else if(!shouldPGFillPlaintiffInfo && numberOfAttorneysRepresentingPlaintiff!=="0" && isOrRepresentingPlaintiff === true && Object.values(plaintiffAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.country.length).length) {
        showToast("Please enter plaintiff's attorney firm country!", "warning");
      } else {
        let data = {};
        if(!objectsEqual(plaintiffsDetail, caseDetails.PlaintiffInformation.plaintiffsDetail)) data.plaintiffsDetail=plaintiffsDetail;
        if(numberOfAttorneyPlaintiff!==caseDetails.PlaintiffInformation.numberOfAttorneyPlaintiff) data.numberOfAttorneyPlaintiff=numberOfAttorneyPlaintiff;
        if(isOrRepresentingPlaintiff!==caseDetails.PlaintiffInformation.isOrRepresentingPlaintiff) data.isOrRepresentingPlaintiff=isOrRepresentingPlaintiff;
        if(shouldPGFillPlaintiffInfo!==caseDetails.PlaintiffInformation.shouldPGFillPlaintiffInfo) data.shouldPGFillPlaintiffInfo=shouldPGFillPlaintiffInfo;
        if(numberOfAttorneysRepresentingPlaintiff!==caseDetails.PlaintiffInformation.numberOfAttorneysRepresentingPlaintiff) data.numberOfAttorneysRepresentingPlaintiff=numberOfAttorneysRepresentingPlaintiff;
        if(!objectsEqual(plaintiffAttorneysDetail, caseDetails.PlaintiffInformation.plaintiffAttorneysDetail)) data.plaintiffAttorneysDetail=plaintiffAttorneysDetail;
        if(Object.keys(data).length) localStorage.setItem('Questionaire2', JSON.stringify({docId: caseDetails.PlaintiffInformation.docId, ...data}));
        setActiveStep(3);
      }
    } else if(activeStep === 3) {
      if(!shouldPGFillDefendantInfo && typeof(isOrRepresentingDefendant)!=="boolean") {
        showToast("Please select if you are representing the Defendant, or are yourself the Defendant", "warning");
      } else if(!shouldPGFillDefendantInfo && !numberOfAttorneyDefendant.length) {
        showToast("Please select number of defendant(s) listed!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.firstName.length).length)) {
        showToast("Please enter defendant's first name!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.lastName.length).length)) {
        showToast("Please enter defendant's last name!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.address)).filter((address)=>!address.street.length).length)) {
        showToast("Please enter defendant's street address!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.address)).filter((address)=>!address.city.length).length)) {
        showToast("Please enter defendant's city address!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.address)).filter((address)=>!address.state.length).length)) {
        showToast("Please enter defendant's state!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.address)).filter((address)=>!address.zipCode.length).length)) {
        showToast("Please enter defendant's zip code!", "warning");
      } else if(!shouldPGFillDefendantInfo && (Object.values(defendantsDetail).map((o)=>(o.address)).filter((address)=>!address.country.length).length)) {
        showToast("Please enter defendant's country!", "warning");
      } else if(!shouldPGFillDefendantInfo && !numberOfAttorneysRepresentingDefendant.length) {
        showToast("Please select number of attorney's representing defendant!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.firstName.length).length) {
        showToast("Please enter defendant's attorney's first name!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.lastName.length).length) {
        showToast("Please enter defendant's attorney's last name!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.barNumber)).filter((barNumber)=>!barNumber.length).length) {
        showToast("Please enter defendant's attorney's bar number!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && [].concat.apply([], Object.values(defendantAttorneysDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber))).length) {
        showToast("Invalid phone number, please type-in correct phone number!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && [].concat.apply([], Object.values(defendantAttorneysDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !p.type.length)).length) {
        showToast("Please select the appropriate phone number types for all the Attorneys numbers!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.email)).filter((email)=>!email.length).length) {
        showToast("Please enter defendant's attorney's email!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.email)).filter((email)=>!validateEmail(email)).length) {
        showToast("Invalid defendant's attorney's email address!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.street.length).length) {
        showToast("Please enter defendant's attorney's firm street!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.city.length).length) {
        showToast("Please enter defendant's attorney's firm city!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.state.length).length) {
        showToast("Please enter defendant's attorney's firm state!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.zipCode.length).length) {
        showToast("Please enter defendant's attorney's firm zip code!", "warning");
      } else if(!shouldPGFillDefendantInfo && numberOfAttorneysRepresentingDefendant!=="0" && isOrRepresentingDefendant===true && Object.values(defendantAttorneysDetail).map((o)=>(o.address)).filter((address)=>!address.country.length).length) {
        showToast("Please enter defendant's attorney's firm country!", "warning");
      } else {
        let data = {};
        if(!objectsEqual(defendantsDetail, caseDetails.DefendantInformation.defendantsDetail)) data.defendantsDetail=defendantsDetail;
        if(numberOfAttorneyDefendant!==caseDetails.DefendantInformation.numberOfAttorneyDefendant) data.numberOfAttorneyDefendant=numberOfAttorneyDefendant;
        if(isOrRepresentingDefendant!==caseDetails.DefendantInformation.isOrRepresentingDefendant) data.isOrRepresentingDefendant=setIsOrRepresentingDefendant;
        if(shouldPGFillDefendantInfo!==caseDetails.DefendantInformation.shouldPGFillDefendantInfo) data.shouldPGFillDefendantInfo=shouldPGFillDefendantInfo;
        if(numberOfAttorneysRepresentingDefendant!==caseDetails.DefendantInformation.numberOfAttorneysRepresentingDefendant) data.numberOfAttorneysRepresentingDefendant=numberOfAttorneysRepresentingDefendant;
        console.log(defendantAttorneysDetail, caseDetails.DefendantInformation.defendantAttorneysDetail)
        console.log(objectsEqual(defendantAttorneysDetail, caseDetails.DefendantInformation.defendantAttorneysDetail))
        if(Object.values(defendantAttorneysDetail).length && Object.values(caseDetails.DefendantInformation.defendantAttorneysDetail).length && !objectsEqual(defendantAttorneysDetail, caseDetails.DefendantInformation.defendantAttorneysDetail)) data.defendantAttorneysDetail=defendantAttorneysDetail;
        if(Object.keys(data).length) localStorage.setItem('Questionaire3', JSON.stringify({docId: caseDetails.DefendantInformation.docId, ...data}));
        setActiveStep(4);
      }
    } else if(activeStep === 4) {
      if(!numberOfCaseFilesBeingServed.length) {
        showToast("Please select how many case files being served!", "warning");
      } else if(!howManyIndividualsServed.length) {
        showToast("Please select how many individuals being served!", "warning");
      } else if(Object.values(serveesDetail).map((o)=>(o.fullName)).filter((fullName)=>!fullName.length).length) {
        showToast("Please enter the full names of all the servees that are being served!", "warning");
      } else if(Object.values(serveesDetail).map((o)=>(o.dob)).filter((dob)=>!dob.length).length) {
        showToast("Please enter the date of births for all the servees that are being served!", "warning");
      } else if([].concat.apply([], Object.values(serveesDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber))).length) {
        showToast("Invalid phone number, please type-in correct phone number!", "warning");
      } else if([].concat.apply([], Object.values(serveesDetail).map((o)=>(o.phoneNumbers)).map((o)=>(Object.values(o)))).filter((p)=>(p.phoneNumber.length && !p.type.length)).length) {
        showToast("Please select the phone number types for all the servees that are being served!", "warning");
      } else if(Object.values(serveesDetail).map((o)=>(o.email)).filter((email)=>(email.length && !validateEmail(email))).length) {
        showToast("One or more invalid email addresses encountered!", "warning");
      } else if([].concat.apply([], Object.values(serveesDetail).map((o)=>(o.coResidents)).map((o)=>(Object.values(o)))).filter((p)=>(p.name.length && !p.relation.length)).length) {
        showToast("Please select the relation of co-residents to the servee for all the servees that are being served!", "warning");
      } else if(Object.values(serveesDetail).map((o)=>(o.isEmployed)).filter((isEmployed)=>!isEmployed.length).length) {
        showToast("Please select the employment option for all the servees that are being served!", "warning");
      } else if(!locationForBeingServed.length) {
        showToast("Please select the kind of location being served!", "warning");
      } else if(Object.values(mainAddressesForService).filter((address)=>!address.street.length).length) {
        showToast("Please enter street address for all service addresses!", "warning");
      } else if(Object.values(mainAddressesForService).filter((address)=>!address.city.length).length) {
        showToast("Please enter city address for all service addresses!", "warning");
      } else if(Object.values(mainAddressesForService).filter((address)=>!address.state.length).length) {
        showToast("Please enter state address for all service addresses!", "warning");
      } else if(Object.values(mainAddressesForService).filter((address)=>!address.zipCode.length).length) {
        showToast("Please enter zip code address for all service addresses!", "warning");
      } else if(Object.values(mainAddressesForService).filter((address)=>!address.country.length).length) {
        showToast("Please enter country address for all service addresses!", "warning");
      } else if(typeof(agentOfService)!=="boolean") {
        showToast("Please select if there is an agent of service!", "warning");
      } else if(agentOfService && Object.values(agentsFullNames).filter((fullName)=>!fullName.firstName.length).length) {
        showToast("Please enter first names of all the agents of service!", "warning");
      } else if(agentOfService && Object.values(agentsFullNames).filter((fullName)=>!fullName.lastName.length).length) {
        showToast("Please enter last names of all the agents of service!", "warning");
      } else {
        let data = {};
        if(numberOfCaseFilesBeingServed!==caseDetails.ServeeDocumentedData.numberOfCaseFilesBeingServed) data.numberOfCaseFilesBeingServed=numberOfCaseFilesBeingServed;
        if(howManyIndividualsServed!==caseDetails.ServeeDocumentedData.howManyIndividualsServed) data.howManyIndividualsServed=howManyIndividualsServed;
        if(!objectsEqual(serveesDetail, caseDetails.ServeeDocumentedData.serveesDetail)) data.serveesDetail=serveesDetail;
        if(locationForBeingServed!==caseDetails.ServeeDocumentedData.locationForBeingServed) data.locationForBeingServed=locationForBeingServed;
        if(!objectsEqual(mainAddressesForService, caseDetails.ServeeDocumentedData.mainAddressesForService)) data.mainAddressesForService=mainAddressesForService;
        if(agentOfService!==caseDetails.ServeeDocumentedData.agentOfService) data.agentOfService=agentOfService;
        if(!objectsEqual(agentsFullNames, caseDetails.ServeeDocumentedData.agentsFullNames)) data.agentsFullNames=agentsFullNames;
        if(Object.keys(data).length) localStorage.setItem('Questionaire4', JSON.stringify({docId: caseDetails.ServeeDocumentedData.docId, ...data}));
        setActiveStep(5);
      }
    } else if(activeStep === 5) {
      if(typeOfServe==="") {
        showToast("Please select an option for type of serve!", "warning");
      } if(typeof(serveIndividualAtEmployment)!=="boolean") {
        showToast("Please select should the servee be served at the place of employment!", "warning");
      } else if(typeof(processServerLeaveDoorTag)!=="boolean") {
        showToast("Please select should process server leave a door tag on the handle, or business card!", "warning");
      } else if(typeOfServe==="normal" && typeof(subserveAfterThreeAttempts)!=="boolean") {
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
        let data = {};
        if(typeOfServe!==caseDetails.ClearanceOfAction.typeOfServe) data.typeOfServe=typeOfServe;
        if(serveIndividualAtEmployment!==caseDetails.ClearanceOfAction.serveIndividualAtEmployment) data.serveIndividualAtEmployment=serveIndividualAtEmployment;
        if(processServerLeaveDoorTag!==caseDetails.ClearanceOfAction.processServerLeaveDoorTag) data.processServerLeaveDoorTag=processServerLeaveDoorTag;
        if(subserveAfterThreeAttempts!==caseDetails.ClearanceOfAction.subserveAfterThreeAttempts) data.subserveAfterThreeAttempts=subserveAfterThreeAttempts;
        if(requireServerNotifyPersonOfInterest!==caseDetails.ClearanceOfAction.requireServerNotifyPersonOfInterest) data.requireServerNotifyPersonOfInterest=requireServerNotifyPersonOfInterest;
        if(serverContactServeeByPhone!==caseDetails.ClearanceOfAction.serverContactServeeByPhone) data.serverContactServeeByPhone=serverContactServeeByPhone;
        if(serverPostDocumentsWithRubberBand!==caseDetails.ClearanceOfAction.serverPostDocumentsWithRubberBand) data.serverPostDocumentsWithRubberBand=serverPostDocumentsWithRubberBand;
        if(dropServeForceServe!==caseDetails.ClearanceOfAction.dropServeForceServe) data.dropServeForceServe=dropServeForceServe;
        if(paralegalAttorneyClientContactServee!==caseDetails.ClearanceOfAction.paralegalAttorneyClientContactServee) data.paralegalAttorneyClientContactServee=paralegalAttorneyClientContactServee;
        if(Object.keys(data).length) localStorage.setItem('Questionaire5', JSON.stringify({docId: caseDetails.ClearanceOfAction.docId, ...data}));
        setActiveStep(6);
      }
    } else if(activeStep===6) {
      let data = {};
      const emptyObj = {
        fullName: {firstName: "", middleName: "", lastName: ""},
        gender: "", ethnicity: "", height: "", weight: "",
        hairColor: "", eyeColor: "", physicalOutline: "", image: null
      };
      if(Object.values(serveesPhysicalDescription).filter(o=>!objectsEqual(o, emptyObj)).length) {
        let serveesFinalPhysicalDescription = {};
        const serveesOldPhysicalDescription = JSON.parse(JSON.stringify(caseDetails.ServeePhysicalDescription.serveesPhysicalDescription));
        const serveesNewPhysicalDescription = JSON.parse(JSON.stringify(serveesPhysicalDescription));
        for (let index = 0; index < (Object.keys(serveesOldPhysicalDescription).length > Object.keys(serveesNewPhysicalDescription).length ? Object.keys(serveesOldPhysicalDescription).length : Object.keys(serveesNewPhysicalDescription).length); index++) {
          delete serveesNewPhysicalDescription[index].image;
          if(serveesOldPhysicalDescription[index].hasOwnProperty("image")) {
            delete serveesOldPhysicalDescription[index].image;
          } else {
            delete serveesOldPhysicalDescription[index].imageURI;
            delete serveesOldPhysicalDescription[index].imagePath;
          }
          if(!objectsEqual(serveesOldPhysicalDescription[index], serveesNewPhysicalDescription[index])){
            serveesFinalPhysicalDescription[index] = serveesPhysicalDescription[index];
          } else if(serveesPhysicalDescription[index].image!==null) {
            serveesFinalPhysicalDescription[index] = {image: serveesPhysicalDescription[index].image};
            if(caseDetails.ServeePhysicalDescription.serveesPhysicalDescription[index]?.imagePath) serveesFinalPhysicalDescription[index] = {...serveesFinalPhysicalDescription[index], oldImagePath: caseDetails.ServeePhysicalDescription.serveesPhysicalDescription[index].imagePath};
          }
        }
        data.serveesPhysicalDescription = serveesFinalPhysicalDescription;
      }
      if(Object.keys(data).length) localStorage.setItem('Questionaire6', JSON.stringify({docId: caseDetails.ServeePhysicalDescription.docId, ...data}));
      setActiveStep(7);
    } else if(activeStep===7) {
      let data = {};
      if(!objectsEqual(vehiclesInformation, caseDetails.VehicleInformation.vehiclesInformation)) data.vehiclesInformation=vehiclesInformation;
      if(Object.keys(data).length) localStorage.setItem('Questionaire7', JSON.stringify({docId: caseDetails.VehicleInformation.docId, ...data}));
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
        let data = {};
        if(requireStakeOutService!==caseDetails.OfferedServices.requireStakeOutService) data.requireStakeOutService=requireStakeOutService;
        if(specifyDatesForStakeOutService!==caseDetails.OfferedServices.specifyDatesForStakeOutService) data.specifyDatesForStakeOutService=specifyDatesForStakeOutService;
        if(requireRushService!==caseDetails.OfferedServices.requireRushService) data.requireRushService=requireRushService;
        if(listDateWhenServiceAttemptsClosed!==caseDetails.OfferedServices.listDateWhenServiceAttemptsClosed) data.listDateWhenServiceAttemptsClosed=listDateWhenServiceAttemptsClosed;
        if(requireFirst24HourService!==caseDetails.OfferedServices.requireFirst24HourService) data.requireFirst24HourService=requireFirst24HourService;
        if(requireSkipTracingService!==caseDetails.OfferedServices.requireSkipTracingService) data.requireSkipTracingService=requireSkipTracingService;
        if(requireBodyCamFootage!==caseDetails.OfferedServices.requireBodyCamFootage) data.requireBodyCamFootage=requireBodyCamFootage;
        if(obtainNewDeliveryLocation!==caseDetails.OfferedServices.obtainNewDeliveryLocation) data.obtainNewDeliveryLocation=obtainNewDeliveryLocation;
        if(poBoxAllowedToServe!==caseDetails.OfferedServices.poBoxAllowedToServe) data.poBoxAllowedToServe=poBoxAllowedToServe;
        if(requireServiceByMail!==caseDetails.OfferedServices.requireServiceByMail) data.requireServiceByMail=requireServiceByMail;
        if(requireByEmail!==caseDetails.OfferedServices.requireByEmail) data.requireByEmail=requireByEmail;
        if(specificCourtInstruction!==caseDetails.OfferedServices.specificCourtInstruction) data.specificCourtInstruction=specificCourtInstruction;
        if(requireZipFileService!==caseDetails.OfferedServices.requireZipFileService) data.requireZipFileService=requireZipFileService;
        if(ifYesListAddress!==caseDetails.OfferedServices.ifYesListAddress) data.ifYesListAddress=ifYesListAddress;
        if(Object.keys(data).length) localStorage.setItem('Questionaire8', JSON.stringify({docId: caseDetails.OfferedServices.docId, ...data}));
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
    setPlaintiffsDetail({});
    setShouldPGFillPlaintiffInfo(false);
    setIsOrRepresentingPlaintiff("");
    setNumberOfAttorneyPlaintiff("");
    setPlaintiffAttorneysDetail({});
    setNumberOfAttorneysRepresentingPlaintiff("");
    // Reset Form 3
    setDefendantsDetail({});
    setShouldPGFillDefendantInfo(false);
    setIsOrRepresentingDefendant("");
    setNumberOfAttorneyDefendant("");
    setNumberOfAttorneysRepresentingDefendant("");
    setDefendantAttorneysDetail({});
    // Reset Form 4
    setNumberOfCaseFilesBeingServed("");
    setHowManyIndividualsServed("");
    setServeesDetail({});
    setLocationForBeingServed("");
    setMainAddressesForService({0: {street: "", city: "", state: "", zipCode: "", country: ""}});
    setAgentOfService("");
    setAgentsFullNames({0: {firstName: "", middleName: "", lastName: ""}});
    // Reset Form 5
    setTypeOfServe("");
    setServeIndividualAtEmployment("");
    setProcessServerLeaveDoorTag("");
    setSubserveAfterThreeAttempts("");
    setRequireServerNotifyPersonOfInterest("");
    setServerContactServeeByPhone("");
    setServerPostDocumentsWithRubberBand("");
    setDropServeForceServe("");
    setParalegalAttorneyClientContactServee("");
    // Reset Form 6
    setServeesPhysicalDescription({0: {
      fullName: {firstName: "", middleName: "", lastName: ""},
      gender: "", ethnicity: "", height: "", weight: "",
      hairColor: "", eyeColor: "", physicalOutline: "", image: null
    }});
    // Reset Form 7
    setVehiclesInformation({0: {
      insuranceCompany: "", licencePlateNumber: "", vinNumber: "",
      yearOfMake: "", color: "", modelType: ""
    }});
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
    setShowResetModal(false);
  }

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={() => props.setModalShow(false)}
        size="xl"
        aria-labelled-by="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Update Case
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            isFetchingCaseDetails
              ?
                <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
                  <div style={{height: "70vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                      <div style={{height: 25, width: 25}} className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>  
                    </div>
                  </div>
                </div>
              :
                <>
                  <Element name="stepper" className="element">
                    <Stepper
                      steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: 'Step 4' }, { label: 'Step 5' }, { label: 'Step 6' }, { label: 'Step 7' }, { label: 'Step 8' }, { label: 'Step 9' }]}
                      activeStep={activeStep-1}
                    />
                  </Element>
                  <br></br>
                  <div style={{display: "flex", width: "100%", justifyContent: "center"}}>
                    <button onClick={()=>setShowResetModal(true)} className="btn btn-primary">Reset All Forms</button>
                  </div>
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
                          isOrRepresentingPlaintiff={isOrRepresentingPlaintiff}
                          setIsOrRepresentingPlaintiff={setIsOrRepresentingPlaintiff}
                          shouldPGFillPlaintiffInfo={shouldPGFillPlaintiffInfo}
                          setShouldPGFillPlaintiffInfo={setShouldPGFillPlaintiffInfo}
                          plaintiffsDetail={plaintiffsDetail}
                          setPlaintiffsDetail={setPlaintiffsDetail}
                          numberOfAttorneyPlaintiff={numberOfAttorneyPlaintiff}
                          setNumberOfAttorneyPlaintiff={setNumberOfAttorneyPlaintiff}
                          plaintiffAttorneysDetail={plaintiffAttorneysDetail}
                          setPlaintiffAttorneysDetail={setPlaintiffAttorneysDetail}
                          numberOfAttorneysRepresentingPlaintiff={numberOfAttorneysRepresentingPlaintiff}
                          setNumberOfAttorneysRepresentingPlaintiff={setNumberOfAttorneysRepresentingPlaintiff}
                        />
                  }
                  {
                    activeStep === 3
                      &&
                        <Questionaire3
                          isOrRepresentingDefendant={isOrRepresentingDefendant}
                          setIsOrRepresentingDefendant={setIsOrRepresentingDefendant}
                          shouldPGFillDefendantInfo={shouldPGFillDefendantInfo}
                          setShouldPGFillDefendantInfo={setShouldPGFillDefendantInfo}
                          numberOfAttorneyDefendant={numberOfAttorneyDefendant}
                          setNumberOfAttorneyDefendant={setNumberOfAttorneyDefendant}
                          defendantsDetail={defendantsDetail}
                          setDefendantsDetail={setDefendantsDetail}
                          numberOfAttorneysRepresentingDefendant={numberOfAttorneysRepresentingDefendant}
                          setNumberOfAttorneysRepresentingDefendant={setNumberOfAttorneysRepresentingDefendant}
                          defendantAttorneysDetail={defendantAttorneysDetail}
                          setDefendantAttorneysDetail={setDefendantAttorneysDetail}
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
                          serveesDetail={serveesDetail}
                          setServeesDetail={setServeesDetail}
                          locationForBeingServed={locationForBeingServed}
                          setLocationForBeingServed={setLocationForBeingServed}
                          mainAddressesForService={mainAddressesForService}
                          setMainAddressesForService={setMainAddressesForService}
                          agentOfService={agentOfService}
                          setAgentOfService={setAgentOfService}
                          agentsFullNames={agentsFullNames}
                          setAgentsFullNames={setAgentsFullNames}
                        />
                  }
                  {
                    activeStep === 5
                      &&
                        <Questionaire5
                          typeOfServe={typeOfServe}
                          setTypeOfServe={setTypeOfServe}
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
                          serveesPhysicalDescription={serveesPhysicalDescription}
                          setServeesPhysicalDescription={setServeesPhysicalDescription}
                        />
                  }
                  {
                    activeStep===7
                      &&
                        <Questionaire7
                          vehiclesInformation={vehiclesInformation}
                          setVehiclesInformation={setVehiclesInformation}
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
                        <FileSubmission
                          isFormUpdating={true}
                          docId={caseDetails.FileSubmission.docId}
                          documentPath={caseDetails.FileSubmission.documentPath}
                          documentURI={caseDetails.FileSubmission.documentURI}
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
                  <ResetQuestionairesConfirmation
                    showModal={showResetModal}
                    handleModalClose={()=>setShowResetModal(false)}
                    handleOnClickConfirm={handleResetForms}
                  />
                </>
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditCase;