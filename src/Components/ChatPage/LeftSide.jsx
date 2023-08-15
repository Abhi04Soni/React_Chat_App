import React, { useContext, useEffect, useState } from 'react'
import { onSnapshot, serverTimestamp } from 'firebase/firestore'
import Search from './Search'
import Contact from './Contact'
import { signOut } from 'firebase/auth'
import { auth } from '../../Firebase/Firebase'
import { AuthContext } from '../../context/AuthContext'
import { getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../../Firebase/Firebase'
import { doc } from 'firebase/firestore'
import { ChatContext } from '../../context/ChatContext'

function LeftSide () {
  const { currentUser } = useContext(AuthContext)
  const {dispatch} = useContext(ChatContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getfunc = () => {
      const unsub = onSnapshot(doc(db, 'userChats', currentUser.uid), doc => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    currentUser.uid && getfunc()
  }, [currentUser.uid])
  const handleContact = (u) => {
    dispatch({type: "USER_CHANGE", payload:u })
    
  }
  return (
    <div className='left-container'>
     {console.log(currentUser)}
      <div>User :{currentUser.displayName}</div>
      <div className='nav'>
        <span>Contacts</span>
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
      <Search />
      <div className='left-mid'>
        {chats && Object.entries(chats)?.map((chat) => (
          <div className='contact' key={chat[0]} onClick={() =>handleContact(chat[1].userInfo)}>
            <img src={chat[1].userInfo.photoURL} alt=' Image' />
            <div className='text'>
              <div className='name'>{chat[1].userInfo.displayName}</div>
              <div className='message'>
                {chat[1].userInfo.lastmessage?.text}
              </div>
            </div>
          </div>
          // <Contact
          //   key={chat[0]}
          //   name={chat[1].userInfo.displayName}
          //   photoURL={chat[1].userInfo.photoURL}
          //   lastmessage={chat[1].userInfo.lastmessage?.text}
          // />
        ))}
      </div>
    </div>
  )
}

export default LeftSide
