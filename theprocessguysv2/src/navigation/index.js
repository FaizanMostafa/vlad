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
import TOSAgreement from '../pages/TOSAgreement';


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
    } else if((!isProtected && user && isAuthenticated && path === "/") || redirect) {
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
                <>
                  {
                    routes[user.role].map((route, index)=>(
                      <CustomRoute key={`ni${index}`} {...route} />
                    ))
                  }
                  <Route key={`ni${routes[user.role].length}`} exact={true} path="/tos-agreement" component={TOSAgreement} />
                </>
              :
                routes["default"].map((route, index)=>(
                  <CustomRoute key={`ni${index}`} {...route} />
                ))
          }
          <Route path='*' component={NotFound404} />
        </Switch>
      </Router>
      <Footer />
    </>
  )
}

export default Navigation;