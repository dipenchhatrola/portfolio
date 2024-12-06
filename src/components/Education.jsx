import React from "react";

function EducationSection() {
    return(
        <div className="text-dark py-5" id="education">
            <div className="container">
                <div className="row">
                    <h2 className="mb-4">Education</h2>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h4 className="text-start text-primary">Atmiya University</h4>
                        <h5 className="text-start">M.Sc.IT-Master of Science in Information Technology</h5>
                        <h6 className="text-start">2022-2024</h6>
                        <h6 className="mb-5 text-start">CGPA-7.08/10</h6>
                        <h5 className="text-start">B.C.A.-Bachelor of Computer Application</h5>
                        <h6 className="text-start">2019-2022</h6>
                        <h6 className="mb-5 text-start">CGPA-6.19/10</h6>                            
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h4 className="text-start text-primary">Shree GK Dholakiya School</h4>
                        <h5 className="text-start">HSC</h5>
                        <h6 className="text-start">2019</h6>
                        <h6 className="mb-5 text-start">70.20 PR</h6>
                        <h5 className="text-start">SSC</h5>
                        <h6 className="text-start">2017</h6>
                        <h6 className="mb-5 text-start">65.20 PR</h6>                            
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EducationSection;
