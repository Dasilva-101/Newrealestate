import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScroolToTop from "../Scroll/ScroolToTop";

export default function PropertyResultsTwo() {
 const location = useLocation();
  const navigate = useNavigate();
  const { Property } = location.state || {};

  if (!Property) {
    return <h2 className="text-center mt-5">No property found</h2>;
  }

  return (
    
    <div className="container mt-5">
        <ScroolToTop />
        <div className="text-center"><h1>Available Properties</h1></div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center shadow-lg">
            <img
            src="/images/newhouse6.jpg"
              className="card-img-top"
            />
            <div className="card-body">
              <h2 className="card-title">{Property.location}</h2>
              <h4 className="mt-4">5 Bedrooms</h4>
               <h4 className="mt-4">2 Toilet</h4>
              <p className="card-text fw-bold mt-4">
                ₦{Property.price.toLocaleString()}
              </p>
              <button
                className="btn btn-dark"
                onClick={() => navigate(Property.link)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}