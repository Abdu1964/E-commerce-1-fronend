import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
  return (
     
      <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-8 m-auto">
          <h1 class="display-4 text-center">Log In</h1>
          <p class="lead text-center">Sign in to your DevConnector account</p>
          <form action="dashboard.html">
            <div class="form-group">
              <input type="email" class="form-control form-control-lg" placeholder="Email Address" name="email" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control form-control-lg" placeholder="Password" name="password" />
            </div>
            <input type="submit" class="btn btn-info btn-block mt-4" />
          </form>
          <p className="mt-3 text-center">
              don't you have an account? <Link to="/register">register</Link>
              </p>
        </div>
      </div>
    </div>
  </div>
     
  )
}

export default Login