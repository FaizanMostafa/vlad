import { useEffect, useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateAccountStatus } from '../redux/actions/admin';

const EditUser = (props) => {
  const dispatch = useDispatch();
  const isUpdatingUser = useSelector(state => state.admin.isUpdatingUser);
  const user = useSelector(state => state.admin.userAccountDetails);
  const isFetching = useSelector(state => state.admin.isFetchingUserAccountDetails);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if(user) {
      setStatus(user.status);
    }
  }, [user]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if(!isUpdatingUser && status.length && status!==user.status) {
      let data = {
        uid: user.uid,
        status
      };
      dispatch(updateAccountStatus(data, ()=>props.setModalShow(false)));
    }
  }

  return (
    <Modal
      show={props.modalShow}
      onHide={() => props.setModalShow(false)}
      size={isFetching ? "lg" : "xl"}
      aria-labelledby="example-custom-modal-styling-title"
      centered={isFetching ? true : false}
    >
      {
        isFetching
          ?
            <Modal.Body>
              <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                <div style={{height: 18, width: 18}} className="spinner-border text-primary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>  
              </div>
            </Modal.Body>
          :
            <>
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  View Account Details
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form className="mb-4 justify-content-center" onSubmit={handleFormSubmit}>
                  <MDBRow md="12" id="user-type-form-toggle">
                    <MDBCol md="12">
                      <h5>
                        User Type:&nbsp;
                        <span style={{color: "black"}}>
                          {user.userType === "attorney" && "Attorney / Paralegal"}
                          {user.userType === "business" && "Business / Company"}
                          {user.userType === "personal" && "Personal"}
                        </span>
                      </h5>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBRow style={{ marginLeft: 0, width: "100%" }}>
                      <MDBCol>
                        <Form.Group id="full-name">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={user.firstName}
                            disabled
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="full-name">
                          <Form.Label>Middle Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={user.middleName}
                            disabled
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="full-name">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={user.lastName}
                            disabled
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
                              value={user.address.street}
                              placeholder="Street"
                              disabled
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol bottom>
                          <Form.Group id="city-address">
                            <Form.Control
                              type="text"
                              placeholder="City"
                              value={user.address.city}
                              disabled
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
                              value={user.address.state}
                              disabled
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol>
                          <Form.Group id="zipCode-address">
                            <Form.Control
                              type="text"
                              placeholder="Zip Code"
                              value={user.address.zipCode}
                              disabled
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol>
                          <Form.Group id="country-address">
                            <Form.Control
                              type="text"
                              placeholder="Country"
                              value={user.address.country}
                              disabled
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
                              value={user.phoneNumber}
                              disabled
                            />
                          </Form.Group>
                        </MDBCol>
                        <MDBCol>
                          <Form.Group id="fax-number">
                            <Form.Label>Fax Number</Form.Label>
                            <Form.Control
                              type="text"
                              value={user.faxNumber}
                              disabled
                            />
                          </Form.Group>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                    {
                      (user.userType === "paralegal" || user.userType === "business" || user.userType === "personal")
                      &&
                      <MDBCol md="12">
                        <MDBRow>
                          <MDBCol>
                            <Form.Group id="ssn">
                              <Form.Label>Government Issued ID Number</Form.Label>
                              <Form.Control
                                type="text"
                                value={user.SSN}
                                disabled
                              />
                            </Form.Group>
                          </MDBCol>
                          <MDBCol bottom>
                            <Form.Group id="ssn-state">
                              <Form.Label>State of issued ID</Form.Label>
                              <Form.Control
                                type="text"
                                value={user.SSNState}
                                disabled
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
                          value={user.email}
                          disabled
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
                              value={user.role}
                              disabled
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
                              <option value="pending">Pending</option>
                              <option value="active">Active</option>
                              <option value="disabled">Disabled</option>
                            </Form.Control>
                          </Form.Group>
                        </MDBCol>
                      </MDBRow>
                    </MDBCol>
                  </MDBRow>
                  {
                    user.userType === "attorney"
                    &&
                    <MDBRow>
                      <MDBCol md="12">
                        <MDBRow>
                          <MDBCol md="12 w-100" >
                            <h5>
                              User Role:&nbsp;
                              <span style={{color: "black"}}>
                                {user.userType === "attorney" && "Attorney"}
                                {user.userType === "paralegal" && "Paralegal"}
                              </span>
                            </h5>
                            <MDBRow md="8" id="attorney-form-toggle">
                              <MDBCol>
                                <MDBRow>
                                  {
                                    user.userType === "attorney"
                                    &&
                                    <MDBCol>
                                      <Form.Group id="attorney-barnumber">
                                        <Form.Label>Bar Number</Form.Label>
                                        <Form.Control
                                          type="text"
                                          value={user.barNumber}
                                          disabled
                                        />
                                      </Form.Group>
                                    </MDBCol>
                                  }
                                  <MDBCol>
                                    <Form.Group id="attorney-specialty">
                                      <Form.Label>Legal Specialty</Form.Label>
                                      <Form.Control
                                        type="text"
                                        value={user.specialty}
                                        disabled
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
                                    value={user.firmName}
                                    disabled
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
                                        value={user.firmAddress.street}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol bottom>
                                    <Form.Group id="attorney-full-firm-address">
                                      <Form.Control
                                        type="text"
                                        placeholder="City"
                                        value={user.firmAddress.city}
                                        disabled
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
                                        value={user.firmAddress.state}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol>
                                    <Form.Group id="attorney-full-firm-address">
                                      <Form.Control
                                        type="text"
                                        placeholder="Zip Code"
                                        value={user.firmAddress.zipCode}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol>
                                    <Form.Group id="attorney-full-firm-address">
                                      <Form.Control
                                        type="text"
                                        placeholder="Country"
                                        value={user.firmAddress.country}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCol>
                              {
                                user.userType === "attorney"
                                &&
                                <MDBCol md="12">
                                  <Form.Group id="firm-role">
                                    <Form.Label>Firm Role</Form.Label>
                                    <Form.Control
                                      type="text"
                                      value={user.firmRole}
                                      disabled
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
                    user.userType === "business"
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
                                    value={user.firmName}
                                    disabled
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
                                        value={user.firmAddress.street}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol bottom>
                                    <Form.Group id="company-city">
                                      <Form.Control
                                        type="text"
                                        placeholder="City"
                                        value={user.firmAddress.city}
                                        disabled
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
                                        value={user.firmAddress.state}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol>
                                    <Form.Group id="company-zip">
                                      <Form.Control
                                        type="text"
                                        placeholder="Zip Code"
                                        value={user.firmAddress.zipCode}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol>
                                    <Form.Group id="company-country">
                                      <Form.Control
                                        type="text"
                                        placeholder="Country"
                                        value={user.firmAddress.country}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                </MDBRow>
                              </MDBCol>
                              <MDBCol md="12">
                                <MDBRow>
                                  <MDBCol>
                                    <Form.Group id="company-specialty">
                                      <Form.Label>Business Specialty</Form.Label>
                                      <Form.Control
                                        type="text"
                                        value={user.specialty}
                                        disabled
                                      />
                                    </Form.Group>
                                  </MDBCol>
                                  <MDBCol>
                                    <Form.Group id="company-job-title">
                                      <Form.Label>Business Role</Form.Label>
                                      <Form.Control
                                        type="text"
                                        value={user.jobTitle}
                                        disabled
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
            </>
      }
    </Modal>
  );
}

export default EditUser;