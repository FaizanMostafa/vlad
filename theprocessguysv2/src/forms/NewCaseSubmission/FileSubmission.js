import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MDBCol } from 'mdbreact';
import {
  submitCase
} from "../../redux/actions/form";

const SingleSubmission = ({...props}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const isPosting = useSelector(state => state.form.isPosting);
  const [fileUpload, setFileUpload] = useState("");
  const [fileSubmissionType, setFileSubmissionType] = useState("single");

  const handleCaseSubmit = () => {
    if(!isPosting) {
      let data = {};
      const QuestionaireForm1 = JSON.parse(localStorage.getItem("Questionaire1"));
      const QuestionaireForm2 = JSON.parse(localStorage.getItem("Questionaire2"));
      const QuestionaireForm3 = JSON.parse(localStorage.getItem("Questionaire3"));
      const QuestionaireForm4 = JSON.parse(localStorage.getItem("Questionaire4"));
      const QuestionaireForm5 = JSON.parse(localStorage.getItem("Questionaire5"));
      const QuestionaireForm6 = JSON.parse(localStorage.getItem("Questionaire6"));
      const QuestionaireForm7 = JSON.parse(localStorage.getItem("Questionaire7"));
      const QuestionaireForm8 = JSON.parse(localStorage.getItem("Questionaire8"));
      if(QuestionaireForm1) {
        data["CaseInformation-1"] = {
          caseTitle: QuestionaireForm1.caseTitle,
          caseNumber: QuestionaireForm1.caseNumber,
          courtDate: QuestionaireForm1.courtDate,
          superiorCourtOf: QuestionaireForm1.superiorCourtOf,
          countyOf: QuestionaireForm1.countyOf,
          courthouseAddress: QuestionaireForm1.courthouseAddress,
          courthouseMailingAddress: QuestionaireForm1.courthouseMailingAddress,
          branchName: QuestionaireForm1.branchName,
          appealsCourtOf: QuestionaireForm1.appealsCourtOf,
          supremeCourtOf: QuestionaireForm1.supremeCourtOf
        };
      }
      if(QuestionaireForm2) {
        data["PlaintiffInformation-2"] = {
          plaintiffFullName: QuestionaireForm2.plaintiffFullName,
          plaintiffAddress: QuestionaireForm2.plaintiffAddress,
          numberOfAttorneyPlaintiff: QuestionaireForm2.numberOfAttorneyPlaintiff,
          attorneyRepresentingPlaintiffInfo: QuestionaireForm2.attorneyRepresentingPlaintiffInfo,
          plaintiffAttorneyName: QuestionaireForm2.plaintiffAttorneyName,
          plaintiffAttorneyBarNumber: QuestionaireForm2.plaintiffAttorneyBarNumber,
          plaintiffAttorneyOfficeAddress: QuestionaireForm2.plaintiffAttorneyOfficeAddress,
          plaintiffAttorneyPhoneNumberForCalls: QuestionaireForm2.plaintiffAttorneyPhoneNumberForCalls,
          plaintiffAttorneyEmail: QuestionaireForm2.plaintiffAttorneyEmail,
          plaintiffAttorneyFaxNumberOptional: QuestionaireForm2.plaintiffAttorneyFaxNumberOptional
        };
      }
      if(QuestionaireForm3) {
        data["DefendantInformation-3"] = {
          defendantFullName: QuestionaireForm3.defendantFullName,
          defendantAddress: QuestionaireForm3.defendantAddress,
          numberOfAttorneyDefendant: QuestionaireForm3.numberOfAttorneyDefendant,
          attorneyRepresentingDefendantInfo: QuestionaireForm3.attorneyRepresentingDefendantInfo,
          defendantAttorneyName: QuestionaireForm3.defendantAttorneyName,
          defendantAttorneyBarNumber: QuestionaireForm3.defendantAttorneyBarNumber,
          defendantAttorneyOfficeAddress: QuestionaireForm3.defendantAttorneyOfficeAddress,
          defendantAttorneyPhoneNumberForCalls: QuestionaireForm3.defendantAttorneyPhoneNumberForCalls,
          defendantAttorneyEmail: QuestionaireForm3.defendantAttorneyEmail,
          defendantAttorneyFaxNumberOptional: QuestionaireForm3.defendantAttorneyFaxNumberOptional
        };
      }
      if(QuestionaireForm4) {
        data["ServeeDocumentedData-4"] = {
          howManyIndividualsServed: QuestionaireForm4.howManyIndividualsServed,
          employmentOfIndividuals: QuestionaireForm4.employmentOfIndividuals,
          nameOfIndividuals: QuestionaireForm4.nameOfIndividuals,
          dobOfIndividuals: QuestionaireForm4.dobOfIndividuals,
          locationForBeingServed: QuestionaireForm4.locationForBeingServed,
          mainAddressForService: QuestionaireForm4.mainAddressForService,
          agentOfService: QuestionaireForm4.agentOfService,
          ifYesListFullName: QuestionaireForm4.ifYesListFullName,
          phoneNumbersOfIndividuals: QuestionaireForm4.phoneNumbersOfIndividuals,
          emailsOfIndividuals: QuestionaireForm4.emailsOfIndividuals,
          addressForCurrentPlaceOfEmployment: QuestionaireForm4.addressForCurrentPlaceOfEmployment,
          knownCoResidentsOfServee: QuestionaireForm4.knownCoResidentsOfServee
        };
      }
      if(QuestionaireForm5) {
        data["ClearanceOfAction-5"] = {
          serveIndividualAtEmployment: QuestionaireForm5.serveIndividualAtEmployment,
          processServerLeaveDoorTag: QuestionaireForm5.processServerLeaveDoorTag,
          subserveAfterThreeAttempts: QuestionaireForm5.subserveAfterThreeAttempts,
          requireServerNotifyPersonOfInterest: QuestionaireForm5.requireServerNotifyPersonOfInterest,
          serverContactServeeByPhone: QuestionaireForm5.serverContactServeeByPhone,
          serverPostDocumentsWithRubberBand: QuestionaireForm5.serverPostDocumentsWithRubberBand,
          dropServeForceServe: QuestionaireForm5.dropServeForceServe,
          paralegalAttorneyClientContactServee: QuestionaireForm5.paralegalAttorneyClientContactServee
        };
      }
      if(QuestionaireForm6) {
        data["ServeePhysicalDescription-6"] = {
          fullNameOfDescribedServee: QuestionaireForm6.fullNameOfDescribedServee,
          imageOfIndividuals: QuestionaireForm6.imageOfIndividuals,
          genderOfIndividuals: QuestionaireForm6.genderOfIndividuals,
          ethnicityOfIndividuals: QuestionaireForm6.ethnicityOfIndividuals,
          heightOfIndividuals: QuestionaireForm6.heightOfIndividuals,
          weightOfIndividuals: QuestionaireForm6.weightOfIndividuals,
          hairColorOfIndividuals: QuestionaireForm6.hairColorOfIndividuals,
          eyeColorOfIndividuals: QuestionaireForm6.eyeColorOfIndividuals,
          physicalOutlineOfIndividuals: QuestionaireForm6.physicalOutlineOfIndividuals
        };
      }
      if(QuestionaireForm7) {
        data["VehicleInformation-7"] = {
          insuranceCompanyOfServee: QuestionaireForm7.insuranceCompanyOfServee,
          licensePlateNumberState: QuestionaireForm7.licensePlateNumberState,
          vinNumberOfIndividuals: QuestionaireForm7.vinNumberOfIndividuals,
          yearOfMakeOnVehicle: QuestionaireForm7.yearOfMakeOnVehicle,
          vehicleColor: QuestionaireForm7.vehicleColor,
          vehicleTypeModelOwnership: QuestionaireForm7.vehicleTypeModelOwnership
        };
      }
      if(QuestionaireForm8) {
        data["OfferedServices-8"] = {
          requireStakeOutService: QuestionaireForm8.requireStakeOutService,
          specifyDatesForStakeOutService: QuestionaireForm8.specifyDatesForStakeOutService,
          requireRushService: QuestionaireForm8.requireRushService,
          listDateWhenServiceAttemptsClosed: QuestionaireForm8.listDateWhenServiceAttemptsClosed,
          requireFirst24HourService: QuestionaireForm8.requireFirst24HourService,
          requireSkipTracingService: QuestionaireForm8.requireSkipTracingService,
          requireBodyCamFootage: QuestionaireForm8.requireBodyCamFootage,
          obtainNewDeliveryLocation: QuestionaireForm8.obtainNewDeliveryLocation,
          poBoxAllowedToServe: QuestionaireForm8.poBoxAllowedToServe,
          requireServiceByMail: QuestionaireForm8.requireServiceByMail,
          requireByEmail: QuestionaireForm8.requireByEmail,
          specificCourtInstruction: QuestionaireForm8.specificCourtInstruction,
          requireZipFileService: QuestionaireForm8.requireZipFileService,
          ifYesListAddress: QuestionaireForm8.ifYesListAddress
        };
      }
      data["documents"] = [fileUpload];
      dispatch(submitCase({uid: user.uid, ...data}, ()=>{
        localStorage.removeItem("Questionaire1");
        localStorage.removeItem("Questionaire2");
        localStorage.removeItem("Questionaire3");
        localStorage.removeItem("Questionaire4");
        localStorage.removeItem("Questionaire5");
        localStorage.removeItem("Questionaire6");
        localStorage.removeItem("Questionaire7");
        localStorage.removeItem("Questionaire8");
        history.push("/member-dashboard");
      }));
    }
  }

  return (

    <React.Fragment className="text-center mb-4 mt-5 homepage">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2><b>Case Files Submission Upload</b></h2>
      <div>
        <br></br>
        <MDBCol md="12">
          <Form.Group id="mS-file-upload-type">
            <label>File Type</label>
            <select className="w-75 m-4 text-center p-2"
              value={fileSubmissionType}
              onChange={(e) => setFileSubmissionType(e.target.value)}
              required
            >
              <option value="single" selected={fileSubmissionType==="single"}>Single File Submission</option>
              <option value="multiple" selected={fileSubmissionType==="multiple"}>Multiple File Submission</option>
            </select><br></br>
          </Form.Group>
          <Form.Group id="mS-file-upload">
            <label>File Image</label>
            <input
              type="file"
              onChange={(e) => { setFileUpload(e.target.files[0]) }}
              accept={fileSubmissionType === "single" ? ".pdf" : ".rar, .zip"}
            >
            </input>
          </Form.Group>
        </MDBCol>
        <br></br>
        <br></br>
        <Button onClick={handleCaseSubmit} className="w-75">
          {
            isPosting
              ?
                <div className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              :
                <span className="text-white">Submit Case</span>
          }
        </Button>
        <br></br>
        <br></br>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
}

export default SingleSubmission;