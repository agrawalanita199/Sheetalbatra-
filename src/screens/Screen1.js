import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Screen1.css";

export default function Screen1() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleContinue = () => {
    if (mobile.length === 10) {
      navigate("/otp", { state: { mobile } });
    } else {
      alert("Please enter 10 digit number");
    }
  };

  return (
    <div className="screen1">
      <img src="/logo.png" alt="logo" className="logo" />

      <div className="card">
        <h2>Welcome to Sheetal Batra</h2>
        <p>Your personalised Sheetal Batra experience awaits.</p>

        <input
          className="input"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button className="btn" onClick={handleContinue}>Continue</button>

        <small>
          By continuing, you agree to our <a href="#">Terms & Privacy Policy</a>
        </small>
      </div>
    </div>
  );
}