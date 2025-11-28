import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Screen2.css";
import logo from "../images/logo.png";

export default function Screen2() {

  const navigate = useNavigate();
  const location = useLocation();

  const mobile = location.state?.mobile || "XXXXXXXXXX";

  // OTP States
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputs = useRef([]);

  const [time, setTime] = useState(30);
  const [loading, setLoading] = useState(false);

  // -------------------------
  // TIMER
  // -------------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);


  // -------------------------
  // HANDLE OTP INPUT
  // -------------------------
  const handleOtp = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return; // only digits allowed

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);



    // Move to next box automatically
    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  // -------------------------
  // VERIFY OTP
  // -------------------------
  const verifyOTP = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate("/userinfo"); // SCREEN 3
    }, 1000);
  };

  return (


    
    <div className="screen2-bg">
      <img src={logo} alt="logo" className="screen2-logo" />
      <div className="card">
            

        <h1 className="title">Welcome to Sheetal Batra</h1>

        <p className="subtitle">
          Your personalised Sheetal Batra experience awaits.
        </p>

        <p className="otp-text">OTP has been sent to +91 {mobile}</p>

        {/* OTP INPUT BOXES */}
        <div className="otpBox">
          {otp.map((val, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              maxLength={1}
              value={val}
              onChange={(e) => handleOtp(e.target.value, i)}
            />
          ))}
        </div>

        {/* CONTINUE BUTTON */}
        <button className="btn2" onClick={verifyOTP} disabled={loading}>
          {loading ? "Verifying..." : "Continue"}
        </button>

        {/* TIMER */}
        <p className="timer-text">
          You can resend the code in {time} seconds
        </p>

      </div>
    </div>
  );
}