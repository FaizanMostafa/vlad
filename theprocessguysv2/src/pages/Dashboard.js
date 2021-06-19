import React from "react"
import { Card } from "react-bootstrap"
import { Link} from "react-router-dom"

function Dashboard() {


  return (
    <>
      <Card className="homepage">

        <Card.Body className="text-center">

          <h2 className="text-center mb-4">Member Dashboard</h2>
          <div>
            <img className="img profile-pic" alt="img"/>
          </div>
          <br></br>
            <div>E-mail: `{}`</div>
            <br></br>
            <div>Name: `{}`</div>
            <br></br>
            {/*if business shows this*/}
            <div>Business Name: `{}`</div>
            <br></br>
            {/*if attorney show this*/}
            <div>Attorney Name: `{}` </div>
            <br></br>
            {/*if paralegal show this*/}
            <div>Paralegal Name: `{}`</div>
            <br></br>
            <div>Address: `{}`</div>
            <br></br>
            <br></br>

          <Link to="/update-profile" className="btn btn-primary w-50 justify-content-center">
            Update Profile
          </Link>
          <br></br>
          <Link to="/questionaire" className="btn btn-primary w-50 justify-content-center">
            New Submission
          </Link>
          <br></br>
          <Link to="/view-cases" className="btn btn-primary w-50 justify-content-center">
            View Cases
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

export default Dashboard;