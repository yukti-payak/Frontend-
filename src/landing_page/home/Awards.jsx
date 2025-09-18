import React from "react";
import "./Awards.css";
function Awards() {
  return (
    <div className="container my-5">
      <div className="row align-items-center text-center text-md-start">
        <div className="col-lg-6 col-md-6 col-sm-12 mb-5 text-center">
          <img src="media/images/largestBroker.svg" className="img-fluid award-image"/>
        </div>
        <div className="col-lg-6  col-md-6 col-sm-12 text-center p-2">
          <h1 className="fw-bold fs-4 mb-3">Largest stock broker in India</h1>
          <p className="mb-4 fs-1.5">
            2 + million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Commodity derivates</p>
                </li>
                <li>
                  <p>Currency derivates</p>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Bonds and Govt. Securities</p>
                </li>
              </ul>
            </div>
            <div className="text-center text-md-start mt-2">
            <img src="media\images\pressLogos.png" className="img-fluid press-logos"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
