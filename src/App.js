import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "..//src/styles/Function/Regis";
import logo from "./logo.svg";
import "./App.scss";

import Nav from "./components/Nav/Navbar";
import RegisterPage from "./routes/Home/Register";
import LoginPage from "./routes/Home/Login";
import Home from "./routes/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <div className="App-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
