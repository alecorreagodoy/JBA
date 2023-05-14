import Header from "./components/header";
import Footer from "./components/Footer";
import Router from "../src/service/Router"

import "./App.css"

function App() {
  return (
    <div>
      <Header name="ale" color="blue" />

      <Router />
      <div class="upButton">
        <button></button>

      </div>
      <Footer greet="Hi" />
    </div>
  );
}

export default App;
