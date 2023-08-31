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
            <SideBarIcon icon={<BsHouseDoorFill size={29} />} text={"Inicio"} />
          </Link>
          <Link to="/bio">
            <SideBarIcon icon={<ImProfile size={29} />} text={"Quien es alexander"} />
          </Link>
          {/* <Link to="/portfolio">
            <SideBarIcon icon={<MdWork size={29} />} text={"Portfolio"} />
          </Link> */}
          <Link to="/games">
            <SideBarIcon icon={<GiGamepad />} text={"Aprende jugando"} />
          </Link>
          <Link to="/contact">
            <SideBarIcon
              icon={<MdContactPhone size={29} />}
              text={"Contactame"}
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
            className="p-4 hover:text-[#FF7600]"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/">Inicio</Link>
          </div>
          <div
            className="p-4 hover:text-[#FF7600]"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/bio">Quien es alexander</Link>
          </div>
          {/* <div
            className="p-4 hover:text-[#FF7600]"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/portfolio">Portfolio</Link>
          </div> */}
          <div
            className="p-4 hover:text-[#FF7600]"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/games">Aprende Jugando</Link>
          </div>
          <div
            className="p-4 hover:text-[#FF7600]"
            onClick={() => setShowNavigation(false)}
          >
            <Link to="/contact">Contactame</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
