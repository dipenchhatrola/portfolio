import React from "react";
import ViewMyWorkBtn from "./ViewMyWorkBtn";
import HeaderImg from "../assets/images/headerimg.jpeg"; 

function Home() {
    return (
        <header className="pt-5" id="home">
            <div className="container py-md-5">
                <div className="row">
                    <div className="col-md-6 d-flex flex-column align-items-start justify-content-center mt-5 mt-md-0">
                        <h2 className="text-secondary fw-bold lh-1">DIPEN CHHATROLA</h2>
                        <h3 className="text-capitalize text-start text-primary lh-1 mb-3">Web Devloper</h3>
                        <ViewMyWorkBtn />
                    </div>
                    <div className="col-md-6 d-flex justify-content-center justify-content-md-end">
                        <img className="img-fluid w-75 rounded-circle shadow my-5" src={HeaderImg} alt="header img" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Home;
