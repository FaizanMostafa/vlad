import firebase, {db, uploadMedia, deleteMedia} from "../../firebase";
import {showToast} from "../../utils";
import {
  FETCH_USERS,
  FETCH_CASES,
  UPDATE_USER,
  FETCH_METADATA,
  FETCH_CASE_DETAILS,
  SET_IS_UPDATING_USER,
  SET_IS_DELETING_USER,
  SET_IS_CREATING_USER,
  SET_IS_FETCHING_USERS,
  SET_IS_FETCHING_CASES,
  SET_IS_DELETING_CASE,
  SET_IS_FETCHING_METADATA,
  DELETE_USER,
  DELETE_CASE,
  SET_IS_FETCHING_CASE_DETAILS
} from "../constants";

const setIsUpdatingUser = (status) => {
  return {
    type: SET_IS_UPDATING_USER,
    payload: status
  };
}

const setIsFetchingUsers = (status) => {
  return {
    type: SET_IS_FETCHING_USERS,
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

const setIsDeletingCase = (status) => {
  return {
    type: SET_IS_DELETING_CASE,
    payload: status
  };
}

const setIsDeletingUser = (status) => {
  return {
    type: SET_IS_DELETING_USER,
    payload: status
  };
}

const setIsCreatingUser = (status) => {
  return {
    type: SET_IS_CREATING_USER,
    payload: status
  };
}

const setIsFetchingMetadata = (status) => {
  return {
    type: SET_IS_FETCHING_METADATA,
    payload: status
  };
}

const getMetadataInfo = () => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingMetadata(true));
      db.collection("metadatas")
        .onSnapshot((querySnapshot) => {
          const metadata = {};
          querySnapshot.forEach((doc) => {
            metadata[doc.id] = doc.data().count;
          });
          dispatch({
            type: FETCH_METADATA,
            payload: {metadata}
          });
        });
    } catch (error) {
      dispatch(setIsFetchingMetadata(false));
      showToast(error.message, "error");
    }
  }
)

const fetchUsers = (data) => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingUsers(true));
      db.collection("users")
        .where("role", "!=", "superadmin")
        .orderBy("role")
        .orderBy("registeredAt", "desc")
        .startAfter(data.lastVisible)
        .limit(data.limit).get()
        .then((querySnapshot) => {
          let users = [];
          let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          for(const doc of querySnapshot.docs) {
            users.push({docId: doc.id, ...doc.data()});
          }
          dispatch({
            type: FETCH_USERS,
            payload: {users, lastVisible}
          });
        });
    } catch (error) {
      dispatch(setIsFetchingUsers(false));
      showToast(error.message, "error");
    }
  }
)

const createUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    dispatch(setIsCreatingUser(true));
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        firebase.auth().currentUser.sendEmailVerification()
          .then(async() => {
            var user = userCredential.user;
            delete data["password"];
            const timestamp = new Date().toISOString();
            const profilePicturePath = `profile_pictures/${user.uid}/${timestamp}${data["profilePicture"].name}`;
            const profilePictureURI = await uploadMedia(data["profilePicture"], `profile_pictures/${user.uid}/`, timestamp);
            delete data["profilePicture"];
            await db.collection("users").doc(user.uid).set({uid: user.uid, ...data, profilePictureURI, profilePicturePath, registeredAt: new Date()});
            showToast("User created successfully!", "success");
            onSuccess();
            dispatch(setIsCreatingUser(false));
          });
      })
      .catch((error) => {
        onError();
        showToast(error.message, "error");
        dispatch(setIsCreatingUser(false));
      });
  }
)

const updateUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async(dispatch) => {
    try {
      dispatch(setIsUpdatingUser(true));
      if(data.user.profilePicture) {
        await deleteMedia(data.user.profilePicturePath);
        const timestamp = new Date().toISOString();
        data.user["profilePicturePath"] = `profile_pictures/${data.uid}/${timestamp}${data.user["profilePicture"].name}`;
        data.user["profilePictureURI"] = await uploadMedia(data.user["profilePicture"], `profile_pictures/${data.uid}/`, timestamp);
        delete data.user["profilePicture"];
      }
      db.collection("users")
        .doc(data.docId)
        .update({...data.user}).then(() => {
          onSuccess();
          dispatch({
            type: UPDATE_USER,
            payload: {user: {uid: data.uid, ...data.user}}
          });
          showToast("User has been updated in the system successfully!", "success");
        });
    } catch (error) {
      onError();
      dispatch(setIsUpdatingUser(false));
      showToast(error.message, "error");
    }
  }
)

const deleteUser = (data, onSuccess=()=>{}, onError=()=>{}) => (
  (dispatch) => {
    try {
      dispatch(setIsDeletingUser(true));
      db.collection("users")
        .doc(data.docId)
        .delete().then(() => {
          onSuccess();
          dispatch({
            type: DELETE_USER,
            payload: {...data}
          });
          showToast("User has been deleted from the system successfully!", "success");
        });
    } catch (error) {
      onError();
      dispatch(setIsDeletingUser(false));
      showToast(error.message, "error");
    }
  }
)

