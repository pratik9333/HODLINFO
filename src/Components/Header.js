import React, { useContext, useEffect } from "react";
import ThemeContext from "../Context/ThemeContext";
import logo from "../Images/Logo.png";
const Header = () => {
  const themecontext = useContext(ThemeContext);
  const Timer = () => {
    let numb = document.querySelector(".number");
    let counter = 60;
    setInterval(() => {
      if (counter == 1) {
        counter = 60;
      } else {
        counter -= 1;
        numb.textContent = counter;
      }
    }, 1000);
  };

  const handleTheme = () => {
    console.log(themecontext);
    if (themecontext.theme == "dark") {
      themecontext.setTheme("light");
    } else {
      themecontext.setTheme("dark");
    }
  };
  useEffect(() => {
    Timer();
  }, []);
  return (
    <header className="header">
      <div className="row text-center">
        <div className="col-md-4 col-sm-12">
          <div className="brand-logo text-lg-left">
            <img src={logo} className="img-fluid" alt="" />
            <h2 className="text-bottom-logo">
              Powered By <span className="finstreet">Finstreet</span>
            </h2>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="buttons d-flex flex-row justify-content-center flex-wrap">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                INR
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  INR
                </a>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                BTC
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  BTC
                </a>
                <a className="dropdown-item" href="#">
                  ETH
                </a>
                <a className="dropdown-item" href="#">
                  USDT
                </a>
                <a className="dropdown-item" href="#">
                  XRP
                </a>
                <a className="dropdown-item" href="#">
                  TRX
                </a>
                <a className="dropdown-item" href="#">
                  DASH
                </a>
                <a className="dropdown-item" href="#">
                  ZEC
                </a>
                <a className="dropdown-item" href="#">
                  XEM
                </a>
                <a className="dropdown-item" href="#">
                  IOST
                </a>
                <a className="dropdown-item" href="#">
                  WIN
                </a>
                <a className="dropdown-item" href="#">
                  BTT
                </a>
                <a className="dropdown-item" href="#">
                  WRX
                </a>
              </div>
            </div>
            <div className="buy-btc">
              <button className="btn text-white">BUY BTC</button>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div
            className="
                  header-right
                  d-flex
                  flex-row flex-wrap
                  align-items-center
                  justify-content-center justify-content-lg-end
                "
          >
            <div className="circular mr-2">
              <div className="number">
                <span className="number">60</span>
              </div>
            </div>
            <div className="button-connect-telegram mr-2">
              <button className="btn-telegram">
                <i className="fab fa-telegram-plane"></i> &nbsp;&nbsp; Connect
                Telegram
              </button>
            </div>
            <div className="radio-switch">
              <label className="switch">
                <input type="checkbox" defaultChecked onClick={handleTheme} />
                <span className="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
