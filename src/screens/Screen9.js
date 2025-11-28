import React from "react";
import "./Screen9.css";
import logo from "../images/logo.png";


export default function Screen9() {
  return (
    <div
      className="screen9-container"
  
    >
      {/* LOGO */}
      <img src={logo} alt="logo" className="screen9-logo" />

      <div className="screen9-wrapper">

        {/* LEFT MENU */}
        <div className="left-menu">
          <p className="menu-title">Dashboard</p>
          <p className="menu-item">Order Details</p>
          <p className="menu-item">Client Book</p>
        </div>

        {/* RIGHT SIDE BOXES */}
        <div className="right-section">

          <div className="top-cards">
            <div className="stat-card">
              <h2>81K</h2>
              <p className="card-sub">Total Revenue</p>
              <p className="green">↑ 10.6% from month</p>
            </div>

            <div className="stat-card">
              <h2>8</h2>
              <p className="card-sub">Total Clients</p>
              <p className="green">↑ 2.6% from month</p>
            </div>

            <div className="stat-card">
              <h2>8</h2>
              <p className="card-sub">Total Clients</p>
              <p className="green">↑ 2.6% from month</p>
            </div>
          </div>

          {/* SALES TARGET BOX */}
          <div className="sales-card">

            <div className="sales-header">
              <p>Sales Target</p>
              <p>Sales Target</p>
            </div>

            <div className="progress-texts">
              <span>5L</span>
              <span>8L</span>
            </div>

            {/* Progress Bar */}
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>

          </div>

          {/* ACTIVE ORDERS + ALERTS */}
          <div className="bottom-cards">
            <div className="active-orders">
              <h3>Active Orders</h3>
            </div>

            <div className="alerts-box">
              <div className="alerts-header">
                <h3>Alerts</h3>
                <button className="view-btn">View All</button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ADD BUTTON */}
      <button className="add-btn">+</button>

      {/* BACK BUTTON */}
      <button className="back-btn">←</button>
    </div>
  );
}