import { QrScanner } from "@yudiel/react-qr-scanner";
import HeroSection from "./Components/HeroSection.jsx";
import SwitchMode from "./Components/SwitchMode.jsx";
import "./index.css";
import Header from "./product-page/Header.jsx";
import MainSections from "./product-page/Sections.jsx";
import React, { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className=" flex justify-center items-center "
      data-theme={isDark ? "dark" : "light"}
    >
      <div className=" flex flex-col w-[1500px] border-red-700">
        <Header />
        <SwitchMode
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
        <hr className=" md:w-full " />
        <div className=" md:mt-20">
          <MainSections />
        </div>
      </div>
    </div>
  );
}

export default App;
