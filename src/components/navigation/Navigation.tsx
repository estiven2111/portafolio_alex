import { useState } from "react";
import { Link } from "react-router-dom";

import { BsHouseDoorFill } from "react-icons/bs";
import { ImProfile } from "react-icons/im";
import { MdWork, MdContactPhone } from "react-icons/md";
import { GiGamepad, GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

import SideBarIcon from "./SideBarIcon";

import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { HiFolderArrowDown, HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import resumeEnglish from "../../assets/downloadable/Resume Yeraldinne sanabria English .pdf";
import resumeSpanish from "../../assets/downloadable/Resume Yeraldinne Sanabria Español.pdf";

interface Props {}

const Navigation: React.FC<Props> = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => {
    setShowNavigation(!showNavigation);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed h-screen w-10 flex flex-col text-black dark:text-white z-10">
      <div className=" h-full w-full flex flex-col justify-evenly">
        {/* burger menu icon on small screens */}
        <div className="sm:hidden absolute -top-0 -right-9 ">
          <button className="text-3xl sidebar-icon p-2" onClick={toggleHandler}>
            <GiHamburgerMenu />
          </button>
        </div>
        {/*navigation links on large screens */}
        <div className="hidden sm:flex sm:flex-col lg:text-2xl text-xl">
          <Link to="/">
            <SideBarIcon icon={<BsHouseDoorFill size={29} />} text={"Home"} />
          </Link>
          <Link to="/bio">
            <SideBarIcon icon={<ImProfile size={29} />} text={"Bio"} />
          </Link>
          <Link to="/portfolio">
            <SideBarIcon icon={<MdWork size={29} />} text={"Portfolio"} />
          </Link>
          <Link to="/games">
            <SideBarIcon icon={<GiGamepad />} text={"Fun Stuff"} />
          </Link>
          <Link to="/contact">
            <SideBarIcon
              icon={<MdContactPhone size={29} />}
              text={"Contact me"}
            />
          </Link>
        </div>
      </div>
      <div
        className={`fixed  top-0 bottom-0 lg:text-5xl text-4xl right-0 bg-white dark:bg-black z-70 w-full md:w-60 transition-all duration-300 ease-in-out ${
          showNavigation ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full py-20 px-3">
          <div
            className="p-4 hover:text-fuchsia-600"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/">Home</Link>
          </div>
          <div
            className="p-4 hover:text-fuchsia-600"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/bio">Bio</Link>
          </div>
          <div
            className="p-4 hover:text-fuchsia-600"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/portfolio">Portfolio</Link>
          </div>
          <div
            className="p-4 hover:text-fuchsia-600"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/games">Fun Stuff</Link>
          </div>
          <div
            className="p-4 hover:text-fuchsia-600"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/contact">Contact me</Link>
          </div>
          <div className="flex content-center justify-center p-4">
            <button
              className="sidebar-icon lg:text-2xl hover:text-fuchsia-700  text-3xl p-1 absolute top-0 left-0 mt-2 ml-4"
              onClick={toggleHandler}
            >
              <IoCloseSharp />
            </button>
          </div>
          <div className="containe">
            <div className="row py-3">
              <div className="flex items-center gap-4 sm:pb-3 justify-center">
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.linkedin.com/in/yeraldinne-sanabria/"
                >
                  <SiLinkedin className="text-3xl" />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Yeraldinnesan"
                  className="hover:scale-110"
                >
                  <FaGithubSquare className="text-4xl" />
                </a>
              </div>
            </div>
            <div className="row">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="relative" data-te-dropdown-ref>
                    {/* <div className="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-fuchsia-700   py-1 px-1.5 text-center align-baseline text-xs font-bold leading-none text-white">
                  {resumeCounter}
                </div> */}
                    <button
                      className="bg-neutral-200 gap-2 hover:bg-neutral-300 dark:text-white dark:bg-neutral-900  rounded w-full lg:text-2xl text-xl flex items-center justify-between btn px-5 py-2  font-medium  leading-normal shadow-neutral-600 shadow-sm transition duration-150 ease-in-out    focus:outline-none focus:ring-0"
                      type="button"
                      id="dropdownMenuDownload"
                      data-te-dropdown-toggle-ref
                      aria-expanded={isOpen}
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      onClick={handleToggle}
                    >
                      <HiFolderArrowDown size={27} /> Resume
                      <span className="ml-2 w-2">
                        {isOpen ? (
                          <MdKeyboardArrowUp />
                        ) : (
                          <MdKeyboardArrowDown />
                        )}
                      </span>
                    </button>
                    <ul
                      className={`absolute z-[1000] w-full float-left m-0 ${
                        isOpen ? "block" : "hidden"
                      } min-w-max list-none overflow-hidden rounded-lg border-none bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700`}
                      aria-labelledby="dropdownMenuDownload"
                      data-te-dropdown-menu-ref
                    >
                      <li>
                        <a
                          className="block w-full whitespace-nowrap  py-2 px-4 text-sm dark:bg-neutral-500 text-neutral-700 hover:bg-neutral-300 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200  dark:hover:bg-neutral-600 bg-neutral-100"
                          data-te-dropdown-item-ref
                          href={resumeEnglish}
                          download={resumeEnglish}
                        >
                          English
                        </a>
                        <hr className="  h-px border-t-0  bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
                        <a
                          className="block w-full whitespace-nowrap  py-2 px-4 text-sm text-neutral-700 dark:bg-neutral-500 hover:bg-neutral-300 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200  dark:hover:bg-neutral-600 bg-neutral-100"
                          data-te-dropdown-item-ref
                          href={resumeSpanish}
                          download={resumeSpanish}
                        >
                          Español
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
