import Jumbotron from "../../components/Jumbotron";

import GitHub from "../../components/GitHub";
import Navigation from "../../components/navigation/Navigation";
import Toggle from "../../components/navigation/Toggle";
import workbgimage from "../assets/images/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";

import avatar from "../../assets/images/Subject.png";

import { SiLinkedin } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

import { Link } from "react-router-dom";
import MarqueeScroller from "../../components/MarqueeScroller";
import Certificates from "../../components/cetificateSection/Certificates";
import BackToTop from "../../components/BackToTop";

const Bio: React.FC = ({}) => {
  return (
    <div>
      <Jumbotron />
      <section className="min-h-screen ">
        <div className=" sm:mx-20  mx-8  grid gap-8 sm:text-sm  sm:grid-cols-2">
          <div className="md:flex-1 ">
            <p className="mb-2 sm:text-2xl text-xl text-justify">
              As a <strong>Full-Stack Web Developer</strong>, I'm passionate
              about bringing dreams to life through my work. For me, web
              development is not just a job, but a way to create hope and make a
              positive impact in the world. I believe that every project has the
              potential to change someone's life, and that is why I pour my
              heart and soul into every website I build. <br />
              I'm constantly pushing the boundaries of what's possible,
              exploring new technologies and techniques to create innovative
              solutions that meet my client's needs. <br />
              Collaboration and effective communication are at the core of my
              approach. I believe that building successful web applications
              requires a team effort, and I always strive to work closely with
              my clients and colleagues to bring their visions to life. I
              believe that our dreams give us hope for a better future, and I'm
              committed to using my skills and passion to help make those dreams
              a reality. <br />
            </p>
          </div>

          <div className="md:flex-1  mt-5 sm:order-1 -order-1">
            <div className="text-center">
              <img
                src={avatar}
                className="mx-auto mb-4 w-32 rounded-full shadow-lg bg-transparent shadow-neutral-600 dark:shadow-white"
                alt="Avatar"
              />
              <h5 className="mb-2 lg:text-2xl font-bold text-xl text-semibold  leading-tight">
                Yeraldinne Sanabria
              </h5>
              <p className="text-neutral-500 lg:text-1xl text-xl dark:text-neutral-400">
                Web Developer
              </p>
              <div className="flex gap-4 pb-4 mt-3 content-center justify-center">
                <a
                  className="hover:scale-110"
                  target="_blank"
                  href="https://www.linkedin.com/in/yeraldinne-sanabria/"
                >
                  <SiLinkedin size={20} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/Yeraldinnesan"
                  className="hover:scale-110"
                >
                  <FaGithubSquare size={20} />
                </a>
                <Link className="hover:scale-110" to="/contact">
                  <TfiEmail size={20} />
                </Link>
              </div>
              <blockquote className="px-10 pt-5">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Zeyada" }}
                >
                  " The only thing worse than being blind is having sight but no
                  vision. "
                </h3>
                <div className="flex justify-end items-end">
                  <p className=" text-lg" style={{ fontFamily: "Zeyada" }}>
                    Helen Keller
                  </p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="sm:mx-20  mx-8">
          <Certificates />
        </div>
        <section className="  my-10 ">
          <MarqueeScroller />
        </section>
      </section>

      <section className=" py-10">
        <GitHub />
      </section>
    </div>
  );
};

export default Bio;

// import Jumbotron from "../../components/Jumbotron";

// import GitHub from "../../components/GitHub";
// import Navigation from "../../components/navigation/Navigation";
// import Toggle from "../../components/navigation/Toggle";
// import workbgimage from "../assets/images/annie-spratt-0ZPSX_mQ3xI-unsplash.jpg";

// import avatar from "../../assets/images/Subject.png";

// import { SiLinkedin } from "react-icons/si";
// import { FaGithubSquare } from "react-icons/fa";
// import { TfiEmail } from "react-icons/tfi";

// import { Link } from "react-router-dom";
// import MarqueeScroller from "../../components/MarqueeScroller";
// import Certificates from "../../components/cetificateSection/Certificates";

// const Bio: React.FC = ({}) => {
//   return (
//     <div>
//       <Jumbotron />

//       <section className="min-h-screen ">
//         <div className=" sm:mx-20  mx-8  grid gap-8 sm:text-sm  sm:grid-cols-2">
//           <div className="md:flex-1 md:order-1">
//             <p className="mb-2  xs:mt-10 lg:mt-1 lg:text-2xl text-xl text-justify">
//               As a <strong>Full-Stack Web Developer</strong>, I'm passionate
//               about bringing dreams to life through my work. For me, web
//               development is not just a job, but a way to create hope and make a
//               positive impact in the world. I believe that every project has the
//               potential to change someone's life, and that is why I pour my
//               heart and soul into every website I build. <br />
//               I'm constantly pushing the boundaries of what's possible,
//               exploring new technologies and techniques to create innovative
//               solutions that meet my client's needs. <br />
//               Collaboration and effective communication are at the core of my
//               approach. I believe that building successful web applications
//               requires a team effort, and I always strive to work closely with
//               my clients and colleagues to bring their visions to life. I
//               believe that our dreams give us hope for a better future, and I'm
//               committed to using my skills and passion to help make those dreams
//               a reality. <br />
//             </p>
//             <blockquote className="p-10">
//               <h3
//                 className="text-3xl font-bold"
//                 style={{ fontFamily: "Zeyada" }}
//               >
//                 " The only thing worse than being blind is having sight but no
//                 vision. "
//               </h3>
//               <div className="flex justify-end items-end">
//                 <p className="mb-2 text-lg" style={{ fontFamily: "Zeyada" }}>
//                   Helen Keller
//                 </p>
//               </div>
//             </blockquote>
//           </div>

//           <div className="md:flex-1 md:order-2 my-1">
//             <div className="text-center">
//               <img
//                 src={avatar}
//                 className="mx-auto mb-4 w-32 rounded-full shadow-lg bg-transparent shadow-neutral-600 dark:shadow-white"
//                 alt="Avatar"
//               />
//               <h5 className="mb-2 lg:text-2xl text-xl text-semibold font-medium leading-tight">
//                 Yeraldinne Sanabria
//               </h5>
//               <p className="text-neutral-500 lg:text-1xl text-xl dark:text-neutral-400">
//                 Web Developer
//               </p>
//               <div className="flex gap-4 pb-4 mt-3 content-center justify-center">
//                 <a
//                   className="hover:scale-110"
//                   target="_blank"
//                   href="https://www.linkedin.com/in/yeraldinne-sanabria/"
//                 >
//                   <SiLinkedin size={20} />
//                 </a>
//                 <a
//                   target="_blank"
//                   href="https://github.com/Yeraldinnesan"
//                   className="hover:scale-110"
//                 >
//                   <FaGithubSquare size={20} />
//                 </a>
//                 <Link className="hover:scale-110" to="/contact">
//                   <TfiEmail size={20} />
//                 </Link>
//               </div>
//               <div className="py-10 sm:px-10">
//                 <Certificates />
//               </div>
//             </div>
//           </div>
//         </div>
//         <section className="  my-20 ">
//           <MarqueeScroller />
//         </section>
//       </section>

//       <section className=" my-9 py-12">
//         <GitHub />
//       </section>
//     </div>
//   );
// };

// export default Bio;
