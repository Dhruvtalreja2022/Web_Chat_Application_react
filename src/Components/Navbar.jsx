import React, { useContext } from 'react'
import {signOut} from "firebase/auth";
import {AuthContext} from "../Context/AuthContext";
import { auth } from "../firebase";
const Navbar = () => {
  const {currentUser} = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'> Chat Application</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt=''/>
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logut</button>
      </div>
      </div>
  )
}

export default Navbar