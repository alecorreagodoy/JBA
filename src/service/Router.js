import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



function Router() {

    return (
        <BrowserRouter>
            <header>
                <Navbarr />
                <Link to="/" >Home</Link>
                <nav>
                    <Link to="/about"></Link>
                    <Link to="/works"></Link>
                </nav>
            </header>
            <Routes>
                <Route path='/' element={<Body />} />
                <Route exact path='/aboutme' element={<Aboutme />} />
                <Route exact path='/works' element={<Works />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;