import axios from "axios";
import firebase, {
  db,
  uploadMedia,
  deleteMedia,
  uploadBase64Media,
} from "../../firebase";
import { showToast } from "../../utils";
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
  SET_IS_FETCHING_CASE,
  SET_IS_DELETING_CASE,
  UPDATE_CASE_STATUS,
  FETCH_TOS_DOCS,
  ADD_TOS_DOC,
  DELETE_TOS_DOC,
  FETCH_CASE,
  SET_IS_DELETING_TOS_DOC,
  SET_IS_ADDING_TOS_DOC,
  SET_IS_FETCHING_TOS_DOCS,
  SET_IS_FETCHING_METADATA,
  DELETE_USER,
  DELETE_CASE,
  SET_IS_FETCHING_CASE_DETAILS,
  SET_IS_FETCHING_NOTIFICATIONS,
  SET_IS_DELETING_NOTIFICATION,
  MARK_NOTIFICATION_AS_READ,
  MARK_NOTIFICATION_AS_ADDRESSED,
  DELETE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  SET_IS_CREATING_CASE,
  SET_IS_UPDATING_CASE,
  SET_IS_MARKING_NOTIFICATION_ADDRESSED,
  FETCH_USER_ACCOUNT_DETAILS,
  SET_IS_FETCHING_USER_ACCOUNT_DETAILS,
  SET_IS_GENERATING_COVER_SHEETS,
  SET_IS_UPDATING_COVER_SHEET_DATA,
  SET_GENERATED_COVER_SHEETS,
  SET_UPDATED_COVER_SHEET_DATA
} from "../constants";

const setIsUpdatingUser = (status) => {
  return {
    type: SET_IS_UPDATING_USER,
    payload: status,
  };
};

const setIsFetchingUsers = (status) => {
  return {
    type: SET_IS_FETCHING_USERS,
    payload: status,
  };
};

const setIsFetchingCases = (status) => {
  return {
    type: SET_IS_FETCHING_CASES,
    payload: status,
  };
};

const setIsFetchingCase = (status) => {
  return {
    type: SET_IS_FETCHING_CASE,
    payload: status,
  };
};

const setIsFetchingCaseDetails = (status) => {
  return {
    type: SET_IS_FETCHING_CASE_DETAILS,
    payload: status,
  };
};

const setIsDeletingCase = (status) => {
  return {
    type: SET_IS_DELETING_CASE,
    payload: status,
  };
};

const setIsDeletingUser = (status) => {
  return {
    type: SET_IS_DELETING_USER,
    payload: status,
  };
};

const setIsCreatingUser = (status) => {
  return {
    type: SET_IS_CREATING_USER,
    payload: status,
  };
};

const setIsCreatingCase = (status) => {
  return {
    type: SET_IS_CREATING_CASE,
    payload: status,
  };
};

const setIsUpdatingCase = (status) => {
  return {
    type: SET_IS_UPDATING_CASE,
    payload: status,
  };
};

const setIsFetchingMetadata = (status) => {
  return {
    type: SET_IS_FETCHING_METADATA,
    payload: status,
  };
};

const setIsAddingTOSDoc = (status) => {
  return {
    type: SET_IS_ADDING_TOS_DOC,
    payload: status,
  };
};

const setIsFetchingTOSDocs = (status) => {
  return {
    type: SET_IS_FETCHING_TOS_DOCS,
    payload: status,
  };
};

const setIsUpdatingCoverSheetData = (status) => {
  return {
    type: SET_IS_UPDATING_COVER_SHEET_DATA,
    payload: status,
  };
};

const setIsGeneratingCoverSheets = (status) => {
  return {
    type: SET_IS_GENERATING_COVER_SHEETS,
    payload: status,
  };
};

const setIsFetchingNotifications = (status) => {
  return {
    type: SET_IS_FETCHING_NOTIFICATIONS,
    payload: status,
  };
};

const setIsDeletingTOSDoc = (status) => {
  return {
    type: SET_IS_DELETING_TOS_DOC,
    payload: status,
  };
};

const setIsDeletingNotification = (status) => {
  return {
    type: SET_IS_DELETING_NOTIFICATION,
    payload: status,
  };
};

const setIsMarkingNotificationAddressed = (status) => {
  return {
    type: SET_IS_MARKING_NOTIFICATION_ADDRESSED,
    payload: status,
  };
};

const setIsFetchingUserAccountDetails = (status) => {
  return {
    type: SET_IS_FETCHING_USER_ACCOUNT_DETAILS,
    payload: status,
  };
};

const getMetadataInfo = () => (dispatch) => {
  try {
    dispatch(setIsFetchingMetadata(true));
    db.collection("metadatas").onSnapshot((querySnapshot) => {
      const metadata = {};
      querySnapshot.forEach((doc) => {
        metadata[doc.id] = doc.data().count;
      });
      dispatch({
        type: FETCH_METADATA,
        payload: { metadata },
      });
    });
  } catch (error) {
    dispatch(setIsFetchingMetadata(false));
    showToast(error.message, "error");
  }
};

const fetchUsers = (data) => (dispatch) => {
  try {
    dispatch(setIsFetchingUsers(true));
    db.collection("users")
      .where("role", "!=", "superadmin")
      .orderBy("role")
      .orderBy("registeredAt", "desc")
      .startAfter(data.lastVisible)
      .limit(data.limit)
      .get()
      .then((querySnapshot) => {
        let users = [];
        let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        for (const doc of querySnapshot.docs) {
          users.push({ docId: doc.id, ...doc.data() });
        }
        dispatch({
          type: FETCH_USERS,
          payload: { users, lastVisible },
        });
      });
  } catch (error) {
    dispatch(setIsFetchingUsers(false));
    showToast(error.message, "error");
  }
};

const fetchUserAccountDetails =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsFetchingUserAccountDetails(true));
      const querySnapshot = await db.collection("users").doc(data.uid).get();
      dispatch({
        type: FETCH_USER_ACCOUNT_DETAILS,
        payload: {
          ...querySnapshot.data(),
        },
      });
      onSuccess();
    } catch (error) {
      onError();
      dispatch(setIsFetchingUserAccountDetails(false));
      showToast(error.message, "error");
    }
  };

