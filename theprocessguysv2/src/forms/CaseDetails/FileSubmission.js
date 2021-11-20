import { Fragment, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MDBCol } from 'mdbreact';
import { showToast } from "../../utils";
import {
  submitCase
} from "../../redux/actions/case";

const FileSubmission = ({isFormDisabled, isFormUpdating, ...props}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const isPosting = useSelector(state => state.caseReducer.isPosting);
  const [isFileVisible, setIsFileVisible] = useState(false);
  const [fileData, setFileData] = useState({});
  const [fileSubmissionType, setFileSubmissionType] = useState("");

  useEffect(() => {
    if(props.fileData) {
      setFileData(props.fileData);
    } else {
      const numberOfCaseFilesBeingServed = JSON.parse(localStorage.getItem("Questionaire4")).numberOfCaseFilesBeingServed;
      let caseFileData = {};
      for (let index = 0; index < parseInt(numberOfCaseFilesBeingServed); index++) {
        caseFileData[index] = {file: null, caseType: "", description: "", fileContents: {coverSheet: false, civilCoverSheet: false, summons: false, complaint: false, contract: false, alternativeDisputeResolution: false, exhibit: false, dissolutionOfMarriage: false, temporaryRestrainingOrder: false, restrainingOrder: false, petition: false, statementOfLocation: false, declarationOfVenue: false, declarationOfReducedFilingFee: false}};
      }
      setFileData(caseFileData);
    }
  }, []);

  const handleCaseSubmit = () => {
    if(Object.values(fileData).filter((o)=>!o.caseType.length).length) {
      showToast("Please enter the case type in every relevant input field!", "warning");
    } else if(Object.values(fileData).filter((o)=>!o.description.length && !Object.values(o.fileContents).includes(true)).length) {
      showToast("Please either select the file contents or type-in description for every relevant file!", "warning");
    } else if(Object.values(fileData).filter((o)=>o.file===null).length) {
      showToast("Please upload the files in every relevant input field!", "warning");
    } else if(!isPosting) {
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
          courtType: QuestionaireForm1.courtType,
          courtState: QuestionaireForm1.courtState,
          countyOf: QuestionaireForm1.countyOf,
          courthouseAddress: QuestionaireForm1.courthouseAddress,
          courthouseMailingAddress: QuestionaireForm1.courthouseMailingAddress,
          branchName: QuestionaireForm1.branchName
        };
      }
      if(QuestionaireForm2) {
        data["PlaintiffInformation-2"] = {
          plaintiffsDetail: QuestionaireForm2.plaintiffsDetail,
          numberOfAttorneyPlaintiff: QuestionaireForm2.numberOfAttorneyPlaintiff,
          isOrRepresentingPlaintiff: QuestionaireForm2.isOrRepresentingPlaintiff,
          shouldPGFillPlaintiffInfo: QuestionaireForm2.shouldPGFillPlaintiffInfo,
          numberOfAttorneysRepresentingPlaintiff: QuestionaireForm2.numberOfAttorneysRepresentingPlaintiff,
          plaintiffAttorneysDetail: QuestionaireForm2.plaintiffAttorneysDetail
        };
      }
      if(QuestionaireForm3) {
        data["DefendantInformation-3"] = {
          defendantsDetail: QuestionaireForm3.defendantsDetail,
          numberOfAttorneyDefendant: QuestionaireForm3.numberOfAttorneyDefendant,
          isOrRepresentingDefendant: QuestionaireForm3.isOrRepresentingDefendant,
          shouldPGFillDefendantInfo: QuestionaireForm3.shouldPGFillDefendantInfo,
          numberOfAttorneysRepresentingDefendant: QuestionaireForm3.numberOfAttorneysRepresentingDefendant,
          defendantAttorneysDetail: QuestionaireForm3.defendantAttorneysDetail
        };
      }
      if(QuestionaireForm4) {
        data["ServeeDocumentedData-4"] = {
          numberOfCaseFilesBeingServed: QuestionaireForm4.numberOfCaseFilesBeingServed,
          howManyIndividualsServed: QuestionaireForm4.howManyIndividualsServed,
          serveesDetail: Object.values(QuestionaireForm4.serveesDetail),
          locationForBeingServed: QuestionaireForm4.locationForBeingServed,
          mainAddressesForService: QuestionaireForm4.mainAddressesForService,
          agentOfService: QuestionaireForm4.agentOfService,
          agentsFullNames: QuestionaireForm4.agentsFullNames
        };
      }
      if(QuestionaireForm5) {
        data["ClearanceOfAction-5"] = {
          typeOfServe: QuestionaireForm5.typeOfServe,
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
          serveesPhysicalDescription: QuestionaireForm6.serveesPhysicalDescription
        };
      }
      if(QuestionaireForm7) {
        data["VehicleInformation-7"] = {
          vehiclesInformation: QuestionaireForm7.vehiclesInformation
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
      data["documents"] = Object.values(fileData);
      dispatch(submitCase({uid: user.uid, ...data}, ()=>{
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
                          &&
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
                    <Button onClick={handleCaseSubmit}>
                      {
                        isPosting
                          ?
                            <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                              <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                                <span className="sr-only">Loading...</span>
                              </div>  
                            </div>
                          :
                            <span className="text-white">Submit Case</span>
                      }
                    </Button>
                  </div>
            }
          </div>
        </Fragment>
  )
}

export default FileSubmission;