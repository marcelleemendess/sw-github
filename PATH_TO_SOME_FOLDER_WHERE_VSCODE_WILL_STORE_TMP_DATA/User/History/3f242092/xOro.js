import {Routes, Route} from "react-router-dom";
import Login from "/components/Login"
import Signup from "/components/Signup"
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/" element={<Signup />}/>
     </Routes>
    </div>
  );
}

export default App;
