import QuestionaireMain from "../pages/QuestionaireMain";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import MemberDashboard from "../pages/MemberDashboard";
import UpdateProfile from "../pages/UpdateProfile";
import AdminDashboard from '../pages/dashboard';
import CaseDocumentArchive from '../pages/CaseDocumentArchive';
import NewsUpdateForClients from '../pages/NewsUpdateForClients';
import ClientPaymentCredit from '../pages/ClientPaymentCredit';
import ClientPaymentOptions from '../pages/ClientPaymentOptions';
import PaymentSuccessful from '../pages/PaymentSuccessful';
import PaymentFailure from '../pages/PaymentFailure';
import CaseSubmissionSuccess from '../pages/CaseSubmissionSuccess';
import ContactUs from '../pages/ContactUs';
import ClientPaymentDebit from '../pages/ClientPaymentsDebit';
import ClientPaymentPayPal from '../pages/ClientPaymentPayPal';
import ClientPaymentZelle from '../pages/ClientPaymentZelle';
import ClientPaymentsChecks from '../pages/ClientPaymentsChecks';
import ClientPaymentACH from '../pages/ClientPaymentACH';
import HomePage from '../pages/HomePage';

const routes = {
  "superadmin": [
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
    {exact: true, path: '/member-dashboard', component: MemberDashboard, isProtected: true, redirect: "/login"},
    {exact: true, path: '/update-profile', component: UpdateProfile, isProtected: true, redirect: "/login"},
    {exact: true, path: '/questionaire', component: QuestionaireMain, isProtected: true, redirect: "/login"},
    {exact: true, path: '/case-document-archive', component: CaseDocumentArchive, isProtected: true, redirect: "/login"},
    {exact: true, path: '/news-update-for-clients', component: NewsUpdateForClients, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-credit-card', component: ClientPaymentCredit, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-paypal', component: ClientPaymentPayPal, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-options', component: ClientPaymentOptions, isProtected: true, redirect: "/login"},
    {exact: true, path: '/payment-successful', component: PaymentSuccessful, isProtected: true, redirect: "/login"},
    {exact: true, path: '/payment-failure', component: PaymentFailure, isProtected: true, redirect: "/login"},
    {exact: true, path: '/case-submission-success', component: CaseSubmissionSuccess, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-debit-card', component: ClientPaymentDebit, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-zelle', component: ClientPaymentZelle, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-checks', component: ClientPaymentsChecks, isProtected: true, redirect: "/login"},
    {exact: true, path: '/client-payment-ach-to-tpg', component: ClientPaymentACH, isProtected: true, redirect: "/login"},
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