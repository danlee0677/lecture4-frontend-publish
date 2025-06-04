import { Route, Routes } from 'react-router-dom'
import NormalHome from './Home/NormalHome';
import React from 'react';
import { User } from './Types/types';
import Register from './Register/Register';
import LoginedHome from './Home/LoginedHome';

function Router({user, setUser} : {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) {
  return (
    <Routes>
      <Route index element={user.username === "" ? <NormalHome setUser={setUser} /> : <LoginedHome user={user} setUser={setUser} />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}

export default Router;