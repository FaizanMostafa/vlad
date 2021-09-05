import React from 'react';
import Navbar from 'reactjs-navbar';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from "../pictures/The Process Guys word logo2.png";
import {
  logout
} from "../redux/actions/auth";
import {
  faUser,
  faSignOutAlt,
  faChartLine,
  faTools,
  faHeadset,
  faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import 'reactjs-navbar/dist/index.css';
 
const NavBar = ({...props}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
 
  return (
    <Navbar
      logo={logo}
      helpCallback={() => {
        alert("I need help... and coffee...");
      }}
      menuItems={[
        {
          title: "Login",
          icon: faSignInAlt,
          isAuth: !user && !isAuthenticated,
          onClick: () => {
            history.push("/login");
          }
        },
        {
          title: "Register",
          icon: faUserPlus,
          isAuth: !user && !isAuthenticated,
          onClick: () => {
            history.push("/register");
          }
        },
        {
          title: "Dashboard",
          icon: faChartLine,
          isAuth: user && isAuthenticated,
          onClick: () => {
            history.push("/member-dashboard");
          },
        },
        {
          title: "Services",
          icon: faTools,
          isAuth: user && isAuthenticated,
          onClick: () => {
            history.push("/services");
          }
        },
        {
          title: "Contact Us",
          icon: faHeadset,
          isAuth: true,
          onClick: () => {
            history.push("/contact-us");
          }
        },
        {
          // title: `${user.name[0]}${user.name[1]}`,
          icon: faUser,
          isAuth: user && isAuthenticated,
          subItems: [
            {
              title: "Logout",
              icon: faSignOutAlt,
              isAuth: true,
              onClick: () => {
                dispatch(logout());
              },
            }
          ],
        }
      ]}
    />
  );
}

export default NavBar;