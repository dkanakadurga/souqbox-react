import React, {Component} from 'react';
import NavTop from './NavTop';
import NavAuth from './NavAuth';
import Logo from './Logo';


import { MDBNavbar, MDBNavbarBrand,MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer,MDBView, MDBMask, MDBRow, MDBCol } from 'mdbreact';


class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        collapse: this.props.collapse,
        isWideEnough: this.props.isWideEnough,
      };
   
    }

render() {
    return(
    <div>
     <header>
     <MDBRow>
        <MDBCol>
        <Logo/>
        </MDBCol>
     </MDBRow>
        <NavTop collapse ={false} isWideEnough={false}/>
        <NavAuth/>
      </header>

    </div>

    );
}

}

export default Header;