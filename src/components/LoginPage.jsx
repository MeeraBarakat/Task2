import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{useDispatch} from "react-redux"
import {login} from "../features/user"

function LoginPage () {
  const[name,setName]=useState(null);
  const[password,setPassword]=useState(null);
  const navigate=useNavigate(null);
  const dispatch=useDispatch();

  function onSubmit(event){
    event.preventDefault();
     dispatch(login({name:name,password:password}))
     navigate('/profile');
  }

    return (
        <div className="contain">
        <div className="cont">
          <div>
            <h1 className="logo">Log In</h1>
            <form id="loginForm" onSubmit={onSubmit}>
                <input className="form-input" placeholder="Name" onChange={(event)=>setName(event.target.value)}/>
                <input className="form-input" type="password" placeholder="Password" onChange={(event)=>setPassword(event.target.value)}/>
                <input className="form-button" type="submit" />             
            </form>
            </div>
        </div>
        </div>
    );
  }

  export default LoginPage;