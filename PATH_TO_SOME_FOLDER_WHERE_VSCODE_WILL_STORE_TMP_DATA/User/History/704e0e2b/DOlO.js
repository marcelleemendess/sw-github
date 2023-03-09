import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email"  />
                <input type="password" placeholder="Password" />
                <input type="submit" placeholder="Login"/>
                <p>Need an account? <Link to="/login">Signup Here</Link></p>
            </form>
        </div>
    )
}

export default Login;