const createUser =
  (data, onSuccess = () => {}, onError = () => {}) =>
  (dispatch) => {
    dispatch(setIsCreatingUser(true));
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        firebase
          .auth()
          .currentUser.sendEmailVerification()
          .then(async () => {
            var user = userCredential.user;
            const batch = db.batch();
            delete data["password"];
            const timestamp = new Date().toISOString();
            const profilePicturePath = `profile_pictures/${user.uid}/${timestamp}${data["profilePicture"].name}`;
            const profilePictureURI = await uploadMedia(
              data["profilePicture"],
              `profile_pictures/${user.uid}/`,
              timestamp
            );
            delete data["profilePicture"];
            batch.set(db.collection("users").doc(user.uid), {
              uid: user.uid,
              ...data,
              profilePictureURI,
              profilePicturePath,
              registeredAt: new Date(),
            });
            batch.set(db.collection("Notifications").doc(), {
              category: "signup",
              addressed: false,
              read: false,
              title: `New member sign up detected, please review ${data.firstName} ${data.middleName} ${data.lastName} for verification`,
              content: {
                name: `${data.firstName} ${data.middleName} ${data.lastName}`,
                email: data.email,
                uid: user.uid,
              },
              generatedAt: new Date(),
            });
            await batch.commit();
            showToast("User created successfully!", "success");
            onSuccess();
            dispatch(setIsCreatingUser(false));
          });
      })
      .catch((error) => {
        onError();
        console.error(error);
        showToast(error.message, "error");
        dispatch(setIsCreatingUser(false));
      });
  };

const updateUser =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsUpdatingUser(true));
      if (data.user.profilePicture) {
        await deleteMedia(data.user.profilePicturePath);
        const timestamp = new Date().toISOString();
        data.user[
          "profilePicturePath"
        ] = `profile_pictures/${data.uid}/${timestamp}${data.user["profilePicture"].name}`;
        data.user["profilePictureURI"] = await uploadMedia(
          data.user["profilePicture"],
          `profile_pictures/${data.uid}/`,
          timestamp
        );
        delete data.user["profilePicture"];
      }
      db.collection("users")
        .doc(data.docId)
        .update({ ...data.user })
        .then(() => {
          onSuccess();
          dispatch({
            type: UPDATE_USER,
            payload: { user: { uid: data.uid, ...data.user } },
          });
          showToast(
            "User has been updated in the system successfully!",
            "success"
          );
        });
    } catch (error) {
      onError();
      dispatch(setIsUpdatingUser(false));
      showToast(error.message, "error");
    }
  };

const updateAccountStatus =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsUpdatingUser(true));
      db.collection("users")
        .doc(data.uid)
        .update({ status: data.status })
        .then(() => {
          onSuccess();
          dispatch({
            type: UPDATE_USER,
            payload: { user: { uid: data.uid, status: data.status } },
          });
          showToast(
            "Account status has been updated in the system successfully!",
            "success"
          );
        });
    } catch (error) {
      onError();
      dispatch(setIsUpdatingUser(false));
      showToast(error.message, "error");
    }
  };

const deleteUser =
  (data, onSuccess = () => {}, onError = () => {}) =>
  (dispatch) => {
    try {
      dispatch(setIsDeletingUser(true));
      db.collection("users")
        .doc(data.docId)
        .delete()
        .then(() => {
          onSuccess();
          dispatch({
            type: DELETE_USER,
            payload: { ...data },
          });
          showToast(
            "User has been deleted from the system successfully!",
            "success"
          );
        });
    } catch (error) {
      onError();
      dispatch(setIsDeletingUser(false));
      showToast(error.message, "error");
    }
  };

const fetchCases = (data) => (dispatch) => {
  try {
    dispatch(setIsFetchingCases(true));
    let query = db.collection("cases").orderBy("filedAt", "desc");
    if (data.lastVisible) query = query.startAfter(data.lastVisible);
    query
      .limit(data.limit)
      .get()
      .then((querySnapshot) => {
        let cases = [];
        let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        for (const doc of querySnapshot.docs) {
          cases.push({ docId: doc.id, ...doc.data() });
        }
        dispatch({
          type: FETCH_CASES,
          payload: { cases, lastVisible },
        });
      });
  } catch (error) {
    dispatch(setIsFetchingCases(false));
    showToast(error.message, "error");
  }
};

const setCase = (caseData) => {
  return {
    type: FETCH_CASE,
    payload: caseData,
  };
};

const fetchCase =
  (data, onSuccess = () => {}, onError = () => {}) =>
  (dispatch) => {
    try {
      dispatch(setIsFetchingCase(true));
      db.collection("cases")
        .doc(data.caseId)
        .get()
        .then((querySnapshot) => {
          const finalData = querySnapshot.data();
          if (finalData) {
            finalData.docId = querySnapshot.id;
            dispatch(setCase(finalData));
            onSuccess(finalData);
          } else {
            dispatch(setIsFetchingCase(false));
            showToast(
              "This case does not exist in the system anymore!",
              "error"
            );
            onError();
          }
        });
    } catch (error) {
      console.error(error);
      dispatch(setIsFetchingCase(false));
      showToast(error.message, "error");
      onError();
    }
  };

