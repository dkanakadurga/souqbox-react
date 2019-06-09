import React from 'react';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Logo from './Logo';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand, MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class NavTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: this.props.collapse,
      isWideEnough: this.props.isWideEnough,
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

 render() {
  return (
    <div>

        <MDBNavbar fixed="top" dark expand="md">
          
        <MDBContainer>

        <MDBNavbarBrand>
        <Logo />
      </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.onClick} />
        <MDBCollapse isOpen={this.state.collapse} navbar> 

        <MDBNavbarNav left>
          <MDBNavItem active>
            <MDBNavLink to="/AboutUs" component = {AboutUs}>ABOUT US</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/HowItWorks" component = {HowItWorks}>HOW IT WORKS</MDBNavLink>
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
    
        <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavLink  to="#">SIGNUP </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="#">LOGIN</MDBNavLink>
          </MDBNavItem>
         
        </MDBNavbarNav>
       </MDBCollapse> 
       </MDBContainer>
        
           </MDBNavbar> 


    </div>);
}
}
export default NavTop;

