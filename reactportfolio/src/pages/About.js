import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Me from '../assets/me.png'
import '../App.css';

function About() {
    return (
        <div className="BackG">
            <br />
            <br />
            <br />
            <Container>
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
                <Image src={Me} alt='me' />
            </Container>
            <br />
            <br />
            <br />
        </div>
    );
}

export default About;