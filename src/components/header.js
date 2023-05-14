
import React from 'react';
import Titulo from './titulo';




function Header(props) {
  console.log(props)
  return (
    <div className="main-header">

      <header className="App-header">
        <Titulo />, {props.name}, {props.color}

      </header>

    </div>
  );
}



export default Header;











