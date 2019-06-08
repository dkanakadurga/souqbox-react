import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand,MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
function NavAuth() {
    return (
        <div>
            <Router>
        
                <MDBNavbarNav right>
                  <MDBNavItem active>
                    <MDBNavLink to="#">SIGN UP</MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink to="#">LOGIN</MDBNavLink>
                  </MDBNavItem>
               </MDBNavbarNav>
        


</Router>

        </div>);
}

export default NavAuth;
