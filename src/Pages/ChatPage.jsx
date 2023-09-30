import React from 'react'
import RightSide from '../Components/ChatPage/RightSide'
import LeftSide from '../Components/ChatPage/LeftSide'
import './ChatPage.scss'

function ChatPage () {
  return (
    <div className='home'>
      <div className='container'>
        <LeftSide />
        <RightSide />
      </div>
    </div>
  )
}

export default ChatPage
