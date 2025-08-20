import React from "react";
import '../components/Header.css'
import Footer from "../components/Footer";
import Email from "../components/Email";

function Contact(){
 return(
    <div>
        <section className="hero-properties d-flex align-items-center justify-content-center">
        <h2 className="browse fw-bold text-center">Contact Us</h2>
      </section>

       <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="d-flex align-items-center gap-2 ">
                    <h1> Have a project in mind??</h1> 
                    <img src="./images/telephone.png" alt="" style={{height:'4vh',}} className="mt-5 m-1"/>
                </div>
             <p> <strong>We are here to answer any question you may have. kindly use the form below <br /> to contact our Customer Service Team and we would be glad to connect with you</strong> </p>
             <p><strong>Email: dasilvaayomide3@gmail.com</strong></p>
            </div>
              </div>
            </section>

              <section className="letstalk-section text-white d-flex align-items-center container">
  <div className="container text-center">
    <h2 className="fw-bold mb-3">Let’s Talk</h2>
    <p className="mb-4 fs-5">Interested in any property? Reach out and let’s help you find the perfect home or investment.</p>

    <a 
      href="https://wa.me/2349041618363" 
      target="_blank" 
      rel="noopener noreferrer"
      className="btn btn-light btn-lg mb-4"
    >
      Chat on WhatsApp
    </a>

    <p className="mb-4 fs-3">Or call us directly at <strong>+2349041618363</strong></p>
    <Email />
     
  </div>
</section>
  <Footer />
    </div>
 )
}
export default Contact;