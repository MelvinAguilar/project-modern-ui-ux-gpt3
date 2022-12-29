import HamburgerMenu from "./HamburgerMenu/HamburgerMenu";

const Navbar = ({ toggleMenu, isMenuOpen }) => {
  return (
    <nav aria-label="Main" className="w-auto lg:w-full">
      <ul
        className={`absolute top-[4.375rem] right-[2.2rem] flex w-full max-w-[15.625rem] -translate-y-[150%] flex-col gap-4 rounded-md bg-maastricht-blue p-4 text-right transition duration-300 ease-in-out lg:static lg:flex lg:max-w-none lg:transform-none lg:flex-row lg:items-center lg:gap-8 lg:bg-transparent lg:p-0 ${
          isMenuOpen ? "!translate-y-0" : ""
        }`}
      >
        <li>
          <a
            href="#main"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#what-is-gpt"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            What is GPT?
          </a>
        </li>
        <li>
          <a
            href="#open-ai"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            Open AI
          </a>
        </li>
        <li>
          <a
            href="#case-studies"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            Case Studies
          </a>
        </li>
        <li>
          <a
            href="#library"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            Library
          </a>
        </li>
        <li className="border-t border-electric-blue pt-4 md:ml-auto md:border-none md:pt-0">
          <a
            href="#"
            className="block text-white transition duration-300 ease-in-out hover:text-orange"
          >
            Sign in
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block rounded-md bg-orange p-3 text-white transition duration-300 ease-in-out hover:bg-light-orange md:py-4 md:px-8"
          >
            Sign up
          </a>
        </li>
      </ul>

      <HamburgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </nav>
  );
};

export default Navbar;
