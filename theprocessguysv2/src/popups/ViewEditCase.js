import { useEffect, useState } from "react";
import { Link as RSLink, Element } from "react-scroll";
import { Stepper, Step } from "react-form-stepper";
import { Modal } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  objectsEqual,
  showToast,
  validateEmail,
  validatePhoneNumber,
} from "../utils";
import { ResetQuestionaireConfirmation } from "./index";
import { updateCaseStatus } from "../redux/actions/admin";
import {
  Questionaire1,
  Questionaire2,
  Questionaire3,
  Questionaire4,
  Questionaire5,
  Questionaire6,
  Questionaire7,
  Questionaire8,
  FileSubmission,
} from "../forms/CaseDetails";

export const ViewEditCase = ({
  onlyCaseStatusEditable,
  isFormDisabled,
  ...props
}) => {
  const dispatch = useDispatch();
  const [activeStep, setActiveStep] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const userCase = useSelector((state) => state.admin.case);
  const caseDetails = useSelector((state) => state.admin.caseDetails);
  const isFetchingCaseDetails = useSelector(
    (state) => state.admin.isFetchingCaseDetails
  );

  // Questionaire Form 1
  const [ownerOfService, setOwnerOfService] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState("");
  const [caseTitle, setCaseTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [courtDate, setCourtDate] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtState, setCourtState] = useState("");
  const [countyOf, setCountyOf] = useState("");
  const [courthouseAddress, setCourthouseAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [courthouseMailingAddress, setCourthouseMailingAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });
  const [branchName, setBranchName] = useState("");

  // Questionaire Form 2
  const [isOrRepresentingPlaintiff, setIsOrRepresentingPlaintiff] =
    useState("");
  const [shouldPGFillPlaintiffInfo, setShouldPGFillPlaintiffInfo] =
    useState(false);
  const [numberOfAttorneyPlaintiff, setNumberOfAttorneyPlaintiff] =
    useState("");
  const [plaintiffsDetail, setPlaintiffsDetail] = useState({});
  const [
    numberOfAttorneysRepresentingPlaintiff,
    setNumberOfAttorneysRepresentingPlaintiff,
  ] = useState("");
  const [plaintiffAttorneysDetail, setPlaintiffAttorneysDetail] = useState({});

  // Questionaire Form 3
  const [isOrRepresentingDefendant, setIsOrRepresentingDefendant] =
    useState("");
  const [shouldPGFillDefendantInfo, setShouldPGFillDefendantInfo] =
    useState(false);
  const [defendantsDetail, setDefendantsDetail] = useState({});
  const [numberOfAttorneyDefendant, setNumberOfAttorneyDefendant] =
    useState("");
  const [
    numberOfAttorneysRepresentingDefendant,
    setNumberOfAttorneysRepresentingDefendant,
  ] = useState("");
  const [defendantAttorneysDetail, setDefendantAttorneysDetail] = useState({});

  // Questionaire Form 4
  const [numberOfCaseFilesBeingServed, setNumberOfCaseFilesBeingServed] =
    useState("");
  const [howManyIndividualsServed, setHowManyIndividualsServed] = useState("");
  const [serveesDetail, setServeesDetail] = useState({});
  const [date, setDate] = useState(new Date());

  // Questionaire Form 5
  const [serveIndividualAtEmployment, setServeIndividualAtEmployment] =
    useState("");
  const [
    requireServerNotifyPersonOfInterest,
    setRequireServerNotifyPersonOfInterest,
  ] = useState("");
  const [serverContactServeeByPhone, setServerContactServeeByPhone] =
    useState("");
  const [
    paralegalAttorneyClientContactServee,
    setParalegalAttorneyClientContactServee,
  ] = useState("");

  //  Questionaire Form 6
  const [serveesPhysicalDescription, setServeesPhysicalDescription] = useState({
    0: {
      fullName: { firstName: "", middleName: "", lastName: "" },
      gender: "",
      ethnicity: "",
      height: "",
      weight: "",
      hairColor: "",
      eyeColor: "",
      physicalOutline: "",
      image: null,
    },
  });

  // Questionaire Form 7
  const [vehiclesInformation, setVehiclesInformation] = useState({
    0: {
      insuranceCompany: "",
      licencePlateNumber: "",
      vinNumber: "",
      yearOfMake: "",
      color: "",
      modelType: "",
    },
  });

  // Questionaire Form 8
  const [specifyDatesForStakeOutService, setSpecifyDatesForStakeOutService] =
    useState("");
  const [requireSkipTracingService, setRequireSkipTracingService] =
    useState("");
  const [requireBodyCamFootage, setRequireBodyCamFootage] = useState("");
  const [obtainNewDeliveryLocation, setObtainNewDeliveryLocation] =
    useState("");
  const [poBoxAllowedToServe, setPOBoxAllowedToServe] = useState("");
  const [requireServiceByMail, setRequireServiceByMail] = useState("");
  const [requireByEmail, setRequireByEmail] = useState("");
  const [specificCourtInstruction, setSpecificCourtInstruction] = useState("");
  const [requireZipFileService, setRequireZipFileService] = useState("");
  const [ifYesListAddress, setIfYesListAddress] = useState("");

  useEffect(() => {
    if (!props.modalShow && activeStep !== 1) {
      setActiveStep(1);
      // handleResetForms();
    }
  }, [props.modalShow]);

  useEffect(() => {
    if (caseDetails) {
      // Questionaire Form 1
      setOwnerOfService(caseDetails?.CaseInformation?.ownerOfService ?? "");
      setStatus(caseDetails?.CaseInformation?.status);
      setAmount(caseDetails?.CaseInformation?.amount ?? "");
      setCaseTitle(caseDetails?.CaseInformation.caseTitle);
      setCaseNumber(caseDetails?.CaseInformation.caseNumber);
      setCourtDate(caseDetails?.CaseInformation.courtDate);
      setCourtType(caseDetails?.CaseInformation.courtType);
      setCourtState(caseDetails?.CaseInformation.courtState);
      setCountyOf(caseDetails?.CaseInformation.countyOf);
      setCourthouseAddress(caseDetails?.CaseInformation.courthouseAddress);
      setCourthouseMailingAddress(
        caseDetails?.CaseInformation.courthouseMailingAddress
      );
      setBranchName(caseDetails?.CaseInformation.branchName);

      // Questionaire Form 2
      setIsOrRepresentingPlaintiff(
        caseDetails?.PlaintiffInformation.isOrRepresentingPlaintiff
      );
      setPlaintiffsDetail(caseDetails?.PlaintiffInformation.plaintiffsDetail);
      setShouldPGFillPlaintiffInfo(
        caseDetails?.PlaintiffInformation.shouldPGFillPlaintiffInfo
      );
      setNumberOfAttorneyPlaintiff(
        caseDetails?.PlaintiffInformation.numberOfAttorneyPlaintiff
      );
      setNumberOfAttorneysRepresentingPlaintiff(
        caseDetails?.PlaintiffInformation.numberOfAttorneysRepresentingPlaintiff
      );
      setPlaintiffAttorneysDetail(
        caseDetails?.PlaintiffInformation.plaintiffAttorneysDetail
      );

      // Questionaire Form 3
      setIsOrRepresentingDefendant(
        caseDetails?.DefendantInformation.isOrRepresentingDefendant
      );
      setDefendantsDetail(caseDetails?.DefendantInformation.defendantsDetail);
      setShouldPGFillDefendantInfo(
        caseDetails?.DefendantInformation.shouldPGFillDefendantInfo
      );
      setNumberOfAttorneyDefendant(
        caseDetails?.DefendantInformation.numberOfAttorneyDefendant
      );
      setNumberOfAttorneysRepresentingDefendant(
        caseDetails?.DefendantInformation.numberOfAttorneysRepresentingDefendant
      );

      // Questionaire Form 4
      setNumberOfCaseFilesBeingServed(
        caseDetails?.ServeeDocumentedData.numberOfCaseFilesBeingServed
      );
      setHowManyIndividualsServed(
        caseDetails?.ServeeDocumentedData.howManyIndividualsServed
      );
      setServeesDetail(caseDetails?.ServeeDocumentedData.serveesDetail);

      // Questionaire Form 5
      setServeIndividualAtEmployment(
        caseDetails?.ClearanceOfAction.serveIndividualAtEmployment
      );
      setRequireServerNotifyPersonOfInterest(
        caseDetails?.ClearanceOfAction.requireServerNotifyPersonOfInterest
      );
      setServerContactServeeByPhone(
        caseDetails?.ClearanceOfAction.serverContactServeeByPhone
      );
      setParalegalAttorneyClientContactServee(
        caseDetails?.ClearanceOfAction.paralegalAttorneyClientContactServee
      );

      // Questionaire Form 6
      setServeesPhysicalDescription(
        caseDetails?.ServeePhysicalDescription.serveesPhysicalDescription
      );

      // Questionaire Form 7
      setVehiclesInformation(
        caseDetails?.VehicleInformation.vehiclesInformation
      );

      // Questionaire Form 8
      setSpecifyDatesForStakeOutService(
        caseDetails?.OfferedServices.specifyDatesForStakeOutService
      );
      setRequireSkipTracingService(
        caseDetails?.OfferedServices.requireSkipTracingService
      );
      setRequireBodyCamFootage(
        caseDetails?.OfferedServices.requireBodyCamFootage
      );
      setObtainNewDeliveryLocation(
        caseDetails?.OfferedServices.obtainNewDeliveryLocation
      );
      setPOBoxAllowedToServe(caseDetails?.OfferedServices.poBoxAllowedToServe);
      setRequireServiceByMail(
        caseDetails?.OfferedServices.requireServiceByMail
      );
      setRequireByEmail(caseDetails?.OfferedServices.requireByEmail);
      setSpecificCourtInstruction(
        caseDetails?.OfferedServices.specificCourtInstruction
      );
      setRequireZipFileService(
        caseDetails?.OfferedServices.requireZipFileService
      );
      setIfYesListAddress(caseDetails?.OfferedServices.ifYesListAddress);
    }
  }, [caseDetails, isFetchingCaseDetails]);

  useEffect(() => {
    if (
      numberOfAttorneyPlaintiff !== "" &&
      parseInt(numberOfAttorneyPlaintiff) !==
        Object.keys(plaintiffsDetail).length
    ) {
      const prevLength = Object.keys(plaintiffsDetail).length;
      if (parseInt(numberOfAttorneyPlaintiff) > prevLength) {
        let newPlaintiffsDetail = plaintiffsDetail;
        for (
          let index = 0;
          index < parseInt(numberOfAttorneyPlaintiff) - prevLength;
          index++
        ) {
          newPlaintiffsDetail[Object.keys(newPlaintiffsDetail).length] = {
            fullName: { firstName: "", middleName: "", lastName: "" },
            address: {
              street: "",
              city: "",
              state: "",
              zipCode: "",
              country: "",
            },
          };
        }
        setPlaintiffsDetail(newPlaintiffsDetail);
        setDate(new Date());
      } else {
        let newPlaintiffsDetail = plaintiffsDetail;
        for (
          let index = Object.keys(plaintiffsDetail).length;
          parseInt(numberOfAttorneyPlaintiff) !==
          Object.keys(newPlaintiffsDetail).length;
          index--
        ) {
          delete newPlaintiffsDetail[
            Object.keys(newPlaintiffsDetail).length - 1
          ];
        }
        setPlaintiffsDetail(newPlaintiffsDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneyPlaintiff]);

  useEffect(() => {
    if (
      numberOfAttorneysRepresentingPlaintiff !== "" &&
      parseInt(numberOfAttorneysRepresentingPlaintiff) !==
        Object.keys(plaintiffAttorneysDetail).length
    ) {
      const prevLength = Object.keys(plaintiffAttorneysDetail).length;
      if (parseInt(numberOfAttorneysRepresentingPlaintiff) > prevLength) {
        let newAttorneysDetail = plaintiffAttorneysDetail;
        for (
          let index = 0;
          index < parseInt(numberOfAttorneysRepresentingPlaintiff) - prevLength;
          index++
        ) {
          newAttorneysDetail[Object.keys(newAttorneysDetail).length] = {
            fullName: { firstName: "", middleName: "", lastName: "" },
            barNumber: "",
            phoneNumbers: { 0: { phoneNumber: "", type: "" } },
            faxNumber: "",
            email: "",
            address: {
              street: "",
              city: "",
              state: "",
              zipCode: "",
              country: "",
            },
          };
        }
        setPlaintiffAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      } else {
        let newAttorneysDetail = plaintiffAttorneysDetail;
        for (
          let index = Object.keys(plaintiffAttorneysDetail).length;
          parseInt(numberOfAttorneysRepresentingPlaintiff) !==
          Object.keys(newAttorneysDetail).length;
          index--
        ) {
          delete newAttorneysDetail[Object.keys(newAttorneysDetail).length - 1];
        }
        setPlaintiffAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneysRepresentingPlaintiff]);

  useEffect(() => {
    if (
      numberOfAttorneyDefendant !== "" &&
      parseInt(numberOfAttorneyDefendant) !==
        Object.keys(defendantsDetail).length
    ) {
      const prevLength = Object.keys(defendantsDetail).length;
      if (parseInt(numberOfAttorneyDefendant) > prevLength) {
        let newDefendantsDetail = defendantsDetail;
        for (
          let index = 0;
          index < parseInt(numberOfAttorneyDefendant) - prevLength;
          index++
        ) {
          newDefendantsDetail[Object.keys(newDefendantsDetail).length] = {
            fullName: { firstName: "", middleName: "", lastName: "" },
            address: {
              street: "",
              city: "",
              state: "",
              zipCode: "",
              country: "",
            },
          };
        }
        setDefendantsDetail(newDefendantsDetail);
        setDate(new Date());
      } else {
        let newDefendantsDetail = defendantsDetail;
        for (
          let index = Object.keys(defendantsDetail).length;
          parseInt(numberOfAttorneyDefendant) !==
          Object.keys(newDefendantsDetail).length;
          index--
        ) {
          delete newDefendantsDetail[
            Object.keys(newDefendantsDetail).length - 1
          ];
        }
        setDefendantsDetail(newDefendantsDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneyDefendant]);

  useEffect(() => {
    if (
      numberOfAttorneysRepresentingDefendant !== "" &&
      parseInt(numberOfAttorneysRepresentingDefendant) !==
        Object.keys(defendantAttorneysDetail).length
    ) {
      const prevLength = Object.keys(defendantAttorneysDetail).length;
      if (parseInt(numberOfAttorneysRepresentingDefendant) > prevLength) {
        let newAttorneysDetail = defendantAttorneysDetail;
        for (
          let index = 0;
          index < parseInt(numberOfAttorneysRepresentingDefendant) - prevLength;
          index++
        ) {
          newAttorneysDetail[Object.keys(newAttorneysDetail).length] = {
            fullName: { firstName: "", middleName: "", lastName: "" },
            barNumber: "",
            phoneNumbers: { 0: { phoneNumber: "", type: "" } },
            faxNumber: "",
            email: "",
            address: {
              street: "",
              city: "",
              state: "",
              zipCode: "",
              country: "",
            },
          };
        }
        setDefendantAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      } else {
        let newAttorneysDetail = defendantAttorneysDetail;
        for (
          let index = Object.keys(defendantAttorneysDetail).length;
          parseInt(numberOfAttorneysRepresentingDefendant) !==
          Object.keys(newAttorneysDetail).length;
          index--
        ) {
          delete newAttorneysDetail[Object.keys(newAttorneysDetail).length - 1];
        }
        setDefendantAttorneysDetail(newAttorneysDetail);
        setDate(new Date());
      }
    }
  }, [numberOfAttorneysRepresentingDefendant]);

  useEffect(() => {
    if (
      howManyIndividualsServed !== "" &&
      parseInt(howManyIndividualsServed) !== Object.keys(serveesDetail).length
    ) {
      const prevLength = Object.keys(serveesDetail).length;
      if (parseInt(howManyIndividualsServed) > prevLength) {
        let newServeesDetail = serveesDetail;
        for (
          let index = 0;
          index < parseInt(howManyIndividualsServed) - prevLength;
          index++
        ) {
          newServeesDetail[Object.keys(newServeesDetail).length] = {
            fullName: "",
            dob: "",
            age: "",
            phoneNumbers: { 0: { phoneNumber: "", type: "" } },
            email: "",
            coResidents: { 0: { name: "", relation: "" } },
            isEmployed: "",
            isNew: true,
            serviceDetails: {
              0: {
                locationType: "",
                address: {
                  street: "",
                  city: "",
                  state: "",
                  zipCode: "",
                  country: "",
                },
                typeOfServe: "",
                requireFirst24HourService: "",
                requireRushService: "",
                requireStakeOutService: "",
                ceaseDate: "",
                shouldSubServeToCompanion: "",
                shouldDropServe: "",
                shouldLeaveDoorTag: "",
                shouldPostDocsWithBand: "",
                isThereAnAgentOfService: "",
                agentsOfService: {
                  0: { firstName: "", middleName: "", lastName: "" },
                },
              },
            },
          };
        }
        setServeesDetail(newServeesDetail);
        setDate(new Date());
      } else {
        let newServeesDetail = serveesDetail;
        for (
          let index = Object.keys(serveesDetail).length;
          parseInt(howManyIndividualsServed) !==
          Object.keys(newServeesDetail).length;
          index--
        ) {
          delete newServeesDetail[Object.keys(newServeesDetail).length - 1];
        }
        setServeesDetail(newServeesDetail);
        setDate(new Date());
      }
    }
  }, [howManyIndividualsServed]);

  useEffect(() => {
    if (isOrRepresentingPlaintiff) {
      setIsOrRepresentingDefendant(false);
    }
  }, [isOrRepresentingPlaintiff]);

  useEffect(() => {
    if (isOrRepresentingDefendant) {
      setIsOrRepresentingPlaintiff(false);
    }
  }, [isOrRepresentingDefendant]);

  const handleOnPressNext = (nextStep) => {
    if(isFormDisabled) {
      setActiveStep(nextStep);
      return;
    }
    if (activeStep === 1) {
      if (!ownerOfService.length) {
        showToast("Please enter who is the owner of this service!", "warning");
      } else if (!status.length) {
        showToast("Please select case status!", "warning");
      } else if (!amount.length) {
        showToast(
          "Amount field cannot be empty, please type in either an amount or 0!",
          "warning"
        );
      } else if (!caseTitle.length) {
        showToast("Please enter case title!", "warning");
      } else if (!caseNumber.length) {
        showToast("Please enter case number!", "warning");
      } else if (!courtDate.length) {
        showToast("Please enter court date!", "warning");
      } else if (!courtType.length) {
        showToast("Please select the applicable court!", "warning");
      } else if (!courtState.length) {
        showToast("Please enter the court state!", "warning");
      } else if (!branchName.length) {
        showToast("Please enter branch name!", "warning");
      } else if (!courthouseAddress.street.length) {
        showToast("Please enter courthouse street!", "warning");
      } else if (!courthouseAddress.city.length) {
        showToast("Please enter courthouse city!", "warning");
      } else if (!courthouseAddress.state.length) {
        showToast("Please enter courthouse state!", "warning");
      } else if (!courthouseAddress.zipCode.length) {
        showToast("Please enter courthouse zip code!", "warning");
      } else if (!courthouseAddress.country.length) {
        showToast("Please enter courthouse country!", "warning");
      } else if (!courthouseMailingAddress.street.length) {
        showToast("Please enter courthouse mailing street!", "warning");
      } else if (!courthouseMailingAddress.city.length) {
        showToast("Please enter courthouse mailing city!", "warning");
      } else if (!courthouseMailingAddress.state.length) {
        showToast("Please enter courthouse mailing state!", "warning");
      } else if (!courthouseMailingAddress.zipCode.length) {
        showToast("Please enter courthouse mailing zip code!", "warning");
      } else if (!courthouseMailingAddress.country.length) {
        showToast("Please enter courthouse mailing country!", "warning");
      } else if (!countyOf.length) {
        showToast("Please enter county of!", "warning");
      } else {
        let data = {};
        if (ownerOfService !== caseDetails.CaseInformation.ownerOfService) data.ownerOfService = ownerOfService;
        if (status !== caseDetails.CaseInformation.status) data.status = status;
        if (amount !== caseDetails.CaseInformation?.amount)
          data.amount = amount;
        if (caseTitle !== caseDetails.CaseInformation.caseTitle)
          data.caseTitle = caseTitle;
        if (caseNumber !== caseDetails.CaseInformation.caseNumber)
          data.caseNumber = caseNumber;
        if (courtDate !== caseDetails.CaseInformation.courtDate)
          data.courtDate = courtDate;
        if (courtType !== caseDetails.CaseInformation.courtType)
          data.courtType = courtType;
        if (courtState !== caseDetails.CaseInformation.courtState)
          data.courtState = courtState;
        if (countyOf !== caseDetails.CaseInformation.countyOf)
          data.countyOf = countyOf;
        if (
          !objectsEqual(
            courthouseAddress,
            caseDetails.CaseInformation.courthouseAddress
          )
        )
          data.courthouseAddress = courthouseAddress;
        if (
          !objectsEqual(
            courthouseMailingAddress,
            caseDetails.CaseInformation.courthouseMailingAddress
          )
        )
          data.courthouseMailingAddress = courthouseMailingAddress;
        if (branchName !== caseDetails.CaseInformation.branchName)
          data.branchName = branchName;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire1",
            JSON.stringify({
              docId: caseDetails.CaseInformation.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire1");
        }
        setActiveStep(nextStep);
      }
    } else if (activeStep === 2) {
      if (
        !shouldPGFillPlaintiffInfo &&
        typeof isOrRepresentingPlaintiff !== "boolean"
      ) {
        showToast(
          "Please select if you are representing the Plaintiff, or are yourself the Plaintiff",
          "warning"
        );
      } else if (
        !shouldPGFillPlaintiffInfo &&
        !numberOfAttorneyPlaintiff.length
      ) {
        showToast("Please select number of plaintiff(s) listed!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.firstName.length).length
      ) {
        showToast("Please enter plaintiff's first name!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.lastName.length).length
      ) {
        showToast("Please enter plaintiff's last name!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.address)
          .filter((address) => !address.street.length).length
      ) {
        showToast("Please enter plaintiff's street address!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.address)
          .filter((address) => !address.city.length).length
      ) {
        showToast("Please enter plaintiff's city address!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.address)
          .filter((address) => !address.state.length).length
      ) {
        showToast("Please enter plaintiff's state address!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.address)
          .filter((address) => !address.zipCode.length).length
      ) {
        showToast("Please enter plaintiff's address's zip code!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        Object.values(plaintiffsDetail)
          .map((o) => o.address)
          .filter((address) => !address.country.length).length
      ) {
        showToast("Please enter plaintiff's address's country!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        !numberOfAttorneysRepresentingPlaintiff.length
      ) {
        showToast(
          "Please select number of attorney's representing plaintiff!",
          "warning"
        );
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.firstName.length).length
      ) {
        showToast("Please enter plaintiff's attorney's first name!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.lastName.length).length
      ) {
        showToast("Please enter plaintiff's attorney's last name!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.barNumber)
          .filter((barNumber) => !barNumber.length).length
      ) {
        showToast("Please enter plaintiff's attorney bar number!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        [].concat
          .apply(
            [],
            Object.values(plaintiffAttorneysDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter(
            (p) => p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber)
          ).length
      ) {
        showToast(
          "Invalid phone number, please type-in correct phone number!",
          "warning"
        );
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        [].concat
          .apply(
            [],
            Object.values(plaintiffAttorneysDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter((p) => p.phoneNumber.length && !p.type.length).length
      ) {
        showToast(
          "Please select the appropriate phone number types for all the Attorneys numbers!",
          "warning"
        );
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.email)
          .filter((email) => !email.length).length
      ) {
        showToast("Please enter plaintiff's attorney email!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.email)
          .filter((email) => !validateEmail(email)).length
      ) {
        showToast("Invalid plaintiff's attorney email address!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.street.length).length
      ) {
        showToast("Please enter plaintiff's attorney firm street!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.city.length).length
      ) {
        showToast("Please enter plaintiff's attorney firm city!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.state.length).length
      ) {
        showToast("Please enter plaintiff's attorney firm state!", "warning");
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.zipCode.length).length
      ) {
        showToast(
          "Please enter plaintiff's attorney firm zip code!",
          "warning"
        );
      } else if (
        !shouldPGFillPlaintiffInfo &&
        numberOfAttorneysRepresentingPlaintiff !== "0" &&
        isOrRepresentingPlaintiff === true &&
        Object.values(plaintiffAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.country.length).length
      ) {
        showToast("Please enter plaintiff's attorney firm country!", "warning");
      } else {
        let data = {};
        if (
          !objectsEqual(
            plaintiffsDetail,
            caseDetails.PlaintiffInformation.plaintiffsDetail
          )
        )
          data.plaintiffsDetail = plaintiffsDetail;
        if (
          numberOfAttorneyPlaintiff !==
          caseDetails.PlaintiffInformation.numberOfAttorneyPlaintiff
        )
          data.numberOfAttorneyPlaintiff = numberOfAttorneyPlaintiff;
        if (
          isOrRepresentingPlaintiff !==
          caseDetails.PlaintiffInformation.isOrRepresentingPlaintiff
        )
          data.isOrRepresentingPlaintiff = isOrRepresentingPlaintiff;
        if (
          shouldPGFillPlaintiffInfo !==
          caseDetails.PlaintiffInformation.shouldPGFillPlaintiffInfo
        )
          data.shouldPGFillPlaintiffInfo = shouldPGFillPlaintiffInfo;
        if (
          numberOfAttorneysRepresentingPlaintiff !==
          caseDetails.PlaintiffInformation
            .numberOfAttorneysRepresentingPlaintiff
        )
          data.numberOfAttorneysRepresentingPlaintiff =
            numberOfAttorneysRepresentingPlaintiff;
        if (
          !objectsEqual(
            plaintiffAttorneysDetail,
            caseDetails.PlaintiffInformation.plaintiffAttorneysDetail
          )
        )
          data.plaintiffAttorneysDetail = plaintiffAttorneysDetail;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire2",
            JSON.stringify({
              docId: caseDetails.PlaintiffInformation.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire2");
        }
        setActiveStep(nextStep);
      }
    } else if (activeStep === 3) {
      if (
        !shouldPGFillDefendantInfo &&
        typeof isOrRepresentingDefendant !== "boolean"
      ) {
        showToast(
          "Please select if you are representing the Defendant, or are yourself the Defendant",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        !numberOfAttorneyDefendant.length
      ) {
        showToast("Please select number of defendant(s) listed!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.firstName.length).length
      ) {
        showToast("Please enter defendant's first name!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.lastName.length).length
      ) {
        showToast("Please enter defendant's last name!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.address)
          .filter((address) => !address.street.length).length
      ) {
        showToast("Please enter defendant's street address!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.address)
          .filter((address) => !address.city.length).length
      ) {
        showToast("Please enter defendant's city address!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.address)
          .filter((address) => !address.state.length).length
      ) {
        showToast("Please enter defendant's state!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.address)
          .filter((address) => !address.zipCode.length).length
      ) {
        showToast("Please enter defendant's zip code!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        Object.values(defendantsDetail)
          .map((o) => o.address)
          .filter((address) => !address.country.length).length
      ) {
        showToast("Please enter defendant's country!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        !numberOfAttorneysRepresentingDefendant.length
      ) {
        showToast(
          "Please select number of attorney's representing defendant!",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.firstName.length).length
      ) {
        showToast("Please enter defendant's attorney's first name!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.lastName.length).length
      ) {
        showToast("Please enter defendant's attorney's last name!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.barNumber)
          .filter((barNumber) => !barNumber.length).length
      ) {
        showToast("Please enter defendant's attorney's bar number!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        [].concat
          .apply(
            [],
            Object.values(defendantAttorneysDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter(
            (p) => p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber)
          ).length
      ) {
        showToast(
          "Invalid phone number, please type-in correct phone number!",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        [].concat
          .apply(
            [],
            Object.values(defendantAttorneysDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter((p) => p.phoneNumber.length && !p.type.length).length
      ) {
        showToast(
          "Please select the appropriate phone number types for all the Attorneys numbers!",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.email)
          .filter((email) => !email.length).length
      ) {
        showToast("Please enter defendant's attorney's email!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.email)
          .filter((email) => !validateEmail(email)).length
      ) {
        showToast("Invalid defendant's attorney's email address!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.street.length).length
      ) {
        showToast(
          "Please enter defendant's attorney's firm street!",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.city.length).length
      ) {
        showToast("Please enter defendant's attorney's firm city!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.state.length).length
      ) {
        showToast("Please enter defendant's attorney's firm state!", "warning");
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.zipCode.length).length
      ) {
        showToast(
          "Please enter defendant's attorney's firm zip code!",
          "warning"
        );
      } else if (
        !shouldPGFillDefendantInfo &&
        numberOfAttorneysRepresentingDefendant !== "0" &&
        isOrRepresentingDefendant === true &&
        Object.values(defendantAttorneysDetail)
          .map((o) => o.address)
          .filter((address) => !address.country.length).length
      ) {
        showToast(
          "Please enter defendant's attorney's firm country!",
          "warning"
        );
      } else {
        let data = {};
        if (
          !objectsEqual(
            defendantsDetail,
            caseDetails.DefendantInformation.defendantsDetail
          )
        )
          data.defendantsDetail = defendantsDetail;
        if (
          numberOfAttorneyDefendant !==
          caseDetails.DefendantInformation.numberOfAttorneyDefendant
        )
          data.numberOfAttorneyDefendant = numberOfAttorneyDefendant;
        if (
          isOrRepresentingDefendant !==
          caseDetails.DefendantInformation.isOrRepresentingDefendant
        )
          data.isOrRepresentingDefendant = setIsOrRepresentingDefendant;
        if (
          shouldPGFillDefendantInfo !==
          caseDetails.DefendantInformation.shouldPGFillDefendantInfo
        )
          data.shouldPGFillDefendantInfo = shouldPGFillDefendantInfo;
        if (
          numberOfAttorneysRepresentingDefendant !==
          caseDetails.DefendantInformation
            .numberOfAttorneysRepresentingDefendant
        )
          data.numberOfAttorneysRepresentingDefendant =
            numberOfAttorneysRepresentingDefendant;
        console.log(
          defendantAttorneysDetail,
          caseDetails.DefendantInformation.defendantAttorneysDetail
        );
        console.log(
          objectsEqual(
            defendantAttorneysDetail,
            caseDetails.DefendantInformation.defendantAttorneysDetail
          )
        );
        if (
          Object.values(defendantAttorneysDetail).length &&
          Object.values(
            caseDetails.DefendantInformation.defendantAttorneysDetail
          ).length &&
          !objectsEqual(
            defendantAttorneysDetail,
            caseDetails.DefendantInformation.defendantAttorneysDetail
          )
        )
          data.defendantAttorneysDetail = defendantAttorneysDetail;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire3",
            JSON.stringify({
              docId: caseDetails.DefendantInformation.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire3");
        }
        setActiveStep(nextStep);
      }
    } else if (activeStep === 4) {
      if (
        typeof numberOfCaseFilesBeingServed !== "number" &&
        !numberOfCaseFilesBeingServed.length
      ) {
        showToast("Please select how many case files being served!", "warning");
      } else if (
        typeof howManyIndividualsServed !== "number" &&
        !howManyIndividualsServed.length
      ) {
        showToast(
          "Please select how many individuals being served!",
          "warning"
        );
      } else if (
        Object.values(serveesDetail)
          .map((o) => o.fullName)
          .filter((fullName) => !fullName.length).length
      ) {
        showToast(
          "Please enter the full names of all the servees that are being served!",
          "warning"
        );
      } else if (
        Object.values(serveesDetail)
          .map((o) => o.dob)
          .filter((dob) => !dob.length).length
      ) {
        showToast(
          "Please enter the date of births for all the servees that are being served!",
          "warning"
        );
      } else if (
        [].concat
          .apply(
            [],
            Object.values(serveesDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter(
            (p) => p.phoneNumber.length && !validatePhoneNumber(p.phoneNumber)
          ).length
      ) {
        showToast(
          "Invalid phone number, please type-in correct phone number!",
          "warning"
        );
      } else if (
        [].concat
          .apply(
            [],
            Object.values(serveesDetail)
              .map((o) => o.phoneNumbers)
              .map((o) => Object.values(o))
          )
          .filter((p) => p.phoneNumber.length && !p.type.length).length
      ) {
        showToast(
          "Please select the phone number types for all the servees that are being served!",
          "warning"
        );
      } else if (
        Object.values(serveesDetail)
          .map((o) => o.email)
          .filter((email) => email.length && !validateEmail(email)).length
      ) {
        showToast(
          "One or more invalid email addresses encountered!",
          "warning"
        );
      } else if (
        [].concat
          .apply(
            [],
            Object.values(serveesDetail)
              .map((o) => o.coResidents)
              .map((o) => Object.values(o))
          )
          .filter((p) => p.name.length && !p.relation.length).length
      ) {
        showToast(
          "Please select the relation of co-residents to the servee for all the servees that are being served!",
          "warning"
        );
      } else if (
        Object.values(serveesDetail)
          .map((o) => o.isEmployed)
          .filter((isEmployed) => !isEmployed.length).length
      ) {
        showToast(
          "Please select the employment option for all the servees that are being served!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.locationType.length
            )
          )
        ).length
      ) {
        showToast(
          "For all service addresses, please select the kind of location being served!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.address.street.length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter street address for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.address.city.length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter city address for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.address.state.length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter state address for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.address.zipCode.length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter zip code address for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => !o.address.country.length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter country address for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter((o) => !o.typeOfServe.length)
          )
        ).length
      ) {
        showToast(
          "Please select the type of serve for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.requireFirst24HourService !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "Please select if a service attempt should be made within the first 24 hours for all service addresses!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.requireRushService !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if you require a rush service!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.requireStakeOutService !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if you require a stake out service!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter((o) => !o.ceaseDate.length)
          )
        ).length
      ) {
        showToast(
          "For every service address, please provide a date when service attempts should cease!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.shouldSubServeToCompanion !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if subservice is allowed!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.shouldDropServe !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if drop/force serve is allowed!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.shouldLeaveDoorTag !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if process server should leave a door tag!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.shouldPostDocsWithBand !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if process server should post documents with a rubber band!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) => typeof o.isThereAnAgentOfService !== "boolean"
            )
          )
        ).length
      ) {
        showToast(
          "For every service address, please select if there is an agent of service!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) =>
                o.isThereAnAgentOfService &&
                Object.values(o.agentsOfService).filter(
                  (o) => !o.firstName.length
                ).length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter first names of all the agents of service!",
          "warning"
        );
      } else if (
        [].concat.apply(
          [],
          Object.values(serveesDetail).map((o) =>
            Object.values(o.serviceDetails).filter(
              (o) =>
                o.isThereAnAgentOfService &&
                Object.values(o.agentsOfService).filter(
                  (o) => !o.lastName.length
                ).length
            )
          )
        ).length
      ) {
        showToast(
          "Please enter last names of all the agents of service!",
          "warning"
        );
      } else {
        let data = {};
        if (
          numberOfCaseFilesBeingServed !==
          caseDetails.ServeeDocumentedData.numberOfCaseFilesBeingServed
        )
          data.numberOfCaseFilesBeingServed = numberOfCaseFilesBeingServed;
        if (
          howManyIndividualsServed !==
          caseDetails.ServeeDocumentedData.howManyIndividualsServed
        )
          data.howManyIndividualsServed = howManyIndividualsServed;
        if (
          !objectsEqual(
            serveesDetail,
            caseDetails.ServeeDocumentedData.serveesDetail
          )
        )
          data.serveesDetail = serveesDetail;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire4",
            JSON.stringify({
              docId: caseDetails.ServeeDocumentedData.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire4");
        }
        setActiveStep(nextStep);
      }
    } else if (activeStep === 5) {
      if (typeof serveIndividualAtEmployment !== "boolean") {
        showToast(
          "Please select should the servee be served at the place of employment!",
          "warning"
        );
      } else if (typeof requireServerNotifyPersonOfInterest !== "boolean") {
        showToast(
          "Please select should process server verbally notify the Servee",
          "warning"
        );
      } else if (typeof serverContactServeeByPhone !== "boolean") {
        showToast(
          "Please select should process server Contact the Servee by Phone",
          "warning"
        );
      } else if (typeof paralegalAttorneyClientContactServee !== "boolean") {
        showToast(
          "Please select whether paralegal/attorney, or your client contacted the Individual regarding service on this case",
          "warning"
        );
      } else {
        let data = {};
        if (
          serveIndividualAtEmployment !==
          caseDetails.ClearanceOfAction.serveIndividualAtEmployment
        )
          data.serveIndividualAtEmployment = serveIndividualAtEmployment;
        if (
          requireServerNotifyPersonOfInterest !==
          caseDetails.ClearanceOfAction.requireServerNotifyPersonOfInterest
        )
          data.requireServerNotifyPersonOfInterest =
            requireServerNotifyPersonOfInterest;
        if (
          serverContactServeeByPhone !==
          caseDetails.ClearanceOfAction.serverContactServeeByPhone
        )
          data.serverContactServeeByPhone = serverContactServeeByPhone;
        if (
          paralegalAttorneyClientContactServee !==
          caseDetails.ClearanceOfAction.paralegalAttorneyClientContactServee
        )
          data.paralegalAttorneyClientContactServee =
            paralegalAttorneyClientContactServee;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire5",
            JSON.stringify({
              docId: caseDetails.ClearanceOfAction.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire5");
        }
        setActiveStep(nextStep);
      }
    } else if (activeStep === 6) {
      let data = {};
      const emptyObj = {
        fullName: { firstName: "", middleName: "", lastName: "" },
        gender: "",
        ethnicity: "",
        height: "",
        weight: "",
        hairColor: "",
        eyeColor: "",
        physicalOutline: "",
        image: null,
      };
      if (
        Object.values(serveesPhysicalDescription).filter(
          (o) => !objectsEqual(o, emptyObj)
        ).length
      ) {
        let serveesFinalPhysicalDescription = {};
        const serveesOldPhysicalDescription = JSON.parse(
          JSON.stringify(
            caseDetails.ServeePhysicalDescription.serveesPhysicalDescription
          )
        );
        const serveesNewPhysicalDescription = JSON.parse(
          JSON.stringify(serveesPhysicalDescription)
        );
        for (
          let index = 0;
          index <
          (Object.keys(serveesOldPhysicalDescription).length >
          Object.keys(serveesNewPhysicalDescription).length
            ? Object.keys(serveesOldPhysicalDescription).length
            : Object.keys(serveesNewPhysicalDescription).length);
          index++
        ) {
          delete serveesNewPhysicalDescription[index].image;
          if (serveesOldPhysicalDescription[index].hasOwnProperty("image")) {
            delete serveesOldPhysicalDescription[index].image;
          } else {
            delete serveesOldPhysicalDescription[index].imageURI;
            delete serveesOldPhysicalDescription[index].imagePath;
          }
          if (
            !objectsEqual(
              serveesOldPhysicalDescription[index],
              serveesNewPhysicalDescription[index]
            )
          ) {
            serveesFinalPhysicalDescription[index] =
              serveesPhysicalDescription[index];
          } else if (serveesPhysicalDescription[index].image !== null) {
            serveesFinalPhysicalDescription[index] = {
              image: serveesPhysicalDescription[index].image,
            };
            if (
              caseDetails.ServeePhysicalDescription.serveesPhysicalDescription[
                index
              ]?.imagePath
            )
              serveesFinalPhysicalDescription[index] = {
                ...serveesFinalPhysicalDescription[index],
                oldImagePath:
                  caseDetails.ServeePhysicalDescription
                    .serveesPhysicalDescription[index].imagePath,
              };
          }
        }
        data.serveesPhysicalDescription = serveesFinalPhysicalDescription;
      }
      if (Object.keys(data).length) {
        localStorage.setItem(
          "Questionaire6",
          JSON.stringify({
            docId: caseDetails.ServeePhysicalDescription.docId,
            ...data,
          })
        );
      } else {
        localStorage.removeItem("Questionaire6");
      }
      setActiveStep(nextStep);
    } else if (activeStep === 7) {
      let data = {};
      if (
        !objectsEqual(
          vehiclesInformation,
          caseDetails.VehicleInformation.vehiclesInformation
        )
      )
        data.vehiclesInformation = vehiclesInformation;
      if (Object.keys(data).length) {
        localStorage.setItem(
          "Questionaire7",
          JSON.stringify({
            docId: caseDetails.VehicleInformation.docId,
            ...data,
          })
        );
      } else {
        localStorage.removeItem("Questionaire7");
      }
      setActiveStep(nextStep);
    } else if (activeStep === 8) {
      if (typeof requireZipFileService !== "boolean") {
        showToast(
          "Please select if you require a zip file service at a court house!",
          "warning"
        );
      } else if (requireZipFileService && !ifYesListAddress.length) {
        showToast("Please enter address for zip filing!", "warning");
      } else if (typeof requireBodyCamFootage !== "boolean") {
        showToast(
          "Please select if you require body cam footage of service!",
          "warning"
        );
      } else if (typeof poBoxAllowedToServe !== "boolean") {
        showToast(
          "Please select if P.O. box is allowed to be served!",
          "warning"
        );
      } else if (typeof requireSkipTracingService !== "boolean") {
        showToast(
          "Please select if you require skip tracing service!",
          "warning"
        );
      } else if (typeof requireServiceByMail !== "boolean") {
        showToast(
          "Please select if you require a service by secured postal mail with signature!",
          "warning"
        );
      } else if (typeof requireByEmail !== "boolean") {
        showToast(
          "Please select if you require a service by E-mail!",
          "warning"
        );
      } else if (typeof obtainNewDeliveryLocation !== "boolean") {
        showToast(
          "Please select if process server obtains a new delivery location from the servee!",
          "warning"
        );
      } else {
        let data = {};
        if (
          specifyDatesForStakeOutService !==
          caseDetails.OfferedServices.specifyDatesForStakeOutService
        )
          data.specifyDatesForStakeOutService = specifyDatesForStakeOutService;
        if (
          requireSkipTracingService !==
          caseDetails.OfferedServices.requireSkipTracingService
        )
          data.requireSkipTracingService = requireSkipTracingService;
        if (
          requireBodyCamFootage !==
          caseDetails.OfferedServices.requireBodyCamFootage
        )
          data.requireBodyCamFootage = requireBodyCamFootage;
        if (
          obtainNewDeliveryLocation !==
          caseDetails.OfferedServices.obtainNewDeliveryLocation
        )
          data.obtainNewDeliveryLocation = obtainNewDeliveryLocation;
        if (
          poBoxAllowedToServe !==
          caseDetails.OfferedServices.poBoxAllowedToServe
        )
          data.poBoxAllowedToServe = poBoxAllowedToServe;
        if (
          requireServiceByMail !==
          caseDetails.OfferedServices.requireServiceByMail
        )
          data.requireServiceByMail = requireServiceByMail;
        if (requireByEmail !== caseDetails.OfferedServices.requireByEmail)
          data.requireByEmail = requireByEmail;
        if (
          specificCourtInstruction !==
          caseDetails.OfferedServices.specificCourtInstruction
        )
          data.specificCourtInstruction = specificCourtInstruction;
        if (
          requireZipFileService !==
          caseDetails.OfferedServices.requireZipFileService
        )
          data.requireZipFileService = requireZipFileService;
        if (ifYesListAddress !== caseDetails.OfferedServices.ifYesListAddress)
          data.ifYesListAddress = ifYesListAddress;
        if (Object.keys(data).length) {
          localStorage.setItem(
            "Questionaire8",
            JSON.stringify({
              docId: caseDetails.OfferedServices.docId,
              ...data,
            })
          );
        } else {
          localStorage.removeItem("Questionaire8");
        }
        setActiveStep(nextStep);
      }
    } else if(activeStep === 9) {
      setActiveStep(nextStep);
    }
  };

  const handleOnPressCaseUpdate = () => {
    if (!status.length) {
      showToast("Please select case status!", "warning");
    } else if (status === caseDetails.CaseInformation.status) {
      showToast(
        "Nothing to update as you have not changed the case status!",
        "warning"
      );
    } else {
      const data = {
        caseId: caseDetails.caseId,
        userName: userCase.userName,
        status,
        caseTitle,
        aid: user.uid,
        adminName: `${user.firstName} ${user.middleName} ${user.lastName}`,
      };
      if (userCase?.amount !== amount) data.amount = amount;
      dispatch(updateCaseStatus(data, () => props.setModalShow(false)));
    }
  };

  const getButtonTitle = () => {
    if (activeStep === 1) {
      return "Proceed to Plaintiff Section";
    } else if (activeStep === 2) {
      return "Proceed to the Defendant Section";
    } else if (activeStep === 3) {
      return "Proceed to the Servee Documented Data Section";
    } else if (activeStep === 4) {
      return "Proceed to the Clearance of Action Section";
    } else if (activeStep === 5) {
      return "Proceed to the Servee Physical Description Section";
    } else if (activeStep === 6) {
      return "Proceed to the Vehicle Information Section";
    } else if (activeStep === 7) {
      return "Proceed to the Offered Services Section";
    } else if (activeStep === 8) {
      return "Proceed to Document Upload";
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem("Questionaire1");
    localStorage.removeItem("Questionaire2");
    localStorage.removeItem("Questionaire3");
    localStorage.removeItem("Questionaire4");
    localStorage.removeItem("Questionaire5");
    localStorage.removeItem("Questionaire6");
    localStorage.removeItem("Questionaire7");
    localStorage.removeItem("Questionaire8");
  };

  const handleResetForms = () => {
    // Reset Form 1
    setOwnerOfService("");
    setStatus("");
    setAmount("");
    setCaseTitle("");
    setCaseNumber("");
    setCourtDate("");
    setCourtType("");
    setCourtState("");
    setCountyOf("");
    setCourthouseAddress({
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
    setCourthouseMailingAddress({
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    });
    setBranchName("");
    // Reset Form 2
    setPlaintiffsDetail({});
    setShouldPGFillPlaintiffInfo(false);
    setIsOrRepresentingPlaintiff("");
    setNumberOfAttorneyPlaintiff("");
    setPlaintiffAttorneysDetail({});
    setNumberOfAttorneysRepresentingPlaintiff("");
    // Reset Form 3
    setDefendantsDetail({});
    setShouldPGFillDefendantInfo(false);
    setIsOrRepresentingDefendant("");
    setNumberOfAttorneyDefendant("");
    setNumberOfAttorneysRepresentingDefendant("");
    setDefendantAttorneysDetail({});
    // Reset Form 4
    setNumberOfCaseFilesBeingServed("");
    setHowManyIndividualsServed("");
    setServeesDetail({});
    // Reset Form 5
    setServeIndividualAtEmployment("");
    setRequireServerNotifyPersonOfInterest("");
    setServerContactServeeByPhone("");
    setParalegalAttorneyClientContactServee("");
    // Reset Form 6
    setServeesPhysicalDescription({
      0: {
        fullName: { firstName: "", middleName: "", lastName: "" },
        gender: "",
        ethnicity: "",
        height: "",
        weight: "",
        hairColor: "",
        eyeColor: "",
        physicalOutline: "",
        image: null,
      },
    });
    // Reset Form 7
    setVehiclesInformation({
      0: {
        insuranceCompany: "",
        licencePlateNumber: "",
        vinNumber: "",
        yearOfMake: "",
        color: "",
        modelType: "",
      },
    });
    // Reset Form 8
    setSpecifyDatesForStakeOutService("");
    setRequireSkipTracingService("");
    setRequireBodyCamFootage("");
    setObtainNewDeliveryLocation("");
    setPOBoxAllowedToServe("");
    setRequireServiceByMail("");
    setRequireByEmail("");
    setSpecificCourtInstruction("");
    setRequireZipFileService("");
    setIfYesListAddress("");
    setActiveStep(1);
    setShowResetModal(false);
    clearLocalStorage();
  };

  const onModalHide = () => {
    props.toggleOnlyCaseStatusEditable &&
      props.toggleOnlyCaseStatusEditable(true);
    props.setModalShow(false);
  };

  return (
    <>
      <Modal
        show={props.modalShow}
        onHide={onModalHide}
        size="xl"
        aria-labelledby={`Update Case ${onlyCaseStatusEditable && "Status"}`}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {isFormDisabled ? "View" : "Update"} Case{" "}
            {onlyCaseStatusEditable && "Status"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isFetchingCaseDetails ? (
            <div
              style={{
                boxSizing: "border-box",
                backgroundColor: "white",
                borderRadius: 6,
                padding: 20,
                width: "100%",
              }}
            >
              <div
                style={{
                  height: "70vh",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{ height: 25, width: 25 }}
                    className="spinner-border"
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Element name="stepper" className="element">
                <Stepper
                  styleConfig={{ activeBgColor: "#a0a0a0" }}
                  activeStep={activeStep - 1}
                >
                  <Step
                    style={
                      activeStep === 1 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(1)}
                    label="Step 1"
                  />
                  <Step
                    style={
                      activeStep === 2 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(2)}
                    label="Step 2"
                  />
                  <Step
                    style={
                      activeStep === 3 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(3)}
                    label="Step 3"
                  />
                  <Step
                    style={
                      activeStep === 4 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(4)}
                    label="Step 4"
                  />
                  <Step
                    style={
                      activeStep === 5 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(5)}
                    label="Step 5"
                  />
                  <Step
                    style={
                      activeStep === 6 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(6)}
                    label="Step 6"
                  />
                  <Step
                    style={
                      activeStep === 7 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(7)}
                    label="Step 7"
                  />
                  <Step
                    style={
                      activeStep === 8 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(8)}
                    label="Step 8"
                  />
                  <Step
                    style={
                      activeStep === 9 ? { backgroundColor: "#A10308" } : {}
                    }
                    disabled={false}
                    onClick={() => handleOnPressNext(9)}
                    label="Step 9"
                  />
                </Stepper>
              </Element>
              <br />
              {!onlyCaseStatusEditable && !isFormDisabled && (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <button
                    onClick={() => setShowResetModal(true)}
                    className="btn btn-primary"
                  >
                    Reset All Forms
                  </button>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                {activeStep > 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep - 1)}
                    className="btn btn-primary"
                  >
                    Previous Step
                  </button>
                )}
              </div>
              {activeStep === 1 && (
                <Questionaire1
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  onlyCaseStatusEditable={
                    onlyCaseStatusEditable || !isFormDisabled
                  }
                  ownerOfService={ownerOfService}
                  setOwnerOfService={setOwnerOfService}
                  caseStatus={status}
                  setCaseStatus={setStatus}
                  amount={amount}
                  setAmount={setAmount}
                  caseTitle={caseTitle}
                  setCaseTitle={setCaseTitle}
                  caseNumber={caseNumber}
                  setCaseNumber={setCaseNumber}
                  courtDate={courtDate}
                  setCourtDate={setCourtDate}
                  courtType={courtType}
                  setCourtType={setCourtType}
                  courtState={courtState}
                  setCourtState={setCourtState}
                  countyOf={countyOf}
                  setCountyOf={setCountyOf}
                  branchName={branchName}
                  setBranchName={setBranchName}
                  courthouseAddress={courthouseAddress}
                  setCourthouseAddress={setCourthouseAddress}
                  courthouseMailingAddress={courthouseMailingAddress}
                  setCourthouseMailingAddress={setCourthouseMailingAddress}
                />
              )}
              {activeStep === 2 && (
                <Questionaire2
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  isOrRepresentingPlaintiff={isOrRepresentingPlaintiff}
                  setIsOrRepresentingPlaintiff={setIsOrRepresentingPlaintiff}
                  shouldPGFillPlaintiffInfo={shouldPGFillPlaintiffInfo}
                  setShouldPGFillPlaintiffInfo={setShouldPGFillPlaintiffInfo}
                  plaintiffsDetail={plaintiffsDetail}
                  setPlaintiffsDetail={setPlaintiffsDetail}
                  numberOfAttorneyPlaintiff={numberOfAttorneyPlaintiff}
                  setNumberOfAttorneyPlaintiff={setNumberOfAttorneyPlaintiff}
                  plaintiffAttorneysDetail={plaintiffAttorneysDetail}
                  setPlaintiffAttorneysDetail={setPlaintiffAttorneysDetail}
                  numberOfAttorneysRepresentingPlaintiff={
                    numberOfAttorneysRepresentingPlaintiff
                  }
                  setNumberOfAttorneysRepresentingPlaintiff={
                    setNumberOfAttorneysRepresentingPlaintiff
                  }
                />
              )}
              {activeStep === 3 && (
                <Questionaire3
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  isOrRepresentingDefendant={isOrRepresentingDefendant}
                  setIsOrRepresentingDefendant={setIsOrRepresentingDefendant}
                  shouldPGFillDefendantInfo={shouldPGFillDefendantInfo}
                  setShouldPGFillDefendantInfo={setShouldPGFillDefendantInfo}
                  numberOfAttorneyDefendant={numberOfAttorneyDefendant}
                  setNumberOfAttorneyDefendant={setNumberOfAttorneyDefendant}
                  defendantsDetail={defendantsDetail}
                  setDefendantsDetail={setDefendantsDetail}
                  numberOfAttorneysRepresentingDefendant={
                    numberOfAttorneysRepresentingDefendant
                  }
                  setNumberOfAttorneysRepresentingDefendant={
                    setNumberOfAttorneysRepresentingDefendant
                  }
                  defendantAttorneysDetail={defendantAttorneysDetail}
                  setDefendantAttorneysDetail={setDefendantAttorneysDetail}
                />
              )}
              {activeStep === 4 && (
                <Questionaire4
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  numberOfCaseFilesBeingServed={numberOfCaseFilesBeingServed}
                  setNumberOfCaseFilesBeingServed={
                    setNumberOfCaseFilesBeingServed
                  }
                  howManyIndividualsServed={howManyIndividualsServed}
                  setHowManyIndividualsServed={setHowManyIndividualsServed}
                  serveesDetail={serveesDetail}
                  setServeesDetail={setServeesDetail}
                />
              )}
              {activeStep === 5 && (
                <Questionaire5
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  serveIndividualAtEmployment={serveIndividualAtEmployment}
                  setServeIndividualAtEmployment={
                    setServeIndividualAtEmployment
                  }
                  requireServerNotifyPersonOfInterest={
                    requireServerNotifyPersonOfInterest
                  }
                  setRequireServerNotifyPersonOfInterest={
                    setRequireServerNotifyPersonOfInterest
                  }
                  serverContactServeeByPhone={serverContactServeeByPhone}
                  setServerContactServeeByPhone={setServerContactServeeByPhone}
                  paralegalAttorneyClientContactServee={
                    paralegalAttorneyClientContactServee
                  }
                  setParalegalAttorneyClientContactServee={
                    setParalegalAttorneyClientContactServee
                  }
                />
              )}
              {activeStep === 6 && (
                <Questionaire6
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  serveesPhysicalDescription={serveesPhysicalDescription}
                  setServeesPhysicalDescription={setServeesPhysicalDescription}
                />
              )}
              {activeStep === 7 && (
                <Questionaire7
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  vehiclesInformation={vehiclesInformation}
                  setVehiclesInformation={setVehiclesInformation}
                />
              )}
              {activeStep === 8 && (
                <Questionaire8
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  specifyDatesForStakeOutService={
                    specifyDatesForStakeOutService
                  }
                  setSpecifyDatesForStakeOutService={
                    setSpecifyDatesForStakeOutService
                  }
                  requireSkipTracingService={requireSkipTracingService}
                  setRequireSkipTracingService={setRequireSkipTracingService}
                  requireBodyCamFootage={requireBodyCamFootage}
                  setRequireBodyCamFootage={setRequireBodyCamFootage}
                  obtainNewDeliveryLocation={obtainNewDeliveryLocation}
                  setObtainNewDeliveryLocation={setObtainNewDeliveryLocation}
                  poBoxAllowedToServe={poBoxAllowedToServe}
                  setPOBoxAllowedToServe={setPOBoxAllowedToServe}
                  requireServiceByMail={requireServiceByMail}
                  setRequireServiceByMail={setRequireServiceByMail}
                  requireByEmail={requireByEmail}
                  setRequireByEmail={setRequireByEmail}
                  specificCourtInstruction={specificCourtInstruction}
                  setSpecificCourtInstruction={setSpecificCourtInstruction}
                  requireZipFileService={requireZipFileService}
                  setRequireZipFileService={setRequireZipFileService}
                  ifYesListAddress={ifYesListAddress}
                  setIfYesListAddress={setIfYesListAddress}
                />
              )}
              {activeStep === 9 && (
                <FileSubmission
                  isFormUpdating={!onlyCaseStatusEditable}
                  isFormDisabled={onlyCaseStatusEditable || isFormDisabled}
                  docId={caseDetails.FileSubmission.docId}
                  documentPath={caseDetails.FileSubmission.documentPath}
                  documentURI={caseDetails.FileSubmission.documentURI}
                  numberOfCaseFilesBeingServed={numberOfCaseFilesBeingServed}
                  fileData={caseDetails.FileSubmission.fileData}
                  toggleOnlyCaseStatusEditable={
                    props.toggleOnlyCaseStatusEditable
                  }
                  onPressCaseUpdate={
                    onlyCaseStatusEditable && handleOnPressCaseUpdate
                  }
                />
              )}
              <div
                className={`${
                  onlyCaseStatusEditable && activeStep === 9
                    ? "d-inline"
                    : "d-flex"
                } justify-content-end`}
              >
                {onlyCaseStatusEditable && activeStep !== 9 && (
                  <button
                    className="btn btn-primary mt-1 mb-1 mr-1"
                    onClick={() => props.toggleOnlyCaseStatusEditable(false)}
                  >
                    Edit Case
                  </button>
                )}
                {activeStep !== 9 && (
                  <Element name="next-btn" className="element">
                    <RSLink
                      activeClass="active"
                      to="stepper"
                      spy={true}
                      smooth={true}
                      offset={250}
                      duration={500}
                      delay={300}
                    >
                      <button
                        className="btn btn-primary mt-1 mb-1"
                        onClick={() => handleOnPressNext(activeStep + 1)}
                      >
                        {getButtonTitle()}
                      </button>
                    </RSLink>
                  </Element>
                )}
              </div>
              <br />
              <ResetQuestionaireConfirmation
                showModal={showResetModal}
                handleModalClose={() => setShowResetModal(false)}
                handleOnClickConfirm={handleResetForms}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