const createCase =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsCreatingCase(true));
      let serveesDocumentedDataDocRefs = [];
      const caseInformationDocRef = await db
        .collection("CaseInformation-1")
        .add({ uid: data.uid, ...data["CaseInformation-1"] });
      const plaintiffInformationDocRef = await db
        .collection("PlaintiffInformation-2")
        .add({ uid: data.uid, ...data["PlaintiffInformation-2"] });
      const defendantInformationDocRef = await db
        .collection("DefendantInformation-3")
        .add({ uid: data.uid, ...data["DefendantInformation-3"] });
      const serveesDetail = data["ServeeDocumentedData-4"].serveesDetail;
      delete data["ServeeDocumentedData-4"].serveesDetail;
      for (const servee of Object.values(serveesDetail)) {
        for (const serviceDetail of Object.values(servee.serviceDetails)) {
          const serveeDocumentedDataDocRef = await db
            .collection("ServeeDocumentedData-4")
            .add({
              uid: data.uid,
              ...data["ServeeDocumentedData-4"],
              numberOfCaseFilesBeingServed: 1,
              howManyIndividualsServed: 1,
              serveesDetail: {
                0: { ...servee, serviceDetails: { 0: serviceDetail } },
              },
            });
          serveeDocumentedDataDocRef.serveeName = servee.fullName;
          serveesDocumentedDataDocRefs.push(serveeDocumentedDataDocRef);
        }
      }
      const clearanceOfActionDocRef = await db
        .collection("ClearanceOfAction-5")
        .add({ uid: data.uid, ...data["ClearanceOfAction-5"] });
      for (const key of Object.keys(
        data["ServeePhysicalDescription-6"].serveesPhysicalDescription
      )) {
        const image =
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key]
            .image;
        if (image) {
          const timestamp = new Date().toISOString();
          const imagePath = `servees_pictures/${data.uid}/${timestamp}${image.name}`;
          const imageURI = await uploadBase64Media(
            image,
            `servees_pictures/${data.uid}/`,
            timestamp
          );
          delete data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
            key
          ].image;
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
            key
          ].imageURI = imageURI;
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
            key
          ].imagePath = imagePath;
        }
      }
      const serveePhysicalDescriptionDocRef = await db
        .collection("ServeePhysicalDescription-6")
        .add({ uid: data.uid, ...data["ServeePhysicalDescription-6"] });
      const vehicleInformationDocRef = await db
        .collection("VehicleInformation-7")
        .add({ uid: data.uid, ...data["VehicleInformation-7"] });
      const offeredServicesDocRef = await db
        .collection("OfferedServices-8")
        .add({ uid: data.uid, ...data["OfferedServices-8"] });
      let documentURI;
      let documentPath;
      const notificationsBatch = db.batch();
      if (
        parseInt(data["ServeeDocumentedData-4"].numberOfCaseFilesBeingServed) >
        1
      ) {
        for (const document of data["FileSubmission-9"].documents) {
          const timestamp = new Date().toISOString();
          documentPath = `file_submissions/${data.uid}/${timestamp}${document.file.name}`;
          documentURI = await uploadMedia(
            document.file,
            `file_submissions/${data.uid}/`,
            timestamp
          );
          const fileSubmissionDocRef = await db
            .collection("FileSubmission-9")
            .add({
              uid: data.uid,
              documentURI,
              documentPath,
              fileData: {
                0: {
                  documentName: document.file.name,
                  caseType: document.caseType,
                  fileType: document.fileType,
                  additionalInfo: document.additionalInfo,
                  fileContents: document.fileContents,
                },
              },
              submittedAt: new Date(),
            });
          for (const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
            const caseDocRef = await db.collection("cases").add({
              uid: data.uid,
              filedAt: new Date(),
              userName: data.userName,
              caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
              CaseInformationId: caseInformationDocRef.id,
              PlaintiffInformationId: plaintiffInformationDocRef.id,
              DefendantInformationId: defendantInformationDocRef.id,
              ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
              ClearanceOfActionId: clearanceOfActionDocRef.id,
              ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
              VehicleInformationId: vehicleInformationDocRef.id,
              OfferedServicesId: offeredServicesDocRef.id,
              FileSubmissionId: fileSubmissionDocRef.id,
              status: "pending",
              amount: "",
            });
            notificationsBatch.set(db.collection("Notifications").doc(), {
              category: "case_submission",
              addressed: false,
              read: false,
              content: {
                uid: data.uid,
                userName: data.userName,
                caseId: caseDocRef.id,
                caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
              },
              title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`,
              generatedAt: new Date(),
            });
            await db
              .collection("cases")
              .doc(caseDocRef.id)
              .update({
                searchString: `${serveeDocumentedDataDocRef.serveeName} ${
                  data["CaseInformation-1"].caseTitle
                } ${Object.values(
                  data["PlaintiffInformation-2"].plaintiffsDetail
                )
                  .map(
                    (p) =>
                      `${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`
                  )
                  .join(" ")} ${Object.values(
                  data["DefendantInformation-3"].defendantsDetail
                )
                  .map(
                    (d) =>
                      `${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`
                  )
                  .join(" ")} ${Object.values(
                  data["PlaintiffInformation-2"].plaintiffAttorneysDetail
                )
                  .map(
                    (pa) =>
                      `${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`
                  )
                  .join(" ")} ${
                  data["CaseInformation-1"].courthouseAddress.street
                } ${data["CaseInformation-1"].courthouseAddress.unit} ${
                  data["CaseInformation-1"].courthouseAddress.city
                } ${
                  data["CaseInformation-1"].courthouseAddress.state.us ===
                  "other"
                    ? data["CaseInformation-1"].courthouseAddress.state.other
                    : data["CaseInformation-1"].courthouseAddress.state.us
                } ${data["CaseInformation-1"].courthouseAddress.zipCode} ${
                  data["CaseInformation-1"].courthouseAddress.country
                } ${
                  data["CaseInformation-1"].courthouseMailingAddress.street
                } ${data["CaseInformation-1"].courthouseMailingAddress.unit} ${
                  data["CaseInformation-1"].courthouseMailingAddress.city
                } ${
                  data["CaseInformation-1"].courthouseMailingAddress.state
                    .us === "other"
                    ? data["CaseInformation-1"].courthouseMailingAddress.state
                        .other
                    : data["CaseInformation-1"].courthouseMailingAddress.state
                        .us
                } ${
                  data["CaseInformation-1"].courthouseMailingAddress.zipCode
                } ${
                  data["CaseInformation-1"].courthouseMailingAddress.country
                } ${Object.values(
                  data["PlaintiffInformation-2"].plaintiffsDetail
                )
                  .map(
                    (p) =>
                      `${p.address.street} ${p.address.unit} ${
                        p.address.city
                      } ${
                        p.address.state.us === "other"
                          ? p.address.state.other
                          : p.address.state.us
                      } ${p.address.zipCode} ${p.address.country}`
                  )
                  .join(" ")} ${Object.values(
                  data["DefendantInformation-3"].defendantsDetail
                )
                  .map(
                    (d) =>
                      `${d.address.street} ${d.address.unit} ${
                        d.address.city
                      } ${
                        d.address.state.us === "other"
                          ? d.address.state.other
                          : d.address.state.us
                      } ${d.address.zipCode} ${d.address.country}`
                  )
                  .join(" ")} ${
                  data["OfferedServices-8"].zipFilingAddress.street
                } ${data["OfferedServices-8"].zipFilingAddress.unit} ${
                  data["OfferedServices-8"].zipFilingAddress.city
                } ${
                  data["OfferedServices-8"].zipFilingAddress.state.us ===
                  "other"
                    ? data["OfferedServices-8"].zipFilingAddress.state.other
                    : data["OfferedServices-8"].zipFilingAddress.state.us
                } ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${
                  data["OfferedServices-8"].zipFilingAddress.country
                } ${
                  data["CaseInformation-1"].countyOf
                } ${new Date().toDateString()} ${
                  data["CaseInformation-1"].caseNumber
                } TPG${caseDocRef.id}`,
              });
          }
        }
      } else {
        const document = data["FileSubmission-9"].documents[0];
        const timestamp = new Date().toISOString();
        documentPath = `file_submissions/${data.uid}/${timestamp}${document.file.name}`;
        documentURI = await uploadMedia(
          document.file,
          `file_submissions/${data.uid}/`,
          timestamp
        );
        const fileSubmissionDocRef = await db
          .collection("FileSubmission-9")
          .add({
            uid: data.uid,
            documentURI,
            documentPath,
            fileData: {
              0: {
                documentName: document.file.name,
                caseType: document.caseType,
                fileType: document.fileType,
                additionalInfo: document.additionalInfo,
                fileContents: document.fileContents,
              },
            },
            submittedAt: new Date(),
          });
        for (const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
          const caseDocRef = await db.collection("cases").add({
            uid: data.uid,
            filedAt: new Date(),
            userName: data.userName,
            caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
            CaseInformationId: caseInformationDocRef.id,
            PlaintiffInformationId: plaintiffInformationDocRef.id,
            DefendantInformationId: defendantInformationDocRef.id,
            ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
            ClearanceOfActionId: clearanceOfActionDocRef.id,
            ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
            VehicleInformationId: vehicleInformationDocRef.id,
            OfferedServicesId: offeredServicesDocRef.id,
            FileSubmissionId: fileSubmissionDocRef.id,
            status: "pending",
            amount: "",
          });
          notificationsBatch.set(db.collection("Notifications").doc(), {
            category: "case_submission",
            addressed: false,
            read: false,
            content: {
              uid: data.uid,
              userName: data.userName,
              caseId: caseDocRef.id,
              caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
            },
            title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`,
            generatedAt: new Date(),
          });
          await db
            .collection("cases")
            .doc(caseDocRef.id)
            .update({
              searchString: `${serveeDocumentedDataDocRef.serveeName} ${
                data["CaseInformation-1"].caseTitle
              } ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail)
                .map(
                  (p) =>
                    `${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`
                )
                .join(" ")} ${Object.values(
                data["DefendantInformation-3"].defendantsDetail
              )
                .map(
                  (d) =>
                    `${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`
                )
                .join(" ")} ${Object.values(
                data["PlaintiffInformation-2"].plaintiffAttorneysDetail
              )
                .map(
                  (pa) =>
                    `${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`
                )
                .join(" ")} ${
                data["CaseInformation-1"].courthouseAddress.street
              } ${data["CaseInformation-1"].courthouseAddress.unit} ${
                data["CaseInformation-1"].courthouseAddress.city
              } ${
                data["CaseInformation-1"].courthouseAddress.state.us === "other"
                  ? data["CaseInformation-1"].courthouseAddress.state.other
                  : data["CaseInformation-1"].courthouseAddress.state.us
              } ${data["CaseInformation-1"].courthouseAddress.zipCode} ${
                data["CaseInformation-1"].courthouseAddress.country
              } ${data["CaseInformation-1"].courthouseMailingAddress.street} ${
                data["CaseInformation-1"].courthouseMailingAddress.unit
              } ${data["CaseInformation-1"].courthouseMailingAddress.city} ${
                data["CaseInformation-1"].courthouseMailingAddress.state.us ===
                "other"
                  ? data["CaseInformation-1"].courthouseMailingAddress.state
                      .other
                  : data["CaseInformation-1"].courthouseMailingAddress.state.us
              } ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${
                data["CaseInformation-1"].courthouseMailingAddress.country
              } ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail)
                .map(
                  (p) =>
                    `${p.address.street} ${p.address.unit} ${p.address.city} ${
                      p.address.state.us === "other"
                        ? p.address.state.other
                        : p.address.state.us
                    } ${p.address.zipCode} ${p.address.country}`
                )
                .join(" ")} ${Object.values(
                data["DefendantInformation-3"].defendantsDetail
              )
                .map(
                  (d) =>
                    `${d.address.street} ${d.address.unit} ${d.address.city} ${
                      d.address.state.us === "other"
                        ? d.address.state.other
                        : d.address.state.us
                    } ${d.address.zipCode} ${d.address.country}`
                )
                .join(" ")} ${
                data["OfferedServices-8"].zipFilingAddress.street
              } ${data["OfferedServices-8"].zipFilingAddress.unit} ${
                data["OfferedServices-8"].zipFilingAddress.city
              } ${
                data["OfferedServices-8"].zipFilingAddress.state.us === "other"
                  ? data["OfferedServices-8"].zipFilingAddress.state.other
                  : data["OfferedServices-8"].zipFilingAddress.state.us
              } ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${
                data["OfferedServices-8"].zipFilingAddress.country
              } ${
                data["CaseInformation-1"].countyOf
              } ${new Date().toDateString()} ${
                data["CaseInformation-1"].caseNumber
              } TPG${caseDocRef.id}`,
            });
        }
      }
      await notificationsBatch.commit();
      showToast("Case submitted successfully!", "success");
      dispatch(setIsCreatingCase(false));
      onSuccess();
    } catch (error) {
      onError();
      console.error(error);
      dispatch(setIsCreatingCase(false));
      showToast(error.message, "error");
    }
  };

const fetchCaseDetails =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsFetchingCaseDetails(true));
      let caseData = {};
      let subQuerySnapshot = {};
      subQuerySnapshot = await db
        .collection("CaseInformation-1")
        .doc(data.CaseInformationId)
        .get();
      caseData["CaseInformation"] = {
        docId: subQuerySnapshot.id,
        payment: data?.payment,
        status: data.status,
        amount: data?.amount,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("PlaintiffInformation-2")
        .doc(data.PlaintiffInformationId)
        .get();
      caseData["PlaintiffInformation"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("DefendantInformation-3")
        .doc(data.DefendantInformationId)
        .get();
      caseData["DefendantInformation"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("ServeeDocumentedData-4")
        .doc(data.ServeeDocumentedDataId)
        .get();
      caseData["ServeeDocumentedData"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("ClearanceOfAction-5")
        .doc(data.ClearanceOfActionId)
        .get();
      caseData["ClearanceOfAction"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("ServeePhysicalDescription-6")
        .doc(data.ServeePhysicalDescriptionId)
        .get();
      caseData["ServeePhysicalDescription"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("VehicleInformation-7")
        .doc(data.VehicleInformationId)
        .get();
      caseData["VehicleInformation"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("OfferedServices-8")
        .doc(data.OfferedServicesId)
        .get();
      caseData["OfferedServices"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      subQuerySnapshot = await db
        .collection("FileSubmission-9")
        .doc(data.FileSubmissionId)
        .get();
      caseData["FileSubmission"] = {
        docId: subQuerySnapshot.id,
        ...subQuerySnapshot.data(),
      };
      dispatch({
        type: FETCH_CASE_DETAILS,
        payload: {
          caseId: data.docId,
          ...caseData,
        },
      });
      onSuccess();
    } catch (error) {
      onError();
      dispatch(setIsFetchingCaseDetails(false));
      showToast(error.message, "error");
    }
  };

const updateCaseStatus =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsUpdatingCase(true));
      const dataToUpdate = { status: data.status };
      if (data?.amount) {
        dataToUpdate.amount = data.amount;
        dataToUpdate.payment = { status: "awaiting" };
      }
      await db.collection("cases").doc(data.caseId).update(dataToUpdate);
      if (data.status.toLowerCase() === "cancelled") {
        db.collection("Notifications").add({
          category: "case_cancellation",
          addressed: false,
          read: false,
          title: `Case ${data.caseId} for ${data.userName} canceled by ${data.adminName}`,
          content: {
            caseId: data.caseId,
            caseTitle: data.caseTitle,
            aid: data.aid,
            userName: data.userName,
            adminName: data.adminName,
          },
          generatedAt: new Date(),
        });
      }
      dispatch({
        type: UPDATE_CASE_STATUS,
        payload: data,
      });
      showToast(
        "Case status has been updated in the system successfully!",
        "success"
      );
      onSuccess();
    } catch (error) {
      dispatch(setIsUpdatingCase(false));
      showToast(error.message, "error");
      console.error(error);
      onError();
    }
  };

const updateCase =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsUpdatingCase(true));
      const serveesDocumentedDataDocRefs = [];
      if (data.hasOwnProperty("CaseInformation-1")) {
        if (
          data["CaseInformation-1"]?.caseTitle ||
          data["CaseInformation-1"]?.status ||
          data["CaseInformation-1"]?.amount
        ) {
          const caseDataToUpdate = {};
          if (data["CaseInformation-1"]?.caseTitle)
            caseDataToUpdate.caseTitle = data["CaseInformation-1"].caseTitle;
          if (data["CaseInformation-1"]?.status)
            caseDataToUpdate.status = data["CaseInformation-1"].status;
          if (data["CaseInformation-1"]?.amount)
            caseDataToUpdate.amount = data["CaseInformation-1"].amount;
          await db
            .collection("cases")
            .doc(data.caseId)
            .update(caseDataToUpdate);
          if (
            data["CaseInformation-1"]?.status &&
            data["CaseInformation-1"].status.toLowerCase() === "cancelled"
          ) {
            db.collection("Notifications").add({
              category: "case_cancellation",
              addressed: false,
              read: false,
              title: `Case ${data.caseId} for ${data.userName} canceled by ${data.adminName}`,
              content: {
                caseId: data.caseId,
                caseTitle: data.caseTitle,
                aid: data.aid,
                userName: data.userName,
                adminName: data.adminName,
              },
              generatedAt: new Date(),
            });
          }
          dispatch({
            type: UPDATE_CASE_STATUS,
            payload: { caseId: data.caseId, ...caseDataToUpdate },
          });
          if (data["CaseInformation-1"]?.caseTitle)
            delete data["CaseInformation-1"].caseTitle;
          if (data["CaseInformation-1"]?.status)
            delete data["CaseInformation-1"].status;
          if (data["CaseInformation-1"]?.amount)
            delete data["CaseInformation-1"].amount;
        }
        if (Object.keys(data["CaseInformation-1"]).length) {
          await db
            .collection("CaseInformation-1")
            .doc(data["CaseInformation-1"].docId)
            .update({ ...data["CaseInformation-1"] });
        }
      }
      if (data.hasOwnProperty("PlaintiffInformation-2")) {
        await db
          .collection("PlaintiffInformation-2")
          .doc(data["PlaintiffInformation-2"].docId)
          .update({ ...data["PlaintiffInformation-2"] });
      }
      if (data.hasOwnProperty("DefendantInformation-3")) {
        await db
          .collection("DefendantInformation-3")
          .doc(data["DefendantInformation-3"].docId)
          .update({ ...data["DefendantInformation-3"] });
      }
      if (data.hasOwnProperty("ServeeDocumentedData-4")) {
        const serveesDetail = data["ServeeDocumentedData-4"].serveesDetail;
        delete data["ServeeDocumentedData-4"].serveesDetail;
        for (const servee of Object.values(serveesDetail)) {
          for (const serviceDetail of Object.values(servee.serviceDetails)) {
            if (servee?.isNew) {
              delete servee.isNew;
              const serveeDocumentedDataDocRef = await db
                .collection("ServeeDocumentedData-4")
                .add({
                  uid: data.uid,
                  ...data["ServeeDocumentedData-4"],
                  numberOfCaseFilesBeingServed: 1,
                  howManyIndividualsServed: 1,
                  serveesDetail: {
                    0: { ...servee, serviceDetails: { 0: serviceDetail } },
                  },
                });
              serveeDocumentedDataDocRef.serveeName = servee.fullName;
              serveesDocumentedDataDocRefs.push(serveeDocumentedDataDocRef);
            } else {
              await db
                .collection("ServeeDocumentedData-4")
                .doc(data["ServeeDocumentedData-4"].docId)
                .update({
                  ...data["ServeeDocumentedData-4"],
                  serveesDetail: {
                    0: { ...servee, serviceDetails: { 0: serviceDetail } },
                  },
                });
            }
          }
        }
      }
      if (data.hasOwnProperty("ClearanceOfAction-5")) {
        await db
          .collection("ClearanceOfAction-5")
          .doc(data["ClearanceOfAction-5"].docId)
          .update({ ...data["ClearanceOfAction-5"] });
      }
      if (data.hasOwnProperty("ServeePhysicalDescription-6")) {
        for (const key of Object.keys(
          data["ServeePhysicalDescription-6"].serveesPhysicalDescription
        )) {
          if (
            data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
              key
            ].hasOwnProperty("oldImagePath")
          ) {
            await deleteMedia(
              data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
                key
              ].oldImagePath
            );
          }
          const image =
            data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key]
              ?.image;
          if (image) {
            const timestamp = new Date().getMilliseconds();
            const imagePath = `servees_pictures/${data.uid}/${timestamp}${image.name}`;
            const imageURI = await uploadBase64Media(
              image,
              `servees_pictures/${data.uid}/`,
              timestamp
            );
            delete data["ServeePhysicalDescription-6"]
              .serveesPhysicalDescription[key].image;
            data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
              key
            ].imageURI = imageURI;
            data["ServeePhysicalDescription-6"].serveesPhysicalDescription[
              key
            ].imagePath = imagePath;
          }
        }
        await db
          .collection("ServeePhysicalDescription-6")
          .doc(data["ServeePhysicalDescription-6"].docId)
          .update({ ...data["ServeePhysicalDescription-6"] });
      }
      if (data.hasOwnProperty("VehicleInformation-7")) {
        await db
          .collection("VehicleInformation-7")
          .doc(data["VehicleInformation-7"].docId)
          .update({ ...data["VehicleInformation-7"] });
      }
      if (data.hasOwnProperty("OfferedServices-8")) {
        await db
          .collection("OfferedServices-8")
          .doc(data["OfferedServices-8"].docId)
          .update({ ...data["OfferedServices-8"] });
      }
      let documentURI;
      let documentPath;
      let docsUpdated = false;
      const notificationsBatch = db.batch();
      if (
        data.hasOwnProperty("ServeeDocumentedData-4") &&
        data["ServeeDocumentedData-4"].hasOwnProperty(
          "numberOfCaseFilesBeingServed"
        ) &&
        data.hasOwnProperty("FileSubmission-9")
      ) {
        if (data["FileSubmission-9"].hasOwnProperty("oldDocumentPath"))
          await deleteMedia(data["FileSubmission-9"].oldDocumentPath);
        for (const document of data["FileSubmission-9"].documents) {
          if (!docsUpdated) docsUpdated = true;
          if (document?.isNew) {
            delete document.isNew;
            const timestamp = new Date().getMilliseconds();
            const fileName = document.file.name.trim().replaceAll(" ", "");
            documentPath = `file_submissions/${data.uid}/${timestamp}${fileName}`;
            documentURI = await uploadMedia(
              document.file,
              `file_submissions/${data.uid}/`,
              timestamp
            );
            const fileSubmissionDocRef = await db
              .collection("FileSubmission-9")
              .add({
                uid: data.uid,
                documentURI,
                documentPath,
                fileData: {
                  0: {
                    documentName: document.file.name,
                    caseType: document.caseType,
                    additionalInfo: document.additionalInfo,
                    fileContents: document.fileContents,
                  },
                },
                submittedAt: new Date(),
              });
            const oldCaseData = await db
              .collection("cases")
              .doc(data.caseId)
              .get();
            const newCaseRef = await db.collection("cases").add({
              uid: data.uid,
              filedAt: new Date(),
              userName: data.userName,
              caseTitle: oldCaseData.caseTitle,
              CaseInformationId: oldCaseData.CaseInformationId,
              PlaintiffInformationId: oldCaseData.PlaintiffInformationId,
              DefendantInformationId: oldCaseData.DefendantInformationId,
              ServeeDocumentedDataId: oldCaseData.ServeeDocumentedDataId,
              ClearanceOfActionId: oldCaseData.ClearanceOfActionId,
              ServeePhysicalDescriptionId:
                oldCaseData.ServeePhysicalDescriptionId,
              VehicleInformationId: oldCaseData.VehicleInformationId,
              OfferedServicesId: oldCaseData.OfferedServicesId,
              FileSubmissionId: fileSubmissionDocRef.id,
              searchString: oldCaseData.searchString,
              status: "pending",
              amount: "",
            });
            notificationsBatch.set(db.collection("Notifications").doc(), {
              category: "case_submission",
              addressed: false,
              read: false,
              content: {
                uid: data.uid,
                userName: data.userName,
                caseId: newCaseRef.id,
                caseTitle: oldCaseData.caseTitle,
              },
              title: `New case ${newCaseRef.id} submission from ${data.userName}, please review for approval`,
              generatedAt: new Date(),
            });
          } else {
            if (document?.file) {
              const timestamp = new Date().getMilliseconds();
              const fileName = document.file.name.trim().replaceAll(" ", "");
              documentPath = `file_submissions/${data.uid}/${timestamp}${fileName}`;
              documentURI = await uploadMedia(
                document.file,
                `file_submissions/${data.uid}/`,
                timestamp
              );
              await db
                .collection("FileSubmission-9")
                .doc(data["FileSubmission-9"].docId)
                .update({
                  documentURI,
                  documentPath,
                  fileData: {
                    0: {
                      documentName: document.file.name,
                      caseType: document.caseType,
                      fileType: document.fileType,
                      additionalInfo: document.additionalInfo,
                      fileContents: document.fileContents,
                    },
                  },
                  updatedAt: new Date(),
                });
            } else {
              await db
                .collection("FileSubmission-9")
                .doc(data["FileSubmission-9"].docId)
                .update({
                  fileData: {
                    0: {
                      documentName: document.documentName,
                      caseType: document.caseType,
                      fileType: document.fileType,
                      additionalInfo: document.additionalInfo,
                      fileContents: document.fileContents,
                    },
                  },
                  updatedAt: new Date(),
                });
            }
            // await db.collection("cases").doc(data.caseId).update({searchString: `${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.unit} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state.us === "other" ? data["CaseInformation-1"].courthouseAddress.state.other : data["CaseInformation-1"].courthouseAddress.state.us} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.unit} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state.us === "other" ? data["CaseInformation-1"].courthouseMailingAddress.state.other : data["CaseInformation-1"].courthouseMailingAddress.state.us} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.unit} ${p.address.city} ${p.address.state.us === "other" ? p.address.state.other : p.address.state.us} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.unit} ${d.address.city} ${d.address.state.us === "other" ? d.address.state.other : d.address.state.us} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].zipFilingAddress.street} ${data["OfferedServices-8"].zipFilingAddress.unit} ${data["OfferedServices-8"].zipFilingAddress.city} ${data["OfferedServices-8"].zipFilingAddress.state.us === "other" ? data["OfferedServices-8"].zipFilingAddress.state.other : data["OfferedServices-8"].zipFilingAddress.state.us} ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${data["OfferedServices-8"].zipFilingAddress.country} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
          }
        }
      } else if (serveesDocumentedDataDocRefs.length > 0) {
        for (const sDDDR of serveesDocumentedDataDocRefs) {
          const oldCaseData = await db
            .collection("cases")
            .doc(data.caseId)
            .get();
          const newCaseRef = await db.collection("cases").add({
            uid: data.uid,
            filedAt: new Date(),
            userName: data.userName,
            caseTitle: `${sDDDR.serveeName} ${oldCaseData.caseTitle}`,
            CaseInformationId: oldCaseData.CaseInformationId,
            PlaintiffInformationId: oldCaseData.PlaintiffInformationId,
            DefendantInformationId: oldCaseData.DefendantInformationId,
            ServeeDocumentedDataId: sDDDR.id,
            ClearanceOfActionId: oldCaseData.ClearanceOfActionId,
            ServeePhysicalDescriptionId:
              oldCaseData.ServeePhysicalDescriptionId,
            VehicleInformationId: oldCaseData.VehicleInformationId,
            OfferedServicesId: oldCaseData.OfferedServicesId,
            FileSubmissionId: oldCaseData.FileSubmissionId,
            searchString: oldCaseData.searchString,
            status: "pending",
            amount: "",
          });
          notificationsBatch.set(db.collection("Notifications").doc(), {
            category: "case_submission",
            addressed: false,
            read: false,
            content: {
              uid: data.uid,
              userName: data.userName,
              caseId: newCaseRef.id,
              caseTitle: `${sDDDR.serveeName} ${oldCaseData.caseTitle}`,
            },
            title: `New case ${newCaseRef.id} submission from ${data.userName}, please review for approval`,
            generatedAt: new Date(),
          });
        }
      }
      if (data.hasOwnProperty("FileSubmission-9") && !docsUpdated) {
        if (data["FileSubmission-9"].hasOwnProperty("oldDocumentPath"))
          await deleteMedia(data["FileSubmission-9"].oldDocumentPath);
        for (const document of data["FileSubmission-9"].documents) {
          if (document?.file) {
            const timestamp = new Date().getMilliseconds();
            const fileName = document.file.name.trim().replaceAll(" ", "");
            documentPath = `file_submissions/${data.uid}/${timestamp}${fileName}`;
            documentURI = await uploadMedia(
              document.file,
              `file_submissions/${data.uid}/`,
              timestamp
            );
            await db
              .collection("FileSubmission-9")
              .doc(data["FileSubmission-9"].docId)
              .update({
                documentURI,
                documentPath,
                fileData: {
                  0: {
                    documentName: document.file.name,
                    caseType: document.caseType,
                    fileType: document.fileType,
                    additionalInfo: document.additionalInfo,
                    fileContents: document.fileContents,
                  },
                },
                updatedAt: new Date(),
              });
          } else {
            await db
              .collection("FileSubmission-9")
              .doc(data["FileSubmission-9"].docId)
              .update({
                fileData: {
                  0: {
                    documentName: document.documentName,
                    caseType: document.caseType,
                    fileType: document.fileType,
                    additionalInfo: document.additionalInfo,
                    fileContents: document.fileContents,
                  },
                },
                updatedAt: new Date(),
              });
          }
          // await db.collection("cases").doc(data.caseId).update({searchString: `${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.unit} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state.us === "other" ? data["CaseInformation-1"].courthouseAddress.state.other : data["CaseInformation-1"].courthouseAddress.state.us} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.unit} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state.us === "other" ? data["CaseInformation-1"].courthouseMailingAddress.state.other : data["CaseInformation-1"].courthouseMailingAddress.state.us} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.unit} ${p.address.city} ${p.address.state.us === "other" ? p.address.state.other : p.address.state.us} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.unit} ${d.address.city} ${d.address.state.us === "other" ? d.address.state.other : d.address.state.us} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].zipFilingAddress.street} ${data["OfferedServices-8"].zipFilingAddress.unit} ${data["OfferedServices-8"].zipFilingAddress.city} ${data["OfferedServices-8"].zipFilingAddress.state.us === "other" ? data["OfferedServices-8"].zipFilingAddress.state.other : data["OfferedServices-8"].zipFilingAddress.state.us} ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${data["OfferedServices-8"].zipFilingAddress.country} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
        }
      }
      showToast("Case updated successfully!", "success");
      dispatch(setIsUpdatingCase(false));
      onSuccess();
    } catch (error) {
      onError();
      console.error(error.message);
      dispatch(setIsUpdatingCase(false));
      showToast(error.message, "error");
    }
  };

