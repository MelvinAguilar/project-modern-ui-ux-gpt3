const HamburgerMenu = ({ toggleMenu, isMenuOpen }) => {
  return (
    <button
      type="button"
      onClick={toggleMenu}
      className="z-50 flex h-5 w-6 flex-col justify-between lg:hidden"
    >
      <span className="sr-only">Open menu</span>
      <span
        className={`origin-1 h-1 w-6 transform bg-white  transition duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-2 -translate-x-1 rotate-45" : ""
        }`}
      ></span>
      <span
        className={`h-1 w-6 bg-white transition duration-300 ease-in-out ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`origin-1 h-1 w-6 transform bg-white transition duration-300 ease-in-out ${
          isMenuOpen ? "-translate-y-2 -translate-x-1 -rotate-45" : ""
        }`}
      ></span>
    </button>
  );
};

export default HamburgerMenu;
