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
import jumbotron2 from "../../assets/images/jumbotron2.jpg";
import { SiInstagram } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
const Bio: React.FC = ({}) => {
  return (
    <div>
      {/* <Jumbotron /> */}

      <section className="min-h-screen items-center justify-center">
        <div className="py-5 p-12 items-center justify-center rounded-3xl ">
          <img
            style={{ width: "100%", height: "400px" }}
            className="py-5  rounded-3xl  shadow-lg bg-transparent shadow-orange-600 dark:shadow-white"
            src={jumbotron2}
            alt=""
          />
        </div>
        <br />
        <div className=" sm:mx-20  mx-8  grid gap-8 sm:text-sm  sm:grid-cols-2">
          <div className="md:flex-1 ">
            <p className="mb-2 sm:text-2xl text-xl text-justify">
              Soy un orgulloso <strong>"Bellanita"</strong>, nacido y criado
              entre los entrañables barrios Suárez y La Cumbre. Mi vocación como
              auxiliar de enfermería ha sido mi dedicación principal,
              extendiendo cuidados y alivio a lo largo de los años. A la par de
              esta vocación, también me he forjado como tecnólogo en seguridad y
              salud en el trabajo, enfocado en garantizar el bienestar en todos
              los aspectos. Con 42 años de vida, gran parte de ellos han sido
              iluminados por mi compromiso pastoral, siendo una parte activa y
              comprometida de diversos grupos pastorales en la Iglesia Católica.
              Mi historia es un testimonio de servicio, fe y entrega a la
              comunidad.
            </p>
            <p className="mb-2 sm:text-2xl text-xl text-justify">
              Soy el hijo mayor de una familia con tres hijos originaria de
              Bello, Mi padre desempeñó como montador de telarex en Fabricato,
              mientras que mi madre ha sido ama de casa, dedicándose siempre al
              cuidado y atención de mis hermanos menores y de mi. Mis raíces
              maternas se encuentran en el barrio Suárez, mientras que por parte
              paterna, pertenecemos al barrio Andalucía. Llevo seis años de
              matrimonio y he sido bendecido con una hija de 17 años. En nuestro
              hogar, prevalece la unión familiar, basada en el apoyo mutuo que
              nos brindamos unos a otros.
            </p>
          </div>

          <div className="md:flex-1  mt-5 sm:order-1 -order-1">
            <div className="text-center">
              <img
                src={avatar}
                className="mx-auto mb-4 w-44 rounded-3xl shadow-lg bg-transparent shadow-orange-600 dark:shadow-white"
                alt="Avatar"
              />
              <h5 className="mb-2 lg:text-2xl font-bold text-xl text-semibold  leading-tight">
                Alexander Meneses Maritnez
              </h5>
              <p className="text-neutral-500 lg:text-1xl text-xl dark:text-neutral-400">
                Concejal 2024-2027
              </p>
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
              <blockquote className="px-10 pt-5">
                <h3
                  className="text-3xl font-bold"
                  style={{ fontFamily: "Cambria Math" }}
                >
                  POR UN BELLO NUEVO Y RENOVADO.
                </h3>
                <div className="flex justify-center items-end">
                  <p className=" text-lg" style={{ fontFamily: "roboto" }}>
                    "Soñar no sirve de nada si te olvidas de vivir"
                  </p>
                </div>
                <div className="flex justify-center items-end">
                  <p className=" text-lg" style={{ fontFamily: "roboto" }}>
                    Albus Dumbledore - Harry Potter
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

      {/* <section className=" py-10">
        <GitHub />
      </section> */}
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
