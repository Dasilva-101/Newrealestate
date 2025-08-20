import React from "react";
import Footer from "../components/Footer";
import ScroolToTop from "../Scroll/ScroolToTop";
import Email from "../components/Email";

function Propertyseven(){
return(
    <div className="property-details-container">
      <ScroolToTop />
        <div className="bg-light py-4">
            <div className="container text-center text-dark"> 
                <h1>Ikorodu Lagos</h1>
            </div>
        </div>
       <video className="card-img-top" controls>
          <source src="/Video/land1.MP4" type="video/mp4" style={{height:'50vh',}} className="w-80" />
          Your browser does not support the video tag.
        </video>
        <section className="py-5">
          <div className="container">
           <div className="row">
              <strong>This Land which is 4 acres. It is located at Ikorudu Lagos. </strong>
           </div>
           <p className="mt-3">The following facilities are offered for comfort and enhanced work efficiency;</p>
           <ul>
            <li> CCTV infastructure</li>
            <li> Transformer</li>
            <li>4 Bedrooms</li>
            <li>Running Water</li>
           </ul>
           <strong>To enquire about this facility, kindly fill the request below;</strong>
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
export default Propertyseven;