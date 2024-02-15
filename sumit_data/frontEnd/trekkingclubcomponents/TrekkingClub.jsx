import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav } from 'react-bootstrap';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
// import Footer from '../component2/Footer';

function TrekkingClub() {
  let Navigate = useNavigate();

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg"  >
        <Container>
          <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Navbar variant="primary" bg="transpernt" expand="lg">
                <Container fluid>
                  <Nav>
                    <Nav.Link href="/addtrekk"><span style={{ color: 'white' }}>Add Trekk </span> </Nav.Link>
                    <Nav.Link href="/Trekkingclublist"><span style={{ color: 'white' }}>List Emails</span> </Nav.Link>
                    <Nav.Link href="/Trekkerlist"><span style={{ color: 'white' }}>Feedback </span> </Nav.Link>

                  </Nav>
                </Container>
              </Navbar>

             
              <Navbar variant="primary" bg="transpernt" expand="lg" >
                <Container fluid>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-primary-example"
                      title={<span style={{ color: 'white' }}>My Profile</span>}
                      menuVariant="light"
                    >
                      <NavDropdown.Item onClick={() => { Navigate('/ViewProfile') }}>Your profile</NavDropdown.Item>
                      <NavDropdown.Item href="/EditTrekker">Edit profile</NavDropdown.Item>
                      <NavDropdown.Item href="/">Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Container>
              </Navbar>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Footer />
    </>
  );
}

export default TrekkingClub;