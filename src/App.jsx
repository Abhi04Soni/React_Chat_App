import { useContext, useState } from 'react'
// import Navbar from './Components/Navbar'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Wlcom from './Pages/Wlcom'
import ChatPage from './Pages/ChatPage'
import './App.css'

import { AuthContext } from './context/AuthContext'
import { Route, Routes, BrowserRouter ,Navigate} from 'react-router-dom'


function App () {
  const { currentUser } = useContext(AuthContext)


  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={'/'} />
    }
    return children;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Wlcom />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Sign-Up' element={<SignUp />} />
        <Route
          path='/ChatPage'
          element={
            <ProtectedRoute>
              <ChatPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
