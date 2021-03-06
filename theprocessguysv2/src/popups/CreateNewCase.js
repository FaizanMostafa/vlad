import { useEffect, useState } from "react";
import { Link as RSLink, Element } from "react-scroll";
import { Stepper, Step } from "react-form-stepper";
import { Modal, Button } from "react-bootstrap";
import { showToast, validateEmail, validatePhoneNumber } from "../utils";
import { ResetQuestionaireConfirmation } from "../popups";
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

export const CreateNewCase = (props) => {
  const [show, setShow] = useState(false);
  const [activeStep, setActiveStep] = useState(1);
  const [showResetModal, setShowResetModal] = useState(false);

  // Questionaire Form 1
  const [ownerOfService, setOwnerOfService] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState(null);
  const [caseTitle, setCaseTitle] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [courtDate, setCourtDate] = useState("");
  const [courtType, setCourtType] = useState("");
  const [courtState, setCourtState] = useState("");
  const [countyOf, setCountyOf] = useState("");
  const [courthouseAddress, setCourthouseAddress] = useState({
    street: "",
    unit: "",
    city: "",
    state: { us: "", other: "" },
    zipCode: "",
    isCountryNotUS: false,
    country: "United States",
  });
  const [courthouseMailingAddress, setCourthouseMailingAddress] = useState({
    street: "",
    unit: "",
    city: "",
    state: { us: "", other: "" },
    zipCode: "",
    isCountryNotUS: false,
    country: "United States",
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
      fullName: "",
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
      owner: "",
      insuranceCompany: "",
      licensePlateNumber: "",
      vinNumber: "",
      yearOfMake: "",
      color: "",
      modelType: "",
    },
  });

  // Questionaire Form 8
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
  const [zipFilingAddress, setZipFilingAddress] = useState({
    street: "",
    unit: "",
    city: "",
    state: { us: "", other: "" },
    zipCode: "",
    isCountryNotUS: false,
    country: "United States",
  });

  useEffect(() => {
    const QuestionaireForm1 = JSON.parse(localStorage.getItem("Questionaire1"));
    const QuestionaireForm2 = JSON.parse(localStorage.getItem("Questionaire2"));
    const QuestionaireForm3 = JSON.parse(localStorage.getItem("Questionaire3"));
    const QuestionaireForm4 = JSON.parse(localStorage.getItem("Questionaire4"));
    const QuestionaireForm5 = JSON.parse(localStorage.getItem("Questionaire5"));
    const QuestionaireForm6 = JSON.parse(localStorage.getItem("Questionaire6"));
    const QuestionaireForm7 = JSON.parse(localStorage.getItem("Questionaire7"));
    const QuestionaireForm8 = JSON.parse(localStorage.getItem("Questionaire8"));
    if (QuestionaireForm1) {
      setActiveStep(2);
      if (QuestionaireForm1?.ownerOfService)
        setOwnerOfService(QuestionaireForm1.ownerOfService);
      if (QuestionaireForm1?.status) setStatus(QuestionaireForm1.status);
      if (QuestionaireForm1?.amount) setAmount(QuestionaireForm1.amount);
      if (QuestionaireForm1?.caseTitle)
        setCaseTitle(QuestionaireForm1.caseTitle);
      if (QuestionaireForm1?.caseNumber)
        setCaseNumber(QuestionaireForm1.caseNumber);
      if (QuestionaireForm1?.courtDate)
        setCourtDate(QuestionaireForm1.courtDate);
      if (QuestionaireForm1?.courtType)
        setCourtType(QuestionaireForm1.courtType);
      if (QuestionaireForm1?.courtState)
        setCourtState(QuestionaireForm1.courtState);
      if (QuestionaireForm1?.countyOf) setCountyOf(QuestionaireForm1.countyOf);
      if (QuestionaireForm1?.courthouseAddress)
        setCourthouseAddress(QuestionaireForm1.courthouseAddress);
      if (QuestionaireForm1?.courthouseMailingAddress)
        setCourthouseMailingAddress(QuestionaireForm1.courthouseMailingAddress);
      if (QuestionaireForm1?.branchName)
        setBranchName(QuestionaireForm1.branchName);
    }
    if (QuestionaireForm2) {
      setActiveStep(3);
      if (QuestionaireForm2?.isOrRepresentingPlaintiff)
        setIsOrRepresentingPlaintiff(
          QuestionaireForm2.isOrRepresentingPlaintiff
        );
      if (QuestionaireForm2?.plaintiffsDetail)
        setPlaintiffsDetail(QuestionaireForm2.plaintiffsDetail);
      if (QuestionaireForm2?.shouldPGFillPlaintiffInfo)
        setShouldPGFillPlaintiffInfo(
          QuestionaireForm2.shouldPGFillPlaintiffInfo
        );
      if (QuestionaireForm2?.numberOfAttorneyPlaintiff)
        setNumberOfAttorneyPlaintiff(
          QuestionaireForm2.numberOfAttorneyPlaintiff
        );
      if (QuestionaireForm2?.numberOfAttorneysRepresentingPlaintiff)
        setNumberOfAttorneysRepresentingPlaintiff(
          QuestionaireForm2.numberOfAttorneysRepresentingPlaintiff
        );
      if (QuestionaireForm2?.plaintiffAttorneysDetail)
        setPlaintiffAttorneysDetail(QuestionaireForm2.plaintiffAttorneysDetail);
    }
    if (QuestionaireForm3) {
      setActiveStep(4);
      if (QuestionaireForm3?.isOrRepresentingDefendant)
        setIsOrRepresentingDefendant(
          QuestionaireForm3.isOrRepresentingDefendant
        );
      if (QuestionaireForm3?.defendantsDetail)
        setDefendantsDetail(QuestionaireForm3.defendantsDetail);
      if (QuestionaireForm3?.shouldPGFillDefendantInfo)
        setShouldPGFillDefendantInfo(
          QuestionaireForm3.shouldPGFillDefendantInfo
        );
      if (QuestionaireForm3?.numberOfAttorneyDefendant)
        setNumberOfAttorneyDefendant(
          QuestionaireForm3.numberOfAttorneyDefendant
        );
      if (QuestionaireForm3?.numberOfAttorneysRepresentingDefendant)
        setNumberOfAttorneysRepresentingDefendant(
          QuestionaireForm3.numberOfAttorneysRepresentingDefendant
        );
    }
    if (QuestionaireForm4) {
      setActiveStep(5);
      if (QuestionaireForm4?.numberOfCaseFilesBeingServed)
        setNumberOfCaseFilesBeingServed(
          QuestionaireForm4.numberOfCaseFilesBeingServed
        );
      if (QuestionaireForm4?.howManyIndividualsServed)
        setHowManyIndividualsServed(QuestionaireForm4.howManyIndividualsServed);
      if (QuestionaireForm4?.serveesDetail)
        setServeesDetail(QuestionaireForm4.serveesDetail);
    }
    if (QuestionaireForm5) {
      setActiveStep(6);
      if (QuestionaireForm5?.serveIndividualAtEmployment)
        setServeIndividualAtEmployment(
          QuestionaireForm5.serveIndividualAtEmployment
        );
      if (QuestionaireForm5?.requireServerNotifyPersonOfInterest)
        setRequireServerNotifyPersonOfInterest(
          QuestionaireForm5.requireServerNotifyPersonOfInterest
        );
      if (QuestionaireForm5?.serverContactServeeByPhone)
        setServerContactServeeByPhone(
          QuestionaireForm5.serverContactServeeByPhone
        );
      if (QuestionaireForm5?.paralegalAttorneyClientContactServee)
        setParalegalAttorneyClientContactServee(
          QuestionaireForm5.paralegalAttorneyClientContactServee
        );
    }
    if (QuestionaireForm6) {
      setActiveStep(7);
      if (QuestionaireForm6?.serveesPhysicalDescription)
        setServeesPhysicalDescription(
          QuestionaireForm6.serveesPhysicalDescription
        );
    }
    if (QuestionaireForm7) {
      setActiveStep(8);
      if (QuestionaireForm7?.vehiclesInformation)
        setVehiclesInformation(QuestionaireForm7.vehiclesInformation);
    }
    if (QuestionaireForm8) {
      setActiveStep(9);
      if (QuestionaireForm8?.requireSkipTracingService)
        setRequireSkipTracingService(
          QuestionaireForm8.requireSkipTracingService
        );
      if (QuestionaireForm8?.requireBodyCamFootage)
        setRequireBodyCamFootage(QuestionaireForm8.requireBodyCamFootage);
      if (QuestionaireForm8?.obtainNewDeliveryLocation)
        setObtainNewDeliveryLocation(
          QuestionaireForm8.obtainNewDeliveryLocation
        );
      if (QuestionaireForm8?.poBoxAllowedToServe)
        setPOBoxAllowedToServe(QuestionaireForm8.poBoxAllowedToServe);
      if (QuestionaireForm8?.requireServiceByMail)
        setRequireServiceByMail(QuestionaireForm8.requireServiceByMail);
      if (QuestionaireForm8?.requireByEmail)
        setRequireByEmail(QuestionaireForm8.requireByEmail);
      if (QuestionaireForm8?.specificCourtInstruction)
        setSpecificCourtInstruction(QuestionaireForm8.specificCourtInstruction);
      if (QuestionaireForm8?.requireZipFileService)
        setRequireZipFileService(QuestionaireForm8.requireZipFileService);
      if (QuestionaireForm8?.zipFilingAddress)
        setZipFilingAddress(QuestionaireForm8.zipFilingAddress);
    }
  }, []);

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
              unit: "",
              city: "",
              state: { us: "", other: "" },
              zipCode: "",
              isCountryNotUS: false,
              country: "United States",
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
              unit: "",
              city: "",
              state: { us: "", other: "" },
              zipCode: "",
              isCountryNotUS: false,
              country: "United States",
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
              unit: "",
              city: "",
              state: { us: "", other: "" },
              zipCode: "",
              isCountryNotUS: false,
              country: "United States",
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
              unit: "",
              city: "",
              state: { us: "", other: "" },
              zipCode: "",
              isCountryNotUS: false,
              country: "United States",
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
            serviceDetails: {
              0: {
                locationType: "",
                address: {
                  sameAsMainServiceAddress: false,
                  street: "",
                  unit: "",
                  city: "",
                  state: { us: "", other: "" },
                  zipCode: "",
                  isCountryNotUS: false,
                  country: "United States",
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
    if (typeof isOrRepresentingPlaintiff === "boolean") {
      if (isOrRepresentingPlaintiff) {
        setIsOrRepresentingDefendant(false);
      } else if (!isOrRepresentingPlaintiff) {
        setIsOrRepresentingDefendant(true);
      }
    }
  }, [isOrRepresentingPlaintiff]);

  useEffect(() => {
    if (
      typeof isOrRepresentingDefendant === "boolean" &&
      isOrRepresentingDefendant
    ) {
      setIsOrRepresentingPlaintiff(false);
    }
  }, [isOrRepresentingDefendant]);

  const handleOnPressNext = (nextStep) => {
    if (activeStep === 1) {
      if (!ownerOfService.length) {
        showToast("Please enter who is the owner of this service!", "warning");
      } else if (!status.length) {
        showToast("Please select case status!", "warning");
        // } else if (!amount.length) {
        //   showToast(
        //     "Amount field cannot be empty, please type in either an amount or 0!",
        //     "warning"
        //   );
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
      } else if (
        !courthouseAddress.state.us.length ||
        (courthouseAddress.state.us === "other" &&
          !courthouseAddress.state.other.length)
      ) {
        showToast("Please select/enter courthouse state!", "warning");
      } else if (!courthouseAddress.zipCode.length) {
        showToast("Please enter courthouse zip code!", "warning");
      } else if (!courthouseAddress.country.length) {
        showToast("Please enter courthouse country!", "warning");
      } else if (!courthouseMailingAddress.street.length) {
        showToast("Please enter courthouse mailing street!", "warning");
      } else if (!courthouseMailingAddress.city.length) {
        showToast("Please enter courthouse mailing city!", "warning");
      } else if (
        !courthouseMailingAddress.state.us.length ||
        (courthouseMailingAddress.state.us === "other" &&
          !courthouseMailingAddress.state.other.length)
      ) {
        showToast("Please select/enter courthouse mailing state!", "warning");
      } else if (!courthouseMailingAddress.zipCode.length) {
        showToast("Please enter courthouse mailing zip code!", "warning");
      } else if (!courthouseMailingAddress.country.length) {
        showToast("Please enter courthouse mailing country!", "warning");
      } else if (!countyOf.length) {
        showToast("Please enter county of!", "warning");
      } else {
        let data = {
          ownerOfService,
          status,
          amount,
          caseTitle,
          caseNumber,
          courtDate,
          courtType,
          courtState,
          countyOf,
          courthouseAddress,
          courthouseMailingAddress,
          branchName,
        };
        localStorage.setItem("Questionaire1", JSON.stringify(data));
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
          .filter(
            (address) =>
              !address.state.us.length ||
              (address.state.us === "other" && !address.state.other.length)
          ).length
      ) {
        showToast("Please select/enter plaintiff's state address!", "warning");
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
          .filter(
            (address) =>
              !address.state.us.length ||
              (address.state.us === "other" && !address.state.other.length)
          ).length
      ) {
        showToast(
          "Please select/enter plaintiff's attorney firm state!",
          "warning"
        );
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
        let data = {
          plaintiffsDetail,
          numberOfAttorneyPlaintiff,
          isOrRepresentingPlaintiff,
          shouldPGFillPlaintiffInfo,
          numberOfAttorneysRepresentingPlaintiff,
          plaintiffAttorneysDetail,
        };
        localStorage.setItem("Questionaire2", JSON.stringify(data));
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
          .filter(
            (address) =>
              !address.state.us.length ||
              (address.state.us === "other" && !address.state.other.length)
          ).length
      ) {
        showToast("Please select/enter defendant's state!", "warning");
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
          .filter(
            (address) =>
              !address.state.us.length ||
              (address.state.us === "other" && !address.state.other.length)
          ).length
      ) {
        showToast(
          "Please select/enter defendant's attorney's firm state!",
          "warning"
        );
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
        let data = {
          defendantsDetail,
          numberOfAttorneyDefendant,
          isOrRepresentingDefendant,
          shouldPGFillDefendantInfo,
          numberOfAttorneysRepresentingDefendant,
          defendantAttorneysDetail,
        };
        localStorage.setItem("Questionaire3", JSON.stringify(data));
        setActiveStep(nextStep);
      }
    } else if (activeStep === 4) {
      if (!numberOfCaseFilesBeingServed.length) {
        showToast("Please select how many case files being served!", "warning");
      } else if (!howManyIndividualsServed.length) {
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
              (o) =>
                !o.address.state.us.length ||
                (o.address.state.us === "other" &&
                  !o.address.state.other.length)
            )
          )
        ).length
      ) {
        showToast(
          "Please enter select/state address for all service addresses!",
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
        let data = {
          numberOfCaseFilesBeingServed,
          howManyIndividualsServed,
          serveesDetail,
        };
        localStorage.setItem("Questionaire4", JSON.stringify(data));
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
        let data = {
          serveIndividualAtEmployment,
          requireServerNotifyPersonOfInterest,
          serverContactServeeByPhone,
          paralegalAttorneyClientContactServee,
        };
        localStorage.setItem("Questionaire5", JSON.stringify(data));
        setActiveStep(nextStep);
      }
    } else if (activeStep === 6) {
      let data = {
        serveesPhysicalDescription,
      };
      localStorage.setItem("Questionaire6", JSON.stringify(data));
      setActiveStep(nextStep);
    } else if (activeStep === 7) {
      let data = {
        vehiclesInformation,
      };
      localStorage.setItem("Questionaire7", JSON.stringify(data));
      setActiveStep(nextStep);
    } else if (activeStep === 8) {
      if (typeof requireZipFileService !== "boolean") {
        showToast(
          "Please select if you require a zip file service at a court house!",
          "warning"
        );
      } else if (requireZipFileService && !zipFilingAddress.street.length) {
        showToast("Please enter street for zip filing!", "warning");
      } else if (requireZipFileService && !zipFilingAddress.city.length) {
        showToast("Please enter city for zip filing!", "warning");
      } else if (
        (requireZipFileService && !zipFilingAddress.state.us.length) ||
        (zipFilingAddress.state.us === "other" &&
          !zipFilingAddress.state.other.length)
      ) {
        showToast("Please select/enter state for zip filing!", "warning");
      } else if (requireZipFileService && !zipFilingAddress.zipCode.length) {
        showToast("Please enter zip code for zip filing!", "warning");
      } else if (requireZipFileService && !zipFilingAddress.country.length) {
        showToast("Please enter country for zip filing!", "warning");
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
        let data = {
          requireSkipTracingService,
          requireBodyCamFootage,
          obtainNewDeliveryLocation,
          poBoxAllowedToServe,
          requireServiceByMail,
          requireByEmail,
          specificCourtInstruction,
          requireZipFileService,
          zipFilingAddress,
        };
        localStorage.setItem("Questionaire8", JSON.stringify(data));
        setActiveStep(nextStep);
      }
    } else if (activeStep === 9) {
      setActiveStep(nextStep);
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

  const handleResetForms = () => {
    // Reset Form 1
    setOwnerOfService("");
    setStatus("");
    setAmount(null);
    setCaseTitle("");
    setCaseNumber("");
    setCourtDate("");
    setCourtType("");
    setCourtState("");
    setCountyOf("");
    setCourthouseAddress({
      street: "",
      unit: "",
      city: "",
      state: { us: "", other: "" },
      zipCode: "",
      isCountryNotUS: false,
      country: "United States",
    });
    setCourthouseMailingAddress({
      street: "",
      unit: "",
      city: "",
      state: { us: "", other: "" },
      zipCode: "",
      isCountryNotUS: false,
      country: "United States",
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
        fullName: "",
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
        owner: "",
        insuranceCompany: "",
        licensePlateNumber: "",
        vinNumber: "",
        yearOfMake: "",
        color: "",
        modelType: "",
      },
    });
    // Reset Form 8
    setRequireSkipTracingService("");
    setRequireBodyCamFootage("");
    setObtainNewDeliveryLocation("");
    setPOBoxAllowedToServe("");
    setRequireServiceByMail("");
    setRequireByEmail("");
    setSpecificCourtInstruction("");
    setRequireZipFileService("");
    setZipFilingAddress({
      street: "",
      unit: "",
      city: "",
      state: { us: "", other: "" },
      zipCode: "",
      isCountryNotUS: false,
      country: "United States",
    });
    setActiveStep(1);
    setShowResetModal(false);
    localStorage.removeItem("Questionaire1");
    localStorage.removeItem("Questionaire2");
    localStorage.removeItem("Questionaire3");
    localStorage.removeItem("Questionaire4");
    localStorage.removeItem("Questionaire5");
    localStorage.removeItem("Questionaire6");
    localStorage.removeItem("Questionaire7");
    localStorage.removeItem("Questionaire8");
  };

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
        Create New Case
      </Button>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelled-by="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create New Case
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Element name="stepper" className="element">
            <Stepper
              styleConfig={{ activeBgColor: "#a0a0a0" }}
              activeStep={activeStep - 1}
            >
              <Step
                style={activeStep === 1 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(1)}
                label="Step 1"
              />
              <Step
                style={activeStep === 2 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(2)}
                label="Step 2"
              />
              <Step
                style={activeStep === 3 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(3)}
                label="Step 3"
              />
              <Step
                style={activeStep === 4 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(4)}
                label="Step 4"
              />
              <Step
                style={activeStep === 5 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(5)}
                label="Step 5"
              />
              <Step
                style={activeStep === 6 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(6)}
                label="Step 6"
              />
              <Step
                style={activeStep === 7 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(7)}
                label="Step 7"
              />
              <Step
                style={activeStep === 8 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(8)}
                label="Step 8"
              />
              <Step
                style={activeStep === 9 ? { backgroundColor: "#A10308" } : {}}
                disabled={false}
                onClick={() => handleOnPressNext(9)}
                label="Step 9"
              />
            </Stepper>
          </Element>
          <br></br>
          <div
            style={{ display: "flex", width: "100%", justifyContent: "center" }}
          >
            <button
              onClick={() => setShowResetModal(true)}
              className="btn btn-primary"
            >
              Reset All Forms
            </button>
          </div>
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
              numberOfCaseFilesBeingServed={numberOfCaseFilesBeingServed}
              setNumberOfCaseFilesBeingServed={setNumberOfCaseFilesBeingServed}
              howManyIndividualsServed={howManyIndividualsServed}
              setHowManyIndividualsServed={setHowManyIndividualsServed}
              serveesDetail={serveesDetail}
              setServeesDetail={setServeesDetail}
            />
          )}
          {activeStep === 5 && (
            <Questionaire5
              serveIndividualAtEmployment={serveIndividualAtEmployment}
              setServeIndividualAtEmployment={setServeIndividualAtEmployment}
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
              serveesPhysicalDescription={serveesPhysicalDescription}
              setServeesPhysicalDescription={setServeesPhysicalDescription}
            />
          )}
          {activeStep === 7 && (
            <Questionaire7
              vehiclesInformation={vehiclesInformation}
              setVehiclesInformation={setVehiclesInformation}
            />
          )}
          {activeStep === 8 && (
            <Questionaire8
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
              zipFilingAddress={zipFilingAddress}
              setZipFilingAddress={setZipFilingAddress}
            />
          )}
          {activeStep === 9 && (
            <FileSubmission onSuccess={() => setShow(false)} />
          )}
          {activeStep !== 9 && (
            <Element name="next-btn" className="element">
              <div className="d-flex justify-content-end">
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
              </div>
            </Element>
          )}
          <br />
          <br />
          <br />
          <ResetQuestionaireConfirmation
            showModal={showResetModal}
            handleModalClose={() => setShowResetModal(false)}
            handleOnClickConfirm={handleResetForms}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
