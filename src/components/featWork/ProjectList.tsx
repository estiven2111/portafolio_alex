import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  category: string;
  link: string;
  badge?: string;
  thumbnail: string;

  alt: string;
}

const ProjectList: React.FC<Props> = ({
  title,
  link,
  badge,
  thumbnail,
  alt,
}) => {
  return (
    <Link to={link}>
      <div className="relative justify-center  shadow-lg hover:shadow-neutral-600 hover:scale-105 hover:text-[#ff7700d3]">
        {badge && (
          <span className="absolute text-lg -top-1  -right-1 inline-block whitespace-nowrap rounded-[0.27rem] bg-primary-100 px-[0.45em] pt-[0.25em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
            {badge}
          </span>
        )}

        <div className=" block w-50 h-70  rounded-sm bg-white shadow-lg dark:bg-neutral-700 hover:shadow-xl  dark:hover:shadow-white">
          <img
            className="w-full h-50 rounded-t-sm  overflow-hidden"
            src={thumbnail}
            alt={alt}
          />

          <div className="flex items-center justify-between p-3 hover:text-[#ff7700d3]">
            <h5 className="mb-1 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {title}
            </h5>
            <BsArrowRight className="text-sm hover:text-[#ff7700d3]" />
          </div>
        </div>

        {/* <div className="block  mb-5 max-w-sm rounded-sm shadow-lg dark:bg-neutral-700 dark:hover:shadow-white overflow-hidden">
        <img src={thumbnail} alt={alt} loading="lazy" />
        </div>
        <div className="mx-0 p-2 text-md flex justify-between gap-4 items-center">
        <span className=" font-bold"> {title} </span>
        <span className="text-xs text-gray">&#9679; {category}</span>
      </div> */}
      </div>
    </Link>
  );
};

export default ProjectList;
