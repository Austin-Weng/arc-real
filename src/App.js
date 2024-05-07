import React from 'react';
import Iframe from'react-iframe';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="header">Acropolis Robotics Center</h1>
      </div>
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/guides">Guides</Link></li>
            <li><Link to="/trello">Trello</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/trello" element={<Trello />} />
          <Route path="/timeline" element={<Timeline />} />
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
      <Iframe id="trello" src="https://trello.com/b/qzIRAfmd.html" style={{ width: '100%', height: '100%', frameBorder:"0"}}></Iframe>
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
