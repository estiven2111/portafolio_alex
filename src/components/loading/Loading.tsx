import loading from "../../assets/loading/logoNFD.png";
import numero from "../../assets/loading/logo5.png";
import "./loading.css"

const Loading: React.FC = () => {
  return (
    <div className="container-loading">
      <img src={loading} alt="loading..."/>
      <img src={numero} alt="loading..."/>
      {/* <p className="numero5">5</p> */}
    </div>
  );
};

export default Loading;
