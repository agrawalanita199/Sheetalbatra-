import React from "react";
import "./Screen6.css";
import { useNavigate } from "react-router-dom";
import bg from "../images/Screen1bg.png"; 

export default function Screen6() {
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/screen7");
  };

  return (
    <div className="screen6-bg" >
      <div className="screen6-container">

        {/* Header */}
        <div className="top-header">
          <img src="../images/logo.png"alt="logo" className="logo" />
          <h2 className="order-title">Order Form</h2>
        </div>

        {/* Product Section */}
        <h3 className="section-title">Product</h3>

        <div className="grid-2">
          <div className="field">
            <label>Select Product</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className="field">
            <label>Select Color</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className="field">
            <label>Select Top</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className="field">
            <label>Select Bottom</label>
            <select>
              <option>Select</option>
            </select>
          </div>

          <div className="field">
            <label>Select Extras</label>
            <select>
              <option>Select</option>
            </select>
          </div>
        </div>

        {/* Custom Measurements */}
        <h3 className="section-title">Custom Measurements</h3>

        <div className="measurement-wrapper">
          {/* Left Menu */}
          <div className="left-menu">
            <p className="active-menu">Shirts ➤</p>
            <p>Blouse</p>
            <p>Salwar</p>
            <p>Churidar</p>
            <p>Trouser</p>
            <p>Anarkali</p>
            <p>Lehnga Length</p>
          </div>

          {/* Measurement Inputs */}
          <div className="measurement-grid">

            {/* Row 1 */}
            <div className="field">
              <label>Shoulder *</label>
              <input type="text" placeholder="Enter shoulder" />
            </div>

            <div className="field">
              <label>Length *</label>
              <input type="text" placeholder="Enter length" />
            </div>

            <div className="field">
              <label>Upper Bust *</label>
              <input type="text" placeholder="Enter upper bust" />
            </div>

            {/* Row 2 */}
            <div className="field">
              <label>Bust *</label>
              <input type="text" placeholder="Enter bust" />
            </div>

            <div className="field">
              <label>Waist *</label>
              <input type="text" placeholder="Enter waist" />
            </div>

            <div className="field">
              <label>Mid Waist *</label>
              <input type="text" placeholder="Enter mid waist" />
            </div>

            {/* Row 3 */}
            <div className="field">
              <label>Hip *</label>
              <input type="text" placeholder="Enter hip" />
            </div>

            <div className="field">
              <label>Sleeves *</label>
              <input type="text" placeholder="Enter sleeves" />
            </div>

            <div className="field">
              <label>Biceps *</label>
              <input type="text" placeholder="Enter biceps" />
            </div>

            {/* Row 4 */}
            <div className="field">
              <label>Armhole *</label>
              <input type="text" placeholder="Enter armhole" />
            </div>

            <div className="field">
              <label>Front Cross *</label>
              <input type="text" placeholder="Enter front cross" />
            </div>

            <div className="field">
              <label>Back Cross *</label>
              <input type="text" placeholder="Enter back cross" />
            </div>

            {/* Row 5 */}
            <div className="field">
              <label>Dart Point *</label>
              <input type="text" placeholder="Enter dart point" />
            </div>

            <div className="field">
              <label>Neck *</label>
              <input type="text" placeholder="Enter neck" />
            </div>

          </div>
        </div>

        {/* Continue Button */}
        <div className="btn-row">
          <button className="continue-btn" onClick={goNext}>Continue</button>
        </div>

      </div>
    </div>
  );
}