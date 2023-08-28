import { useState } from "react";
import ContactForm from "../../components/ContactForm";
import resume from "../../assets/downloadable/Resume Yeraldinne sanabria English .pdf";

import { HiFolderArrowDown, HiOutlineArrowLongRight } from "react-icons/hi2";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import resumeEnglish from "../../assets/downloadable/Resume Yeraldinne sanabria English .pdf";
import resumeSpanish from "../../assets/downloadable/Resume Yeraldinne Sanabria Español.pdf";

import { SiLinkedin, SiFreelancer } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { BsCalendar3, BsWhatsapp } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { ImProfile } from "react-icons/im";

import Footer from "../../components/Footer";

const Contact: React.FC = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:mx-20 mx-8  ">
      <div className="grid sm:grid-cols-2  ">
        <div className="w-full grid grid-row  my-10  justify-center md:order-first order-last">
        <div className="flex items-center gap-4 sm:pb-3 p justify-center">
              <a
                className="hover:scale-110"
                target="_blank"
                href="https://www.instagram.com/almescare/"
              >
                <SiInstagram className="text-3xl" />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/alexander.meneses1"
                className="hover:scale-110"
              >
                <FaFacebook className="text-4xl" />
              </a>
            </div>
          <div>
            <div className="justify-center">
              <div className="relative">
                <div className="relative" data-te-dropdown-ref>
                  {/* <div className="absolute top-0 right-0 bottom-auto left-auto z-10 inline-block translate-x-2/4 -translate-y-1/2 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-fuchsia-700   py-1 px-1.5 text-center align-baseline text-xs font-bold leading-none text-white">
                  {resumeCounter}
                </div> */}
                  {/* <button
                    className=" bg-neutral-200 hover:bg-neutral-300 dark:text-white dark:bg-neutral-900  rounded w-full lg:text-2xl text-xl flex items-center justify-between btn px-5 py-2  font-medium  leading-normal shadow-neutral-600 shadow-sm transition duration-150 ease-in-out    focus:outline-none focus:ring-0"
                    type="button"
                    id="dropdownMenuDownload"
                    data-te-dropdown-toggle-ref
                    aria-expanded={isOpen}
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={handleToggle}
                  >
                    <HiFolderArrowDown size={27} /> Resume
                    <span>
                      {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                    </span>
                  </button> */}
                  {/* <ul
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
                  </ul> */}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-10   md:gap-10 align-center  ">
            <AiOutlineMail className="md:text-5xl text-4xl" />{" "}
            <span className=" text-xl md:mt-2">almes052@gmail.com</span>
          </div>
          <div className="flex gap-5 my-10   md:gap-10 align-center  ">
            <BsCalendar3 className="md:text-5xl text-3xl" />{" "}
            <a
              target="_blank"
              href="https://calendly.com/almes052"
              className=" text-xl md:mt-2"
            >
              Agendemos una cita
            </a>
          </div>
          <div className="flex gap-5  md:gap-10 align-center    ">
            <SiFreelancer className="md:text-5xl mt-2 text-4xl" />{" "}
            <div className="felx flex-col">
              <h1 className=" md:mb-1 text-xl text-bold">Concejal Bello</h1>
              <p className="text-neutral-500 text-bold">
                POR UN BELLO NUEVO Y RENOVADO
              </p>
            </div>
          </div>
        </div>
        <div className=" md:mx-5 mt-6  md:my-12">
          <div className="font-bold md:text-5xl text-3xl text-center ">
            <h1>Contactame</h1>
          </div>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
