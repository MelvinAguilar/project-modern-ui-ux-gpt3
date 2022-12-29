import logo from "../../assets/images/logo.svg";

const Footer = () => {
  return (
    <footer className="bg-maastricht-blue px-8 pb-12">
      <div className="mx-auto flex max-w-[77.125rem] flex-col gap-12 md:flex-row">
        <div className="text-center md:text-left">
          <a href="#" className="z-50 mr-8">
            <img
              src={logo}
              alt="Bookmark"
              width={118}
              height={30}
              className="mx-auto transition duration-300 ease-in-out md:mx-0 md:filter-none"
            />
          </a>
          <address className="text-[0.75rem] not-italic text-white md:max-w-[27ch]">
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </address>
        </div>
        <div className="w-full">
          <nav
            aria-label="Footer"
            className="flex flex-col gap-16 text-center md:flex-row md:justify-around md:text-left"
          >
            <div>
              <h2 className="mb-4 text-[0.875rem] font-[800] text-white">
                Product
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Overons{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Social Media
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Counters
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-[0.875rem] font-[800] text-white">
                Company
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 text-[0.875rem] font-[800] text-white">
                Get in touch
              </h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue md:block md:max-w-[20ch]"
                  >
                    Crechterwoord K12 182 DK Alknjkcb
                  </a>
                </li>
                <li>
                  <a
                    href="tel:085-132567"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    085-132567
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@payme.net"
                    className="text-[0.75rem] text-white transition duration-300 ease-in-out hover:text-electric-blue"
                  >
                    info@payme.net
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <p className="mt-12 text-center text-[0.875rem] text-white">
        Coded by{" "}
        <a
          href="https://github.com/MelvinAguilar"
          target="_blank"
          rel="noreferrer noopener"
          className="text-linear-background transition duration-300 ease-in-out hover:font-bold"
        >
          Melvin Aguilar
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
