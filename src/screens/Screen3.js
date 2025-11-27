import React from "react";
import { useNavigate } from "react-router-dom";
import "../screens/Screen3.css";


function Screen3() {
  const navigate = useNavigate();
  const goToScreen4 = () => {
    navigate("/product");
    
  };


 
    return (
    <div className="screen3-root">
      <div className="card3">
        <img src="/logo.png" className="logo3" />

        <h2>Personal information</h2>

        <div className="row">
          <div className="input-box">
            <label>Full name*</label>
            <input type="text" placeholder="Exp. John Carter" />
          </div>

          <div className="input-box">
            <label>Gender</label>
            <input type="text" placeholder="Female" />
          </div>
        </div>

        <div className="row">
          <div className="input-box">
            <label>Phone number*</label>
            <input type="text" placeholder="‪+91 99999 99999‬" />
          </div>

          <div className="input-box">
            <label>Email*</label>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className="input-box">
            <label>DOB</label>
            <input type="text" placeholder="20/06/1995" />
          </div>
        </div>

        <div className="input-box">
          <label>Address</label>
          <input type="text" placeholder="House no., street address" />
        </div>

        <div className="row">
          <div className="input-box">
            <label>City</label>
            <input type="text" placeholder="Exp. Delhi" />
          </div>

          <div className="input-box">
            <label>State</label>
            <input type="text" placeholder="Exp. Delhi" />
          </div>

          <div className="input-box">
            <label>Pincode</label>
            <input type="text" placeholder="Exp. 110018" />
          </div>
        </div>

        <button className="btn3">Continue</button>
         <button  className="continueBtn" onClick={() => navigate("/product")}>Continue</button>
      </div>
    </div>
     
  );
}

export default Screen3;