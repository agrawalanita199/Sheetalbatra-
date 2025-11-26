import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import "./Screen1.css";


  
export default function Screen1() {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const handleContinue = async () => {
    if (mobile.length !== 10) {
      alert("Please enter 10 digit number");
      return;
    }

    setLoading(true);

    const phoneNumber = "+91" + mobile;

    const { data, error } = await supabase.auth.signInWithOtp({
      phone: phoneNumber,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    // OTP sent successfully → go to Screen2
    navigate("/otp", { state: { mobile, phoneNumber } });
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

        <button className="btn" onClick={handleContinue} disabled={loading}>
          {loading ? "Sending OTP..." : "Continue"}
        </button>

        <small>
          By continuing, you agree to our{" "}
          <a href="#">Terms & Privacy Policy</a>
        </small>
      </div>
    </div>
  );
}
