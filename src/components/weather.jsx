import { useEffect,useState } from "react";
import axios from "axios";
import map from "lodash/map"

function Weather () {
    const[data,setData]=useState();

    useEffect(()=>{
        axios.get("https://myfakeapi.com/api/users/").then((response)=>{
            setData(response.data.Users);
            console.log(response.data.Users)
        })
    },[])

    function findMostExpensive(data){
        if (!data) return null;
        let motExp=0;

    }

    return (
        map(data,(user,idx)=>(
            <>
            <img src={user.avatar}/>
            <h1 style={{marginTop:'30px',display:"inline"}} key={idx}>{user.first_name}</h1>
            </>
        ))
    );
  }

  export default Weather;