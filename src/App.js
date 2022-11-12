import './App.css';
import React, { useState,createContext } from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import ProgressPage from './components/ProgressPage';
import ErrorPage from './components/ErrorPage';
import SharedLayout from './components/SharedLayout';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import Weather from './components/weather';

export const UserContext=createContext(null);

function App() {
  const [user,setUser]=useState(null);
  return (
    <UserContext.Provider value={{user,setUser}}>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='weather' element={<Weather/>}/>
        <Route path='progress' element={<ProgressPage/>}/>   
        <Route path='login' element={<LoginPage/>}/>
        <Route path='profile' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
    </UserContext.Provider>
  );
}

export default App;
