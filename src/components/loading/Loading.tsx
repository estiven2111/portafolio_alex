import loading from "../../assets/loading/logoNFD.png";
import "./loading.css"

const Loading: React.FC = () => {
  return (
    <div className="container-loading">
      <img src={loading} alt="loading..."/>
      <p className="numero5">5</p>
    </div>
  );
};

export default Loading;
