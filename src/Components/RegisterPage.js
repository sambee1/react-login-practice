import React from "react";
import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div>
      <div className="login">
        <p className="sign-in">Sign Up</p>
        <form>
          <label>First Name</label>
          <input type="text" />
          <label>Last Name</label>
          <input type="text" />
          <label>Email Address</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
