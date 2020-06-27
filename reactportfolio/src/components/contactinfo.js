import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import '../App.css';

class MyInfo extends Component {
    render() {
        return (
            <ListGroup>
                <ListGroup.Item>
                    <h3 className="list-group-item list-group-item-dark">My Contact Information</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Name: </strong> Austin Pigg</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Email: </strong> austin_pigg@yahoo.com</h6>
                </ListGroup.Item>
                <ListGroup.Item>
                    <h6 className="list-group-item list-group-item-dark"><strong>Phone Number: </strong> 704-754-7666</h6>
                </ListGroup.Item>
            </ListGroup>
        );
    }
};

export default MyInfo;