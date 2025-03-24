import React, { useEffect } from "react";
import './SimpleBorder.css';
import { CLink } from "@coreui/react";

function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js";
    script.onload = () => {
      if (window.Chatbot) {
        window.Chatbot.init({
          chatbotId: "6e3f0b4b-9e77-4689-87d3-811e433490c3",
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup script on unmount
    };
  }, []);

  return (
    <footer className="footer">
      <div>
        <CLink href="https://coreui.io">CoreUI</CLink>
        <span> &copy; 2025 <br />creativeLabs.</span>
      </div>
      <div>
        <span>Powered by <br /></span>
        <CLink href="https://coreui.io">CoreUI</CLink>
      </div>
    </footer>
  );
}

export default Footer;
