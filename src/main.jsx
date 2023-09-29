import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Navbar from "./Components/Navbar.jsx"
// import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
        {/* <Navbar/> */}
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
)
