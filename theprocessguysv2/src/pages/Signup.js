import { MDBRow, MDBCol, MDBInput } from "mdbreact";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import app from "../config/firebase";
// import Attorney from "./Attorney";
// import Business from "./Business";
// import Personal from "./Personal";
// import fire from "../config/fire";

// function Register(){

function Register() {

  // function attorneyHide() {
  //   var x = document.getElementById("attorney-form-toggle");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // };
  // function businessHide() {
  //   var x = document.getElementById("business-form-toggle");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // };
  // function personalHide() {
  //   var x = document.getElementById("personal-form-toggle");
  //   if (x.style.display === "none") {
  //     x.style.display = "block";
  //   } else {
  //     x.style.display = "none";
  //   }
  // };

  // function attorneyShow() {
  //   businessHide();
  //   personalHide();
  // }
  // function businessShow() {
  //   personalHide();
  //   attorneyHide();
  // }
  // function personalShow() {
  //   attorneyHide();
  //   businessHide();
  // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    // const [loader, setLoader] = useState(false);

    // const  handleSubmit = (e) => {
    //   e.preventDefault();
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

    return (
      <MDBRow md="12">
          <h2 className="text-center mb-4 mt-5">Register an Account</h2>
          <form className="mb-4">
          <MDBRow className="text-left">
          <MDBCol md="12">
            <Form.Group id="text">
              <label>Email</label>
              <MDBInput 
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
              <MDBInput 
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
          {/* <Attorney></Attorney> */}
            {/* <h2 className="justify-content-center">Attorney Section</h2>
            <MDBBtn id="attorney" onClick={"#!"}>Click to see form</MDBBtn><br></br>
            <p>**Please fill out if you are an attorney</p>
          <MDBRow md="12" id="attorney-form-toggle">
          <MDBCol md="12 w-100" >
            <Form.Group id="attorney-fax-number">
                <Form.Label>Fax Number (**Optional)</Form.Label>
                <Form.Control 
                type="text"/>
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="attorney-specialty">
                <Form.Label>Specialty</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="attorney-barnumber">
                <Form.Label>Bar Number</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="attorney-firm-name">
                <Form.Label>Full Firm Name</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="attorney-full-firm-address">
                <Form.Label>Full Firm Address</Form.Label>
                <Form.Control 
                type="address" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="attorney-job-title">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          </MDBRow> */}
          {/* <Business></Business> */}
          {/* <h2 className="justify-content-center">Business / Company Section</h2>
            <MDBBtn onClick={"#!"}>Click to see form</MDBBtn><br></br>
            <p>**Please fill out if you are in a Business / Company</p>
            <MDBRow id="business-form-toggle mb-4">
            <MDBCol md="12" >
            <Form.Group id="company-fax-number">
                <Form.Label>Fax Number (**Optional)</Form.Label>
                <Form.Control 
                type="text"/>
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-specialty">
                <Form.Label>Specialty</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-name">
                <Form.Label>Full Firm Name</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-full-address">
                <Form.Label>Full Firm Address</Form.Label>
                <Form.Control 
                type="address" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="company-job-title">
                <Form.Label>Job Title</Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          </MDBRow> */}
          {/* <Personal></Personal> */}
          {/* <h2 className="justify-content-center">Personal (Civilian) Section</h2><br></br>
            <MDBBtn onClick={"#!"}>Click to see form</MDBBtn><br></br>
            <p>**Please fill out if you are a Civilian</p>
            <MDBCol md="12" id="personal-form-toggle mb-4" className="1">
            <Form.Group id="personal-us-id">
                <Form.Label>Government US Issued ID Number (NO PASSPORT)
            </Form.Label>
                <Form.Control 
                type="text" 
                />
              </Form.Group>
          </MDBCol>
          <MDBCol md="12">
            <Form.Group id="personal-fax-number">
                <Form.Label>Fax Number (**Optional)</Form.Label>
                <Form.Control 
                type="text"/>
              </Form.Group>
          </MDBCol> */}<br></br>
            <Button 
            className="w-100 mt-4" 
            color="default" 
            type="submit" 
            // onClick={handleSubmit}
            // style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
            >
              Submit
            </Button>
          </form>
      <div className="w-100 text-center mt-2 mb-5">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </MDBRow>
  
    )
    // async function onRegister() {
    //   try {
    //     await app.register()
    //   } catch(error) {
    //     alert(error.message)
    //   }
    // }
  }

export default Register;