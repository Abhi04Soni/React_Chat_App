import React, { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage } from '../Firebase/Firebase'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { db } from '../Firebase/Firebase'
import { useNavigate } from 'react-router-dom'

function SignUp () {
  const [err, seterr] = useState(false)
  const navigate = useNavigate()

  const submitHnadler = async e => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const cPassword = e.target[3].value
    const file = e.target[4].value

    const res = await createUserWithEmailAndPassword(auth, email, password)

    const storageRef = ref(storage, displayName)

    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on(
      (err) => {
        seterr(err)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
          })
          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL
          })
        })
      }
    )
    // {  console.log(data)}
    await setDoc(doc(db, 'userChats', res.user.uid), {})
    navigate('/ChatPage')
  }

  return (
    <div className='signup-container'>
      <form className='signupform' onSubmit={submitHnadler}>
        <span>Name</span>
        <input type='text' />
        <span>Email</span>
        <input type='email' />
        <span>Set Password</span>
        <input type='password' />
        <span>Confirm Password</span>
        <input type='password' />
        <input type='file' />
        <button>Sign-Up</button>
        {err && <span> Something went wrong</span>}
      </form>
    </div>
  )
}

export default SignUp
