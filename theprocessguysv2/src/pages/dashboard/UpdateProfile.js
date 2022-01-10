import { Fragment, useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import { MDBInput } from "mdbreact";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateEmail,
  updateAddress,
  updatePassword,
  updatePhoneNumber,
  updateProfilePicture
} from "../../redux/actions/auth";
import { showToast, validateEmail, validatePhoneNumber } from "../../utils";

export default function UpdateProfile() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [address, setAddress] = useState({street: "", city: "", state: "", zipCode: "", country: ""});
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const isUpdatingEmail = useSelector(state => state.auth.isUpdatingEmail);
  const isUpdatingPassword = useSelector(state => state.auth.isUpdatingPassword);
  const isUpdatingAddress = useSelector(state => state.auth.isUpdatingAddress);
  const isUpdatingPhoneNo = useSelector(state => state.auth.isUpdatingPhoneNo);
  const isUpdatingImage = useSelector(state => state.auth.isUpdatingImage);
  const user = useSelector(state => state.auth.user);

  const handleOnChangePhoneNumber = (newPhoneNumber) => {
    if(/^\s*\d{3}\s*$/.test(newPhoneNumber) && newPhoneNumber.length>phoneNumber.length) {
      setPhoneNumber(`(${newPhoneNumber}) `);
    } else if(/^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) && newPhoneNumber.length>phoneNumber.length) {
      setPhoneNumber(`${newPhoneNumber}-`);
    } else if(newPhoneNumber.length>=7 && !newPhoneNumber.includes("(") && !newPhoneNumber.includes(")") && !newPhoneNumber.includes(" ") && !newPhoneNumber.includes("-")) {
      setPhoneNumber(`(${newPhoneNumber.slice(0, 3)}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`)
    } else {
      setPhoneNumber(newPhoneNumber);
    }
  }

  function handleSubmitUpdateEmail(e) {
    e.preventDefault();
    if(!isUpdatingEmail) {
      if(!email.length) {
        showToast("Please type-in your email address!", "warning");
      } else if(!validateEmail(email)) {
        showToast("Invalid email address!", "warning");
      } else {
        dispatch(
          updateEmail(
            {email, uid: user.uid},
            ()=>setEmail("")
          )
        );
      }
    }
  }

  function handleSubmitUpdatePassword(e) {
    e.preventDefault();
    if(!isUpdatingPassword) {
      if(!password.length || !rePassword.length) {
        showToast("Please type-in password and confirmation password!", "warning");
      } else if(password !== rePassword) {
        showToast("Passwords do not match!", "warning");
      } else {
        dispatch(
          updatePassword(
            {password},
            ()=>{
              setPassword("");
              setRePassword("");
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdateAddress(e) {
    e.preventDefault();
    if(!isUpdatingAddress) {
      if(!address.street.length) {
        showToast("Please type in your street address!", "warning");
      } else if(!address.city.length) {
        showToast("Please type in your city address!", "warning");
      } else if(!address.state.length) {
        showToast("Please type in your state!", "warning");
      } else if(!address.zipCode.length) {
        showToast("Please type in your address zip code!", "warning");
      } else if(!address.country.length) {
        showToast("Please type in your country!", "warning");
      } else {
        dispatch(
          updateAddress(
            {address, uid: user.uid},
            ()=>{
              setAddress({street: "", city: "", state: "", zipCode: "", country: ""});
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdatePhoneNo(e) {
    e.preventDefault();
    if(!isUpdatingPhoneNo) {
      if(!phoneNumber.length) {
        showToast("Please type in your phone number!", "warning");
      } else if(!validatePhoneNumber(phoneNumber)) {
        showToast("Invalid phone number, please type-in correct phone number!", "warning");
      } else {
        dispatch(
          updatePhoneNumber(
            {phoneNumber, uid: user.uid},
            ()=>{
              setPhoneNumber("");
            }
          )
        );
      }
    }
  }

  function handleSubmitUpdateDP(e) {
    e.preventDefault();
    if(!isUpdatingImage) {
      if(!image) {
        showToast("Please attach your profile picture!", "warning");
      } else {
        const data = {
          uid: user.uid,
          profilePicture: image,
          oldProfilePicturePath: user.profilePicturePath
        }
        dispatch(
          updateProfilePicture(
            data,
            ()=>{
              setImage(null);
            }
          )
        );
      }
    }
  }

  return (
    <Fragment>
      <Card style={{minWidth: "75vw", zIndex: "0 !important"}} className="text-center homepage">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile Data</h2>
          <br/>
          <br/>
          <br/>
          <Form style={{backgroundColor: "rgba(0, 0, 0, 0.5)", padding: "30px 15px", borderRadius: 8}} onSubmit={handleSubmitUpdateEmail}>
            <h2 style={{color: "#909090", textAlign: "left", marginBottom: 15}}>Update Email</h2>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div id="email">
                <label style={{float: "left", marginBottom: 12}}>New Email</label>
                <MDBInput
                  type="email"
                  className="text-black px-3 bg-white rounded"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
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
                <div id="password">
                  <label style={{float: "left", marginBottom: 12}}>Password</label>
                  <MDBInput
                    type="password"
                    className="text-black px-3 bg-white rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div id="password-confirm">
                  <label style={{float: "left", marginBottom: 12}}>Password Confirmation</label>
                  <MDBInput
                    type="password"
                    className="text-black px-3 bg-white rounded"
                    value={rePassword}
                    onChange={(e) => setRePassword(e.target.value)}
                  />
                </div>
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
              <div id="update-address">
                <label style={{float: "left", marginBottom: 12}}>Update Address</label>
                <MDBInput
                  type="text"
                  hint="Street"
                  className="text-black px-3 bg-white rounded"
                  value={address.street}
                  onChange={(e) => setAddress({...address, street: e.target.value})}
                />
                <MDBInput
                  type="text"
                  hint="City"
                  className="text-black px-3 bg-white rounded"
                  value={address.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                />
                <MDBInput
                  type="text"
                  hint="State"
                  className="text-black px-3 bg-white rounded"
                  value={address.state}
                  onChange={(e) => setAddress({...address, state: e.target.value})}
                />
                <MDBInput
                  type="text"
                  hint="Zip Code"
                  className="text-black px-3 bg-white rounded"
                  value={address.zipCode}
                  onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                />
                <MDBInput
                  type="text"
                  hint="Country"
                  className="text-black px-3 bg-white rounded"
                  value={address.country}
                  onChange={(e) => setAddress({...address, country: e.target.value})}
                />
              </div>
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
              <div id="update-phone-number">
                <label style={{float: "left", marginBottom: 12}}>Update Phone Number</label>
                <MDBInput
                  type="text"
                  hint="(###) ###-####"
                  className="text-black px-3 bg-white rounded"
                  value={phoneNumber}
                  onChange={(e) => handleOnChangePhoneNumber(e.target.value)}
                />
              </div>
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
              <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}} id="update-image">
                <label>Update Image</label>
                <input
                  type="file"
                  onChange={(e)=>{setImage(e.target.files[0])}}
                  accept=".jpg,.png,.jpeg"
                />
              </div>
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
        </Card.Body>
      </Card>
      <br></br>
      <br></br>
    </Fragment>
  )
}