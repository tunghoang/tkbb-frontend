import React, { useContext, useRef } from 'react'

import { AuthContext } from '../context'
import { login as loginApi } from '../api'
import { navigate } from 'hookrouter';

const Login = props => {
  const authContext = useContext(AuthContext)

  const usernameRef = useRef('')
  const passwordRef = useRef('')

  if (authContext.isLoggedIn) {
    navigate('/');
  }
  const loginHandler = async (e) => {
    e.preventDefault()

    const { data: responseData } = await loginApi({
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    })
    const { token, role } = responseData;
    console.log(responseData, token, role );
    authContext.setUsername(usernameRef.current.value);
    authContext.setRole(role);
    authContext.login(token);
    navigate('/');
  }

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        {/* /.login-logo */}
        <div className="card card-outline card-primary">
          <div className="card-header text-center">
            <a href="../../index2.html" className="h1"><b>GS</b>-classifier</a>
          </div>
          <div onSubmit={loginHandler} className="card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form method="post">
              <div className="input-group mb-3">
                <input type="text"
                  className="form-control"
                  placeholder="Username"
                  ref={usernameRef}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input type="password"
                  className="form-control"
                  placeholder="Password"
                  ref={passwordRef}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>


              <div className="text-center mt-2 mb-3">
                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
              </div>
              <div className="text-center mt-2 mb-3">
                <button type="button" className="btn btn-default btn-block" onClick={() => navigate('/')}>Back to Home</button>
              </div>
            </form>
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </div>
    </div>
  )
}


export default Login
