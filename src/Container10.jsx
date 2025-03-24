import { useEffect, useState } from "react";
import axios from "axios";
import './JokeList.css';


const Container10 = () => {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/jokes/11")
      .then(response => {
        console.log("API Response:", response.data); // Debugging log
        setJoke(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching news:", error);
        setError("Failed to load news.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!joke || Object.keys(joke).length === 0) {
    return <div>No news found.</div>;
  }

  return (
    <div className="containerr">
      <a href="#" target="_blank" className="border-boxx">
      <div className="joke-card">
        {joke.image_url ? (
          <img src={joke.image_url} alt="Joke" className="joke-image" />
        ) : (
          <p>No image available</p>
        )}
        <div className="joke-content">
        
          <span><strong>{joke.category || "Unknown Category"}:</strong></span> <br />
          <p className="text">{joke.joke_text || "No joke text available."}</p>
        </div>
        {joke.link && (
          <div className="joke-link">
            <a href={joke.link} target="_blank" rel="noopener noreferrer">View</a>
          </div>
        )}
      </div>
      </a>
    </div>
    
  );
};

export default Container10;