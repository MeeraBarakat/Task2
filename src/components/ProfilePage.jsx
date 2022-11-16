import {useSelector} from "react-redux"

function ProfilePage () {
    const user= useSelector((state)=>state.user.value);

    return (
        <h1 style={{marginTop:'60px'}}>Hello, {user.name}</h1>
    );
  }

  export default ProfilePage;