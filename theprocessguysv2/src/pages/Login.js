import { MDBCol } from "mdbreact";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import app from "../config/firebase";

function Login() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
        <MDBCol md="6 w-50"><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2 className="text-center">Log In</h2>
            <form>

              <>

                <MDBCol md="10">
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

              <MDBCol md="10">
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

            </>

              <Button className="w-50 text-center" type="submit">
                Log In
              </Button>

            </form>

        </MDBCol>

          <div className="xxtext-center mt-5 d-flex">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <div className=" text-center d-flex mt-5">
            Need an account? <Link to="/register">Register Now</Link>
          </div>
          
          <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </>
  
    )
    // async function login(e) {
    //   try {
    //     await app.login(email, password)
    //     return alert("You have logged in! <3")
    //   } catch(error) {
    //     alert(error.message)
    //   }
    // }
}

export default Login