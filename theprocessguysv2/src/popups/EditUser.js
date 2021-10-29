import { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { objectsEqual, showToast, validateEmail, validatePhoneNumber } from "../utils";
import { updateUser } from '../redux/actions/admin';

const EditUser = (props) => {
  const dispatch = useDispatch();
  const isUpdatingUser = useSelector(state => state.admin.isUpdatingUser);
  const [email, setEmail] = useState("");
  const [SSN, setSSN] = useState("");
  const [SSNState, setSSNState] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [faxNumber, setFaxNumber] = useState("");
  const [address, setAddress] = useState({ street: "", city: "", state: "", zipCode: "", country: "" });
  const [profilePicture, setProfilePicture] = useState(null);
  const [userType, setUserType] = useState("attorney");
  const [attorneyType, setAttorneyType] = useState("attorney");

  const [attSpecialty, setAttSpecialty] = useState("");
  const [attBarNo, setAttBarNo] = useState("");
  const [attFirmName, setAttFirmName] = useState("");
  const [attFirmAddress, setAttFirmAddress] = useState({ street: "", city: "", state: "", zipCode: "", country: "" });
  const [attFirmRole, setAttFirmRole] = useState("");

  const [busSpecialty, setBusSpecialty] = useState("");
  const [busFirmName, setBusFirmName] = useState("");
  const [busFirmAddress, setBusFirmAddress] = useState({ street: "", city: "", state: "", zipCode: "", country: "" });
  const [busJobTitle, setBusJobTitle] = useState("");

  useEffect(() => {
    const user = props.user;
    if(user) {
      setEmail(user.email);
      setRole(user.role);
      setStatus(user.status);
      setFirstName(user.firstName);
      setMiddleName(user.middleName);
      setLastName(user.lastName);
      setPhoneNumber(user.phoneNumber);
      setFaxNumber(user.faxNumber);
      setAddress(user.address);
      setUserType(user.userType);
      setAttorneyType(user.attorneyType);
      if(user.userType === "attorney") {
        setAttFirmName(user.firmName);
        setAttFirmAddress(user.firmAddress);
        setAttSpecialty(user.specialty);
        setAttorneyType("attorney");
        setAttBarNo(user.barNumber);
        setAttFirmRole(user.firmRole);
      } else if(user.userType === "paralegal") {
        setSSN(user.SSN);
        setSSNState(user.SSNState);
        setAttorneyType("paralegal");
      } else if (user.userType === "business") {
        setBusFirmName(user.firmName);
        setBusFirmAddress(user.firmAddress);
        setBusJobTitle(user.jobTitle);
        setBusSpecialty(user.specialty);
        setSSN(user.SSN);
        setSSNState(user.SSNState);
      } else {
        setSSN(user.SSN);
        setSSNState(user.SSNState);
      }
    }
  }, [props.user]);

  const handleOnChangePhoneNumber = (newPhoneNumber) => {
    if (/^\s*\d{3}\s*$/.test(newPhoneNumber) && newPhoneNumber.length > phoneNumber.length) {
      setPhoneNumber(`(${newPhoneNumber}) `);
    } else if (/^\s*\(\d{3}\)\s*\d{3}$/.test(newPhoneNumber) && newPhoneNumber.length > phoneNumber.length) {
      setPhoneNumber(`${newPhoneNumber}-`);
    } else if (newPhoneNumber.length >= 7 && !newPhoneNumber.includes("(") && !newPhoneNumber.includes(")") && !newPhoneNumber.includes(" ") && !newPhoneNumber.includes("-")) {
      setPhoneNumber(`(${newPhoneNumber.slice(0, 3)}) ${newPhoneNumber.slice(3, 6)}-${newPhoneNumber.slice(6)}`)
    } else {
      setPhoneNumber(newPhoneNumber);
    }
  }

  const resetForm = () => {
    props.setModalShow(false);
    setEmail("");
    setSSN("");
    setSSNState("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setPhoneNumber("");
    setFaxNumber("");
    setAddress({ street: "", city: "", state: "", zipCode: "", country: "" });
    setProfilePicture(null);
    setUserType("attorney");
    setAttorneyType("attorney");
    setAttSpecialty("");
    setAttBarNo("");
    setAttFirmName("");
    setAttFirmAddress({ street: "", city: "", state: "", zipCode: "", country: "" });
    setAttFirmRole("");
    setBusSpecialty("");
    setBusFirmName("");
    setBusFirmAddress({ street: "", city: "", state: "", zipCode: "", country: "" });
    setBusJobTitle("");
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const user = props.user;
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
    } else if ((userType === "personal" || userType === "business" || (userType === "attorney" && attorneyType !== "attorney")) && !SSN.length) {
      showToast("Please fill-in the government issued ID number!", "warning");
    } else if ((userType === "personal" || userType === "business" || (userType === "attorney" && attorneyType !== "attorney")) && !SSNState.length) {
      showToast("Please fill-in the state of issued ID!", "warning");
    } else if (!validateEmail(email.toLocaleLowerCase())) {
      showToast("Invalid email address!", "warning");
    } else if (userType === "attorney" && attorneyType === "attorney" && !attBarNo.length) {
      showToast("Please fill-in the bar number!", "warning");
    } else if (userType === "attorney" && !attSpecialty.length) {
      showToast("Please fill-in the legal specialty!", "warning");
    } else if (userType === "attorney" && !attFirmName.length) {
      showToast("Please fill-in the full firm name!", "warning");
    } else if (userType === "attorney" && (!attFirmAddress.street.length || !attFirmAddress.city.length || !attFirmAddress.state.length || !attFirmAddress.zipCode.length || !attFirmAddress.country.length)) {
      showToast("Please fill-in the full firm address!", "warning");
    } else if (userType === "attorney" && attorneyType === "attorney" && !attFirmRole.length) {
      showToast("Please fill-in the firm role!", "warning");
    } else if (userType === "business" && !busFirmName.length) {
      showToast("Please fill-in the full business name!", "warning");
    } else if (userType === "business" && (!busFirmAddress.street.length || !busFirmAddress.city.length || !busFirmAddress.state.length || !busFirmAddress.zipCode.length || !busFirmAddress.country.length)) {
      showToast("Please fill-in the full business address!", "warning");
    } else if (userType === "business" && !busSpecialty.length) {
      showToast("Please fill-in the business specialty!", "warning");
    } else if (userType === "business" && !busJobTitle.length) {
      showToast("Please fill-in the business role!", "warning");
    } else if (!isUpdatingUser) {
      let data = {
        uid: props.user.uid,
        docId: props.user.docId,
        user: {
          userType,
          profilePicturePath: user.profilePicturePath
        }
      };
      if(user.firstName !== firstName) data.user["firstName"] = firstName;
      if(user.middleName !== middleName) data.user["middleName"] = middleName;
      if(user.lastName !== lastName) data.user["lastName"] = lastName;
      if(user.email !== email) data.user["email"] = email;
      if(user.role !== role) data.user["role"] = role;
      if(user.status !== status) data.user["status"] = status;
      if(!objectsEqual(user.address, address)) data.user["address"] = address;
      if(user.phoneNumber !== phoneNumber) data.user["phoneNumber"] = phoneNumber;
      if(user.faxNumber !== faxNumber) data.user["faxNumber"] = faxNumber;
      if(user.userType !== userType) data.user["userType"] = userType;
      if(profilePicture) data.user["profilePicture"] = profilePicture;
      if(userType === "attorney") {
        if(user.firmName !== attFirmName) data.user["firmName"] = attFirmName;
        if(!objectsEqual(user.firmAddress, attFirmAddress)) data.user["firmAddress"] = attFirmAddress;
        if(user.specialty !== attSpecialty) data.user["specialty"] = attSpecialty;
        if (attorneyType === "attorney") {
          if(user.barNumber !== attBarNo) data.user["barNumber"] = attBarNo;
          if(user.firmRole !== attFirmRole) data.user["firmRole"] = attFirmRole;
        } else {
          if(user.SSN !== SSN) data.user["SSN"] = SSN;
          if(user.SSNState !== SSNState) data.user["SSNState"] = SSNState;
          data.user["userType"] = "paralegal";
        }
      } else if (userType === "business") {
        if(user.firmName !== busFirmName) data.user["firmName"] = busFirmName;
        if(!objectsEqual(user.firmAddress, busFirmAddress)) data.user["firmAddress"] = busFirmAddress;
        if(user.jobTitle !== busJobTitle) data.user["jobTitle"] = busJobTitle;
        if(user.specialty !== busSpecialty) data.user["specialty"] = busSpecialty;
        if(user.SSN !== SSN) data.user["SSN"] = SSN;
        if(user.SSNState !== SSNState) data.user["SSNState"] = SSNState;
      } else {
        if(user.SSN !== SSN) data.user["SSN"] = SSN;
        if(user.SSNState !== SSNState) data.user["SSNState"] = SSNState;
      }
      dispatch(updateUser(data, resetForm));
    }
  }

  return (
    <Modal
      show={props.modalShow}
      onHide={() => props.setModalShow(false)}
      size="xl"
      aria-labelledby="example-custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">
          Update User
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="mb-4 justify-content-center" onSubmit={handleFormSubmit}>
          <MDBRow md="12" id="user-type-form-toggle">
            <MDBCol md="12">
              <h4>User Type</h4>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  checked={userType === "attorney" ? true : false}
                  onChange={() => setUserType("attorney")}
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
                  onChange={() => setUserType("business")}
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
                  onChange={() => setUserType("personal")}
                  name="userRadioDefault"
                  id="userRadioDefault3"
                />
                <label class="form-check-label" for="userRadioDefault3"> Personal </label>
              </div>
              <br></br>
            </MDBCol>
          </MDBRow>
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
            {
              (attorneyType === "paralegal" || userType === "business" || userType === "personal")
              &&
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
              <MDBRow>
                <MDBCol md="6">
                  <Form.Group id="role">
                    <Form.Label>Role</Form.Label>
                    <Form.Control
                      as="select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                      <option value="superadmin">Super Admin</option>
                    </Form.Control>
                  </Form.Group>
                </MDBCol>
                <MDBCol md="6">
                  <Form.Group id="password-confirm">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      as="select"
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="active">Active</option>
                      <option value="disabled">Disabled</option>
                    </Form.Control>
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
          {
            userType === "attorney"
            &&
            <MDBRow>
              <MDBCol md="12">
                <MDBRow>
                  <MDBCol md="12 w-100" >
                    <h4>User Role</h4>
                    <MDBRow md="8" id="attorney-form-toggle">
                      <MDBCol md="12">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            checked={attorneyType === "attorney" ? true : false}
                            onChange={() => setAttorneyType("attorney")}
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                          />
                          <label class="form-check-label" for="flexRadioDefault2"> Attorney </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            checked={attorneyType === "paralegal" ? true : false}
                            onChange={() => setAttorneyType("paralegal")}
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label class="form-check-label" for="flexRadioDefault1"> Paralegal </label>
                        </div>
                        <br></br>
                      </MDBCol>
                      <MDBCol>
                        <MDBRow>
                          {
                            attorneyType === "attorney"
                            &&
                            <MDBCol>
                              <Form.Group id="attorney-barnumber">
                                <Form.Label>Bar Number</Form.Label>
                                <Form.Control
                                  type="text"
                                  value={attBarNo}
                                  onChange={(e) => setAttBarNo(e.target.value)}
                                />
                              </Form.Group>
                            </MDBCol>
                          }
                          <MDBCol>
                            <Form.Group id="attorney-specialty">
                              <Form.Label>Legal Specialty (ie. Defence, Business, Financial, etc.)</Form.Label>
                              <Form.Control
                                type="text"
                                value={attSpecialty}
                                onChange={(e) => setAttSpecialty(e.target.value)}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol md="12">
                        <Form.Group id="attorney-firm-name">
                          <Form.Label>Full Firm Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={attFirmName}
                            onChange={(e) => setAttFirmName(e.target.value)}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol md="12">
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="attorney-full-firm-address">
                              <Form.Label>Full Firm Address</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Street"
                                value={attFirmAddress.street}
                                onChange={(e) => setAttFirmAddress({ ...attFirmAddress, street: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol bottom>
                            <Form.Group id="attorney-full-firm-address">
                              <Form.Control
                                type="text"
                                placeholder="City"
                                value={attFirmAddress.city}
                                onChange={(e) => setAttFirmAddress({ ...attFirmAddress, city: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="attorney-full-firm-address">
                              <Form.Control
                                type="text"
                                placeholder="State"
                                value={attFirmAddress.state}
                                onChange={(e) => setAttFirmAddress({ ...attFirmAddress, state: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol>
                            <Form.Group id="attorney-full-firm-address">
                              <Form.Control
                                type="text"
                                placeholder="Zip Code"
                                value={attFirmAddress.zipCode}
                                onChange={(e) => setAttFirmAddress({ ...attFirmAddress, zipCode: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol>
                            <Form.Group id="attorney-full-firm-address">
                              <Form.Control
                                type="text"
                                placeholder="Country"
                                value={attFirmAddress.country}
                                onChange={(e) => setAttFirmAddress({ ...attFirmAddress, country: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      {
                        attorneyType === "attorney"
                        &&
                        <MDBCol md="12">
                          <Form.Group id="firm-role">
                            <Form.Label>Firm Role (current position ie Owner, Partner, Staff Member, etc.)</Form.Label>
                            <Form.Control
                              type="text"
                              value={attFirmRole}
                              onChange={(e) => setAttFirmRole(e.target.value)}
                            />
                          </Form.Group>
                        </MDBCol>
                      }
                    </MDBRow>
                  </MDBCol>
                  <br></br>
                  <br></br>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          }
          {
            userType === "business"
            &&
            <MDBRow>
              <MDBCol md="12">
                <MDBRow>
                  <h2 className="justify-content-center">Business / Company Section</h2>
                  <MDBCol md="12 w-100">
                    <br></br>
                    <MDBRow md="10" id="business-form-toggle" >
                      <MDBCol md="12">
                        <Form.Group id="company-name">
                          <Form.Label>Business Full Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={busFirmName}
                            onChange={(e) => setBusFirmName(e.target.value)}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol md="12">
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="company-street">
                              <Form.Label>Business Address</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Street"
                                value={busFirmAddress.street}
                                onChange={(e) => setBusFirmAddress({ ...busFirmAddress, street: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol bottom>
                            <Form.Group id="company-city">
                              <Form.Control
                                type="text"
                                placeholder="City"
                                value={busFirmAddress.city}
                                onChange={(e) => setBusFirmAddress({ ...busFirmAddress, city: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="company-state">
                              <Form.Control
                                type="text"
                                placeholder="State"
                                value={busFirmAddress.state}
                                onChange={(e) => setBusFirmAddress({ ...busFirmAddress, state: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol>
                            <Form.Group id="company-zip">
                              <Form.Control
                                type="text"
                                placeholder="Zip Code"
                                value={busFirmAddress.zipCode}
                                onChange={(e) => setBusFirmAddress({ ...busFirmAddress, zipCode: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol>
                            <Form.Group id="company-country">
                              <Form.Control
                                type="text"
                                placeholder="Country"
                                value={busFirmAddress.country}
                                onChange={(e) => setBusFirmAddress({ ...busFirmAddress, country: e.target.value })}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                      <MDBCol md="12">
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="company-specialty">
                              <Form.Label>Business Specialty (What is the nature of your business?)</Form.Label>
                              <Form.Control
                                type="text"
                                value={busSpecialty}
                                onChange={(e) => setBusSpecialty(e.target.value)}
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol>
                            <Form.Group id="company-job-title">
                              <Form.Label>Business Role (your current position ie. Owner, Partner, Staff Member, etc.) </Form.Label>
                              <Form.Control
                                type="text"
                                value={busJobTitle}
                                onChange={(e) => setBusJobTitle(e.target.value)}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <br></br>
                  <br></br>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          }
          <Button
            className="w-100 mt-4"
            disabled={isUpdatingUser}
            color="default"
            type="submit"
          >
            {
              isUpdatingUser
                ?
                <div style={{ display: "flex", flex: 1, alignItems: "center", justifyContent: "center" }}>
                  <div style={{ height: 18, width: 18 }} className="spinner-border text-white" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                <span className="text-white">Update</span>
            }
          </Button>
          <br></br>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default EditUser;