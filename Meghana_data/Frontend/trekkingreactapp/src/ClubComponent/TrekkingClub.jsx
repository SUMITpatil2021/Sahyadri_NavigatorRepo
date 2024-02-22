import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Nav } from 'react-bootstrap';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../component2/Footer';
import AddTrekk from './AddTrekk';
import ViewEditProfile from './ViewEditProfile';
import ListEmails from './ListEmails';
import Trekkhistory from './trekkhistory';
import ClubImg from './frontimg';

function TrekkingClub() {
  const Navigate = useNavigate();
    const[selectedLink, setSelectedLink] = useState("clubimg");

    const handleLinkClick = (link)=>{
        setSelectedLink(link);
       // Navigate(`/${link}`)
    };

    const onlogoutclick = (()=>{
      localStorage.clear();
      Navigate('/');
    });

    useEffect(()=>{
        setSelectedLink('clubimg')
    },[]);

    const renderComponent = ()=>{
        switch(selectedLink){
            case "clubimg":
                return <ClubImg/>
            case "ViewEditProfile":
                return <ViewEditProfile/>
            case "ListEmails":
                return <ListEmails/>
            case "AddTrekk":
                return <AddTrekk/>
            case "TrekkHistory":
                  return <Trekkhistory/>
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
              <Navbar.Brand onClick={()=>{handleLinkClick('clubimg')}}>Sahyadri Navigator</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link  onClick={()=>{handleLinkClick('AddTrekk')}}>Add Trekk</Nav.Link>
                  <Nav.Link  onClick={()=>{handleLinkClick('TrekkHistory')}}> Trekk History</Nav.Link>
                  <Nav.Link onClick={()=>{handleLinkClick('ListEmails')}}>List Emails</Nav.Link>
                  <Nav.Link href="#" style={{color:"white"}} disabled > {""}  Hello! {localStorage.getItem("myData")} <span>&#128512;</span> </Nav.Link>
                </Nav>
              </Navbar.Collapse>
              <Navbar variant="primary" bg="transpernt" expand="lg" >
                <Container fluid>
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-primary-example"
                      title={<span style={{ color: 'white' }}><i class='fas fa-user'></i>My Profile</span>}
                      menuVariant="light"
                    >
                      <NavDropdown.Item onClick={()=>{handleLinkClick('ViewEditProfile')}}>Your profile</NavDropdown.Item>
                      <NavDropdown.Item onClick={()=>{onlogoutclick()}}>Logout</NavDropdown.Item>
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