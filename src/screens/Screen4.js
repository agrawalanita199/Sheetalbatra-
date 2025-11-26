import React from "react";
import "./Screen4.css";

export default function Screen4() {
  return (
    <div className="screen4-bg">

      <div className="screen4-card">

        <h2 className="title">Product</h2>

        <div className="row">
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
        </div>

        <div className="row">
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

        {/* SIZE BUTTONS */}
        <div className="size-box">
          <span className="size-label">Size:</span>
          <div className="sizes">
            {["XS","S","M","L","XL","XXL","3XL","4XL"].map((s, i) => (
              <button key={i} className={s === "S" ? "size-btn active" : "size-btn"}>
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Measurements Row */}
        <div className="measure-bar">
          <span>Measurements</span>
          <button className="plus-btn">+</button>
        </div>

        {/* Delivery, Order Flag, Extras */}
        <div className="row">
          <div className="field">
            <label>Mode of Delivery</label>
            <select><option>Select</option></select>
          </div>

          <div className="field">
            <label>Order Flag</label>
            <select><option>Select</option></select>
          </div>

          <div className="field">
            <label>Select Extras</label>
            <select><option>Select</option></select>
          </div>
        </div>

        {/* Comments */}
        <div className="comments">
          <label>Comments</label>
          <textarea placeholder="Write comment..."></textarea>
        </div>

        <div className="continue-box">
          <button className="continue-btn">Continue</button>
        </div>

      </div>
    </div>
  );
}