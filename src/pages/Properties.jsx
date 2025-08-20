import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../components/Header.css';
import { Link } from "react-router-dom";
import Email from "../components/Email";



function Properties(){
 
return(
    <div>
            {/* Hero Section */}
      <section className="hero-properties d-flex align-items-center justify-content-center">
        <h2 className="browse fw-bold text-center text-dark fs-1">Browse Available Properties</h2>
      </section>

      <div className="container py-5">
  <h2 className="text-center fw-bold mb-4">Available Properties</h2>
  
  <div className="row g-4">
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

          
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana1" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana1" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
    
      {/* Card Body */}
      <div className="card-body">
           <h5 className="card-title text-center fw-bold">Ajah,Lagos State</h5>
        <p className="card-text fw-bold text-center">🛏 4 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark text-center fw-bold">₦230,000,000</p>
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
                <h5 className="card-title text-center fw-bold">Ajah, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 4 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark text-center fw-bold">₦200,000,000</p>
           <div className="text-center">
            <Link to={`/propertytwo`} className="btn btn-primary">View Details</Link>
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
          <p className="fs-5 text-dark text-center fw-bold">₦300,000,000</p>
             <div className="text-center">
            <Link to={`/propertythree`} className="btn btn-primary ">View Details</Link>
          </div>
            </div>
          </div>
        </div>

      <div className="col-md-4">
      <div className="card h-100 shadow-sm">

     {/* Carousel Start */}
      <div id="carouselBanana4" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse4.jpg" className="d-block w-100" alt="Interior 1" />
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana4" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana4" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}

        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Victoria Islanf, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 3 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-dark text-center fw-bold">₦600,000,000</p>
              <div className="text-center">
            <Link to={`/propertyfour`} className="btn btn-primary ">View Details</Link>
          </div>
            </div>
      </div>
    </div>

      <div className="col-md-4">
      <div className="card h-100 shadow-sm">
         {/* Carousel Start */}
      <div id="carouselBanana5" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse5.jpg" className="d-block w-100" alt="Interior 1" />
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana5" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana5" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}
        <div className="card-body">
            <h5 className="card-title text-center fw-bold">Ikorodu, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 2 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-success text-center">₦100,000,000</p>
              <div className="text-center">
            <Link to={`/propertyfive`} className="btn btn-primary ">View Details</Link>
          </div>
            </div>
      </div>
    </div>

      <div className="col-md-4">
      <div className="card h-100 shadow-sm">
         {/* Carousel Start */}
      <div id="carouselBanana6" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/newhouse6.jpg" className="d-block w-100" alt="Interior 1" style={{height:'60vh',}} />
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
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselBanana6" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-dark"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselBanana6" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-dark"></span>
        </button>
      </div>
      {/* Carousel End */}
        <div className="card-body">
             <h5 className="card-title text-center fw-bold">Ajah Lekki, Lagos</h5>
        <p className="card-text fw-bold text-center">🛏 4 Bedroom</p>
        <p className="card-text fw-bold text-center">2 Toilet</p>
          <p className="fs-5 text-success text-center">₦120,000,000</p>
             <div className="text-center">
            <Link to={`/propertysix`} className="btn btn-primary ">View Details</Link>
          </div>
            </div>
      </div>
    </div>
      {/* 🔥 Card 7 - Video Card */}
    <div className="col-md-4 mb-4">
      <div className="card">
        <video className="card-img-top" controls>
          <source src="/Video/land1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Ikorodu Lagos State</h5>
          <p className="card-text fw-bold text-center">🛏 1 Acre</p>
          <p className="fs-5 text-dark text-center fw-bold">₦50,000,000</p>
             <div className="text-center">
            <Link to={`/propertyseven`} className="btn btn-primary ">View Details</Link>
          </div>
        </div>
      </div>
    </div>

    {/* 🔥 Card 7 - Video Card */}
    <div className="col-md-4 mb-4">
      <div className="card">
        <video className="card-img-top" controls>
          <source src="/Video/land2.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Ikorodu Lagos</h5>
          <p className="card-text fw-bold text-center">4 Acre</p>
          <p className="fs-5 text-dark text-center fw-bold">₦200,000,000</p>
         <div className="text-center">
            <Link to={`/propertyeight`} className="btn btn-primary ">View Details</Link>
          </div>
        </div>
      </div>
    </div>

      {/* 🔥 Card 7 - Video Card */}
    {/* <div className="col-md-4 mb-4">
      <div className="card">
        <video className="card-img-top" controls>
          <source src="/Video/land1.MP4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title text-center fw-bold">Banana Island Mansion</h5>
          <p className="card-text fw-bold text-center">🛏 6 Bedroom</p>
          <p className="card-text fw-bold text-center">5 Toilet</p>
          <p className="fs-5 text-success text-center">₦400,000,000</p>
          <div className="text-center">
            <Link to={`/propertynine`} className="btn btn-primary text-center">View Details</Link>
          </div>
        </div>
      </div>
    </div> */}

  

     <div className="d-flex align-items-center mb-3">
        <div className="flex-grow-1 border-top border-dark"></div>
        <span className="mx-3 fw-bold">FEATURES</span>
        <div className="flex-grow-1 border-top border-dark"></div>
      </div>


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
   <Email />
     
  </div>
</section>

  </div>
</div>
   <Footer />
    </div>
)
}
export default Properties;