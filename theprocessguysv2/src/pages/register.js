import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Attorney from "../forms/Attorney";
import Business from "../forms/Business";
import {showToast, validateEmail, validatePhoneNumber} from "../utils";
import { register } from '../redux/actions/auth';

function Register(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isUserSigningUp = useSelector(state => state.auth.isPosting);
    const [email, setEmail] = useState("");
    const [SSN, setSSN] = useState("");
    const [SSNState, setSSNState] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [faxNumber, setFaxNumber] = useState("");
    const [address, setAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
    const [profilePicture, setProfilePicture] = useState(null);
    const [userType, setUserType] = useState("attorney");
    const [attorneyType, setAttorneyType] = useState("attorney");

    const [attSpecialty, setAttSpecialty] = useState("");
    const [attBarNo, setAttBarNo] = useState("");
    const [attFirmName, setAttFirmName] = useState("");
    const [attFirmAddress, setAttFirmAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
    const [attFirmRole, setAttFirmRole] = useState("");
    
    const [busSpecialty, setBusSpecialty] = useState("");
    const [busFirmName, setBusFirmName] = useState("");
    const [busFirmAddress, setBusFirmAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
    const [busJobTitle, setBusJobTitle] = useState("");

    const [hasAgreedToTOS, setHasAgreedToTOS] = useState(false);

    const handleOnChangePhoneNumber = (phoneNumber) => {
        if(/^\s*\d{3}\s*$/.test(phoneNumber)) {
            setPhoneNumber(`(${phoneNumber}) `);
        } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(phoneNumber)) {
            setPhoneNumber(`${phoneNumber}-`);
        } else {
            setPhoneNumber(phoneNumber);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!firstName.length) {
            showToast("Please type-in the first name!", "warning");
        } else if(!lastName.length) {
            showToast("Please type-in the last name!", "warning");
        } else if(!address.street.length || !address.city.length || !address.state.length || !address.zipCode.length || !address.country.length) {
            showToast("Please type-in the full address!", "warning");
        } else if(!phoneNumber.length) {
            showToast("Please type-in the phone number!", "warning");
        } else if(!validatePhoneNumber(phoneNumber)) {
            showToast("Invalid phone number, please type-in correct phone number!", "warning");
        } else if((userType==="personal" || userType==="business" || (userType==="attorney" && attorneyType!=="attorney")) && !SSN.length) {
            showToast("Please fill-in the government issued ID number!", "warning");
        } else if((userType==="personal" || userType==="business" || (userType==="attorney" && attorneyType!=="attorney")) && !SSNState.length) {
            showToast("Please fill-in the state of issued ID!", "warning");
        } else if(!validateEmail(email.toLocaleLowerCase())) {
            showToast("Invalid email address!", "warning");
        } else if(password.length < 8 || rePassword.length < 8) {
            showToast("Password must be at least 8 characters long!", "warning");
        } else if(password !== rePassword) {
            showToast("Passwords do not match!", "warning");
        } else if(profilePicture===null) {
            showToast("Please upload profile/account picture!", "warning");
        } else if(userType==="attorney" && attorneyType==="attorney" && !attBarNo.length) {
            showToast("Please fill-in the bar number!", "warning");
        } else if(userType==="attorney" && !attSpecialty.length) {
            showToast("Please fill-in the legal specialty!", "warning");
        } else if(userType==="attorney" && !attFirmName.length) {
            showToast("Please fill-in the full firm name!", "warning");
        } else if(userType==="attorney" && (!attFirmAddress.street.length || !attFirmAddress.city.length || !attFirmAddress.state.length || !attFirmAddress.zipCode.length || !attFirmAddress.country.length)) {
            showToast("Please fill-in the full firm address!", "warning");
        } else if(userType==="attorney" && attorneyType==="attorney" && !attFirmRole.length) {
            showToast("Please fill-in the firm role!", "warning");
        } else if(userType==="business" && !busFirmName.length) {
            showToast("Please fill-in the full business name!", "warning");
        } else if(userType==="business" && (!busFirmAddress.street.length || !busFirmAddress.city.length || !busFirmAddress.state.length || !busFirmAddress.zipCode.length || !busFirmAddress.country.length)) {
            showToast("Please fill-in the full business address!", "warning");
        } else if(userType==="business" && !busSpecialty.length) {
            showToast("Please fill-in the business specialty!", "warning");
        } else if(userType==="business" && !busJobTitle.length) {
            showToast("Please fill-in the business role!", "warning");
        } else if(!hasAgreedToTOS) {
            showToast("You must agree to our terms of service in order to proceed!", "warning");
        } else {
            let data = {
                firstName,
                middleName,
                lastName,
                email: email.toLocaleLowerCase(),
                role: "user",
                password,
                address,
                phoneNumber,
                faxNumber,
                hasAgreedToTOS,
                profilePicture,
                userType
            };
            if(userType==="attorney") {
                data["firmName"] = attFirmName;
                data["firmAddress"] = attFirmAddress;
                data["specialty"] = attSpecialty;
                if(attorneyType==="attorney") {
                    data["barNumber"] = attBarNo;
                    data["firmRole"] = attFirmRole;
                } else {
                    data["SSN"] = SSN;
                    data["SSNState"] = SSNState;
                    data["userType"] = "paralegal";
                }
            } else if(userType==="business") {
                data["firmName"] = busFirmName;
                data["firmAddress"] = busFirmAddress;
                data["jobTitle"] = busJobTitle;
                data["specialty"] = busSpecialty;
                data["SSN"] = SSN;
                data["SSNState"] = SSNState;
            } else {
                data["SSN"] = SSN;
                data["SSNState"] = SSNState;
            }
            dispatch(register(data, ()=>props.history.push("/")));
        }
    }

    if(user && isAuthenticated) return (<Redirect to="/" />);

    return(
        <MDBRow md="10" className="justify-content-center">
            <MDBCol md="8 w-50">
                <h2 className="text-center mb-4 mt-5">Register an Account</h2>
                <form className="mb-4 justify-content-center" onSubmit={handleFormSubmit}>
                    <MDBRow md="8" id="user-type-form-toggle">
                        <MDBCol md="12">
                            <h4>User Type</h4>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    checked={userType === "attorney" ? true : false}
                                    onChange={()=>setUserType("attorney")}
                                    name="userRadioDefault"
                                    id="userRadioDefault1"
                                />
                                <label class="form-check-label" for="userRadioDefault1"> Attorney / Paralegal </label>
                            </div>

                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    checked={userType === "business" ? true : false}
                                    onChange={()=>setUserType("business")}
                                    name="userRadioDefault"
                                    id="userRadioDefault2"
                                />
                                <label class="form-check-label" for="userRadioDefault2"> Business / Company </label>
                            </div>
                            <div class="form-check">
                                <input
                                    class="form-check-input"
                                    type="radio"
                                    checked={userType === "personal" ? true : false}
                                    onChange={()=>setUserType("personal")}
                                    name="userRadioDefault"
                                    id="userRadioDefault3"
                                />
                                <label class="form-check-label" for="userRadioDefault3"> Personal </label>
                            </div>
                            <br></br>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow md="8" className="text-left">
                        <MDBCol md="12">
                            <Form.Group id="full-name">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="full-name">
                                <Form.Label>Middle Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={middleName}
                                    onChange={(e) => setMiddleName(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="full-name">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="street-address">
                                <Form.Label>Applicant Full Address</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={address.street}
                                    placeholder="Street"
                                    onChange={(e) => setAddress({...address, street: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group id="city-address">
                                <Form.Control 
                                    type="text"
                                    placeholder="City"
                                    value={address.city}
                                    onChange={(e) => setAddress({...address, city: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group id="state-address">
                                <Form.Control 
                                    type="text"
                                    placeholder="State"
                                    value={address.state}
                                    onChange={(e) => setAddress({...address, state: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group id="zipCode-address">
                                <Form.Control 
                                    type="text"
                                    placeholder="Zip Code"
                                    value={address.zipCode}
                                    onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                                />
                            </Form.Group>
                            <Form.Group id="country-address">
                                <Form.Control 
                                    type="text"
                                    placeholder="Country"
                                    value={address.country}
                                    onChange={(e) => setAddress({...address, country: e.target.value})}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="phone-number">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="(###) ###-####"
                                    value={phoneNumber}
                                    onChange={(e) => handleOnChangePhoneNumber(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="fax-number">
                                <Form.Label>Fax Number(**Optional)</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={faxNumber}
                                    onChange={(e) => setFaxNumber(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        {
                            (attorneyType==="paralegal" || userType==="business" || userType==="personal")
                                &&
                                    <MDBCol md="12">
                                        <Form.Group id="ssn">
                                            <Form.Label>Government Issued ID Number (provided on Identification Card or Drivers License) *NO PASSPORTS*</Form.Label>
                                            <Form.Control
                                                type="text"
                                                value={SSN}
                                                onChange={(e) => setSSN(e.target.value)}
                                            />
                                        </Form.Group>
                                        <Form.Group id="ssn-state">
                                            <Form.Label>State of issued ID</Form.Label>
                                            <Form.Control 
                                                type="text"
                                                value={SSNState}
                                                onChange={(e) => setSSNState(e.target.value)}
                                            />
                                        </Form.Group>
                                    </MDBCol>
                        }
                        <MDBCol md="12">
                            <Form.Group id="text">
                                <label>Email</label>
                                <Form.Control 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control 
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control 
                                    type="password"
                                    value={rePassword}
                                    onChange={(e) => setRePassword(e.target.value)}
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="image">
                                <Form.Label>Account Image</Form.Label>
                                <input
                                    type='file' 
                                    onChange={(e)=>{setProfilePicture(e.target.files[0])}}
                                    accept=".jpg,.png"
                                    label='Upload'
                                />
                            </Form.Group>
                        </MDBCol>
                    </MDBRow>
                    {
                        userType === "attorney"
                            &&
                                <MDBRow>
                                    <Attorney
                                        attorneyType={attorneyType}
                                        setAttorneyType={setAttorneyType}
                                        specialty={attSpecialty}
                                        setSpecialty={setAttSpecialty}
                                        barNo={attBarNo}
                                        setBarNo={setAttBarNo}
                                        firmName={attFirmName}
                                        setFirmName={setAttFirmName}
                                        firmAddress={attFirmAddress}
                                        setFirmAddress={setAttFirmAddress}
                                        firmRole={attFirmRole}
                                        setFirmRole={setAttFirmRole}
                                    />
                                </MDBRow>
                    }
                    {
                        userType === "business"
                            &&
                                <MDBRow>
                                    <Business
                                        specialty={busSpecialty}
                                        setSpecialty={setBusSpecialty}
                                        firmName={busFirmName}
                                        setFirmName={setBusFirmName}
                                        firmAddress={busFirmAddress}
                                        setFirmAddress={setBusFirmAddress}
                                        jobTitle={busJobTitle}
                                        setJobTitle={setBusJobTitle}
                                    />
                                </MDBRow>
                    }
                    <div style={{margin: "10px 0px"}}>
                        <input name="tos" type="checkbox" checked={hasAgreedToTOS} onChange={()=>setHasAgreedToTOS(!hasAgreedToTOS)} />
                        <label style={{marginLeft: 10, fontWeight: "bold"}} for="tos">I agree to terms of service</label>
                    </div>
                    <Button 
                        className="w-100 mt-4" 
                        color="default" 
                        type="submit"
                    >
                        {
                            isUserSigningUp
                                ?
                                    <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                                        <div className="spinner-border text-success" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>  
                                    </div>
                                :
                                    <span>Sign Up</span>
                        }
                    </Button>
                    <br></br>
                </form>
                <br></br>
                <div className="w-100 text-center mt-2 mb-5">
                    Already have an account? <Link to="/login">Log In</Link>
                </div>
                <br></br>
                <br></br>
            </MDBCol>
        </MDBRow>
    );
}

export default Register;