import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import TheProcessGuys from "../pages/TheProcessGuys";
import QuestionairePage2 from "../pages/questionaire2";
import Login from "../pages/Login";
import Register from "../pages/register";
import ForgotPassword from "../pages/ForgotPassword";
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import SingleSubmission from "../pages/singleSubmission";
import MultiSubmission from "../pages/multipleSubmission";
import PacketSubmissionPage from "../pages/packetSubmissionPage";
import MemberDashboard from "../pages/Dashboard";
import LoadingPage from "../pages/Loading";
import UpdateProfilePage from "../pages/UpdateProfile";
import { fetchUser } from "../redux/actions/auth";
import ViewCases from '../pages/viewCases';
import AdminDashboard from '../pages/adminDashboard';

const Navigation = (props) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isFetchingUser = useSelector(state => state.auth.isFetchingUser);

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if(isFetchingUser) return(<LoadingPage />);

  const CustomRoute = ({path, isProtected, exact, redirect, component, ...props}) => {
    if(isProtected && user && isAuthenticated) {
      return <Route exact={exact} path={path} component={component} />;
    } else {
      return <Redirect to={redirect} />;
    }
  }

  return (
    <>
      <NavBar />
      <Router>
        <Switch>
          <CustomRoute exact path='/' component={TheProcessGuys} isProtected redirect="/login" />
          <Route path = '/single-submission' component = {SingleSubmission} />
          <Route path = '/multi-submission' component = {MultiSubmission} />
          <Route path = '/packet-submission-page' component = {PacketSubmissionPage} />
          <Route path = '/view-cases' component = {ViewCases} />
          <Route path = '/admin-dashboard' component = {AdminDashboard} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/forgot-password' component = {ForgotPassword} />
          <Route path = '/member-dashboard' component = {MemberDashboard} />
          <Route path = '/update-profile' component = {UpdateProfilePage} />
          <Route path = '/questionaire' component = {QuestionairePage2} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;