import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import {  Navigate, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate();
  const handleSignInClick = () => {
    navigate('/UserLogin');
  };
    return (
    <div>
      <header >
        <div>
          <Navbar bg="dark" variant="dark" expand="lg"  >
            <Container>
              <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/aboutus">About Us</Nav.Link>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                  <Nav.Link  onClick={handleSignInClick}>  <i className='fas fa-user'></i> Sign In</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </div>
  )
}