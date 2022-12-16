import React from 'react';
import './styles/Login.css';


const Login = () => {
  return (
    <div className="login-content">
      <div className='inner-login'>
        <form className="login-form">
          <h3>Welcome</h3>
          <input type="email" placeholder="Email" name="email" />
          <input
            type="password"
            placeholder="password"
            name="password"
          />
          <button>Login</button>
          <p>
            Don't have an Account? <span>Sign Up</span>
          </p>
        </form> 
      </div>
    </div>
  );
}

export default Login