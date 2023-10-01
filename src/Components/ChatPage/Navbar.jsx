import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../../Firebase/Firebase'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      {/* <span className="logo">React Chat App</span> */}
      <div className='user'>
        <img className='profile' src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar