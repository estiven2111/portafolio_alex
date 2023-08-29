import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Footer from "./Footer";

import useShoworHide from "../hooks/ShoworHide";

const CalltoAction: React.FC = () => {
  const hideOnContact = useShoworHide("/contact");
  return hideOnContact ? (
    <div>
      <section className="px-4 py-1 hover:bg-orange-600 dark:hover:text-white  cursor-pointer hover:bg-gradient-to-b from-neutral-200 ease-in-out duration-150 dark:hover:bg-gradient-to-b dark:from-zinc-900 to-orange-600">
     
          <div className="container mx-auto sm:flex gap-8 py-10 px-8 justify-between ">
            <div className="flex-col items-end">
              <h2 className="text-2xl"> Alexander Meneses Martinez</h2>
              <h1 className="text-3xl lg:text-5xl xl:text-7xl">
              POR UN BELLO NUEVO Y RENOVADO
              </h1>
            </div>
             </div>
        <Footer />
      </section>
    </div>
  ) : null;
};

export default CalltoAction;
