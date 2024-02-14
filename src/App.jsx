import HeroSection from "./Components/HeroSection.jsx";
import "./index.css";
import Header from "./product-page/Header.jsx";
import MainSections from "./product-page/Sections.jsx";

function App() {
  return (
    <div className=" flex justify-center items-center ">
      <div className=" flex flex-col w-[1500px] border-red-700">
        <Header />
        <hr className=" md:w-full " />
        <div className=" md:mt-20">
          <MainSections />
        </div>
      </div>
    </div>
  );
}

export default App;
