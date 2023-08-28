import Lottie from "lottie-react";
import animation from "../../assets/lottie/services.json";
import Accordion from "./Accordion";

const Services: React.FC = () => {
  return (
    <div className="relative sm:mx-20  mx-8">
      <section>
        <div className=" ">
          <div className=" text-center py-45">
            <h1 className="  font-bold  text-4xl md:text-5xl">Mis compromisos con los Bellanitas</h1>
          </div>
          <Accordion />
        </div>
      </section>
    </div>
  );
};

export default Services;
