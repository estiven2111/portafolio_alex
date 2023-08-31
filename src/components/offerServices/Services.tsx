import Lottie from "lottie-react";
import animation from "../../assets/lottie/services.json";
import Accordion from "./Accordion";

const Services: React.FC = () => {
  return (
    <div className="relative sm:mx-20  mx-8 ">
      <section className="mb-10">
        <div className="text-center py-45 ">
          <div className=" text-center py-45">
            <h1 className="  font-bold  text-4xl md:text-5xl">POR QUE QUIERO SER CONCEJAL DEL MUNICIPIO DE BELLO </h1>
          </div>
          <div className=" mt-10  text-3xl text-center">
            <p className="">Deseo ser concejal en el municipio de Bello para abordar el preocupante retroceso que hemos enfrentado en áreas estructurales y administrativas. Mi objetivo es restaurar la confianza de los ciudadanos, quienes han perdido fe en la gestión pública debido a la repetición de promesas vacías. Mi enfoque se centrará en revitalizar instalaciones deportivas y de salud, respaldar a la juventud, promover el empleo y la protección del medio ambiente, así como facilitar la colaboración entre las iglesias y la administración para un cambio genuino. Estoy comprometido a construir un futuro en el que Bello recupere su vitalidad y la comunidad vuelva a creer en un progreso real.</p>
          </div>
        </div>
      </section>
      <section>
        <div className=" ">
          <div className=" text-center py-45">
            <h2 className="  font-bold  text-4xl md:text-5xl">Mis compromisos con los Bellanitas</h2>
          </div>
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default Services;
