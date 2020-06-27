import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import '../App.css';

class NavBar extends Component {
    render() {
        return (
            <Container className="nav-container">
                <Navbar fixed="top" bg="dark" expand="lg">
                    <Navbar.Brand href="/">Austin Pigg</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="../pages/About.js">About-Me</Nav.Link>
                            <Nav.Link href="../pages/Portfolio.js">Portfolio</Nav.Link>
                            <Nav.Link href="../pages/Contact.js">Contact-Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
};

export default NavBar;