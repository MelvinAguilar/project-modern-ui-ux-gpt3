import logo from "../../assets/images/logo.svg";
import Navbar from "./Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mx-auto flex max-w-[77.125rem] items-center justify-between px-8 py-8 lg:pt-16">
      <a
        href="#main"
        className="absolute left-0 z-[100] m-3 -translate-x-[150%] bg-maastricht-blue p-3 text-white transition focus:translate-x-0"
      >
        Skip to main content
      </a>
      <a href="#" className="z-50 mr-8">
        <img
          src={logo}
          alt="Bookmark"
          width={62}
          height={16}
          className="transition duration-300 ease-in-out md:filter-none"
        />
      </a>

      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
