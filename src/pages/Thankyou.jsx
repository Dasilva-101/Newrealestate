import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const ThankYou = () => {
  return (
    <>
     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="text-center">
        <div className="mb-4" style={{ fontSize: "3rem" }}>✅</div>
        <h1 className="fw-bold text-success">Thank You!</h1>
        <p className="text-black">
          Your message has been sent successfully. <br />
          We’ll get back to you soon.
        </p>
        <Link to="/" className="btn btn-primary mt-3">
          Back to Home
        </Link>
      </div>
    </div>
   <Footer />
    </>
   
  
  );
};

export default ThankYou;