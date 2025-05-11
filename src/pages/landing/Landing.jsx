import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="container">
      <div className="box">
        <div className="content">
          <p className="heading">Welcome to PopX</p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
        <button className="btn primary">Create Account</button>
        <button className="btn secondary">Already Registered? Login</button>
      </div>
    </div>
  );
}

export default Landing;
