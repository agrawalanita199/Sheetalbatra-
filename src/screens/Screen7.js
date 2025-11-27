import React from "react";
import "./Screen7.css";
import { useNavigate } from "react-router-dom";

export default function Screen7() {
  const navigate = useNavigate();

  const goNext = () => {
    navigate("/screen8");
  };

  return (
    <div className="screen7">
      <div className="screen7-container">

        {/* Header Section */}
        <div className="screen7-header">
          <img
            src="../images/logo.png"
            alt="logo"
            className="sheetal-logo"
          />
          <button className="share-btn">Share</button>
        </div>

        <h2 className="title">Confirm Your Details</h2>

        {/* ========================= CONTACT DETAILS ========================== */}
        <div className="section-box">
          <h3>Contact Details</h3>

          <div className="row">
            <div className="field">
              <label>Full name:</label>
              <span>Rohin Khanna</span>
            </div>

            <div className="field">
              <label>Email:</label>
              <span>test@test.com</span>
            </div>

            <div className="field">
              <label>Phone:</label>
              <span>‪+91 99999 99999‬</span>
            </div>
          </div>
        </div>

        {/* ========================= DELIVERY DETAILS ========================== */}
        <div className="section-box">
          <h3>Delivery Details</h3>

          <div className="row">
            <div className="field">
              <label>Full Name:</label>
              <span>Rohin Khanna</span>
            </div>

            <div className="field">
              <label>Email:</label>
              <span>test@test.com</span>
            </div>

            <div className="field">
              <label>Phone:</label>
              <span>‪+91 99999 99999‬</span>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Delivery Address:</label>
              <span>New Delhi</span>
            </div>

            <div className="field">
              <label>Pincode:</label>
              <span>110018</span>
            </div>
          </div>

          <div className="row">
            <div className="field">
              <label>Delivery Date:</label>
              <span>30/11/2025</span>
            </div>

            <div className="field">
              <label>Delivery Notes:</label>
              <span>Notes</span>
            </div>
          </div>
        </div>

        {/* ========================= BILLING DETAILS ========================== */}
        <div className="section-box">
          <h3>Billing Details</h3>

          <div className="row">
            <div className="field">
              <label>Billing Address same:</label>
              <span>Yes</span>
            </div>

            <div className="field">
              <label>Company name:</label>
              <span>Name</span>
            </div>

            <div className="field">
              <label>GSTIN:</label>
              <span>GST No.</span>
            </div>
          </div>
        </div>

        {/* ========================= SALESPERSON DETAILS ========================== */}
        <div className="section-box">
          <h3>Salesperson Details</h3>

          <div className="row">
            <div className="field">
              <label>Salesperson:</label>
              <span>Bharat Bansal</span>
            </div>

            <div className="field">
              <label>Phone:</label>
              <span>‪+91 99999 99999‬</span>
            </div>

            <div className="field">
              <label>Email:</label>
              <span>sales@sb.com</span>
            </div>
          </div>
        </div>

        {/* ========================= PRODUCT DETAILS ========================== */}
        <div className="section-box">
          <h3>Product Details</h3>

          <div className="prod-row">
            <img
              src="/images/sample-product.jpg"
              alt="product"
              className="prod-img"
            />

            <div className="product-info">
              <p><b>Product Name:</b> Naima – Silk Velvet Short Kurta With Salwar</p>
              <p><b>Color:</b> Maroon</p>
              <p><b>Top:</b> Kurta</p>
              <p><b>Bottom:</b> Salwar</p>
              <p><b>Extras:</b> Dupatta</p>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <button className="continue-btn" onClick={goNext}>
          Continue
        </button>

      </div>
    </div>
  );
}