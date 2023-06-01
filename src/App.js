import React from "react";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";
import Footer from "./components/Footer";
import Navbarr from "./components/navbar";
import Titulo from "./components/titulo";
import { Auth } from "./components/auth";
import "./App.css"

function App() {
  return (

    <div className="App">

      <BrowserRouter>


        <Titulo />
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
