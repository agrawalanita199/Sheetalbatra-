import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Screen2.css";

export default function Screen2() {
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = location.state?.mobile || "9999999999";

  const [time, setTime] = useState(30);
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const inputs = useRef([]);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleOtp = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 4) {
      inputs.current[index + 1].focus();
    }
  };

  const goToScreen3 = () => {
    navigate("/userinfo");
  };

  return (
    <div className="screen2-bg">
      <div className="card">
        <h1 className="title">Welcome to Sheetal Batra</h1>

        <p className="subtitle">
          Your personalised Sheetal Batra experience awaits.
        </p>

        <p className="otp-text">OTP has been sent to +91 {mobile}</p>

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

        <button className="continue-btn" onClick={goToScreen3}>
          Continue
        </button>

        <p className="timer-text">
          You can resend the code in {time} seconds
        </p>
      </div>
    </div>
  );
}