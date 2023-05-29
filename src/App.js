import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";

import Header from "./components/header";
import Footer from "./components/Footer";

import { Auth } from "./components/auth";
import "./App.css"

function App() {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />

        <Link to="/" >Home</Link>
        <nav>
          <Link to="/aboutme">About me</Link>
          <div>
            <Link to="/works">Works</Link>
          </div>

        </nav>


        <Routes>
          <Route path='/' element={<Body />} />
          <Route exact path='/aboutme' element={<Aboutme />} />
          <Route exact path='/works' element={<Works />} />
        </Routes>
      </BrowserRouter>
      <div>

      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
