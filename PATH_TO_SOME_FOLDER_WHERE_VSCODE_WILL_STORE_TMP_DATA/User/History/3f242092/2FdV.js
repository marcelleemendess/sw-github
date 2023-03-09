import React from 'react'
import {Routes, Route} from "react-router";
import Login from "./components/Login"
import Signup from "./components/Signup"
import './App.css';

function App() {
  return (
    <div className="App">
    <UserAuthContextProvider>
     <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
     </Routes>
     </UserAuthContextProvider>
    </div>
  );
}

export default App;