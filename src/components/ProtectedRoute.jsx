import { Navigate } from "react-router-dom";
import {useContext} from 'react'
import {UserContext} from '../App'

function ProtectedRoute({children}) {
    const{user} =useContext(UserContext)

    if(!user){
        return <Navigate to='/login' />
    }
    return children;
  }

  export default ProtectedRoute;