import { Fragment, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { MDBCol, MDBInput } from 'mdbreact';
import { showToast } from "../../utils";
import {
  submitCase
} from "../../redux/actions/case";

const FileSubmission = ({...props}) => {

  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector(state => state.auth.user);
  const isPosting = useSelector(state => state.caseReducer.isPosting);
  const [fileData, setFileData] = useState({});
  const [fileSubmissionType, setFileSubmissionType] = useState("");

  useEffect(() => {
    const numberOfCaseFilesBeingServed = JSON.parse(localStorage.getItem("Questionaire4")).numberOfCaseFilesBeingServed;
    let caseFileData = {};
    for (let index = 0; index < parseInt(numberOfCaseFilesBeingServed); index++) {
      caseFileData[index] = {file: null, caseType: "", description: "", fileContents: {coverSheet: false, civilCoverSheet: false, summons: false, complaint: false, contract: false, alternativeDisputeResolution: false, exhibit: false, dissolutionOfMarriage: false, temporaryRestrainingOrder: false, restrainingOrder: false, petition: false, statementOfLocation: false, declarationOfVenue: false, declarationOfReducedFilingFee: false}};
    }
    setFileData(caseFileData);
  }, []);

  const handleOnChangeFileType = (fileType) => {
    setFileSubmissionType(fileType);
    let caseFileData = {};
    for(let index = 0; index < Object.keys(fileData).length; index++) {
      caseFileData[index] = {...fileData[index], fileType};
    }
    setFileData(caseFileData);
  }

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
          serveesDetail: Object.values(QuestionaireForm4.serveesDetail)
        };
      }
      if(QuestionaireForm5) {
        data["ClearanceOfAction-5"] = {
          serveIndividualAtEmployment: QuestionaireForm5.serveIndividualAtEmployment,
          requireServerNotifyPersonOfInterest: QuestionaireForm5.requireServerNotifyPersonOfInterest,
          serverContactServeeByPhone: QuestionaireForm5.serverContactServeeByPhone,
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
          specifyDatesForStakeOutService: QuestionaireForm8.specifyDatesForStakeOutService,
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
        history.push("/case-submission-success");
      }));
    }
  }

  return (
    <Fragment>
      <br/><br/><br/><br/>
      {
        fileSubmissionType==="single"
          ?
            <>
              <center><h2><b>Case Files Submission Upload</b></h2></center>
              <div>
                <br/>
                <MDBCol md="12">
                  {
                    Object.entries(fileData).map(([key, value])=>(
                      <div>
                        <Form.Group id="mS-file-upload">
                          <label>Case Type</label>
                          <MDBInput
                            className="text-white"
                            value={value.caseType}
                            hint="Restraining order, Eviction Notice, Divorce filing, Response to something, etc"
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], caseType: e.target.value}})}}
                          />
                        </Form.Group>
                        <Form.Group id="mS-file-upload">
                          <label>File Contents</label>
                          <div style={{display: "flex", flexWrap: "wrap", paddingLeft: 30}}>
                            <div style={{width: 300}}>
                              <input
                                id={`coverSheet${key}`}
                                checked={value.fileContents.coverSheet}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, coverSheet: !fileData[key].fileContents.coverSheet}}})}}
                              />
                              <label className="ml-2" for={`coverSheet${key}`}>Cover Sheet</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`civilCoverSheet${key}`}
                                checked={value.fileContents.civilCoverSheet}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, civilCoverSheet: !fileData[key].fileContents.civilCoverSheet}}})}}
                              />
                              <label className="ml-2" for={`civilCoverSheet${key}`}>Civil Cover Sheet</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`summons${key}`}
                                checked={value.fileContents.summons}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, summons: !fileData[key].fileContents.summons}}})}}
                              />
                              <label className="ml-2" for={`summons${key}`}>Summons</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`complaint${key}`}
                                checked={value.fileContents.complaint}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, complaint: !fileData[key].fileContents.complaint}}})}}
                              />
                              <label className="ml-2" for={`complaint${key}`}>Complaint</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`contract${key}`}
                                checked={value.fileContents.contract}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, contract: !fileData[key].fileContents.contract}}})}}
                              />
                              <label className="ml-2" for={`contract${key}`}>Contract</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`alternativeDisputeResolution${key}`}
                                checked={value.fileContents.alternativeDisputeResolution}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, alternativeDisputeResolution: !fileData[key].fileContents.alternativeDisputeResolution}}})}}
                              />
                              <label className="ml-2" for={`alternativeDisputeResolution${key}`}>Alternative Dispute Resolution</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`exhibit${key}`}
                                checked={value.fileContents.exhibit}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, exhibit: !fileData[key].fileContents.exhibit}}})}}
                              />
                              <label className="ml-2" for={`exhibit${key}`}>Exhibit</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`dissolutionOfMarriage${key}`}
                                checked={value.fileContents.dissolutionOfMarriage}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, dissolutionOfMarriage: !fileData[key].fileContents.dissolutionOfMarriage}}})}}
                              />
                              <label className="ml-2" for={`dissolutionOfMarriage${key}`}>Dissolution Of Marriage</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`temporaryRestrainingOrder${key}`}
                                checked={value.fileContents.temporaryRestrainingOrder}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, temporaryRestrainingOrder: !fileData[key].fileContents.temporaryRestrainingOrder}}})}}
                              />
                              <label className="ml-2" for={`temporaryRestrainingOrder${key}`}>Temporary Restraining Order</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`restrainingOrder${key}`}
                                checked={value.fileContents.restrainingOrder}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, restrainingOrder: !fileData[key].fileContents.restrainingOrder}}})}}
                              />
                              <label className="ml-2" for={`restrainingOrder${key}`}>Restraining Order</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`petition${key}`}
                                checked={value.fileContents.petition}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, petition: !fileData[key].fileContents.petition}}})}}
                              />
                              <label className="ml-2" for={`petition${key}`}>Petition</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`statementOfLocation${key}`}
                                checked={value.fileContents.statementOfLocation}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, statementOfLocation: !fileData[key].fileContents.statementOfLocation}}})}}
                              />
                              <label className="ml-2" for={`statementOfLocation${key}`}>Statement Of Locations/Venue</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`declarationOfVenue${key}`}
                                checked={value.fileContents.declarationOfVenue}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfVenue: !fileData[key].fileContents.declarationOfVenue}}})}}
                              />
                              <label className="ml-2" for={`declarationOfVenue${key}`}>Declaration Of Venue</label>
                            </div>
                            <div style={{width: 300}}>
                              <input
                                id={`declarationOfReducedFilingFee${key}`}
                                checked={value.fileContents.declarationOfReducedFilingFee}
                                type="checkbox"
                                onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfReducedFilingFee: !fileData[key].fileContents.declarationOfReducedFilingFee}}})}}
                              />
                              <label className="ml-2" for={`declarationOfReducedFilingFee${key}`}>Declaration Of Reduced Filing Fee</label>
                            </div>
                          </div>
                        </Form.Group>
                        <Form.Group id="mS-file-upload">
                          <label>File Description</label>
                          <MDBInput
                            className="text-white"
                            value={value.description}
                            hint=""
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], description: e.target.value}})}}
                          />
                        </Form.Group>
                        <Form.Group id="mS-file-upload">
                          <label>File Image</label>
                          <input
                            type="file"
                            onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], file: e.target.files[0]}})}}
                            accept=".pdf"
                          >
                          </input>
                        </Form.Group>
                      </div>
                    ))
                  }
                  <b>Any file uploaded must contain all case documents organized and ready to be served. You may upload multiple case files, if more than one case is being served.</b>
                </MDBCol>
                <br/><br/>
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
                <br/><br/>
              </div>
            </>
          :
            (
              fileSubmissionType==="multiple"
                ?
                  <>
                    <center><h2><b>Case Files Submission Upload</b></h2></center>
                    <div>
                      <br/>
                      <MDBCol md="12">
                        {
                          Object.entries(fileData).map(([key, value])=>(
                            <div>
                              <Form.Group id="mS-file-upload">
                                <label>Case Type</label>
                                <MDBInput
                                  className="text-white"
                                  value={value.caseType}
                                  hint="Restraining order, Eviction Notice, Divorce filing, Response to something, etc"
                                  onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], caseType: e.target.value}})}}
                                />
                              </Form.Group>
                              <Form.Group id="mS-file-upload">
                                <label>File Contents</label>
                                <div style={{display: "flex", flexWrap: "wrap", paddingLeft: 30}}>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`coverSheet${key}`}
                                      checked={value.fileContents.coverSheet}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, coverSheet: !fileData[key].fileContents.coverSheet}}})}}
                                    />
                                    <label className="ml-2" for={`coverSheet${key}`}>Cover Sheet</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`civilCoverSheet${key}`}
                                      checked={value.fileContents.civilCoverSheet}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, civilCoverSheet: !fileData[key].fileContents.civilCoverSheet}}})}}
                                    />
                                    <label className="ml-2" for={`civilCoverSheet${key}`}>Civil Cover Sheet</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`summons${key}`}
                                      checked={value.fileContents.summons}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, summons: !fileData[key].fileContents.summons}}})}}
                                    />
                                    <label className="ml-2" for={`summons${key}`}>Summons</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`complaint${key}`}
                                      checked={value.fileContents.complaint}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, complaint: !fileData[key].fileContents.complaint}}})}}
                                    />
                                    <label className="ml-2" for={`complaint${key}`}>Complaint</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`contract${key}`}
                                      checked={value.fileContents.contract}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, contract: !fileData[key].fileContents.contract}}})}}
                                    />
                                    <label className="ml-2" for={`contract${key}`}>Contract</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`alternativeDisputeResolution${key}`}
                                      checked={value.fileContents.alternativeDisputeResolution}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, alternativeDisputeResolution: !fileData[key].fileContents.alternativeDisputeResolution}}})}}
                                    />
                                    <label className="ml-2" for={`alternativeDisputeResolution${key}`}>Alternative Dispute Resolution</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`exhibit${key}`}
                                      checked={value.fileContents.exhibit}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, exhibit: !fileData[key].fileContents.exhibit}}})}}
                                    />
                                    <label className="ml-2" for={`exhibit${key}`}>Exhibit</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`dissolutionOfMarriage${key}`}
                                      checked={value.fileContents.dissolutionOfMarriage}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, dissolutionOfMarriage: !fileData[key].fileContents.dissolutionOfMarriage}}})}}
                                    />
                                    <label className="ml-2" for={`dissolutionOfMarriage${key}`}>Dissolution Of Marriage</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`temporaryRestrainingOrder${key}`}
                                      checked={value.fileContents.temporaryRestrainingOrder}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, temporaryRestrainingOrder: !fileData[key].fileContents.temporaryRestrainingOrder}}})}}
                                    />
                                    <label className="ml-2" for={`temporaryRestrainingOrder${key}`}>Temporary Restraining Order</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`restrainingOrder${key}`}
                                      checked={value.fileContents.restrainingOrder}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, restrainingOrder: !fileData[key].fileContents.restrainingOrder}}})}}
                                    />
                                    <label className="ml-2" for={`restrainingOrder${key}`}>Restraining Order</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`petition${key}`}
                                      checked={value.fileContents.petition}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, petition: !fileData[key].fileContents.petition}}})}}
                                    />
                                    <label className="ml-2" for={`petition${key}`}>Petition</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`statementOfLocation${key}`}
                                      checked={value.fileContents.statementOfLocation}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, statementOfLocation: !fileData[key].fileContents.statementOfLocation}}})}}
                                    />
                                    <label className="ml-2" for={`statementOfLocation${key}`}>Statement Of Locations/Venue</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`declarationOfVenue${key}`}
                                      checked={value.fileContents.declarationOfVenue}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfVenue: !fileData[key].fileContents.declarationOfVenue}}})}}
                                    />
                                    <label className="ml-2" for={`declarationOfVenue${key}`}>Declaration Of Venue</label>
                                  </div>
                                  <div style={{width: 300}}>
                                    <input
                                      id={`declarationOfReducedFilingFee${key}`}
                                      checked={value.fileContents.declarationOfReducedFilingFee}
                                      type="checkbox"
                                      onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], fileContents: {...fileData[key].fileContents, declarationOfReducedFilingFee: !fileData[key].fileContents.declarationOfReducedFilingFee}}})}}
                                    />
                                    <label className="ml-2" for={`declarationOfReducedFilingFee${key}`}>Declaration Of Reduced Filing Fee</label>
                                  </div>
                                </div>
                              </Form.Group>
                              <Form.Group id="mS-file-upload">
                                <label>File Description</label>
                                <MDBInput
                                  className="text-white"
                                  value={value.description}
                                  hint=""
                                  onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], description: e.target.value}})}}
                                />
                              </Form.Group>
                              <Form.Group id="mS-file-upload">
                                <label>File Image</label>
                                <input
                                  type="file"
                                  onChange={(e)=>{setFileData({...fileData, [key]: {...fileData[key], file: e.target.files[0]}})}}
                                  accept=".rar, .zip"
                                >
                                </input>
                              </Form.Group>
                            </div>
                          ))
                        }
                        <b>Upload a single zip file containing all the documents pertaining to the case being served, and TPG will organize your paperwork for you. You may upload multiple zip files, if more than one case is being served.</b>
                      </MDBCol>
                      <br/><br/>
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
                      <br/><br/>
                    </div>
                  </>
                :
                  <>
                    <center><h2><b>Upload Case File(s) Type</b></h2></center>
                    <div>
                      <br/><br/><br/><br/><br/>
                      <MDBCol md="12">
                        <center>
                          <Button onClick={()=>handleOnChangeFileType("single")} className="w-75">
                            <span className="text-white">Single Case File(s) Submission</span>
                          </Button><br/><br/>
                          <Button onClick={()=>handleOnChangeFileType("multiple")} className="w-75">
                            <span className="text-white">Multiple Case File(s) Submission</span>
                          </Button>
                        </center>
                      </MDBCol>
                      <br/><br/><br/>
                    </div>
                  </>
            )
      }
      <br/>
      <br/>
      <br/>
    </Fragment>
  )
}

export default FileSubmission;