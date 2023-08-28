import { useEffect, useState } from "react";
import MemoStack from "../../components/games/MemoStack";
import Trivia from "../../components/games/Trivia";

import Loading from "../../components/loading/Loading";

const Games: React.FC = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return loading ? (
    <div className="h-screen justify-center  items-center">
      <Loading />
    </div>
  ) : (
    <div>
      <div className=" flex items-center h-screen justify-center">
        <MemoStack />
      </div>
      {/* <div className=" flex items-center h-screen justify-center">
        <Trivia />
      </div> */}
    </div>
  );
};

export default Games;
