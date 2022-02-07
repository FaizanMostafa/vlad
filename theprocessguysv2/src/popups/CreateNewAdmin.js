import { useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showToast, validateEmail, validatePhoneNumber } from "../utils";
import { createUser } from '../redux/actions/admin';

export const CreateNewAdmin = (props) => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const isCreatingUser = useSelector(state => state.admin.isCreatingUser);
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
  const [address, setAddress] = useState({ street: "", city: "", state: "", zipCode: "", country: "" });
  const [profilePicture, setProfilePicture] = useState(null);

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

  const resetForm = () => {
    setShow(false);
    setEmail("");
    setSSN("");
    setSSNState("");
    setPassword("");
    setRePassword("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setPhoneNumber("");
    setFaxNumber("");
    setAddress({ street: "", city: "", state: "", zipCode: "", country: "" });
    setProfilePicture(null);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!firstName.length) {
      showToast("Please type-in the first name!", "warning");
    } else if (!lastName.length) {
      showToast("Please type-in the last name!", "warning");
    } else if (!address.street.length || !address.city.length || !address.state.length || !address.zipCode.length || !address.country.length) {
      showToast("Please type-in the full address!", "warning");
    } else if (!phoneNumber.length) {
      showToast("Please type-in the phone number!", "warning");
    } else if (!validatePhoneNumber(phoneNumber)) {
      showToast("Invalid phone number, please type-in correct phone number!", "warning");
    } else if (!SSN.length) {
      showToast("Please fill-in the government issued ID number!", "warning");
    } else if (!SSNState.length) {
      showToast("Please fill-in the state of issued ID!", "warning");
    } else if (!validateEmail(email.toLocaleLowerCase())) {
      showToast("Invalid email address!", "warning");
    } else if (password.length < 8 || rePassword.length < 8) {
      showToast("Password must be at least 8 characters long!", "warning");
    } else if (password !== rePassword) {
      showToast("Passwords do not match!", "warning");
    } else if (profilePicture === null) {
      showToast("Please upload profile/account picture!", "warning");
    } else if (!isCreatingUser) {
      let data = {
        firstName,
        middleName,
        lastName,
        email: email.toLocaleLowerCase(),
        role: "admin",
        status: "active",
        password,
        address,
        phoneNumber,
        faxNumber,
        profilePicture,
        SSNState,
        SSN,
        userType: "personal"
      };
      dispatch(createUser(data, resetForm));
    }
  }

  return (
    <>
      <Button variant="outline-primary" size="sm" onClick={() => setShow(true)}>
        Create New Admin
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Create New Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="mb-4 justify-content-center" onSubmit={handleFormSubmit}>
            <MDBRow>
              <MDBRow style={{ marginLeft: 0, width: "100%" }}>
                <MDBCol>
                  <Form.Group id="full-name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol>
                  <Form.Group id="full-name">
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={middleName}
                      onChange={(e) => setMiddleName(e.target.value)}
                    />
                  </Form.Group>
                </MDBCol>
                <MDBCol>
                  <Form.Group id="full-name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Group>
                </MDBCol>
              </MDBRow>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol>
                    <Form.Group id="street-address">
                      <Form.Label>Applicant Full Address</Form.Label>
                      <Form.Control
                        type="text"
                        value={address.street}
                        placeholder="Street"
                        onChange={(e) => setAddress({ ...address, street: e.target.value })}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol bottom>
                    <Form.Group id="city-address">
                      <Form.Control
                        type="text"
                        placeholder="City"
                        value={address.city}
                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                      />
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <Form.Group id="state-address">
                      <Form.Control
                        type="text"
                        placeholder="State"
                        value={address.state}
                        onChange={(e) => setAddress({ ...address, state: e.target.value })}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol>
                    <Form.Group id="zipCode-address">
                      <Form.Control
                        type="text"
                        placeholder="Zip Code"
                        value={address.zipCode}
                        onChange={(e) => setAddress({ ...address, zipCode: e.target.value })}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol>
                    <Form.Group id="country-address">
                      <Form.Control
                        type="text"
                        placeholder="Country"
                        value={address.country}
                        onChange={(e) => setAddress({ ...address, country: e.target.value })}
                      />
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol>
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
                  <MDBCol>
                    <Form.Group id="fax-number">
                      <Form.Label>Fax Number(**Optional)</Form.Label>
                      <Form.Control
                        type="text"
                        value={faxNumber}
                        onChange={(e) => setFaxNumber(e.target.value)}
                      />
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol>
                    <Form.Group id="ssn">
                      <Form.Label>Government Issued ID Number (provided on Identification Card or Drivers License) *NO PASSPORTS*</Form.Label>
                      <Form.Control
                        type="text"
                        value={SSN}
                        onChange={(e) => setSSN(e.target.value)}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol bottom>
                    <Form.Group id="ssn-state">
                      <Form.Label>State of issued ID</Form.Label>
                      <Form.Control
                        type="text"
                        value={SSNState}
                        onChange={(e) => setSSNState(e.target.value)}
                      />
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
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
                <MDBRow>
                  <MDBCol md="6">
                    <Form.Group id="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol md="6">
                    <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation</Form.Label>
                      <Form.Control
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                      />
                    </Form.Group>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol md="12">
                <Form.Group id="image">
                  <Form.Label>Account Image</Form.Label>
                  <input
                    type='file'
                    onChange={(e) => { setProfilePicture(e.target.files[0]) }}
                    accept=".jpg,.png"
                    label='Upload'
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
            <Button
              className="w-100 mt-4"
              disabled={isCreatingUser}
              color="default"
              type="submit"
            >
              {
                isCreatingUser
                  ?
                  <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <div style={{ height: 18, width: 18 }} className="spinner-border text-white" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                  :
                  <span className="text-white">Create</span>
              }
            </Button>
            <br></br>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}