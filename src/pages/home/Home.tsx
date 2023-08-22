import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

//------
import Lottie from "lottie-react";
import hero from "../../assets/lottie/services.json";
import Services from "../../components/offerServices/Services";
import FeatureProjects from "../../components/featWork/FeatureProjects";

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
    <div className="h-screen justify-center  items-center">
      <Loading />
    </div>
  ) : (
    <div>
      <div className="relative h-screen">
        <div className="absolute grid md:grid-cols-2 left-0 h-full w-full overflow-hidden ">
          <div className="flex flex-col sm:my-8 justify-center sm:mx-20 h-full text-center items-center   mx-4 mt-10 ">
            <div>
              <h2 className="mb-4 gap-7 text-4xl md:text-5xl font-semibold">
                Hola!!
                <span>👋</span>
                <br /> <span className="md:text-5xl text-2xl">SOY </span>
                <span
                  className="sm:text-6xl font-extrabold text-4xl text-fuchsia-600"
                  style={{ fontFamily: "Oswald" }}
                >
                  ALEXANDER MENESES
                </span>
                <span className="mb-4 ml-1 text-1lg sm:text-3xl font-semibold">
                    <br />
                </span>
                <span className="md:text-5xl text-3xl text-fuchsia-800 dark:text-fuchsia-300">
                 Candidato al Concejo de Bello
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-4 sm:pb-3 p justify-center">
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

            <div className="flex flex-col items-center   gap-5 rounded  px-7 pt-2 sm:pt-4 pb-2 sm:pb-4 text-xs sm:text-lg font-medium transition duration-150 ease-in-out">
              <Link to="/contact">
                <button className="btn lg:text-2xl text-xl">Hablemos</button>
              </Link>
              <HashLink
                to="#featured-work"
                className="sm:py-2 sm:px-4 py-2 px-2 border-2 border-fuchsia-900 rounded-md sm:text-2xl text-xl shadow-lg hover:shadow-fuchsia-600  hover:border-fuchsia-600 dark:border-neutral-50"
              >
                propuestas
              </HashLink>
            </div>
          </div>
          <div className="flex items-center">
            <Lottie animationData={hero} loop={true} />
          </div>
        </div>
      </div>

      <div className="pt-12 ">
        <Services />
      </div>

      <div className="pt-12" id="featured-work">
        <FeatureProjects />
      </div>
    </div>
  );
};

export default Home;
