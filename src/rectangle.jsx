import React, { useState, useEffect } from "react";
import './SimpleBorder.css';

const Rectangle = () => {
    const [isVisible, setIsVisible] = useState(window.innerWidth >= 600);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= 600);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    if (!isVisible) return null; // Hide the rectangle on small screens

    return (
        <div className="rectangle">
            <h4><u>Thread Treading</u></h4>
            <button className="rectangle-button"><h6>N/superbase</h6><br /><p>AMW/super base</p></button>
            <button className="rectangle-button"><h6>N/john</h6><br /><p>ER/game time</p></button>
            <button className="rectangle-button"><h6>N/may</h6><br /><p>ATRW/ramp base</p></button>
            <button className="view">View more</button>         
        </div>
        
    );
};

export default Rectangle;



