//--modules
import { useState, useEffect } from 'react'
import { Routes, Route, } from 'react-router-dom'
import './App.css'

//--pages
// import Signup from './pages/Signup/Signup'
// import Login from './pages/Login/Login'
// import Landing from './pages/Landing/Landing'
import AddClient from './pages/AddClient/AddClient'
import ClientList from './pages/ClientList/ClientList'

//--- components
import NavBar from './components/NavBar/NavBar'
//--services
// import * as authService from './services/authService'
import * as clientService from './services/clientService'



const App = () => { 
  // const [user, setUser] = useState(authService.getUser())
  
  const [clients, setClients] = useState([])
  
  useEffect(() => {
    const fetchAllClients = async () =>{
      const clientData = await clientService.getAll()
      setClients(clientData)
    }

    fetchAllClients()
  }, [])

  // const handleSignupOrLogin = () => {
  //   setUser(authService.getUser())
  // }
  const handleAddClient = newClientData => {
    setClients([...clients, newClientData])
  }

  return (
    <>
    <NavBar/>
    <main>
    <Routes>
    {/* <Route path="/" element={<Landing user={user} />} /> */}
          <Route 
          path="/"
          element={<ClientList clients={clients} />}
          />
          {/* <Route path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
          />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        /> */}
        <Route 
        path="/add-client"
        element={<AddClient handleAddClient = {handleAddClient} />}
        />
        </Routes>
</main>
</>
  )}

  export default App