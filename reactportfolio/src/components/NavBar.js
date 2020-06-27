import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';

function NavBar() {
        return (
            <Container className="nav-container">
                <Navbar fixed="top" bg="dark" expand="lg">
                    <Navbar.Brand href="/">Austin Pigg</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/About.js">About-Me</Nav.Link>
                            <Nav.Link href="/Portfolio.js">Portfolio</Nav.Link>
                            <Nav.Link href="/Contact.js">Contact-Info</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
};

export default NavBar;