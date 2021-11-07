import { Link, Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DropdownMenu, { DropdownItem, DropdownItemGroup } from '@atlaskit/dropdown-menu';
import Members from "./Members";
import MemberDetails from "./MemberDetails";
import Cases from "./Cases";
import NotFound404 from "../NotFound404";
import Notifications from "./Notifications";
import BulletinUpdate from "./BulletinUpdate";
import { logout } from '../../redux/actions/auth';
import TOSAgreement from './TOSAgreement';
import UpdateProfile from './UpdateProfile';

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
    <div style={{minHeight: "100vh", minWidth: "100vw", boxSizing: "border-box", display: "flex"}}>
      <div style={{minHeight: "100vh", width: "20vw", backgroundColor: "#211545"}}>
        <div style={{display: "flex", flexWrap: "wrap", zIndex: 100000, padding: "20px 17px", alignItems: "center", justifyContent: "space-between"}}>
          <div>
            <span style={{fontWeight: "bold", fontSize: 20}}>{user.firstName} {user.lastName}</span><br/>
            <span style={{fontWeight: "bold", fontSize: 14}}>{user.email}{user.email}</span>
          </div>
          <DropdownMenu
            trigger={<img style={{width: 40, height: 40, cursor: 'pointer', borderRadius: 20}} src={user.profilePictureURI} />}
          >
            <DropdownItemGroup>
              <DropdownItem onMouseDown={handleOnClickUpdate}>Update</DropdownItem>
              <DropdownItem onMouseDown={handleOnClickLogout}>Logout</DropdownItem>
            </DropdownItemGroup>
          </DropdownMenu>
        </div>
        <div>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("members") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/members`}>Members Archive</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("cases") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/cases`}>Case Archive</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("notifications") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/notifications`}>Notifications</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("bulletin-update") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/bulletin-update`}>Bulletin Update</Link>
          <Link className="text-white sub-menu" style={{margin: 0, backgroundColor: location.pathname.includes("terms-of-service") && "darkslateblue", padding: "8px 10px 8px 25px", width: "100%"}} to={`${url}/terms-of-service`}>Terms Of Service</Link>
        </div>
      </div>
      <div style={{boxSizing: "border-box", width: "100%", height: "100%", padding: 20, marginBottom: 35, zIndex: 0}}>
        <Switch>
          <Route exact path={`${path}/members`} component={Members} />
          <Route exact path={`${path}/members/:userId`} component={MemberDetails} />
          <Route path={`${path}/cases`} component={Cases} />
          <Route path={`${path}/notifications`} component={Notifications} />
          <Route path={`${path}/bulletin-update`} component={BulletinUpdate} />
          <Route path={`${path}/terms-of-service`} component={TOSAgreement} />
          <Route path={`${path}/update-profile`} component={UpdateProfile} />
          <Route path='*' component={NotFound404} />
        </Switch>
      </div>
    </div>
  );
}

export default AdminDashboard;