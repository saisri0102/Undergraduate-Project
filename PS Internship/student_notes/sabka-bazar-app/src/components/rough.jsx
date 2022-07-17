import React from 'react';
import offer1 from '../images/offers/offer1.jpg'
import offer2 from '../images/offers/offer2.jpg'
import offer3 from '../images/offers/offer3.jpg'
import offer4 from '../images/offers/offer4.jpg'
import offer5 from '../images/offers/offer5.jpg'
import {NavLink} from 'react-router-dom'
import logo from '../images/logo.png'
import cartlogo from '../images/cart.svg'
// import 'bootstrap/js/src/carousel'

import Carousel from 'react-bootstrap/Carousel'
import {Navbar , Container} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import 'react-bootstrap/Carousel'
import '@fortawesome/fontawesome-free'

function NavEl(props){

  const navStyle = {
    display:"flex",
    color:"black"
  }

  const {className, children} = props
  return (
     <ul className = {className} style = {navStyle} >{children}</ul>
  )
}
function rough(props) {
  return (

    <React.Fragment>
      <Container >
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home"><img src={logo} alt="sabka bazar" /></Navbar.Brand>
          <NavEl className="mr-auto align-self-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </NavEl>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          
        </Navbar>
  </Container>

    </React.Fragment>
  );
}

export default rough;