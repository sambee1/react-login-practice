import "./App.css";
import Register from "./Components/RegisterPage";
import Login from "./Components/LoginPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the login page</header>
      <Routes>
        <Route path="signup" element={<Register />} />
        <Route path="signin" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
