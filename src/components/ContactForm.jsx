import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'name') setFormData({...formData, name: value});
        if (id === 'emailAddress') setFormData({...formData, email: value});
        if (id === 'textarea') setFormData({...formData, message: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create WhatsApp message with proper formatting
        const message = `*You Got New Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message}`;
        
        // Your WhatsApp number
        const phoneNumber = "919979420641";
        
        // Create and open WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
        >
            <Form className="text-dark p-5 border shadow" onSubmit={handleSubmit}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <Form.Group className="mb-3 col-lg-12" controlId="name">
                        <Form.Label className="w-100 text-start text-capitalize">Your Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <Form.Group className="mb-3" controlId="emailAddress">
                        <Form.Label className="w-100 text-start text-capitalize">Email Address</Form.Label>
                        <Form.Control 
                            type="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <Form.Group className="mb-3" controlId="textarea">
                        <Form.Label className="w-100 text-start text-capitalize">Message</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3} 
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </motion.div>
                
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button variant="primary" type="submit">Send to WhatsApp</Button>
                </motion.div>
            </Form>
        </motion.div>
    )
}

export default ContactForm;