const deleteCase =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsDeletingCase(true));
      const caseInfo = await db
        .collection("cases")
        .where("CaseInformationId", "==", data.CaseInformationId)
        .get();
      if (caseInfo.docs.length === 1)
        await db
          .collection("CaseInformation-1")
          .doc(data.CaseInformationId)
          .delete();
      const plaintiffInfo = await db
        .collection("cases")
        .where("PlaintiffInformationId", "==", data.PlaintiffInformationId)
        .get();
      if (plaintiffInfo.docs.length === 1)
        await db
          .collection("PlaintiffInformation-2")
          .doc(data.PlaintiffInformationId)
          .delete();
      const defendantInfo = await db
        .collection("cases")
        .where("DefendantInformationId", "==", data.DefendantInformationId)
        .get();
      if (defendantInfo.docs.length === 1)
        await db
          .collection("DefendantInformation-3")
          .doc(data.DefendantInformationId)
          .delete();
      const serveeDD = await db
        .collection("cases")
        .where("ServeeDocumentedDataId", "==", data.ServeeDocumentedDataId)
        .get();
      if (serveeDD.docs.length === 1)
        await db
          .collection("ServeeDocumentedData-4")
          .doc(data.ServeeDocumentedDataId)
          .delete();
      const clearanceOA = await db
        .collection("cases")
        .where("ClearanceOfActionId", "==", data.ClearanceOfActionId)
        .get();
      if (clearanceOA.docs.length === 1)
        await db
          .collection("ClearanceOfAction-5")
          .doc(data.ClearanceOfActionId)
          .delete();
      const serveePD = await db
        .collection("cases")
        .where(
          "ServeePhysicalDescriptionId",
          "==",
          data.ServeePhysicalDescriptionId
        )
        .get();
      if (serveePD.docs.length === 1) {
        let serveesPDDoc = await db
          .collection("ServeePhysicalDescription-6")
          .doc(data.ServeePhysicalDescriptionId)
          .get();
        for (const servee of Object.values(
          serveesPDDoc.data().serveesPhysicalDescription
        )) {
          if (servee.hasOwnProperty("imagePath")) {
            await deleteMedia(servee.imagePath);
          }
        }
        await db
          .collection("ServeePhysicalDescription-6")
          .doc(data.ServeePhysicalDescriptionId)
          .delete();
      }
      const vehicleI = await db
        .collection("cases")
        .where("VehicleInformationId", "==", data.VehicleInformationId)
        .get();
      if (vehicleI.docs.length === 1)
        await db
          .collection("VehicleInformation-7")
          .doc(data.VehicleInformationId)
          .delete();
      const offeredS = await db
        .collection("cases")
        .where("OfferedServicesId", "==", data.OfferedServicesId)
        .get();
      if (offeredS.docs.length === 1)
        await db
          .collection("OfferedServices-8")
          .doc(data.OfferedServicesId)
          .delete();
      const filesDoc = await db
        .collection("cases")
        .where("FileSubmissionId", "==", data.FileSubmissionId)
        .get();
      if (filesDoc.docs.length === 1) {
        let fileSubmissionDoc = await db
          .collection("FileSubmission-9")
          .doc(data.FileSubmissionId)
          .get();
        await deleteMedia(fileSubmissionDoc.data().documentPath);
        await db
          .collection("FileSubmission-9")
          .doc(data.FileSubmissionId)
          .delete();
      }
      await db.collection("cases").doc(data.docId).delete();
      onSuccess();
      dispatch({
        type: DELETE_CASE,
        payload: { docId: data.docId },
      });
      showToast(
        "Case has been deleted from the system successfully!",
        "success"
      );
    } catch (error) {
      onError();
      dispatch(setIsDeletingCase(false));
      showToast(error.message, "error");
      console.error(error);
    }
  };

