import React from 'react';
import NavBar from '../components/nav.js';
import AboutMe from '../components/aboutme.js';
import MyPic from '../components/pic.js';
import '../App.css';

function AboutP() {
    return (
        <Wrapper>
            <NavBar />
            <MyPic />
            <AboutMe />
        </Wrapper>
    );
}

export default AboutP;