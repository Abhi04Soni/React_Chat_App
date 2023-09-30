import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'


function Login () {
  const [err, seterr] = useState(false)
  const navigate = useNavigate()

  const loginSubmitHandler = async e => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value

    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/ChatPage')
      console.log('login Success')
    } catch (err) {
      console.log(err)
      // err = True
      seterr(true)
    }
  }
    return (
      <div className='formContainer'>
        <form className='formWrapper' onSubmit={loginSubmitHandler}>
          <span className="title">Email</span>
          <input type='email' />
          <span className="title">Password</span>
          <input type='password' />

          <button>Login</button>
          {err && <span className='title'> Something went wrong</span>}
        </form>
      </div>
    )
  }
// }

export default Login
