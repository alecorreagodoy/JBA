import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Titulo from '../components/titulo';
import Body from "../Pages/Body";
import Aboutme from "../Pages/aboutme";
import Works from "../Pages/Works";
import Contact from "../Pages/contact";



function Router() {

    return (

        <BrowserRouter>

            <Titulo />

            <Routes>
                <Route path='/' element={<Body />} />
                <Route path='/aboutme' element={<Aboutme />} />
                <Route path='/works' element={<Works />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>


        </BrowserRouter>
    )
}

export default Router;