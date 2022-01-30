import { db, uploadMedia, uploadBase64Media } from "../../firebase";
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
      let serveesDocumentedDataDocRefs = [];
      const caseInformationDocRef = await db.collection("CaseInformation-1").add({uid: data.uid, ...data["CaseInformation-1"]});
      const plaintiffInformationDocRef = await db.collection("PlaintiffInformation-2").add({uid: data.uid, ...data["PlaintiffInformation-2"]});
      const defendantInformationDocRef = await db.collection("DefendantInformation-3").add({uid: data.uid, ...data["DefendantInformation-3"]});
      const serveesDetail = data["ServeeDocumentedData-4"].serveesDetail;
      delete data["ServeeDocumentedData-4"].serveesDetail;
      for(const servee of Object.values(serveesDetail)) {
        for(const serviceDetail of Object.values(servee.serviceDetails)) {
          const serveeDocumentedDataDocRef = await db.collection("ServeeDocumentedData-4").add({uid: data.uid, ...data["ServeeDocumentedData-4"], numberOfCaseFilesBeingServed: 1, howManyIndividualsServed: 1, serveesDetail: {0: {...servee, serviceDetails: {0: serviceDetail}}}});
          serveesDocumentedDataDocRefs.push(serveeDocumentedDataDocRef);
        }
      }
      const clearanceOfActionDocRef = await db.collection("ClearanceOfAction-5").add({uid: data.uid, ...data["ClearanceOfAction-5"]});
      for(const key of Object.keys(data["ServeePhysicalDescription-6"].serveesPhysicalDescription)) {
        const image = data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].image;
        if(image) {
          const timestamp = new Date().getMilliseconds();
          const imagePath = `servees_pictures/${data.uid}/${timestamp}${image.name}`;
          const imageURI = await uploadBase64Media(image, `servees_pictures/${data.uid}/`, timestamp);
          delete data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].image;
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].imageURI = imageURI;
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].imagePath = imagePath;
        }
      }
      const serveePhysicalDescriptionDocRef = await db.collection("ServeePhysicalDescription-6").add({uid: data.uid, ...data["ServeePhysicalDescription-6"]});
      const vehicleInformationDocRef = await db.collection("VehicleInformation-7").add({uid: data.uid, ...data["VehicleInformation-7"]});
      const offeredServicesDocRef = await db.collection("OfferedServices-8").add({uid: data.uid, ...data["OfferedServices-8"]});
      let documentURI;
      let documentPath;
      const notificationsBatch = db.batch();
      if(parseInt(data["ServeeDocumentedData-4"].numberOfCaseFilesBeingServed)>1) {
        for(const document of data["documents"]) {
          const timestamp = new Date().getMilliseconds();
          documentPath = `file_submissions/${data.uid}/${timestamp}${document.file.name}`;
          documentURI = await uploadMedia(document.file, `file_submissions/${data.uid}/`, timestamp);
          const fileSubmissionDocRef = await db.collection("FileSubmission-9").add({uid: data.uid, documentURI, documentPath, fileData: {0: {documentName: document.file.name, caseType: document.caseType, fileType: document.fileType, description: document.description, fileContents: document.fileContents}}, submittedAt: new Date()});
          for(const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
            const caseDocRef = await db.collection("cases").add({
              uid: data.uid, filedAt: new Date(),
              userName: data.userName,
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
            notificationsBatch.set(db.collection("Notifications").doc(), {category: "case_submission", addressed: false, read: false, content: {uid: data.uid, userName: data.userName, caseId: caseDocRef.id, caseTitle: data["CaseInformation-1"].caseTitle}, title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`, generatedAt: new Date()});
            await db.collection("cases").doc(caseDocRef.id).update({searchString: `${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.city} ${p.address.state} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.city} ${d.address.state} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].ifYesListAddress} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
          }
        }
      } else {
        const document = data.documents[0];
        const timestamp = new Date().getMilliseconds();
        documentPath = `file_submissions/${data.uid}/${timestamp}${document.file.name}`;
        documentURI = await uploadMedia(document.file, `file_submissions/${data.uid}/`, timestamp);
        const fileSubmissionDocRef = await db.collection("FileSubmission-9").add({uid: data.uid, documentURI, documentPath, fileData: {0: {documentName: document.file.name, caseType: document.caseType, fileType: document.fileType, description: document.description, fileContents: document.fileContents}}, submittedAt: new Date()});
        for(const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
          const caseDocRef = await db.collection("cases").add({
            uid: data.uid, filedAt: new Date(),
            userName: data.userName,
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
          notificationsBatch.set(db.collection("Notifications").doc(), {category: "case_submission", addressed: false, read: false, content: {uid: data.uid, userName: data.userName, caseId: caseDocRef.id, caseTitle: data["CaseInformation-1"].caseTitle}, title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`, generatedAt: new Date()});
          await db.collection("cases").doc(caseDocRef.id).update({searchString: `${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.city} ${p.address.state} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.city} ${d.address.state} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].ifYesListAddress} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
        }
      }
      await notificationsBatch.commit();
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
        .orderBy("filedAt", "desc")
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
              details: null,
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
      console.log({caseData})
      dispatch({
        type: SET_USER_CASE_DETAILS,
        payload: {
          id: data.caseId,
          caseDetails: caseData
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