import React from 'react'
import { Link, useNavigate } from "react-router-dom";
// import Login from './Login';
// import SignUp from './SignUp';


function Wlcom() {
    const navigate = useNavigate()


  return (
      <div className='wlcm-container'>
          <h1>Welcome to React Chat Room</h1>
          <div className="butts">
              <button onClick={() => (navigate('/Sign-Up')) }>Create a Account</button>
              <span>Already a User <Link to={`Login`}> Login </Link></span>
          </div>
      </div>
  )
}

export default Wlcom