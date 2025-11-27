import React from "react";
import "./Screen5.css";
import { useNavigate } from "react-router-dom";

export default function Screen5() {
const navigate = useNavigate();
    const goToScreen6 = () => {
      navigate("/screen6")
    };
  return (
    <div className="screen5-bg">

      <div className="screen5-card">

        <div className="header-sec">
          <img
            href="C:\Users\Vipin Agrawal\sheetal_ui\public\logo.png"
            alt="logo"
            className="logo"
          />
          <h2>Order Form</h2>
        </div>

        <h3 className="title">Product</h3>

        <div className="row">
          <div className="col">
            <label>Select Product</label>
            <input placeholder="Select Product" />
          </div>

          <div className="col">
            <label>Select Color</label>
            <input placeholder="Select Color" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Select Top</label>
            <input placeholder="Select Top" />
          </div>

          <div className="col">
            <label>Select Bottom</label>
            <input placeholder="Select Bottom" />
          </div>

          <div className="col">
            <label>Select Extras</label>
            <input placeholder="Select Extras" />
          </div>
        </div>

        <label className="size-title">Size:</label>
        <div className="size-box">
          {["XS", "S", "M", "L", "XL", "XXL", "3XL", "4XL"].map((s) => (
            <button key={s} className="size-btn">{s}</button>
          ))}
        </div>

        <div className="measure-box">
          <span>Measurements</span>
          <button className="add-btn">+</button>
        </div>

        <div className="row">
          <div className="col">
            <label>Mode of Delivery</label>
            <input placeholder="Select Mode" />
          </div>

          <div className="col">
            <label>Order Flag</label>
            <input placeholder="Order Flag" />
          </div>

          <div className="col">
            <label>Select Extras</label>
            <input placeholder="Select Extras" />
          </div>
        </div>

        <div className="comment-box">
          <label>Comments</label>
          <input placeholder="Write comments…" />
        </div>

        <div className="sales-box">
          <h4>Salesperson Details</h4>

          <div className="row">
            <div className="col">
              <label>Salesperson</label>
              <input value="Bharat Bansal" readOnly />
            </div>

            <div className="col">
              <label>Phone</label>
              <input value="‪+91 99999 99999‬" readOnly />
            </div>

            <div className="col">
              <label>Email</label>
              <input value="sales@sb.com" readOnly />
            </div>
          </div>
        </div>

        <button className="continue-btn">Continue</button>
        <button  className="continueBtn" onClick={() => navigate("/screen6")}>Continue</button>

      </div>
    </div>
  );
}