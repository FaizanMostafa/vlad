import { db, uploadMedia } from "../../firebase";
import {showToast} from "../../utils";
import {
  SET_IS_FETCHING_CASE_DETAILS,
  SET_USER_CASE_DETAILS,
  SET_IS_FETCHING_CASES,
  SET_IS_FORM_POSTING,
  SET_USER_CASES,
} from "../constants";

const setIsFormPosting = (status) => {
  return {
    type: SET_IS_FORM_POSTING,
    payload: status
  };
}

const setIsFetchingCases = (status) => {
  return {
    type: SET_IS_FETCHING_CASES,
    payload: status
  };
}

const setIsFetchingCaseDetails = (status) => {
  return {
    type: SET_IS_FETCHING_CASE_DETAILS,
    payload: status
  };
}

const submitCase = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async (dispatch) => {
    try {
      dispatch(setIsFormPosting(true));
      const caseInformationDocRef = await db.collection("CaseInformation-1").add({uid: data.uid, ...data["CaseInformation-1"]});
      const plaintiffInformationDocRef = await db.collection("PlaintiffInformation-2").add({uid: data.uid, ...data["PlaintiffInformation-2"]});
      const defendantInformationDocRef = await db.collection("DefendantInformation-3").add({uid: data.uid, ...data["DefendantInformation-3"]});
      const serveeDocumentedDataDocRef = await db.collection("ServeeDocumentedData-4").add({uid: data.uid, ...data["ServeeDocumentedData-4"]});
      const clearanceOfActionDocRef = await db.collection("ClearanceOfAction-5").add({uid: data.uid, ...data["ClearanceOfAction-5"]});
      const serveePhysicalDescriptionDocRef = await db.collection("ServeePhysicalDescription-6").add({uid: data.uid, ...data["ServeePhysicalDescription-6"]});
      const vehicleInformationDocRef = await db.collection("VehicleInformation-7").add({uid: data.uid, ...data["VehicleInformation-7"]});
      const offeredServicesDocRef = await db.collection("OfferedServices-8").add({uid: data.uid, ...data["OfferedServices-8"]});
      let documentURI;
      const documents = [];
      for(const document of data.documents) {
        documentURI = await uploadMedia(document, `file_submissions/${data.uid}/`);
        documents.push(documentURI);
      }
      const fileSubmissionDocRef = await db.collection("FileSubmission-9").add({uid: data.uid, documents, submittedAt: new Date()});
      const caseDocRef = await db.collection("cases").add({
        uid: data.uid, filedAt: new Date(),
        caseTitle: data["CaseInformation-1"].caseTitle,
        CaseInformationId: caseInformationDocRef.id,
        PlaintiffInformationId: plaintiffInformationDocRef.id,
        DefendantInformationId: defendantInformationDocRef.id,
        ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
        ClearanceOfActionId: clearanceOfActionDocRef.id,
        ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
        VehicleInformationId: vehicleInformationDocRef.id,
        OfferedServicesId: offeredServicesDocRef.id,
        FileSubmissionId: fileSubmissionDocRef.id,
        status: "pending"
      });
      await db.collection("cases").doc(caseDocRef.id).update({searchString: `${data["CaseInformation-1"].caseTitle} ${data["PlaintiffInformation-2"].plaintiffFullName} ${data["DefendantInformation-3"].defendantFullName} ${data["PlaintiffInformation-2"].plaintiffAttorneyName} ${data["ServeeDocumentedData-4"].ifYesListFullName} ${data["CaseInformation-1"].courthouseAddress} ${data["CaseInformation-1"].courthouseMailingAddress} ${data["PlaintiffInformation-2"].plaintiffAddress} ${data["PlaintiffInformation-2"].plaintiffAttorneyOfficeAddress} ${data["DefendantInformation-3"].defendantAddress} ${data["DefendantInformation-3"].defendantAttorneyOfficeAddress} ${data["OfferedServices-8"].ifYesListAddress} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
      showToast("Case submitted successfully!", "success");
      dispatch(setIsFormPosting(false));
      onSuccess();
    } catch(error) {
      onError();
      dispatch(setIsFormPosting(false));
      showToast(error.message, "error");
    }
  }
)

const getUserCases = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingCases(true));
      db.collection("cases").where("uid", "==", data.uid)
        .onSnapshot(async (querySnapshot) => {
          let cases = [];
          let docData = {};
          for(const doc of querySnapshot.docs) {
            docData = doc.data();
            cases.push({
              id: doc.id,
              caseTitle: docData.caseTitle,
              status: docData.status,
              searchString: docData.searchString,
              filedAt: docData.filedAt
            });
          }
          console.log("Current cases: ", cases);
          dispatch({
            type: SET_USER_CASES,
            payload: cases
          });
          onSuccess();
        });
    } catch(error) {
      onError();
      dispatch(setIsFetchingCases(false));
      showToast(error.message, "error");
    }
  }
)

const getUserCaseDetails = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async(dispatch) => {
    try {
      dispatch(setIsFetchingCaseDetails(true));
      let caseData = {};
      let subQuerySnapshot = {};
      const doc = await db.collection("cases").doc(data.caseId).get();
      const docData = doc.data();
      subQuerySnapshot = await db.collection("CaseInformation-1").doc(docData.CaseInformationId).get();
      caseData["CaseInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("PlaintiffInformation-2").doc(docData.PlaintiffInformationId).get();
      caseData["PlaintiffInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("DefendantInformation-3").doc(docData.DefendantInformationId).get();
      caseData["DefendantInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ServeeDocumentedData-4").doc(docData.ServeeDocumentedDataId).get();
      caseData["ServeeDocumentedData"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ClearanceOfAction-5").doc(docData.ClearanceOfActionId).get();
      caseData["ClearanceOfAction"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ServeePhysicalDescription-6").doc(docData.ServeePhysicalDescriptionId).get();
      caseData["ServeePhysicalDescription"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("VehicleInformation-7").doc(docData.VehicleInformationId).get();
      caseData["VehicleInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("OfferedServices-8").doc(docData.OfferedServicesId).get();
      caseData["OfferedServices"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("FileSubmission-9").doc(docData.FileSubmissionId).get();
      caseData["FileSubmission"] = subQuerySnapshot.data();
      dispatch({
        type: SET_USER_CASE_DETAILS,
        payload: {
          id: doc.id,
          filedAt: docData.filedAt,
          ...caseData
        }
      });
      onSuccess();
    } catch(error) {
      onError();
      dispatch(setIsFetchingCaseDetails(false));
      showToast(error.message, "error");
    }
  }
)

export {
  submitCase,
  getUserCases,
  getUserCaseDetails
};