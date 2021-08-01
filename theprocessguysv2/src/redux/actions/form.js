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
      db.collection("CaseInformation-1").add({uid: data.uid, ...data["CaseInformation-1"]});
      db.collection("PlaintiffInformation-2").add({uid: data.uid, ...data["PlaintiffInformation-2"]});
      db.collection("DefendantInformation-3").add({uid: data.uid, ...data["DefendantInformation-3"]});
      db.collection("ServeeDocumentedData-4").add({uid: data.uid, ...data["ServeeDocumentedData-4"]});
      db.collection("ClearanceOfAction-5").add({uid: data.uid, ...data["ClearanceOfAction-5"]});
      db.collection("ServeePhysicalDescription-6").add({uid: data.uid, ...data["ServeePhysicalDescription-6"]});
      db.collection("VehicleInformation-7").add({uid: data.uid, ...data["VehicleInformation-7"]});
      db.collection("OfferedServices-8").add({uid: data.uid, ...data["OfferedServices-8"]});
      let documentURI;
      const documents = [];
      for(const document of data.documents) {
        documentURI = await uploadMedia(document, `file_submissions/${data.uid}/`);
        documents.push(documentURI);
      }
      await db.collection("FileSubmission-9").add({uid: data.uid, documents});
      showToast("File submitted successfully!", "success");
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