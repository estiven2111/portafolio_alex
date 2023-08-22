import SlideShow from "./SlideShow";
import { useState } from "react";
import { GoLink } from "react-icons/go";
import { BsYoutube } from "react-icons/bs";

interface Props {
  title: string;
  description: string;
  category: string;
  hashlink: string;
  repo: string;
  video?: string;
  slide: string[];
  stack: string[];
}
const ProjectDetail: React.FC<Props> = ({
  title,
  hashlink,
  description,
  video,
  slide,
  repo,
  stack,
  category,
}) => {
  const [expand, setExpand] = useState<boolean>(false);

  const expandToggle = () => setExpand(!expand);

  return (
    <section id={hashlink} className="  py-10 md:h-screen text-justify">
      <div className="text-center font-bold md:text-5xl text-4xl">
        <h1>{title}</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:gap-5 content-center">
        <div className=" text-lg md:order-first order-last">
          <div className="text-lg md:my-10 ">
            {expand ? (
              <div className="md:mt-10 ">
                <p className=""> {description} </p>

                <div
                  onClick={expandToggle}
                  className="text-right hover:text-fuchsia-500 cursor-pointer font-bold text-fuchsia-600 mr-2"
                >
                  see less
                </div>
              </div>
            ) : (
              <div className="mt-10 -end">
                <p>
                  {description.slice(0, 280)}
                  {description.length > 280 && "..."}
                </p>
                {description.length > 280 && (
                  <div
                    onClick={expandToggle}
                    className="text-right hover:text-fuchsia-500 cursor-pointer font-bold text-fuchsia-600 mr-2"
                  >
                    see more
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="my-7">
            <p>
              <strong>Category:</strong> {category}
            </p>
          </div>
          <div className="my-7">
            <div className="py-5 my-5 border-2 rounded-lg hover:shadow-fuchsia-600 dark:hover:text-fuchsia-600 dark:border-neutral-600 dark:hover:shadow-fuchsia-600 dark:shadow-neutral-50 shadow-md hover:text-fuchsia-900 ">
              <a target="_blank" href={repo} className=" text-3xl ">
                <div className=" mx-4 items-center flex  justify-between ">
                  <div>
                    <h1 className=" text-xl ">Repository</h1>
                  </div>
                  <div>
                    <GoLink />
                  </div>
                </div>
              </a>
            </div>
            <div className="py-5 my-5 border-2 rounded-lg hover:shadow-fuchsia-600 dark:hover:text-fuchsia-600 dark:border-neutral-600 dark:hover:shadow-fuchsia-600 dark:shadow-neutral-50 shadow-md hover:text-fuchsia-900 ">
              <a target="_blank" href={video} className=" text-3xl ">
                <div className=" mx-4 items-center flex  justify-between ">
                  <div>
                    <h1 className=" text-xl ">Demo</h1>
                  </div>
                  <div>
                    <BsYoutube />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="my-10 order-first">
            <div className="w-full ">
              <div className="border-2 order-first">
                <SlideShow slide={slide} />
              </div>
              <div>
                <div className=" items-center md:my-20 gap-5 text-xl">
                  <div className="flex my-10 gap-3 justify-center md:mx-3">
                    {stack?.map((el, i) => (
                      <div className="">
                        <img
                          key={i}
                          className="sm:w-[60px] w-[40px]"
                          src={el}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
