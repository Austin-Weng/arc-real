import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';

import Auth from './Auth';
import Account from './Account';
import Home from './Home';
import Guides from './Guides';
import Trello from './Trello';
import Timeline from './Timeline';
import './App.css';

function App() {
  // const [session, setSession] = useState(null)

  // useEffect(() => {
  //   supabase.auth.getSession().then(({ data: { session } }) => {
  //     setSession(session)
  //   })

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session)
  //   })
  // }, [])

  return (
    //<div className="container" style={{ padding: '50px 0 100px 0' }}>
    //  {!session ? <Auth /> : <Account key={session.user.id} session={session} />}
    //</div>
    // <Router>
    //   <Routes>
    //     {/* <Route path="/login" element={<Auth />} /> */}
    //     <Route path="/" element={ <Home />} />
    //     <Route path="/guides" element={ <Guides />} />
    //     <Route path="/trello" element={ <Trello />} />
    //     <Route path="/timeline" element={<Timeline /> } />
    //     {/* <Route path="/account" element={<Account session={session} />} /> */}
    //   </Routes>
    // </Router>

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
        <Route path="/"  element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/trello" element={<Trello />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
