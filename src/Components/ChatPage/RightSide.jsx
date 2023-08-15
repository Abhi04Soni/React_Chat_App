import React, { useContext } from 'react'
import pic from '../../Images/pic.jpeg'
import Messeges from './Messeges'
import { ChatContext } from '../../context/ChatContext'



function RightSide() {

    const {data} = useContext(ChatContext)
  return (
      <div className="right-container">
          <div className="right-nav">
              <img src={pic} alt=" Image" />
              <div className="name">{data.user?.displayName}</div>
          </div>
          <div className="rightmid">
              <div className="chats">
                  <Messeges/>
              </div>
              <div className="input">
                  <input type="text" name="" id="" />
              </div>
              
          </div>
    </div>
  )
}

export default RightSide