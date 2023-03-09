import React from "react";

const Signup = () => {
    return (
    <div class="signup">
        <h1>Signup</h1>
        <form>
            <input type="text" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="submit" placeholder="Register"/>
            <p>Have an account? <router-link to="/login">Login Here</router-link></p>
        </form>
    </div>
    )
}

export default Signup