// import { Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Footer from '../Footer';
import { Link, Navigate, useNavigate } from 'react-router-dom';



 
export default function AdminDashboard() {
    let Navigate=new useNavigate();
    return (


        <div>
            <div>
          <Navbar bg="dark" variant="dark" expand="lg"  >
            <Container>
              <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Link href="/Trekkerlist">Trekker Management</Nav.Link>
                  <Nav.Link href="/Trekkingclublist">TrekkingClub Management </Nav.Link>
                </Nav>
                
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

            
            <Footer/>

          
        </div>
    )
}