const fetchNotifications = (data) => (dispatch) => {
  try {
    dispatch(setIsFetchingNotifications(true));
    let query = db.collection("Notifications").orderBy("generatedAt", "desc");
    if (data.lastVisible) query = query.startAfter(data.lastVisible);
    query
      .limit(data.limit)
      .get()
      .then((querySnapshot) => {
        let notifications = [];
        let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        for (const doc of querySnapshot.docs) {
          notifications.push({ docId: doc.id, ...doc.data() });
        }
        dispatch({
          type: FETCH_NOTIFICATIONS,
          payload: { notifications, lastVisible },
        });
      });
  } catch (error) {
    dispatch(setIsFetchingNotifications(false));
    showToast(error.message, "error");
  }
};

const markNotificationAsRead =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      await db
        .collection("Notifications")
        .doc(data.docId)
        .update({ read: true });
      dispatch({
        type: MARK_NOTIFICATION_AS_READ,
        payload: { docId: data.docId },
      });
      onSuccess();
    } catch (error) {
      onError();
      showToast(error.message, "error");
      console.error(error);
    }
  };

const markNotificationAsAddressed =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsMarkingNotificationAddressed(true));
      await db
        .collection("Notifications")
        .doc(data.docId)
        .update({ addressed: data.addressed });
      dispatch({
        type: MARK_NOTIFICATION_AS_ADDRESSED,
        payload: { docId: data.docId, addressed: data.addressed },
      });
      onSuccess();
    } catch (error) {
      onError();
      dispatch(setIsMarkingNotificationAddressed(false));
      showToast(error.message, "error");
      console.error(error);
    }
  };

