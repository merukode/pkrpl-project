import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="container" onclick="onclick">
      <div className="top"></div>
      <div className="bottom"></div>
      <div className="center">
        <h2>Please Sign In</h2>
        <input className="email" type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="btn-login">
        <button className="sign-btn">Sign In</button>
        <Link to='/signup' className="sign-btn">Sign Up</Link>
        </div>
      </div>
    </div>
  )
}

export default Login