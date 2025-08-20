import React from "react";
import './Header.css'

function Footer(){
 return(
     <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row text-start">

      
          <div className="col-md-3 mb-4">
            <h5 className="text-info">D&D Properties</h5>
            <p>Luxury homes, trusted agents, and premium locations.</p>
          </div>

      
          <div className="col-md-3 mb-4">
            <h6 className="text-info">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="properties" className="text-light text-decoration-none">Properties</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

    
          <div className="col-md-3 mb-4">
            <h6 className="text-info">Our Services</h6>
            <ul className="list-unstyled">
              <li>Facility Management</li>
              <li>Property Sales</li>
              <li>Real Estate Advisory</li>
              <li>Consultancy</li>
            </ul>
          </div>

        
          <div className="col-md-3 mb-4 ">
            <h6 className="text-info">Contact Us</h6>
            <p>Email: dasilvaayomide3@gmail.com</p>
            <p>Phone: +234 9041618363</p>
            <p>Location: Lagos, Nigeria</p>
          </div>

        </div>

    
        <div className="text-center mt-4 fs-4 ">
          <small>&copy; {new Date().getFullYear()} Dasilva&Deed Properties. All rights reserved.</small>
        </div>
      </div>
    </footer>
 )
}
export default Footer;