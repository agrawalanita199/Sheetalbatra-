import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./Screen2.css";

export default function Screen2() {
  const location = useLocation();
  const mobile = location.state?.mobile;

  const [time, setTime] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return; // allow only numbers

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input if value entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // If backspace on empty input → go to previous
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="screen2">
      <img src="/logo.png" alt="logo" className="logo2" />

      <div className="card2">
        <h2>Welcome to Sheetal Batra</h2>
        <p>Your personalised Sheetal Batra experience awaits.</p>

        <p className="otp-text">OTP has been sent to +91 {mobile}</p>

        <div className="otp-box">
          {otp.map((digit, idx) => (
            <input
              key={idx}
              maxLength="1"
              className="otp-input"
              value={digit}
              ref={(el) => (inputRefs.current[idx] = el)}
              onChange={(e) => handleChange(e.target.value, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
        </div>

        <button className="btn2">Continue</button>

        <p className="timer">You can resend the code in {time} seconds</p>
      </div>
    </div>
  );
}
