import React, { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Attorney from "../forms/Attorney";
import Business from "../forms/Business";
import Personal from "../forms/Personal";
import {showToast, validateEmail} from "../utils";
import { register } from '../redux/actions/auth';

function Register(props) {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isUserSigningUp = useSelector(state => state.auth.isPosting);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [userType, setUserType] = useState("attorney");
    const [attorneyType, setAttorneyType] = useState("paralegal");

    const [attFaxNo, setAttFaxNo] = useState("");
    const [attSpecialty, setAttSpecialty] = useState("");
    const [attBarNo, setAttBarNo] = useState("");
    const [attFirmName, setAttFirmName] = useState("");
    const [attFirmAddress, setAttFirmAddress] = useState("");
    const [attJobTitle, setAttJobTitle] = useState("");
    
    const [busFaxNo, setBusFaxNo] = useState("");
    const [busSpecialty, setBusSpecialty] = useState("");
    const [busFirmName, setBusFirmName] = useState("");
    const [busFirmAddress, setBusFirmAddress] = useState("");
    const [busJobTitle, setBusJobTitle] = useState("");

    const [perSSN, setPerSSN] = useState("");
    const [perFaxNo, setPerFaxNo] = useState("");


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!validateEmail(email.toLocaleLowerCase())) {
            showToast("Invalid email address!", "warning");
        } else if(password.length < 8 || rePassword.length < 8) {
            showToast("Password must be at least 8 characters long!", "warning");
        } else if(password !== rePassword) {
            showToast("Passwords do not match!", "warning");
        } else {
            let data = {
                email: email.toLocaleLowerCase(),
                password,
                name,
                address,
                userType
            };
            if(userType==="attorney") {
                data["faxNo"] = attFaxNo;
                data["firmName"] = attFirmName;
                data["firmAddress"] = attFirmAddress;
                data["jobTitle"] = attJobTitle;
                if(attorneyType==="attorney") {
                    data["specialty"] = attSpecialty;
                    data["barNumber"] = attBarNo;
                } else {
                    data["userType"] = "paralegal";
                }
            } else if(userType==="business") {
                data["faxNo"] = busFaxNo;
                data["firmName"] = busFirmName;
                data["firmAddress"] = busFirmAddress;
                data["jobTitle"] = busJobTitle;
                data["specialty"] = busSpecialty;
            } else {
                data["faxNo"] = perFaxNo;
                data["SSN"] = perSSN;
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
                    <MDBRow md="8" className="text-left">
                        <MDBCol md="12">
                            <Form.Group id="text">
                                <label>Email</label>
                                <Form.Control 
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                    required
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
                                    required
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="full-name">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="full-address">
                                <Form.Label>Applicant Full Address</Form.Label>
                                <Form.Control 
                                    type="text"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    required 
                                />
                            </Form.Group>
                        </MDBCol>
                        <MDBCol md="12">
                            <Form.Group id="image">
                                <Form.Label>Account Image</Form.Label>
                                <input
                                    type='file' 
                                    accept=".jpg,.png" 
                                    label='Upload' 
                                />
                            </Form.Group>
                        </MDBCol>
                    </MDBRow>
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
                    {
                        userType === "attorney"
                            &&
                                <MDBRow>
                                    <Attorney
                                        attorneyType={attorneyType}
                                        setAttorneyType={setAttorneyType}
                                        faxNo={attFaxNo}
                                        setFaxNo={setAttFaxNo}
                                        specialty={attSpecialty}
                                        setSpecialty={setAttSpecialty}
                                        barNo={attBarNo}
                                        setBarNo={setAttBarNo}
                                        firmName={attFirmName}
                                        setFirmName={setAttFirmName}
                                        firmAddress={attFirmAddress}
                                        setFirmAddress={setAttFirmAddress}
                                        jobTitle={attJobTitle}
                                        setJobTitle={setAttJobTitle}
                                    />
                                </MDBRow>
                    }
                    {
                        userType === "business"
                            &&
                                <MDBRow>
                                    <Business
                                        faxNo={busFaxNo}
                                        setFaxNo={setBusFaxNo}
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
                    {
                        userType === "personal"
                            &&
                                <MDBRow>
                                    <Personal
                                        SSN={perSSN}
                                        setSSN={setPerSSN}
                                        faxNo={perFaxNo}
                                        setFaxNo={setPerFaxNo}
                                    />
                                </MDBRow>
                    }
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