import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import logo from "../assets/logo.png";

function NavigationBar (){
    return(
        <>
        {['md'].map((expand) => (
            <Navbar key={expand} variant="dark" expand={expand} className="mb-3 bg-darkness" fixed="top" >
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-around align-items-center flex-grow-1 pe-3">
                      <a href="#service" className='navs p-2'>Exchange</a>
                      <a href="#workflow" className='navs p-2'>Product</a>
                      <a href="#portfolio" className='navs p-2'>Service</a>
                      <a href="#home">
                        <img src={logo} alt="StarWorks" width="120"/>
                      </a>
                      <a href="#about" className='navs p-2'>Login</a>
                      <a href="#value" className='navs1 px-3 rounded'>Register</a>
                      <a href="" className='navs p-2'>Support</a>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
        </>
    );
}

export default NavigationBar;