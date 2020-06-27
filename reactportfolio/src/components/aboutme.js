import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import '../App.css';

class AboutMe extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                    Hey! My name is Austin Pigg and i'm studying to be a web developer. So far it isn't easy but I'm picking it up as time progresses.
                    </Card.Text>
                    <Card.Text>
                    I Like to go to the gym or hangout with friends. I currently work at Carolina Springs Auto Spa in Cornelius, NC.
                    </Card.Text>
                    <Card.Link href="https://github.com/alp13097" target="_blank">GitHub</Card.Link>
                    <Card.Link href="https://linkedin.com/in/austin-pigg-177476182" target="_blank">LinkedIn</Card.Link>
                    <Card.Link href="" target="_blank">Resume</Card.Link>
                </Card.Body>
            </Card>
        );
    }
};

export default AboutMe;