import React from "react";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
// import Footer from "./components/Footer";
import Header from "./components/Header";
// import Section from "./components/Section";
import Home from "./pages/Home";
import About from "./pages/About";
import Properties from "./pages/Properties";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Propertyone from "./pages/Propertyone";
import Propertytwo from "./pages/Propertytwo";
import Propertythree from "./pages/Propertythree";
import ScroolToTop from "./Scroll/ScroolToTop";
import Propertyfour from "./pages/Propertyfour.";
import Propertyfive from "./pages/Propertyfive";
import Propertysix from "./pages/Propertysix";
import Propertyseven from "./pages/Propertyseven";
import PropertyEight from "./pages/PropertyEight";
import Propertynine from "./pages/Propertynine";
import PropertyResults from "./pages/PropertyResults";
import PropertyResultsTwo from "./pages/PropertyResultsTwo";
import ThankYou from "./pages/Thankyou";


function App(){
  return(
    <Router>
        <ScroolToTop />
        <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<><Header /><Home /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertyone" element={<Propertyone />} />
        <Route path="/propertytwo" element={<Propertytwo />} />
        <Route path="/propertythree" element={<Propertythree />} />
         <Route path="/propertyfour" element={<Propertyfour />} />
          <Route path="/propertyfive" element={<Propertyfive />} />
           <Route path="/propertysix" element={<Propertysix />} />
            <Route path="/propertyseven" element={<Propertyseven />} />
             <Route path="/propertyeight" element={<PropertyEight />} />
              <Route path="/propertynine" element={<Propertynine />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/results" element={<PropertyResults />} />
        <Route path="/resultsTwo" element={<PropertyResultsTwo />} />
        <Route path="/thankyou"  element={<ThankYou />} />
      </Routes>
    </div>
    </Router>
  );
}
export default App;