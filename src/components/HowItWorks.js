import React, {Component} from 'react';
import bgImg from '../images/bgImg.jpg';
import Header from './Header';
import {MDBView} from 'mdbreact';
class HowItWorks extends React.Component {
    constructor(props) {
      super(props);
      }

 render() {
    return(

        <div>
            <MDBView src =  {bgImg}>
           <Header/>
           </MDBView>
        </div>);
};
}

export default HowItWorks;