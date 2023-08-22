// import ProjectDetail from "../../components/featWork/ProjectList";
import ProjectDetail from "../../components/portfolio/ProjectDetail";
import { HashLink } from "react-router-hash-link";

import { portfolioData } from "../../data/data";
import BackToTop from "../../components/BackToTop";

const Portfolio: React.FC = ({}) => {
  return (
    <div
      id="top"
      className=" content-center pt-10 mb-20 sm:mx-20  mx-8  text-justify"
    >
      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {portfolioData?.map((el: any, i: number) => (
          <HashLink to={`#${el.hashlink}`} key={i} className="scroll-link ">
            <div className="flex flex-col  px-3">
              <div className="flex sm:flex-col bg-neutral-100 shadow-neutral-400  w-full rounded-lg hover:scale-105 ease-in-out dark:shadow-white shadow-lg dark:bg-neutral-700  md:flex-row">
                <img
                  className="sm:h-20 w-[150px] sm:w-full  object-cover md:h-auto md:w-40 md-rounden-none rounded-l-lg"
                  src={el.thumbnail}
                  alt={el.alt}
                />
                <div className="flex flex-col  p-6">
                  <h5 className="mb-2 sm:text-xl text-2sm font-medium text-neutral-800 dark:text-neutral-50">
                    <strong>{el.title}</strong>
                  </h5>
                  <p className="sm:text-md text-xs"> {el.type} </p>
                </div>
              </div>
            </div>
          </HashLink>
        ))}
      </div>

      {portfolioData.map((el, i) => (
        <ProjectDetail
          key={i}
          title={el.title}
          repo={el.repo}
          video={el.video}
          description={el.description}
          category={el.category}
          slide={el.slide}
          stack={el.stack}
          hashlink={el.hashlink}
        />
      ))}
      <BackToTop />
    </div>
  );
};

export default Portfolio;
