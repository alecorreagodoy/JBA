import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../../assets/img/Img1.png';
import MAT_4860 from '../../assets/img/MAT_4860.jpg';
import MAT_4863 from '../../assets/img/MAT_4863.jpg';

function CarouselComponent() {
    return (
        <Carousel variant="dark">
            <Carousel.Item>
                <a Target="_blank"
                    Title="galeria"
                    href="https://www.flickr.com/photos/184868185@N06/">
                    <img
                        className="d-block w-100"
                        src={Img1}
                        alt="Frist slide"
                        id="firstimg"
                        width="100%"
                        height="90%"
                    />
                </a>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a Target="_blank"
                    Title="galeria"
                    href="https://www.flickr.com/photos/184868185@N06/">
                    <img
                        className="d-block w-100"
                        src={MAT_4860}
                        alt="Second slide"
                        id="secondimg"
                        width="100%"
                        height="90%"
                    />
                </a>
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a Target="_blank"
                    Title="galeria"
                    href="https://www.flickr.com/photos/184868185@N06/">
                    <img
                        className="d-block w-100"
                        src={MAT_4863}
                        alt="Third slide"
                        id="thirdimg"
                        width="100%"
                        height="90%"
                    />
                </a>
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>

                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;