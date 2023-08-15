import { useContext, useState } from 'react'
import { collection, query, serverTimestamp, where } from 'firebase/firestore'
// import { auth } from '../../Firebase/Firebase'
import { AuthContext } from '../../context/AuthContext'
import { getDoc, getDocs, setDoc, updateDoc } from 'firebase/firestore'
import { auth } from '../../Firebase/Firebase'
import { doc } from 'firebase/firestore'
// import Contact from './Contact'
import { db } from '../../Firebase/Firebase'

function Search () {
  const [user, setUser] = useState(null)
  const [username, setUsername] = useState('')
  const { currentUser } = useContext(AuthContext)
  const [err, setErr] = useState(false)

  const searchHandle = async () => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    )
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(doc => {
      setUser(doc.data())
      // console.log(doc.data())
    })
  }

  const keyDownHandle = e => {
    e.code === 'Enter' && searchHandle()
  }

  const handleSelect = async () => {
    const combineduid =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid

    try {
      const res = await getDoc(doc(db, 'chats', combineduid))

      if (!res.exists()) {
        await setDoc(doc(db, 'chats', combineduid), { messages: [] })
      }
      await updateDoc(doc(db, 'userChats', currentUser.uid), {
        [combineduid + '.userInfo']: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        },
        [combineduid + ".date"]: serverTimestamp()
      })

      await updateDoc(doc(db, 'userChats', user.uid), {
        [combineduid + '.userInfo']: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL
        },
        [combineduid + '.date']: serverTimestamp()
      })
    } catch (err) {
      console.log(err)
      setErr(true)
    }
    setUser(null)
    setUsername("")
  }

  return (
    <>
      <div className='Search-container'>
        <input
          type='text'
          value={username}
          onKeyDown={keyDownHandle}
          onChange={e => {
            setUsername(e.target.value)
          }}
        />
      </div>
      {user && (
        <div className='contact' onClick={handleSelect}>
          <img src={user.photoURL} alt=' Image' />
          <div className='text'>
            <div className='name'>{user.displayName}</div>
            <div className='message'>{user.lastmessage}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
