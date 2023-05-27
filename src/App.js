import React from "react"
import Header from "./components/header";
import Footer from "./components/Footer";
import Router from "../src/service/Router";
import { Auth } from "./components/auth"

import "./App.css"

function App() {
  return (
    <div>
      <Header name="ale" color="blue" />

      <Auth />
      <Router />
      <div>

      </div>
      <Footer greet="Hi" />
    </div>
  );
}

export default App;
