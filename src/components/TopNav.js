import React, {Component} from 'react';
import Logo from './Logo';
import NavTop from './NavTop';
import NavAuth from './NavAuth';
import bgImg from '../images/bgImg.jpg';

import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBNavbar, MDBNavbarBrand,MDBBtn, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBView, MDBMask,MDBRow, MDBCol } from 'mdbreact';


class TopNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false,
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
        
          <MDBView src= {bgImg}>

  <header>
     <MDBRow>
        <MDBCol>
        <Logo/>
        </MDBCol>
     </MDBRow>
     <MDBNavbar fixed="top" dark expand="md">
            <MDBContainer>
             
              {/* <MDBNavbarToggler onClick={this.onClick} />
             <MDBCollapse isOpen={this.state.collapse} navbar> */}
                   <NavTop />
                   <NavAuth/>
              {/* </MDBCollapse> */}
            </MDBContainer>
        </MDBNavbar>

       
  </header>


            <MDBMask overlay="white" className="flex-center flex-column text-white text-center">
              <h2>Souqbox is building the new future
                   of B2B marketplaces online.
              </h2>
              <br/>
              <h2>Take 30 seconds to join revolution</h2>
              <br />
             
              <MDBBtn color="info">Create a marketplace now</MDBBtn>
            </MDBMask>

            
          </MDBView>
        

        <main>
          <MDBContainer className="text-center my-5">
            <p align="justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia  deserunt mollit anim id est laborum.</p>
          </MDBContainer>
        </main>
      </div>
    );
  }
}

export default TopNav;