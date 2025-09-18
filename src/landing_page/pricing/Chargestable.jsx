import React, { useState } from "react";
import "./Chargestable.css";

const tabs = ["Equity", "Currency", "Commodity"];

const Chargestable = () => {
  const [activeTab, setActiveTab] = useState("Equity");
  return (
    <div className="charges-container">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Equity" && <EquityTable />}
      {activeTab === "Currency" && <CurrencyTable />}
      {activeTab === "Commodity" && <CommodityTable />}
      {/* Add <CurrencyTable /> and <CommodityTable /> similarly */}
      <p className="pricing-para text-center mt-3"><a href="#">Calculate your costs upfront</a> using our brokerage calculator</p>
    </div>
  );
};

export default Chargestable;

const EquityTable = () => (
  <div className="table-wrapper">
    <table className="charges-table">
      <thead>
        <tr>
          <th></th>
          <th>Equity Delivery</th>
          <th>Equity Intraday</th>
          <th>F&O - Futures</th>
          <th>F&O - Options</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brokerage</td>
          <td>Zero Brokerage</td>
          <td>0.03% or ₹20/executed order</td>
          <td>0.03% or ₹20/executed order</td>
          <td>Flat ₹20 per executed order</td>
        </tr>
        <tr>
          <td>STT/CTT</td>
          <td>0.1% on buy & sell</td>
          <td>0.025% on sell side</td>
          <td>0.02% on sell side</td>
          <td>
            <ul>
              <li>0.125% on exercised options</li>
              <li>0.1% on sell side (premium)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Transaction Charges</td>
          <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
          <td>NSE: 0.00297%<br />BSE: 0.00375%</td>
          <td>NSE: 0.00173%<br />BSE: 0</td>
          <td>NSE: 0.03503%<br />BSE: 0.0325%</td>
        </tr>
        <tr>
          <td>GST</td>
          <td colSpan="4">
            18% on (brokerage + SEBI charges + transaction charges)
          </td>
        </tr>
        <tr>
          <td>SEBI Charges</td>
          <td colSpan="4">₹10 / crore</td>
        </tr>
        <tr>
          <td>Stamp Charges</td>
          <td>0.015% or ₹1500/crore on buy side</td>
          <td>0.003% or ₹300/crore on buy side</td>
          <td>0.002% or ₹200/crore on buy side</td>
          <td>0.003% or ₹300/crore on buy side</td>
        </tr>
      </tbody>
    </table>
  </div>
);


const CurrencyTable = () => (
    <div className="table-wrapper">
      <table className="charges-table">
        <thead>
          <tr>
            <th></th>
            <th>Currency futures</th>
            <th>Currency options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>No STT</td>
            <td>No STT</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>Transaction Charges</td>
            <td>NSE: 0.00035%<br />NSE: 0.0311%</td>
            <td>BSE: 0.00045%<br />BSE: 0.001%</td>
          </tr>
          <tr>
            <td>GST</td>
            <td colSpan="4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td>SEBI Charges</td>
            <td colSpan="4">₹10 / crore</td>
          </tr>
          <tr>
            <td>Stamp Charges</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
            <td>0.0001% or ₹10 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  

  const CommodityTable = () => (
    <div className="table-wrapper">
      <table className="charges-table">
        <thead>
          <tr>
            <th></th>
            <th>Commodity futures</th>
            <th>Commodity options</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brokerage</td>
            <td>0.03% or ₹ 20/executed order whichever is lower</td>
            <td>₹ 20/executed order</td>
          </tr>
          <tr>
            <td>STT/CTT</td>
            <td>0.01% on sell side (Non-Agri)</td>
            <td>0.05% on sell side</td>
            <td>
            </td>
          </tr>
          <tr>
            <td>Transaction Charges</td>
            <td>MCX: 0.0021%<br />MCX: 0.0418%</td>
            <td>NSE: 0.0001%<br />NSE: 0.001%</td>
          </tr>
          <tr>
            <td>GST</td>
            <td colSpan="4">
              18% on (brokerage + SEBI charges + transaction charges)
            </td>
          </tr>
          <tr>
            <td>SEBI Charges</td>
            <td colSpan="4">₹1 / crore</td>
          </tr>
          <tr>
            <td>Stamp Charges</td>
            <td>0.002% or ₹200 / crore on buy side</td>
            <td>0.003% or ₹300 / crore on buy side</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  
  