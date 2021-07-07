import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateEmail,
  updateAddress,
  updatePassword,
  updatePhoneNumber,
  updateProfilePicture
} from "../redux/actions/auth";
import { showToast, validateEmail } from "../utils";

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const phoneNumberRef = useRef();
  const addressRef = useRef();
  const imageRef = useRef();
  const [error, setError] = useState("");

  const isUpdatingEmail = useSelector(state => state.auth.isUpdatingEmail);
  const isUpdatingPassword = useSelector(state => state.auth.isUpdatingPassword);
  const isUpdatingAddress = useSelector(state => state.auth.isUpdatingAddress);
  const isUpdatingPhoneNo = useSelector(state => state.auth.isUpdatingPhoneNo);
  const isUpdatingImage = useSelector(state => state.auth.isUpdatingImage);
  const user = useSelector(state => state.auth.user);

  function handleSubmitUpdateEmail(e) {
    e.preventDefault();
    if(!isUpdatingEmail) {
      if(!validateEmail(emailRef.current.value)) {
        showToast("Invalid email address!", "error");
      } else {
        dispatch(
          updateEmail(
            {email: emailRef.current.value, uid: user.uid},
            ()=>{emailRef.current.value="";}
          )
        );
      }
    }
  }

  function handleSubmitUpdatePassword(e) {
    e.preventDefault();
    if(!isUpdatingPassword) {
      if(passwordRef.current.value !== passwordConfirmRef.current.value) {
        showToast("Passwords do not match!", "error");
      } else {
        dispatch(
          updatePassword(
            {password: passwordRef.current.value},
            ()=>{
              passwordRef.current.value="";
              passwordConfirmRef.current.value="";
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdateAddress(e) {
    e.preventDefault();
    if(!isUpdatingAddress) {
      if(!addressRef.current.value.length) {
        showToast("Please type in your address!", "error");
      } else {
        dispatch(
          updateAddress(
            {address: addressRef.current.value, uid: user.uid},
            ()=>{
              addressRef.current.value="";
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdatePhoneNo(e) {
    e.preventDefault();
    if(!isUpdatingPhoneNo) {
      if(!phoneNumberRef.current.value.length) {
        showToast("Please type in your phone number!", "error");
      } else {
        dispatch(
          updatePhoneNumber(
            {phoneNumber: phoneNumberRef.current.value, uid: user.uid},
            ()=>{
              phoneNumberRef.current.value="";
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdateDP(e) {
    e.preventDefault();
    if(!isUpdatingImage) {
      if(!imageRef.current.files[0]) {
        showToast("Please attach your profile picture!", "error");
      } else {
        const data = {
          uid: user.uid,
          profilePicture: imageRef.current.files[0],
          oldProfilePicturePath: user.profilePicturePath
        }
        dispatch(
          updateProfilePicture(
            data,
            ()=>{
              imageRef.current.value="";
            }
          )
        );
      }
    }
  }

  return (
    <>
    <React.Fragment>
      <Card className="w-100 text-center homepage">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile Data</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", borderRadius: 8}} onSubmit={handleSubmitUpdateEmail}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Email</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Form.Group id="email">
                <Form.Label>New Email</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  // defaultValue={currentUser.email}
                />
              </Form.Group>
              <Button style={{alignSelf: "flex-end"}} type="submit">
                {
                  isUpdatingEmail
                    ?
                      "Updating..."
                    :
                      "Update Email"
                }
              </Button>
            </div>
          </Form>

          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", marginTop: 70, borderRadius: 8}} onSubmit={handleSubmitUpdatePassword}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Password</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                  />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                  />
                </Form.Group>
              </div>
              <Button style={{alignSelf: "flex-end"}} type="submit">
                {
                  isUpdatingPassword
                    ?
                      "Updating..."
                    :
                      "Update Password"
                }
              </Button>
            </div>
          </Form>

          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", marginTop: 70, borderRadius: 8}} onSubmit={handleSubmitUpdateAddress}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Address</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Form.Group id="update-address">
                <Form.Label>Update Address</Form.Label>
                <Form.Control
                  type="text"
                  ref={addressRef}
                />
              </Form.Group>
              <Button style={{alignSelf: "flex-end"}} type="submit">
                {
                  isUpdatingAddress
                    ?
                      "Updating..."
                    :
                      "Update Address"
                }
              </Button>
            </div>
          </Form>

          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", marginTop: 70, borderRadius: 8}} onSubmit={handleSubmitUpdatePhoneNo}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Phone Number</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Form.Group id="update-phone-number">
                <Form.Label>Update Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  ref={phoneNumberRef}
                />
              </Form.Group>
              <Button style={{alignSelf: "flex-end"}} type="submit">
                {
                  isUpdatingPhoneNo
                    ?
                      "Updating..."
                    :
                      "Update Phone"
                }
              </Button>
            </div>
          </Form>

          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", marginTop: 70, borderRadius: 8}} onSubmit={handleSubmitUpdateDP}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Profile Picture</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Form.Group id="update-image">
                <Form.Label>Update Image</Form.Label>
                <Form.Control
                  type='file' 
                  accept=".jpg,.png" 
                  label='Upload' 
                  ref={imageRef}
                />
              </Form.Group>
              <Button style={{alignSelf: "flex-end"}} type="submit">
                {
                  isUpdatingImage
                    ?
                      "Updating..."
                    :
                      "Update Image"
                }
              </Button>
            </div>
          </Form>
          <div>
            <Link to="/member-dashboard" className="btn btn-primary justify-content-center">Close</Link>
          </div>
        </Card.Body>

      </Card>
      </React.Fragment>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </>
  )
}