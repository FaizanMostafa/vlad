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
import ContactUs from '../pages/contactus2';
import ClientPaymentDebit from '../pages/clientPaymentsDebit';
import ClientPaymentsPayPal from '../pages/clientPaymentsPayPal';
import ClientPaymentsZelle from '../pages/clientPaymentsZelle';
import ClientPaymentsChecks from '../pages/clientPaymentsChecks';
import ClientPaymentACH from '../pages/clientPaymentACH';


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
          <CustomRoute exact path='/' component={TheProcessGuys} redirect="/member-dashboard" />
          <Route path='/view-cases' component={ViewCases} />
          <CustomRoute exact path='/admin-dashboard' component={AdminDashboard} isProtected redirect="/login" />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <CustomRoute exact path='/member-dashboard' component={MemberDashboard} isProtected redirect="/login" />
          <CustomRoute exact path='/update-profile' component={UpdateProfilePage} isProtected redirect="/login" />
          <CustomRoute exact path='/questionaire' component={QuestionaireMain} isProtected redirect="/login" />
          <Route path='/questionaire-finished' component={ThankYouForRegistering} />
          <Route path='/questionaire-terms-of-service' component={TermsOfServiceTemplate} />
          <Route path='/case-document-archive' component={CaseDocumentArchive} />
          <Route path='/news-update-for-clients' component={NewsUpdateForClients} />
          <Route path='/client-payment-credit-card' component={ClientPayment} />
          <Route path='/client-payment-options' component={ClientPaymentOptions} />
          <Route path='/payment-successful' component={PaymentSuccessful} />
          <Route path='/payment-failure' component={PaymentFailure} />
          <Route path='/case-submission-success' component={AfterUploadMessage} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/client-payment-debit-card' component={ClientPaymentDebit} />
          <Route path='/client-payment-paypal' component={ClientPaymentsPayPal} />
          <Route path='/client-payment-zelle' component={ClientPaymentsZelle} />
          <Route path='/client-payment-checks' component={ClientPaymentsChecks} />
          <Route path='/client-payment-ach-to-tpg' component={ClientPaymentACH} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;