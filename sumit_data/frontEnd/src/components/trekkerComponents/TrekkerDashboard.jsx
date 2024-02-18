
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

import { useNavigate } from 'react-router-dom';
import ViewMyTrekk from './ViewMyTrekk';
import Enquiry from './Email';
import ViewEditTrekker from './ViewEditTrekker';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import TrekkerImg from './trekkerImg';

export default function TrekkerDashboard() {
   const Navigate = useNavigate();
    const[selectedLink, setSelectedLink] = useState("trekimg");

    const handleLinkClick = (link)=>{
        setSelectedLink(link);
       // Navigate(`/${link}`)
    };

    useEffect(()=>{
        setSelectedLink('trekimg')
    },[]);

    const renderComponent = ()=>{
        switch(selectedLink){
            case "trekimg":
            return <TrekkerImg/>
            case "ViewMyTrekk":
                return <ViewMyTrekk/>
            case "Enquiry": 
              return <Enquiry/>
            case "ViewEditTrekker":
                return <ViewEditTrekker/>
            default:
              return null;
        }
    }
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg"  >
                <Container>
                    <Navbar.Brand >Sahyadri Navigator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                        <Nav.Link  onClick={()=>{handleLinkClick('ViewMyTrekk')}}>My Trekks</Nav.Link>
                        <Nav.Link  onClick={()=>{handleLinkClick('Enquiry')}}>Enquiry</Nav.Link>
                        <Nav.Link href="#" style={{color:"white"}} disabled > {""}  Hello! {localStorage.getItem("myData")}  <span>&#128512;</span>
 </Nav.Link> 

                        </Nav>
                        </Navbar.Collapse>
                  
                            <Navbar variant="primary" bg="transpernt" expand="lg" >
                                <Container fluid>
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-primary-example"
                                            title={<span style={{ color: 'white' }}> <i class='fas fa-user'></i>  My Profile</span>}
                                            menuVariant="light">
                                            <NavDropdown.Item onClick={()=>{handleLinkClick('ViewEditTrekker')}}>Your profile</NavDropdown.Item>
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
        <Footer/>
        </div>
    )
}