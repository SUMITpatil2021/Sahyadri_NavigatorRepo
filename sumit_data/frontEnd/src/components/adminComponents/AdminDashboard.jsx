// import { Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import { useEffect, useState } from 'react';
import Trekkingclublist from './Trekkingclublist';
import Trekkerlist from './Trekkerlist';
// import HomePage from '../components/HomePage';

 
export default function AdminDashboard() {
  const Navigate = useNavigate();
  const[selectedLink, setSelectedLink] = useState("");
  const handleLinkClick = (link)=>{
      setSelectedLink(link);
     // Navigate(`/${link}`)
  };
  useEffect(()=>{
      setSelectedLink('')
  },[]);

  const renderComponent = ()=>{
      switch(selectedLink){
          case "Trekkerlist": 
            return <Trekkerlist/>
          case "Trekkingclublist":
              return <Trekkingclublist/>
          default:
            return null;
      }
  }
    return (
        <div>
            <div>
          <Navbar bg="dark" variant="dark" expand="lg"  >
            <Container>
              <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('Trekkerlist')}}>Trekker Management</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('Trekkingclublist')}}>TrekkingClub Management</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar>
                <Container>
                <Nav.Link style={{color:"white"}} onClick={() => Navigate('/')}>Logout</Nav.Link>

                </Container>
              </Navbar>
            </Container>
          </Navbar>
          <div>
            {renderComponent()}
        </div>
        </div>
            <Footer/>
        </div>
    )
}