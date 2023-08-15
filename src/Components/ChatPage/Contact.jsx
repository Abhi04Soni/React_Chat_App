import React from 'react'
import '../../Pages/ChatPage.css'
import pp from '../../Images/pic.jpeg'
// import { AuthContext } from '../context/AuthContext'


function Contact(props) {
  // const { currentUser } = useContext(AuthContext)
  return (
      <div className='contact'>
          <img src={props.photoURL} alt=" Image" />
          <div className="text">
              <div className="name">{props.name}</div>
              <div className="message">{props.lastmessage}</div>
        </div>
    </div>
  )
} 

export default Contact