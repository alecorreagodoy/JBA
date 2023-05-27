import React from 'react';
import { Nav } from 'react-bootstrap';



function Links() {
    return (
        <Nav>
            <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/aboutme">About Me</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/works"> Works</a>
            </li>
        </Nav>
    )
}




export default Links;