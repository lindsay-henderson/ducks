//--modules
import { useState, } from 'react'
import { Routes, Route, useNavigate, } from 'react-router-dom'
import './App.css'

//--pages
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'

//--- components
import NavBar from './components/NavBar/NavBar'
//--services
import * as authService from './services/authService'

const App = () => { 
  const [user, setUser] = useState(authService.getUser())

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
    <NavBar/>
    <main>
    <Routes>
    <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        </Routes>
</main>
</>
  )}

  export default App