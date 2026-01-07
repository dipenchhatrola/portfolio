import React from "react";
import { motion } from "framer-motion";
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
    return (
        <motion.div
            className="text-dark py-5"
            id="about"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="flex-column-reverse flex-md-row">
                    
                    <motion.div
                        className="col-md-12 d-flex flex-column justify-content-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <motion.h2
                            className="mb-4"
                            variants={{
                                hidden: { opacity: 0, x: -40 },
                                visible: { opacity: 1, x: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            About Me
                        </motion.h2>

                        <motion.p
                            className="text-start"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            Hey there! I'm Dipen Chhatrola, I am currently working as a
                            Software Developer at Torridwave Technologies, where I
                            contribute to the design, development, and deployment of
                            scalable software solutions. Passionate about continuous
                            learning, I stay updated with the latest technologies and
                            best practices to bring innovation and efficiency into
                            every project I work on.
                        </motion.p>

                        <motion.p
                            className="text-start mb-5"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.6 }}
                        >
                            I am passionate about staying up-to-date with the latest
                            industry trends and continuously improving my skills
                            through learning and collaboration. My problem-solving
                            abilities and commitment to delivering high-quality work
                            have enabled me to successfully complete numerous projects
                            for clients across various industries.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <ViewMyWorkBtn />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}

export default AboutSection;