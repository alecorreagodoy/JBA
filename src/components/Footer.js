import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './styles/Footer.css';


function Footer() {
  return (
    <div className='Footer Container'>
      <Card className="Card">
        <Card.Body>

          <Card.Text>

          </Card.Text>
          <Button variant="light" href="https://flycode.app" target="_blank">
            FlyCode.app
          </Button>
        </Card.Body>
      </Card>
    </div>

  )
}

export default Footer;