const deleteNotification =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsDeletingNotification(true));
      await db.collection("Notifications").doc(data.docId).delete();
      dispatch({
        type: DELETE_NOTIFICATION,
        payload: { docId: data.docId },
      });
      onSuccess();
      showToast("Notification deleted successfully", "success");
    } catch (error) {
      onError();
      dispatch(setIsDeletingNotification(false));
      showToast(error.message, "error");
      console.error(error);
    }
  };

const fetchTOSDocs = (data) => (dispatch) => {
  try {
    dispatch(setIsFetchingTOSDocs(true));
    let query = db.collection("TOSAgreements").orderBy("createdAt", "desc");
    if (data.lastVisible) query = query.startAfter(data.lastVisible);
    query
      .limit(data.limit)
      .get()
      .then((querySnapshot) => {
        let tosDocs = [];
        let lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        for (const doc of querySnapshot.docs) {
          tosDocs.push({ docId: doc.id, ...doc.data() });
        }
        dispatch({
          type: FETCH_TOS_DOCS,
          payload: { tosDocs, lastVisible },
        });
      });
  } catch (error) {
    dispatch(setIsFetchingTOSDocs(false));
    showToast(error.message, "error");
  }
};

const updateCoverSheetData = (data) => async (dispatch) => {
  try {
    dispatch(setIsUpdatingCoverSheetData(true));
    await db
      .collection("cases")
      .doc(data.caseId)
      .update({ coverSheetData: data.coverSheetData });
    dispatch({
      type: SET_UPDATED_COVER_SHEET_DATA,
      payload: {
        caseId: data.caseId,
        coverSheetData: data.coverSheetData
      }
    });
  } catch (error) {
    dispatch(setIsUpdatingCoverSheetData(false));
    showToast(error.message, "error");
  }
};

