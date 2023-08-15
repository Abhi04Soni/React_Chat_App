import React from 'react'
import pic from '../../Images/pic.jpeg'

function Message () {
  return (
    <div className='message-container'>
      <div className='message-text'>hello</div>
      <div className='mid-pic'>
        <img src={pic} alt='' />
        <p>just now</p>
      </div>
    </div>
  )
}

export default Message
