import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import '../css/style.css';
function NavTop() {
  return (
    <div>
      <Router>

        {/* <MDBNavbar fixed="top" dark expand="md">
            <MDBContainer> */}
        {/* <MDBNavbarBrand href="/">
                <strong>Navbar</strong>
              </MDBNavbarBrand> */}
        {/* <MDBNavbarToggler onClick={this.onClick} /> */}
        {/* <MDBCollapse isOpen={this.state.collapse} navbar> */}

        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="AboutUs">ABOUT US</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">HOW IT WORKS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">CASE STUDIES</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">NEWS</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">CONTACT</MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
        {/* </MDBCollapse> */}
        {/* </MDBContainer>
           </MDBNavbar>  */}



      </Router>

    </div>);
}

export default NavTop;

