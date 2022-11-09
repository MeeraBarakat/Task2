import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function SharedLayout () {
    return (
        <>
          <NavBar/>
          <Outlet/>
        </>
    );
  }

  export default SharedLayout;