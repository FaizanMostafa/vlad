import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContexts"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
//   const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
    //   await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card className="homepage">

        <Card.Body>

          <h2 className="text-center mb-4">Member Dashboard</h2>

          {error && <Alert variant="danger">{error}</Alert>}
          {/* <strong>Email:</strong> {currentUser.email} */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Link to="/update-profile" className="btn btn-primary w-50">
            Update Profile
          </Link>
        
        </Card.Body>

      </Card>

      <div className="w-100 text-center mt-2">

        <Button variant="link" onClick={handleLogout} className="btn btn-primary w-50 mt-3">
          Log Out
        </Button>
      
      </div>
      <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
    </>
  )
}