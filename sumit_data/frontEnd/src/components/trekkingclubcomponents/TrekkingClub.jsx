import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav } from 'react-bootstrap';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AddTrekk from './AddTrekk';
import ListEmails from './ListEmails';
import Footer from '../Footer';
import ViewEditProfile from './ViewEditProfileClub';


function TrekkingClub() {
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
            case "ViewEditProfile":
                return <ViewEditProfile/>
            case "ListEmails":
                return <ListEmails/>
            case "AddTrekk":
                return <AddTrekk/>
            default:
              return null;
        }
    }

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg"  >
        <Container>
              <Navbar.Brand >Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('AddTrekk')}}>Add Trekk</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('ListEmails')}}>List Emails</Nav.Link>
                  <Nav.Link href="#" style={{color:"white"}} disabled > {""}  Hello! {localStorage.getItem("myData")} <span>&#128512;</span> </Nav.Link> 
                </Nav>
               
              </Navbar.Collapse>
              <Navbar variant="primary" bg="transpernt" expand="lg" >
                <Container fluid>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-primary-example"
                      title={<span style={{ color: 'white' }}> <i class='fas fa-user'></i>  My Profile</span>}
                      menuVariant="light"
                    >
                      <NavDropdown.Item onClick={()=>{handleLinkClick('ViewEditProfile')}}>Your profile</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>{Navigate('/')}}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Container>
              </Navbar>
            </Container>
      </Navbar>

      <div>
            {renderComponent()}
        </div>
      <Footer />
    </>
  );
}

export default TrekkingClub;