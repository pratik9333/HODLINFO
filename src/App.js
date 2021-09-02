import { useState } from "react";
import "./App.css";
import AppTheme from "./Colors/Colors";

// Components
import Banner from "./Components/Banner";
import FixedFooter from "./Components/FixedFooter";
import Footer from "./Components/Footer";
import Ftx from "./Components/Ftx";
import Header from "./Components/Header";
import PriceTrade from "./Components/PriceTrade";
import Table from "./Components/Table";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  console.log(theme);
  const currentTheme = AppTheme[theme];
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className="theme-dark"
        style={{
          position: "relative",
          background: `${currentTheme.background}`,
          minHeight: "100vh",
          color: `${currentTheme.color}`,
          fontFamily: "Oswald, sans-serif",
          overflowX: "auto",
        }}
      >
        <div className="container-css">
          <Header />
          <PriceTrade />
          <Banner />
          <Table />
          <Ftx />
          <Footer />
          <FixedFooter />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
