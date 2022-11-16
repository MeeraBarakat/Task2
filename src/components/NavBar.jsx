import {NavLink} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { logout } from "../features/user";

function NavBar () {
  const user= useSelector((state)=>state.user.value);
  const dispatch=useDispatch();

    return (
        <nav className="NavBar">
        <NavLink className="Link" to='/'>Home</NavLink>
        <NavLink className="Link" to='/progress'>Progress</NavLink>
        {user.name? <NavLink className="Link Profile" to='/profile' onClick={()=>dispatch(logout())}>Logout</NavLink> : <NavLink className="Link Profile" to='/profile'>Profile</NavLink>}
      </nav>
    );
  
  }

  export default NavBar;