const generateCoverSheets = (data, onSuccess=()=>{}, onError=()=>{}) => async (dispatch) => {
  try {
    dispatch(setIsGeneratingCoverSheets(true));
    if (data?.coverSheetDocs?.path) {
      Object.values(data.coverSheetDocs.path).forEach(async (path) => {
        await deleteMedia(path);
      });
    }
    let response = await axios.post("https://tpg-pdf-generator.herokuapp.com/generate-pdf", {
      uid: data.uid,
      coverSheetData: data.coverSheetData
    });
    response = response.data;
    const coverSheetDocs = {
      path: { admin: response.aCSPath, user: response.uCSPath },
      URI: { admin: response.aCSURI, user: response.uCSURI }
    };
    await db
      .collection("cases")
      .doc(data.caseId)
      .update({ coverSheetDocs });
    dispatch({
      type: SET_GENERATED_COVER_SHEETS,
      payload: {
        caseId: data.caseId,
        coverSheetDocs
      }
    });
    onSuccess();
    showToast("Generated cover sheets successfully!", "success");
  } catch (error) {
    console.log(error);
    dispatch(setIsGeneratingCoverSheets(false));
    onError();
    showToast(error.message, "error");
  }
};

const addNewTOSDocument =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsAddingTOSDoc(true));
      const timestamp = new Date().toISOString();
      const documentPath = `tos_agreements/${data.uid}/${timestamp}${data.tosDocument.name}`;
      const documentURI = await uploadMedia(
        data.tosDocument,
        `tos_agreements/${data.uid}/`,
        timestamp
      );
      delete data.tosDocument;
      const querySnapshot = await db
        .collection("TOSAgreements")
        .orderBy("createdAt", "desc")
        .limit(1)
        .get();
      querySnapshot.forEach(async (doc) => {
        await db
          .collection("TOSAgreements")
          .doc(doc.id)
          .update({ status: "inactive" });
      });
      const tosDocRef = await db.collection("TOSAgreements").add({
        ...data,
        documentPath,
        documentURI,
        status: "active",
        createdAt: new Date(),
      });
      const usersBatch = db.batch();
      const users = await db.collection("users").get();
      users.forEach((doc) => {
        if (doc.data().role.toLowerCase() === "user")
          usersBatch.update(doc.ref, { hasAgreedToTOS: false });
      });
      usersBatch.commit();
      const tosDoc = await db
        .collection("TOSAgreements")
        .doc(tosDocRef.id)
        .get();
      dispatch({
        type: ADD_TOS_DOC,
        payload: { docId: tosDocRef.id, ...tosDoc.data() },
      });
      onSuccess();
      showToast("Terms of service document added successfully", "success");
    } catch (error) {
      onError();
      dispatch(setIsAddingTOSDoc(false));
      showToast(error.message, "error");
      console.error(error);
    }
  };

