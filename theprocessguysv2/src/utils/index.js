import Toaster from "toastr";
import moment from "moment";

const options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "300",
  timeOut: "3000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "swing",
  showMethod: "show",
  hideMethod: "hide",
};

const showToast = (message, type = "success") => {
  if (type === "success") {
    Toaster.success(message, "Success", options);
  } else if (type === "warning") {
    Toaster.warning(message, "Warning", options);
  } else if (type === "error") {
    Toaster.error(message, "Error", options);
  } else {
    Toaster.info(message, "Info", options);
  }
};

const getMediaType = (fileName = "") => {
  if (fileName.includes(".pdf")) {
    return "application/pdf";
  } else if (fileName.includes(".docx")) {
    return "application/docx";
  } else if (fileName.includes(".doc")) {
    return "application/doc";
  } else if (fileName.includes(".jpg")) {
    return "image/jpg";
  } else if (fileName.includes(".jpeg")) {
    return "image/jpeg";
  } else if (fileName.includes(".png")) {
    return "image/png";
  }
};

const validateEmail = (email) => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const validatePhoneNumber = (phoneNumber) => {
  return /^\(\d{3}\) \d{3}\-\d{4}\s*$/.test(phoneNumber);
};

const objectsEqual = (o1, o2) => {
  return o1 !== null &&
    o2 !== null &&
    typeof o1 === "object" &&
    Object.keys(o1).length > 0
    ? Object.keys(o1).length === Object.keys(o2).length &&
        Object.keys(o1).every((p) => objectsEqual(o1[p], o2[p]))
    : o1 === o2;
};

const capitalizeString = (phrase) => {
  if (phrase)
    return phrase.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase());
  return "";
};

const getDateTimeString = (date) => {
  return moment(date).format("MMMM Do YYYY, h:mm:ss a");
};

const getUSStates = () => {
  return [
    { value: "AK", name: "Alaska" },
    { value: "TX", name: "Texas" },
    { value: "AL", name: "Alabama" },
    { value: "AR", name: "Arkansas" },
    { value: "AZ", name: "Arizona" },
    { value: "CA", name: "California" },
    { value: "CO", name: "Colorado" },
    { value: "CT", name: "Connecticut" },
    { value: "DC", name: "District of Columbia" },
    { value: "DE", name: "Delaware" },
    { value: "FL", name: "Florida" },
    { value: "GA", name: "Georgia" },
    { value: "HI", name: "Hawaii" },
    { value: "IA", name: "Iowa" },
    { value: "ID", name: "Idaho" },
    { value: "IL", name: "Illinois" },
    { value: "IN", name: "Indiana" },
    { value: "KS", name: "Kansas" },
    { value: "KY", name: "Kentucky" },
    { value: "LA", name: "Louisiana" },
    { value: "MA", name: "Massachusetts" },
    { value: "MD", name: "Maryland" },
    { value: "ME", name: "Maine" },
    { value: "MI", name: "Michigan" },
    { value: "MN", name: "Minnesota" },
    { value: "MO", name: "Missouri" },
    { value: "MS", name: "Mississippi" },
    { value: "MT", name: "Montana" },
    { value: "NC", name: "North Carolina" },
    { value: "ND", name: "North Dakota" },
    { value: "NE", name: "Nebraska" },
    { value: "NH", name: "New Hampshire" },
    { value: "NJ", name: "New Jersey" },
    { value: "NM", name: "New Mexico" },
    { value: "NV", name: "Nevada" },
    { value: "NY", name: "New York" },
    { value: "OH", name: "Ohio" },
    { value: "OK", name: "Oklahoma" },
    { value: "OR", name: "Oregon" },
    { value: "PA", name: "Pennsylvania" },
    { value: "RI", name: "Rhode Island" },
    { value: "SC", name: "South Carolina" },
    { value: "SD", name: "South Dakota" },
    { value: "TN", name: "Tennessee" },
    { value: "TX", name: "Texas" },
    { value: "UT", name: "Utah" },
    { value: "VA", name: "Virginia" },
    { value: "VT", name: "Vermont" },
    { value: "WA", name: "Washington" },
    { value: "WI", name: "Wisconsin" },
    { value: "WV", name: "West Virginia" },
    { value: "WY", name: "Wyoming" },
  ];
};

export {
  showToast,
  getUSStates,
  objectsEqual,
  getMediaType,
  validateEmail,
  capitalizeString,
  getDateTimeString,
  validatePhoneNumber,
};
