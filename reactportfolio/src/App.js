import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from 'components/nav.js'
import AboutP from 'pages/About.js';
import PortfolioP from 'pages/Portfolio.js';
import ContactP from 'pages/Contact.js';
import Wrapper from 'components/wrapper.js';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Wrapper>
                    <Route exact path="/" component={AboutP} />
                    <Route exact path="/about" component={AboutP} />
                    <Route exact path="/portfolio" component={PortfolioP} />
                    <Route exact path="/contact" component={ContactP} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;