import React, { useEffect, useState } from "react";
import './Header.css';
import { Link, useNavigate } from "react-router-dom";
import Lagoslocations from "../data/Lagoslocations";
import propertyLinks from "../data/propertyLinks";
import Propertytypes from "../data/Propertytypes";
import Propertiesdata from "../data/Propertiesdata";
import properties from "../data/properties"




function Header() {
  const properties = [
    {
        "id": 1,
        "name": "Lekki Ajah Lagos",
        "city": "ajah",
        "price": "230000000",
        "type": "duplex",
        "Image": "/images/newhouse2.jpg",
        'range': '100-300',
        'link': '/propertyone'
    },
     {
        "id": 2,
        "name": "Lekki Ajah Lagos",
        "city": "ajah",
        "price": "200000000",
        "type": "duplex",
        "Image": "/images/newhouse.jpg.jpg",
        "range": "100-300",
        'link': '/propertytwo'
    },
     {
        "id": 3,
        "name": "Victoria Island Lagos",
        "city": "Victoria Island",
        "price": "600000000",
        "type": "semi-detached house",
        "Image": "/images/newhouse4.jpg",
        "range": "300-900",
        "link": "/propertyfour"
    },
     {
        "id": 4,
        "name": "Ikoyi Lagos",
        "city": "ikoyi",
        "price": "30000000",
        "type": "Apartment",
        "Image": "/images/newhouse3.jpg",
        "range": "300-900",
        "link" : "/propertythree"
    },
     {
        "id": 5,
        "name": "Ajah Lekki Lagos",
        "city": "Ajah",
        "price": "120000000",
        "type": "Apartment",
        "Image": "/images/newhouse6.jpg",
        "range": "100-300",
        "link": "/propertysix"
        
    },
     {
        "id": 6,
        "name": "Ikorodu Lagos",
        "city": "Ikorodu",
        "price": "300000000",
        "type": "Bungalow",
        "Image": "/images/newhouse5.jpg",
        "range": "300-900",
        "link": "/propertyfive"
    },
      {
        "id": 7,
        "name": "Ikorodu Lagos",
        "city": "Ikorodu",
        "price": "50000000",
        "type": "land",
        "Image": "/Video/land1.MP4",
        "range": "50-100",
        "link": "/propertyEight"
    },
      {
        "id": 8,
        "name": "Ikorodu Lagos",
        "city": "Ikorodu",
        "price": "60000000",
        "type": "land",
        "Image": "/Video/land2.MP4",
        "range": "300-900",
        "link": "/propertynine",
    },
]

  
  const toggleMenu = () => {
    console.log("Menu toggled");
  };
  const images = [
    '/images/newhouse2.jpg',
    '/images/newhouse.jpg.jpg',
    '/images/newhouse4.jpg',
    '/images/newhouse3.jpg'
  ];

  const videos = [
    "/Video/land1.MP4",
    "/Video/land2.MP4"
  ]
  const [isLoading, setIsLoading] = useState(false)

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() =>{
    const interval = setInterval(() =>{
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 2000);
    return() => clearInterval(interval);
  }, [images.length]);

   const[ location, setLocation] = useState("");
   const[Property, setProperty] = useState("");
   const[budget, setBudget] = useState("");
   const [filteredProperties, setFilteredProperties] = useState([])
   const navigate = useNavigate();

//  const normalizeBudget = (value) => {
//    return value
//    .toLowerCase()
//    .replace(/,/g,"")
//    .replace(/\s+/g, "")
//    .replace(/m$/, "million")
//  };

   const handleLocationChange = (e) =>{
     setLocation(e.target.value);
   }

   const handlePropertyChange = (e) =>{
     setProperty(e.target.value);
   }

    const handleBudgetChange = (e) =>{
     setBudget(e.target.value);
   }



  function handleSearch() {
    setIsLoading(true)
    const filtered = properties.filter((p) => {
       const city = p.city.toLowerCase() === location.toLowerCase() 
       const property = p.type.toLowerCase() === Property.toLowerCase()
       const range = p.range === budget;
       const matched = city && property && range;
       return matched;
    })

    // Navigate to results page and pass data
   setTimeout(() => {
      navigate('/results', { state: { results: filtered } });
       setIsLoading(false)
   }, 3000)
  
  }
   
   

  //  const handleSearch = () => {
  //   const key = `${location.toLowerCase()}-${Property.toLowerCase()}-${budget}`;

  //   const propertyData = propertyLinks[key];
  //   if (propertyData) {
  //     navigate("/results", {state: {Property: propertyData}})
    

  //   }
   
  
  //   // const key = `${location}-${Property}-${budget}`.toLowerCase();
  //   // const route = propertyLinks[key];

  //   // if (route){
  //   //   navigate(route)
  //   // }else{
  //   //   alert("No Property available at the moment")
  //   // }
  //  };
  //  const handleSearch = () => {
  // Convert inputs to lowercase for case-insensitive matching
  // const searchLocation = location.trim().toLowerCase();
  // const searchProperty = Property.trim().toLowerCase();
  // const searchBudget = budget.trim().toLowerCase();

  // Loop through propertyLinks to find a match
  // const matches = Object.entries(propertyLinks).filter(([key, value]) => {
    // const [loc, prop, bud] = key.split("-");

    // Match only the fields the user has entered
      // const locationMatch = !searchLocation ||loc.includes(searchLocation);
    // const propertyMatch = !searchProperty || prop.includes(searchProperty);
    // const budgetMatch = !searchBudget || bud.includes(searchBudget);
    // return locationMatch && propertyMatch && budgetMatch;
  
  // });

  // if (matches.length > 0) {
    // navigate("/Search-Results", { state:{ Results:matches}});
    // navigate(`/search?location=${location}&property=${Property}&budget=${budget}`); // foundLink[1] is the URL
  // } else {
    // alert("No property available at the moment");
  // }
// };
  //  const handleSearch = () => {
  //   const key = `${location.toLowerCase()}-${Property.toLowerCase()}-${budget.toLowerCase()}`;
  //   if (propertyLinks[key]) {
  //     navigate(propertyLinks[key]);
  //   }else{
  //     alert("No property available at the moment");
  //   }
  //  };
   
  return (
        <header 
        className="hero-section"
        style={{
           backgroundImage: `url(${images[currentImageIndex]})`,
           color: '#fff'
        }}
        >
      
         <div className="overlay "></div>
      <div className="big animate-hero ">
        <div className="container">
          <div class="head">
               <div className="  fw-bold fs-5 ">
           <h1 className="text-center"> Find A House That Suits You </h1>
          <p className=" fs-4 text-center">
            Want to find a House or Property? We are ready to help you find <br /> one that suits your lifestyle and needs
              <div className=""><a href="#middle" className="btn">Get Started</a></div>
              <div className="d-flex justify-content-center">
                 <div className="d-flex gap-4 mt-4  fs-4 ms-1 ">
            <div><strong>8</strong><br />Listed Properties</div>
            <div><strong>15+</strong><br />Happy Customers</div>
            <div><strong>2</strong><br />Awards</div>
          </div>
              </div>
          </p>
          </div>
        </div>
        </div>
      </div>


      <div className="Listings mt-5 animate-search">
<div className="container position-relative z-3">
  <div className="bg-white p-4 rounded shadow-lg mx-auto">
    <h6 className="mb-3 fw-bold">Search for available properties</h6>

    <div className="row g-2 align-items-center">
      
        <div className="col-md">
      {/* <input
        type="text"
        list="lagos-location-list"
        className="form-control form-control-sm"
        placeholder="Type location..."
        value={location}
        onChange={handleLocationChange}
      /> */}

      
        <select className="form-control form-control-sm" name="lagos-location" id="lagos-location" onChange={handleLocationChange} required>
          <option value="" selected required>Select Location</option>
        {Lagoslocations.map((l, index) => {
          return <option value={l}>{l}</option>
        })}
      </select>
      
   
      <datalist id="lagos-location-list">
        {Lagoslocations.map((location, index) => (
          <option key={index} value={location} />
        ))}
      </datalist>
    </div>


      <div className="col-md">

        <input
        type="text"
        list="Property-types-list"
        className="form-control form-control-sm"
        placeholder="Type Property type..."
        value={Property}
        onChange={handlePropertyChange}
        required
      />
          <datalist id="Property-types-list">
        {Propertytypes.map((Property, index) => (
          <option key={index} value={Property} />
        ))}
      </datalist>
        {/* <select className="form-select form-select-sm">
          <option selected>Property Type</option>
          <option value="1">Duplex</option>
          <option value="2">Apartment</option>
          <option value="3">Bungalow</option>
          <option value="4">Land</option>
          <option value="5">Semi-detached House</option>
          <option value="6">Shops</option>
          <option value="7">Hotel</option>
          <option value="8">Studio Apartment</option>
        </select> */}
       {/* <input
       type="text"
       placeholder="Enter property type"
       value={type}
       onChange={(e)=> setType(e.target.value)}
       /> */}
      </div>

      <div class="col-md">
        {/* <select className="form-select form-select-sm">
          <option selected>Budget</option>
          <option value="1">Less than #50m</option>
          <option value="2">₦50m - ₦100m</option>
          <option value="3">₦100m - ₦300m</option>
          <option value="4">₦300m and above</option>
        </select> */}
        {/* <input
        type="text"
        placeholder="Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        /> */}
           {/* <input
        type="text"
        list="Budget-types-list"
        className="form-control form-control-sm"
        placeholder="Type Budget..."
        value={budget}
        onChange={handleBudgetChange}
      />
          <datalist id="Property-types-list">
        {Propertytypes.map((Property, index) => (
          <option key={index} value={Property} />
        ))}
      </datalist> */}
      <select value={budget} onChange={handleBudgetChange} className="form-control form-control-sm" required>
       <option value=""> Select Budget</option>
       <option value="less-50"> 0 to 50m</option>
       <option value="50-100"> 50m to 100m</option>
       <option value="100-300">100m to 300m</option>
       <option value="300-900">300m to 900m</option>
      </select>
      </div>

      <div className="col-md-auto">
        <button className="btn btn-dark btn-sm w-100" onClick={handleSearch} type="submit">Search Now</button>
      </div>
      {isLoading && <div className="d-flex justify-content-center align-items-center">
  <div className="spinner-border text-black" role="status" style={{width: '2rem', height: '2rem'}}>
    <span class="visually-hidden">Loading...</span>
  </div>
</div>

}
    </div>
  </div>
</div>
      </div>  
    </header>   
  );
}

export default Header;
