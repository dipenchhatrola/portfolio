import React from "react";
import { motion } from "framer-motion";

function EducationSection() {
    return (
        <motion.div
            className="text-dark py-5"
            id="education"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="row">

                    <motion.h2
                        className="mb-4"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Education
                    </motion.h2>

                    {/* Left Column */}
                    <motion.div
                        className="col-md-6 d-flex flex-column justify-content-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        <motion.h4
                            className="text-start text-primary"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 },
                            }}
                        >
                            Atmiya University
                        </motion.h4>

                        <motion.h5 className="text-start" variants={fadeUp}>
                            Master of Science in Information Technology
                        </motion.h5>
                        <motion.h6 className="text-start" variants={fadeUp}>
                            2022–2024
                        </motion.h6>
                        <motion.h6 className="mb-5 text-start" variants={fadeUp}>
                            CGPA – 7.08 / 10
                        </motion.h6>

                        <motion.h5 className="text-start" variants={fadeUp}>
                            Bachelor of Computer Application
                        </motion.h5>
                        <motion.h6 className="text-start" variants={fadeUp}>
                            2019–2022
                        </motion.h6>
                        <motion.h6 className="mb-5 text-start" variants={fadeUp}>
                            CGPA – 6.19 / 10
                        </motion.h6>
                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        className="col-md-6 d-flex flex-column justify-content-center"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15,
                                },
                            },
                        }}
                    >
                        <motion.h4
                            className="text-start text-primary"
                            variants={fadeUp}
                        >
                            Shree GK Dholakiya School
                        </motion.h4>

                        <motion.h5 className="text-start" variants={fadeUp}>
                            HSC
                        </motion.h5>
                        <motion.h6 className="text-start" variants={fadeUp}>
                            2019
                        </motion.h6>
                        <motion.h6 className="mb-5 text-start" variants={fadeUp}>
                            70.20 PR
                        </motion.h6>

                        <motion.h5 className="text-start" variants={fadeUp}>
                            SSC
                        </motion.h5>
                        <motion.h6 className="text-start" variants={fadeUp}>
                            2017
                        </motion.h6>
                        <motion.h6 className="mb-5 text-start" variants={fadeUp}>
                            65.20 PR
                        </motion.h6>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export default EducationSection;
