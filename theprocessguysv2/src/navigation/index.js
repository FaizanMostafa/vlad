import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import TheProcessGuys from "../pages/TheProcessGuys";
import QuestionaireMain from "../pages/questionaireMain";
import Login from "../pages/Login";
import Register from "../pages/register";
import ForgotPassword from "../pages/ForgotPassword";
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import SingleSubmission from "../pages/singleSubmission";
import MultiSubmission from "../pages/multipleSubmission";
import MemberDashboard from "../pages/Dashboard";
import LoadingPage from "../pages/Loading";
import UpdateProfilePage from "../pages/UpdateProfile";
import { fetchUser } from "../redux/actions/auth";
import ViewCases from '../pages/viewCases';
import AdminDashboard from '../pages/adminDashboard';
import ThankYouForRegistering from '../pages/ThankYouForRegistering';
import TermsOfServiceTemplate from '../pages/termsOfServiceTemplate';
import CaseDocumentArchive from '../pages/caseDocumentArchive';
import NewsUpdateForClients from '../pages/newsUpdateForClients';
import ClientPayment from '../pages/clientPayments';
import ClientPaymentOptions from '../pages/clientPaymentOptions';
import PaymentSuccessful from '../pages/paymentSucessful';
import PaymentFailure from '../pages/paymentFailure';
import AfterUploadMessage from '../pages/afterUploadMessage';

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
          <Route path = '/view-cases' component = {ViewCases} />
          <Route path = '/admin-dashboard' component = {AdminDashboard} />
          <Route path = '/login' component = {Login} />
          <Route path = '/register' component = {Register} />
          <Route path = '/forgot-password' component = {ForgotPassword} />
          <Route path = '/member-dashboard' component = {MemberDashboard} />
          <Route path = '/update-profile' component = {UpdateProfilePage} />
          <Route path = '/questionaire' component = {QuestionaireMain} />
          <Route path = '/questionaire-finished' component = {ThankYouForRegistering} />
          <Route path = '/questionaire-terms-of-service' component = {TermsOfServiceTemplate} />
          <Route path = '/case-document-archive' component = {CaseDocumentArchive} />
          <Route path = '/news-update-for-clients' component = {NewsUpdateForClients} />
          <Route path = '/client-payment-credit-card' component = {ClientPayment} />
          <Route path = '/client-payment-options' component = {ClientPaymentOptions} />
          <Route path = '/payment-successful' component = {PaymentSuccessful} />
          <Route path = '/payment-failure' component = {PaymentFailure} />
          <Route path = '/after-upload-message' component = {AfterUploadMessage} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;