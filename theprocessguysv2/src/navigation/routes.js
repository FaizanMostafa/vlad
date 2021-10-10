import TOSAgreement from "../pages/TOSAgreement";
import QuestionaireMain from "../pages/questionaireMain";
import Login from "../pages/Login";
import Register from "../pages/register";
import ForgotPassword from "../pages/ForgotPassword";
import MemberDashboard from "../pages/Dashboard";
import UpdateProfilePage from "../pages/UpdateProfile";
import ViewCases from '../pages/viewCases';
import AdminDashboard from '../pages/AdminDashboard';
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
import ClientPaymentsZelle from '../pages/clientPaymentsZelle';
import ClientPaymentsChecks from '../pages/clientPaymentsChecks';
import ClientPaymentACH from '../pages/clientPaymentACH';
import NewTermsOfService from '../pages/newTermsOfService';
import AdminViewAllCases from '../pages/adminDashboardViewAllCases';
import HomePage from '../pages/homePage';

const routes = {
  "superuser": [
    {exact: true, path: '/', redirect: "/admin-dashboard"},
    {exact: false, path: '/admin-dashboard', component: AdminDashboard, isProtected: true, redirect: "/login"},
  ],
  "admin": [
    {exact: true, path: '/', redirect: "/admin-dashboard"},
    {exact: false, path: '/admin-dashboard', component: AdminDashboard, isProtected: true, redirect: "/login"},
  ],
  "user": [
    {exact: true, path: '/', redirect: "/member-dashboard"},
    {exact: true, path: '/contact-us', component: ContactUs, isProtected: false},
    {exact: true, path: '/view-cases', component: ViewCases, isProtected: true, redirect: "/login"},
    {exact: true, path: '/tos-agreement', component: TOSAgreement, isProtected: true},
    {exact: true, path: '/member-dashboard', component: MemberDashboard, isProtected: true, redirect: "/login"},
    {exact: true, path: '/update-profile', component: UpdateProfilePage, isProtected: true, redirect: "/login"},
    {exact: true, path: '/questionaire', component: QuestionaireMain, isProtected: true, redirect: "/login"},
    {exact: true, path: '/questionaire-finished', component: ThankYouForRegistering, isProtected: true, redirect: "/login"},
    {exact: true, path: '/questionaire-terms-of-service', component: TermsOfServiceTemplate, isProtected: true, redirect: "/login"},
    {exact: true, path: '/case-document-archive', component: CaseDocumentArchive, isProtected: true, redirect: "/login"},
    {exact: true, path: '/news-update-for-clients', component: NewsUpdateForClients, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-credit-card', component: ClientPayment, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-options', component: ClientPaymentOptions, isProtected: true, redirect: "/login"},
    {exact: true, path: '/payment-successful', component: PaymentSuccessful, isProtected: true, redirect: "/login"},
    {exact: true, path: '/payment-failure', component: PaymentFailure, isProtected: true, redirect: "/login"},
    {exact: true, path: '/case-submission-success', component: AfterUploadMessage, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-debit-card', component: ClientPaymentDebit, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-zelle', component: ClientPaymentsZelle, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-checks', component: ClientPaymentsChecks, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-ach-to-tpg', component: ClientPaymentACH, isProtected: true, redirect: "/login"},
    {exact: true, path: '/terms-of-service', component: NewTermsOfService, isProtected: true, redirect: "/login"},
  ],
  "default": [
    {exact: true, path: '/', component: HomePage, isProtected: false},
    {exact: true, path: '/login', component: Login, isProtected: false},
    {exact: true, path: '/register', component: Register, isProtected: false},
    {exact: true, path: '/forgot-password', component: ForgotPassword, isProtected: false},
    {exact: true, path: '/contact-us', component: ContactUs, isProtected: false},
  ]
};

export default routes;