import { MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import React/*, { useState }*/ from "react";
// import { Link } from "react-router-dom";
// import app from "firebase";

function Questionaire() {

    // const [caseTitle, setCaseTitle] = useState("");
    // const [caseNumber, setCaseNumber] = useState("");
    // const [courtDate, setCourtDate] = useState("");
    // const [superiorCourtOf, setSuperiorCourtOf] = useState("");
    // const [obtainNewDeliveryLocation, setObtainNewDeliveryLocation] = useState("");
    // const [countyOf, setCountyOf] = useState("");
    // const [courthouseAddress, setCourthouseAddress] = useState("");
    // const [courthouseMailingAddress, setCourthouseMailingAddress] = useState("");
    // const [branchName, setBranchName] = useState("");
    // const [plaintiffFullName, setPlaintiffFullName] = useState("");
    // const [plaintiffAddress, setPlaintiffAddress] = useState("");
    // const [numberOfAttorneyPlaintiff, setNumberOfAttorneyPlaintiff] = useState("");
    // const [attorneyRepresentingPlaintiffInfo, setAttorneyRepresentingPlaintiffInfo] = useState("");
    // const [defendantFullName, setDefendantFullName] = useState("");
    // const [defendantAddress, setDefendantAddress] = useState("");
    // const [numberOfAttorneyDefendant, setNumberOfAttorneyDefendant] = useState("");
    // const [attorneyRepresentingDefendantInfo, setAttorneyRepresentingDefendantInfo] = useState("");
    // const [nameOfIndividuals, setNameOfIndividuals] = useState("");
    // const [dobOfIndividuals, setDobOfIndividuals] = useState("");
    // const [phoneNumbersOfIndividuals, setPhoneNumberOfIndividuals] = useState("");
    // const [emailsOfindividuals, setEmailOfIndividuals] = useState("");
    // const [serviceAddressOfIndividuals, setServiceAddressOfIndividuals] = useState("");
    // const [serveIndividualAtEmployment, setServeIndividualAtEmployment] = useState("");
    // const [imageOfIndividuals, setImageOfIndividuals] = useState("");
    // const [genderOfindividuals, setGenderOfIndividuals] = useState("");
    // const [ethnicityOfindividuals, setEthnicityOfIndividuals] = useState("");
    // const [heightOfIndividuals, setHeightOfIndividuals] = useState("");
    // const [weightOfIndividuals, setWeightOfIndividuals] = useState("");
    // const [hairColorOfIndividuals, setHairColorOfIndividuals] = useState("");
    // const [eyeColorOfindividuals, setEyeColorOfIndividuals] = useState("");
    // const [physicalOutlineOfIndividuals, setPhysicalOutlineOfIndividuals] = useState("");
    // const [howManyIndividualsBeingServed, setHowManyIndividualsBeingServed] = useState("");
    // const [employmentOfIndividuals, setEmploymentOfIndividuals] = useState("");
    // const [vehicleTypeModelOwnership, setVehicleTypeModelOwnership] = useState("");
    // const [appealsCourtOf, setAppealsCourtOf] = useState("");
    // const [supremeCourtOf, setSupremeCourtOf] = useState("");
    // const [howManyIndividualsServed, setHowManyindividualsServed] = useState("");
    // const [lastKnownResidence, setLastKnownResidence] = useState("");
    // const [serverContactServeeByPhone, setServerContactServeeByPhone] = useState("");
    // const [serveeKnowTheyAreBeingServed, setServeeKnowTheyAreBeingServed] = useState("");
    // const [paralegalAttorneyClientContracted, setParalegalAttorneyClientContracted] = useState("");
    // const [leaveContactInfoDoorTag, setLeaveContactInfoDoorTag] = useState("");
    // const [knownCoResidentsOfServee, setCoResidentsOfServee] = useState("");
    // const [whichIsBeingServed, setWhichIsBeingServed] = useState("");
    // const [agentOfService, setAgentOfService] = useState("");
    // const [ifYesListFullName, setIfYesListFullName] = useState("");
    // const [addressForCurrentPlaceOfEmployment, setAddressForCurrentPlaceOfEmployment] = useState("");
    // const [insuranceCompanyOfServee, setInsuranceCompanyOfServee] = useState("");
    // const [liscencePlateNumberState, setLiscencePlateNumberState] = useState("");
    // const [vinNumberOfindividuals, setVinNumberOfIndividuals] = useState("");
    // const [yearOfMakeOnVehicle, setYearOfMakeOnVehicle] = useState("");
    // const [vehicleColor, setVehicleColor] = useState("");
    // const [poBoxAllowedToServe, setPOBoxAllowedToServe] = useState("");
    // const [requireServiceByMail, setRequireServiceByMail] = useState("");
    // const [requireByEmail, setRequireByEmail] = useState("");
    // const [requireSkipTracingService, setRequireSkipTracingService] = useState("");
    // const [requireBodyCamFootage, setRequireBodyCamFootage] = useState("");
    // const [requireServernotifyPersonOfInterest, setRequireServerNotifyPersonOfInterest] = useState("");
    // const [dropServeForceServe, setDropServeForceServe] = useState("");
    // const [instructionDropServiceForceService, setInstructionDropServiceForceService] = useState("");
    // const [requireRushService, setRequireRushService] = useState("");
    // const [specifyDatesForRushService, setSpecifyDatesForRushService] = useState("");
    // const [requireSameDayServiceAttempt, setRequireSameDayServiceAttempt] = useState("");
    // const [requireStakeOutService, setRequireStakeoutService] = useState("");
    // const [specifyDatesForStakeOutService, setSpecifyDatesForStakeOutService] = useState("");
    // const [subserveAfterThreeAttempts, setSubserveAfterThreeAttempts] = useState("");
    // const [specificHoursNeedAttempted, setSpecificHoursNeedAttempted] = useState("");
    // const [specificCourtInstruction, setSpecificCourtInstruction] = useState("");
    // const [refuseToAcceptDocuments, setRefuseToAccpetDocuments] = useState("");
    // const [fullNameofDescribedServee, setFullNameOfDescribedServee] = useState("");

    // const [loader, setLoader] = useState(false);
  
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   setLoader(true);
  
    //     app.collection("questionaire")
    //     .add({
    //       caseTitle: caseTitle,
    //       caseNumber: caseNumber,
    //       courtDate: courtDate,
    //       superiorCourtOf: superiorCourtOf,
    //       obtainNewDeliveryLocation: obtainNewDeliveryLocation,
    //       countyOf: countyOf,
    //       courthouseAddress: courthouseAddress,
    //       courthouseMailingAddress: courthouseMailingAddress,
    //       branchName: branchName,
    //       plaintiffFullName: plaintiffFullName,
    //       plaintiffAddress: plaintiffAddress,
    //       numberOfAttorneyPlaintiff: numberOfAttorneyPlaintiff,
    //       attorneyRepresentingPlaintiffInfo: attorneyRepresentingPlaintiffInfo,
    //       defendantFullName: defendantFullName,
    //       defendantAddress: defendantAddress,
    //       numberOfAttorneyDefendant: numberOfAttorneyDefendant,
    //       attorneyRepresentingDefendantInfo:attorneyRepresentingDefendantInfo,
    //       nameOfIndividuals: nameOfIndividuals,
    //       dobOfIndividuals: dobOfIndividuals,
    //       phoneNumbersOfIndividuals: phoneNumbersOfIndividuals,
    //       emailsOfindividuals: emailsOfindividuals,
    //       serviceAddressOfIndividuals: serviceAddressOfIndividuals,
    //       serveIndividualAtEmployment: serveIndividualAtEmployment,
    //       imageOfIndividuals: imageOfIndividuals,
    //       genderOfindividuals: genderOfindividuals,
    //       ethnicityOfindividuals: ethnicityOfindividuals,
    //       heightOfIndividuals: heightOfIndividuals,
    //       weightOfIndividuals: weightOfIndividuals,
    //       hairColorOfIndividuals: hairColorOfIndividuals,
    //       eyeColorOfindividuals: eyeColorOfindividuals,
    //       physicalOutlineOfIndividuals: physicalOutlineOfIndividuals,
    //       howManyIndividualsBeingServed: howManyIndividualsBeingServed,
    //       employmentOfIndividuals: employmentOfIndividuals,
    //       vehicleTypeModelOwnership: vehicleTypeModelOwnership,
    //       appealsCourtOf: appealsCourtOf,
    //       supremeCourtOf: supremeCourtOf,
    //       howManyIndividualsServed: howManyIndividualsServed,
    //       lastKnownResidence: lastKnownResidence,
    //       serverContactServeeByPhone: serverContactServeeByPhone,
    //       serveeKnowTheyAreBeingServed: serveeKnowTheyAreBeingServed,
    //       paralegalAttorneyClientContracted: paralegalAttorneyClientContracted,
    //       leaveContactInfoDoorTag: leaveContactInfoDoorTag,
    //       knownCoResidentsOfServee: knownCoResidentsOfServee,
    //       whichIsBeingServed: whichIsBeingServed,
    //       agentOfService: agentOfService,
    //       ifYesListFullName: ifYesListFullName,
    //       addressForCurrentPlaceOfEmployment: addressForCurrentPlaceOfEmployment,
    //       insuranceCompanyOfServee: insuranceCompanyOfServee,
    //       liscencePlateNumberState: liscencePlateNumberState,
    //       vinNumberOfindividuals: vinNumberOfindividuals,
    //       yearOfMakeOnVehicle: yearOfMakeOnVehicle,
    //       vehicleColor: vehicleColor,
    //       poBoxAllowedToServe: poBoxAllowedToServe,
    //       requireServiceByMail: requireServiceByMail,
    //       requireByEmail: requireByEmail,
    //       requireSkipTracingService: requireSkipTracingService,
    //       requireBodyCamFootage: requireBodyCamFootage,
    //       requireServernotifyPersonOfInterest: requireServernotifyPersonOfInterest,
    //       dropServeForceServe: dropServeForceServe,
    //       instructionDropServiceForceService: instructionDropServiceForceService,
    //       requireRushService: requireRushService,
    //       specifyDatesForRushService: specifyDatesForRushService,
    //       requireSameDayServiceAttempt: requireSameDayServiceAttempt,
    //       requireStakeOutService: requireStakeOutService,
    //       subserveAfterThreeAttempts: subserveAfterThreeAttempts,
    //       specificHoursNeedAttempted: specificHoursNeedAttempted,
    //       specificCourtInstruction: specificCourtInstruction,
    //       refuseToAcceptDocuments: refuseToAcceptDocuments,
    //       fullNameofDescribedServee: fullNameofDescribedServee

    //     })
    //     .then(() => {
    //       setLoader(false);
    //       alert("Your questionaire has been submitted 👍");
    //     })
    //     .catch((error) => {
    //       alert(error.message);
    //       setLoader(false);
    //     });
  
    //   setCaseTitle("");
    //   setCaseNumber("");
    //   setCourtDate("");
    //   setSuperiorCourtOf("");
    //   setObtainNewDeliveryLocation("");
    //   setCountyOf("");
    //   setCourthouseAddress("");
    //   setCourthouseMailingAddress("");
    //   setBranchName("");
    //   setPlaintiffFullName("");
    //   setPlaintiffAddress("");
    //   setNumberOfAttorneyPlaintiff("");
    //   setAttorneyRepresentingPlaintiffInfo("");
    //   setDefendantFullName("");
    //   setDefendantAddress("");
    //   setNumberOfAttorneyDefendant("");
    //   setAttorneyRepresentingDefendantInfo("");
    //   setNameOfIndividuals("");
    //   setDobOfIndividuals("");
    //   setPhoneNumberOfIndividuals("");
    //   setEmailOfIndividuals("");
    //   setServiceAddressOfIndividuals("");
    //   setServeIndividualAtEmployment("");
    //   setImageOfIndividuals("");
    //   setGenderOfIndividuals("");
    //   setEthnicityOfIndividuals("");
    //   setHeightOfIndividuals("");
    //   setWeightOfIndividuals("");
    //   setHairColorOfIndividuals("");
    //   setEyeColorOfIndividuals("");
    //   setPhysicalOutlineOfIndividuals("");
    //   setHowManyIndividualsBeingServed("");
    //   setEmploymentOfIndividuals("");
    //   setVehicleTypeModelOwnership("");
    //   setAppealsCourtOf("");
    //   setSupremeCourtOf("");
    //   setHowManyindividualsServed("");
    //   setLastKnownResidence("");
    //   setServerContactServeeByPhone("");
    //   setServeeKnowTheyAreBeingServed("");
    //   setParalegalAttorneyClientContracted("");
    //   setLeaveContactInfoDoorTag("");
    //   setCoResidentsOfServee("");
    //   setWhichIsBeingServed("");
    //   setAgentOfService("");
    //   setIfYesListFullName("");
    //   setAddressForCurrentPlaceOfEmployment("");
    //   setInsuranceCompanyOfServee("");
    //   setLiscencePlateNumberState("");
    //   setVinNumberOfIndividuals("");
    //   setYearOfMakeOnVehicle("");
    //   setVehicleColor("");
    //   setPOBoxAllowedToServe("");
    //   setRequireServiceByMail("");
    //   setRequireByEmail("");
    //   setRequireSkipTracingService("");
    //   setRequireBodyCamFootage("");
    //   setRequireServerNotifyPersonOfInterest("");
    //   setDropServeForceServe("");
    //   setInstructionDropServiceForceService("");
    //   setRequireRushService("");
    //   setSpecifyDatesForRushService("");
    //   setRequireSameDayServiceAttempt("");
    //   setRequireStakeoutService("");
    //   setSubserveAfterThreeAttempts("");
    //   setSpecificHoursNeedAttempted("");
    //   setSpecificCourtInstruction("");
    //   setRefuseToAccpetDocuments("");
    //   setFullNameOfDescribedServee("");

    // };
    return(
        <React.Fragment>
        <h2 className="text-center mb-4 mt-5">New Case Questionaire</h2>
        <h3>​**Service should be completed 2 + weeks prior to the court date**
            Thus avoiding any complications with the judge.
            Please fill out as much information as possible from the court documents being submitted, certain sections marked with "*" are REQUIRED to proceed</h3>
            <form className="mb-4">
            <MDBRow className="text-left" md="12">
            <MDBCol md="12" id="case-title">
                <div id="case-title">
                <label>Case Title*</label>
                <MDBInput
                type="text"
                // value={caseTitle}
                // onChange={(e) => setCaseTitle(e.target.value)}
                required 
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="case-number">
                <div id="case-number">
                <label>Case Number*</label>
                <MDBInput 
                type="text"
                // value={caseNumber}
                // onChange={(e) => setCaseNumber(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="court-date">
                <div id="court-date">
                <label>Court Date (Write N/A if not issued)*</label>
                <MDBInput 
                type="text"
                // value={courtDate}
                // onChange={(e) => setCourtDate(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="superior-court-of">
                <div id="superior-court-of">
                <label>Superior Court of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text"
                // value={superiorCourtOf}
                // onChange={(e) => setSuperiorCourtOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="county-of">
                <div id="county-of">
                <label>County Of*</label>
                <MDBInput
                type="text"
                // value={countyOf}
                // onChange={(e) => setCountyOf(e.target.value)} 
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="branch-name">
                <div id="branch-name">
                <label>Branch Name*</label>
                <MDBInput
                type="text" 
                // value={branchName}
                // onChange={(e) => setBranchName(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-address">
                <div id="courthouse-address">
                <label>Courthouse Address*</label>
                <MDBInput 
                type="text" 
                // value={courthouseAddress}
                // onChange={(e) => setCourthouseAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="courthouse-mailing-address">
                <div id="courthouse-mailing-address">
                <label>Courthouse Mailing Address*</label>
                <MDBInput 
                type="text" 
                // value={courthouseMailingAddress}
                // onChange={(e) => setCourthouseMailingAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="appeals-court-of">
                <div id="appeals-court-of">
                <label>Appeals Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                // value={appealsCourtOf}
                // onChange={(e) => setAppealsCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="supreme-court-of">
                <div id="supreme-court-of">
                <label>Supreme Court Of (Write N/A if not Applicable)*</label>
                <MDBInput 
                type="text" 
                // value={supremeCourtOf}
                // onChange={(e) => setSupremeCourtOf(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBBtn>
                {/*<Link to="/skip-main-questions">Log In</Link>*/}
            </MDBBtn>
            <br></br>
            <p><i>**to skip filling this section out, leave it for our team to complete! (Additional Charge)**</i></p>

            <h2 className="text-center mb-4 mt-2">Plaintiff Information</h2>
            <MDBCol md="12" id="plaintiff-full-name">
                <div id="plaintiff-full-name">
                <label>Plaintiff's Full Name*</label>
                <MDBInput 
                type="text" 
                // value={plaintiffFullName}
                // onChange={(e) => setPlaintiffFullName(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="plaintiff-address">
                <div id="plaintiff-address">
                <label>Plaintiff's Address*</label>
                <MDBInput 
                type="text" 
                // value={plaintiffAddress}
                // onChange={(e) => setPlaintiffAddress(e.target.value)}
                required
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="number-of-attorney-representing-plaintiff">
                <div id="number-of-attorney-representing-plaintiff">
                <label>Number of Attorney's Representing the Plaintiff?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={numberOfAttorneyPlaintiff}
                // onChange={(e) => setNumberOfAttorneyPlaintiff(e.target.value)}
                required
                >
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
            <MDBCol md="12" id="attorney-representing-plaintiff-info">
                <div id="attorney-representing-plaintiff-info">
                <label><b>Attorney Representing Plaintiff Information.
                    </b> Enter Attorney's Full Name, Office 
                    <i>(Address, City, Zip Code)</i>, Phone Number 
                    <i>(Please write Cell or Office next to number)</i>, E-Mail, Bar Number, and/or Fax Number 
                    <i>(Optional)</i> [Section off if more than one councel]*</label>
                <MDBInput 
                    type="textarea"
                    // value={attorneyRepresentingPlaintiffInfo}
                    // onChange={(e) => setAttorneyRepresentingPlaintiffInfo(e.target.value)}
                    outline
                    required />
                </div>
            </MDBCol>
            <h2 className="text-center mb-4 mt-2">Defendant Information</h2>
            <MDBCol md="12" id="defendant-full-name">
                <div id="defendant-full-name">
                <label>Defendant's Full Name*</label>
                <MDBInput 
                type="text" 
                // value={defendantFullName}
                // onChange={(e) => setDefendantFullName(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="defendant-address">
                <div id="defendant-address">
                <label>Defendant's Address</label>
                <MDBInput 
                type="text" 
                // value={defendantAddress}
                // onChange={(e) => setDefendantAddress(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="number-of-attorney-representing-defendant">
                <div id="number-of-attorney-representing-defendant">
                <label>Number of Attorney's Representing the Defendant?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                // value={numberOfAttorneyDefendant}
                // onChange={(e) => setNumberOfAttorneyDefendant(e.target.value)}
                required
                >
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
            <MDBCol md="12" id="attorney-representing-defendant-info">
                <div id="attorney-representing-defendant-info">
                <label><b>Attorney Representing Defendant Information.</b> Enter Attorney's Full Name, Office 
                <i>(Address, City, Zip Code)</i>, Phone Number 
                <i>(Please write Cell or Office next to number)</i>, E-Mail, Bar Number, and/or Fax Number 
                <i>(Optional)</i> [Section off if more than one councel]*</label>
                <MDBInput 
                type="textarea" 
                // value={attorneyRepresentingDefendantInfo}
                // onChange={(e) => setAttorneyRepresentingDefendantInfo(e.target.value)}
                required
                />
                </div>
            </MDBCol>


            <h2 className="text-center mb-4 mt-2">Servee Documented Data</h2>
            <MDBCol md="12" id="how-many-individuals-served">
                <div id="how-many-individuals-served">
                <label>How Many Individuals are Being Served?*</label><br></br>
                <select className="w-75 m-4 text-center p-2"
                // value={howManyIndividualsServed}
                // onChange={(e) => setHowManyindividualsServed(e.target.value)}
                required
                >
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
                // value={nameOfIndividuals}
                // onChange={(e) => setNameOfIndividuals(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="dob-of-individuals">
                <div id="dob-of-individuals">
                <label>Date of Birth of Individual(s)*</label>
                <MDBInput
                type="text" 
                // value={dobOfIndividuals}
                // onChange={(e) => setDobOfIndividuals(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="last-known-residence">
                <div id="last-known-residence">
                <label>Last Known Residence?</label>
                <MDBInput
                type="text" 
                // value={lastKnownResidence}
                // onChange={(e) => setLastKnownResidence(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="phone-numbers-of-individuals">
                <div id="phone-numbers-of-individuals">
                <label>Phone Number(s) Pertaining to Servee(s) - Identify via Mobile, Office, and/or Home</label>
                <MDBInput 
                type="textarea" 
                // value={phoneNumbersOfIndividuals}
                // onChange={(e) => setPhoneNumberOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="email-of-individuals">
                <div id="email-of-individuals">
                <label>E-Mail(s) pertaining Servee(s)</label>
                <MDBInput 
                type="textarea" 
                // value={emailsOfindividuals}
                // onChange={(e) => setEmailOfIndividuals(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="server-contact-servee-by-phone">
                <div id="server-contact-servee-by-phone">
                <label>May our Process Server Contact the Servee by Phone or Other Means?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={serverContactServeeByPhone}
                // onChange={(e) => setServerContactServeeByPhone(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="servee-know-they-are-being-served">
                <div id="servee-know-they-are-being-served">
                <label>Does the Servee Know They're Being Served?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={serveeKnowTheyAreBeingServed}
                // onChange={(e) => setServeeKnowTheyAreBeingServed(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="paralegal-attorney-client-contracted">
                <div id="paralegal-attorney-client-contracted">
                <label>Have you, a Paralegal/Attorney, or your Client Contracted the Individual Regarding Service or this Case?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={paralegalAttorneyClientContracted}
                // onChange={(e) => setParalegalAttorneyClientContracted(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="leave-contact-info-door-tag">
                <div id="leave-contact-info-door-tag">
                <label>May our Process Server Leave Contact Information Such as a Door Tag on the Handle, or Business Card when Encountering as Individual?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={leaveContactInfoDoorTag}
                // onChange={(e) => setLeaveContactInfoDoorTag(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="known-coresidents-of-servee">
                <div id="known-coresidents-of-servee">
                <label>Any Known Co-Resident(s) of the Servee and Their Relationship to the Individual?</label>
                <MDBInput 
                type="textarea" 
                // value={knownCoResidentsOfServee}
                // onChange={(e) => setCoResidentsOfServee(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="which-is-being-served">
                <div id="which-is-being-served">
                <label>Which is Being Served?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={whichIsBeingServed}
                // onChange={(e) => setWhichIsBeingServed(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Unknown" >Unknown</option>
                <option value="Individual">Individual</option>
                <option value="Business">Business</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="agent-of-service">
                <div id="agent-of-service">
                <label>Is There an Agent of Service?*</label>
                <select className="w-75 m-4 center p-2"
                // value={agentOfService}
                // onChange={(e) => setAgentOfService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
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
                // value={ifYesListFullName}
                // onChange={(e) => setIfYesListFullName(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="employment-of-individuals">
                <div id="employment-of-individuals">
                <label>Is the Servee Currently Employed?*</label>
                <select className="w-75 m-4 center p-2"
                // value={employmentOfIndividuals}
                // onChange={(e) => setEmploymentOfIndividuals(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
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
                // value={addressForCurrentPlaceOfEmployment}
                // onChange={(e) => setAddressForCurrentPlaceOfEmployment(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="serve-individual-at-employment">
                <div id="serve-individual-at-employment">
                <label>May we serve the Servee at a place of employment?*</label>
                <select className="w-75 m-4 text-center p-2"
                // value={serveIndividualAtEmployment}
                // onChange={(e) => setServeIndividualAtEmployment(e.target.value)}
                required
                >
                <label caret color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="insurance-company-of-servee">
                <div id="insurance-company-of-servee">
                <label>Insurance Company of Servee</label>
                <MDBInput
                type="text" 
                // value={insuranceCompanyOfServee}
                // onChange={(e) => setInsuranceCompanyOfServee(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-type-model-ownership">
                <div id="vehicle-type-model-ownership">
                <label>Vehicle Type/Model Ownership <i>(ie car, motorcycle, boat, RV)</i></label>
                <MDBInput 
                type="textarea" 
                // value={vehicleTypeModelOwnership}
                // onChange={(e) => setVehicleTypeModelOwnership(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="liscence-plate-number-state">
                <div id="liscence-plate-number-state">
                <label>Liscense Plate Number/State of Individual(s)</label>
                <MDBInput
                type="text" 
                // value={liscencePlateNumberState}
                // onChange={(e) => setLiscencePlateNumberState(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vin-number-of-individuals">
                <div id="vin-number-of-individuals">
                <label>Vehicle Vin Number of Individual(s)</label>
                <MDBInput 
                type="text" 
                // value={vinNumberOfindividuals}
                // onChange={(e) => setVinNumberOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-year-of-individuals">
                <div id="vehicle-year-of-individuals">
                <label>Year of Make on Vehicle</label>
                <MDBInput
                type="text" 
                // value={yearOfMakeOnVehicle}
                // onChange={(e) => setYearOfMakeOnVehicle(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="vehicle-color-of-individuals">
                <div id="vehicle-color-of-individuals">
                <label>Vehicle Color</label>
                <MDBInput 
                type="text"
                // value={vehicleColor} 
                // onChange={(e) => setVehicleColor(e.target.value)}
                />
                </div>
            </MDBCol>
            <h2 className="text-center mb-4 mt-2">Servee Physical Description</h2>
            <MDBCol md="12" id="gender-of-individuals">
                <div id="gender-of-individuals">
                <label>Gender of Individual(s)</label>
                <select className="w-75 m-4 center p-2"
                // value={genderOfindividuals}
                // onChange={(e) => setGenderOfIndividuals(e.target.value)}
                >
                    <option value="Non-Binary">Non-Binary</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                </select>
                </div>
            </MDBCol>
            <MDBCol md="12" id="ethnicity-of-individuals">
                <div id="ethnicity-of-individuals">
                <label>Ethnicity of Individual(s)</label>
                <MDBInput
                type="textarea" 
                // value={ethnicityOfindividuals}
                // onChange={(e) => setEthnicityOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="height-of-individuals">
                <div id="height-of-individuals">
                <label>Height of Individual(s) Being Served?</label>
                <MDBInput
                type="textarea" 
                // value={heightOfIndividuals}
                // onChange={(e) => setHeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="weight-of-individuals">
                <div id="weight-of-individuals">
                <label>Weight of Individual(s) Being Served?</label>
                <MDBInput 
                type="textarea" 
                // value={weightOfIndividuals}
                // onChange={(e) => setWeightOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="hair-color-of-individuals">
                <div id="hair-color-of-individuals">
                <label>Hair Color of Individual(s) Being Served?</label>
                <MDBInput 
                type="textarea" 
                // value={hairColorOfIndividuals}
                // onChange={(e) => setHairColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="eye-color-of-individuals">
                <div id="eye-color-of-individuals">
                <label>Eye Color of Individual(s) Being Served?</label>
                <MDBInput 
                type="textarea" 
                // value={eyeColorOfindividuals}
                // onChange={(e) => setEyeColorOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="physical-outlines-for-individuals">
                <div id="physical-outlines-for-individuals">
                <label>Any Physical Outlines noted for Individual(s) being Served? 
                <i>(ie scars, tattoos, birthmarks, facial hair, glasses, blemish, birth mark)</i></label>
                <MDBInput
                type="textarea" 
                // value={physicalOutlineOfIndividuals}
                // onChange={(e) => setPhysicalOutlineOfIndividuals(e.target.value)}
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="full-name-of-described-servee">
                <div id="full-name-of-described-servee">
                <label>Full Name of Described Servee*</label>
                <MDBInput
                type="text" 
                // value={fullNameofDescribedServee}
                // onChange={(e) => setFullNameOfDescribedServee(e.target.value)}
                required 
                />
                </div>
            </MDBCol>
            <MDBCol md="12 mb-4" id="image-of-individuals">
            <div id="image-of-individuals">
                <label>Individual(s) Image</label>
                <input type='file' accept=".jpg,.png" label='Upload' multiple 
                // value={imageOfIndividuals}
                // onChange={(e) => setImageOfIndividuals(e.target.value)}
                />
              </div>
            </MDBCol>
            <h2 className="text-center mb-4 mt-2">Offered Services</h2>
            <MDBCol md="12" id="list-main-service-address-of-individuals">
                <div id="list-main-service-address-of-individuals">
                <label>List MAIN Address for Service Attempts and Location Type 
                <i>(ie residence/employment)</i>*</label>
                <MDBInput 
                type="textarea" 
                // value={serviceAddressOfIndividuals}
                // onChange={(e) => setServiceAddressOfIndividuals(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="obtain-new-delivery-location">
                <div id="obtain-new-delivery-location">
                <label>If the Process Server Obtains a New Delivery Location from the Servee, 
                    Should they Proceed the Service Without Authorization? <i>(Pre-Paid Plan)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={obtainNewDeliveryLocation}
                // onChange={(e) => setObtainNewDeliveryLocation(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="p-o-box-allowed-to-serve">
                <div id="p-o-box-allowed-to-serve">
                <label>Is a P.O. Box Allowed to be Served Belonging to the Person of Interest? <i>(USPS Excluded)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={poBoxAllowedToServe}
                // onChange={(e) => setPOBoxAllowedToServe(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-mail">
                <div id="require-service-by-mail">
                <label>Do You Require a Service by Secured Postal Mail with Signature, After Personal Service is Attempted? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireServiceByMail}
                // onChange={(e) => setRequireServiceByMail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-service-by-email">
                <div id="require-service-by-email">
                <label>Do You Require a Service by E-Mail After Personal Service is Attempted? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireByEmail}
                // onChange={(e) => setRequireByEmail(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-skip-tracing-service">
                <div id="require-skip-tracing-service">
                <label>Do You Require a “Skip Tracing” Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireSkipTracingService}
                // onChange={(e) => setRequireSkipTracingService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-body-cam-footage">
                <div id="require-body-cam-footage">
                <label>Do You Require Body Cam Footage of Service to Present as Evidence? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireBodyCamFootage}
                // onChange={(e) => setRequireBodyCamFootage(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-server-notify-person-of-interest">
                <div id="require-server-notify-person-of-interest">
                <label>Is the judge Requiring the Server to Notify the Person of Interest, Service May be Rejected? Thus Limiting Operations to the Server <i>(International Court Rules)</i>*</label>
                    <select className="w-75 m-4 center p-2"
                    // value={requireServernotifyPersonOfInterest}
                    // onChange={(e) => setRequireServerNotifyPersonOfInterest(e.target.value)}
                    required
                    >
                <label  color="white">
                   Please Select
                </label>
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
                    // value={dropServeForceServe}
                    // onChange={(e) => setDropServeForceServe(e.target.value)}
                    required
                    >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="instruction-drop-service-force-service">
                <div id="instruction-drop-service-force-service">
                <label>Any Specific Instructions You Would Like to Provide Regarding “Drop Service / Force Service”?*</label>
                <MDBInput 
                type="textarea" 
                // value={instructionDropServiceForceService}
                // onChange={(e) => setInstructionDropServiceForceService(e.target.value)}
                required
                />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-rush-service">
                <div id="require-rush-service">
                <label>Do You Require a Rush Service?* <i>(Additional Fee)</i></label>
                <select className="w-75 m-4 center p-2"
                // value={requireRushService}
                // onChange={(e) => setRequireRushService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specify-dates-for-rush-service">
                <div id="specify-dates-for-rush-service">
                <label><i>(Specify Dates/Hours for Rush Service)</i></label>
                <MDBInput 
                type="textarea"
                // value={specifyDatesForRushService} 
                // onChange={(e) => setSpecifyDatesForRushService(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-same-day-service-attempt">
                <div id="require-same-day-service-attempt">
                <label>Do You Require a Same Day Service Attempt? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireSameDayServiceAttempt}
                // onChange={(e) => setRequireSameDayServiceAttempt(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="require-stake-out-service">
                <div id="require-stake-out-service">
                <label>Do You Require a Stake Out Service? <i>(Additional Fee)</i>*</label>
                <select className="w-75 m-4 center p-2"
                // value={requireStakeOutService}
                // onChange={(e) => setRequireStakeoutService(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specify-dates-for-stake-out-service">
                <div id="specify-dates-for-stake-out-service">
                <label><i>(Please Specify Dates/Hours for Stake Out Service)</i></label>
                <MDBInput 
                type="textarea" 
                // value={specifyDatesForStakeOutService}
                // onChange={(e) => setSpecifyDatesForStakeOutService (e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="subserve-after-three-attempts">
                <div id="subserve-after-three-attempts">
                <label>Is a “Subserve” to a Co-Resident/Co-Worker After 3 Attempts <i>(2 Attempts in California)</i> Allowed?*</label>
                <select className="w-75 m-4 center p-2"
                // value={subserveAfterThreeAttempts}
                // onChange={(e) => setSubserveAfterThreeAttempts(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="refuse-to-accept-documents">
                <div id="refuse-to-accept-documents">
                <label>Is a “Drop Serve/Force Serve” Allowed Once Residence/Employment is Confirmed and an Individual Refuses to Accept Documents Upon Contact/Subservice?*</label>
                <select className="w-75 m-4 center p-2"
                // value={refuseToAcceptDocuments}
                // onChange={(e) => setRefuseToAccpetDocuments(e.target.value)}
                required
                >
                <label  color="white">
                   Please Select
                </label>
                <option value="Yes" >Yes</option>
                <option value="No">No</option>
                </select><br></br>
                </div>
            </MDBCol>
            <MDBCol md="12" id="specific-hours-need-attempted">
                <div id="specific-hours-need-attempted">
                <label>Any specific Hours You Need Attempted? 
                    <i>(We Generally Operate 8 AM - 10 PM)</i></label>
                <MDBInput
                type="text" 
                // value={specificHoursNeedAttempted}
                // onChange={(e) => setSpecificHoursNeedAttempted(e.target.value)}
                     />
                </div>
            </MDBCol>
            <MDBCol md="12" id="specific-court-instruction">
                <div id="specific-court-instruction">
                <label>Any Specific Court Instructions/Requirements You Would Like to Provide for the Serve?</label>
                <MDBInput
                type="textarea" 
                // value={specificCourtInstruction}
                // onChange={(e) => setSpecificCourtInstruction(e.target.value)}
                     />
                </div>
            </MDBCol>
            </MDBRow>
            {/* <MDBBtn color="primary w-100 mt-2 mb-4" type="submit" onClick={handleSubmit} style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}>Submit Questionaire</MDBBtn> */}
            </form>
        </React.Fragment>
      )
}

export default Questionaire;