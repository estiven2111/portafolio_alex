import GitHubCalendar from "react-github-calendar";

const GitHub: React.FC = () => {
  return (
    <div className=" flex flex-col justify-center items-center content-center">
      {/* <section
    className="border-black px-20 py-12  bg-light-orange bg-fixed"
    style={{ backgroundImage: "url(" + workbgimage + ")" }}
  > */}
      <h1 className="font-bold text-4xl md:text-5xl ">GitHub Calendar</h1>
      <div className="flex items-center justify-center mx-5 mt-20 border bg-fuchsia-100/30 border-black dark:border-white border-dotted p-9">
        <GitHubCalendar
          username="Yeraldinnesan"
          blockSize={15}
          blockMargin={5}
          color="#c026d3 "
          fontSize={16}
        />
      </div>
      {/* </section> */}
    </div>
  );
};

export default GitHub;
