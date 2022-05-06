import { useEffect, useState } from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import classNames from "classnames";
import Link from "next/link";
import eyesImg from "../../assets/img/eyes.png";

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
      <nav
        className={classNames({
          "container mx-auto flex items-center justify-between flex-wrap bg-teal-500 px-6":
            true,
          "py-6": isTop,
          "py-4": !isTop,
        })}
      >
        <div className="flex items-center flex-shrink-0 mr-6 text-white">
          <Link href="/">
            <a className="tracking-tight">
              AWPSONClub <span className="hidden sm:inline">x Spaceships</span>
            </a>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleNav}
            className="flex items-center px-3 py-2 border hover:bg-gray-800"
          >
            <svg
              className="w-3 h-3 fill-current"
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
          <div className="block text-sm lg:flex lg:ml-auto lg:text-right">
            <Link href="https://unkkido.gitbook.io/awpson/">
              <a
                className="block mt-4 text-teal-200 lg:inline-block lg:mt-0 hover:text-white lg:mx-4"
                target="_blank"
              >
                Whitepaper
              </a>
            </Link>
            <div>
              <Link href="">
                <a
                  className="relative inline-block px-2 py-1 mt-4 text-teal-200 bg-gray-800 rounded lg:inline-block lg:mt-0 hover:text-white lg:mx-4 hover:bg-gray-700"
                  style={{
                    cursor: `url(${eyesImg.src}), auto`,
                  }}
                >
                  <div className="absolute px-2 font-sans font-bold text-red-400 lowercase bg-white rounded -top-3 -right-4">
                    Soon
                  </div>
                  Staking
                </a>
              </Link>
            </div>
            <div>
              <Link href="https://mint.creatormachine.com/awpson">
                <a className="relative inline-block px-2 py-1 mt-4 text-teal-200 bg-gray-800 rounded lg:inline-block lg:mt-0 hover:text-white lg:mx-4 hover:bg-gray-700">
                  <div className="absolute px-2 font-sans font-bold text-red-400 lowercase bg-white rounded -top-3 -right-4">
                    NOW
                  </div>
                  Mint
                </a>
              </Link>
            </div>
          </div>
          <div className="flex gap-6 text-3xl lg:ml-4">
            <a
              className="mt-2 lg:mt-0"
              href="https://twitter.com/awpsonclub"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter color={"#1F2937"} />
            </a>
            <a
              className="mt-2 lg:mt-0"
              href="https://discord.gg/awpson"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord color={"#1F2937"} />
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
