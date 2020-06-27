import React from 'react';
import NavBar from '../components/nav.js';
import Contact from '../components/contact.js';
import MyInfo from '../components/contactinfo.js';
import '../App.css';

function ContactP() {
    return (
        <Wrapper>
            <NavBar />
            <Contact />
            <MyInfo />
        </Wrapper>
    );
}

export default ContactP;