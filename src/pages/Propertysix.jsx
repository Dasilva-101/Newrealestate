import React from "react";
import Footer from "../components/Footer";
import ScroolToTop from "../Scroll/ScroolToTop";
import Email from "../components/Email";

function Propertysix(){
return(
    <div className="property-details-container">
      <ScroolToTop />
        <div className="bg-light py-4">
            <div className="container text-center text-dark"> 
                <h1>Ajah Lekki Lagos</h1>
            </div>
        </div>
        <div className="text-center">
            <img src="./images/newhouse6.jpg" alt="" className=" w-100 ms-1" style={{height:'80vh',}}/>
        </div>
        <section className="py-5">
          <div className="container">
           <div className="row">
              <strong>This is a nicely built Apartment. It is located at Ajah, Lagos. The open-plan commercial complex comprises of 4 floors and a pent floor with a total lettable space of just above 2500sqm.</strong>
           </div>
           <p className="mt-3">The following facilities are offered for comfort and enhanced work efficiency;</p>
           <ul>
            <li> CCTV infastructure</li>
            <li> Transformer</li>
            <li>4 Bedrooms</li>
            <li>Running Water</li>
           </ul>
           <strong>To enquire about this facility, kindly fill the request below;</strong>

             <div id="carouselBanana1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse6.jpg" className="d-block w-100" alt="Interior 1" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT1.jpg" className="d-block w-100" alt="Interior 2" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT2.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT3.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT4.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
        </div>

          
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana1" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
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
export default Propertysix;