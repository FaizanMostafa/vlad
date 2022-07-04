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

// coverSheet = {
//   servee: {
//     locationType: servee.serviceDetails["0"].locationType,
//     address: servee.serviceDetails["0"].address,
//     fullName: servee.fullName,
//     agentOfService: servee.serviceDetails["0"].agentsOfService["0"],
//     age: servee.age,
//     dob: servee.dob,
//     sex: servee.physicalDescription.gender,
//     ethnicity: servee.physicalDescription.ethnicity,
//     height: servee.physicalDescription.height,
//     weight: servee.physicalDescription.weight,
//     hairColor: servee.physicalDescription.hairColor,
//     eyeColor: servee.physicalDescription.eyeColor,
//     physicalOutline: servee.physicalDescription.outline,
//     phoneNumber: servee.phoneNumbers["0"]
//   },
//   file: {
//     contents: fileData.fileContents,
//     ownerOfService: ownerOfService,
//     // tpgCaseNumber: tpgCaseNumber,
//     court: {
//       type: courtType,
//       state: courtState,
//       county: countyOf,
//       address: courthouseAddress
//     },
//     caseNumber: caseNumber,
//     caseTitle: caseTitle
//   },
// rules: {
//   typeOfServe: servee.serviceDetails["0"].typeOfServe,
//   shouldServeAtNewAddress: obtainNewDeliveryLocation,
//   requireServerNotifyPersonOfInterest: requireServerNotifyPersonOfInterest,
//   requireRushService: servee.serviceDetails["0"].requireRushService,
//   requireFirst24HourService: servee.serviceDetails["0"].requireFirst24HourService,
//   requireBodyCamFootage: requireBodyCamFootage,
//   serveIndividualAtEmployment: serveIndividualAtEmployment,
//   shouldSubServeToCompanion: servee.serviceDetails["0"].shouldSubServeToCompanion,
//   poBoxAllowedToServe: poBoxAllowedToServe,
//   shouldDropServe: servee.serviceDetails["0"].shouldDropServe,
//   serverContactServeeByPhone: serverContactServeeByPhone,
//   shouldLeaveDoorTag: servee.serviceDetails["0"].shouldLeaveDoorTag,
//   shouldPostDocsWithBand: servee.serviceDetails["0"].shouldPostDocsWithBand,
//   requireByEmail: requireByEmail,
//   specialInstructions: "",
//   requireStakeOutService: servee.serviceDetails["0"].requireStakeOutService,
//   ceaseDate: servee.serviceDetails["0"].ceaseDate
// },
//   additionalInfo: {
//     coResident: servee.serviceDetails["0"].coResident["0"],
//     vehicle: {
//       modelType: vehiclesInformation["0"].modelType,
//       yearOfMake: vehiclesInformation["0"].yearOfMake,
//       color: vehiclesInformation["0"].color,
//       licensePlateNumber: vehiclesInformation["0"].licensePlateNumber,
//       vinNumber: vehiclesInformation["0"].vinNumber
//     }
//   }
// }

