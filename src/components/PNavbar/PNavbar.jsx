import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { env } from '../../env.js';
import './PNavbar.scss';
import lablogo from '../../assets/lab_logo_red.png';
import usulogo from '../../assets/usulogo2.png';
import plogo from '../../assets/pyseqrna.png';
import {Divider} from 'antd';
import "antd/dist/antd.min.css";
class PNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active
    };
    console.log(this.props.active);

    this.activeLink = this.activeLink.bind(this);
  }

  activeLink(link) {
    console.log(link)
    console.log(this.props.active)
    if (link === this.props.active) {
      return true;
    }

    return false;
  }

    render() {console.log(this.props.active)
        let className = 'mx-1'
        let active = 'mx-1 current'
return(
  <div className="container">
  <div className="row flex-lg-row align-items-center g-2 mt-2">

    <div className="col-md-2">
      <img src={lablogo} height={50} alt=''></img>
    </div>
    <div className="col-md-2">
      <img src={plogo} height={60} alt=''></img>
    </div>
    <div className=" col-md-6 mt-2 nav-wrapper mx-auto">
        <Navbar className="justify-content-center">
        

          <Nav className="">
            <Nav.Link href= {`${env.BASE_URL}/`} className={'home' === this.props.active ? active : className}>
              Home
            </Nav.Link>
            <Nav.Link href= {`${env.BASE_URL}/tutorial`} className={'tutorial' === this.props.active ? active : className}>
              Tutorial
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/documentation`} className={'documentation' === this.props.active ? active : className}>
              Documentation
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/download`} className={'download' === this.props.active ? active : className}>
              Download
            </Nav.Link>
            <Nav.Link href={`${env.BASE_URL}/contact`} className={'contact' === this.props.active ? active : className}>
              Contact
            </Nav.Link>
          </Nav>

        </Navbar>
      </div>
      <div className="col-md-2">
      <img src={usulogo} height={50} alt=''></img>
    </div>
    </div>
    <Divider/>
      </div>

)

    }
}

export {PNavbar};