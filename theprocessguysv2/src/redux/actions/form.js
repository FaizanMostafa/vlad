import { db, uploadMedia } from "../../firebase";
import {showToast} from "../../utils";
import {
  SET_IS_FORM_POSTING
} from "../constants";

const setIsFormPosting = (status) => {
  return {
    type: SET_IS_FORM_POSTING,
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
      db.collection("cases").add({
        uid: data.uid, filedAt: new Date(),
        CaseInformationId: caseInformationDocRef.id,
        PlaintiffInformationId: plaintiffInformationDocRef.id,
        DefendantInformationId: defendantInformationDocRef.id,
        ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
        ClearanceOfActionId: clearanceOfActionDocRef.id,
        ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
        VehicleInformationId: vehicleInformationDocRef.id,
        OfferedServicesId: offeredServicesDocRef.id,
        FileSubmissionId: fileSubmissionDocRef.id
      });
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

export {
  submitCase
};