import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
    <div class="signup">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email"
                onChange={(e)=> setEmail(e.target.value)}  
                required
            />
            <input 
                type="password" 
                placeholder="Password" 
                onChange={(e)=> setPassword(e.target.value)} 
                required 
            />
            <input type="submit" placeholder="Signup"/>
            <p>Have an account? <Link to="/">Login Here</Link></p>
        </form>
    </div>
    )
}

export default Signup