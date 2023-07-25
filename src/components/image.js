import React from 'react';
import CarouselComponent from './bootstrap-components/carousel';
import { Button } from 'react-bootstrap';
import {
  galleryButton,
  CarrousselContainer,
} from './styles/Image.styles';
//import './styles/image.css'




function Image() {

  return (
    <CarrousselContainer>
      <div className="Gallery">
        <div className="carousel" >
          <CarouselComponent />
        </div>
        <div className=' btn d-grid gap-2 col-md-12' >
          <galleryButton>
            <a Target="_blank" Titulo="Galeria" href="https://www.flickr.com/photos/184868185@N06/albums">
              <Button variant="outline-light" size="lg">
                Gallery
              </Button></a>
          </galleryButton>
        </div>
        <div className=" col-md-12 ficha ">
          <p className="text-ficha">
            <span></span>

          </p>
        </div>

      </div>
    </CarrousselContainer>
  )
}


export default Image;









