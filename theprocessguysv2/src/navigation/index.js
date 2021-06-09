import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TheProcessGuys from "../pages/TheProcessGuys";
// import QuestionairePage from "../pages/Questionaire";
import Login from "../pages/Login";
import Register from "../pages/register";
import ForgotPassword from "../pages/ForgotPassword";
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import SingleSubmission from "../pages/singleSubmission";
import MultiSubmission from "../pages/multipleSubmission";
import PacketSubmissionPage from "../pages/packetSubmissionPage";
import MemberDashboard from "../pages/Dashboard";
import UpdateProfilePage from "../pages/UpdateProfile";

const Navigation = (props) => {
  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path='/' component = {TheProcessGuys} />
          <Route path = '/single-submission' component = {SingleSubmission} />
          <Route path = '/multi-submission' component = {MultiSubmission} />
          <Route path = '/packet-submission-page' component = {PacketSubmissionPage} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/forgot-password' component = {ForgotPassword} />
          <Route path = '/member-dashboard' component = {MemberDashboard} />
          <Route path = '/update-profile' component = {UpdateProfilePage} />
          {/* <Route path = '/questionaire' component = {QuestionairePage} /> */}
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;