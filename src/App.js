import './App.css';
import React,{useEffect, useState,useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProgressBar = (props) => {
  const [progress,setProgress] = useState(0);

   
    useEffect(()=>{
      
setTimeout(function(props) {
  if(progress<100)
  {
    setProgress(progress+10)
  }
}, 1000);
    },[progress]);
 
  return (
    <div className='progreddContainer'>   
  <div className='innerContainer' style={{width:`${progress}%`,  backgroundColor: `${props.item.barColor}`}} >
  <span className='percentage'>{`${progress}%`}</span>
  </div>
</div>
  );
};

function App() {
  const [bars,setBars] = useState([{barColor:"red"}]);
  const inColor=useRef('');

  function handleClick(){
    console.log();
    setBars(bars =>[...bars,{barColor:inColor.current.value}])
    console.log(bars.length)
  }

  return (
    <div>
    <div className='myRoot'>
    <label>Color:</label>
    <input ref={inColor}></input>
    <label>Title:</label>
    <input ref={inColor}></input>
    <button className="btn btn-outline-primary btn-sm addP" onClick={handleClick}>Add progress</button>
    </div>
     <div>
    {bars.map(item=>(
    <ProgressBar item={item} />
    ))}
    </div>
    </div>
  );
}

export default App;
