import React from "react";
import Titulo from './components/titulo';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Contact from "./Pages/contact";
import Navbarr from "./components/navbar";



import "./App.css"



function App() {
  return (


    <div className="App">

      <Titulo />
      <BrowserRouter>

        <Navbarr />
        <hr color="black" />
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
