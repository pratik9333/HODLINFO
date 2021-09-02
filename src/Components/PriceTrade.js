import React from "react";

const PriceTrade = () => {
  return (
    <>
      <div className="trade-price mt-3">
        <div
          className="
                row-2
                px-lg-5
                px-md-2
                d-flex
                text-center
                justify-content-between
              "
        >
          <div className="d-flex flex-column align-self-center mt-5">
            <div className="trade-text d-flex flex-column">
              <div className="main-text">
                <span className="main-number">0.24%</span>
              </div>
              <div className="main-below">
                <span className="main-time">5 Mins</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-self-center mt-5">
            <div className="trade-text d-flex flex-column">
              <div className="main-text">
                <span className="main-number">0.62%</span>
              </div>
              <div className="main-below">
                <span className="main-time">1 Hour</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-self-center mt-4 mt-lg-0">
            <div className="trade-text d-flex flex-column">
              <div>
                <span className="best-trade">Best Price to Trade </span>
              </div>
              <div>
                <span className="trade-number">₹ 36,60,827</span>
              </div>
              <div>
                <span className="average">
                  Average BTC/INR net price including commission
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-self-center mt-5">
            <div className="trade-text d-flex flex-column">
              <div className="main-text">
                <span className="main-number">0.62%</span>
              </div>
              <div className="main-below">
                <span className="main-time">1 Hour</span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column align-self-center mt-5">
            <div className="trade-text">
              <div className="main-text">
                <span className="main-number">0.62%</span>
              </div>
              <div className="main-below">
                <span className="main-time">1 Hour</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceTrade;
