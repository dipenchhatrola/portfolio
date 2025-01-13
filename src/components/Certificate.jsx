import React from "react";
import Certificate1 from "../assets/images/certificate1.jpg";
import Certificate2 from "../assets/images/certificate2.jpg";

function Certificate() {
    return(
        <div className="text-dark py-5" id="certificates">
            <div className="container">
                <div className="row">
                    <h2 className="mb-4">Certificate</h2>
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                        <img className="img-fluid shadow my-5" src={Certificate1} alt="header img" />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <img className="img-fluid shadow my-5" src={Certificate2} alt="header img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Certificate;