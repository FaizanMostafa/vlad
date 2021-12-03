import { Fragment, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MDBCol } from 'mdbreact';
import { objectsEqual, showToast } from "../../utils";
import {
  updateCase
} from "../../redux/actions/admin";
import CaseDetails from '../../pages/AdminDashboard/CaseDetails';

const FileSubmission = ({isFormDisabled, isFormUpdating, ...props}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const isPosting = useSelector(state => state.admin.isUpdatingCase);
  const caseId = useSelector(state => state.admin.caseDetails?.caseId);
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [fileData, setFileData] = useState({});
  const [fileSubmissionType, setFileSubmissionType] = useState("");

  useEffect(() => {
    if(props.fileData && props.numberOfCaseFilesBeingServed) {
      let caseFileData = {...props.fileData};
      for (let index = Object.keys(caseFileData).length; index < parseInt(props.numberOfCaseFilesBeingServed); index++) {
        caseFileData[index] = {file: null, isNew: true, caseType: "", description: "", fileContents: {coverSheet: false, civilCoverSheet: false, summons: false, complaint: false, contract: false, alternativeDisputeResolution: false, exhibit: false, dissolutionOfMarriage: false, temporaryRestrainingOrder: false, restrainingOrder: false, petition: false, statementOfLocation: false, declarationOfVenue: false, declarationOfReducedFilingFee: false}};
      }
      setFileData(caseFileData);
      setFileSubmissionType(props.fileData["0"].fileType);
    } else {
      const numberOfCaseFilesBeingServed = JSON.parse(localStorage.getItem("Questionaire4")).numberOfCaseFilesBeingServed;
      let caseFileData = {};
      for (let index = 0; index < parseInt(numberOfCaseFilesBeingServed); index++) {
        caseFileData[index] = {file: null, caseType: "", description: "", fileContents: {coverSheet: false, civilCoverSheet: false, summons: false, complaint: false, contract: false, alternativeDisputeResolution: false, exhibit: false, dissolutionOfMarriage: false, temporaryRestrainingOrder: false, restrainingOrder: false, petition: false, statementOfLocation: false, declarationOfVenue: false, declarationOfReducedFilingFee: false}};
      }
      setFileData(caseFileData);
    }
  }, []);

  const handleCaseUpdate = () => {
    if(Object.values(fileData).filter((o)=>!o.caseType.length).length) {
      showToast("Please enter the case type in every relevant input field!", "warning");
    } else if(Object.values(fileData).filter((o)=>!o.description.length && !Object.values(o.fileContents).includes(true)).length) {
      showToast("Please either select the file contents or type-in description for every relevant file!", "warning");
    } else if(Object.values(fileData).filter((o)=>o.file===null).length) {
      showToast("Please upload the files in every relevant input field!", "warning");
    } else if(!isPosting) {
      let data = {uid: user.uid, caseId};
      const QuestionaireForm1 = JSON.parse(localStorage.getItem("Questionaire1"));
      const QuestionaireForm2 = JSON.parse(localStorage.getItem("Questionaire2"));
      const QuestionaireForm3 = JSON.parse(localStorage.getItem("Questionaire3"));
      const QuestionaireForm4 = JSON.parse(localStorage.getItem("Questionaire4"));
      const QuestionaireForm5 = JSON.parse(localStorage.getItem("Questionaire5"));
      const QuestionaireForm6 = JSON.parse(localStorage.getItem("Questionaire6"));
      const QuestionaireForm7 = JSON.parse(localStorage.getItem("Questionaire7"));
      const QuestionaireForm8 = JSON.parse(localStorage.getItem("Questionaire8"));
      if(QuestionaireForm1 && Object.values(QuestionaireForm1).length) {
        data["CaseInformation-1"] = {docId: QuestionaireForm1.docId};
        if(QuestionaireForm1.hasOwnProperty("caseTitle")) data["CaseInformation-1"].caseTitle=QuestionaireForm1.caseTitle;
        if(QuestionaireForm1.hasOwnProperty("caseNumber")) data["CaseInformation-1"].caseNumber=QuestionaireForm1.caseNumber;
        if(QuestionaireForm1.hasOwnProperty("courtDate")) data["CaseInformation-1"].courtDate=QuestionaireForm1.courtDate;
        if(QuestionaireForm1.hasOwnProperty("courtType")) data["CaseInformation-1"].courtType=QuestionaireForm1.courtType;
        if(QuestionaireForm1.hasOwnProperty("courtState")) data["CaseInformation-1"].courtState=QuestionaireForm1.courtState;
        if(QuestionaireForm1.hasOwnProperty("countyOf")) data["CaseInformation-1"].countyOf=QuestionaireForm1.countyOf;
        if(QuestionaireForm1.hasOwnProperty("courthouseAddress")) data["CaseInformation-1"].courthouseAddress=QuestionaireForm1.courthouseAddress;
        if(QuestionaireForm1.hasOwnProperty("courthouseMailingAddress")) data["CaseInformation-1"].courthouseMailingAddress=QuestionaireForm1.courthouseMailingAddress;
        if(QuestionaireForm1.hasOwnProperty("branchName")) data["CaseInformation-1"].branchName=QuestionaireForm1.branchName;
      }
      if(QuestionaireForm2 && Object.values(QuestionaireForm2).length) {
        data["PlaintiffInformation-2"] = {docId: QuestionaireForm2.docId};
        if(QuestionaireForm2.hasOwnProperty("plaintiffsDetail")) data["PlaintiffInformation-2"].plaintiffsDetail=QuestionaireForm2.plaintiffsDetail;
        if(QuestionaireForm2.hasOwnProperty("numberOfAttorneyPlaintiff")) data["PlaintiffInformation-2"].numberOfAttorneyPlaintiff=QuestionaireForm2.numberOfAttorneyPlaintiff;
        if(QuestionaireForm2.hasOwnProperty("isOrRepresentingPlaintiff")) data["PlaintiffInformation-2"].isOrRepresentingPlaintiff=QuestionaireForm2.isOrRepresentingPlaintiff;
        if(QuestionaireForm2.hasOwnProperty("shouldPGFillPlaintiffInfo")) data["PlaintiffInformation-2"].shouldPGFillPlaintiffInfo=QuestionaireForm2.shouldPGFillPlaintiffInfo;
        if(QuestionaireForm2.hasOwnProperty("numberOfAttorneysRepresentingPlaintiff")) data["PlaintiffInformation-2"].numberOfAttorneysRepresentingPlaintiff=QuestionaireForm2.numberOfAttorneysRepresentingPlaintiff;
        if(QuestionaireForm2.hasOwnProperty("plaintiffAttorneysDetail")) data["PlaintiffInformation-2"].plaintiffAttorneysDetail=QuestionaireForm2.plaintiffAttorneysDetail;
      }
      if(QuestionaireForm3 && Object.values(QuestionaireForm3).length) {
        data["DefendantInformation-3"] = {docId: QuestionaireForm3.docId};
        if(QuestionaireForm3.hasOwnProperty("defendantsDetail")) data["DefendantInformation-3"].defendantsDetail=QuestionaireForm3.defendantsDetail;
        if(QuestionaireForm3.hasOwnProperty("numberOfAttorneyDefendant")) data["DefendantInformation-3"].numberOfAttorneyDefendant=QuestionaireForm3.numberOfAttorneyDefendant;
        if(QuestionaireForm3.hasOwnProperty("isOrRepresentingDefendant")) data["DefendantInformation-3"].isOrRepresentingDefendant=QuestionaireForm3.isOrRepresentingDefendant;
        if(QuestionaireForm3.hasOwnProperty("shouldPGFillDefendantInfo")) data["DefendantInformation-3"].shouldPGFillDefendantInfo=QuestionaireForm3.shouldPGFillDefendantInfo;
        if(QuestionaireForm3.hasOwnProperty("numberOfAttorneysRepresentingDefendant")) data["DefendantInformation-3"].numberOfAttorneysRepresentingDefendant=QuestionaireForm3.numberOfAttorneysRepresentingDefendant;
        if(QuestionaireForm3.hasOwnProperty("defendantAttorneysDetail")) data["DefendantInformation-3"].defendantAttorneysDetail=QuestionaireForm3.defendantAttorneysDetail;
      }
      if(QuestionaireForm4 && Object.values(QuestionaireForm4).length) {
        data["ServeeDocumentedData-4"] = {docId: QuestionaireForm4.docId};
        if(QuestionaireForm4.hasOwnProperty("numberOfCaseFilesBeingServed")) data["ServeeDocumentedData-4"].numberOfCaseFilesBeingServed=QuestionaireForm4.numberOfCaseFilesBeingServed;
        if(QuestionaireForm4.hasOwnProperty("howManyIndividualsServed")) data["ServeeDocumentedData-4"].howManyIndividualsServed=QuestionaireForm4.howManyIndividualsServed;
        if(QuestionaireForm4.hasOwnProperty("serveesDetail")) data["ServeeDocumentedData-4"].serveesDetail=QuestionaireForm4.serveesDetail;
        if(QuestionaireForm4.hasOwnProperty("locationForBeingServed")) data["ServeeDocumentedData-4"].locationForBeingServed=QuestionaireForm4.locationForBeingServed;
        if(QuestionaireForm4.hasOwnProperty("mainAddressesForService")) data["ServeeDocumentedData-4"].mainAddressesForService=QuestionaireForm4.mainAddressesForService;
        if(QuestionaireForm4.hasOwnProperty("agentOfService")) data["ServeeDocumentedData-4"].agentOfService=QuestionaireForm4.agentOfService;
        if(QuestionaireForm4.hasOwnProperty("agentsFullNames")) data["ServeeDocumentedData-4"].agentsFullNames=QuestionaireForm4.agentsFullNames;
      }
      if(QuestionaireForm5 && Object.values(QuestionaireForm5).length) {
        data["ClearanceOfAction-5"] = {docId: QuestionaireForm5.docId};
        if(QuestionaireForm5.hasOwnProperty("typeOfServe")) data["ClearanceOfAction-5"].typeOfServe=QuestionaireForm5.typeOfServe;
        if(QuestionaireForm5.hasOwnProperty("serveIndividualAtEmployment")) data["ClearanceOfAction-5"].serveIndividualAtEmployment=QuestionaireForm5.serveIndividualAtEmployment;
        if(QuestionaireForm5.hasOwnProperty("processServerLeaveDoorTag")) data["ClearanceOfAction-5"].processServerLeaveDoorTag=QuestionaireForm5.processServerLeaveDoorTag;
        if(QuestionaireForm5.hasOwnProperty("subserveAfterThreeAttempts")) data["ClearanceOfAction-5"].subserveAfterThreeAttempts=QuestionaireForm5.subserveAfterThreeAttempts;
        if(QuestionaireForm5.hasOwnProperty("requireServerNotifyPersonOfInterest")) data["ClearanceOfAction-5"].requireServerNotifyPersonOfInterest=QuestionaireForm5.requireServerNotifyPersonOfInterest;
        if(QuestionaireForm5.hasOwnProperty("serverContactServeeByPhone")) data["ClearanceOfAction-5"].serverContactServeeByPhone=QuestionaireForm5.serverContactServeeByPhone;
        if(QuestionaireForm5.hasOwnProperty("serverPostDocumentsWithRubberBand")) data["ClearanceOfAction-5"].serverPostDocumentsWithRubberBand=QuestionaireForm5.serverPostDocumentsWithRubberBand;
        if(QuestionaireForm5.hasOwnProperty("dropServeForceServe")) data["ClearanceOfAction-5"].dropServeForceServe=QuestionaireForm5.dropServeForceServe;
        if(QuestionaireForm5.hasOwnProperty("paralegalAttorneyClientContactServee")) data["ClearanceOfAction-5"].paralegalAttorneyClientContactServee=QuestionaireForm5.paralegalAttorneyClientContactServee;
      }
      if(QuestionaireForm6 && Object.values(QuestionaireForm6).length) {
        if(QuestionaireForm6.hasOwnProperty("serveesPhysicalDescription")) data["ServeePhysicalDescription-6"]={docId: QuestionaireForm6.docId, serveesPhysicalDescription: QuestionaireForm6.serveesPhysicalDescription};
      }
      if(QuestionaireForm7 && Object.values(QuestionaireForm7).length) {
        if(QuestionaireForm7.hasOwnProperty("vehiclesInformation")) data["VehicleInformation-7"]={docId: QuestionaireForm7.docId, vehiclesInformation: QuestionaireForm7.vehiclesInformation};
      }
      if(QuestionaireForm8 && Object.values(QuestionaireForm8).length) {
        data["OfferedServices-8"] = {docId: QuestionaireForm8.docId};
        if(QuestionaireForm8.hasOwnProperty("requireStakeOutService")) data["OfferedServices-8"].requireStakeOutService=QuestionaireForm8.requireStakeOutService;
        if(QuestionaireForm8.hasOwnProperty("specifyDatesForStakeOutService")) data["OfferedServices-8"].specifyDatesForStakeOutService=QuestionaireForm8.specifyDatesForStakeOutService;
        if(QuestionaireForm8.hasOwnProperty("requireRushService")) data["OfferedServices-8"].requireRushService=QuestionaireForm8.requireRushService;
        if(QuestionaireForm8.hasOwnProperty("listDateWhenServiceAttemptsClosed")) data["OfferedServices-8"].listDateWhenServiceAttemptsClosed=QuestionaireForm8.listDateWhenServiceAttemptsClosed;
        if(QuestionaireForm8.hasOwnProperty("requireFirst24HourService")) data["OfferedServices-8"].requireFirst24HourService=QuestionaireForm8.requireFirst24HourService;
        if(QuestionaireForm8.hasOwnProperty("requireSkipTracingService")) data["OfferedServices-8"].requireSkipTracingService=QuestionaireForm8.requireSkipTracingService;
        if(QuestionaireForm8.hasOwnProperty("requireBodyCamFootage")) data["OfferedServices-8"].requireBodyCamFootage=QuestionaireForm8.requireBodyCamFootage;
        if(QuestionaireForm8.hasOwnProperty("obtainNewDeliveryLocation")) data["OfferedServices-8"].obtainNewDeliveryLocation=QuestionaireForm8.obtainNewDeliveryLocation;
        if(QuestionaireForm8.hasOwnProperty("poBoxAllowedToServe")) data["OfferedServices-8"].poBoxAllowedToServe=QuestionaireForm8.poBoxAllowedToServe;
        if(QuestionaireForm8.hasOwnProperty("requireServiceByMail")) data["OfferedServices-8"].requireServiceByMail=QuestionaireForm8.requireServiceByMail;
        if(QuestionaireForm8.hasOwnProperty("requireByEmail")) data["OfferedServices-8"].requireByEmail=QuestionaireForm8.requireByEmail;
        if(QuestionaireForm8.hasOwnProperty("specificCourtInstruction")) data["OfferedServices-8"].specificCourtInstruction=QuestionaireForm8.specificCourtInstruction;
        if(QuestionaireForm8.hasOwnProperty("requireZipFileService")) data["OfferedServices-8"].requireZipFileService=QuestionaireForm8.requireZipFileService;
        if(QuestionaireForm8.hasOwnProperty("ifYesListAddress")) data["OfferedServices-8"].ifYesListAddress=QuestionaireForm8.ifYesListAddress;
      }
      if(Object.values(fileData).filter((fileObj)=>(fileObj.hasOwnProperty("file") || !objectsEqual(fileObj, props.fileData[0]))).length) {
        data["FileSubmission-9"] = {docId: props.docId};
        Object.values(fileData).forEach((fileObj)=>{
          if(fileObj.hasOwnProperty("file")) {
            if(!data["FileSubmission-9"].hasOwnProperty("oldDocumentPath")) data["FileSubmission-9"].oldDocumentPath = props.documentPath;
            if(data["FileSubmission-9"].hasOwnProperty("documents")) {
              data["FileSubmission-9"].documents.push(fileObj);
            } else {
              data["FileSubmission-9"].documents = [fileObj];
            }
          } else {
            data["FileSubmission-9"].documents = Object.values(fileData);
          }
        })
      }
      if(Object.keys(data).length) {
        dispatch(updateCase(data, ()=>{
          localStorage.removeItem("Questionaire1");
          localStorage.removeItem("Questionaire2");
          localStorage.removeItem("Questionaire3");
          localStorage.removeItem("Questionaire4");
          localStorage.removeItem("Questionaire5");
          localStorage.removeItem("Questionaire6");
          localStorage.removeItem("Questionaire7");
          localStorage.removeItem("Questionaire8");
        }));
      }
    }
  }

  const forceDownload = (blob, filename) => {
    var a = document.createElement('a');
    a.download = filename;
    a.href = blob;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  
  const downloadResource = (url, filename) => {
    showToast("Your download will begin shortly!", "success");
    if (!filename) filename = url.split('\\').pop().split('/').pop();
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        let blobUrl = window.URL.createObjectURL(blob);
        forceDownload(blobUrl, filename);
      })
      .catch(e => console.error(e));
  }

  const handleOnClickViewFile = (fileName) => {
    if(fileName===isFileVisible) {
      setIsFileVisible(false);
    } else {
      setIsFileVisible(fileName);
    }
  }

  return (
    (!isFormDisabled && fileSubmissionType === "")
      ?
        <>
          <center><h2><b>Upload Case File(s) Type</b></h2></center>
          <div>
            <br/><br/><br/><br/><br/>
            <MDBCol md="12">
              <center>
                <Button onClick={()=>setFileSubmissionType("single")} className="w-75">
                  <span className="text-white">Single Case File(s) Submission</span>
                </Button><br/><br/>
                <Button onClick={()=>setFileSubmissionType("multiple")} className="w-75">
                  <span className="text-white">Multiple Case File(s) Submission</span>
                </Button>
              </center>
            </MDBCol>
            <br/><br/><br/>
          </div>
        </>
      :
        <Fragment>
          <br/><br/>
          <center><h2><b>Case Files Submission Upload</b></h2></center>
          <div>
            <br/>
            <MDBCol md="12">
              {
                Object.entries(fileData).map(([key, value])=>(
                  <div>
                    <Form.Group id="mS-file-upload">
                      <Form.Label>Case Type</Form.Label>
                      <Form.Control
                        type="text"
                        value={value.caseType}
                        disabled={isFormDisabled}
                        placeholder="Restraining order, Eviction Notice, Divorce filing, Response to something, etc"
                        onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], caseType: e.target.value}})}}
                      />
                    </Form.Group>
                    <Form.Group id="mS-file-upload">
                      <Form.Label>File Contents</Form.Label>
                      <div style={{display: "flex", flexWrap: "wrap", paddingLeft: 30}}>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Cover Sheet"
                            id={`coverSheet${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.coverSheet}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, coverSheet: !fileData[key].fileContents.coverSheet}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Civil Cover Sheet"
                            id={`civilCoverSheet${key}`}
                            checked={value.fileContents.civilCoverSheet}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, civilCoverSheet: !fileData[key].fileContents.civilCoverSheet}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Summons"
                            id={`summons${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.summons}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, summons: !fileData[key].fileContents.summons}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Complaint"
                            id={`complaint${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.complaint}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, complaint: !fileData[key].fileContents.complaint}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Contract"
                            id={`contract${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.contract}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, contract: !fileData[key].fileContents.contract}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Alternative Dispute Resolution"
                            id={`alternativeDisputeResolution${key}`}
                            checked={value.fileContents.alternativeDisputeResolution}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, alternativeDisputeResolution: !fileData[key].fileContents.alternativeDisputeResolution}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Exhibit"
                            id={`exhibit${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.exhibit}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, exhibit: !fileData[key].fileContents.exhibit}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Dissolution Of Marriage"
                            id={`dissolutionOfMarriage${key}`}
                            checked={value.fileContents.dissolutionOfMarriage}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, dissolutionOfMarriage: !fileData[key].fileContents.dissolutionOfMarriage}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Temporary Restraining Order"
                            id={`temporaryRestrainingOrder${key}`}
                            checked={value.fileContents.temporaryRestrainingOrder}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, temporaryRestrainingOrder: !fileData[key].fileContents.temporaryRestrainingOrder}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Restraining Order"
                            disabled={isFormDisabled}
                            id={`restrainingOrder${key}`}
                            checked={value.fileContents.restrainingOrder}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, restrainingOrder: !fileData[key].fileContents.restrainingOrder}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            label="Petition"
                            id={`petition${key}`}
                            disabled={isFormDisabled}
                            checked={value.fileContents.petition}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, petition: !fileData[key].fileContents.petition}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            id={`statementOfLocation${key}`}
                            label="Statement Of Locations/Venue"
                            checked={value.fileContents.statementOfLocation}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, statementOfLocation: !fileData[key].fileContents.statementOfLocation}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Declaration Of Venue"
                            id={`declarationOfVenue${key}`}
                            checked={value.fileContents.declarationOfVenue}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfVenue: !fileData[key].fileContents.declarationOfVenue}}})}}
                          />
                        </div>
                        <div style={{width: 300}}>
                          <Form.Check
                            type="checkbox"
                            disabled={isFormDisabled}
                            label="Declaration Of Reduced Filing Fee"
                            id={`declarationOfReducedFilingFee${key}`}
                            checked={value.fileContents.declarationOfReducedFilingFee}
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfReducedFilingFee: !fileData[key].fileContents.declarationOfReducedFilingFee}}})}}
                          />
                        </div>
                      </div>
                    </Form.Group>
                    {
                      (isFormDisabled || isFormUpdating)
                        &&
                          <Form.Group>
                            <Form.Label>File Name</Form.Label>
                            <Form.Control
                              disabled={true}
                              value={value.documentName}
                            />
                          </Form.Group>
                    }
                    <Form.Group id="mS-file-description">
                      <Form.Label>File Description</Form.Label>
                      <Form.Control
                        type="textarea"
                        disabled={isFormDisabled}
                        value={value.description}
                        onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], description: e.target.value}})}}
                      />
                    </Form.Group>
                    <div>
                      {
                        value.fileType==="single"
                          ?
                            <>
                              <span
                                onClick={()=>handleOnClickViewFile(value.documentName)}
                                style={{cursor: "pointer", fontWeight: "bold"}}
                              >{isFileVisible===value.documentName ? "Hide" : "View"} File</span>
                              <span
                                onClick={()=>downloadResource(props.documentURI, props.documentURI.slice(props.documentURI.lastIndexOf('%2F')+3, props.documentURI.lastIndexOf('?')))}
                                style={{cursor: "pointer", fontWeight: "bold", marginLeft: 20}}
                              >Download File</span>
                              {
                                isFileVisible===value.documentName
                                  &&
                                    <iframe src={props.documentURI} width="100%"  height="750px" frameborder="0"/>
                              }
                            </>
                          :
                            <a
                              href={props.documentURI}
                              target="_blank"
                              style={{cursor: "pointer", float: "none", fontWeight: "bold"}}
                            >Download File</a>
                      }
                    </div>
                    <Form.Group id="mS-file-upload">
                      {
                        !isFormDisabled
                          &&
                            <>
                              <Form.Label>File Image</Form.Label>
                              <input
                                type="file"
                                style={{marginTop: 10}}
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], file: e.target.files[0]}})}}
                                accept={fileSubmissionType === "multiple" ? ".rar, .zip" : ".pdf"}
                              />
                            </>
                      }
                    </Form.Group>
                  </div>
                ))
              }
              {
                !isFormDisabled
                  &&
                    <b>Any file uploaded must contain all case documents organized and ready to be served. You may upload multiple case files, if more than one case is being served.</b>
              }
            </MDBCol>
            <br/><br/>
            {
              !isFormDisabled
                &&
                  <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <Button onClick={handleCaseUpdate}>
                      {
                        isPosting
                          ?
                            <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                              <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>  
                            </div>
                          :
                            <span className="text-white">Update Case</span>
                      }
                    </Button>
                  </div>
            }
          </div>
        </Fragment>
  )
}

export default FileSubmission;