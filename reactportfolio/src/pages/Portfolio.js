import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../App.js';

function Portfolio() {
    return (
        <Container>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="../../assets/StaTTrack-ss.png" />
                    <Card.Body>
                        <Card.Title>StaTTrack</Card.Title>
                        <Card.Text>
                        StaTTrack is intended for users who want to check on video game tournament information and statistics as well as information about certain video games.
                        </Card.Text>
                        <Card.Link href="https://github.com/Jerry-Seinfeld/StaTTrack" target="_blank">GitHub Repo</Card.Link>
                        <Card.Link href="https://jerry-seinfeld.github.io/StaTTrack/" target="_blank">Deployed Application</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../../assets/Quaran-Tunez-ss.png" />
                    <Card.Body>
                        <Card.Title>Quaran-tunes</Card.Title>
                        <Card.Text>
                        This app takes user input to create a quarantine playlist using the Spotify API.
                        </Card.Text>
                        <Card.Link href="https://github.com/Rtaylo16/Project-2-" target="_blank">GitHub Repo</Card.Link>
                        <Card.Link href="https://ancient-cove-67868.herokuapp.com/" target="_blank">Deployed Application</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../../assets/RMGenerator.png" />
                    <Card.Body>
                        <Card.Title>ReadMe Generator</Card.Title>
                        <Card.Text>
                        This app helps users save time creating a README.md file for their apps and websites based on the input they give to the given pompts.
                        </Card.Text>
                        <Card.Link href="https://github.com/alp13097/09-RM-Generator" target="_blank">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>


            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="../../assets/Password-Generator-ss.png" />
                    <Card.Body>
                        <Card.Title>Password Generator</Card.Title>
                        <Card.Text>
                        This app is used to create a randomly generated password between 8-128 characters using whatever characters the user selects from the alert prompts.
                        </Card.Text>
                        <Card.Link href="https://github.com/alp13097/HW-03" target="_blank">GitHub Repo</Card.Link>
                        <Card.Link href="https://alp13097.github.io/HW-03/" target="_blank">Deployed Application</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../../assets/EatDaBurger-ss.png" />
                    <Card.Body>
                        <Card.Title>Eat-Da-Burger!</Card.Title>
                        <Card.Text>
                        This is intended to be just a fun little app where you can add different kinds of burgers and then choose to change them between "Not Yet Devoured" and "Already Devoured!" columns using the red buttons.
                        </Card.Text>
                        <Card.Link href="https://github.com/alp13097/13-NEH" target="_blank">GitHub Repo</Card.Link>
                        <Card.Link href="https://aqueous-beach-11131.herokuapp.com/" target="_blank">Deployed Application</Card.Link>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../../assets/EmpSumSS.png" />
                    <Card.Body>
                        <Card.Title>Team Profile Generator</Card.Title>
                        <Card.Text>
                        This app creates a team profile based on node prompts.
                        </Card.Text>
                        <Card.Link href="https://github.com/alp13097/10-EmployeeSummary" target="_blank">GitHub Repo</Card.Link>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>
    );
}

export default Portfolio;