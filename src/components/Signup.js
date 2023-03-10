import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext"

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    //signup from the context
    const { signUp } = useUserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await signUp(email, password);
        } catch (err) {
            setError(err.message);
        }
    }; 
    return (
    <div class="signup">

        <h1>Signup</h1>
        {error && alert(error.message)}
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                placeholder="Email"xw
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