// import { useLocation } from "react-router-dom";
// import propertiesdata from "../data/Propertiesdata"; // your array

// function SearchResults() {
//   const locationHook = useLocation();
//   const params = new URLSearchParams(locationHook.search);

//   const searchLocation = params.get("location")?.trim().toLowerCase() || "";
//   const searchProperty = params.get("property")?.trim().toLowerCase() || "";
//   const searchBudget = params.get("budget")?.trim().toLowerCase() || "";

//   const filtered = propertiesdata.filter((item) => {
//     const matchLocation =
//       !searchLocation || item.location.toLowerCase() === searchLocation;
//     const matchProperty =
//       !searchProperty || item.type.toLowerCase() === searchProperty;
//     const matchBudget =
//       !searchBudget || item.budget.toLowerCase() === searchBudget;

//     return matchLocation && matchProperty && matchBudget;
//   });

//   return (
//     <div>
//       {filtered.length > 0 ? (
//         filtered.map((p) => (
//           <div key={p.id}>
//             <h2>{p.title}</h2>
//             <p>{p.location} - {p.type} - {p.budget}</p>
//           </div>
//         ))
//       ) : (
//         <p>No matching properties found</p>
//       )}
//     </div>
//   );
// }

// export default SearchResults;



// import { useLocation } from "react-router-dom";
// import propertiesdata from "../data/Propertiesdata";

// export default function SearchResults() {
//   const { search } = useLocation();
//   const params = new URLSearchParams(search);

//   const searchLocation = params.get("location")?.trim().toLowerCase() || "";
//   const searchType = params.get("property")?.trim().toLowerCase() || "";
//   const searchBudget = params.get("budget")?.trim().toLowerCase() || "";

//   const results = propertiesdata.filter(property => {
//     const locationMatch = !searchLocation || property.location.toLowerCase().includes(searchLocation);
//     const typeMatch = !searchType || property.type.toLowerCase().includes(searchType);
//     const budgetMatch = !searchBudget || property.budget.toLowerCase().includes(searchBudget);
//     return locationMatch && typeMatch && budgetMatch;
//   });

//   return (
//     <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
//       {results.length > 0 ? (
//         results.map(p => (
//           <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
//             <img src={p.image} alt={p.type} style={{ width: "100%" }} />
//             <h3>{p.location} - {p.type} -{p.budget}</h3>
//             <a href={p.link}>View Details</a>
//           </div>
//         ))
//       ) : (
//         <p>No matching properties found.</p>
//       )}
//     </div>
//   );
// }