// Header.js
import React, { useState } from 'react';
import logo from "../assets/logo.png"
import person from "../assets/person-circle.svg"
import SignUpModal from './SignUpForm';
import jiralogo from "../assets/pngwing.com.png"
import { Button, Container, Form, Nav, NavDropdown, Navbar } from 'react-bootstrap';

const Header = () => {

  const [modalShow, setModalShow] = useState(false);

  const [showYourWork,setShowYourWork]= useState(false)
   
  return (
    <Navbar expand="lg" className="bg-body-secondary">
    <Container fluid>
      <Navbar.Brand href="#"><i class="bi bi-grid-3x3-gap" style={{ fontSize: '2rem',padding:"4px",margin:"4px" }}></i></Navbar.Brand>
      <img src= {jiralogo} alt="jiralogo" width="60" className='p-1 m-1'/>
      <h3>Jira Software</h3>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          
          <Nav.Link href="#action2"></Nav.Link>
          <NavDropdown title="YourWork" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Your Work</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Projects" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Your Work</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Filters" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="DashBoards" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Teams" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Apps" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="primary">Create</Button>
       
        </Nav>
        <Form className="d-flex align-items-center">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            style={{ maxHeight: '50px' }}
          />
         <i class="bi bi-bell-fill" style={{ fontSize: '2rem',padding:"4px",margin:"4px" }}></i>
         <i class="bi bi-question-circle-fill" style={{ fontSize: '2rem',padding:"4px",margin:"4px" }}></i>
         <i class="bi bi-gear-wide" style={{ fontSize: '2rem',padding:"4px",margin:"4px" }}></i>
         <i class="bi bi-person-circle" style={{ fontSize: '2rem',padding:"4px",margin:"4px" }}></i>
     
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;

/* {showYourWork && 
      (<div className='display-block position-static'><ul style={{ listStyleType: "none", }}>
            <li>Work 1</li>
            <li>Work 2</li>
            <li>Work 3</li>
            <li>Work 4</li>
          </ul></div>)} */
