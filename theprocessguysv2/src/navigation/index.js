import {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { useIdleTimer } from 'react-idle-timer';
import NavBar from "../navbar/navBar";
import Footer from "../footer/footer";
import LoadingPage from "../pages/Loading";
import NotFound404 from "../pages/NotFound404";
import { fetchUser, logout } from "../redux/actions/auth";
import routes from "./routes";


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
    } else if(redirect) {
      return <Redirect to={redirect} />;
    } else {
      return <Route exact={exact} path={path} component={component} />;
    }
  }
  
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          {
            user
              ?
                routes[user.role].map((route)=>(
                  <CustomRoute {...route} />
                ))
              :
                routes["default"].map((route)=>(
                  <CustomRoute {...route} />
                ))
          }
          {/* <CustomRoute exact path='/admin-dashboard' component={AdminDashboard} isProtected redirect="/login" />
          <CustomRoute exact path='/client-payment-paypal' component={ClientPaymentsPayPal} isProtected redirect="/login" />
          <CustomRoute path='/admin-view-all-cases' component={AdminViewAllCases} />
          <CustomRoute path='/terms-of-service-upload' component={NewTermsOfService} /> */}
          <Route path='*' component={NotFound404} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;