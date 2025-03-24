import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

import Footer from "./footer.jsx"; // Ensure Footer is included

import Container18 from "./Container18.jsx";
import Container19 from "./Container19.jsx";
import Container20 from "./Container20.jsx";
import Container21 from "./Container21.jsx";
import Container22 from "./Container22.jsx";
import Container23 from "./Container23.jsx";
import Container24 from "./Container24.jsx";
import Container25 from "./Container25.jsx";
import Container26 from "./Container26.jsx";
import Container27 from "./Container27.jsx";
import Container28 from "./Container28.jsx";
import Container29 from "./Container29.jsx";

const Week = () => {
  return (
    <div className="p-0">
      <center>
        <h2> <span>Last Weeks's</span> Top Products</h2>
      </center>
      <br />

      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
      <Container27 />
      <Container28 />
      <Container29 />

      <Footer /> {/* Add Footer */}
    </div>
  );
};

export default Week;
