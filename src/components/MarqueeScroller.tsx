import Marquee from "react-fast-marquee";

import {
  illustrator,
  redis,
  next,
  photoshop,
  figma,
  npm,
  angular,
  javascript,
  apollo,
  css,
  django2,
  express,
  graphql,
  mongo,
  node,
  postgre,
  python,
  react,
  redux,
  typescript,
  bootstrap,
  tailwind,
  sass,
  html,
  git,
} from "../assets/index";

const MarqueeScroller: React.FC<{}> = () => {
  return (
    <section>
      <div className="text-center">
        <div className="m-10 pb-10">
          <h1 className="font-bold text-4xl md:text-5xl "></h1>
        </div>
        <div className="sm:mx-20 mx-8">
          <Marquee pauseOnHover direction="right" gradient={false}>
            <div className="flex gap-4 items-center border-0">
              <div className="">
                <img className="w-40 h-36 rounded-md "  src={javascript} alt="angular" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={angular} alt="angular" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={mongo} alt="mongo" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={redux} alt="redux" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={node} alt="node" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={postgre} alt="postgre" />
              </div>
              <div className=" ">
                <img className="w-40 h-36 rounded-md"  src={django2} alt="django" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={react} alt="react" />
              </div>
              <div className="pt-5">
                <img className="w-[150px] " src={next} alt="next" />
              </div>
              <div className=" ">
                <img className="w-40 h-36 rounded-md"  src={python} alt="python" />
              </div>
              <div className=" ">
                <img className="w-40 h-36 rounded-md"  src={npm} alt="npm" />
              </div>
              <div></div>
            </div>
          </Marquee>

          <Marquee pauseOnHover direction="left" gradient={false}>
            <div className="flex gap-4 items-center">
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={html} alt="html" />
              </div>
              <div className="">
                <img className="w-40 " src={figma} alt="figma" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={illustrator} alt="illustrator" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={photoshop} alt="photoshop" />
              </div>
              <div className=" ">
                <img className="w-40 h-36 rounded-md"  src={typescript} alt="typescript" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={express} alt="express" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={redis} alt="redis" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={graphql} alt="graphql" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={apollo} alt="apollo" />
              </div>
              <div className=" ">
                <img className="w-40 h-36 rounded-md" src={css} alt="css" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={git} alt="git" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={tailwind} alt="tailwind" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={bootstrap} alt="bootstrap" />
              </div>
              <div className="">
                <img className="w-40 h-36 rounded-md"  src={sass} alt="sass" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeScroller;
