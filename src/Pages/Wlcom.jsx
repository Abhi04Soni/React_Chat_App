import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import Login from './Login';
// import SignUp from './SignUp';


function Wlcom() {
    const navigate = useNavigate()


  return (
      <div className='formContainer'>
          <div className="formWrapper">
          <h1 className='logo'>Welcome to React Chat Room</h1>
              <button onClick={() => (navigate('/Sign-Up')) }>Create a Account</button>
              <span className='title'>Already a User <Link to={`Login`}> Login </Link></span>
              </div>
             
      </div>
  )
}

export default Wlcom