import React, { useRef, useState } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Form, Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { resetPassword } from "../redux/actions/auth";
import { showToast, validateEmail } from "../utils";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isResettingPassword = useSelector(state => state.auth.isResetting);

  function handleOnFormSubmit(e) {
    e.preventDefault();
    if (!validateEmail(email.toLocaleLowerCase())) {
      showToast("Invalid email address!", "warning");
    } else {
      dispatch(resetPassword({email},()=>setEmail("")));
    }
  }

  if(user && isAuthenticated) return (<Redirect to="/" />);

  return (
    <MDBRow style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <MDBCol md="6 w-100">
        <h2 className="text-center">Password Reset</h2>
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
            </MDBCol><br></br>
          </MDBRow>
          <Button style={{ marginTop: 20 }} className="w-100 text-center" type="submit">
            {
              isResettingPassword
                ?
                <div style={{ display: "flex", flex: 1, color: "white", alignItems: "center", justifyContent: "center" }}>
                  <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                :
                <span>Reset Password</span>
            }
          </Button>
        </form>
        <div className="w-100 text-center mt-3">
          <Link to="/login">Login</Link>
        </div>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/register">Register an Account</Link>
        </div>
      </MDBCol>
    </MDBRow>
  );
}