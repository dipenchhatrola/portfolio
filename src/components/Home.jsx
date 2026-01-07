import React from "react";
import { motion } from "framer-motion";
import HeaderImg from "../assets/images/headerimg.jpeg";

function Home() {
    return (
        <header className="pt-5" id="home">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                        <motion.h2 
                            className="text-secondary fw-bold lh-1"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            DIPEN CHHATROLA
                        </motion.h2>
                        <motion.h3 
                            className="text-capitalize text-start text-primary lh-1 mb-3"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Web Developer
                        </motion.h3>
                        <motion.div 
                            className="d-flex align-items-center justify-content-center justify-content-lg-start pt-5 ml-4"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <a 
                                href="/DIPENCHHATROLA.pdf" 
                                className="btn btn-primary mr-4" 
                                aria-label="Download Dipen Patel's Resume"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Download Resume
                            </a>
                        </motion.div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <motion.img 
                            className="img-fluid w-75 rounded-circle shadow my-5"
                            src={HeaderImg} 
                            alt="header img" 
                            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                            animate={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.3,
                                type: "spring",
                                stiffness: 100
                            }}
                            whileHover={{ 
                                scale: 1.05,
                                rotate: 1,
                                transition: { duration: 0.3 }
                            }}
                        />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;