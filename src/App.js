import './App.css';
import React,{useEffect, useState,useRef} from 'react';

const ProgressBar = ({bar}) => {
  const [progress,setProgress] = useState(0);

  useEffect(()=>{
    if(progress<100)
    {
      setTimeout(()=>setProgress(progress+10), 1000)
    }
},[progress]);
 
  return (
    <div className='progressContainer'>   
      <span className='details'>{progress}%</span>
      <span className='details' style={{left: '0'}}>{bar.title}</span>
  <div className='innerContainer' style={{width:`${progress}%`,  backgroundColor: `${bar.barColor}`}} >
  </div>
</div>
  );

}

function App() {
  const [bars,setBars] = useState([{barColor:"green",title:'Page'}]);
  const [error,setError] = useState('');
  const color=useRef('');
  const title=useRef('');

  function handleClick(){
    if(color.current.value==='')
    color.current.value='green';
    setBars(bars =>[...bars,{barColor:color.current.value,title:title.current.value}])
  }

  function isColor(strColor){
  var s = new Option().style;
  s.color = strColor;
  return s.color === strColor;
}

  function handleColor(){
    if(isColor(color.current.value)===false)
    {
      setError(true);
    }
    else setError(false);
  }

  return (
    <>
    <div className='formContainer'>
    <input placeholder='Title' ref={title}></input>
    <input onChange={handleColor} placeholder='Color' ref={color}></input>
    <button disabled={error} onClick={handleClick}>Add</button>
    </div>
    {bars.map((bar,idx)=>(
    <ProgressBar key={idx} bar={bar} />
    ))}
    </>
  );
}

export default App;
