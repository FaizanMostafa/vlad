import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends React.Component {
  render() {
    return (
      <MDBFooter color="grey" className="page-footer font-small pt-0 mt-0 footer">
        <div className="footer-copyright text-center py-2" color='peach-gradient'>
          <MDBContainer fluid>
            &copy; 2021-{new Date().getFullYear()} Copyright: The Process Guys 2021
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;