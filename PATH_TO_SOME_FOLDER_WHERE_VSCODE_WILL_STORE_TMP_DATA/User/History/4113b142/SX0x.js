import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
    <div class="signup">
        <h1>Signup</h1>
        <form>
            <input type="text" placeholder="Email" v-model="email" />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="submit" placeholder="Register"/>
            <p>Have an account? <Link to="/">Login Here</Link></p>
        </form>
    </div>
    )
}

export default Signup