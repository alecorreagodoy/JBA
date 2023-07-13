import React from "react";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from "./Pages/Body";
import Aboutme from "./Pages/aboutme";
import Works from "./Pages/Works";
import Footer from "./components/Footer";
import Titulo from "./components/titulo";
import Navbarr from "./components/navbar";
import { Auth } from "./components/auth";
import Router from "./service/Router";

import "./App.css"

function App() {
  return (


    <div className="App">

      <Router />


      <div className="Footer">
        <Auth />
        <Footer />
      </div>
    </div>
  );
}

export default App;
