import { MDBRow, MDBCol } from 'mdbreact';
import { Form } from 'react-bootstrap';
import { capitalizeString } from '../../utils';

const MemberDetails = (props) => {
  const user = props.location.state.user;

  return (
    <div style={{boxSizing: "border-box", backgroundColor: "white", borderRadius: 6, padding: 20, width: "100%"}}>
      <MDBRow md="12" id="user-type-form-toggle">
        <MDBCol md="6">
          <MDBRow md="12">
            <MDBCol md="12">
              <Form.Group id="full-name">
                <Form.Label>User Type</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={capitalizeString(user.userType)}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol md="12">
              <Form.Group id="text">
                <label>Email</label>
                <Form.Control
                  type="email"
                  disabled={true}
                  value={user.email}
                />
              </Form.Group>
        </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="6">
          <Form.Group id="image">
            <Form.Label>Account Image</Form.Label><br/>
            <img
              resizeMode="contain"
              style={{width: 100, height: 100}}
              src={user.profilePictureURI}
            />
          </Form.Group>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBRow style={{ marginLeft: 0, width: "100%" }}>
          <MDBCol>
            <Form.Group id="full-name">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                disabled={true}
                value={user.firstName}
              />
            </Form.Group>
          </MDBCol>
          <MDBCol>
            <Form.Group id="full-name">
              <Form.Label>Middle Name</Form.Label>
              <Form.Control
                type="text"
                disabled={true}
                value={user.middleName}
              />
            </Form.Group>
          </MDBCol>
          <MDBCol>
            <Form.Group id="full-name">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                disabled={true}
                value={user.lastName}
              />
            </Form.Group>
          </MDBCol>
        </MDBRow>
        <MDBCol md="12">
          <MDBRow>
            <MDBCol>
              <Form.Label>Applicant Full Address</Form.Label>
              <Form.Group id="street-address">
                <Form.Label>Street</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.address.street}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol bottom>
              <Form.Group id="city-address">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.address.city}
                />
              </Form.Group>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <Form.Group id="state-address">
                <Form.Label>State</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.address.state}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol>
              <Form.Group id="zipCode-address">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.address.zipCode}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol>
              <Form.Group id="country-address">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.address.country}
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
                  disabled={true}
                  value={user.phoneNumber}
                />
              </Form.Group>
            </MDBCol>
            <MDBCol>
              <Form.Group id="fax-number">
                <Form.Label>Fax Number</Form.Label>
                <Form.Control
                  type="text"
                  disabled={true}
                  value={user.faxNumber}
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
                    disabled={true}
                  />
                </Form.Group>
              </MDBCol>
              <MDBCol bottom>
                <Form.Group id="ssn-state">
                  <Form.Label>State of issued ID</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={true}
                    value={user.SSNState}
                  />
                </Form.Group>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        }
        <MDBCol md="12">
          <MDBRow>
            <MDBCol md="6">
              <Form.Group id="role">
                <Form.Label>Role</Form.Label>
                <Form.Control
                  as="select"
                  value={user.role}
                  disabled={true}
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
                  disabled={true}
                  value={user.status}
                >
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
                <Form.Group id="full-name">
                  <Form.Label>User Type</Form.Label>
                  <Form.Control
                    type="text"
                    disabled={true}
                    value={capitalizeString(user.userType)}
                  />
                </Form.Group>
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
                              disabled={true}
                              value={user.barNo}
                            />
                          </Form.Group>
                        </MDBCol>
                      }
                      <MDBCol>
                        <Form.Group id="attorney-specialty">
                          <Form.Label>Legal Specialty</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.specialty}
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
                        disabled={true}
                        value={user.firmName}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBRow>
                      <MDBCol>
                        <Form.Label>Full Firm Address</Form.Label>
                        <Form.Group id="attorney-full-firm-address">
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.street}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol bottom>
                        <Form.Group id="attorney-full-firm-address">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.city}
                          />
                        </Form.Group>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <Form.Group id="attorney-full-firm-address">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.state}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="attorney-full-firm-address">
                          <Form.Label>Zip Code</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.zipCode}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="attorney-full-firm-address">
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.country}
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
                          disabled={true}
                          value={user.firmRole}
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
              <h2 style={{margin: "5px 0px 0px 17px", padding: 0}} className="justify-content-center">Business / Company Section</h2>
              <MDBCol md="12 w-100">
                <br></br>
                <MDBRow md="10" id="business-form-toggle" >
                  <MDBCol md="12">
                    <Form.Group id="company-name">
                      <Form.Label>Business Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        disabled={true}
                        value={user.firmName}
                      />
                    </Form.Group>
                  </MDBCol>
                  <MDBCol md="12">
                    <MDBRow>
                      <MDBCol>
                        <Form.Label>Business Address</Form.Label>
                        <Form.Group id="company-street">
                          <Form.Label>Street</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.street}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol bottom>
                        <Form.Group id="company-city">
                          <Form.Label>City</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.city}
                          />
                        </Form.Group>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <Form.Group id="company-state">
                          <Form.Label>State</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.state}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="company-zip">
                          <Form.Label>Zip Code</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.zipCode}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="company-country">
                          <Form.Label>Country</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.firmAddress.country}
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
                            disabled={true}
                            value={user.specialty}
                          />
                        </Form.Group>
                      </MDBCol>
                      <MDBCol>
                        <Form.Group id="company-job-title">
                          <Form.Label>Business Role</Form.Label>
                          <Form.Control
                            type="text"
                            disabled={true}
                            value={user.jobTitle}
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
      <br></br>
    </div>
  );
}

export default MemberDetails;