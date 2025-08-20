import React from "react";
import Footer from "../components/Footer";
import ScroolToTop from "../Scroll/ScroolToTop";
import Email from "../components/Email";

function PropertyEight(){
return(
    <div className="property-details-container">
      <ScroolToTop />
        <div className="bg-light py-4">
            <div className="container text-center text-dark"> 
                <h1>Ikorodu Lagos</h1>
            </div>
        </div>
          <video className="card-img-top" controls>
          <source src="/Video/land2.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <section className="py-5">
          <div className="container">
           <div className="row">
              <strong> It is located at Ikorodu, Lagos. The open-plan commercial complex comprises of 4 floors and a pent floor with a total lettable space of just above 2500sqm.</strong>
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

    <p className="mb-4 fs-2">Or call us directly at <strong>+2349041618363</strong></p>
  <Email />
     
  </div>
</section>
   
   <Footer />
    </div>
)
}
export default PropertyEight;