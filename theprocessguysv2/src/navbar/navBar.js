import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
// import ContactPage from '../pages/contactus2';
import OurServices from '../pages/OurServices';
// import img from "./Pictures/The-Process-Guys-word-logo.png";

class NavBar extends React.Component {
    render() {
        return(
            <React.Fragment><br/><br/><br/>
                    <nav className="nav-bar w-100">
                    <div className="navbar-nav">
                        <a className="navbar-brand left justify-content-center move-name" href="/"><b><span className="white1">THE</span> <span className="gold">PROCESS</span> <span className="white2">GUYS</span></b></a>
                            <div className="rightSide">
                                <a className="nav-link service text-center mt-4 mb-4" href='/our-services'style={{color : "white"}}><h5><b>Services</b></h5></a>
                                <a className="nav-link register text-center mt-4 mb-4" href="/register" style={{color : "white"}}><h5><b>Sign Up</b></h5></a>
                                <a className="nav-link login text-center mt-4 mb-4" href="/login" style={{color : "white"}}><h5><b>Log In</b></h5></a>
                            </div>
                    </div>
                    </nav>
                <Router>
                    {/* <Route exact path='/' component={TheProcessGuys} />
                    <Route path='/contact-us' component={ContactUs} />
                    <Route path='/update-profile' component={UpdateProfile} />
                    <Route path='/member-dashboard' component={DashboardMembers} /> */}
                    {/* <Route path='/contact-us' component={ContactPage} /> */}
                    <Route path='/our-services' component={OurServices} />
                    {/* <Route path='/ScheduleAppointment' component={RegistrationPage} /> */}
                </Router>
            </React.Fragment>
    );}
}
            

export default NavBar;