const deleteTOSDocument =
  (data, onSuccess = () => {}, onError = () => {}) =>
  async (dispatch) => {
    try {
      dispatch(setIsDeletingTOSDoc(true));
      await deleteMedia(data.documentPath);
      await db.collection("TOSAgreements").doc(data.docId).delete();
      const querySnapshot = await db
        .collection("TOSAgreements")
        .orderBy("createdAt", "desc")
        .limit(1)
        .get();
      querySnapshot.forEach(async (doc) => {
        await db
          .collection("TOSAgreements")
          .doc(doc.id)
          .update({ status: "active" });
      });
      const usersBatch = db.batch();
      const users = await db.collection("users").get();
      users.forEach((doc) => {
        if (doc.data().role.toLowerCase() === "user")
          usersBatch.update(doc.ref, { hasAgreedToTOS: false });
      });
      usersBatch.commit();
      dispatch({
        type: DELETE_TOS_DOC,
        payload: { docId: data.docId },
      });
      onSuccess();
      showToast("Terms of service document deleted successfully", "success");
    } catch (error) {
      onError();
      dispatch(setIsDeletingTOSDoc(false));
      showToast(error.message, "error");
      console.error(error);
    }
  };

export {
  setCase,
  fetchCase,
  updateUser,
  createUser,
  deleteUser,
  fetchUsers,
  fetchCases,
  updateCase,
  deleteCase,
  createCase,
  fetchTOSDocs,
  getMetadataInfo,
  updateCaseStatus,
  fetchCaseDetails,
  deleteTOSDocument,
  addNewTOSDocument,
  fetchNotifications,
  deleteNotification,
  updateAccountStatus,
  generateCoverSheets,
  updateCoverSheetData,
  markNotificationAsRead,
  fetchUserAccountDetails,
  markNotificationAsAddressed,
};
