import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

function NavigationBar (){
    return(
        <>
        {['md'].map((expand) => (
            <Navbar key={expand} bg="light" expand={expand} className="mb-3" fixed="top" >
              <Container fluid>
                <Navbar.Brand href="#">StarWORKS</Navbar.Brand>
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
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link href="#home" className='navs'>Home</Nav.Link>
                      <Nav.Link href="#service" className='navs'>Exchange</Nav.Link>
                      <Nav.Link href="#workflow" className='navs'>Product</Nav.Link>
                      <Nav.Link href="#portfolio" className='navs'>Service</Nav.Link>
                      <Nav.Link href="#about" className='navs'>Login</Nav.Link>
                      <Nav.Link href="#value" className='navs'>Register</Nav.Link>
                      <Nav.Link href="" className='navs'>Support</Nav.Link>
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