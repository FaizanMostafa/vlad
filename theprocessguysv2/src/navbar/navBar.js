import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
// import ContactPage from "../pages/contactus2";
import OurServices from "../pages/OurServices";
import { logout } from "../redux/actions/auth";
// import img from "./Pictures/The-Process-Guys-word-logo.png";

const NavBar = (props) => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

    const handleOnPressLogout = () => {
        dispatch(logout());
    }

    if(!user || !isAuthenticated) return (
        <><br/><br/><br/>
            <nav className="nav-bar ">
                {/* <div className='navi-bar g'>
                    <a className="navbar-brand" href="/">
                        <img alt="" src="./components/The Process Guys word logo.png" ></img>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div> */}
                <ul className="navbar-nav">
                    <li>
                        <div>
                            <a className="navbar-brand left" href="/">
                                <b><span className="white1">THE</span> <span className="gold">PROCESS</span> <span className="white2">GUYS</span></b>
                            </a>
                        </div>
                    </li>
                    <li>
                        <a className="nav-link register text-center mt-4 mb-4" href="/register" style={{color : "white"}}><h5><b>Sign Up</b></h5></a>
                    </li>
                    <li>
                        <a className="nav-link login text-center mt-4 mb-4" href="/login" style={{color : "white"}}><h5><b>Log In</b></h5></a>
                    </li>
                </ul>
            </nav>
        </>
    );

    return(
        <React.Fragment><br/><br/><br/>
            {/* <div className='navi-bar g'> */}
                <nav className="nav-bar ">
                {/* <a className="navbar-brand" href="/">
                        <img alt="" src="./components/The Process Guys word logo.png" ></img>
                </a> */}
                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
                <ul className="navbar-nav">
                    <li>
                        <div>
                            <a className="navbar-brand left" href="/">
                                <b><span className="white1">THE</span> <span className="gold">PROCESS</span> <span className="white2">GUYS</span></b>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link service text-center mt-4 mb-4" href='/our-services'style={{color : "white"}}>
                            <h5>
                                <b>
                                        Services
                                </b>
                            </h5>
                        </a>
                    </li>
                    <li className="nav-item" onClick={handleOnPressLogout}>
                        <a className="nav-link service text-center mt-4 mb-4" href=''style={{color : "white"}}>
                            <h5>
                                <b>
                                    Logout
                                </b>
                            </h5>
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/Gallery"><h5><b>== Gallery ==</b></h5></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Reviews"><h5><b>== Reviews ==</b></h5></a>
                    </li> */}
                    <li className="nav-item ">
                        {/* <a className="nav-link contact" href='/contact-us' style={{color : "white"}}>
                            <h5>
                                <b>
                                    Contact Us
                                </b>
                            </h5>
                        </a> */}
                    </li>
                </ul>
                {/* </div> */}
                </nav>
            {/* </div> */}
        </React.Fragment>
    );
}
            

export default NavBar;