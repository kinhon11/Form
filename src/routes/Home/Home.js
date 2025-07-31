import React from "react";
import logo from "../../logo.svg"; // Assuming you have a logo.svg in the src folder
const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Chào mừng đến trang chủ!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default Home;
