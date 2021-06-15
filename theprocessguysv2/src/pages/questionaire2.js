import React, { useState } from "react";
import { MDBCol, MDBInput } from "mdbreact";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuestionaireAttorneyTemplateD from "./questionaireAttorneyTemplateD";
import QuestionaireAttorneyTemplateP from "./questionaireAttorneyTemplateP";
import QuestionaireAddressTemplate from "./questionaireAddressTemplate";
import QuestionaireAgentOfService from "./questionaireAgentOfServiceTemplate";
import QuestionaireEmploymentAddressTemplate from "./questionaireEmploymentAddressTemplate";
import QuestionaireAdditionalServeeTemplate from "./questionaireAdditionalServeeTemplate";
import QuestionaireAdditionalVehicleTemplate from "./questionaireAdditionalVehicleTemplate";
import db from "../firebase";

function Questionaire() {

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

    const [howManyIndividualsServed, setHowManyindividualsServed] = useState("");
    const [employmentOfIndividuals, setEmploymentOfIndividuals] = useState("");
    const [nameOfIndividuals, setNameOfIndividuals] = useState("");
    const [dobOfIndividuals, setDobOfIndividuals] = useState("");
    const [locationForBeingServed, setLocationForBeingServed] = useState("");
    const [mainAddressForService, setMainAddressForService] = useState("");
    const [agentOfService, setAgentOfService] = useState("");
    const [ifYesListFullName, setIfYesListFullName] = useState("");
    const [phoneNumbersOfIndividuals, setPhoneNumberOfIndividuals] = useState("");
    const [emailsOfindividuals, setEmailOfIndividuals] = useState("");
    const [addressForCurrentPlaceOfEmployment, setAddressForCurrentPlaceOfEmployment] = useState("");
    const [knownCoResidentsOfServee, setCoResidentsOfServee] = useState("");

    const [serveIndividualAtEmployment, setServeIndividualAtEmployment] = useState("");
    const [processServerLeaveDoorTag,setProcessServerLeaveDoorTag] = useState("");
    const [subserveAfterThreeAttempts, setSubserveAfterThreeAttempts] = useState("");
    const [requireServernotifyPersonOfInterest, setRequireServerNotifyPersonOfInterest] = useState("");
    const [serverContactServeeByPhone, setServerContactServeeByPhone] = useState("");
    const [serverPostDocumentsWithRubberBand,setServerPostDocumentsWithRubberBand] = useState("");
    const [dropServeForceServe, setDropServeForceServe] = useState("");
    const [paralegalAttorneyClientContactServee, setParalegalAttorneyClientContactServee] = useState("");

    const [fullNameofDescribedServee, setFullNameOfDescribedServee] = useState("");
    const [imageOfIndividuals, setImageOfIndividuals] = useState("");
    const [genderOfindividuals, setGenderOfIndividuals] = useState("");
    const [ethnicityOfindividuals, setEthnicityOfIndividuals] = useState("");
    const [heightOfIndividuals, setHeightOfIndividuals] = useState("");
    const [weightOfIndividuals, setWeightOfIndividuals] = useState("");
    const [hairColorOfIndividuals, setHairColorOfIndividuals] = useState("");
    const [eyeColorOfindividuals, setEyeColorOfIndividuals] = useState("");
    const [physicalOutlineOfIndividuals, setPhysicalOutlineOfIndividuals] = useState("");

    const [insuranceCompanyOfServee, setInsuranceCompanyOfServee] = useState("");
    const [liscencePlateNumberState, setLiscencePlateNumberState] = useState("");
    const [vinNumberOfindividuals, setVinNumberOfIndividuals] = useState("");
    const [yearOfMakeOnVehicle, setYearOfMakeOnVehicle] = useState("");
    const [vehicleColor, setVehicleColor] = useState("");
    const [vehicleTypeModelOwnership, setVehicleTypeModelOwnership] = useState("");

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
    const [ifYesListAddress, setIfYesListAddress] = useState("");


    const handleSubmit = (e) => {
      e.preventDefault();

        db.collection("questionaire")
        .add({
          caseTitle: caseTitle,
          caseNumber: caseNumber,
          courtDate: courtDate,
          superiorCourtOf: superiorCourtOf,
          countyOf: countyOf,
          courthouseAddress: courthouseAddress,
          courthouseMailingAddress: courthouseMailingAddress,
          branchName: branchName,
          appealsCourtOf: appealsCourtOf,
          supremeCourtOf: supremeCourtOf,

          plaintiffFullName: plaintiffFullName,
          plaintiffAddress: plaintiffAddress,
          numberOfAttorneyPlaintiff: numberOfAttorneyPlaintiff,

          attorneyRepresentingPlaintiffInfo: attorneyRepresentingPlaintiffInfo,
          plaintiffAttorneyName: plaintiffAttorneyName,
          plaintiffAttorneyBarNumber: plaintiffAttorneyBarNumber,
          plaintiffAttorneyOfficeAddress: plaintiffAttorneyOfficeAddress,
          plaintiffAttorneyEmail: plaintiffAttorneyEmail,
          plaintiffAttorneyPhoneNumberForCalls: plaintiffAttorneyPhoneNumberForCalls,
          plaintiffAttorneyFaxNumberOptional: plaintiffAttorneyFaxNumberOptional,

          defendantFullName: defendantFullName,
          defendantAddress: defendantAddress,
          numberOfAttorneyDefendant: numberOfAttorneyDefendant,

          attorneyRepresentingDefendantInfo:attorneyRepresentingDefendantInfo,
          defendantAttorneyName: defendantAttorneyName,
          defendantAttorneyOfficeAddress: defendantAttorneyOfficeAddress,
          defendantAttorneyBarNumber: defendantAttorneyBarNumber,
          defendantAttorneyEmail: defendantAttorneyEmail,
          defendantAttorneyPhoneNumberForCalls:defendantAttorneyPhoneNumberForCalls,
          defendantAttorneyFaxNumberOptional: defendantAttorneyFaxNumberOptional,

          howManyIndividualsServed: howManyIndividualsServed,          
          employmentOfIndividuals: employmentOfIndividuals,
          nameOfIndividuals: nameOfIndividuals,
          dobOfIndividuals: dobOfIndividuals,
          locationForBeingServed: locationForBeingServed,
          mainAddressForService: mainAddressForService,
          agentOfService: agentOfService,          
          ifYesListFullName: ifYesListFullName,
          phoneNumbersOfIndividuals: phoneNumbersOfIndividuals,
          emailsOfindividuals: emailsOfindividuals,
          addressForCurrentPlaceOfEmployment: addressForCurrentPlaceOfEmployment,
          knownCoResidentsOfServee: knownCoResidentsOfServee,

          serveIndividualAtEmployment: serveIndividualAtEmployment,
          processServerLeaveDoorTag:processServerLeaveDoorTag,
          subserveAfterThreeAttempts: subserveAfterThreeAttempts,          
          requireServernotifyPersonOfInterest: requireServernotifyPersonOfInterest,
          serverContactServeeByPhone: serverContactServeeByPhone,
          serverPostDocumentsWithRubberBand: serverPostDocumentsWithRubberBand,
          dropServeForceServe: dropServeForceServe,          
          paralegalAttorneyClientContactServee: paralegalAttorneyClientContactServee,

          fullNameofDescribedServee: fullNameofDescribedServee,
          imageOfIndividuals: imageOfIndividuals,
          genderOfindividuals: genderOfindividuals,
          ethnicityOfindividuals: ethnicityOfindividuals,
          heightOfIndividuals: heightOfIndividuals,
          weightOfIndividuals: weightOfIndividuals,
          hairColorOfIndividuals: hairColorOfIndividuals,
          eyeColorOfindividuals: eyeColorOfindividuals,
          physicalOutlineOfIndividuals: physicalOutlineOfIndividuals,

          insuranceCompanyOfServee: insuranceCompanyOfServee,
          vehicleTypeModelOwnership: vehicleTypeModelOwnership,
          liscencePlateNumberState: liscencePlateNumberState,
          vinNumberOfindividuals: vinNumberOfindividuals,
          yearOfMakeOnVehicle: yearOfMakeOnVehicle,
          vehicleColor: vehicleColor,

          requireStakeOutService: requireStakeOutService,
          specifyDatesForStakeOutService: specifyDatesForStakeOutService,
          requireRushService: requireRushService,          
          listDateWhenServiceAttemptsClosed: listDateWhenServiceAttemptsClosed,
          requireFirst24HourService: requireFirst24HourService,
          requireSkipTracingService: requireSkipTracingService,
          requireBodyCamFootage: requireBodyCamFootage,
          obtainNewDeliveryLocation: obtainNewDeliveryLocation,
          poBoxAllowedToServe: poBoxAllowedToServe,
          requireServiceByMail: requireServiceByMail,
          requireByEmail: requireByEmail,
          specificCourtInstruction: specificCourtInstruction,
          ifYesListAddress: ifYesListAddress

    })
        .then(() => {
          alert("Your questionaire has been submitted 👍");
        })
        .catch((error) => {
          alert(error.message);
        });

        setCaseTitle("");
        setCaseNumber("");
        setCourtDate("");
        setSuperiorCourtOf("");
        setCountyOf("");
        setCourthouseAddress("");
        setCourthouseMailingAddress("");
        setBranchName("");
        setAppealsCourtOf("");
        setSupremeCourtOf("");
        setPlaintiffFullName("");
        setPlaintiffAddress("");
        setNumberOfAttorneyPlaintiff("");
        setAttorneyRepresentingPlaintiffInfo("");
        setDefendantFullName("");
        setDefendantAddress("");
        setNumberOfAttorneyDefendant("");
        setAttorneyRepresentingDefendantInfo("");
        setNameOfIndividuals("");
        setDobOfIndividuals("");
        setPhoneNumberOfIndividuals("");
        setEmailOfIndividuals("");
        setServeIndividualAtEmployment("");
        setImageOfIndividuals("");
        setGenderOfIndividuals("");
        setEthnicityOfIndividuals("");
        setHeightOfIndividuals("");
        setWeightOfIndividuals("");
        setHairColorOfIndividuals("");
        setEyeColorOfIndividuals("");
        setPhysicalOutlineOfIndividuals("");
        setEmploymentOfIndividuals("");
        setVehicleTypeModelOwnership("");
        setAppealsCourtOf("");
        setSupremeCourtOf("");
        setServerContactServeeByPhone("");
        setCoResidentsOfServee("");
        setAgentOfService("");
        setIfYesListFullName("");
        setAddressForCurrentPlaceOfEmployment("");
        setInsuranceCompanyOfServee("");
        setLiscencePlateNumberState("");
        setVinNumberOfIndividuals("");
        setYearOfMakeOnVehicle("");
        setVehicleColor("");
        setPOBoxAllowedToServe("");
        setRequireServiceByMail("");
        setRequireByEmail("");
        setRequireSkipTracingService("");
        setRequireBodyCamFootage("");
        setRequireServerNotifyPersonOfInterest("");
        setDropServeForceServe("");
        setRequireRushService("");
        setRequireStakeoutService("");
        setSubserveAfterThreeAttempts("");
        setSpecificCourtInstruction("");
        setFullNameOfDescribedServee("");
        setPlaintiffAttorneyName("");
        setPlaintiffAttorneyBarNumber("");
        setPlaintiffAttorneyBarNumber("");
        setPlaintiffAttorneyOfficeAddress("");
        setPlaintiffAttorneyPhoneNumberForCalls("");
        setPlaintiffAttorneyEmail("");
        setPlaintiffAttorneyFaxNumberOptional("");
        setDefendantAttorneyName("");
        setDefendantAttorneyBarNumber("");
        setDefendantAttorneyOfficeAddress("");
        setDefendantAttorneyPhoneNumberForCalls("");
        setDefendantAttorneyEmail("");
        setDefendantAttorneyFaxNumberOptional("");
        setHowManyindividualsServed("");
        setLocationForBeingServed("");
        setMainAddressForService("");
        setProcessServerLeaveDoorTag("");
        setServerPostDocumentsWithRubberBand("");
        setParalegalAttorneyClientContactServee("");
        setFullNameOfDescribedServee("");
        setSpecifyDatesForStakeOutService("");
        setListDateWhenServiceAttemptsClosed("");
        setRequireFirst24HourService("");
        setObtainNewDeliveryLocation("");
        setIfYesListAddress("");
    }


    return(
        <React.Fragment>
        <h2 className="text-center mb-4 mt-5">New Case Questionaire</h2>
        <h3 className="text-center mb-4 mt-5">
            ​**Service should be completed 2 + weeks prior to the court date**
            Thus avoiding any complications with the judge.
            Please fill out as much information as possible from the court documents being submitted, certain sections marked with "*" are REQUIRED to proceed</h3>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form className="mb-4">
            <MDBCol md="12" id="case-title">
                <Form.Group id="text">
                <div id="case-title">
                <label>Case Title*</label>
                <MDBInput
                type="text"
                value={caseTitle}
                onChange={(e) => setCaseTitle(e.target.value)}
                required 
                     />
                </div>
                </Form.Group>
            </MDBCol>
            <MDBCol md="12" id="case-number">
                <div id="case-number">
                <label>Case Number*</label>
                <MDBInput 
                type="text"
                value={caseNumber}
                onChange={(e) => setCaseNumber(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="court-date">
                <div id="court-date">
                <label>Court Date (Write N/A if not issued)*</label>
                <MDBInput 
                type="text"
                value={courtDate}
                onChange={(e) => setCourtDate(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="superior-court-of">
                <div id="superior-court-of">
                <label>Superior Court of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text"
                value={superiorCourtOf}
                onChange={(e) => setSuperiorCourtOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="county-of">
                <div id="county-of">
                <label>County Of*</label>
                <MDBInput
                type="text"
                value={countyOf}
                onChange={(e) => setCountyOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="branch-name">
                <div id="branch-name">
                <label>Branch Name*</label>
                <MDBInput
                type="text" 
                value={branchName}
                onChange={(e) => setBranchName(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-address">
                <div id="courthouse-address">
                <label>Courthouse Address*</label>
                <MDBInput 
                type="text" 
                value={courthouseAddress}
                onChange={(e) => setCourthouseAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-mailing-address">
                <div id="courthouse-mailing-address">
                <label>Courthouse Mailing Address*</label>
                <MDBInput 
                type="text" 
                value={courthouseMailingAddress}
                onChange={(e) => setCourthouseMailingAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="appeals-court-of">
                <div id="appeals-court-of">
                <label>Appeals Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                value={appealsCourtOf}
                onChange={(e) => setAppealsCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="supreme-court-of">
                <div id="supreme-court-of">
                <label>Supreme Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                value={supremeCourtOf}
                onChange={(e) => setSupremeCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <br></br>

            <h4 className="text-center mb-4 mt-5"><u>In the following two sections, information regarding both parties is required. Councel representing your party is required, and please provide as much information about opposing counsel as possible!</u> </h4>
            <br></br>

            <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
            <Button className="d-flex align-items-center justify-content-center w-50">Skip</Button>
            <p>"Click Here" to skip filling this section out, leave it for our team to complete! (Additional Charge)</p>
            <br></br>
            <br></br>
            <MDBCol md="12" id="plaintiff-full-name">
                <div id="plaintiff-full-name">
                <label>Plaintiff's Full Name*</label>
                <MDBInput 
                type="text" 
                value={plaintiffFullName}
                onChange={(e) => setPlaintiffFullName(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-address">
                <div id="plaintiff-address">
                <label>Plaintiff's Address*</label>
                <MDBInput 
                type="text" 
                value={plaintiffAddress}
                onChange={(e) => setPlaintiffAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="number-of-plaintiff-listed">
                <div id="number-of-plaintiff-listed">
                <label>Number of Plaintiff(s) listed?*</label>
                <select className="w-75 m-4 text-center p-2"
                value={numberOfAttorneyPlaintiff}
                onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>


            <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
                <div id="number-of-attorney-representing-plaintiff">
                <label>Number of Attorney's Representing the Plaintiff?*</label>
                <select className="w-75 m-4 text-center p-2"
                value={attorneyRepresentingPlaintiffInfo}
                onChange={(e) => setAttorneyRepresentingPlaintiffInfo(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-name">
                <div id="plaintiff-attorney-name">
                <label>Enter Attorney Full Name*</label>
                <MDBInput
                type="text"
                value={plaintiffAttorneyName}
                onChange={(e) => setPlaintiffAttorneyName(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-bar-number">
                <div id="plaintiff-attorney-bar-number">
                <label>Bar Number*</label>
                <MDBInput
                type="text"
                value={plaintiffAttorneyBarNumber}
                onChange={(e) => setPlaintiffAttorneyBarNumber(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-phone-number-for-calls">
                <div id="plaintiff-attorney-phone-number-for-calls">
                <label>Phone Number for Calls (you may list multiple)</label>
                <MDBInput
                type="textarea"
                value={plaintiffAttorneyPhoneNumberForCalls}
                onChange={(e) => setPlaintiffAttorneyPhoneNumberForCalls(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-office-address">
                <div id="plaintiff-attorney-office-address">
                <label>Office Address*</label>
                <MDBInput
                type="text"
                value={plaintiffAttorneyOfficeAddress}
                onChange={(e) => setPlaintiffAttorneyOfficeAddress(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-attorney-email">
                <div id="plaintiff-attorney-email">
                <label>Attorney E-Mail*</label>
                <MDBInput
                type="text"
                value={plaintiffAttorneyEmail}
                onChange={(e) => setPlaintiffAttorneyEmail(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-fax-number-optional">
                <div id="plaintiff-fax-number-optional">
                <label>Fax Number (Optional)</label>
                <MDBInput
                type="text"
                value={plaintiffAttorneyFaxNumberOptional}
                onChange={(e) => setPlaintiffAttorneyFaxNumberOptional(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol>
                <QuestionaireAttorneyTemplateP />
            </MDBCol>
            <p className="d-flex align-items-center justify-content-center">
                **Click button to add another Attorney**
            </p>
            <br></br>


            <h2 className="text-center mb-4 mt-2">Defendant Information</h2>
            <MDBCol md="12" id="defendant-full-name">
                <div id="defendant-full-name">
                <label>Defendant's Full Name*</label>
                <MDBInput 
                type="text" 
                value={defendantFullName}
                onChange={(e) => setDefendantFullName(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-address">
                <div id="defendant-address">
                <label>Defendant's Address</label>
                <MDBInput 
                type="text" 
                value={defendantAddress}
                onChange={(e) => setDefendantAddress(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="number-of-defendant-listed">
                <div id="number-of-defendant-listed">
                <label>Number of Defendant(s) listed?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                value={numberOfAttorneyDefendant}
                onChange={(e) => setNumberOfAttorneyDefendant(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="number-of-attorney-representing-defendant">
                <div id="number-of-attorney-representing-defendant">
                <label>Number of Attorney's Representing the Defendant?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                value={attorneyRepresentingDefendantInfo}
                onChange={(e) => setAttorneyRepresentingDefendantInfo(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-name">
                <div id="defendant-attorney-name">
                <label>Enter Attorney Full Name*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyName}
                onChange={(e) => setDefendantAttorneyName(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-bar-number">
                <div id="defendant-attorney-bar-number">
                <label>Bar Number*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyBarNumber}
                onChange={(e) => setDefendantAttorneyBarNumber(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-phone-number-for-calls">
                <div id="defendant-attorney-phone-number-for-calls">
                <label>Phone Number for Calls (you may list multiple)</label>
                <MDBInput
                type="textarea"
                value={defendantAttorneyPhoneNumberForCalls}
                onChange={(e) => setDefendantAttorneyPhoneNumberForCalls(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-office-address">
                <div id="defendant-attorney-office-address">
                <label>Office Address*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyOfficeAddress}
                onChange={(e) => setDefendantAttorneyOfficeAddress(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-email">
                <div id="defendant-attorney-email">
                <label>Attorney E-Mail*</label>
                <MDBInput
                type="text"
                value={defendantAttorneyEmail}
                onChange={(e) => setDefendantAttorneyEmail(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-attorney-fax-number-optional">
                <div id="defendant-attorney-fax-number-optional">
                <label>Fax Number (Optional)</label>
                <MDBInput
                type="text"
                value={defendantAttorneyFaxNumberOptional}
                onChange={(e) => setDefendantAttorneyFaxNumberOptional(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol>
                <QuestionaireAttorneyTemplateD />
            </MDBCol>
            <p className="d-flex align-items-center justify-content-center">
                **Click button to add another Attorney**
            </p>
            <br></br>

            <h2 className="text-center mb-4 mt-2">Servee Documented Data</h2>
            <br></br>
            <MDBCol md="12" id="how-many-individuals-served">
                <div id="how-many-individuals-served">
                <label>How Many Individuals are Being Served?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                value={howManyIndividualsServed}
                onChange={(e) => setHowManyindividualsServed(e.target.value)}
                required
                >
                <option value="Please Select" >Please Select</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="name-of-individuals">
                <div id="name-of-individuals">
                <label>Full Name or Title of who is Receiving Service*</label>
                <MDBInput 
                type="text" 
                value={nameOfIndividuals}
                onChange={(e) => setNameOfIndividuals(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="dob-of-individuals">
                <div id="dob-of-individuals">
                <label>Date of Birth of Servee (Write N/A if unavailable)*</label>
                <MDBInput
                type="text" 
                value={dobOfIndividuals}
                onChange={(e) => setDobOfIndividuals(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="location-being-served">
                <div id="location-being-served">
                <label>What kind of location is being served? (Write N/A if unavailable)*</label>
                <select className="w-75 m-4 text-center p-2"
                value={locationForBeingServed}
                onChange={(e) => setLocationForBeingServed(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="individual" >Individual</option>
                <option value="business">Business</option>
                <option value="unknown">Unknown</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="main-address-for-service">
                <div id="main-address-for-service">
                <label>Main Address for Service*</label>
                <MDBInput
                type="text" 
                value={mainAddressForService}
                onChange={(e) => setMainAddressForService(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol>
                <QuestionaireAddressTemplate/>
            </MDBCol>
            <br></br>

            <MDBCol md="12" id="agent-of-service">
                <div id="agent-of-service">
                <label>Is There an Agent of Service?*</label>
                <select className="w-75 m-4 center p-2"
                value={agentOfService}
                onChange={(e) => setAgentOfService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
            <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="if-yes-list-full-name">
                <div id="if-yes-list-full-name">
                <label>If yes, List the Full Name to Agent of Service</label>
                <MDBInput
                type="text" 
                value={ifYesListFullName}
                onChange={(e) => setIfYesListFullName(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
                <MDBCol>
                    <QuestionaireAgentOfService />
                </MDBCol>
            <br></br>

            <MDBCol md="12" id="phone-numbers-of-individuals">
                <div id="phone-numbers-of-individuals">
                <label>Phone Number(s) Pertaining to Servee(s) - Identify via Mobile, Office, and/or Home</label>
                <MDBInput 
                type="textarea" 
                value={phoneNumbersOfIndividuals}
                onChange={(e) => setPhoneNumberOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="email-of-individuals">
                <div id="email-of-individuals">
                <label>E-Mail(s) pertaining Servee(s)</label>
                <MDBInput 
                type="textarea" 
                value={emailsOfindividuals}
                onChange={(e) => setEmailOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
                <div id="employment-of-individuals">
                <label>Is the Servee Currently Employed?*</label>
                <select className="w-75 m-4 center p-2"
                value={employmentOfIndividuals}
                onChange={(e) => setEmploymentOfIndividuals(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="address-for-current-place-of-employment">
                <div id="address-for-current-place-of-employment">
                <label>Address for Current Place of Employment?</label>
                <MDBInput
                type="text" 
                value={addressForCurrentPlaceOfEmployment}
                onChange={(e) => setAddressForCurrentPlaceOfEmployment(e.target.value)}
                     />
                </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireEmploymentAddressTemplate />
            </MDBCol>
            <br></br>

            <MDBCol md="12" id="known-coresidents-of-servee">
                <div id="known-coresidents-of-servee">
                <label>Any Known Co-Resident(s) of the Servee and Their Relationship to the Individual?</label>
                <MDBInput 
                type="textarea" 
                value={knownCoResidentsOfServee}
                onChange={(e) => setCoResidentsOfServee(e.target.value)}
                     />
                </div>
            </MDBCol>

            <h2 className="text-center mb-4 mt-2">Clearance of Action</h2>
            <br></br>

            <MDBCol md="12" id="serve-individual-at-employment">
                <div id="serve-individual-at-employment">
                <label>May we serve the Servee at a place of employment?*</label>
                <select className="w-75 m-4 text-center p-2"
                value={serveIndividualAtEmployment}
                onChange={(e) => setServeIndividualAtEmployment(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="process-server-leave-door-tag">
                <div id="process-server-leave-door-tag">
                <label>May our Process Server leave a door tag on the handle, or business card?*</label>
                <select className="w-75 m-4 text-center p-2"
                value={processServerLeaveDoorTag}
                onChange={(e) => setProcessServerLeaveDoorTag(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="subserve-after-three-attempts">
                <div id="subserve-after-three-attempts">
                <label>Is a “Subserve” to a Co-Resident/Co-Worker After 4 Attempts <i>(3 Attempts in California)</i> Allowed?*</label>
                <select className="w-75 m-4 center p-2"
                value={subserveAfterThreeAttempts}
                onChange={(e) => setSubserveAfterThreeAttempts(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-server-notify-person-of-interest">
                <div id="require-server-notify-person-of-interest">
                <label>Is the judge requiring the Process Server to verbally notify the Servee, service may be rejected? Thus ceasing all further service attempts for current case <i>(International Court Cases)</i> Please verify with Judge*</label>
                    <select className="w-75 m-4 center p-2"
                    value={requireServernotifyPersonOfInterest}
                    onChange={(e) => setRequireServerNotifyPersonOfInterest(e.target.value)}
                    required
                    >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="server-contact-servee-by-phone">
                <div id="server-contact-servee-by-phone">
                <label>May our Process Server Contact the Servee by Phone or Other Means?*</label>
                <select className="w-75 m-4 text-center p-2"
                value={serverContactServeeByPhone}
                onChange={(e) => setServerContactServeeByPhone(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="server-post-documents-with-rubber-band">
                <div id="server-post-documents-with-rubber-band">
                <label>May our Process Server post documents with a rubber band on the door handle once due dilligence has been met? Verify with judge if permissible <i>(varies by case)</i>*</label>
                <select className="w-75 m-4 text-center p-2"
                value={serverPostDocumentsWithRubberBand}
                onChange={(e) => setServerPostDocumentsWithRubberBand(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="drop-serve-force-serve">
                <div id="drop-serve-force-serve">
                <label>Is a “Drop Serve / Force Serve” Allowed, 
                    Once Residence/Employment is Confirmed and an Individual(s) Refuses to Accept Documents Upon Contact/Sub-Service?*</label>
                    <select className="w-75 m-4 center p-2"
                    value={dropServeForceServe}
                    onChange={(e) => setDropServeForceServe(e.target.value)}
                    required
                    >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="paralegal-attorney-client-contact-servee">
                <div id="paralegal-attorney-client-contact-servee">
                <label>Has a paralegal/attorney, or your client contacted the Individual regarding service on this case? <i>(Thus prompting them to expect attempts)</i></label>
                    <select className="w-75 m-4 center p-2"
                    value={paralegalAttorneyClientContactServee}
                    onChange={(e) => setParalegalAttorneyClientContactServee(e.target.value)}
                    required
                    >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>

            <h2 className="text-center mb-4 mt-2">Servee physical description <i>(If Available)</i>*</h2>
            <br></br>

            <MDBCol md="12" id="full-name-of-described-servee">
                <div id="full-name-of-described-servee">
                <label>Full Name of Described Servee*</label>
                <MDBInput
                type="text" 
                value={fullNameofDescribedServee}
                onChange={(e) => setFullNameOfDescribedServee(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="gender-of-individuals">
                <div id="gender-of-individuals">
                <label>Gender of Servee</label>
                <select className="w-75 m-4 center p-2"
                value={genderOfindividuals}
                onChange={(e) => setGenderOfIndividuals(e.target.value)}
                >
                    <option value="Please Select">Please Select</option>
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                </div>
            </MDBCol>
            <MDBCol md="12" id="ethnicity-of-individuals">
                <div id="ethnicity-of-individuals">
                <label>Ethnicity of Servee</label>
                <MDBInput
                type="textarea" 
                value={ethnicityOfindividuals}
                onChange={(e) => setEthnicityOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="height-of-individuals">
                <div id="height-of-individuals">
                <label>Height of Servee Being Served?</label>
                <MDBInput
                type="textarea" 
                value={heightOfIndividuals}
                onChange={(e) => setHeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="weight-of-individuals">
                <div id="weight-of-individuals">
                <label>Weight Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={weightOfIndividuals}
                onChange={(e) => setWeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="hair-color-of-individuals">
                <div id="hair-color-of-individuals">
                <label>Hair Color of Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={hairColorOfIndividuals}
                onChange={(e) => setHairColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="eye-color-of-individuals">
                <div id="eye-color-of-individuals">
                <label>Eye Color of Servee Being Served?</label>
                <MDBInput 
                type="textarea" 
                value={eyeColorOfindividuals}
                onChange={(e) => setEyeColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="physical-outlines-for-individuals">
                <div id="physical-outlines-for-individuals">
                <label>Any Physical Outlines noted for Servee being Served? 
                <i>(ie scars, tattoos, birthmarks, facial hair, glasses, blemish, birth mark)</i></label>
                <MDBInput
                type="textarea" 
                value={physicalOutlineOfIndividuals}
                onChange={(e) => setPhysicalOutlineOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12 mb-4" id="image-of-individuals">
            <div id="image-of-individuals">
                <label>Servee Image <i>(If Available)</i>*</label>
                <input type='file' accept=".jpg,.png" label='Upload' multiple 
                value={imageOfIndividuals}
                onChange={(e) => setImageOfIndividuals(e.target.value)}
                />
              </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireAdditionalServeeTemplate />
            </MDBCol>
            <br></br>

            <h2 className="text-center mb-4 mt-2">Vehicle Information<i>(If Available)</i>*</h2>
            <br></br>

            <MDBCol md="12" id="insurance-company-of-servee">
                <div id="insurance-company-of-servee">
                <label>Insurance Company of Servee</label>
                <MDBInput
                type="text" 
                value={insuranceCompanyOfServee}
                onChange={(e) => setInsuranceCompanyOfServee(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-type-model-ownership">
                <div id="vehicle-type-model-ownership">
                <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
                <MDBInput 
                type="textarea" 
                value={vehicleTypeModelOwnership}
                onChange={(e) => setVehicleTypeModelOwnership(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="liscence-plate-number-state">
                <div id="liscence-plate-number-state">
                <label>Liscense Plate Number/State of Individual(s)</label>
                <MDBInput
                type="text" 
                value={liscencePlateNumberState}
                onChange={(e) => setLiscencePlateNumberState(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vin-number-of-individuals">
                <div id="vin-number-of-individuals">
                <label>Vehicle Vin Number of Individual(s)</label>
                <MDBInput 
                type="text" 
                value={vinNumberOfindividuals}
                onChange={(e) => setVinNumberOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-year-of-individuals">
                <div id="vehicle-year-of-individuals">
                <label>Year of Make on Vehicle</label>
                <MDBInput
                type="text" 
                value={yearOfMakeOnVehicle}
                onChange={(e) => setYearOfMakeOnVehicle(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-color-of-individuals">
                <div id="vehicle-color-of-individuals">
                <label>Vehicle Color</label>
                <MDBInput 
                type="text"
                value={vehicleColor} 
                onChange={(e) => setVehicleColor(e.target.value)}
                />
                </div>
            </MDBCol>
            <br></br>
            <MDBCol>
                <QuestionaireAdditionalVehicleTemplate />
            </MDBCol>
            <br></br>

            <h2 className="text-center mb-4 mt-2">Offered Services</h2>
            <br></br>

            <MDBCol md="12" id="require-stake-out-service">
                <div id="require-stake-out-service">
                <label>Do You Require a Stake Out Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireStakeOutService}
                onChange={(e) => setRequireStakeoutService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specify-dates-for-stake-out-service">
                <div id="specify-dates-for-stake-out-service">
                <label>What hours of the day would you want a stake out? And how many hours?</label>
                <MDBInput 
                type="textarea" 
                value={specifyDatesForStakeOutService}
                onChange={(e) => setSpecifyDatesForStakeOutService (e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-rush-service">
                <div id="require-rush-service">
                <label>Do You Require a Rush Service?* <i>(Additional Fee)</i></label>
                <select className="w-75 m-4 center p-2"
                value={requireRushService}
                onChange={(e) => setRequireRushService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="list-date-when-service-attempts-closed">
                <div id="list-date-when-service-attempts-closed">
                <label>List date when service attempts need to be closed out by.</label>
                <MDBInput 
                type="textarea" 
                value={listDateWhenServiceAttemptsClosed}
                onChange={(e) => setListDateWhenServiceAttemptsClosed(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-first-24-hour-service">
                <div id="require-first-24-hour-service">
                <label>Do you require a Service attempt within the first 24 hours of submission?<i>(Additional Fee)</i></label>
                <select className="w-75 m-4 center p-2"
                value={requireFirst24HourService}
                onChange={(e) => setRequireFirst24HourService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-skip-tracing-service">
                <div id="require-skip-tracing-service">
                <label>Do You Require a “Skip Tracing” Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireSkipTracingService}
                onChange={(e) => setRequireSkipTracingService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-body-cam-footage">
                <div id="require-body-cam-footage">
                <label>Do You Require Body Cam Footage of Service to Present as Evidence? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireBodyCamFootage}
                onChange={(e) => setRequireBodyCamFootage(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="obtain-new-delivery-location">
                <div id="obtain-new-delivery-location">
                <label>If the Process Server Obtains a New Delivery Location from the Servee, 
                    Should they Proceed the Service Without Authorization? <i>(Pre-Paid Plan)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={obtainNewDeliveryLocation}
                onChange={(e) => setObtainNewDeliveryLocation(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="p-o-box-allowed-to-serve">
                <div id="p-o-box-allowed-to-serve">
                <label>Is a P.O. Box Allowed to be Served Belonging to the Person of Interest? <i>(USPS Excluded)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={poBoxAllowedToServe}
                onChange={(e) => setPOBoxAllowedToServe(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-email">
                <div id="require-service-by-email">
                <label>Do you require a service by E-mail? Requires a written statement from servee agreeing to accept such a serve <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireByEmail}
                onChange={(e) => setRequireByEmail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-mail">
                <div id="require-service-by-mail">
                <label>Do You Require a Service by Secured Postal Mail with Signature, After Personal Service is Attempted? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireServiceByMail}
                onChange={(e) => setRequireServiceByMail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specific-court-instruction">
                <div id="specific-court-instruction">
                <label>Any Specific Case Information or Court Instructions you’d like to Provide? <i>(Example: Previous service attempts/experiences made, any noteable threats/altercations with listed Servees or other contacts, Court Requirements, Hours permitted for service by the court)</i> We generally operate between 8 AM and 10 PM</label>
                <MDBInput
                type="textarea" 
                value={specificCourtInstruction}
                onChange={(e) => setSpecificCourtInstruction(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-zip-file-service">
                <div id="require-zip-file-service">
                <label>Do you Require a Zip File Service at a Court House or Law Office? <i>(Additional Fee Based on Location)</i>*</label>
                <select className="w-75 m-4 center p-2"
                value={requireServiceByMail}
                onChange={(e) => setRequireServiceByMail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Please Select" >Please Select</option>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="if-yes-provide-address">
                <div id="if-yes-provide-address">
                <label>If yes, please Provide Address for Zip Filing</label>
                <MDBInput
                type="text" 
                value={ifYesListAddress}
                onChange={(e) => setIfYesListAddress(e.target.value)}
                     />
                </div>
            </MDBCol>
            </form>
            <br></br>
            <br></br>
            <Link to="/packet-submission-page">
                <Button className="w-75 justify-content-center d-flex" onSubmit={handleSubmit}>
                    Proceed to Document Upload
                </Button>
            </Link>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </React.Fragment>
    )
};

export default Questionaire;