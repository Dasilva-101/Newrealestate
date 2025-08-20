// src/pages/PropertyResults.jsx
import React from "react";
import { useLocation, useNavigate,Link } from "react-router-dom";
import ScroolToTop from "../Scroll/ScroolToTop";

export default function PropertyResults() {
     const navigate = useNavigate();
 const location = useLocation();
  const results = location.state?.results || [];

  if (!results) {
    return <h2 className="text-center mt-5">No property found</h2>;
  }

  return (
     <div style={{padding: '4rem'}}>
      <h2>Search Results</h2>
      {results.length > 0 ? (<div className="row  g-4">
  {results.map(property => (
    <div className="col-md-4" key={property.id}>
      <div className="card h-100">
        <img src={property.Image} className="card-img-top" alt={property.title} style={{objectFit: 'cover', height: '250px '}}/>
             <div className="card-body">
                <h5 className="card-title text-center fw-bold">{property.name}</h5>
                <p className="card-text fw-bold text-center">{`🛏${property.type}`}</p>
                <p className="card-text fw-bold text-center">{property.city}</p>
                  <p className="fs-5 text-success text-center">{`₦${property.price}`}</p>
                  <div className="text-center">
                    <Link to={property.link} className="btn btn-primary ">View Details</Link>
                  </div>
                  </div>  
                  </div>
                  </div>
      
  ))}
</div>) : ( <p className="fw-bold">No property Available at the moment. please select other options</p> )}
</div>
  )

}