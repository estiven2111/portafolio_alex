import { certificates } from "../../data/data";
import { HiExternalLink } from "react-icons/hi";

const Certificates: React.FC<{}> = () => {
  return (
    <div className="my-20">
     
      <div className="mb-20 text-center">
        
        <h1 className="font-bold text-4xl md:text-5xl">
          Estudio, trabajo y Pasión
        </h1>
      </div>
      <div className="grid sm:grid-cols-1 gap-6  ">
        {certificates.map((el) => (
          <div className="py-5 p-9 rounded-lg hover:shadow-yellow-600 dark:hover:shadow-yellow-600 dark:shadow-neutral-50 shadow-md   hover:scale-105 ">
            <div className=" text-center text-xl">
              <div>
                <h2 className=" text-center dark:text-white-400 text-4xl">
                  <strong>{el.title}</strong>
                </h2>
              </div>
            </div>
            <br />
            <div>
              <div>
                <p className=" text-left dark:text-white-400 text-2xl">{el.certLink}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

{
  /* <div className="my-20">
      <div className="mb-20 text-center">
        <h1 className="font-bold text-4xl md:text-5xl">Certifications</h1>
      </div>
      <div className="grid sm:grid-cols-2 gap-6  ">
        {certificates.map((el) => (
          <div className="py-5 rounded-lg hover:shadow-fuchsia-600 dark:hover:shadow-fuchsia-600 dark:shadow-neutral-50 shadow-md   hover:scale-105 ">
            <a target="_blank" href={el.certLink} className=" text-3xl ">
              <div className=" mx-4 items-center flex  justify-between ">
                <div>
                  <h1 className=" text-xl ">{el.title}</h1>
                </div>
                <div>
                  <HiExternalLink />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div> */
}

export default Certificates;
