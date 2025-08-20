import React from "react";
import { Form, Link } from "react-router-dom";
import './Header.css';
function Navbar(){
    return(
     <div>
        <nav class="navbar navbar-expand-lg bg-light shadow-sm">
  <div class="container-fluid">
  
   <a className="navbar-brand " href="#"><img src="/images/D&D1.png" alt="" style={{height:'15vh',}} /></a>

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

  
    <div class="collapse navbar-collapse" id="mainNavbar">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0"> 
        <li class="nav-item">
          <a class="nav-link active fs-5 fw-bold" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5 fw-bold" href="/about">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5 fw-bold" href="/properties">Properties</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active fs-5 fw-bold" href="/contact">Contact Us</a>
        </li>
      </ul>

  
      <a href="properties" class="btn btn-primary ms-lg-3">Find a Property</a>
    </div>
  </div>
</nav>

     </div>
    )
}

export default Navbar;