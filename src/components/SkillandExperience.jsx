import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};

function SkillandExperience() {
    return (
        <motion.div
            className="text-dark py-5"
            id="skill"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="container">
                <div className="row">
                    {/* EXPERIENCE */}
                    <motion.div
                        className="col-md-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.2 },
                            },
                        }}
                    >
                        <motion.h2 className="mb-4" variants={fadeUp}>
                            Experience
                        </motion.h2>

                        <motion.div variants={fadeUp}>
                            <h4 className="text-start">Software Developer</h4>
                            <h5 className="text-start text-primary">
                                Torridwave Technologies
                            </h5>
                            <p className="text-start mb-4">Jan 2025 – Present</p>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h4 className="text-start">Junior Data Analyst</h4>
                            <h5 className="text-start text-primary">
                                I-Tech Infonet Pvt. Ltd.
                            </h5>
                            <p className="text-start mb-4">Jul 2024 – Jan 2025</p>
                        </motion.div>

                        <motion.div variants={fadeUp}>
                            <h4 className="text-start">React.js Developer</h4>
                            <h5 className="text-start text-primary">
                                Imbuesoft LLP
                            </h5>
                            <p className="text-start">Jan 2024 – Apr 2024</p>
                        </motion.div>
                    </motion.div>

                    {/* SKILLS - Main Column */}
                    <motion.div
                        className="col-md-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            visible: {
                                transition: { staggerChildren: 0.1 },
                            },
                        }}
                    >
                        <motion.h2 className="mb-4" variants={fadeUp}>
                            Skills
                        </motion.h2>

                        <div className="row">
                            {/* Left Column of Skills */}
                            <div className="col-md-6">
                                {/* React */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="React"
                                            width="32"
                                        />
                                        React.js
                                    </p>
                                </motion.div>

                                {/* React Native */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                                            alt="React Native"
                                            width="32"
                                        />
                                        React Native
                                    </p>
                                </motion.div>

                                {/* TypeScript */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                                            alt="TypeScript"
                                            width="32"
                                        />
                                        TypeScript
                                    </p>
                                </motion.div>

                                {/* JavaScript */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                                            alt="JavaScript"
                                            width="32"
                                        />
                                        JavaScript
                                    </p>
                                </motion.div>

                                {/* Laravel */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg"
                                            alt="Laravel"
                                            width="32"
                                        />
                                        Laravel
                                    </p>
                                </motion.div>

                                {/* Node.js */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                                            alt="Node.js"
                                            width="32"
                                        />
                                        Node.js
                                    </p>
                                </motion.div>
                            </div>

                            {/* Right Column of Skills */}
                            <div className="col-md-6">
                                {/* HTML */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                                            alt="HTML"
                                            width="32"
                                        />
                                        HTML5
                                    </p>
                                </motion.div>

                                {/* CSS */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                                            alt="CSS"
                                            width="32"
                                        />
                                        CSS3
                                    </p>
                                </motion.div>

                                {/* Tailwind CSS */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                                            alt="Tailwind CSS"
                                            width="32"
                                        />
                                        Tailwind CSS
                                    </p>
                                </motion.div>

                                {/* Bootstrap */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                                            alt="Bootstrap"
                                            width="32"
                                        />
                                        Bootstrap
                                    </p>
                                </motion.div>

                                {/* Git */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                                            alt="Git"
                                            width="32"
                                        />
                                        Git
                                    </p>
                                </motion.div>

                                {/* GitHub */}
                                <motion.div variants={fadeUp} className="mb-3">
                                    <p className="text-start d-flex align-items-center gap-3">
                                        <img
                                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                                            alt="GitHub"
                                            width="32"
                                        />
                                        GitHub
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default SkillandExperience;