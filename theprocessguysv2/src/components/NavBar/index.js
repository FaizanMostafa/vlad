import React from 'react';
import Navbar from 'reactjs-navbar';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from "../../assets/TPG_logo_low.webp";
import {
  logout
} from "../../redux/actions/auth";
import {
  faHome,
  faUser,
  faSignOutAlt,
  faChartLine,
  faTools,
  faHeadset,
  faSignInAlt,
  faUserPlus
} from '@fortawesome/free-solid-svg-icons';
import 'reactjs-navbar/dist/index.css';
 
const NavBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  if(user && (user.role==="superadmin" || user.role==="admin")) return null;

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
          title: "Homepage",
          icon: faHome,
          isAuth: !user || !isAuthenticated,
          onClick: () => {
            history.push("/");
          },
        },
        {
          title: "Dashboard",
          icon: faChartLine,
          isAuth: user && isAuthenticated && user.hasAgreedToTOS,
          onClick: () => {
            history.push("/member-dashboard");
          },
        },
        {
          title: "Terms Of Service",
          icon: faTools,
          isAuth: user && isAuthenticated && user.hasAgreedToTOS,
          onClick: () => {
            history.push("/tos-agreement");
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
                dispatch(logout(()=>history.push("/")));
              },
            }
          ],
        }
      ]}
    />
  );
}

export default NavBar;