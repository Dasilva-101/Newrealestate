import React from "react";
import Section from "../components/Section";
import Footer from "../components/Footer";
import '../components/Header.css';
import { Form } from "react-router-dom";
import Email from "../components/Email";

function Home(){
   return(
    <div>
     <Section />
      <Footer /> 
    </div>
   )
}
export default Home;