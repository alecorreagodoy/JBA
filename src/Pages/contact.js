import React from "react";
import { Form, Card } from "react-bootstrap";
import styled from "styled-components";
import juan from '../assets/img/juan.jpeg'

function Contact() {

    return (
        <div className="container">
            <div className="title">
                <h2>Contact me!</h2>
            </div>
            <div className="row">
                <div className="col-md-6 formular">
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Example textarea</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>

        </div>

    );
};

export default Contact;