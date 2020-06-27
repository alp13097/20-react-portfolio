import React from 'react';
import Wrapper from '../components/wrapper.js';
import NavBar from '../components/nav.js';
import RowOne from '../components/portfolio1';
import RowTwo from '../components/portfolio2';
import '../App.js';

function PortfolioP() {
    return (
        <Wrapper>
            <NavBar />
            <RowOne />
            <RowTwo />
        </Wrapper>
    );
}

export default PortfolioP;