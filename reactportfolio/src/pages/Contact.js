import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

function Contact() {
    return (
        <Container>
            <Form>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" placeholder="John Doe" />
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="textArea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="4" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>


            <ListGroup>
                <ListGroup.Item>
                    <h3 className="list-group-item list-group-item-dark">My Contact Information</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Name: </strong> Austin Pigg</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Email: </strong> austin_pigg@yahoo.com</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Phone Number: </strong> 704-754-7666</h6>
                </ListGroup.Item>
            </ListGroup>
        </Container>
    );
}

export default Contact;