import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import '../App.css';

class MyPic extends Component {
    render() {
        return (
            <Image src="../../assets/me.png" fluid />
        );
    }
};

export default MyPic;