import NormalHome from './Home/NormalHome';
import React from 'react';
import { User } from './Types/types';
import Register from './Register/Register';
import LoginedHome from './Home/LoginedHome';

function Router({user, setUser} : {user: User, setUser: React.Dispatch<React.SetStateAction<User>>}) {
  return (
    <></>
  )
}

export default Router;