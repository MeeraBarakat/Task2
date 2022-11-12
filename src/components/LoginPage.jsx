import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useContext} from 'react'
import {UserContext} from '../App'

function LoginPage () {
  const[name,setName]=useState(null);
  const[password,setPassword]=useState(null);
  const navigate=useNavigate(null);
  const{setUser} =useContext(UserContext);

  function onSubmit(event){
    event.preventDefault();
    setUser({name:name,password:password});
    navigate('/profile');
  }

    return (
        <div className="contain">
        <div className="cont">
            <h1 className="logo">Log In</h1>
            <form id="loginForm" onSubmit={onSubmit}>
                <input className="form-input" placeholder="Name" onChange={(event)=>setName(event.target.value)}/>
                <input className="form-input" type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
                <input className="form-button" type="submit" />             
            </form>
        </div>
        </div>
    );
  }

  export default LoginPage;