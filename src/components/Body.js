import React from 'react';
import Image from './image';
import CarouselComponent from './bootstrap-components/carousel'




const FancyBorder = ({ color, children }) => (

  <div className={"Fabcyborder FancyBorder" + color}>{children}</div>
);

function Body(props) {

  return (
    <FancyBorder color="black">
      <div id="Home" className="Body-Container">


        <div className="container" >
          <div className="home" >
            <div>
              <CarouselComponent />
            </div>
            <div className="col-12 col-md-12 title-img">

            </div>

          </div>
        </div>



      </div>

    </FancyBorder>
  );
}

export default Body;