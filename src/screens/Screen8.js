import React from "react";
import "./Screen8.css";
import logo from "../images/logo.png";


export default function Screen8() {
  return (
    <div className="screen8-container" >
      
      {/* LEFT LOGO */}
      <img src={logo} alt="logo" className="screen8-logo" />

      {/* LEFT SIDE PANELS */}
      <div className="left-panels">

        {/* RECENT ORDERS */}
        <div className="panel-box panel-1">
          <div className="panel-header">
            <span className="panel-title">Recent Orders</span>
            <button className="view-btn">View All</button>
          </div>

          <div className="order-item">
            <div className="order-status-circle">40%</div>
            <div className="order-details">
              <p className="order-title">Order No.</p>
              <p className="order-status">Status</p>
            </div>
          </div>
        </div>

        {/* LOYALTY POINTS */}
        <div className="panel-box panel-2">
          <span className="panel-title">Loyalty Points</span>
        </div>

        {/* OFFERS & DISCOUNTS */}
        <div className="panel-box panel-3">
          <div className="panel-header">
            <span className="panel-title">Offers & Discounts</span>
            <button className="view-btn">View All</button>
          </div>
        </div>
      </div>

      {/* RIGHT MAIN CONTENT */}
      <div className="right-content">
        
        {/* Tabs */}
        <div className="tabs">
          <button className="tab active">Order History</button>
          <button className="tab">Measurements</button>
          <button className="tab">Personal Details</button>
        </div>

        {/* PRODUCT CARD */}
        <div className="product-card">
          <div className="product-left">
            <img src="https://via.placeholder.com/90" alt="dress" className="product-img" />
          </div>

          <div className="product-info">
            <h3 className="product-name">Naina – Silk Velvet Short Kurta With Sharara</h3>

            <div className="row">
              <p>Amount: ₹1,50,000</p>
              <p>Qty: 1</p>
              <p>Color: Maroon</p>
              <p>Size: M</p>
            </div>

            <p className="customer">Customer: ‪+91 9999999999‬</p>

            {/* PROGRESS BAR */}
            <div className="progress-section">
              <p className="progress-text">Stitching Progress</p>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "70%" }}></div>
              </div>
            </div>

            <div className="order-steps">
              <span>Cutting</span>
              <span>Stitching</span>
              <span>Finishing</span>
              <span>Ready</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}