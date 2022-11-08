import './App.css';
import React,{useState} from 'react';
import ProgressBar from './components/ProgressBar';
import map from "lodash/map"
import {Link, Route,Routes} from 'react-router-dom'

function App() {
  const [bars,setBars] = useState([{barColor:"green",title:'Page'}]);
  const [error,setError] = useState('');
  const [color,setColor] = useState('');
  const [title,setTitle] = useState('');
  var s = new Option().style;

  function handleClick(){
    if(color==='')
    {
      setColor('green')
      setBars(bars =>[...bars,{barColor:'green',title:title}])
    }
    else setBars(bars =>[...bars,{barColor:color,title:title}])
  }

  function handleColor(inColor){
    setColor(inColor)
    s.color=inColor;
    if(s.color === inColor)
    {
      setError(false);
    }
    else setError(true);
  }

  return (
    <>
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/progress'>progress</Link>
      </nav>
    <Routes>
      
      <Route path='/' element={<h1>Hello World</h1>}/>
    <Route path='progress' element={<h1>Progress</h1>}/>
    
    </Routes>
    </>
  );
}

{/* <div className='form-container'>
    <input onChange={(event)=>{setTitle(event.target.value)}} placeholder='Title'></input>
    <input onChange={(event)=>handleColor(event.target.value)} placeholder='Color'></input>
    <button className='add-button' disabled={error} onClick={handleClick}>Add</button>
    </div>
    {
       map(bars,(bar,idx)=>(
        <ProgressBar key={idx} bar={bar} />))
    } */}

export default App;
