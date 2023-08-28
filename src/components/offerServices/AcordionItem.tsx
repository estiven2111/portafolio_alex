import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { Collapse } from "react-collapse";

interface Props {
  title: string;
  description: string;
  open: boolean;
  toggle: (index?: number) => void;
  index: number;
}

const AccordionItem: React.FC<Props> = ({
  toggle,
  open,
  title,
  description,
  index,
}) => {
  return (
    <div className="my-5">
      <div
        className=" hover:text-yellow-600 transition duration-200 flex justify-between items-center cursor-pointer rounded-none border border-t-0 border-l-0 border-r-0 border-neutral-400 dark:border-neutral-600 "
        onClick={() => toggle(index)}
      >
        <p className="sm:text-2xl text-xl font-semibold py-1 ">{title} </p>
        <div className="text-bold ">
          {open ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </div>
      </div>
      <Collapse isOpened={open}>
        <div className="px-[10px] whitespace-pre-line opacity-75 py-2 md:text-xl text-lg pb-[20px] leading-tight text-justify">
          {description}
        </div>
      </Collapse>
    </div>
  );
};

export default AccordionItem;
