import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen1.css";
import logo from "../images/logo.png";
// import bg from "../images/Screen1bg.png";

export default function Screen1() {
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const goToOtp = () => {
    if (mobile.length === 10) {
      navigate("/otp", { state: { mobile } });
    }
  };

  return (
    <div
      className="screen1-container"
      // style={{ backgroundImage:'url(${bg})'}}
    >
      <img src={logo} alt="logo" className="screen1-logo" />

      <div className="screen1-card">
        <h1 className="title">Welcome to Sheetal Batra</h1>

        <p className="subtitle">
          Your personalised Sheetal Batra experience awaits.
        </p>

        <input
          className="mobile-input"
          placeholder="Enter your mobile number"
          maxLength={10}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button className="continue-btn" onClick={goToOtp}>
          Continue
        </button>

        <p className="terms">
          By continuing, you agree to our{" "}
          <span className="highlight">Terms & Privacy Policy</span>
        </p>
      </div>
    </div>
  );
}