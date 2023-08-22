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
          <h1 className="font-bold text-4xl md:text-5xl ">My Stack</h1>
        </div>
        <div className="sm:mx-20 mx-8">
          <Marquee pauseOnHover direction="right" gradient={false}>
            <div className="flex gap-4">
              <div className="">
                <img className="" src={javascript} alt="angular" />
              </div>
              <div className="">
                <img className="" src={angular} alt="angular" />
              </div>
              <div className="">
                <img className="" src={mongo} alt="mongo" />
              </div>
              <div className="">
                <img className="" src={redux} alt="redux" />
              </div>
              <div className="">
                <img className="" src={node} alt="node" />
              </div>
              <div className="">
                <img className="" src={postgre} alt="postgre" />
              </div>
              <div className=" ">
                <img className="" src={django2} alt="django" />
              </div>
              <div className="">
                <img className="" src={react} alt="react" />
              </div>
              <div className="pt-5">
                <img className="w-[150px] " src={next} alt="next" />
              </div>
              <div className=" ">
                <img className="" src={python} alt="python" />
              </div>
              <div className=" ">
                <img className="" src={npm} alt="npm" />
              </div>
              <div></div>
            </div>
          </Marquee>

          <Marquee pauseOnHover direction="left" gradient={false}>
            <div className="flex gap-4">
              <div className="">
                <img className="" src={html} alt="html" />
              </div>
              <div className="">
                <img className="" src={figma} alt="figma" />
              </div>
              <div className="">
                <img className="" src={illustrator} alt="illustrator" />
              </div>
              <div className="">
                <img className="" src={photoshop} alt="photoshop" />
              </div>
              <div className=" ">
                <img className="" src={typescript} alt="typescript" />
              </div>
              <div className="">
                <img className="" src={express} alt="express" />
              </div>
              <div className="">
                <img className="" src={redis} alt="redis" />
              </div>
              <div className="">
                <img className="" src={graphql} alt="graphql" />
              </div>
              <div className="">
                <img className="" src={apollo} alt="apollo" />
              </div>
              <div className=" ">
                <img className="" src={css} alt="css" />
              </div>
              <div className="">
                <img className="" src={git} alt="git" />
              </div>
              <div className="">
                <img className="" src={tailwind} alt="tailwind" />
              </div>
              <div className="">
                <img className="" src={bootstrap} alt="bootstrap" />
              </div>
              <div className="">
                <img className="" src={sass} alt="sass" />
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default MarqueeScroller;
