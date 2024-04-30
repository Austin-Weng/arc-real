import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="headerContainer">
        <h1 className="header">Acropolis Robotics Center</h1>
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
          <Route path="/" exact component={Home} />
          <Route path="/guides" component={Guides} />
          <Route path="/trello" component={Trello} />
          <Route path="/timeline" component={Timeline} />
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return (
    <div className="screen">
      <p>Home Screen</p>
    </div>
  );
}

function Guides() {
  return (
    <div className="screen">
      <p>Guides Screen</p>
    </div>
  );
}

function Trello() {
  return (
    <div className="screen">
      <iframe title="Trello" style={{ width: '100%', height: '100%' }} src="https://trello.com" />
    </div>
  );
}

function Timeline() {
  return (
    <div className="screen">
      <p>Timeline</p>
    </div>
  );
}

export default App;
