import React from 'react';
import { Nav } from 'reactstrap';






function Links() {
    return (
        <Nav>

            <li class="nav-item">
                <a class="nav-link active" href="/">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/aboutme">About Me</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/works"> Works</a>
            </li>


        </Nav>
    )
}




export default Links;