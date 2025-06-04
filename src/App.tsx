import React from 'react';
import './App.css';
import Router from './Routes';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: "",
    password: "",
    roles: [] as string[],
    asset: 0
  });

  return (
    <Router user={user} setUser={setUser} />
  );
}

export default App;
