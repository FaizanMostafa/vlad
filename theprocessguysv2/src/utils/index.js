import Toaster from 'toastr';

const options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": true,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "300",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "swing",
    "showMethod": "show",
    "hideMethod": "hide"
};

const showToast = (message, type="success") => {
    if(type==="success") {
        Toaster.success(message, "Success", options);
    } else if(type==="warning") {
        Toaster.warning(message, "Warning", options);
    } else if(type==="error") {
        Toaster.error(message, "Error", options);
    } else {
        Toaster.info(message, "Info", options);
    }
}

const validateEmail = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const validatePhoneNumber = (phoneNumber) => {
    return /^\(\d{3}\) \d{3}\-\d{4}\s*$/.test(phoneNumber);
}

const objectsEqual = (o1, o2) => {
    return typeof o1 === 'object' && Object.keys(o1).length > 0 ? Object.keys(o1).length === Object.keys(o2).length && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p])) : o1 === o2;
}

const capitalizeString = (phrase) => {
    return phrase.replace(/\b\w/g, c => c.toUpperCase());
}

export {
    showToast,
    objectsEqual,
    validateEmail,
    capitalizeString,
    validatePhoneNumber
};