import { MDBRow, MDBCol } from "mdbreact";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Attorney from "../pages/Attorney";
import Business from "../pages/Business";
import Personal from "../pages/Personal";

function Register() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // const [loader, setLoader] = useState(false);


    //   setLoader(true);
      
    // app.collection("register-account-info")
    // .add({
    //   name: name,
    //   email: email,
    //   password: password
    // })
    // .then(() => {
    //   setLoader(false);
    //   alert("👍 You have Registered an Account! 👍");
    // })
    // .catch((error) => {
    //   alert(error.message);
    //   setLoader(false);
    // });

    // setEmail("");
    // setName("");
    // setPassword("");

  // };

        return(
            <MDBRow md="10" className="justify-content-center">
                <MDBCol md="8 w-50">
                <h2 className="text-center mb-4 mt-5">Register an Account</h2>
                <form className="mb-4 justify-content-center">
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
                        <Form.Label>Full Address</Form.Label>
                        <Form.Control 
                        type="address" 
                        />
                    </Form.Group>
                    </MDBCol>

                    <MDBCol md="12">
                    <Form.Group id="image">
                        <Form.Label>Account Image</Form.Label>
                        <input type='file' 
                        accept=".jpg,.png" 
                        label='Upload' 
                        />
                        </Form.Group>
                    </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <Attorney/>
                    </MDBRow>
                    <MDBRow>
                        <Business/>
                    </MDBRow>
                    <MDBRow>
                        <Personal/>
                    </MDBRow>

                    <Button 
                        className="w-100 mt-4" 
                        color="default" 
                        type="submit" 
                        // onClick={handleSubmit}
                        // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                        >
                        Submit
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
        )
    }

export default Register;