import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import '../App.css';

class Contact extends Component {
    render() {
        return (
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
        );
    }
};

export default Contact;