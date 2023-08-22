import { useState } from "react";
import { IoChevronForwardSharp, IoChevronBackSharp } from "react-icons/io5";

interface Props {
  slide: string[];
}

const SlideDots: React.FC<{ slideLength: number; activeIndex: number }> = ({
  slideLength,
  activeIndex,
}) => {
  return (
    <div className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 mb-1">
      {Array.from({ length: slideLength }).map((_, index) => (
        <div
          key={index}
          className={`h-3 w-3 rounded-sm shadow-xl shadow-fuchsia-500 ${
            activeIndex === index
              ? "bg-fuchsia-800/60 "
              : "bg-fuchsia-200/50 hover:bg-fuchsia-800/20 "
          }`}
        ></div>
      ))}
    </div>
  );
};

const SlideShow: React.FC<Props> = ({ slide }) => {
  const [currImage, setCurrImage] = useState<number>(0);

  const prev = () =>
    setCurrImage((currImage) =>
      currImage === 0 ? slide.length - 1 : currImage - 1
    );
  const next = () =>
    setCurrImage((currImage) =>
      currImage === slide.length - 1 ? 0 : currImage + 1
    );

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translate(-${currImage * 100}%)` }}
      >
        {slide?.map((el, i) => (
          <img key={i} src={el} alt="img" />
        ))}
      </div>
      <SlideDots slideLength={slide.length} activeIndex={currImage} />
      <div className="absolute inset-0 flex items-center justify-between text-fuchsia-800 p-4">
        <button onClick={prev} className="p-[0.9] ">
          <IoChevronBackSharp className="hover:opacity-90" size={50} />
        </button>
        <button className="p-[0.9] " onClick={next}>
          <IoChevronForwardSharp className="hover:opacity-90" size={50} />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;

//
