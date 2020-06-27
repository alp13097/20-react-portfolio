import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import NavBar from './components/NavBar'
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Wrapper from "./components/wrapper";
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <NavBar />
                <Wrapper>
                    <Route exact path="/" component={About} />
                    <Route exact path="/About.js" component={About} />
                    <Route exact path="/Portfolio.js" component={Portfolio} />
                    <Route exact path="/Contact.js" component={Contact} />
                </Wrapper>
            </div>
        </Router>
    );
}

export default App;