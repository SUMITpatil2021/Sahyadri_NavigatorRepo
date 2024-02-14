// import { Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import  Footer from './Footer';
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
                <div className="col">
                            <ul className="nav navbar">
                                <li>
                                    <Navbar variant="primary" bg="transparent" expand="lg">
                                        <Container fluid>
                                            <Nav>
                                                <NavDropdown
                                                    id="nav-dropdown-primary-example"
                                                    title={<span style={{ color: 'white' }}>View Users</span>}
                                                    menuVariant="light"
                                                >
                                                    <NavDropdown.Item  onClick={()=>{Navigate('/Trekkerlist')}}>Trekker</NavDropdown.Item>
                                                    <NavDropdown.Item   onClick={()=>{Navigate('/Trekkingclublist')}}>Trekking Club</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        </Container>
                                    </Navbar>
                                </li>
                               <li>
                               <Navbar variant="primary" bg="transparent" expand="lg">
                                        <Container fluid>
                                            <Nav>
                                                <NavDropdown
                                                    id="nav-dropdown-primary-example"
                                                    title={<span style={{ color: 'white' }}>Trekker Management</span>}
                                                    menuVariant="light"
                                                >
                                                    <NavDropdown.Item   onClick={()=>{Navigate('/Trekkerlist')}}>View Trekkers</NavDropdown.Item>
                                                    <NavDropdown.Item  onClick={()=>{Navigate('/EditTrekker')}}>Edit</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Delete</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        </Container>
                                    </Navbar>
                               </li>


                               <li>
                               <Navbar variant="primary" bg="transparent" expand="lg">
                                        <Container fluid>
                                            <Nav>
                                                <NavDropdown
                                                    id="nav-dropdown-primary-example"
                                                    title={<span style={{ color: 'white' }}>Trekking club Management</span>}
                                                    menuVariant="light"
                                                >
                                                    <NavDropdown.Item onClick={()=>{Navigate('/Trekkingclublist')}}>View Trekking Club</NavDropdown.Item>
                                                    <NavDropdown.Item onClick={()=>{Navigate('/EditTrekkingClub')}}>Edit</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Delete</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        </Container>
                                    </Navbar>
                               </li>

                               <li>
                               <Navbar variant="primary" bg="transparent" expand="lg" >
                                        <Container fluid>
                                            <Nav>
                                                <NavDropdown
                                                    id="nav-dropdown-primary-example"
                                                    title= {<span style={{ color: 'white' }}>Payment Status</span>} 
                                                    menuVariant="light"
                                                >
                                                    <NavDropdown.Item href="#action/3.1">Trekker</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Trekking Club</NavDropdown.Item>
                                                </NavDropdown>
                                            </Nav>
                                        </Container>
                                    </Navbar>
                               </li>
                            </ul>
                        </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

            
            <Footer/>

          
        </div>
    )
}