const submitCase = (data, onSuccess=()=>{}, onError=()=>{}) => (
  async (dispatch) => {
    // try {
      dispatch(setIsFormPosting(true));
      let serveesDocumentedDataDocRefs = [];
      const caseInformationDocRef = await db.collection("CaseInformation-1").add({uid: data.uid, ...data["CaseInformation-1"]});
      const plaintiffInformationDocRef = await db.collection("PlaintiffInformation-2").add({uid: data.uid, ...data["PlaintiffInformation-2"]});
      const defendantInformationDocRef = await db.collection("DefendantInformation-3").add({uid: data.uid, ...data["DefendantInformation-3"]});
      const serveesDetail = data["ServeeDocumentedData-4"].serveesDetail;
      delete data["ServeeDocumentedData-4"].serveesDetail;
      for(const servee of Object.values(serveesDetail)) {
        const image = servee.physicalDescription.image;
        if(image) {
          const timestamp = new Date().getMilliseconds();
          const imagePath = `servees_pictures/${data.uid}/${timestamp}${image.name}`;
          const imageURI = await uploadBase64Media(image, `servees_pictures/${data.uid}/`, timestamp);
          delete servee.physicalDescription.image;
          servee.physicalDescription.imageURI = imageURI;
          servee.physicalDescription.imagePath = imagePath;
        }
        for(const serviceDetail of Object.values(servee.serviceDetails)) {
          const serveeDocumentedDataDocRef = await db.collection("ServeeDocumentedData-4").add({uid: data.uid, ...data["ServeeDocumentedData-4"], numberOfCaseFilesBeingServed: 1, howManyIndividualsServed: 1, serveesDetail: {0: {...servee, serviceDetails: {0: serviceDetail}}}});
          serveeDocumentedDataDocRef.serveeName = servee.fullName;
          serveesDocumentedDataDocRefs.push({
            id: serveeDocumentedDataDocRef.id,
            serveeName: serveeDocumentedDataDocRef.serveeName,
            data: {
              locationType: serviceDetail.locationType,
              address: serviceDetail.address,
              fullName: servee.fullName,
              agentOfService: serviceDetail.agentsOfService["0"],
              age: servee.age,
              dob: servee.dob,
              sex: servee.physicalDescription.gender,
              ethnicity: servee.physicalDescription.ethnicity,
              height: servee.physicalDescription.height,
              weight: servee.physicalDescription.weight,
              hairColor: servee.physicalDescription.hairColor,
              eyeColor: servee.physicalDescription.eyeColor,
              physicalOutline: servee.physicalDescription.outline,
              phoneNumber: servee.phoneNumbers["0"],
              typeOfServe: serviceDetail.typeOfServe,
              requireRushService: serviceDetail.requireRushService,
              requireFirst24HourService: serviceDetail.requireFirst24HourService,
              shouldSubServeToCompanion: serviceDetail.shouldSubServeToCompanion,
              shouldDropServe: serviceDetail.shouldDropServe,
              shouldLeaveDoorTag: serviceDetail.shouldLeaveDoorTag,
              shouldPostDocsWithBand: serviceDetail.shouldPostDocsWithBand,
              requireStakeOutService: serviceDetail.requireStakeOutService,
              ceaseDate: serviceDetail.ceaseDate,
              coResident: servee.coResidents["0"]
            }
          });
        }
      }
      const clearanceOfActionDocRef = await db.collection("ClearanceOfAction-5").add({uid: data.uid, ...data["ClearanceOfAction-5"]});
      // for(const key of Object.keys(data["ServeePhysicalDescription-6"].serveesPhysicalDescription)) {
      //   const image = data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].image;
      //   if(image) {
      //     const timestamp = new Date().getMilliseconds();
      //     const imagePath = `servees_pictures/${data.uid}/${timestamp}${image.name}`;
      //     const imageURI = await uploadBase64Media(image, `servees_pictures/${data.uid}/`, timestamp);
      //     delete data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].image;
      //     data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].imageURI = imageURI;
      //     data["ServeePhysicalDescription-6"].serveesPhysicalDescription[key].imagePath = imagePath;
      //   }
      // }
      // const serveePhysicalDescriptionDocRef = await db.collection("ServeePhysicalDescription-6").add({uid: data.uid, ...data["ServeePhysicalDescription-6"]});
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
          const fileSubmissionDocRef = await db.collection("FileSubmission-9").add({uid: data.uid, documentURI, documentPath, fileData: {0: {documentName: document.file.name, caseType: document.caseType, fileType: document.fileType, additionalInfo: document.additionalInfo, fileContents: document.fileContents}}, submittedAt: new Date()});
          for(const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
            const caseDocRef = await db.collection("cases").add({
              uid: data.uid, filedAt: new Date(),
              userName: data.userName,
              caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
              CaseInformationId: caseInformationDocRef.id,
              PlaintiffInformationId: plaintiffInformationDocRef.id,
              DefendantInformationId: defendantInformationDocRef.id,
              ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
              ClearanceOfActionId: clearanceOfActionDocRef.id,
              // ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
              VehicleInformationId: vehicleInformationDocRef.id,
              OfferedServicesId: offeredServicesDocRef.id,
              FileSubmissionId: fileSubmissionDocRef.id,
              coverSheetData: {
                servee: {
                  locationType: serveeDocumentedDataDocRef.data.locationType,
                  address: serveeDocumentedDataDocRef.data.address,
                  fullName: serveeDocumentedDataDocRef.data.fullName,
                  agentOfService: serveeDocumentedDataDocRef.data.agentOfService,
                  age: serveeDocumentedDataDocRef.data.age,
                  dob: serveeDocumentedDataDocRef.data.dob,
                  sex: serveeDocumentedDataDocRef.data.sex,
                  ethnicity: serveeDocumentedDataDocRef.data.ethnicity,
                  height: serveeDocumentedDataDocRef.data.height,
                  weight: serveeDocumentedDataDocRef.data.weight,
                  hairColor: serveeDocumentedDataDocRef.data.hairColor,
                  eyeColor: serveeDocumentedDataDocRef.data.eyeColor,
                  physicalOutline: serveeDocumentedDataDocRef.data.physicalOutline,
                  phoneNumber: serveeDocumentedDataDocRef.data.phoneNumber
                },
                file: {
                  contents: document.fileContents,
                  ownerOfService: data["CaseInformation-1"].ownerOfService,
                  tpgCaseNumber: "",
                  court: {
                    type: data["CaseInformation-1"].courtType,
                    state: data["CaseInformation-1"].courtState,
                    county: data["CaseInformation-1"].countyOf,
                    address: data["CaseInformation-1"].courthouseAddress
                  },
                  caseNumber: data["CaseInformation-1"].caseNumber,
                  caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`
                },
                rules: {
                  typeOfServe: serveeDocumentedDataDocRef.data.typeOfServe,
                  shouldServeAtNewAddress: data["OfferedServices-8"].obtainNewDeliveryLocation,
                  requireServerNotifyPersonOfInterest: data["ClearanceOfAction-5"].requireServerNotifyPersonOfInterest,
                  requireRushService: serveeDocumentedDataDocRef.data.requireRushService,
                  requireFirst24HourService: serveeDocumentedDataDocRef.data.requireFirst24HourService,
                  requireBodyCamFootage: data["OfferedServices-8"].requireBodyCamFootage,
                  serveIndividualAtEmployment: data["ClearanceOfAction-5"].serveIndividualAtEmployment,
                  shouldSubServeToCompanion: serveeDocumentedDataDocRef.data.shouldSubServeToCompanion,
                  poBoxAllowedToServe: data["OfferedServices-8"].poBoxAllowedToServe,
                  shouldDropServe: serveeDocumentedDataDocRef.data.shouldDropServe,
                  serverContactServeeByPhone: data["ClearanceOfAction-5"].serverContactServeeByPhone,
                  shouldLeaveDoorTag: serveeDocumentedDataDocRef.data.shouldLeaveDoorTag,
                  shouldPostDocsWithBand: serveeDocumentedDataDocRef.data.shouldPostDocsWithBand,
                  requireByEmail: data["OfferedServices-8"].requireByEmail,
                  specialInstructions: "",
                  requireStakeOutService: serveeDocumentedDataDocRef.data.requireStakeOutService,
                  ceaseDate: serveeDocumentedDataDocRef.data.ceaseDate
                },
                additionalInfo: {
                  isServeeExpectingService: data["ClearanceOfAction-5"].paralegalAttorneyClientContactServee,
                  coResident: serveeDocumentedDataDocRef.data.coResident,
                  vehicle: {
                    modelType: data["VehicleInformation-7"].vehiclesInformation["0"].modelType,
                    yearOfMake: data["VehicleInformation-7"].vehiclesInformation["0"].yearOfMake,
                    color: data["VehicleInformation-7"].vehiclesInformation["0"].color,
                    licensePlateNumber: data["VehicleInformation-7"].vehiclesInformation["0"].licensePlateNumber,
                    vinNumber: data["VehicleInformation-7"].vehiclesInformation["0"].vinNumber
                  }
                }
              },
              status: "pending",
              amount: ""
            });
            notificationsBatch.set(db.collection("Notifications").doc(), {category: "case_submission", addressed: false, read: false, content: {uid: data.uid, userName: data.userName, caseId: caseDocRef.id, caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`}, title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`, generatedAt: new Date()});
            await db.collection("cases").doc(caseDocRef.id).update({'coverSheetData.file.tpgCaseNumber': `TPG${caseDocRef.id}`, searchString: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.unit} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state.us === "other" ? data["CaseInformation-1"].courthouseAddress.state.other : data["CaseInformation-1"].courthouseAddress.state.us} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.unit} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state.us === "other" ? data["CaseInformation-1"].courthouseMailingAddress.state.other : data["CaseInformation-1"].courthouseMailingAddress.state.us} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.unit} ${p.address.city} ${p.address.state.us === "other" ? p.address.state.other : p.address.state.us} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.unit} ${d.address.city} ${d.address.state.us === "other" ? d.address.state.other : d.address.state.us} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].zipFilingAddress.street} ${data["OfferedServices-8"].zipFilingAddress.unit} ${data["OfferedServices-8"].zipFilingAddress.city} ${data["OfferedServices-8"].zipFilingAddress.state.us === "other" ? data["OfferedServices-8"].zipFilingAddress.state.other : data["OfferedServices-8"].zipFilingAddress.state.us} ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${data["OfferedServices-8"].zipFilingAddress.country} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
          }
        }
      } else {
        const document = data.documents[0];
        const timestamp = new Date().getMilliseconds();
        documentPath = `file_submissions/${data.uid}/${timestamp}${document.file.name}`;
        documentURI = await uploadMedia(document.file, `file_submissions/${data.uid}/`, timestamp);
        const fileSubmissionDocRef = await db.collection("FileSubmission-9").add({uid: data.uid, documentURI, documentPath, fileData: {0: {documentName: document.file.name, caseType: document.caseType, fileType: document.fileType, additionalInfo: document.additionalInfo, fileContents: document.fileContents}}, submittedAt: new Date()});
        for(const serveeDocumentedDataDocRef of serveesDocumentedDataDocRefs) {
          const caseDocRef = await db.collection("cases").add({
            uid: data.uid, filedAt: new Date(),
            userName: data.userName,
            caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`,
            CaseInformationId: caseInformationDocRef.id,
            PlaintiffInformationId: plaintiffInformationDocRef.id,
            DefendantInformationId: defendantInformationDocRef.id,
            ServeeDocumentedDataId: serveeDocumentedDataDocRef.id,
            ClearanceOfActionId: clearanceOfActionDocRef.id,
            // ServeePhysicalDescriptionId: serveePhysicalDescriptionDocRef.id,
            VehicleInformationId: vehicleInformationDocRef.id,
            OfferedServicesId: offeredServicesDocRef.id,
            FileSubmissionId: fileSubmissionDocRef.id,
            coverSheetData: {
              servee: {
                locationType: serveeDocumentedDataDocRef.data.locationType,
                address: serveeDocumentedDataDocRef.data.address,
                fullName: serveeDocumentedDataDocRef.data.fullName,
                agentOfService: serveeDocumentedDataDocRef.data.agentOfService,
                age: serveeDocumentedDataDocRef.data.age,
                dob: serveeDocumentedDataDocRef.data.dob,
                sex: serveeDocumentedDataDocRef.data.sex,
                ethnicity: serveeDocumentedDataDocRef.data.ethnicity,
                height: serveeDocumentedDataDocRef.data.height,
                weight: serveeDocumentedDataDocRef.data.weight,
                hairColor: serveeDocumentedDataDocRef.data.hairColor,
                eyeColor: serveeDocumentedDataDocRef.data.eyeColor,
                physicalOutline: serveeDocumentedDataDocRef.data.physicalOutline,
                phoneNumber: serveeDocumentedDataDocRef.data.phoneNumber
              },
              file: {
                contents: document.fileContents,
                ownerOfService: data["CaseInformation-1"].ownerOfService,
                tpgCaseNumber: "",
                court: {
                  type: data["CaseInformation-1"].courtType,
                  state: data["CaseInformation-1"].courtState,
                  county: data["CaseInformation-1"].countyOf,
                  address: data["CaseInformation-1"].courthouseAddress
                },
                caseNumber: data["CaseInformation-1"].caseNumber,
                caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`
              },
              rules: {
                typeOfServe: serveeDocumentedDataDocRef.data.typeOfServe,
                shouldServeAtNewAddress: data["OfferedServices-8"].obtainNewDeliveryLocation,
                requireServerNotifyPersonOfInterest: data["ClearanceOfAction-5"].requireServerNotifyPersonOfInterest,
                requireRushService: serveeDocumentedDataDocRef.data.requireRushService,
                requireFirst24HourService: serveeDocumentedDataDocRef.data.requireFirst24HourService,
                requireBodyCamFootage: data["OfferedServices-8"].requireBodyCamFootage,
                serveIndividualAtEmployment: data["ClearanceOfAction-5"].serveIndividualAtEmployment,
                shouldSubServeToCompanion: serveeDocumentedDataDocRef.data.shouldSubServeToCompanion,
                poBoxAllowedToServe: data["OfferedServices-8"].poBoxAllowedToServe,
                shouldDropServe: serveeDocumentedDataDocRef.data.shouldDropServe,
                serverContactServeeByPhone: data["ClearanceOfAction-5"].serverContactServeeByPhone,
                shouldLeaveDoorTag: serveeDocumentedDataDocRef.data.shouldLeaveDoorTag,
                shouldPostDocsWithBand: serveeDocumentedDataDocRef.data.shouldPostDocsWithBand,
                requireByEmail: data["OfferedServices-8"].requireByEmail,
                specialInstructions: "",
                requireStakeOutService: serveeDocumentedDataDocRef.data.requireStakeOutService,
                ceaseDate: serveeDocumentedDataDocRef.data.ceaseDate
              },
              additionalInfo: {
                isServeeExpectingService: data["ClearanceOfAction-5"].paralegalAttorneyClientContactServee,
                coResident: serveeDocumentedDataDocRef.data.coResident,
                vehicle: {
                  modelType: data["VehicleInformation-7"].vehiclesInformation["0"].modelType,
                  yearOfMake: data["VehicleInformation-7"].vehiclesInformation["0"].yearOfMake,
                  color: data["VehicleInformation-7"].vehiclesInformation["0"].color,
                  licensePlateNumber: data["VehicleInformation-7"].vehiclesInformation["0"].licensePlateNumber,
                  vinNumber: data["VehicleInformation-7"].vehiclesInformation["0"].vinNumber
                }
              }
            },
            status: "pending",
            amount: ""
          });
          notificationsBatch.set(db.collection("Notifications").doc(), {category: "case_submission", addressed: false, read: false, content: {uid: data.uid, userName: data.userName, caseId: caseDocRef.id, caseTitle: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle}`}, title: `New case ${caseDocRef.id} submission from ${data.userName}, please review for approval`, generatedAt: new Date()});
          await db.collection("cases").doc(caseDocRef.id).update({'coverSheetData.file.tpgCaseNumber': `TPG${caseDocRef.id}`, searchString: `${serveeDocumentedDataDocRef.serveeName} ${data["CaseInformation-1"].caseTitle} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.fullName.firstName} ${p.fullName.middleName} ${p.fullName.lastName}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.fullName.firstName} ${d.fullName.middleName} ${d.fullName.lastName}`)).join(" ")} ${Object.values(data["PlaintiffInformation-2"].plaintiffAttorneysDetail).map((pa)=>(`${pa.fullName.firstName} ${pa.fullName.middleName} ${pa.fullName.lastName}`)).join(" ")} ${data["CaseInformation-1"].courthouseAddress.street} ${data["CaseInformation-1"].courthouseAddress.unit} ${data["CaseInformation-1"].courthouseAddress.city} ${data["CaseInformation-1"].courthouseAddress.state.us === "other" ? data["CaseInformation-1"].courthouseAddress.state.other : data["CaseInformation-1"].courthouseAddress.state.us} ${data["CaseInformation-1"].courthouseAddress.zipCode} ${data["CaseInformation-1"].courthouseAddress.country} ${data["CaseInformation-1"].courthouseMailingAddress.street} ${data["CaseInformation-1"].courthouseMailingAddress.unit} ${data["CaseInformation-1"].courthouseMailingAddress.city} ${data["CaseInformation-1"].courthouseMailingAddress.state.us === "other" ? data["CaseInformation-1"].courthouseMailingAddress.state.other : data["CaseInformation-1"].courthouseMailingAddress.state.us} ${data["CaseInformation-1"].courthouseMailingAddress.zipCode} ${data["CaseInformation-1"].courthouseMailingAddress.country} ${Object.values(data["PlaintiffInformation-2"].plaintiffsDetail).map((p)=>(`${p.address.street} ${p.address.unit} ${p.address.city} ${p.address.state.us === "other" ? p.address.state.other : p.address.state.us} ${p.address.zipCode} ${p.address.country}`)).join(" ")} ${Object.values(data["DefendantInformation-3"].defendantsDetail).map((d)=>(`${d.address.street} ${d.address.unit} ${d.address.city} ${d.address.state.us === "other" ? d.address.state.other : d.address.state.us} ${d.address.zipCode} ${d.address.country}`)).join(" ")} ${data["OfferedServices-8"].zipFilingAddress.street} ${data["OfferedServices-8"].zipFilingAddress.unit} ${data["OfferedServices-8"].zipFilingAddress.city} ${data["OfferedServices-8"].zipFilingAddress.state.us === "other" ? data["OfferedServices-8"].zipFilingAddress.state.other : data["OfferedServices-8"].zipFilingAddress.state.us} ${data["OfferedServices-8"].zipFilingAddress.zipCode} ${data["OfferedServices-8"].zipFilingAddress.country} ${data["CaseInformation-1"].countyOf} ${new Date().toDateString()} ${data["CaseInformation-1"].caseNumber} TPG${caseDocRef.id}`});
        }
      }
      await notificationsBatch.commit();
      showToast("Case submitted successfully!", "success");
      dispatch(setIsFormPosting(false));
      onSuccess();
    // } catch(error) {
    //   onError();
    //   dispatch(setIsFormPosting(false));
    //   showToast(error.message, "error");
    // }
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
              amount: docData?.amount,
              payment: docData?.payment,
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
      // subQuerySnapshot = await db.collection("ServeePhysicalDescription-6").doc(docData.ServeePhysicalDescriptionId).get();
      // caseData["ServeePhysicalDescription"] = subQuerySnapshot.data();
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