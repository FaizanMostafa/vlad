import React from 'react';
import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = (props) => {
  const user = useSelector(state => state.auth.user);

  return (
    <>
      <Card className="homepage">
        <Card.Body className="text-center">
          <h2 className="text-center mb-4">Member Dashboard</h2>
          <div>
            <img src={user.profilePicture} className="img profile-pic" alt="img"/>
          </div>
          <br></br>
            <div>E-mail: {user.email}</div>
            <br></br>
            {
              user.userType === "personal"
                &&
                  <>
                    <div>Name: {user.name}</div>
                    <br></br>
                  </>
            }
            {
              user.userType === "business"
                &&
                  <>
                    <div>Business Name: {user.firmName}</div>
                    <br></br>
                  </>
            }
            {
              user.userType === "attorney"
                &&
                  <>
                    <div>Attorney Name: {user.name} </div>
                    <br></br>
                  </>
            }
            {
              user.userType === "paralegal"
                &&
                  <>
                    <div>Paralegal Name: {user.name}</div>
                    <br></br>
                  </>
            }
            <div>Fax Number: {user.faxNo}</div>
            <br></br>
            {/* What does that mean? */}
            <div>Personal: {}</div>
            <br></br>
            {/*  */}

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