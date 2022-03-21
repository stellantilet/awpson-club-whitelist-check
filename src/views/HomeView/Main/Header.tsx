import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import classNames from "classnames";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);

  const handleWindowScrolling = () => {
    if (window.scrollY === 0) {
      setIsTop(true);
      return;
    }
    setIsTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScrolling);
    return () => {
      window.removeEventListener("scroll", handleWindowScrolling);
    };
  }, []);

  const toggleNav = () => {
    setOpen(!open);
  };

  return (
    <div
      className={classNames({
        "fixed z-10 w-full bg-black": true,
        "lg:bg-black": !isTop,
        "lg:bg-transparent": isTop,
      })}
    >
      <nav className="container mx-auto flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <span className="tracking-tight">
            AWPSONClub <span className="hidden sm:inline">x Spaceships</span>
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleNav}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={classNames({
            "w-full block flex-grow lg:flex lg:items-center lg:w-auto": true,
            hidden: !open,
          })}
        >
          <div className="text-sm lg:flex-grow lg:text-right">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mx-4 mt-2"
            >
              Whitepaper
            </a>
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white lg:mx-4 mt-2"
            >
              Presale
            </a>
          </div>
          <div className="flex gap-6 text-3xl lg:ml-4">
            <a
              className="mt-2 lg:mt-0"
              href="https://twitter.com/awpsonclub"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              className="mt-2 lg:mt-0"
              href="https://discord.gg/awpson"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
