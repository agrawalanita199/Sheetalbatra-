import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "./Screen2.css";

export default function Screen2() {
  const location = useLocation();
  const navigate = useNavigate();
  const mobile = location.state?.mobile;
  const phoneNumber = location.state?.phoneNumber;

  const [time, setTime] = useState(30);
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  const handleChange = (value, index) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const verifyOTP = async () => {
    const code = otp.join("");

    if (code.length !== 6) {
      alert("Enter a valid 6-digit code");
      return;
    }

    setLoading(true);

    const { data, error } = await supabase.auth.verifyOtp({
      phone: phoneNumber,
      token: code,
      type: "sms",
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert("Login Successful!");

    // Redirect to your home/dashboard after login
    navigate("/home");
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

        <button className="btn2" onClick={verifyOTP} disabled={loading}>
          {loading ? "Verifying..." : "Continue"}
        </button>

        <p className="timer-text">
          You can resend the code in {time} seconds
        </p>
      </div>
    </div>
  );
}