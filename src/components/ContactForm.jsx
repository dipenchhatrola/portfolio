import React from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Form className="text-dark p-5 border shadow">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Form.Group className="mb-3 col-lg-12" controlId="name">
                        <Form.Label className="w-100 text-start text-capitalize">Your Name</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Form.Group className="mb-3" controlId="textarea">
                        <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button variant="primary" type="submit">Send</Button>
                </motion.div>
            </Form>
        </motion.div>
    )
}

export default ContactForm;