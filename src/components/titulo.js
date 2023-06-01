import React from 'react';
import Navbarr from './navbar';




function Titulo() {
  return (
    <div className="container">
      <div className="row">

        <div className="titulo-page">

          <h1>JUAN BALLARINO</h1>

          <div className="col-sm sub-title">
            <p>ARCHITECT</p>
          </div>
          <hr color="black" />
          <Navbarr />
          <hr color="black" />
        </div>
      </div>
    </div>
  );
}

export default Titulo;

