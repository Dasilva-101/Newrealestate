import React from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import '../components/Header.css';
import Email from "../components/Email";

function About(){
return(
    <div>
        <section className="about-hero text-white d-flex align-items-center justify-content-center">
        <h1 className="display-4 fw-bold text-center text-dark fs-1 ">About Us</h1>
        </section>
        <section className="py-5">
            <div className="container">
              <div className="row">
               <div className="">
                    <p className="lead">Welcome to Dasilva&Deed Properties., where excellence in facility management is our standard. Established with a vision to be the premier facility  management company globally, we are committed to setting the benchmark for service delivery, innovation, and sustainability. At Dasilva&Deed., we pride ourselves on being the go-to partner for businesses and organizations seeking comprehensive facility solutions that drive efficiency, ensure seamless operations, and deliver superior customer satisfaction.</p>

                    <h1>Vision Statement</h1>
                     <p className="para">To be the premier facility management company globally, setting the standard for excellence in service delivery, innovation, and sustainability. We envision being the go-to partner for businesses and organizations seeking comprehensive facility solutions, characterized by optimal efficiency, seamless operations, and superior customer satisfaction. Through continuous improvement, strategic partnerships, and a commitment to environmental stewardship, we aim to create spaces that inspire productivity, enhance well-being, and foster long-term success for our clients and the communities we serve.</p>

                     <h1>Mission Statement</h1>
                     <p>At Dasilva&Deed., our mission is to provide exceptional services that optimize the functionality, safety, and efficiency of commercial, residential, recreational, educational, and healthcare facilities. We strive to exceed client expectations by delivering comprehensive facility solutions, preserving the integrity of buildings, and creating sustainable environments. Our dedicated team, supported by the latest technologies, aims to enhance the overall experience and satisfaction of our clients while consistently demonstrating professionalism, integrity, and a commitment to excellence</p>

                     <h1>Our Services</h1>
                     <p>We offer a wide range of services tailored to meet the unique needs of each client. Our comprehensive facility management solutions include:</p>
                     <div>
                        <ul>
                            <li><strong>Facility Management:</strong>  Ensuring your business environments are safe, efficient, and conducive to productivity.</li>
                            <li><strong>Property Management:</strong>Maintaining the integrity and value of your properties through meticulous care and proactive maintenance.</li>
                            <li><strong>Protech Solutions:</strong>Leveraging cutting-edge technology to enhance the efficiency and security of your facilities.</li>
                            <li><strong>Individual/Corporate Trainings:</strong> Providing tailored training programs to equip individuals and organizations with the skills needed for effective facility management.</li>
                        </ul>
                     </div>
                     <h1>Why Choose Us</h1>
                     <p>Choosing Dasilva&Deed. means partnering with a company that values excellence, innovation, and customer satisfaction. Our team of dedicated professionals is equipped with the knowledge, skills, and technologies to deliver superior facility management services. We believe in continuous improvement and are always seeking new ways to enhance our service offerings.</p>
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
     <Email />
    
      
  </div>
</section>
    <Footer />
    </div>
)
}
export default About;





   