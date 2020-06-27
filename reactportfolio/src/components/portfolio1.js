import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import '../App.css';

class RowOne extends Component {
    render() {
        return (
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
        );
    }
};

export default RowOne;