import React from 'react';
import Card from 'react-bootstrap/Card';

import JB_01 from '../assets/portfolio/JB_01.jpg';
import JB_page0002 from '../assets/portfolio/JB_page0002.jpg';
import JB_page0003 from '../assets/portfolio/JB_page0003.jpg';
import JB_page0004 from '../assets/portfolio/JB_page0004.jpg';
import JB_page0005 from '../assets/portfolio/JB_page0005.jpg';
import JB_page0006 from '../assets/portfolio/JB_page0006.jpg';
import JB_page0007 from '../assets/portfolio/JB_page0007.jpg';
import JB_page0008 from '../assets/portfolio/JB_page0008.jpg';
import JB_page0009 from '../assets/portfolio/JB_page0009.jpg';

import '../components/styles/Works.css';




function Works() {

    const JB1 = JB_01;
    const JB2 = JB_page0002;
    const JB3 = JB_page0003;
    const JB4 = JB_page0004;
    const JB5 = JB_page0005;
    const JB6 = JB_page0006;
    const JB7 = JB_page0007;
    const JB8 = JB_page0008;
    const JB9 = JB_page0009
    return (
        <div className="Work container">
            <div className="works ">
                <h2>Portfolio</h2>
                <div>
                    <Card>
                        <Card.Img variant="top" src={JB1} />
                        <Card.Img variant="top" src={JB2} />
                        <Card.Img variant="top" src={JB3} />
                        <Card.Img variant="top" src={JB4} />
                        <Card.Img variant="top" src={JB5} />
                        <Card.Img variant="top" src={JB6} />
                        <Card.Img variant="top" src={JB7} />
                        <Card.Img variant="top" src={JB8} />
                        <Card.Img variant="top" src={JB9} />
                    </Card>
                </div>
            </div>
        </div>


    )
}





export default Works;