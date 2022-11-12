import {useContext} from 'react'
import {UserContext} from '../App'

function ProfilePage () {
    const{user} =useContext(UserContext)

    return (
        <h1 style={{marginTop:'60px'}}>Hello, {user.name}</h1>
    );
  }

  export default ProfilePage;