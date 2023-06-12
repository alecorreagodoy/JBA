import React from "react";
import { Form, Card } from "react-bootstrap";
import styled from "styled-components";
import { Theme } from "../components/infrastructure/theme/theme.js";
import { useRef } from "react";
import emailjs from "@emailjs/browser";




const Box = styled.div`
padding: 4rem;
margin: 4rem;
color: ${(props) => props.theme.colors.black};
font-family: ${(props) => props.theme.fonts.body}
`
const Title = styled.div`
font-family:${(props) => props.theme.fonts.body}
`
function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_44o4a1l', 'template_nh11hr4', form.current, 'ybjKJFsCcGaJhnbWY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (


        <div className="container">

            <Theme>
                <Title>
                    <div className="title"
                    /* style={{
                        color: `${theme.colors.black}`,
                        fontFamily: `${theme.fonts.heading}`
                    }} */
                    >
                        <h2> Contact me!</h2>
                    </div>
                </Title>

                <div className="row">
                    <div className="col-md-12 formular">
                        <Card>
                            <Card.Body>
                                <Form className="--form--control" ref={form} onSubmit={sendEmail}
                                >
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" name="user-name" required placeholder="Full Name" />
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" name="user-email" required placeholder="name@example.com" />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control type="text" name="subject" required placeholder="subject" />
                                        <Form.Label>Example textarea</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <button type="submit" className="btn btn-outline-secondary">Send Message</button>
                                </Form>

                            </Card.Body>
                        </Card>
                    </div>

                </div>
                <Box>
                    <p>
                        Hello,

                        Thank you for visiting my personal website. If you have any questions, suggestions, or simply want to get in touch with me, I would be delighted to hear from you. Your feedback is valuable to me.

                        Please use the contact form below or the provided contact information to reach out to me. I will get back to you as soon as possible.

                        Looking forward to hearing from you!

                        Best regards,

                    </p>
                    <p>Juan Ballarino</p>
                </Box>
            </Theme>
        </div>



    );
};

export default Contact;