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