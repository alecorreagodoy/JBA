import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";
import Footer from "./components/Footer";
import Titulo from "./components/titulo";
import Contact from "./Pages/contact";
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
          <Route exact path='/contact' element={<Contact />} />
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