const fetchCases = (data) => (
  (dispatch) => {
    try {
      dispatch(setIsFetchingCases(true));
      let query = db.collection("cases").orderBy("filedAt", "desc")
      if(data.lastVisible) query = query.startAfter(data.lastVisible)
        query
        .limit(data.limit).get()
        .then((querySnapshot) => {
          let cases = [];
          let lastVisible = querySnapshot.docs[querySnapshot.docs.length-1];
          for(const doc of querySnapshot.docs) {
            cases.push({docId: doc.id, ...doc.data()});
          }
          dispatch({
            type: FETCH_CASES,
            payload: {cases, lastVisible}
          });
        });
    } catch (error) {
      dispatch(setIsFetchingCases(false));
      showToast(error.message, "error");
    }
  }
)

const fetchCaseDetails = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async(dispatch) => {
    try {
      dispatch(setIsFetchingCaseDetails(true));
      let caseData = {};
      let subQuerySnapshot = {};
      subQuerySnapshot = await db.collection("CaseInformation-1").doc(data.CaseInformationId).get();
      caseData["CaseInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("PlaintiffInformation-2").doc(data.PlaintiffInformationId).get();
      caseData["PlaintiffInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("DefendantInformation-3").doc(data.DefendantInformationId).get();
      caseData["DefendantInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ServeeDocumentedData-4").doc(data.ServeeDocumentedDataId).get();
      caseData["ServeeDocumentedData"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ClearanceOfAction-5").doc(data.ClearanceOfActionId).get();
      caseData["ClearanceOfAction"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("ServeePhysicalDescription-6").doc(data.ServeePhysicalDescriptionId).get();
      caseData["ServeePhysicalDescription"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("VehicleInformation-7").doc(data.VehicleInformationId).get();
      caseData["VehicleInformation"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("OfferedServices-8").doc(data.OfferedServicesId).get();
      caseData["OfferedServices"] = subQuerySnapshot.data();
      subQuerySnapshot = await db.collection("FileSubmission-9").doc(data.FileSubmissionId).get();
      caseData["FileSubmission"] = subQuerySnapshot.data();
      dispatch({
        type: FETCH_CASE_DETAILS,
        payload: {
          caseId: data.docId,
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

const deleteCase = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async(dispatch) => {
    try {
      dispatch(setIsDeletingCase(true));
      const caseInfo = await db.collection("cases").where("CaseInformationId", "==", data.CaseInformationId).get();
      if(caseInfo.docs.length === 1) await db.collection("CaseInformation-1").doc(data.CaseInformationId).delete();
      const plaintiffInfo = await db.collection("cases").where("PlaintiffInformationId", "==", data.PlaintiffInformationId).get();
      if(plaintiffInfo.docs.length === 1) await db.collection("PlaintiffInformation-2").doc(data.PlaintiffInformationId).delete();
      const defendantInfo = await db.collection("cases").where("DefendantInformationId", "==", data.DefendantInformationId).get();
      if(defendantInfo.docs.length === 1) await db.collection("DefendantInformation-3").doc(data.DefendantInformationId).delete();
      const serveeDD = await db.collection("cases").where("ServeeDocumentedDataId", "==", data.ServeeDocumentedDataId).get();
      if(serveeDD.docs.length === 1) await db.collection("ServeeDocumentedData-4").doc(data.ServeeDocumentedDataId).delete();
      const clearanceOA = await db.collection("cases").where("ClearanceOfActionId", "==", data.ClearanceOfActionId).get();
      if(clearanceOA.docs.length === 1) await db.collection("ClearanceOfAction-5").doc(data.ClearanceOfActionId).delete();
      const serveePD = await db.collection("cases").where("ServeePhysicalDescriptionId", "==", data.ServeePhysicalDescriptionId).get();
      if(serveePD.docs.length === 1) {
        let serveesPDDoc = await db.collection("ServeePhysicalDescription-6").doc(data.ServeePhysicalDescriptionId).get();
        for (const servee of Object.values(serveesPDDoc.data().serveesPhysicalDescription)) {
          if(servee.hasOwnProperty("imagePath")) {
            await deleteMedia(servee.imagePath);
          }
        }
        await db.collection("ServeePhysicalDescription-6").doc(data.ServeePhysicalDescriptionId).delete();
      }
      const vehicleI = await db.collection("cases").where("VehicleInformationId", "==", data.VehicleInformationId).get();
      if(vehicleI.docs.length === 1) await db.collection("VehicleInformation-7").doc(data.VehicleInformationId).delete();
      const offeredS = await db.collection("cases").where("OfferedServicesId", "==", data.OfferedServicesId).get();
      if(offeredS.docs.length === 1) await db.collection("OfferedServices-8").doc(data.OfferedServicesId).delete();
      const filesDoc = await db.collection("cases").where("FileSubmissionId", "==", data.FileSubmissionId).get();
      if(filesDoc.docs.length === 1) {
        let fileSubmissionDoc = await db.collection("FileSubmission-9").doc(data.FileSubmissionId).get();
        await deleteMedia(fileSubmissionDoc.data().documentPath);
        await db.collection("FileSubmission-9").doc(data.FileSubmissionId).delete();
      }
      await db.collection("cases").doc(data.docId).delete();
      onSuccess();
      dispatch({
        type: DELETE_CASE,
        payload: {docId: data.docId}
      });
      showToast("Case has been deleted from the system successfully!", "success");
    } catch (error) {
      onError();
      dispatch(setIsDeletingCase(false));
      showToast(error.message, "error");
      console.error(error)
    }
  }
)

export {
  updateUser,
  createUser,
  deleteUser,
  fetchUsers,
  fetchCases,
  deleteCase,
  getMetadataInfo,
  fetchCaseDetails,
};