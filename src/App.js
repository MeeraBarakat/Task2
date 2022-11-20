import './App.css';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './components/Home';
import ProgressPage from './components/ProgressPage';
import ErrorPage from './components/ErrorPage';
import SharedLayout from './components/SharedLayout';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import ProtectedRoute from './components/ProtectedRoute';
import Users from './components/Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='progress' element={<ProgressPage/>}/>   
        <Route path='login' element={<LoginPage/>}/>
        <Route path='profile' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
        <Route path='users' element={<Users/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
