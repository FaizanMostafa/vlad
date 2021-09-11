import React from 'react';
import { Card } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminDashboard = (props) => {
  const user = useSelector(state => state.auth.user);

  return (
    <div style={{minHeight: "100vh"}}>
      <Card className="homepage">
        <Card.Body className="text-center">
          <h2 className="text-center mb-4">Admin Dashboard</h2>
          <br></br>
          {/* When Vlad submits and update of news, it will show up for all clients */}
          {/* {NewsUpdateForClients} */}
          <div>
            <img src={user.profilePictureURI} style={{width: 150, height: 150, borderRadius: 75}} className="img profile-pic" alt="img"/>
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
            <div>Phone Number: {user.phoneNumber}</div>
            <br></br>
            
            <div>Address: {user.address.street} {user.address.city} {user.address.state} {user.address.country}</div>
            <br></br>

            {/*This will show either client driver liscense ID or government ID of whatever option they chose at the register*/}
            <div>Driver Liscence / US Government ID: {"user.driver.id or user.government.id"} </div>
            <br></br>

          <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Link to="/update-profile" className="btn btn-primary w-50 justify-content-center">
              Update Profile
            </Link>
            <br></br>
            <Link to="/admin-view-all-cases" className="btn btn-primary w-50 justify-content-center">
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
            <Link to="/terms-of-service-upload" className="btn btn-primary w-50 justify-content-center">
              Terms Of Service
            </Link>
            <br></br>
            <Link to="/contact-request-submission" className="btn btn-primary w-50 justify-content-center">
              Contact Request Submission
            </Link>
            <br></br>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default AdminDashboard;

