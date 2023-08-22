import { Link } from "react-router-dom";
import { useState } from "react";

import resumeEnglish from "../assets/downloadable/Resume Yeraldinne sanabria English .pdf";
import resumeSpanish from "../assets/downloadable/Resume Yeraldinne Sanabria Español.pdf";
import jumbotron2 from "../assets/images/jumbotron2.jpg";

import { HiFolderArrowDown, HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const Jumbotron: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [resumeCounter, setResumeCounter] = useState(0);

  // const counterHandler = () => {
  //   const total = resumeCounter + 1;

  //   setResumeCounter(total);
  // };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative  sm:h-[200px] md:h-[250px] lg:h-[200px] xl:h-[350px] h-full">
      <div
        className="bg-neutral-100 p-12 sm:first-letter text-center text-black dark:bg-neutral-700 dark:text-black bg-cover bg-center"
        style={{ backgroundImage: `url(${jumbotron2})` }}
      >
        <h1 className="text-4xl  lg:text-5xl xl:text-7xl font-bold mb-4">
          Yeraldinne Sanabria
        </h1>
        <h4 className="mb-6 text-xl font-semibold">Full-Stack Developer</h4>
        <div className="flex flex-col sm:flex-row items-center md:text-xs gap-4 justify-center content-center">
          <Link to="/contact">
            <button
              type="button"
              data-te-ripple-init
              data-te-ripple-color="light"
              className="rounded flex lg:text-2xl text-xl items-center gap-4 justify-center content-center btn px-5 py-2  font-medium  leading-normal shadow-fuchsia-600 shadow-sm transition duration-150 ease-in-out    focus:outline-none focus:ring-0 "
            >
              Let's talk <HiOutlineArrowLongRight />
            </button>
          </Link>

          <div className="flex justify-center">
            <div className="relative">
              <div className="relative" data-te-dropdown-ref>
                {/* <div className="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-fuchsia-700   py-1 px-1.5 text-center align-baseline text-xs font-bold leading-none text-white">
                  {resumeCounter}
                </div> */}
                <button
                  className="btn rounded lg:text-2xl text-xl flex items-center gap-2 justify-center content-center btn px-5 py-2  font-medium  leading-normal shadow-fuchsia-600 shadow-sm transition duration-150 ease-in-out    focus:outline-none focus:ring-0"
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
                    {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
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
  );
};

export default Jumbotron;
