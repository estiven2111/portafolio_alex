import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import { memoStack } from "../../data/data";
import img from "../../assets/imgstack/figma.png"
import { GiBrain } from "react-icons/gi";

const MemoStack: React.FC = () => {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const restart = () => {
    setGuessed([]);
    setSelected([]);
  };

  useEffect(() => {
    if (selected.length === 2) {
      if (selected[0].split("|")[1] === selected[1].split("|")[1]) {
        setGuessed((guessed) => guessed.concat(selected));
      }
      setTimeout(() => setSelected([]), 1000);
    }
  }, [selected]);

  useEffect(() => {
    if (guessed.length === memoStack.length) {
      
      Swal.fire({
        title: "FELICIDADES!",
        text: "GANASTE!!!",
        imageUrl:img ,
        // imageUrl: "https://media.giphy.com/media/lMBcCPM0VYfhh2zCAy/giphy.gif",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      }).then(() => {
        restart();
      });
    }
  }, [guessed]);

  return (
    <div className=" pb-16 px-7">
      <div className="flex p-5 md:p-10 text-bold lg:text-4xl text-3xl justify-center ">
        <h1 className="flex md:text-5xl pt-20 gap-3">
          Aprende Jugando <GiBrain />
        </h1>
      </div>

      <p className="text-center pb-10 text-2xl">Por un Bello nuevo y renovado</p>

      <div className="border-2 rounded-lg  shadow-lg shadow-neutral-500    dark:border-neutral-700 dark:bg-neutral-800  p-2 ">
        <ul className="items-center grid lg:grid-cols-7  xs:grid-cols-4 gap-3">
          {memoStack.map((el: string) => {
            const [, url] = el.split("|");
            return (
              <li
                onClick={() =>
                  selected.length < 2 &&
                  setSelected((selected) => selected.concat(el))
                }
                key={el}
                className="  border-[0.5px] border-neutral-500 p-1 cursor-pointer hover:shadow-lg hover:shadow-orange-700 hover:bg-neutral-300  dark:hover:bg-neutral-600  rounded-md"
              >
                {selected.includes(el) || guessed.includes(el) ? (
                  <img

                    alt="icon"
                    src={url}
                    className={`object-cover w-24 h-20 rounded-md ${
                      selected.includes(el) && guessed.includes(el)
                        ? "shadow-orange-700"
                        : guessed.includes(el)
                        ? "shadow-blue-500"
                        : ""
                    }`}
                  />
                ) : (
                  <img
                    className=""
                    src="https://icongr.am/octicons/unverifed.svg?size=90&color=41414"
                    alt="icon"
                    // style={{
                    //   filter: "drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.4))",
                    // }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MemoStack;
