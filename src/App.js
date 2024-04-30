import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div class="container">
      <div class="headerContainer">
        <h1 class="header">Acropolis Robotics Center</h1>
      </div>
      <Router>
        <nav style={{ backgroundColor: '#598cde', color: 'white' }}>
          <ul style={{ listStyleType: 'none', display: 'flex' }}>
            <li><Link to="/" style={{ color: 'white', padding: 10 }}>Home</Link></li>
            <li><Link to="/guides" style={{ color: 'white', padding: 10 }}>Guides</Link></li>
            <li><Link to="/trello" style={{ color: 'white', padding: 10 }}>Trello</Link></li>
            <li><Link to="/timeline" style={{ color: 'white', padding: 10 }}>Timeline</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/guides" element={<Guides/>} />
          <Route path="/trello" element={<Trello/>} />
          <Route path="/timeline" element={<Timeline/>} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div class="screen">
      <p class="body-text">Home Screen</p>
    </div>
  );
}

function Guides() {
  return (
    <div class="screen">
      <p class="body-text">Guides Screen</p>
    </div>
  );
}

function Trello() {
  return (
    <div class="screen">
      <iframe id="trello" src="https://trello.com/" ></iframe>
    </div>
  );
}

function Timeline() {
  return (
    <div class="screen">
      <p class="body-text">Timeline</p>
    </div>
  );
}

export default App;
