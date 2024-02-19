
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../component2/Footer';
import { useNavigate } from 'react-router-dom';
import TrekkDetailsList from '../components/TrekkDetailsList';


export default function TrekkerDashboard() {
   const Navigate = useNavigate();
    return (


        <div>


            <Navbar bg="dark" variant="dark" expand="lg"  >
                <Container>
                    <Navbar.Brand href="/">Sahyadri Navigator</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Navbar variant="primary" bg="transpernt" expand="lg">
                                <Container fluid>
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-primary-example"
                                            title={<span style={{ color: 'white' }}>My Trekks</span>}
                                            menuVariant="light"
                                        >
                                            <NavDropdown.Item href="#action/3.1">View My Trekks</NavDropdown.Item>

                                        </NavDropdown>
                                    </Nav>
                                </Container>
                            </Navbar>

                            <Navbar variant="primary" bg="transpernt" expand="lg">
                                <Container fluid>
                                    <Nav>
                                        <NavDropdown
                                            id="nav-dropdown-primary-example"
                                            title={<span style={{ color: 'white' }} onClick={()=>{Navigate('/Enquiry')}}>Enquiry</span>}
                                            menuVariant="light"
                                        >

                                            <NavDropdown.Item href="#action/3.1">Send Email</NavDropdown.Item>
                                        </NavDropdown>
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
                                            <NavDropdown.Item href="#">Your profile</NavDropdown.Item>
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


               <TrekkDetailsList/>

        
        <Footer/>
        </div>
    )
}