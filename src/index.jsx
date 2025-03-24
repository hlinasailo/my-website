import React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "@coreui/coreui/dist/css/coreui.min.css";
import { NavbarExample } from "./NavbarExample.jsx";
import Footer from "./footer.jsx";
import Today from "./today.jsx";
import Yesterday from "./yesterday.jsx";
import Week from "./week.jsx";
import Container from "./Container.jsx";
import Rectangle from "./rectangle.jsx";
import "./App.css";
import Container1 from "./Container1.jsx";
import Container2 from "./Container2.jsx";
import Container3 from "./Container3.jsx";
import Container4 from "./Container4.jsx";
import Container5 from "./Container5.jsx";
import Container6 from "./Container6.jsx";
import Container7 from "./Container7.jsx";
import Container10 from "./Container10.jsx";
import Container11 from "./Container11.jsx";
import Container12 from "./Container12.jsx";
import Container13 from "./Container13.jsx";
import Container14 from "./Container14.jsx";
import Container15 from "./Container15.jsx";
import Container18 from "./Container18.jsx";
import Container19 from "./Container19.jsx";
import Container20 from "./Container20.jsx";
import Container21 from "./Container21.jsx";
import Container22 from "./Container22.jsx";

// Home Page Component
const Home = () => (
  <div className="p-0">
    <div className="flex-container">
      <div className="container-group">
        <h2>Top <span>Products Launching</span> Today</h2>
        <Container />
        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />
        <Container6 />
        <Container7 />
        <Link to="/today" className="vm-link">
          <button className="vm">View more</button>
        </Link>
      </div>
      <Rectangle />
    </div>

    <div className="flex-container">
      <div className="container-group">
        <h3>Yesterday's Top <span>Products</span></h3>
        <Container10 />
        <Container11 />
        <Container12 />
        <Container13 />
        <Container14 />
        <Container15 />
        <Link to="/yesterday" className="vm-link">
          <button className="vm">View more</button>
        </Link>
      </div>
    </div>

    <div className="flex-container">
      <div className="container-group">
        <h3>Last Week's Top <span>Products</span></h3>
        <Container18 />
        <Container19 />
        <Container20 />
        <Container21 />
        <Container22 />
        <Link to="/week" className="vm-link">
          <button className="vm">View more</button>
        </Link>
      </div>
    </div>

    <Footer />
  </div>
);

// Fallback Component for Undefined Routes
const NotFound = () => (
  <div style={{ padding: "20px" }}>
    <h2>Page Not Found</h2>
    <p>The requested URL was not found on this server.</p>
    <Link to="/">Return to Home</Link>
  </div>
);

// Main App Component
const App = () => {
  return (
    <Router basename="/my-website">
      <NavbarExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/today" element={<Today />} />
        <Route path="/yesterday" element={<Yesterday />} />
        <Route path="/week" element={<Week />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Render the App
ReactDOM.createRoot(document.querySelector("#root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);