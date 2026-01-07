import React from "react";
import { motion } from "framer-motion";
import Certificate1 from "../assets/images/certificate1.jpg";
import Certificate2 from "../assets/images/certificate2.jpg";

function Certificate() {
    return(
        <motion.div 
            className="text-dark py-5" 
            id="certificates"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="row">
                    <motion.h2 
                        className="mb-4"
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        Certificate
                    </motion.h2>
                    <motion.div 
                        className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0"
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <motion.img 
                            className="img-fluid shadow my-5" 
                            src={Certificate1} 
                            alt="header img"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    <motion.div 
                        className="col-md-6 d-flex justify-content-center justify-content-md-end"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <motion.img 
                            className="img-fluid shadow my-5" 
                            src={Certificate2} 
                            alt="header img"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

export default Certificate;