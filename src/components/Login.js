import React from 'react'
import {Link}from 'react-router-dom'
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

function Login() {
  return (
    <>
    {/* <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script> */}
    {/* <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
    <div className="container login-body">
        <div className="login-box">
            <h1>Login</h1>
            <form className="login-form" action="process_login.php" method="POST">
                {/* <div className="form-group"> */}
                    <input type="text" id="username" name="username" className='login-details' placeholder="Username" required/>
                {/* </div> */}
                {/* <div className="form-group"> */}
                    <input type="password" id="password" name="password" placeholder="Password" className='login-details' required/>
                {/* </div> */}
                {/* <div className="form-group"> */}
                    <button type="submit" className='btn btn-primary'>Login</button>
                {/* </div> */}
            </form>
            <p>or</p>
            <div className="social-login">
                <Link className="social-icon " to="#" target="_blank" >Login with Google<GoogleIcon className='ms-22'/></Link>
                <Link className="social-icon " to="#" target="_blank" >Login with Microsoft account<MicrosoftIcon className='ms-2'/></Link>
            </div>
            <p className='signupSegetion'>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
    </div>
    </>
  )
}

export default Login
