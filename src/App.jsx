import "./index.css";
import Header from "./product-page/Header.jsx";
import MainSections from "./product-page/Sections.jsx";

function App() {
  return (
    <div className=" flex justify-center ">
      <div className=" flex flex-col w-[1200px] border-red-700">
        <Header />
        <hr className=" md:w-full " />
        <div className="mt-20">
          <MainSections />
        </div>
      </div>
    </div>
  );
}

export default App;
