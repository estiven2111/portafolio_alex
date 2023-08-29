import { servicesData } from "../../data/data.js";

import Lottie from "lottie-react";
import animation from "../../assets/lottie/home.json";
import AcordionItem from "./AcordionItem.js";
import { useState } from "react";
import Loading from "../../assets/loading/logoNFD.png"

const Accordion: React.FC<{}> = () => {
  const [open, setOpen] = useState<boolean[]>(servicesData.map(() => false));
  const toggleHandler = (index: number) => {
    setOpen((prevOpen) => {
      const newOpen = [...prevOpen];
      if (!prevOpen[index]) {
        prevOpen.forEach((item, i) => {
          if (i !== index) {
            newOpen[i] = false;
          }
        });
      }
      newOpen[index] = !prevOpen[index];
      return newOpen;
    });
  };

  return (
    <div className="flex  justify-center w-full py-10">
      <div className="flex flex-col lg:flex-row gap-10 items-center content-center my-3 py-3 rounded-lg  ">
        <div className=" w-6/12 ">
          {/* <Lottie animationData={animation} loop={true} /> */}
          <img src={Loading} alt="" />
        </div>

        <div>
          {servicesData?.map((el: any, i: any) => {
            return (
              <AcordionItem
                open={open[i]}
                toggle={() => toggleHandler(i)}
                key={i}
                title={el.title}
                description={el.description}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
