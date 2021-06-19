import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const phoneNumberRef = useRef()
  const addressRef = useRef()
  const imageRef = useRef()
  // const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  // const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    // setLoading(true)
    setError("")

    // if (emailRef.current.value !== currentUser.email) {
    //   promises.push(updateEmail(emailRef.current.value))
    // }
    // if (passwordRef.current.value) {
    //   promises.push(updatePassword(passwordRef.current.value))
    // }
  }

  return (
    <>
    <React.Fragment>
      <Card className="w-100 text-center homepage">
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                // defaultValue={currentUser.email}
              />
            </Form.Group>
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
            <Form.Group id="update-address">
              <Form.Label>Update Address</Form.Label>
              <Form.Control
                type="text"
                ref={addressRef}
              />
            </Form.Group>
            <Form.Group id="update-phone-number">
              <Form.Label>Update Phone Number</Form.Label>
              <Form.Control
                type="password"
                ref={phoneNumberRef}
              />
            </Form.Group>
            <Form.Group id="update-image">
              <Form.Label>Update Image</Form.Label>
              <Form.Control
                type='file' 
                accept=".jpg,.png" 
                label='Upload' 
                ref={imageRef}
              />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit">
              Update
            </Button>
          </Form>
          <div>
            <Link to="/" className="btn btn-primary justify-content-center">Close</Link>
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