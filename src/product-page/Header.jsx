import menubar from "../images/icon-menu.svg";
import close from "../images/icon-close.svg";
import { useState } from "react";
import logo from "../images/logo.svg";
import cart from "../images/icon-cart.svg";
import avatar from "../images/image-avatar.png";
import firstthumbnail from "../images/image-product-1-thumbnail.jpg";
import clear from "../images/icon-delete.svg";

const Header = () => {
  const [isHidden, setIsHidden] = useState(true);
  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <header className="relative md:border-b-black  flex item-center justify-between p-6">
      <div className="flex gap-5 ">
        <button onClick={toggleIsHidden} className=" z-10 md:hidden">
          <img
            src={isHidden ? menubar : close}
            alt="menu"
            className=" object-contain w-7 md:hidden"
          />
        </button>

        <img src={logo} className="object-contain" />
      </div>
      <nav
        className={
          "md:mr-16 md:static md:h-0 top-0 absolute left-0 h-screen w-3/5 bg-red-70  "
        }
      >
        <ul
          className={`Absolute bg-slate-50 pl-16 p-4 md:p-0 md:pt-1 mt-20 flex md:flex-row flex-col h-full md:h-0  md:mt-0 lg:mt-0 gap-5 
          ${isHidden ? "hidden" : ""} md:flex`}
        >
          <li>Collectioins</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <div className="flex gap-10">
        <button>
          <img src={cart} className="object-contain w-8 z-50" />
        </button>

        <img src={avatar} className="object-contain w-8" />
      </div>
    </header>
  );
};

export default Header;
