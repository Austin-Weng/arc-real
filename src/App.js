import React, { useState, useEffect } from 'react';
import supabase from './supabaseClient';

import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import { AuthProvider } from './AuthContext';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Home from './Home';
import Guides from './Guides';
import Trello from './Trello';
import Timeline from './Timeline';
import './App.css';

function App() {

  useEffect(() => {
    const session = supabase.auth.session();
    console.log('Current session:', session);

    supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Session changed:', session);
    });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }/>
          <Route path="/guides" element={
            <ProtectedRoute>
              <Guides />
            </ProtectedRoute>
          }/>
          <Route path="/trello" element={
            <ProtectedRoute>
              <Trello />
            </ProtectedRoute>
          }/>
          <Route path="/timeline" element={
            <ProtectedRoute>
              <Timeline />
            </ProtectedRoute>
          }/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
export default App;
