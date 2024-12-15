import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Weather from './pages/Weather';

const Home = () => (
  <div className="wrapper">
    <h1>WE562 Project React</h1>
    <h2>ID: 67130893</h2>
    <Link to="/weather">
      <button style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
        Weather by Location
      </button>
    </Link>
    <h2>Description</h2>
    <p>
      This project demonstrates 
      <br />A weather application that integrates with various APIs 
      <br />To provide weather information. 
    </p>
    <br />
    <p>
    Below are the key integrations:
    <p><strong>REST Countries API:</strong>
      <br />Provides information about 
      <br />Continents, Countries, and their Capitals.
      <br />-> <a href="https://restcountries.com/" target="_blank" rel="noopener noreferrer">restcountries.com</a></p>
      <p><strong>OpenWeather API:</strong>
      <br />Fetches real-time weather data for the selected city.
      <br />-> <a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">openweathermap.org</a></p>
    </p>
    <br />
    <p>
      Select a Continent, Country, and City 
      <br />To get the current weather information. 
    </p>
    <p>
      The default selection is <br />
      <strong>Asia</strong> > <strong>Thailand</strong> > <strong>Bangkok</strong>.
    </p>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Router>
  );
};

export default App;