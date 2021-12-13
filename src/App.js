import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import Home from "./Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
