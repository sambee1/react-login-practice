import React from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div>
      <div className="login">
        <p className="sign-in">Sign In</p>
        <form>
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <p>
            Don't have an account? <Link to="signup">Sign up</Link>
          </p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
