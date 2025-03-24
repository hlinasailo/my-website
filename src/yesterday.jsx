import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import Footer from "./footer.jsx"; // Ensure Footer is included
import Container10 from "./Container10.jsx";
import Container11 from "./Container11.jsx";
import Container12 from "./Container12.jsx";
import Container13 from "./Container13.jsx";
import Container14 from "./Container14.jsx";
import Container15 from "./Container15.jsx";
import Container16 from "./Container16.jsx";
import Container17 from "./Container17.jsx";

const yesterday = () => {
  return (
    <div className="p-0">
      
      
      <center><h2> <span>Yesterday's</span> Top Products</h2></center>
      <br />
                  <Container10 />
                  <Container11 />
                  <Container12 />
                  <Container13 />
                  <Container14 />
                  <Container15 />
                  <Container16 />
                  <Container17 />

      {/* Back to Home Button */}
     

      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default yesterday;
