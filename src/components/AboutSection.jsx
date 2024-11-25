import React from "react";
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
    return (
        <div className="text-dark py-5" id="about">
            <div className="container">
                <div className="flex-column-reverse flex-md-row">                    
                    <div className="col-md-12 d-flex flex-column justify-content-center">
                        <h2 className="mb-4">About Me</h2>
                        <p className="text-start">Hey there! I'm Dipen Chhatrola, a passionate React.js developer with 4 month of experience in web development, I've honed my skills in building dynamic and interactive front-end applications using React.js. I am a web developer with a passion for creating dynamic, user-friendly websites. I specialize in front-end development and love working with React and other modern web technologies.</p>
                        <p className="text-start mb-5">I am passionate about staying up-to-date with the latest industry trends and continuously improving my skills through learning and collaboration. My problem-solving abilities and commitment to delivering high-quality work have enabled me to successfully complete numerous projects for clients across various industries.</p>
                    </div>
                    <ViewMyWorkBtn />
                </div>
            </div>
        </div>
    )
} 

export default AboutSection;