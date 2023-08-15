import React from 'react'
import RightSide from '../Components/ChatPage/RightSide'
import LeftSide from '../Components/ChatPage/LeftSide'
import './ChatPage.css'

function ChatPage () {
  return (
    <div className='chat-container'>
      <div className='mid'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}

export default ChatPage
