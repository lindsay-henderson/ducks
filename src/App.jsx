import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'

const App = () => {
  const [user, setUser] = useState(null)

  return (
    <>
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </>
  )
}

export default App
