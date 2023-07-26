import React from "react";
import Titulo from './components/titulo';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contact from "./Pages/contact";
import Navbarr from "./components/navbar";
import { Helmet } from "react-helmet";


import "./App.css"



function App() {
  return (


    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Juan Ballarino</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Titulo />
      <BrowserRouter>

        <Navbarr />
        <hr color="black" />

        {/* <Link className="nav-link active" to="/">Home</Link>
        <Link className="nav-link active" to="/aboutme">About</Link>
        <Link className="nav-link active" to="/works">Work</Link>
        <Link className="nav-link active" to="/contact">contact</Link> */}



        <Routes>

          <Route path='/' element={<Body />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>


      </BrowserRouter>




      <div className="Footer">

        <Footer />
      </div>
    </div>
  );
}

export default App;
