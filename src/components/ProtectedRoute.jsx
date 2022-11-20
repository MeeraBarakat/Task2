import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"


function ProtectedRoute({children}) {
    const state= useSelector((state)=>state.user);
    if(state.isLoading)
    {
      return <h1 style={{'marginTop':'60px'}}>...Loading</h1>
    }
    else{
      console.log(state.value);
     if(!state.value.name){
        return <Navigate to='/login' />
    }
    return children;
  }
  }

  export default ProtectedRoute;