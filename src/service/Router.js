import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

import Body from "../components/Body";
import Aboutme from "../components/aboutme";
import Works from "../components/Works";

function Router() {
    return (
        <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About me</Link>
            <Link to="/works">Works</Link>
            <Routes>
                <Route exact path='/' component={Body} />
                <Route exact path='/aboutme' component={Aboutme} />
                <Route exact path='/works' component={Works} />



            </Routes>
        </BrowserRouter>
    )
}

export default Router;