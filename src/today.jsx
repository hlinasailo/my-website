import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import Footer from "./footer.jsx"; // Ensure Footer is included
import Container from "./Container.jsx";
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";
import Container4 from "./Container4.jsx";
import Container5 from "./Container5.jsx";
import Container6 from "./Container6.jsx";
import Container7 from "./Container7.jsx";
import Container8 from "./Container8.jsx";
import Container9 from "./Container9.jsx";

const Today = () => {
  return (
    <div className="p-0">
      
      
      <center><h2>Top <span>Products Launching</span> Today</h2></center>
      <br />
      <Container />
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Container5 />
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />

      {/* Back to Home Button */}
     

      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Today;
