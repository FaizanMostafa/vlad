import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useIdleTimer } from 'react-idle-timer';
import TOSAgreement from "../pages/TOSAgreement";
import QuestionaireMain from "../pages/questionaireMain";
import Login from "../pages/Login";
import Register from "../pages/register";
import ForgotPassword from "../pages/ForgotPassword";
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import MemberDashboard from "../pages/Dashboard";
import LoadingPage from "../pages/Loading";
import UpdateProfilePage from "../pages/UpdateProfile";
import { fetchUser, logout } from "../redux/actions/auth";
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
import ContactUs from '../pages/contactus2';
import ClientPaymentDebit from '../pages/clientPaymentsDebit';
// import ClientPaymentsPayPal from '../pages/clientPaymentsPayPal';
import ClientPaymentsZelle from '../pages/clientPaymentsZelle';
import ClientPaymentsChecks from '../pages/clientPaymentsChecks';
import ClientPaymentACH from '../pages/clientPaymentACH';
import NewTermsOfService from '../pages/newTermsOfService';
import AdminViewAllCases from '../pages/adminDashboardViewAllCases';
import HomePage from '../pages/homePage';


const Navigation = (props) => {

  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const isFetchingUser = useSelector(state => state.auth.isFetchingUser);

  const handleOnIdle = (event) => {
    if(user && isAuthenticated) {
      dispatch(logout());
    }
  }

  useIdleTimer({
    timeout: 1000 * 60 * 15,
    onIdle: handleOnIdle
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if(isFetchingUser) return(<LoadingPage />);

  const CustomRoute = ({path, isProtected, exact, redirect, component, ...props}) => {
    if(isProtected && user && isAuthenticated) {
      if(user.hasAgreedToTOS) {
        return <Route exact={exact} path={path} component={component} />;
      } else {
        return <Redirect to="/tos-agreement" />;
      }
    } else if(!isProtected && user && isAuthenticated && path === "/") {
      return <Redirect to={redirect} />;
    } else {
      return <Redirect to={redirect} />;
    }
  }

  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <CustomRoute exact path='/view-cases' component={ViewCases} isProtected redirect="/login" />
          <CustomRoute exact path='/admin-dashboard' component={AdminDashboard} isProtected redirect="/login" />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route exact={true} path="/tos-agreement" component={TOSAgreement} />
          <CustomRoute exact path='/member-dashboard' component={MemberDashboard} isProtected redirect="/login" />
          <CustomRoute exact path='/update-profile' component={UpdateProfilePage} isProtected redirect="/login" />
          <CustomRoute exact path='/questionaire' component={QuestionaireMain} isProtected redirect="/login" />
          <CustomRoute exact path='/questionaire-finished' component={ThankYouForRegistering} isProtected redirect="/login" />
          <CustomRoute exact path='/questionaire-terms-of-service' component={TermsOfServiceTemplate} isProtected redirect="/login" />
          <CustomRoute exact path='/case-document-archive' component={CaseDocumentArchive} isProtected redirect="/login" />
          <CustomRoute exact path='/news-update-for-clients' component={NewsUpdateForClients} isProtected redirect="/login" />
          <CustomRoute exact path='/client-payment-credit-card' component={ClientPayment} isProtected redirect="/login" />
          <CustomRoute exact path='/client-payment-options' component={ClientPaymentOptions} isProtected redirect="/login" />
          <CustomRoute exact path='/payment-successful' component={PaymentSuccessful} isProtected redirect="/login" />
          <CustomRoute exact path='/payment-failure' component={PaymentFailure} isProtected redirect="/login" />
          <CustomRoute exact path='/case-submission-success' component={AfterUploadMessage} isProtected redirect="/login" />
          <Route path='/contact-us' component={ContactUs} />
          <CustomRoute exact path='/client-payment-debit-card' component={ClientPaymentDebit} isProtected redirect="/login" />
          {/* <CustomRoute exact path='/client-payment-paypal' component={ClientPaymentsPayPal} isProtected redirect="/login" /> */}
          <CustomRoute exact path='/client-payment-zelle' component={ClientPaymentsZelle} isProtected redirect="/login" />
          <CustomRoute exact path='/client-payment-checks' component={ClientPaymentsChecks} isProtected redirect="/login" />
          <CustomRoute exact path='/client-payment-ach-to-tpg' component={ClientPaymentACH} isProtected redirect="/login" />
          <CustomRoute exact path='/terms-of-service' component={NewTermsOfService} isProtected redirect="/login" />
          <CustomRoute path='/admin-view-all-cases' component={AdminViewAllCases} />
          <CustomRoute path='/terms-of-service-upload' component={NewTermsOfService} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;