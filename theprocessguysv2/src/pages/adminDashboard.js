import React from "react"
import { Card } from "react-bootstrap"
import { Link} from "react-router-dom"

function AdminDashboard() {


  return (
    <>
      <Card className="homepage">

        <Card.Body className="text-center">

          <h2 className="text-center mb-4">Admin Dashboard</h2>
          <div>
            <img className="img profile-pic" alt="img"/>
          </div>
          <br></br>
            <div>E-mail: `{}`</div>
            <br></br>
            <div>Name: `{}`</div>
            <br></br>
            <div>Address: `{}`</div>
            <br></br>
            <div>Phone Number: `{}`</div>
            <br></br>
            {/*Show Personal ID ONLY for ADMIN*/}
            {/*if personal/business/paralegal show this*/}
            <div>Driver Liscense / Real ID (No Passports): `{}`</div>
            <br></br>

          <Link to="/update-profile" className="btn btn-primary w-50 justify-content-center">
            Update Profile
          </Link>
          <br></br>
          <Link to="/view-all-cases" className="btn btn-primary w-50 justify-content-center">
            View All Cases
          </Link>
          <br></br>
          <Link to="/view-all-clients" className="btn btn-primary w-50 justify-content-center">
            View All Accounts
          </Link>
          <br></br>
          <Link to="/review-case-submissions" className="btn btn-primary w-50 justify-content-center">
            Review New Case Submissions
          </Link>
          <br></br>
          <Link to="/terms-of-service" className="btn btn-primary w-50 justify-content-center">
            Terms Of Service
          </Link>
          <br></br>
          <Link to="/contact-request-submission" className="btn btn-primary w-50 justify-content-center">
            Contact Request Submission
          </Link>
          <br></br>
        </Card.Body>
      </Card>
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

export default AdminDashboard;