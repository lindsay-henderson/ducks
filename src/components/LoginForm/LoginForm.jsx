import { useState } from 'react'
<<<<<<< HEAD
import { Link } from 'react-router-dom'
import styles from './LoginForm.module.css'
=======
import { Link, useNavigate } from 'react-router-dom'
import styles from './LoginForm.module.css'
import * as authService from '../../services/authService'
>>>>>>> 73ac3b4d409b03ed8560429802b5ffcbe11911a8

const LoginForm = props => {
  const [formData, setFormData] = useState({
    email: '',
    pw: '',
  })
<<<<<<< HEAD
=======
  const navigate = useNavigate()
>>>>>>> 73ac3b4d409b03ed8560429802b5ffcbe11911a8

  const handleChange = e => {
    props.updateMessage('')
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
<<<<<<< HEAD
=======
    try {
      await authService.login(formData)
      props.handleSignupOrLogin()
      navigate('/')
    } catch (err) {
      props.updateMessage(err.message)
    }
>>>>>>> 73ac3b4d409b03ed8560429802b5ffcbe11911a8
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email" className={styles.label}>Email</label>
        <input
          type="text"
          autoComplete="off"
          id="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="password" className={styles.label}>Password</label>
        <input
          type="password"
          autoComplete="off"
          id="password"
          value={formData.pw}
          name="pw"
          onChange={handleChange}
        />
      </div>
      <div>
        <button className={styles.button}>Log In</button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
