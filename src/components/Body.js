import React from 'react';
import Image from './image';





const FancyBorder = ({ color, children }) => (
  //   <div className={"FancyBorder FancyBorder-" + color}>
  //     {children}
  //   </div>
  <span className="square border border-dark"></span>
);

function Body(props) {

  return (
    <FancyBorder color="black">
      <div id="Home" className="Body container">
        <div>

          <div className="container" >
            <div className="" >
              <div className="col-12 col-md-12 title-img">
                <h2>{props.greet} from Body</h2>

                <Image />
              </div>

            </div>
          </div>



        </div>



      </div>

    </FancyBorder>
  );
}

export default Body;