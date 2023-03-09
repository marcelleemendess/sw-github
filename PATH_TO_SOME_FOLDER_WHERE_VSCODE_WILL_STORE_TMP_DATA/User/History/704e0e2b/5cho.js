import React from "react";

const Login = () => {
    return (
        <div className="login">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Email"  />
                <input type="password" placeholder="Password" />
                <input type="submit" placeholder="Login"/>
                <p>Need an account? <router-link to="/login">Register Here</router-link></p>
            </form>
        </div>
    )
}

export default Login;