import React from "react";
import CoinDCX from "../Images/CoinDCX.png";
import giotax from "../Images/giotax.png";
import wazir from "../Images/wazir.png";
import zebpay from "../Images/zebpay.png";
import giotus from "../Images/giotus.png";
import Bitbns from "../Images/Bitbns.png";

const Table = () => {
  return (
    <div
      className="fiat-crypto-table table-responsive mt-4"
      style={{ margin: " 0px auto" }}
    >
      <table className="table table-borderless text-center">
        <thead>
          <tr>
            <th>
              <h4>
                <span className="pointer">#</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Platform</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Last Traded Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Buy / Sell Price</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Difference</span>
              </h4>
            </th>
            <th>
              <h4>
                <span className="pointer">Savings</span>
              </h4>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">1</h4>
            </td>
            <td className="align-middle">
              <a
                target="_blank"
                href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"
              >
                <h4 className="table-text">
                  <img src={wazir} className="exchange-logo" />
                  <span className="exchange-name">WazirX</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,56,803</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,46,592 / ₹ 36,56,803</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">-0.11 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">▼ ₹ 4,024</h4>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">2</h4>
            </td>
            <td className="align-middle">
              <a target="_blank" href="">
                <h4 className="table-text">
                  <img src={Bitbns} className="exchange-logo" />
                  <span className="exchange-name">Bitbns</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,57,748</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,57,748 / ₹ 36,62,482</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">-0.08 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">▼ ₹ 3,079</h4>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">3</h4>
            </td>
            <td className="align-middle">
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img src={giotus} className="exchange-logo" />
                  <span className="exchange-name">Giotus</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,78,900</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,31,200 / ₹ 36,78,000</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-green">0.49 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-green">▲ ₹ 18,072</h4>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">4</h4>
            </td>
            <td className="align-middle">
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img src={giotax} className="exchange-logo" />
                  <span className="exchange-name">Colodax</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,63,071</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,31,812 / ₹ 36,67,921</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-green">0.06 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-green">▲ ₹ 2,243</h4>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">5</h4>
            </td>
            <td className="align-middle">
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img src={zebpay} className="exchange-logo" />
                  <span className="exchange-name">Zebpay</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,56,024</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,62,000 / ₹ 36,56,024</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">-0.13 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">▼ ₹ 4,803</h4>
            </td>
          </tr>
          <tr>
            <td className="align-middle">
              <h4 className="table-text">6</h4>
            </td>
            <td className="align-middle">
              <a target="_blank" href=" ">
                <h4 className="table-text">
                  <img src={CoinDCX} className="exchange-logo" />
                  <span className="exchange-name">CoinDCX</span>
                </h4>
              </a>
            </td>
            <td className="align-middle">
              <h4 className="table-text">₹ 36,52,420</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text">
                <span>₹ 36,54,934 / ₹ 36,60,640</span>
              </h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">-0.23 %</h4>
            </td>
            <td className="align-middle">
              <h4 className="table-text color-red">▼ ₹ 8,407</h4>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
