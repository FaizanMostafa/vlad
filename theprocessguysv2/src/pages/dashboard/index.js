import { Link, Switch, Route, Redirect, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Members from "./Members";
import MemberDetails from "./MemberDetails";
import CaseDetails from "./CaseDetails";
import Cases from "./Cases";
import NotFound404 from "../NotFound404";
import Notifications from "./Notifications";
import BulletinUpdate from "./BulletinUpdate";
import { logout } from '../../redux/actions/auth';
import TOSAgreements from './TOSAgreements';
import UpdateProfile from './UpdateProfile';
import TPGLogo from "../../pictures/TPG_icon.webp";

const AdminDashboard = (props) => {
  let { path, url } = useRouteMatch();
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleOnClickUpdate = () => {
    props.history.push(`${url}/update-profile`);
  }

  const handleOnClickLogout = () => {
    dispatch(logout(()=>props.history.push("/")));
  }

  return (
    <div style={{minHeight: "100vh", minWidth: "100vw", boxSizing: "border-box"}}>
      <div style={{display: "flex", width: "100vw", paddingRight: 75, paddingLeft: 50, backgroundColor: "#211545", justifyContent: "space-between",alignItems: "center"}}>
        <div style={{display: "flex", alignItems: "center"}}>
          <img style={{width: 100, objectFit: "contain"}} alt="tpg logo" src={TPGLogo} />
          <h3>The Process Guys Admin Panel</h3>
        </div>
        <div style={{display: "flex", zIndex: 100000, alignItems: "center", justifyContent: "space-between"}}>
          <div style={{marginRight: 25, display: "flex", flexDirection: "column", alignItems: "flex-end"}}>
            <span style={{fontSize: 20}}>{user.firstName} {user.lastName}</span>
            <span style={{fontSize: 16}}>{user.email}</span>
          </div>
          <DropdownMenu
            trigger={<img style={{width: 60, height: 60, cursor: 'pointer', borderRadius: 30}} src={user.profilePictureURI} />}
          >
            <DropdownItemGroup>
              <DropdownItem style={{width: 100}} onMouseDown={handleOnClickUpdate}>Update</DropdownItem>
              <DropdownItem onMouseDown={handleOnClickLogout}>Logout</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </div>
      </div>
      <div style={{display: "flex"}}>
        <div style={{minHeight: "87vh", width: "20vw", backgroundColor: "#211545"}}>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("members") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/members`}>Members Archive</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("cases") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/cases`}>Case Archive</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("notifications") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/notifications`}>Notifications</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("bulletin-update") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/bulletin-update`}>Bulletin Update</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("terms-of-service") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/terms-of-service`}>Terms Of Service</Link>
        </div>
        <div style={{boxSizing: "border-box", width: "100%", height: "100%", padding: 20, zIndex: 0}}>
          <Switch>
            <Redirect exact from={`${path}/`} to={`${path}/members`} />
            <Route exact path={`${path}/members`} component={Members} />
            <Route exact path={`${path}/members/:userId`} component={MemberDetails} />
            <Route exact path={`${path}/cases`} component={Cases} />
            <Route exact path={`${path}/cases/:caseId`} component={CaseDetails} />
            <Route path={`${path}/notifications`} component={Notifications} />
            <Route path={`${path}/bulletin-update`} component={BulletinUpdate} />
            <Route path={`${path}/terms-of-service`} component={TOSAgreements} />
            <Route path={`${path}/update-profile`} component={UpdateProfile} />
            <Route path='*' component={NotFound404} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;