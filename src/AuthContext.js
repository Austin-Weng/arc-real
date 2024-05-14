import React, { createContext, useContext, useEffect, useState } from 'react';
import supabase from './supabaseClient';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = supabase.auth.session();
    setSession(session);
    setLoading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(async (event, session) => {
      setSession(session);
    });

    return () => {
      listener.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ session, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
