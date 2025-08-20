
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import Lagoslocations from "../data/Lagoslocations";
import React, {useState} from "react";
import Email from './Email';


function Section(){
 
    return(
      <div>
         <section id="middle" className="container my-5">
    
      <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 border-top border-dark"></div>
        <span className="mx-3 fw-bold">FEATURES</span>
        <div className="flex-grow-1 border-top border-dark"></div>
      </div>

      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Featured Homes</h3>
        <div>
            <a href="/properties" className="text-decoration-none text-primary">Explore All</a>
        <img src="./images/arrow.png" alt="" style={{height:'4vh',}}/>
        </div>

      </div>

      {/* Card Images Grid */}
      <div className="row g-4 animate-card">
        <div className="col-md-4">
    <div className="card h-100">
      
      {/* Carousel Start */}
      <div id="carouselBanana1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse2.jpg" className="d-block w-100" alt="Interior 1" />
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

            {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana1" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}

      {/* Card Body */}
      <div className="card-body">
        <h5 className="card-title text-center fw-bold">Ajah Lekki Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 5 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark fw-bold text-center">₦230,000,000</p>
          <div className="text-center">
            <Link to={`/propertyone`} className="btn btn-primary ">View Details</Link>
          </div>
      </div>
    </div>
  </div>





   <div className="col-md-4">
    <div className="card h-100">
      
      {/* Carousel Start */}
      <div id="carouselBanana2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse.jpg.jpg" className="d-block w-100" alt="Interior 1" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT7.jpg" className="d-block w-100" alt="Interior 2" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT3.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT5.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT9.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
        </div>

            {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana2" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana2" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}

    <div className="card-body">
             <h5 className="card-title text-center fw-bold">Ajah Lekki, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 4 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark fw-bold text-center">₦200,000,000</p>
          <div className="text-center">
                     <Link to={`/propertytwo`} className="btn btn-primary ">View Details</Link>
                   </div>
            </div>
          </div>
        </div>


        <div className="col-md-4">
           <div className="card h-100">
      
      {/* Carousel Start */}
      <div id="carouselBanana3" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse3.jpg" className="d-block w-100" alt="Interior 1" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT5.jpg" className="d-block w-100" alt="Interior 2" />
          </div>
          <div className="carousel-item">
            <img src="./images/INT6.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT7.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
           <div className="carousel-item">
            <img src="./images/INT8.jpg" className="d-block w-100" alt="Interior 3" />
          </div>
        </div>

            {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana3" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana3" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}
            <div className="card-body">
                <h5 className="card-title text-center fw-bold">Ikoyi, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 4 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark fw-bold text-center">₦300,000,000</p>
             <div className="text-center">
                        <Link to={`/propertythree`} className="btn btn-primary ">View Details</Link>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section> 

      
    <div class="container-fluid px-0">
  <div class="d-flex flex-column flex-md-row justify-content-start align-items-stretch">
    
    <div class="image-section col-md-5 px-5">
      <img src="./images/newhouse2.jpg" alt="What Sets Us Apart" class="img-fluid"/>
    </div>
    <div class="col-md-6 p-5">
      <h2 class="mb-4">What Sets Us Apart?</h2>
      <p class="mb-4">As a Real Estate Consultant, there are several factors that set us apart...</p>

      <div class="accordion w-100" id="accordionExample">
  
        <div class="accordion-item mb-4">
          <h2 class="accordion-header fw-bold">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" >
              Expertise and Experience
            </button>
                  </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              Our team brings extensive expertise and experience in facility management...
            </div>
          </div>
        </div>

    
        <div class="accordion-item mb-4">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
              Customized Solutions
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              We tailor our services to meet the specific needs of each client...
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
              Emphasis on Technology
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              We leverage advanced technologies to deliver efficient and reliable services...
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
    
     <section className="container my-5 text-center animate-services">
  <h2 className="fw-bold">Services</h2>
  <p className="text-muted mb-5 fw-bold">D&D Properties offer the best</p>

  <div className="row g-4">
    <div className="col-md-3 col-sm-6">
      <div className="service-box p-4 bg-success bg-opacity-25 rounded">
        <img src="./images/icon3.png" alt="" className="mb-3 "style={{ width:'60px', height:'60px'}}/>
        <h5 className="text-dark fs-5">Facility Management</h5>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="service-box p-4 bg-success bg-opacity-25 rounded">
          <img src="./images/icon3.png" alt="" className="mb-3 "style={{ width:'60px', height:'60px'}}/>
        <h5 className="text-dark fw-bold">Property Sales</h5>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="service-box p-4 bg-success bg-opacity-25 rounded">
          <img src="./images/icon3.png" alt="" className="mb-3 "style={{ width:'60px', height:'60px'}}/>
        <h5 className="text-dark ">Real Estate Advisory</h5>
      </div>
    </div>
    <div className="col-md-3 col-sm-6">
      <div className="service-box p-4 bg-success bg-opacity-25 rounded">
          <img src="./images/icon3.png" alt="" className="mb-3 "style={{ width:'60px', height:'60px'}}/>
        <h5 className="text-dark fw-bold">Consultancy</h5>
      </div>
    </div>
  </div>
</section>
    <section className="animate-core">
      <div class="container py-5">
  <div class="text-center mb-5">
    <h2 class="fw-bold">Core Values</h2>
    <p class="text-muted fw-bold">What drives us forward</p>
  </div>


  <div class="row text-center g-4">
    
  
    <div class="col-md-4 px-0">
      <img src="./images/icon3.png" alt="Integrity Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Integrity</h5>
      <p class="text-muted fs-4">We act with honesty and strong moral principles.</p>
    </div>

    <div class="col-md-4 px-0">
      <img src="./images/icon4.png" alt="Excellence Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Excellence</h5>
      <p class="text-muted fs-4">We deliver high-quality results in every service.</p>
    </div>

    <div class="col-md-4 px-0">
      <img src="./images/icon5.png" alt="Innovation Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Innovation</h5>
      <p class="text-muted fs-4">We embrace change and drive creative solutions.</p>
    </div>
       <div class="col-md-4 px-0">
      <img src="./images/icon6.png" alt="Teamwork Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Teamwork</h5>
      <p class="text-muted fs-4">We collaborate effectively to achieve shared goals.</p>
    </div>


    <div class="col-md-4 px-0">
      <img src="./images/icon3.png" alt="Customer Focus Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Customer Focus</h5>
      <p class="text-muted fs-4">We prioritize our clients’ needs in all we do.</p>
    </div>


    <div class="col-md-4 px-0">
      <img src="./images/icon5.png" alt="Accountability Icon" class="mb-3" style={{ width:'60px', height:'60px'}}/>
      <h5 class="fw-bold">Accountability</h5>
      <p class="text-muted fs-4">We take full responsibility for our commitments.</p>
    </div>
     </div>
     </div>
    </section>

        <section className="letstalk-section text-white d-flex align-items-center">
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

   <h3 className="mb-4">Or call us directly at <strong>+2349041618363</strong></h3>  

{/*     
      <div className="row justify-content-center">
      <div className="col-md-8">
        <form className="bg-white text-dark p-4 rounded shadow">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-100">Send Message</button>
        </form> */}


        <Email />
         {/* <div className="row justify-content-center">
      <div className="col-md-8">
        <form onSubmit={handleContactSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="mb-4">
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>

              {status === "error" && (
                <p className="text-danger mt-3 mb-0">
                  ⚠️ Could not send. Please try again.
                </p>
              )}
            </form>
            </div>
            </div> */}
  </div>
</section>
  
      </div>
     )
}
export default Section;