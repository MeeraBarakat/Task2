import './App.css';
import React, { useState } from 'react';
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import ProgressPage from './components/ProgressPage';
import ErrorPage from './components/ErrorPage';
import SharedLayout from './components/SharedLayout';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user,setUser]=useState(null);
  return (
    <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='progress' element={<ProgressPage/>}/>
        <Route path='login' element={<LoginPage setUser={setUser}/>}/>
        <Route path='profile' element={<ProtectedRoute user={user}><ProfilePage user={user}/></ProtectedRoute>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
