import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { showToast, validateEmail } from "../utils";
import { login } from "../redux/actions/auth";

const Login = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const isUserSigningIn = useSelector(state => state.auth.isPosting);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleOnFormSubmit = (e) => {
        e.preventDefault();
        if(!isUserSigningIn) {
            if(!validateEmail(email.toLocaleLowerCase())) {
                showToast("Invalid email address!", "warning");
            } else if(password.length<8) {
                showToast("Password must be at least 8 characters long!", "warning");
            } else {
                const data = {
                    email: email.toLocaleLowerCase(),
                    password
                };
                dispatch(login(data, ()=>props.history.push("/")));
            }
        }
    }

    if(user && isAuthenticated) return (<Redirect to="/member-dashboard" />);

    return (
        <MDBRow style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <MDBCol md="6 w-100">
            {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
                <h2 className="text-center">Log In</h2>
                <form onSubmit={handleOnFormSubmit}>
                    <MDBRow>
                        <MDBCol md="12">
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
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
                                    onChange={e => setPassword(e.target.value)}
                                    required 
                                />
                            </Form.Group>
                        </MDBCol><br></br>
                    </MDBRow>
                    <Button style={{marginTop: 20}} className="w-100 text-center" type="submit">
                        {
                            isUserSigningIn
                                ?
                                    <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                                        <div style={{height: 18, width: 18}} className="spinner-border text-white" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>  
                                    </div>
                                :
                                    <span>Log In</span>
                        }
                    </Button>
                </form>
                <div className="w-100 text-center mt-3">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/register">Register Now</Link>
                </div>
            </MDBCol>
            {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
        </MDBRow>
    );
}

export default Login;