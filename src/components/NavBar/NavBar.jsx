<<<<<<< HEAD
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>Welcome, {user.name}</li>
            <Link to="/clients">Clients</Link>
            <Link to="/orders">Orders</Link>
            <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar
=======
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
// import DefaultBirdPhoto from '../../assets/branding/AVI-nav-logo.png'

const NavBar = ({ user, handleLogout}) => {

  const publicLinks = (
    <ul>
      <li><NavLink to="/login">Log In</NavLink></li>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/add-client">Add New Client</NavLink></li>
    </ul>
  )

  const protectedLinks = (
    <ul >
      <>
      <NavLink to="/">Home</NavLink>
      {/* <h2 className={styles.landing}><NavLink to={`/profiles/${user?.profile}`}>   Welcome, {user.name.toLowerCase()}</NavLink></h2> */}
      <li ><NavLink to="/clients">Clients</NavLink></li>
      <li ><NavLink to="/" onClick={handleLogout}>LOG OUT</NavLink></li>
      </>
    </ul>
  )

  return (
    <nav className={styles.nav}>
      {user?  protectedLinks : publicLinks}
    </nav>
  )
}

export default NavBar
>>>>>>> 73ac3b4d409b03ed8560429802b5ffcbe11911a8
