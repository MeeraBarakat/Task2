import { Navigate } from "react-router-dom";
import {useSelector} from "react-redux"


function ProtectedRoute({children}) {
    const user= useSelector((state)=>state.user.value)
     if(!user.name){
        return <Navigate to='/login' />
    }
    return children;
  }

  export default ProtectedRoute;