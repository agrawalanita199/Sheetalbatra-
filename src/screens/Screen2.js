import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Screen2.css";

export default function Screen2() {
  const location = useLocation();
  const mobile = location.state?.mobile;

  const [time, setTime] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
              onChange={(e) => {
                const newOtp = [...otp];
                newOtp[idx] = e.target.value;
                setOtp(newOtp);
              }}
            />
          ))}
        </div>

        <button className="btn2">Continue</button>

        <p className="timer">You can resend the code in {time} seconds</p>
      </div>
    </div>
  );
}