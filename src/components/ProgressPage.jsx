import ProgressBar from './ProgressBar';
import map from "lodash/map"
import { useReducer } from 'react';

const reducer=(state,action)=>{
  switch(action.type){
    case "coloring":
      return{bars:state.bars,color:action.color,error:state.error,title:state.title}
    case "erroring":
      return{bars:state.bars,color:state.color,error:action.error,title:state.title}
    case "newBar":
      return{bars:[...state.bars,{barColor:state.color,title:state.title}],color:state.color,error:state.error,title:state.title}
    case "titling":
      return{bars:state.bars,color:state.color,error:state.error,title:action.title} 
    default:
      return state
  }
}

function ProgressPage() {
  const [state,dispatch]=useReducer(reducer,{bars:[{barColor:"green",title:'Page'}],color:'green',error:null,title:null});
  var s = new Option().style;

  function handleClick(){
    if(state.color==='')
    {
      dispatch({type:"coloring",color:'green'});
      dispatch({type:"newBar",bar:{barColor:'green',title:state.title}});
    }
    else dispatch({type:"newBar",bar:{barColor:state.color,title:state.title}});
  }

  function handleColor(inColor){
    dispatch({type:"coloring",color:inColor});
    s.color=inColor;
    if(s.color === inColor)
    {
      dispatch({type:"erroring",error:false});
    }
    else dispatch({type:"erroring",error:true});
  }

  return (
    <>
    <div className='form-container'>
    <input style={{marginTop:'70px'}} onChange={(event)=>{dispatch({type:"titling",title:event.target.value})}} placeholder='Title'></input>
    <input onChange={(event)=>handleColor(event.target.value)} placeholder='Color'></input>
    <button className='add-button' disabled={state.error} onClick={handleClick}>Add</button>
    </div>
    {
       map(state.bars,(bar,idx)=>(
        <ProgressBar key={idx} bar={bar}/>))
    }
    </>
  );
}

export default ProgressPage;
