import {NavLink} from "react-router-dom";

function NavBar ({bar}) {
    return (
        <nav className="NavBar">
        <NavLink className="Link" to='/'>Home</NavLink>
        <NavLink className="Link" to='/progress'>Progress</NavLink>
        <NavLink className="Link Profile" to='/profile'>Profile</NavLink>
      </nav>
    );
  
  }

  export default NavBar;