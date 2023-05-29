import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/Footer.css';


function Footer() {
  return (
    <div className='Footer Container'>
      <Card className="Card">
        <Card.Body>
          <Card.Title className="Title">Web site Designed by</Card.Title>
          <Card.Text>
            Alejandro Correa Web Design
          </Card.Text>
          <Button variant="light">FlyCodeBcn.com</Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Footer;