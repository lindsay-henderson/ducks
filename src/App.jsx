import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import AddClient from './pages/AddClient/AddClient'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import'./App.css'


const App = () => {
  const [user, setUser] = useState(null)
  const [clients, setClients] = useState([])

  const handleAddClient = newClientData => {
    setClients([...clients, newClientData])
  }

  return (
    <>
      <div className='App'>
        <NavBar  
        />
        <main>
          <Routes>
            <Route
            path="/addclient"
            element={<AddClient handleAddClient={handleAddClient}/>}
            />
            {/* <Route
              path="/signup"
              element={<Signup handleSignupOrLogin={handleSignupOrLogin}/>}
            />
            <Route
              path="/login"
              element={<Login handleSignupOrLogin={handleSignupOrLogin}/>}
            />
            <Route
              path="/profiles"
              element={user ? <Profiles /> : <Navigate to="/login" />}
            />
            <Route
              path="/changePassword"
              element={user ? <ChangePassword handleSignupOrLogin={handleSign.upOrLogin}/> : <Navigate to="/login" />}
            /> */}
          </Routes>
        </main>
      </div>
    </>
  )
}

export default App
//for navbar:
// user={user} handleLogout={handleLogout}
