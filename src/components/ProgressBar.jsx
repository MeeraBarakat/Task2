import React,{useEffect, useState} from 'react';
import { IoMdRedo } from 'react-icons/io';

function ProgressBar ({bar}) {
    const [progress,setProgress] = useState(0);
  
    useEffect(()=>{
      if(progress<100)
      {
        const timer=setTimeout(()=>setProgress(progress+10), 1000)
        return ()=>clearTimeout(timer)
      }
  },[progress]);

  function handleClick()
   {
    setProgress(0)
   }
   
    return (
      <div className='progress-container'> 
      <h1><IoMdRedo className='restart-icon' onClick={handleClick} /></h1>
        <span className='details'>{progress}%</span>
        <span className='details' style={{left: '0'}}>{bar.title}</span>
    <div className='inner-container' style={{width:`${progress}%`,  backgroundColor: `${bar.barColor}`}} >
    </div>
  </div>
    );
  
  }

  export default ProgressBar;