import { Link } from "react-router-dom";
import { portfolioData } from "../../data/data.js";
import ProjectList from "./ProjectList";
import { BsArrowRight } from "react-icons/bs";

const FeatureProjects: React.FC = () => {
  const filteredProjects = portfolioData.filter((el) => el.badge === "New");

  return (
    <section className="sm:mx-20  mx-8">
      <div className=" pb-12">
        <div className="flex content-center">
          <h2 className=" mx-auto text-center text-bold text-4xl md:text-5xl font-bold ">
            This is some of my best work
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {filteredProjects?.map((el: any, i: number) => {
          return (
            <Link to={el.link} key={i} className="">
              <ProjectList
                title={el.title}
                link={el.link}
                thumbnail={el.thumbnail}
                badge={el.badge}
                category={el.category}
                alt={el.alt}
              />
            </Link>
          );
        })}
      </div>
      <div className="flex p-4 pb-10 items-center justify-center">
        <Link to="/portfolio">
          <div className=" ">
            <h5 className=" lg:text-2xl text-xl dark:hover:text-fuchsia-600 hover:text-fuchsia-600  font-medium leading-tight text-neutral-800 dark:text-neutral-50 ">
              <BsArrowRight /> See More
            </h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default FeatureProjects;
