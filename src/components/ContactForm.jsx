import React from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm() {
    return (
        <Form className="text-dark p-5 border shadow">
            <Form.Group className="mb-3 col-lg-12" controlId="name">
                <Form.Label className="w-100 text-start text-capitalize">Your Name</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="emailAddress">
                <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="textarea">
                <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">Send</Button>
        </Form>
    )
}

export default ContactForm;