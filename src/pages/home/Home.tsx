import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";

import { useEffect, useState } from "react";
import Loading from "../../components/loading/Loading";

//------
import Lottie from "lottie-react";
import hero from "../../assets/lottie/services.json";
import Services from "../../components/offerServices/Services";
import FeatureProjects from "../../components/featWork/FeatureProjects";
import profile from "../../assets/profile/profile.jpg";
import video from "../../assets/video/video.mp4";

// --------Styles----
import "./css/home.css";

const Home: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return loading ? (
    <div className="h-screen ">
      <Loading />
    </div>
  ) : (
    <div>
      <div className="relative h-screen justify-center items-center">
        <div className="absolute grid md:grid-cols-2 left-0 h-full w-full overflow-hidden ">
          <div className="flex flex-col sm:my-8 px-5 justify-center text-center   sm:mx-20 h-full  mx-4 mt-10 ">
            <div className="">
              <h2 className="mb-4 gap-7 text-4xl md:text-5xl font-semibold">
                Hola!!
                <span>👋</span>
                <br /> <span className="md:text-5xl text-2xl">SOY </span>
                <span
                  className="sm:text-6xl font-extrabold text-4xl text-[#FF7600]"
                  style={{ fontFamily: "Oswald" }}
                >
                  ALEXANDER MENESES MARTINEZ
                </span>
                <span className="mb-4 ml-1 text-1lg sm:text-3xl font-semibold">
                  <br />
                </span>
                <span className="md:text-5xl text-3xl text-[#FF7600] dark:text-[#FF7600]">
                  Candidato al Concejo de Bello 2024-2027
                </span>
              </h2>
            </div>
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

            <div className="flex flex-col items-center   gap-5 rounded  px-7 pt-2 sm:pt-4 pb-2 sm:pb-4 text-xs sm:text-lg font-medium transition duration-150 ease-in-out">
              <Link to="/contact">
                <button className="btn lg:text-6xl text-white text-xl">
                  Hablemos
                </button>
              </Link>
              {/* <HashLink
                to="#featured-work"
                className="sm:py-2 sm:px-4 py-2 px-2 border-2 border-[#ff7700d3] rounded-md sm:text-2xl text-xl shadow-lg hover:shadow-[#ff7700d3]  hover:border-[#ff7700d3] dark:border-neutral-50"
              >
                Compromisos
              </HashLink>
              <br></br> */}
            </div>
          </div>

          <div className="flex md:w-full">
            <div className="flex justify-center items-center h-full">
              <img
                src={profile}
                className="rounded-sm max-w-full max-h-full md:w-9/12 py-5"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-12 ">
        <Services />
      </div>
    <div className="flex justify-center items-center h-screen">
      <video controls autoPlay className="max-w-full">
        <source src={video} type="video/mp4" />
      </video>
    </div>

      {/* <div className="pt-12" id="featured-work">
        <FeatureProjects />
      </div> */}
    </div>
  );
};

export default Home;
